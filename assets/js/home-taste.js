/**
 * home-taste.js —— 首頁「用口味找酒」＋ 酒類快捷列款數
 *
 * 資料：catalog.js 的 products[].flavor = [家族, X(1–5), Y(1–5)]，由 build.js 的 flavorPoint() 產生，
 *       與商品頁「風味座標」同一套換算。家族：sake 清酒、ft 果實酒與茶酒、wine 葡萄酒（烈酒沒有刻度）。
 * 卡片：沿用 main.js 的 renderGrid()，所以加入購物車、活動徽章都與其他頁一致。
 * 文字對照用 catalog.js 的 FLAVOR_WORDS（由 build.js 的 FLAVOR_FAMILIES 產生，改文字只改 build.js）。
 */
(function () {
  "use strict";

  // 文字對照：catalog.js 的 FLAVOR_WORDS（商品卡也用同一份）
  var FAMS = null;
  var FIRST_BATCH = 6;

  // ⚠️ 必須等 DOMContentLoaded：defer 腳本執行當下 readyState 已是 "interactive"，
  //    但 promotions.bridge.js（module）與 main.js 的初始化都還沒跑，立刻執行會拿不到活動資料
  function ready(fn) {
    if (document.readyState === "complete") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    if (typeof products === "undefined" || typeof FLAVOR_WORDS === "undefined") return;
    FAMS = FLAVOR_WORDS;
    fillCategoryCounts();
    initTaste();
  });

  /* ---------- 酒類快捷列款數 ---------- */
  function fillCategoryCounts() {
    var counts = {};
    products.forEach(function (p) { counts[p.category] = (counts[p.category] || 0) + 1; });
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var n = counts[el.getAttribute("data-count")];
      if (n) el.textContent = n + " 款";
    });
  }

  /* ---------- 用口味找酒 ---------- */
  function initTaste() {
    var plot = document.getElementById("homeTastePlot");
    var map = document.getElementById("homeTasteMap");
    var grid = document.getElementById("homeTasteGrid");
    var reading = document.getElementById("homeTasteReading");
    var countEl = document.getElementById("homeTasteCount");
    var moreBtn = document.getElementById("homeTasteMore");
    var tabs = [].slice.call(document.querySelectorAll(".home-taste-tab"));
    if (!plot || !grid || typeof renderGrid !== "function") return;

    var state = { fam: "sake", x: 3, y: 3, list: [] };

    function itemsOf(fam) {
      return products.filter(function (p) { return p.flavor && p.flavor[0] === fam; });
    }

    function byPriority(a, b) { return (b.priority || 0) - (a.priority || 0); }

    // 同一格多款：排成緊密方陣，從中心往外填（與商品頁 cellSlots 同邏輯，座標以「格」為 100%）
    // 5×5 以內間距 20%；超過 25 款時縮小間距，最多 7×7＝49 款
    function slots(count) {
      var n = Math.min(7, Math.max(1, Math.ceil(Math.sqrt(count))));
      var step = 100 / Math.max(n, 5);
      var mid = (n - 1) / 2, out = [];
      for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) {
        out.push({ dx: (c - mid) * step, dy: (r - mid) * step, d: Math.hypot(c - mid, r - mid) });
      }
      out.sort(function (a, b) { return a.d - b.d; });
      return out.slice(0, count);
    }

    function drawMap() {
      var fam = FAMS[state.fam];
      map.querySelectorAll("[data-ax]").forEach(function (el) {
        el.textContent = fam.axes[el.getAttribute("data-ax")];
      });

      var cells = {};
      itemsOf(state.fam).forEach(function (p) {
        var k = p.flavor[1] + "," + p.flavor[2];
        (cells[k] = cells[k] || []).push(p);
      });

      var html = "";
      for (var y = 5; y >= 1; y--) {
        for (var x = 1; x <= 5; x++) {
          var list = cells[x + "," + y] || [];
          var label = fam.x[x - 1] + "，" + fam.y[y - 1] + "，" + (list.length ? list.length + " 款" : "目前沒有酒款");
          var dots = slots(list.length).map(function (s) {
            return '<span class="home-map-dot" style="left:' + (50 + s.dx) + "%;top:" + (50 + s.dy) + '%"></span>';
          }).join("");
          html += '<button type="button" class="home-map-cell" data-x="' + x + '" data-y="' + y + '"' +
            ' style="left:' + (x - 1) * 20 + "%;top:" + (5 - y) * 20 + '%"' +
            ' aria-label="' + label + '" aria-pressed="false" tabindex="-1">' + dots + "</button>";
        }
      }
      plot.innerHTML = html;
    }

    function select(x, y, focus) {
      state.x = x; state.y = y;
      var fam = FAMS[state.fam];
      var all = itemsOf(state.fam);
      var exact = all.filter(function (p) { return p.flavor[1] === x && p.flavor[2] === y; });
      var list = exact, near = false;

      if (!exact.length && all.length) {
        var best = Infinity;
        all.forEach(function (p) {
          var d = Math.hypot(p.flavor[1] - x, p.flavor[2] - y);
          if (d < best) best = d;
        });
        list = all.filter(function (p) { return Math.hypot(p.flavor[1] - x, p.flavor[2] - y) === best; });
        near = true;
      }
      state.list = list.slice().sort(byPriority);

      plot.querySelectorAll(".home-map-cell").forEach(function (b) {
        var on = +b.dataset.x === x && +b.dataset.y === y;
        b.setAttribute("aria-pressed", on ? "true" : "false");
        b.tabIndex = on ? 0 : -1;
        if (on && focus) b.focus();
      });

      // 兩段各自不斷行，要換行就從逗號換（文字來自 FLAVOR_WORDS 常數，非使用者輸入）
      reading.innerHTML = '<span class="home-taste-part">' + fam.x[x - 1] + '，</span><span class="home-taste-part">' + fam.y[y - 1] + "</span>";
      countEl.textContent = near
        ? "這個位置還沒有酒款，以下是口味最接近的 " + list.length + " 款。"
        : "共 " + list.length + " 款";
      render(false);
    }

    function render(all) {
      var shown = all ? state.list : state.list.slice(0, FIRST_BATCH);
      // 這區在首屏以下：圖片一律延遲載入，避免和主視覺搶頻寬
      renderGrid(shown, "homeTasteGrid", { allLazy: true });
      var rest = state.list.length - shown.length;
      moreBtn.hidden = rest <= 0;
      if (rest > 0) moreBtn.textContent = "再顯示 " + rest + " 款";
    }

    function setFam(fam, focusTab) {
      state.fam = fam;
      tabs.forEach(function (t) {
        var on = t.dataset.fam === fam;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        if (on && focusTab) t.focus();
      });
      drawMap();
      // 預設停在款數最多的位置（同數量時取離中央最近者），一進來就有足夠的酒可看
      var tally = {}, best = { n: 0, x: 3, y: 3, d: Infinity };
      itemsOf(fam).forEach(function (p) {
        var k = p.flavor[1] + "," + p.flavor[2];
        var n = tally[k] = (tally[k] || 0) + 1;
        var d = Math.hypot(p.flavor[1] - 3, p.flavor[2] - 3);
        if (n > best.n || (n === best.n && d < best.d)) best = { n: n, x: p.flavor[1], y: p.flavor[2], d: d };
      });
      select(best.x, best.y, false);
    }

    // 手機：座標佔滿整個寬度，下方的酒款在畫面外，點了看不到變化 → 自動捲到結果
    // 只對使用者真的點擊（isTrusted）生效；首屏口味入口用程式點擊，捲動由 home-reel.js 自己處理
    var mqNarrow = matchMedia("(max-width: 860px)");
    var reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
    var result = grid.closest(".home-taste-result") || grid;
    function revealResult() {
      result.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    }

    plot.addEventListener("click", function (e) {
      var b = e.target.closest(".home-map-cell");
      if (!b) return;
      select(+b.dataset.x, +b.dataset.y, false);
      if (e.isTrusted && mqNarrow.matches) revealResult();
    });

    // 方向鍵在座標上移動（roving tabindex：整張座標只佔一個 Tab 停點）
    plot.addEventListener("keydown", function (e) {
      var d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key];
      if (!d) return;
      e.preventDefault();
      var nx = Math.min(5, Math.max(1, state.x + d[0]));
      var ny = Math.min(5, Math.max(1, state.y + d[1]));
      select(nx, ny, true);
    });

    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { setFam(t.dataset.fam, false); });
      t.addEventListener("keydown", function (e) {
        var step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!step) return;
        e.preventDefault();
        setFam(tabs[(i + step + tabs.length) % tabs.length].dataset.fam, true);
      });
    });

    moreBtn.addEventListener("click", function () {
      render(true);
      var cards = grid.children;
      var first = cards[FIRST_BATCH] && cards[FIRST_BATCH].querySelector("a");
      if (first) first.focus();
    });

    setFam("sake", false);
  }
})();
