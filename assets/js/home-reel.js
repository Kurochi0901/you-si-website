/**
 * home-reel.js —— 首頁首屏「黃昏酒桌」的互動
 *
 * 1. 快速選口味（.dusk-pick）：顯示該格款數；點了切到「用口味找酒」對應酒類並選好格子
 *    （沒有 JS 時 .dusk-pick 是普通連結，會到分類頁）
 * 2. 本月精選輪盤（#duskStage）：酒款連結由 node build.js 依 priority 5 寫成靜態 HTML，
 *    這裡只負責排列、拖曳／滑動、自動慢轉（可暫停；系統「減少動態效果」時不自動轉）、
 *    說明列與「加入購物車」（呼叫 main.js 的 addToCart）
 *
 * 資料：catalog.js 的 products / FLAVOR_WORDS（與 home-taste.js 同一份）
 */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "complete") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  // 等 home-taste.js 先把座標格子畫好（同樣在 DOMContentLoaded 執行，排在它後面）
  ready(function () {
    setTimeout(function () {
      if (typeof products === "undefined") return;
      initPicks();
      initReel();
    }, 0);
  });

  /* ---------- 快速選口味 ---------- */
  function initPicks() {
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll(".dusk-pick").forEach(function (a) {
      var d = a.dataset;
      var n = products.filter(function (p) {
        return p.flavor && p.flavor[0] === d.fam && p.flavor[1] == d.x && p.flavor[2] == d.y;
      }).length;
      var countEl = a.querySelector("[data-pick-count]");
      if (countEl && n) countEl.textContent = n + " 款";

      a.addEventListener("click", function (e) {
        var title = document.getElementById("homeTasteTitle");
        var tab = document.querySelector('.home-taste-tab[data-fam="' + d.fam + '"]');
        if (!title || !tab) return; // 座標不存在 → 照常走連結到分類頁
        e.preventDefault();
        tab.click();
        var cell = document.querySelector('.home-map-cell[data-x="' + d.x + '"][data-y="' + d.y + '"]');
        if (cell) cell.click();
        // 桌面：座標與結果並排，捲到區塊標題；手機：座標佔滿一屏，直接捲到下方的酒款結果
        var result = document.querySelector(".home-taste-result");
        var target = matchMedia("(max-width: 860px)").matches && result ? result : title;
        target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        // 焦點跟著移到口味說明：鍵盤使用者接著按 Tab 會往下到結果，不會跳回首屏
        var status = document.getElementById("homeTasteStatus");
        if (status) status.focus({ preventScroll: true });
      });
    });
  }

  /* ---------- 本月精選輪盤 ---------- */
  function initReel() {
    var stage = document.getElementById("duskStage");
    var reel = stage && stage.closest(".dusk-reel");
    if (!reel) return;

    var byId = {};
    products.forEach(function (p) { byId[p.id] = p; });
    var els = [].slice.call(stage.querySelectorAll(".dusk-item"));
    var items = els.map(function (el) { return byId[el.dataset.id]; });
    if (items.length < 3 || items.some(function (p) { return !p; })) return; // 資料對不上就維持靜態列表

    var mq = matchMedia("(max-width: 860px)");
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var n = items.length, cur = 0, drag = null, timer = null, paused = false, userPaused = false;
    var cap = document.getElementById("duskCap");
    var nameLink = cap.querySelector(".dusk-cap-name");
    var flavorEl = cap.querySelector(".dusk-cap-flavor");
    var priceEl = cap.querySelector(".dusk-cap-price");
    var addBtn = cap.querySelector(".dusk-cap-add");
    var bar = reel.querySelector(".dusk-reel-bar");
    var pauseBtn = reel.querySelector(".dusk-reel-pause");
    // 位置感：「29 支」（靜態 HTML，給沒有 JS 與搜尋引擎）換成「3 / 29」
    var posEl = reel.querySelector(".dusk-reel-count");
    if (posEl) posEl.setAttribute("aria-hidden", "true"); // 報讀已由說明列品名播報，不重複念數字

    function flavor(p) {
      var f = p.flavor, W = typeof FLAVOR_WORDS !== "undefined" && f && FLAVOR_WORDS[f[0]];
      return W ? W.x[f[1] - 1] + "，" + W.y[f[2] - 1] : (p.spec || "");
    }
    function step() { return mq.matches ? 74 : 122; }
    function wrap(d) { d = ((d % n) + n) % n; return d > n / 2 ? d - n : d; }

    /**
     * 排列酒款。
     * dragging=true（手指拖曳中，每個影格呼叫）：只寫畫面附近幾支的 transform／opacity，
     *   不碰 class、tabIndex、aria —— 這些會觸發整頁樣式重算，是手機拖曳卡頓的主因。
     * dragging=false（停下來時）：完整更新所有狀態，並預先載入左右各 4 支的圖，拖的時候不會臨時下載。
     */
    var shown = {}; // 上一次排列時看得到的酒（index → true）
    function layout(offset, dragging) {
      var s = step(), small = mq.matches;
      var limit = small ? 2.3 : 2.6; // 手機只留中間＋兩側，遠處更快淡出
      var nextShown = {};
      els.forEach(function (el, i) {
        var d = wrap(i - cur) - (offset || 0);
        var a = Math.abs(d);
        var vis = a < limit;
        if (vis) nextShown[i] = true;
        if (dragging && !vis && !shown[i]) return; // 一直在畫面外的酒，拖曳時完全不碰

        if (!dragging && a < 4.5) {
          var im = el.firstElementChild;
          if (im && !im.getAttribute("src") && im.dataset.src) { im.loading = "eager"; im.src = im.dataset.src; }
        }
        var sc = Math.max(0.56, 1 - a * 0.16);
        el.style.transform = "translate3d(" + (d * s).toFixed(1) + "px," + (a * a * 4).toFixed(1) + "px,0) rotate(" + (d * 5).toFixed(2) + "deg) scale(" + sc.toFixed(3) + ")";
        el.style.opacity = vis ? String(Math.max(0, 1 - a * (small ? 0.34 : 0.22)).toFixed(3)) : "0";
        el.style.zIndex = String(100 - Math.round(a * 10));
        if (dragging) return;

        el.style.pointerEvents = vis ? "" : "none";
        var center = Math.round(a * 100) === 0;
        el.classList.toggle("is-center", center);
        // 圖片連結一律不放進 Tab 順序：中間那支的商品頁連結由下方說明列的品名提供，避免同一商品兩個停點
        el.tabIndex = -1;
        el.setAttribute("aria-hidden", "true");
      });
      shown = nextShown;
    }
    function caption() {
      var p = items[cur];
      nameLink.href = els[cur].getAttribute("href");
      nameLink.textContent = p.name;
      flavorEl.textContent = flavor(p);
      priceEl.textContent = "NT$" + p.price.toLocaleString("en-US");
      // 按鈕綁定「畫面上寫的這一支」：就算按下去的瞬間輪盤剛好轉走，加進去的仍是說明列上的酒
      addBtn.dataset.id = p.id;
      addBtn.setAttribute("aria-label", "加入購物車：" + p.name);
      if (posEl) posEl.textContent = (cur + 1) + " / " + n;
    }
    function go(to, byUser) {
      cur = ((to % n) + n) % n;
      nameLink.setAttribute("aria-live", byUser ? "polite" : "off"); // 自動轉時不打擾螢幕報讀
      layout(0);
      caption();
    }

    function play() {
      clearInterval(timer);
      if (reduce || paused || userPaused || document.hidden) return;
      timer = setInterval(function () { go(cur + 1, false); }, 3600);
    }
    function hold(on) { paused = on; if (on) clearInterval(timer); else play(); }
    function setUserPaused(on) {
      userPaused = on;
      pauseBtn.setAttribute("aria-pressed", String(on));
      pauseBtn.setAttribute("aria-label", on ? "繼續輪播" : "暫停輪播");
      play();
    }
    // 客人一碰輪盤（手指、滑鼠按下、方向鍵、上一支／下一支）就代表在挑了：
    // 自動轉從此停住，不會在按「加入購物車」的瞬間把酒換掉。想再看自動轉，按右上角的播放鍵
    function engage() { if (!userPaused) setUserPaused(true); }

    addBtn.addEventListener("click", function () {
      var id = +addBtn.dataset.id || items[cur].id;
      if (typeof addToCart === "function") addToCart(id);
    });
    // 捕獲階段：比按鈕自己的 click 更早，先把自動轉停下來。
    // 酒款舞台本身例外：手指可能只是經過、要上下捲頁面，等判定成左右拖曳或點酒時才算數
    reel.addEventListener("pointerdown", function (e) {
      if (!pauseBtn.contains(e.target) && !stage.contains(e.target)) engage();
    }, true);
    reel.addEventListener("mouseenter", function () { hold(true); });
    reel.addEventListener("mouseleave", function () { hold(false); });
    reel.addEventListener("focusin", function () { hold(true); });
    reel.addEventListener("focusout", function (e) { if (!reel.contains(e.relatedTarget)) hold(false); });
    document.addEventListener("visibilitychange", play);

    pauseBtn.addEventListener("click", function () { setUserPaused(!userPaused); });
    reel.querySelector('[data-reel="prev"]').addEventListener("click", function () { engage(); go(cur - 1, true); });
    reel.querySelector('[data-reel="next"]').addEventListener("click", function () { engage(); go(cur + 1, true); });
    reel.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); engage(); go(cur - 1, true); }
      if (e.key === "ArrowRight") { e.preventDefault(); engage(); go(cur + 1, true); }
    });

    /* 拖曳／手指滑動：跟手移動，放開後吸附到最近的一支 */
    stage.addEventListener("pointerdown", function (e) {
      if (e.button !== 0) return;
      drag = { x: e.clientX, y: e.clientY, dx: 0, moved: false, id: e.pointerId, t: performance.now(), vx: 0, lastX: e.clientX, lastT: performance.now() };
      hold(true);
    });
    var raf = 0;
    stage.addEventListener("pointermove", function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      drag.dx = e.clientX - drag.x;
      var dy = e.clientY - drag.y;
      // 方向鎖定：先判定是上下捲動，就整段手勢都交給頁面捲動，輪盤不跟著動
      if (!drag.moved && Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(drag.dx)) {
        drag = null;
        if (e.pointerType !== "mouse") hold(false);
        return;
      }
      var now = performance.now();
      if (now > drag.lastT) { drag.vx = (e.clientX - drag.lastX) / (now - drag.lastT); drag.lastX = e.clientX; drag.lastT = now; }
      if (!drag.moved && Math.abs(drag.dx) > 6 && Math.abs(drag.dx) > Math.abs(dy)) {
        drag.moved = true;
        engage();
        try { stage.setPointerCapture(e.pointerId); } catch (err) { /* 指標已不存在時略過，不中斷拖曳 */ }
        reel.classList.add("is-dragging");
      }
      // 每個影格最多排一次（pointermove 在高更新率手機上一個影格會來好幾次）
      if (drag.moved && !raf) {
        raf = requestAnimationFrame(function () {
          raf = 0;
          if (drag && drag.moved) layout(-drag.dx / step(), true);
        });
      }
    });
    function end(e) {
      if (!drag || (e && e.pointerId !== drag.id)) return;
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      var moved = drag.moved, shift = Math.round(-drag.dx / step());
      // 快速撥一下：距離不到半支也換到下一支
      if (moved && shift === 0 && Math.abs(drag.vx) > 0.35) shift = drag.vx < 0 ? 1 : -1;
      reel.classList.remove("is-dragging");
      drag = moved ? { done: true } : null; // done：吃掉放開後那一下 click，避免拖完誤開商品頁
      if (moved) go(cur + shift, true);
      if (e && e.pointerType !== "mouse") hold(false);
    }
    stage.addEventListener("pointerup", end);
    stage.addEventListener("pointercancel", end);
    // 方向鎖定（另一半）：判定為左右拖曳後，擋掉這次觸控的頁面上下捲動，
    // 否則斜斜滑的時候輪盤在轉、整頁也在上下動。pointer 事件比 touch 事件先到，所以這裡看得到 drag.moved
    stage.addEventListener("touchmove", function (e) {
      if (drag && drag.moved && e.cancelable) e.preventDefault();
    }, { passive: false });
    stage.addEventListener("click", function (e) {
      var a = e.target.closest(".dusk-item");
      if (drag && drag.done) { e.preventDefault(); drag = null; return; }
      drag = null;
      if (a && !a.classList.contains("is-center")) { e.preventDefault(); engage(); go(+a.dataset.i, true); }
    });
    mq.addEventListener("change", function () { layout(0); });

    // 第一次排列不播動畫：避免載入時 29 支酒從靜態列表的位置一起「飛」到扇形
    reel.classList.add("is-live", "is-init");
    bar.hidden = false;
    pauseBtn.hidden = false;
    go(0, false);
    void stage.offsetWidth; // 先套用位置，再打開動畫
    requestAnimationFrame(function () { reel.classList.remove("is-init"); });
    play();
  }
})();
