/**
 * 酒莊・酒造品牌頁的互動（/wineries/ 總覽、/wineries/<slug>/ 酒造頁）
 * 內容都已是靜態 HTML，這支只負責：
 *   總覽：地圖游標／鍵盤讀數、路線捲動時標示目前的縣（桌機小地圖、手機上方列）
 *   酒造頁：口味格子點選換讀數
 * 資料來自頁內 <script type="application/json" id="wyData">（由 build.js 產生）
 */
(function () {
  "use strict";
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }

  function init() {
    var raw = $("wyData");
    var data = {};
    try { data = raw ? JSON.parse(raw.textContent) : {}; } catch (e) { data = {}; }
    if (data.pref) initIndex(data);
    if (data.flavor) initFlavor(data.flavor);
  }

  /* ---------------- 總覽 ---------------- */
  function initIndex(D) {
    var hero = $("heroMap"), mini = $("miniMap"), rd = $("readout");
    if (!hero || !rd) return;

    // 左欄讀數：預設是 build 寫好的「酒款最多的縣」；游標或鍵盤停在縣上就換成那一縣
    var defaultHTML = rd.innerHTML, shown = null, hot = null;
    function swap(html) {
      rd.innerHTML = html;
      rd.classList.remove("is-swap");
      void rd.offsetWidth; // 重新觸發換字動畫
      rd.classList.add("is-swap");
    }
    function readPref(pref) {
      if (shown === pref) return;
      shown = pref;
      var p = D.pref[pref];
      if (!p) return;
      swap('<div class="fd-read-head"><b>' + esc(pref) + "</b><span>" + esc(D.lat[pref] || "") + "・" + p.kura + " 家・" + p.n + " 支</span></div><ul>" +
        p.list.map(function (k) { return "<li><span><b>" + esc(k[0]) + "</b>" + (k[0] === k[1] ? "" : esc(k[1])) + "</span><em>" + k[2] + " 支</em></li>"; }).join("") + "</ul>");
    }
    function setHot(t) {
      if (hot) hot.classList.remove("is-hot");
      hot = t;
      if (t) { t.classList.add("is-hot"); readPref(t.getAttribute("data-pref")); }
    }
    hero.addEventListener("mouseover", function (e) { var t = e.target.closest(".has"); if (t) setHot(t); });
    hero.addEventListener("focusin", function (e) { var t = e.target.closest(".has"); if (t) setHot(t); });
    hero.addEventListener("mouseleave", function () { setHot(null); shown = null; swap(defaultHTML); });

    // 黏住的位置跟著 header 實際高度（header 高度隨寬度在 62–65px 之間）
    var hd = document.querySelector(".header-wrap");
    function setTop() {
      var h = hd ? hd.getBoundingClientRect().height : 62;
      document.documentElement.style.setProperty("--fd-top", (h + 16) + "px");
      document.documentElement.style.setProperty("--fd-hd", (h - 1) + "px");
    }
    setTop();
    window.addEventListener("resize", setTop);

    // 路線捲動：目前在哪一縣
    var nowName = $("nowName"), nowLat = $("nowLat"), barName = $("barName"), barLat = $("barLat"), tabs = $("barTabs");
    function here(st) {
      var p = st.getAttribute("data-pref"), rg = st.getAttribute("data-rg");
      each(document.querySelectorAll(".fd-st.is-here"), function (x) { x.classList.remove("is-here"); });
      st.classList.add("is-here");
      var lat = D.lat[p] || D.regions[+rg] || "";
      if (nowName) nowName.textContent = p;
      if (barName) barName.textContent = p;
      if (nowLat) nowLat.textContent = lat;
      if (barLat) barLat.textContent = lat;
      if (mini) {
        each(mini.querySelectorAll(".is-here"), function (x) { x.classList.remove("is-here"); });
        var t = mini.querySelector('[data-pref="' + p + '"]');
        if (t) t.classList.add("is-here");
      }
      each(document.querySelectorAll("#regionNav a, #barTabs a"), function (a) {
        a.classList.toggle("is-here", a.getAttribute("data-rg") === rg);
      });
      // 手機地域分頁：把目前的地域捲進畫面（只捲分頁列）
      var cur = tabs && tabs.querySelector(".is-here");
      if (cur && tabs.offsetParent) tabs.scrollLeft = Math.max(0, cur.offsetLeft - (tabs.clientWidth - cur.offsetWidth) / 2);
    }
    var stations = document.querySelectorAll(".fd-st");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) here(e.target); });
      }, { rootMargin: "-30% 0px -60% 0px" });
      each(stations, function (s) { io.observe(s); });
    }
    if (stations[0]) here(stations[0]);
  }

  /* ---------------- 酒造頁：口味分布 ---------------- */
  function initFlavor(F) {
    var grid = $("fgrid"), out = $("fread");
    if (!grid || !out) return;
    function read(key) {
      var c = F.cells[key];
      if (!c) return;
      var xy = key.split("-");
      out.innerHTML = "<b>" + esc(F.x[xy[0] - 1]) + "・" + esc(F.y[xy[1] - 1]) + "</b><p>" +
        (key === F.top ? "這家店裡的酒，最多落在這一格。" : "這一格有 " + c.length + " 支。") + "點其他格子看看。</p><ul class=\"kd-list\">" +
        c.map(function (p) { return '<li><a href="' + esc(p[2]) + '">' + esc(p[0]) + "</a><span>" + esc(p[1]) + "</span></li>"; }).join("") + "</ul>";
      each(grid.querySelectorAll(".kd-fcell.on"), function (e) { e.classList.remove("on"); });
      var el = grid.querySelector('.kd-fcell[data-k="' + key + '"]');
      if (el) el.classList.add("on");
    }
    grid.addEventListener("click", function (e) {
      var c = e.target.closest(".kd-fcell.has");
      if (c) read(c.getAttribute("data-k"));
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
