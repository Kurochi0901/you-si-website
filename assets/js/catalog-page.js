/**
 * catalog-page.js —— 商品列表頁（/products/ 與五個分類頁）的版面互動
 *
 * 版面：分類分頁 → 工具列（搜尋／口味／預算／排序）→ 店主挑好的兩排（店長精選、活動中）
 *       → 依酒造分章（總覽頁依酒類分章），左欄酒造目錄會跟著捲動標示目前章節。
 *       有搜尋或篩選條件時，改成一整片「符合條件」的結果格線。
 *
 * 靜態卡 #productGrid 由 build.js 注入（SEO／JS 失效時的備援），本檔成功產生章節後才把它藏起來。
 * 依賴 catalog.js：products、FLAVOR_WORDS（含 brand／origin 欄位）
 * 依賴 main.js：renderGrid、getPriority、isPromoLive
 */
(function () {
  "use strict";

  var CATS = [
    { key: "fruit-tea", name: "茶酒與果實酒", path: "/products/fruit-tea/" },
    { key: "sake",      name: "日本清酒",     path: "/products/sake/" },
    { key: "wine",      name: "葡萄酒",       path: "/products/wine/" },
    { key: "spirits",   name: "烈酒",         path: "/products/spirits/" },
    { key: "mini",      name: "小罐專區",     path: "/products/mini/" }
  ];
  // 舊網址 ?cat=（main.js groupOf 的值）→ 分類頁
  var LEGACY_CAT = { sake: "sake", fruittea: "fruit-tea", wine: "wine", spirits: "spirits", mini: "mini" };

  // 口味兩軸各分三段（1–2／3／4–5），文字跟風味座標同一套說法
  var FLAVOR_UI = {
    sake: { x: { legend: "甘辛", opts: ["偏辛口", "甘辛適中", "偏甘口"] }, y: { legend: "香氣", opts: ["偏米旨", "均衡", "偏果香"] } },
    ft:   { x: { legend: "酸甜", opts: ["偏酸", "酸甜均衡", "偏甜"] },     y: { legend: "口感", opts: ["清爽", "適中", "濃郁"] } },
    wine: { x: { legend: "單寧", opts: ["輕盈", "適中", "強烈"] },         y: { legend: "酒體", opts: ["清爽", "適中", "厚實"] } }
  };
  var FAM_OF_CAT = { sake: "sake", "fruit-tea": "ft", wine: "wine" };

  var BUDGETS = [
    { id: "",     label: "預算：全部" },
    { id: "0-1000",    label: "NT$1,000 以下",     min: 0,    max: 1000 },
    { id: "1000-2000", label: "NT$1,000–2,000",    min: 1000, max: 2000 },
    { id: "2000-3000", label: "NT$2,000–3,000",    min: 2000, max: 3000 },
    { id: "3000-",     label: "NT$3,000 以上",     min: 3000, max: Infinity }
  ];

  var MORE_BREWERIES = "更多酒造";
  var ALL_PAGE_CHAPTER_MAX = 10; // 總覽頁每類先列幾款，其餘到分類頁看

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmt(n) { return Number(n).toLocaleString("en-US"); }

  // 同一酒造的異體字與簡稱共用名稱，避免目錄與款數被拆開。
  function normalizeBrand(brand) {
    var name = String(brand || "").trim().replace(/関谷/g, "關谷");
    return name === "本坊" ? "本坊酒造" : name;
  }

  function searchText(value) {
    return String(value || "").toLowerCase().replace(/関谷/g, "關谷");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.querySelector("[data-catalog]");
    if (!root || typeof products === "undefined" || typeof renderGrid !== "function") return;
    try { init(root); } catch (e) { console.warn("catalog page init failed:", e); }
  });

  function init(root) {
    var scope = root.getAttribute("data-catalog"); // "all" 或分類 key
    var params = new URLSearchParams(location.search);

    // 總覽頁的舊參數 ?cat= → 直接到分類頁（保留其他條件）
    if (scope === "all" && LEGACY_CAT[params.get("cat")]) {
      var target = CATS.filter(function (c) { return c.key === LEGACY_CAT[params.get("cat")]; })[0];
      params.delete("cat");
      var qs = params.toString();
      location.replace(target.path + (qs ? "?" + qs : ""));
      return;
    }

    var all = products.slice();
    var pool = scope === "all" ? all : all.filter(function (p) { return p.category === scope; });
    var fam = FAM_OF_CAT[scope];
    var flavorUI = fam && FLAVOR_UI[fam];

    var els = {
      tabs: $("catalogTabs"), q: $("catalogQ"), budget: $("catalogBudget"), sort: $("catalogSort"),
      flavor: $("catalogFlavor"), count: $("catalogCount"), reset: $("catalogReset"),
      shelves: $("catalogShelves"), toc: $("catalogToc"), chapters: $("catalogChapters"),
      results: $("catalogResults"), resultsGrid: $("catalogResultsGrid"), staticGrid: $("productGrid"),
      body: $("catalogBody")
    };

    /* ---------- 分類分頁：補上款數 ---------- */
    if (els.tabs) {
      [].forEach.call(els.tabs.querySelectorAll("a[data-cat]"), function (a) {
        var k = a.getAttribute("data-cat");
        var n = k === "all" ? all.length : all.filter(function (p) { return p.category === k; }).length;
        var span = document.createElement("span");
        span.className = "catalog-tab-count";
        span.textContent = n;
        a.appendChild(span);
      });
      // 手機分頁列會橫向捲動：把目前分類捲到看得見的位置（只捲分頁列，不動整頁）
      var cur = els.tabs.querySelector('[aria-current="page"]');
      if (cur) els.tabs.scrollLeft = Math.max(0, cur.offsetLeft - (els.tabs.clientWidth - cur.offsetWidth) / 2);
    }

    // 375 寬時完整提示會被截斷：手機改用短的
    if (els.q && window.matchMedia && window.matchMedia("(max-width: 860px)").matches) {
      els.q.placeholder = "搜尋酒名、酒造、口味";
    }

    /* ---------- 工具列 ---------- */
    // 預算
    if (els.budget) {
      els.budget.innerHTML = BUDGETS.map(function (b) { return '<option value="' + b.id + '">' + b.label + "</option>"; }).join("");
      var minp = parseInt(params.get("minp"), 10), maxp = parseInt(params.get("maxp"), 10);
      if (!isNaN(minp) || !isNaN(maxp)) {
        var lo = isNaN(minp) ? 0 : minp, hi = isNaN(maxp) ? Infinity : maxp;
        var match = BUDGETS.filter(function (b) { return b.id && b.min === lo && b.max === hi; })[0];
        if (match) els.budget.value = match.id;
        else {
          // 首頁「依預算找酒」等外部連結帶來的自訂區間
          var id = lo + "-" + (hi === Infinity ? "" : hi);
          BUDGETS.push({ id: id, label: hi === Infinity ? "NT$" + fmt(lo) + " 以上" : "NT$" + fmt(lo) + "–" + fmt(hi), min: lo, max: hi, inclusive: true });
          els.budget.insertAdjacentHTML("beforeend", '<option value="' + id + '">' + BUDGETS[BUDGETS.length - 1].label + "</option>");
          els.budget.value = id;
        }
      }
    }
    if (els.q && params.get("q")) els.q.value = params.get("q");

    // 口味（只有清酒、茶酒果實酒、葡萄酒有刻度）
    var flavorPick = { x: "", y: "" };
    if (els.flavor) {
      if (!flavorUI) { els.flavor.hidden = true; }
      else {
        els.flavor.innerHTML = ["x", "y"].map(function (axis) {
          var ui = flavorUI[axis];
          var name = "catalogFlavor" + axis.toUpperCase();
          var opts = [{ v: "", t: "不限" }].concat(ui.opts.map(function (t, i) { return { v: String(i), t: t }; }));
          return '<fieldset class="catalog-seg"><legend class="catalog-seg-legend">' + ui.legend + "</legend>" +
            opts.map(function (o, i) {
              return '<label class="catalog-seg-opt"><input type="radio" name="' + name + '" value="' + o.v + '"' + (i === 0 ? " checked" : "") +
                ' data-axis="' + axis + '"><span>' + o.t + "</span></label>";
            }).join("") + "</fieldset>";
        }).join("");
        els.flavor.addEventListener("change", function (e) {
          var t = e.target;
          if (!t.matches || !t.matches("input[data-axis]")) return;
          flavorPick[t.getAttribute("data-axis")] = t.value;
          update();
        });
      }
    }

    /* ---------- 排序與篩選 ---------- */
    function bucket(v) { return v <= 2 ? "0" : v === 3 ? "1" : "2"; }
    function sortList(list) {
      var mode = els.sort ? els.sort.value : "pick";
      var copy = list.slice();
      if (mode === "price-asc") copy.sort(function (a, b) { return a.price - b.price || a.id - b.id; });
      else if (mode === "price-desc") copy.sort(function (a, b) { return b.price - a.price || a.id - b.id; });
      else copy.sort(function (a, b) { return getPriority(b) - getPriority(a) || a.id - b.id; });
      return copy;
    }
    function currentBudget() {
      var id = els.budget ? els.budget.value : "";
      return BUDGETS.filter(function (b) { return b.id === id && b.id; })[0] || null;
    }
    function isFiltering() {
      return !!((els.q && els.q.value.trim()) || currentBudget() || flavorPick.x || flavorPick.y);
    }
    function matches(p) {
      var q = els.q ? searchText(els.q.value.trim()) : "";
      if (q) {
        var hay = searchText([p.name, p.spec, p.type, normalizeBrand(p.brand), typeof flavorReading === "function" ? flavorReading(p) : ""].join(" "));
        if (hay.indexOf(q) === -1) return false;
      }
      var b = currentBudget();
      // 預設區間含下限不含上限（1,000 算在 1,000–2,000）；首頁帶來的自訂區間上下限都含
      if (b && (p.price < b.min || (b.inclusive ? p.price > b.max : p.price >= b.max))) return false;
      if (flavorPick.x || flavorPick.y) {
        if (!p.flavor) return false;
        if (flavorPick.x && bucket(p.flavor[1]) !== flavorPick.x) return false;
        if (flavorPick.y && bucket(p.flavor[2]) !== flavorPick.y) return false;
      }
      return true;
    }

    /* ---------- 店主挑好的兩排 ---------- */
    function renderShelves() {
      if (!els.shelves) return;
      var html = "";
      var picks = sortList(pool.filter(function (p) { return getPriority(p) === 5; }));
      if (scope === "all") picks = picks.slice(0, 10);
      // 一排只有 1 張時不像一排：至少 2 款才擺（那 1 款仍在下方章節裡）
      if (picks.length < 2) picks = [];
      if (picks.length) {
        html += shelfHTML("catalogShelfPick", "店長精選", picks.length + " 款", "");
      }
      var live = (window.PROMOTIONS || []).filter(function (pr) {
        return typeof isPromoLive === "function" && isPromoLive(pr) && pr.targetIds && pr.targetIds.length;
      });
      var promoIds = {};
      live.forEach(function (pr) { pr.targetIds.forEach(function (id) { promoIds[id] = true; }); });
      var onPromo = sortList(pool.filter(function (p) { return promoIds[p.id]; }));
      if (onPromo.length < 2) onPromo = [];
      var promoNames = live.filter(function (pr) {
        return pool.some(function (p) { return pr.targetIds.indexOf(p.id) !== -1; });
      }).map(function (pr) {
        // 活動徽章文字開頭常帶 emoji（例如「🐱貓咪系列…」）：說明列只留文字
        return String((pr.display && pr.display.cardBadge) || pr.label).replace(/\p{Extended_Pictographic}️?\s*/gu, "").trim();
      });
      if (onPromo.length) {
        html += shelfHTML("catalogShelfPromo", "活動中", promoNames.join("、"),
          '<a class="catalog-shelf-more" href="/promotions/">看活動說明</a>');
      }
      els.shelves.innerHTML = html;
      if (picks.length) renderGrid(picks, "catalogShelfPick");
      if (onPromo.length) renderGrid(onPromo, "catalogShelfPromo", { allLazy: true });
    }
    function shelfHTML(id, title, note, extra) {
      return '<section class="catalog-shelf catalog-anchor" id="' + id + 'Sec" data-toc-name="' + title + '" aria-labelledby="' + id + 'Title">' +
        '<div class="catalog-shelf-head"><h2 class="catalog-shelf-title" id="' + id + 'Title">' + title + "</h2>" +
        (note ? '<p class="catalog-shelf-note">' + esc(note) + "</p>" : "") + (extra || "") + "</div>" +
        '<div class="catalog-shelf-track" tabindex="0" role="region" aria-label="' + title + '（可左右捲動）">' +
        '<div class="grid catalog-shelf-grid" id="' + id + '"></div></div></section>';
    }

    /* ---------- 章節 ---------- */
    function shortBrand(b) {
      var parts = String(b || "").split("・");
      return parts[parts.length - 1] || b;
    }
    function mostCommon(arr) {
      var c = {}, best = "", n = 0;
      arr.forEach(function (v) { if (!v) return; c[v] = (c[v] || 0) + 1; if (c[v] > n) { n = c[v]; best = v; } });
      return best;
    }
    function buildChapters() {
      var chapters = [];
      if (scope === "all") {
        CATS.forEach(function (c) {
          var items = all.filter(function (p) { return p.category === c.key; });
          if (items.length) chapters.push({ name: c.name, meta: items.length + " 款", items: items, link: c.path, linkText: "看全部 " + items.length + " 款" + c.name });
        });
        return chapters;
      }
      var byBrand = {};
      pool.forEach(function (p) {
        var k = normalizeBrand(p.brand) || MORE_BREWERIES;
        (byBrand[k] = byBrand[k] || []).push(p);
      });
      var more = [];
      // 全分類同一個產地（例如清酒都是「日本」）時，章頭就不重複寫產地
      var origins = {};
      pool.forEach(function (p) { if (p.origin) origins[p.origin] = 1; });
      var showOrigin = Object.keys(origins).length > 1;
      Object.keys(byBrand).forEach(function (k) {
        var items = byBrand[k];
        if (items.length >= 2 && k !== MORE_BREWERIES) {
          var origin = showOrigin ? mostCommon(items.map(function (p) { return p.origin; })) : "";
          chapters.push({ name: shortBrand(k), meta: [k !== shortBrand(k) ? k : "", origin, items.length + " 款"].filter(Boolean).join(" ・ "), items: items });
        } else {
          more = more.concat(items);
        }
      });
      // 款數多的酒造在前；同款數時，有店長精選的在前
      chapters.sort(function (a, b) {
        return b.items.length - a.items.length ||
          Math.max.apply(null, b.items.map(getPriority)) - Math.max.apply(null, a.items.map(getPriority));
      });
      if (more.length) {
        var n = {};
        more.forEach(function (p) { n[normalizeBrand(p.brand) || "?"] = 1; });
        chapters.push({ name: MORE_BREWERIES, meta: Object.keys(n).length + " 家 ・ " + more.length + " 款", items: more, showBrand: true });
      }
      return chapters;
    }

    var chapters = buildChapters();
    function renderChapters() {
      if (!els.chapters) return;
      // 章：桌機左側是直書明朝體酒造名（一道酉時金細線隔開），右側是全名／產地／款數與酒卡；手機改橫書
      els.chapters.innerHTML = chapters.map(function (ch, i) {
        return '<section class="catalog-ch catalog-anchor" id="catalogCh' + i + '" data-toc-name="' + esc(ch.name) + '" data-toc-n="' + ch.items.length + '" aria-labelledby="catalogCh' + i + 'Name">' +
          '<h2 class="catalog-ch-name" id="catalogCh' + i + 'Name">' + esc(ch.name) + "</h2>" +
          '<div class="catalog-ch-body">' +
          '<div class="catalog-ch-head"><p class="catalog-ch-meta">' + esc(ch.meta) + "</p>" +
          (ch.link ? '<a class="catalog-ch-link" href="' + ch.link + '">' + esc(ch.linkText) + "</a>" : "") +
          "</div>" +
          '<div class="grid catalog-ch-grid" id="catalogChGrid' + i + '"></div>' +
          "</div></section>";
      }).join("");
      chapters.forEach(function (ch, i) {
        var list = sortList(ch.items);
        if (scope === "all") list = list.slice(0, ALL_PAGE_CHAPTER_MAX);
        renderGrid(list, "catalogChGrid" + i, { allLazy: true });
        // 「更多酒造」：每張卡補上酒造名，才知道是誰釀的
        if (ch.showBrand) {
          var box = $("catalogChGrid" + i);
          list.forEach(function (p) {
            var card = box && box.querySelector('.card[data-id="' + p.id + '"] .name');
            if (card && p.brand) card.insertAdjacentHTML("beforebegin", '<div class="catalog-card-brand">' + esc(normalizeBrand(p.brand)) + "</div>");
          });
        }
      });
    }
    // 目錄：精選排＋各章（順序同畫面）
    function renderToc() {
      if (!els.toc) return;
      var anchors = [].slice.call(els.body.querySelectorAll(".catalog-anchor"));
      // 標題用「目錄」：前幾項是精選排，不是酒造；精選排與章節之間用一道細線分開
      var firstCh = true;
      els.toc.innerHTML = '<p class="catalog-toc-title">目錄</p><ol>' +
        anchors.map(function (a, i) {
          var n = a.getAttribute("data-toc-n");
          var isCh = a.classList.contains("catalog-ch");
          var sep = isCh && firstCh && i > 0 ? ' class="catalog-toc-sep"' : "";
          if (isCh) firstCh = false;
          return "<li" + sep + '><a href="#' + a.id + '"><span>' + esc(a.getAttribute("data-toc-name")) + "</span>" +
            (n ? '<span class="catalog-toc-n">' + n + "</span>" : "") + "</a></li>";
        }).join("") + "</ol>";
    }

    /* ---------- 結果模式 ---------- */
    var scopeName = scope === "all" ? "全部酒款" : (CATS.filter(function (c) { return c.key === scope; })[0] || {}).name;
    function update() {
      var filtering = isFiltering();
      if (els.reset) els.reset.hidden = !filtering;
      if (filtering) {
        var list = sortList(pool.filter(matches));
        if (els.shelves) els.shelves.hidden = true;
        if (els.body) els.body.hidden = true;
        if (els.results) els.results.hidden = false;
        if (els.count) els.count.textContent = list.length ? "符合條件 " + list.length + " 款" : "沒有符合條件的酒款";
        if (list.length) renderGrid(list, "catalogResultsGrid", { allLazy: true });
        else els.resultsGrid.innerHTML =
          '<div class="catalog-empty"><p>換個口味或預算試試，或在 LINE 告訴我們你想要的味道。</p>' +
          '<button type="button" class="catalog-empty-reset" data-catalog-reset>清除條件</button></div>';
      } else {
        if (els.shelves) els.shelves.hidden = false;
        if (els.body) els.body.hidden = false;
        if (els.results) els.results.hidden = true;
        if (els.count) els.count.textContent = scopeName + " " + pool.length + " 款";
        // 排序變了：章節與精選排一起重排
        renderShelves();
        renderChapters();
        renderToc();
        observeToc();
      }
    }
    function resetAll() {
      if (els.q) els.q.value = "";
      if (els.budget) els.budget.value = "";
      flavorPick.x = flavorPick.y = "";
      if (els.flavor) [].forEach.call(els.flavor.querySelectorAll('input[value=""]'), function (r) { r.checked = true; });
      update();
      if (els.q) els.q.focus();
    }

    var qTimer;
    if (els.q) els.q.addEventListener("input", function () { clearTimeout(qTimer); qTimer = setTimeout(update, 180); });
    if (els.budget) els.budget.addEventListener("change", update);
    if (els.sort) els.sort.addEventListener("change", update);
    if (els.reset) els.reset.addEventListener("click", resetAll);
    root.addEventListener("click", function (e) { if (e.target.closest("[data-catalog-reset]")) resetAll(); });
    var form = $("catalogTools");
    if (form) form.addEventListener("submit", function (e) { e.preventDefault(); update(); });

    /* ---------- 簽名動作：酒造目錄跟著捲動標示目前章節 ---------- */
    var io;
    function observeToc() {
      if (io) io.disconnect();
      if (!els.toc || !("IntersectionObserver" in window)) return;
      var links = [].slice.call(els.toc.querySelectorAll("a"));
      var list = els.toc.querySelector("ol");
      var setActive = function (id) {
        links.forEach(function (a) {
          var on = a.getAttribute("href") === "#" + id;
          if (on) {
            a.setAttribute("aria-current", "true");
            // 平板／手機的目錄是橫向膠囊列：把目前章節捲進來（只捲目錄列，不動整頁）
            if (list && list.scrollWidth > list.clientWidth) {
              list.scrollLeft = Math.max(0, a.parentNode.offsetLeft - (list.clientWidth - a.offsetWidth) / 2);
            }
          } else a.removeAttribute("aria-current");
        });
      };
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
      }, { rootMargin: "-35% 0px -60% 0px" });
      [].forEach.call(els.body.querySelectorAll(".catalog-anchor"), function (s) { io.observe(s); });
      if (links[0]) links[0].setAttribute("aria-current", "true");
    }

    /* ---------- 平板／手機：目錄膠囊列緊貼 header 下緣 ----------
       header 高度隨寬度變（62–65px），公告列有時跟著黏、有時捲走，寫死數字一定有某個寬度留縫；
       改成量 header 黏住時的位置（sticky top＋高度），少 1px 重疊。CSS 用 --ct-toc-top。 */
    var headerWrap = document.querySelector(".header-wrap");
    function syncTocTop() {
      if (!headerWrap) return;
      var t = (parseFloat(getComputedStyle(headerWrap).top) || 0) + headerWrap.offsetHeight - 1;
      root.style.setProperty("--ct-toc-top", Math.max(0, Math.round(t)) + "px");
    }
    syncTocTop();
    window.addEventListener("resize", syncTocTop);
    if (window.ResizeObserver && headerWrap) new ResizeObserver(syncTocTop).observe(headerWrap);

    update();
    // 已接手顯示（章節或結果格線）→ 藏起 build.js 的靜態卡（SEO／JS 失效備援）
    if (els.staticGrid) els.staticGrid.hidden = true;
    root.classList.add("is-enhanced");
  }
})();
