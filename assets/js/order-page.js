/**
 * order-page.js —— 下單頁（/order/）的版面互動
 *
 * 只負責「送出前」的體驗：即時欄位驗證、取貨方式卡片、草稿暫存、空車狀態、金額同步顯示。
 * 送單本身仍由 main.js 的 submitOrder() 處理（禁止修改等級）：本檔驗證通過後才呼叫它，
 * 因此 submitOrder() 內的 alert 驗證只會在極端情況（例如 JS 被改動）才出現，作為最後防線。
 *
 * 依賴 main.js 的全域函式：readCart、getOrderPricing、getSelectedShipTemp、isValidPhone、isValidEmail、
 *                         renderFreeShipProgress、submitOrder、BRAND
 */
(function () {
  "use strict";

  // sessionStorage：只在這個分頁有效、關閉分頁即清除；送出成功後也會清掉
  var DRAFT_KEY = "order_draft_v1";
  var TEXT_FIELDS = ["order-name", "order-phone", "order-email", "order-address", "order-note"];

  function $(id) { return document.getElementById(id); }

  // ⚠️ 必須等 DOMContentLoaded：defer 腳本執行當下 readyState 已是 "interactive"，
  //    但 promotions.bridge.js（module）與 main.js 的初始化都還沒跑，立刻執行會拿不到活動資料
  function ready(fn) {
    if (document.readyState === "complete") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    if (typeof readCart !== "function" || !$("orderForm")) return;
    init();
  });

  function init() {
    var pickupSel = $("order-pickup");
    var pickupRadios = [].slice.call(document.querySelectorAll('input[name="pickupChoice"]'));
    var submitBtn = $("orderSubmitBtn");
    var summaryBox = $("orderSummaryBox");
    var submitted = false;
    var mobile = window.matchMedia("(max-width: 860px)");

    /* ---------- 草稿暫存 ---------- */
    function loadDraft() {
      try { return JSON.parse(sessionStorage.getItem(DRAFT_KEY) || "{}") || {}; } catch (e) { return {}; }
    }
    function saveDraft() {
      var d = {};
      TEXT_FIELDS.forEach(function (id) { if ($(id)) d[id] = $(id).value; });
      d.pickup = pickupSel.value;
      var t = document.querySelector('input[name="shipTemp"]:checked');
      d.shipTemp = t ? t.value : "常溫";
      try { sessionStorage.setItem(DRAFT_KEY, JSON.stringify(d)); } catch (e) { /* 無痕模式等情況可忽略 */ }
    }
    function clearDraft() {
      try { sessionStorage.removeItem(DRAFT_KEY); } catch (e) { /* ignore */ }
    }

    var draft = loadDraft();
    TEXT_FIELDS.forEach(function (id) { if (draft[id] && $(id)) $(id).value = draft[id]; });
    if (draft.pickup === "自取" || draft.pickup === "郵寄") pickupSel.value = draft.pickup;
    if (draft.shipTemp) {
      var savedTemp = document.querySelector('input[name="shipTemp"][value="' + draft.shipTemp + '"]');
      if (savedTemp) savedTemp.checked = true;
    }

    /* ---------- 取貨方式卡片 ⇄ #order-pickup ---------- */
    function syncRadiosFromSelect() {
      pickupRadios.forEach(function (r) { r.checked = r.value === pickupSel.value; });
    }
    pickupRadios.forEach(function (r) {
      r.addEventListener("change", function () {
        if (!r.checked) return;
        pickupSel.value = r.value;
        // bindOrderPickup()（main.js）監聽這個 change：切換地址欄、溫層、重算金額
        pickupSel.dispatchEvent(new Event("change"));
        if (r.value !== "郵寄") setError("order-address", "");
        saveDraft();
      });
    });
    syncRadiosFromSelect();
    pickupSel.dispatchEvent(new Event("change"));

    document.querySelectorAll('input[name="shipTemp"]').forEach(function (r) {
      r.addEventListener("change", saveDraft);
    });

    /* ---------- 欄位驗證 ---------- */
    var RULES = {
      "order-name": function (v) { return v ? "" : "請填寫姓名"; },
      "order-phone": function (v) {
        if (!v) return "請填寫電話";
        return isValidPhone(v) ? "" : "電話格式不正確，例如 0912345678 或 03-5551234";
      },
      "order-email": function (v) {
        if (!v) return "請填寫 Email";
        return isValidEmail(v) ? "" : "Email 格式不正確，例如 you@example.com";
      },
      "order-address": function (v) {
        if (pickupSel.value !== "郵寄") return "";
        return v ? "" : "選擇宅配時，請填寫收件地址";
      }
    };

    function errId(id) { return "err-" + id.replace("order-", ""); }

    function setError(id, msg) {
      var input = $(id), err = $(errId(id));
      if (!input) return;
      if (err) err.textContent = msg;
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      var field = input.closest(".order-field");
      if (field) field.classList.toggle("is-invalid", !!msg);
    }

    function check(id) {
      var input = $(id);
      if (!input || !RULES[id]) return "";
      var msg = RULES[id](input.value.trim());
      setError(id, msg);
      return msg;
    }

    Object.keys(RULES).forEach(function (id) {
      var input = $(id);
      if (!input) return;
      // 離開欄位時才檢查（避免邊打邊跳錯誤）；已經標錯的欄位，修正到對就立刻消失
      input.addEventListener("blur", function () { if (input.value.trim()) check(id); });
      input.addEventListener("input", function () {
        if (input.getAttribute("aria-invalid") === "true") check(id);
        $("err-submit").textContent = "";
      });
    });
    TEXT_FIELDS.forEach(function (id) {
      if ($(id)) $(id).addEventListener("input", saveDraft);
    });

    /* ---------- 金額、摘要、空車狀態 ---------- */
    function cartCount() {
      return readCart().reduce(function (s, p) { return s + (p.qty || 0); }, 0);
    }

    // 與 submitOrder() 組詢問單時用同一個計價函式，畫面金額與送出的金額一定一致
    function pricing() {
      var pickup = pickupSel.value;
      return getOrderPricing(pickup, pickup === "郵寄" ? getSelectedShipTemp() : "常溫");
    }

    function refresh() {
      var count = cartCount();
      var price = count ? pricing() : null;
      var total = price ? "NT$" + Number(price.total).toLocaleString("en-US") : "—";

      $("orderPayTotal").textContent = total;
      $("orderSummaryPeek").textContent = count ? count + " 件　" + total : "";

      // 宅配才需要免運進度；自取本來就不收運費
      var ship = $("orderShipProgress");
      if (ship && typeof renderFreeShipProgress === "function") {
        renderFreeShipProgress(ship, count && pickupSel.value === "郵寄" ? price.itemsTotal : null);
      }

      // 清酒在購物車裡、又選了宅配常溫 → 提醒冷藏
      var hasSake = readCart().some(function (p) { return p.category === "sake" || p.type === "清酒"; });
      var advice = $("shipTempAdvice");
      if (advice) advice.hidden = !hasSake;

      var empty = count === 0;
      $("orderLayout").hidden = empty;
      $("orderEmpty").hidden = !empty;
      if (empty) showEmptyState(submitted);
    }

    function showEmptyState(afterSubmit) {
      var box = $("orderEmpty");
      if (afterSubmit) {
        var lineUrl = (typeof BRAND !== "undefined" && BRAND.lineUrl) || "https://line.me/ti/p/@008jcfgc";
        box.innerHTML =
          '<h2 class="order-empty-title" id="orderEmptyTitle">詢問單已送出</h2>' +
          "<p>記得到 LINE 貼上詢問單，專人收到後才會開始確認。</p>" +
          '<div class="order-empty-actions">' +
          '<a class="order-btn order-btn--primary" href="' + lineUrl + '" target="_blank" rel="noopener">前往 LINE 貼上</a>' +
          '<a class="order-btn" href="/">回首頁</a>' +
          "</div>";
        var steps = document.querySelectorAll(".order-progress li");
        steps.forEach(function (li, i) {
          var on = i === 1;
          li.classList.toggle("is-current", on);
          li.classList.toggle("is-done", i === 0);
          if (on) li.setAttribute("aria-current", "step"); else li.removeAttribute("aria-current");
        });
      }
    }

    // renderCartMini()（main.js）每次重繪 #cartMini 後同步更新
    new MutationObserver(refresh).observe($("cartMini"), { childList: true, subtree: true });
    pickupSel.addEventListener("change", refresh);
    refresh();

    /* ---------- 桌機：右側摘要的黏住位置 ----------
       摘要比視窗矮 → 黏在 header 下方；比視窗高 → 先跟著頁面捲，捲到摘要底部進入畫面才黏住，
       內容不會被切掉（原本固定 top 時，矮螢幕看不到折扣碼與底部按鈕）。 */
    var aside = document.querySelector(".order-summary");
    var GAP = 24;
    function headerBottom() {
      var h = 0;
      var header = document.querySelector(".header-wrap");
      if (header) h += header.offsetHeight;
      var bar = document.getElementById("announceBar");
      if (bar && document.documentElement.classList.contains("show-announce")) h += bar.offsetHeight;
      return h;
    }
    function updateStickyTop() {
      if (!aside) return;
      if (mobile.matches) { aside.style.top = ""; return; }
      var base = headerBottom() + GAP;
      var fit = aside.offsetHeight + base + GAP <= window.innerHeight;
      aside.style.top = (fit ? base : window.innerHeight - aside.offsetHeight - GAP) + "px";
    }
    if (window.ResizeObserver && aside) new ResizeObserver(updateStickyTop).observe(aside);
    window.addEventListener("resize", updateStickyTop);
    updateStickyTop();

    /* ---------- 手機：摘要預設收合，只顯示件數與金額 ---------- */
    function applySummaryMode() { summaryBox.open = !mobile.matches; updateStickyTop(); }
    applySummaryMode();
    if (mobile.addEventListener) mobile.addEventListener("change", applySummaryMode);
    summaryBox.querySelector("summary").addEventListener("click", function (e) {
      if (!mobile.matches) e.preventDefault(); // 桌機永遠展開
    });

    /* ---------- 送出後 Modal：複製失敗時要能看到並選取詢問單文字 ---------- */
    var doneDetail = document.querySelector(".order-done-detail");
    var modal = $("orderSuccessModal");
    function openDetailIfCopyFailed() {
      var status = modal && modal.querySelector("[data-role='copyStatus']");
      if (doneDetail && status && status.classList.contains("is-fail")) doneDetail.open = true;
    }
    if (modal) {
      // 捕獲階段：在「再次複製」的 inline onclick 之前展開，讓失敗時的 select() 選得到文字
      modal.addEventListener("click", function (e) {
        if (e.target.closest(".order-done-recopy") && doneDetail) doneDetail.open = true;
      }, true);
    }

    /* ---------- 在欄位按 Enter（手機鍵盤的「前往」）＝按送出 ----------
       用 click() 觸發，submitOrder() 內的 window.event.target 才會是送出按鈕 */
    $("orderForm").addEventListener("keydown", function (e) {
      if (e.key !== "Enter" || e.isComposing || e.keyCode === 229) return; // 注音／倉頡選字中的 Enter 不算
      var t = e.target;
      if (!t.matches || !t.matches('input[type="text"], input[type="tel"], input[type="email"]')) return;
      e.preventDefault();
      submitBtn.click();
    });

    /* ---------- 送出 ---------- */
    submitBtn.addEventListener("click", function () {
      var submitErr = $("err-submit");
      submitErr.textContent = "";

      if (cartCount() === 0) { refresh(); return; }

      var bad = Object.keys(RULES).filter(function (id) { return check(id); });
      if (bad.length) {
        submitErr.textContent = bad.length === 1
          ? "有 1 個欄位需要修正"
          : "有 " + bad.length + " 個欄位需要修正";
        var first = $(bad[0]);
        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        first.focus({ preventScroll: true });
        first.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
        return;
      }

      // 同步呼叫：submitOrder() 內用 window.event 取得按鈕並暫時停用，必須在 click 事件當下呼叫
      submitBtn.setAttribute("aria-busy", "true");
      submitBtn.textContent = "送出中…";
      Promise.resolve(submitOrder()).then(function () {
        openDetailIfCopyFailed();
        if (cartCount() === 0) {
          submitted = true;
          clearDraft();
          refresh();
        }
      }).finally(function () {
        submitBtn.removeAttribute("aria-busy");
        submitBtn.textContent = "送出詢問單";
      });
    });
  }
})();
