/**
 * product-page.js —— 商品頁（由 build.js generateHTML 產生）的互動
 *
 * 1. 相簿：縮圖按鈕、‹ ›、手機左右滑動、張數「2 / 4」
 * 2. 放大：<dialog id="pdpZoom">（Esc、關閉鈕、點背景都能關，焦點會回到放大按鈕）
 * 3. 風味座標：互動單位是「格」——點一格（或方向鍵＋Enter）在座標下方列出這一格的酒；
 *    整張座標只佔 1 個 Tab 停點（roving tabindex）。本款墨暈在座標捲進畫面時才播
 * 4. 加入購物車後的狀態：「已加入 N 件・購物車 NT$…・宅配再買 NT$… 免運　前往填寫詢問單 →」
 * 5. 桌面：頁內「加入購物車」捲出畫面後出現精簡購買列（#pdpDock）
 *
 * 圖片清單：頁面內 <script type="application/json" id="pdpImgs">
 * 購物車、LINE 連結、手機底部列由 main.js 負責
 */
(function () {
  "use strict";

  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function fmt(n) { return "NT$" + Number(n).toLocaleString("en-US"); }

  /* ---------- 相簿 ---------- */
  var imgs = [];
  try { imgs = JSON.parse(document.getElementById("pdpImgs").textContent) || []; } catch (e) { imgs = []; }
  var mainImg = document.getElementById("pdpMainImg");
  var frame = document.querySelector(".pdp-img-main");
  var thumbs = [].slice.call(document.querySelectorAll(".pdp-thumb"));
  var countEl = document.querySelector(".pdp-img-count");
  var idx = 0;

  function show(i) {
    if (!imgs.length || !mainImg) return;
    idx = (i + imgs.length) % imgs.length;
    mainImg.src = imgs[idx];
    thumbs.forEach(function (t, k) {
      var on = k === idx;
      t.classList.toggle("active", on);
      if (on) t.setAttribute("aria-current", "true"); else t.removeAttribute("aria-current");
    });
    if (countEl) countEl.textContent = (idx + 1) + " / " + imgs.length;
  }

  thumbs.forEach(function (t) {
    t.addEventListener("click", function () { show(+t.dataset.i); });
  });
  document.querySelectorAll("[data-gallery]").forEach(function (b) {
    b.addEventListener("click", function () { show(idx + (b.dataset.gallery === "next" ? 1 : -1)); });
  });

  // 手機左右滑動換張（縮圖列在手機收起來，靠滑動與 ‹ ›）
  var swipe = null, swiped = false;
  if (frame && imgs.length > 1) {
    frame.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse") return;
      swipe = { x: e.clientX, y: e.clientY };
      swiped = false;
    });
    frame.addEventListener("pointerup", function (e) {
      if (!swipe) return;
      var dx = e.clientX - swipe.x, dy = e.clientY - swipe.y;
      swipe = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        swiped = true;
        show(idx + (dx < 0 ? 1 : -1));
      }
    });
    frame.addEventListener("pointercancel", function () { swipe = null; });
  }

  /* ---------- 放大 ---------- */
  var zoomBtn = document.querySelector(".pdp-zoom");
  var dlg = document.getElementById("pdpZoom");
  var zoomImg = document.getElementById("pdpZoomImg");
  if (zoomBtn && dlg && zoomImg && typeof dlg.showModal === "function") {
    zoomBtn.addEventListener("click", function () {
      if (swiped) { swiped = false; return; } // 剛滑完不要順便打開放大
      zoomImg.src = mainImg ? mainImg.src : "";
      dlg.showModal();
      document.documentElement.classList.add("pdp-zoom-open");
    });
    dlg.querySelector(".pdp-zoom-close").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); }); // 點圖片以外的背景
    dlg.addEventListener("close", function () {
      document.documentElement.classList.remove("pdp-zoom-open");
      zoomBtn.focus();
    });
  } else if (zoomBtn) {
    zoomBtn.hidden = true; // 舊瀏覽器沒有 <dialog>：不提供放大，也不留一顆按不動的按鈕
  }

  /* ---------- 風味座標：以格為單位 ---------- */
  var map = document.querySelector(".pdp-map");
  if (map && "IntersectionObserver" in window) {
    // 本款的墨暈：座標捲進畫面時才播一次
    var seen = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { map.classList.add("is-seen"); seen.disconnect(); }
    }, { threshold: 0.6 });
    seen.observe(map);
  }

  var cells = [].slice.call(document.querySelectorAll(".pdp-map-cell"));
  var lists = document.getElementById("pdpMapLists");
  function cellXY(c) { var v = c.dataset.cell.split(","); return { x: +v[0], y: +v[1] }; }
  function selectCell(cell) {
    cells.forEach(function (c) {
      var on = c === cell;
      c.setAttribute("aria-pressed", String(on));
      c.classList.toggle("is-picked", on);
      c.tabIndex = on ? 0 : -1;
    });
    [].forEach.call(lists.querySelectorAll(".pdp-map-list"), function (l) {
      l.hidden = l.dataset.cell !== cell.dataset.cell;
    });
    // 手機上清單在圖的下方，可能被底部固定列擋住：捲到看得見（CSS 有 scroll-margin 讓出底部列）
    var shown = lists.querySelector('.pdp-map-list[data-cell="' + cell.dataset.cell + '"]');
    if (shown) shown.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
  }
  // 方向鍵：往該方向找最近的有酒格子（同方向上距離最短，偏離軸線的多加權）
  function neighbor(from, dx, dy) {
    var a = cellXY(from), best = null, bestScore = Infinity;
    cells.forEach(function (c) {
      if (c === from) return;
      var b = cellXY(c), mx = b.x - a.x, my = b.y - a.y;
      var along = dx ? mx * dx : my * dy, across = dx ? Math.abs(my) : Math.abs(mx);
      if (along <= 0) return;
      var score = along + across * 2;
      if (score < bestScore) { bestScore = score; best = c; }
    });
    return best;
  }
  if (cells.length && lists) {
    cells.forEach(function (cell) {
      cell.addEventListener("click", function () { selectCell(cell); });
      cell.addEventListener("keydown", function (e) {
        var dir = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key];
        if (!dir) return;
        e.preventDefault();
        var next = neighbor(cell, dir[0], dir[1]);
        if (!next) return;
        cells.forEach(function (c) { c.tabIndex = c === next ? 0 : -1; });
        next.focus();
      });
    });
    lists.addEventListener("click", function (e) {
      var more = e.target.closest(".pdp-map-more");
      if (!more) return;
      var list = more.closest(".pdp-map-list");
      list.classList.add("is-all");
      more.remove();
      var fifth = list.querySelectorAll("li a")[4];
      if (fifth) fifth.focus(); // 焦點移到剛展開的第一支
    });
  }

  /* ---------- 加入購物車後的狀態 ---------- */
  var cartBtn = document.querySelector(".pdp-btn-cart[data-pid]");
  var pid = cartBtn ? Number(cartBtn.dataset.pid) : 0;
  var isPre = cartBtn && cartBtn.dataset.label === "加入預購";
  var added = document.getElementById("pdpAdded");
  var dock = document.getElementById("pdpDock");
  var dockState = dock && dock.querySelector(".pdp-dock-state");

  function renderAdded() {
    if (!cartBtn || typeof readCart !== "function") return;
    var cart = readCart();
    var mine = cart.filter(function (x) { return x.id === pid; })[0];
    var total = typeof applyPromotions === "function" && typeof getCartContext === "function"
      ? applyPromotions(getCartContext()).finalTotal
      : cart.reduce(function (s, x) { return s + x.price * x.qty; }, 0);
    var ship = typeof freeShipText === "function" ? "・" + freeShipText(total) : "";

    if (dockState) dockState.textContent = mine ? (isPre ? "已加入預購 " : "已加入 ") + mine.qty + " 件" : "";
    if (!added) return;
    if (!mine) { added.hidden = true; added.textContent = ""; return; }
    added.innerHTML = "";
    var text = document.createElement("span");
    text.textContent = (isPre ? "已加入預購 " : "已加入 ") + mine.qty + " 件・購物車 " + fmt(total) + ship;
    var go = document.createElement("a");
    go.href = "/order/";
    go.textContent = "前往填寫詢問單";
    added.append(text, go);
    added.hidden = false;
  }
  document.addEventListener("cart:updated", renderAdded);
  renderAdded();

  /* ---------- 桌面精簡購買列 ---------- */
  var cta = document.querySelector(".pdp-cta");
  var wide = matchMedia("(min-width: 861px)");
  if (dock && cta && "IntersectionObserver" in window) {
    dock.hidden = false;
    var ctaAway = false;
    var syncDock = function () { dock.classList.toggle("is-on", ctaAway && wide.matches); };
    // 頁內按鈕不在畫面上就出現：捲過頭、或矮螢幕剛落地時按鈕還在第一屏下方（酒款介紹在價格上方）
    // 上方扣掉 sticky 頁首，下方扣掉警語列＋這條購買列本身
    new IntersectionObserver(function (entries) {
      ctaAway = !entries[0].isIntersecting;
      syncDock();
    }, { rootMargin: "-100px 0px -110px 0px" }).observe(cta);
    wide.addEventListener("change", syncDock);
  }

})();
