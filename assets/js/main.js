/* ============================================================
   酉時喝酒 YOU-SI | main.js
   純前端靜態網站核心邏輯
   ─ 路由 / 年齡驗證 / 商品顯示 / 購物車 / 促銷 / 下單
============================================================ */


/* ===== 1. 全域常數與品牌設定 ===== */
const GAS_ORDER_URL = "/api/order";

// 品牌資訊：LINE / IG / Google Form
const BRAND = {
  name:           "酉時喝酒 YOU-SI",
  lineId:         "@008jcfgc",
  lineUrl:        "https://line.me/ti/p/@008jcfgc",
  igUrl:          "https://www.instagram.com/yousi1719_drink/",
};

// 運費規則常數
const SHIPPING_FREE_THRESHOLD = 2800; // 滿額免運門檻（NT$）
const SHIPPING_FEE_ROOM       = 170;  // 常溫運費
const SHIPPING_FEE_COLD       = 230;  // 冷藏運費

/* ===== 1.2 GA4 事件追蹤 (Event Tracking) ===== */
function trackEvent(eventName, params = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    } else {
      console.log(`[GA4 Tracking Mock] ${eventName}`, params);
    }
  } catch (error) {
    console.warn('[GA4 Tracking Error]', error);
  }
}

/* ===== 2. 路由與頁面工具 ===== */

/**
 * 依 URL pathname 回傳對應的頁面 key
 * 用於 DOMContentLoaded 判斷要執行哪段初始化邏輯
 */
function pathKey(){
  let p = location.pathname.replace(/\/+/g, '/');
  // 沒有結尾斜線的網址（/products、/products/sake）在正式站也會回 200、不轉址：
  // 補上斜線再判斷，否則會落到最後的 "home"（導覽列標錯、分類頁不掛活動徽章）
  if(!p.endsWith("/") && !/\.[a-z0-9]+$/i.test(p)) p += "/";
  if(p === "/" || p === "/index.html")                 return "home";
  if(p.startsWith("/age"))                             return "age";
  if(p.startsWith("/about"))                           return "about";
  if(p.startsWith("/offers"))                          return "offers";
  if(p.startsWith("/promotions"))                      return "promotions";
  if(p.startsWith("/order"))                           return "order";
  if(p === "/products/" || p === "/products/index.html") return "products";
  // 分類頁：路徑剛好結束在 /<cat>/ 或 /<cat>/index.html，不可吃到底下個別商品頁
  if(/^\/products\/sake\/(?:index\.html)?$/.test(p))      return "products-sake";
  if(/^\/products\/fruit-tea\/(?:index\.html)?$/.test(p)) return "products-fruittea";
  if(/^\/products\/wine\/(?:index\.html)?$/.test(p))      return "products-wine";
  if(/^\/products\/spirits\/(?:index\.html)?$/.test(p))   return "products-spirits";
  if(/^\/products\/mini\/(?:index\.html)?$/.test(p))      return "products-mini";
  // 個別商品頁：/products/<cat>/<slug>/，回傳專屬 key 避免落入任何分類頁分支
  if(/^\/products\/[^/]+\/[^/]+\/?$/.test(p))             return "product-detail";
  if(p.startsWith("/wineries"))                        return "wineries";
  if(p.startsWith("/blog"))                            return "blog";
  return "home";
}

/** 依目前頁面 key 為對應的 nav 連結加上 active class */
function setNavActive(){
  const key = pathKey();
  document.querySelectorAll("nav a").forEach(a => {
    const href = a.getAttribute("href");
    let active = false;
    if(key === "home"               && href === "/")                  active = true;
    if(key === "about"              && href.startsWith("/about"))     active = true;
    if(key.startsWith("products")   && href.startsWith("/products")) active = true;
    if(key === "offers"             && href.startsWith("/offers"))    active = true;
    if(key === "promotions"         && href.startsWith("/promotions")) active = true;
    if(key === "order"              && href.startsWith("/order"))     active = true;
    if(key === "wineries"           && href.startsWith("/wineries")) active = true;
    if(key === "blog"               && href.startsWith("/blog"))     active = true;
    if(active) a.classList.add("active");
  });
}

/**
 * LINE 官方帳號對話連結，預填訊息（https://line.me/R/oaMessage/@帳號/?訊息）
 * ⚠️ 只在手機／平板（觸控）有效：桌面瀏覽器開 line.me/R/ 會被轉到 LINE 官網首頁（2026-11 實測），
 *    所以桌面一律回到加好友頁（有 QR code，客人用手機掃了再聊）
 */
function lineMessageUrl(text){
  if(!matchMedia("(pointer: coarse)").matches) return BRAND.lineUrl;
  const id = BRAND.lineUrl.split("/").pop(); // "@008jcfgc"
  return `https://line.me/R/oaMessage/${id}/?${encodeURIComponent(text)}`;
}

/** 手機漢堡選單開關 */
function toggleMenu(){
  const open = document.querySelector("nav")?.classList.toggle("open");
  syncMenuToggle(!!open);
}

/** 漢堡選單的報讀名稱與開合狀態（各頁 HTML 手寫的 ☰ 按鈕沒有文字標籤，這裡統一補上） */
function syncMenuToggle(open){
  document.querySelectorAll(".menu-toggle").forEach(btn => {
    btn.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "✕" : "☰"; // 打開時顯示關閉圖示，看得出再按一次會收起
  });
}

/** 全站公告條初始化與輪播邏輯 (全站統一版) */
function renderAnnouncements() {
  // 如果資料夾不存在或為空，則隱藏公告（不添加 show-announce class）
  if (typeof announcements === "undefined" || !announcements.length) return;

  // 公告可選填 startAt / endAt（"YYYY-MM-DD"，含當天）：過期或還沒開始的自動不顯示，
  // 活動結束後不用記得回來刪（判斷方式與促銷活動相同）
  const list = announcements.filter(item => item && isPromoLive(item));
  if (!list.length) return;

  const bar = document.getElementById("announceBar");
  const track = document.getElementById("announceTrack");
  if (!bar || !track) return;

  // 1. 強制讓頁面知道有公告，以便下移內容
  document.documentElement.classList.add("show-announce");

  // 2. 清空現有內容並填充新公告
  track.innerHTML = "";
  list.forEach(function (item, i) {
    const el = document.createElement("div");
    el.className = "announce-item" + (i === 0 ? " is-active" : "");
    el.innerHTML = item.link 
      ? `<a href="${item.link}">${item.text}</a>` 
      : item.text;
    track.appendChild(el);
  });

  // 3. 啟動多則輪播
  if (list.length === 1) return;
  // 多則輪播時不當成即時通知：否則螢幕報讀每 5 秒就唸一次新公告（HTML 上的 role="status" aria-live 是給單則公告用的）
  bar.removeAttribute("role");
  bar.setAttribute("aria-live", "off");
  let current = 0;
  const items = [...track.querySelectorAll(".announce-item")];
  // 看不到的公告設為 inert：淡出的連結不再是看不見的 Tab 停點
  const sync = () => items.forEach((el, i) => { el.inert = i !== current; });
  sync();

  // 系統開啟「減少動態效果」：只顯示第一則，不輪播
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // 滑鼠停在公告列上、或鍵盤焦點在公告連結上時暫停（WCAG 2.2.2：自動更新的內容要能暫停）
  let hold = false;
  bar.addEventListener("mouseenter", () => { hold = true; });
  bar.addEventListener("mouseleave", () => { hold = false; });
  bar.addEventListener("focusin", () => { hold = true; });
  bar.addEventListener("focusout", (e) => { if (!bar.contains(e.relatedTarget)) hold = false; });

  // 記錄間隔 ID 以防重複執行
  if (window.announceTimer) clearInterval(window.announceTimer);
  window.announceTimer = setInterval(function () {
    if (hold || document.hidden) return;
    items[current].classList.remove("is-active");
    current = (current + 1) % items.length;
    items[current].classList.add("is-active");
    sync();
  }, 5000);
}

/** 渲染部落格文章卡片列表 (全站統一邏輯) */
function renderBlogGrid(tagMain = "All", tagSub = "All") {
  const grid = document.getElementById("blogGrid");
  if (!grid || typeof articles === "undefined") return;

  // 無文章時顯示敬請期待，隱藏篩選列
  const comingSoon = document.getElementById("blogComingSoon");
  const filters    = document.querySelector(".blog-filters");
  if (!articles.length) {
    grid.innerHTML = "";
    if (comingSoon) comingSoon.style.display = "";
    if (filters)    filters.style.display = "none";
    return;
  }
  if (comingSoon) comingSoon.style.display = "none";
  if (filters)    filters.style.display = "";

  // 「從這裡開始」：未篩選時，把 startHere 的入門文章排在最前面（依數字），下方列表就不再重複
  const unfiltered = tagMain === "All" && tagSub === "All";
  const startBox  = document.getElementById("blogStart");
  const startList = document.getElementById("blogStartList");
  const starters  = articles.filter(a => a.startHere).sort((a, b) => a.startHere - b.startHere);
  const showStart = !!(unfiltered && startBox && startList && starters.length);
  if (startBox) startBox.hidden = !showStart;
  if (showStart) {
    startList.innerHTML = starters.map(a => `
      <li>
        <a class="blog-start-card" href="/blog/${a.slug}/">
          <img src="${a.cover}" alt="" width="96" height="64" loading="lazy" decoding="async">
          <span>
            <span class="blog-start-step" aria-hidden="true"></span>
            <span class="blog-start-name">${a.title}</span>
          </span>
        </a>
      </li>`).join("");
  }

  const filtered = articles.filter(a => {
    if (showStart && a.startHere) return false;
    const matchMain = tagMain === "All" || (a.mainTags && a.mainTags.includes(tagMain));
    const matchSub  = tagSub  === "All" || (a.subTags && a.subTags.includes(tagSub));
    return matchMain && matchSub;
  }).sort((a, b) => new Date(b.date.replace(/\//g,"-")) - new Date(a.date.replace(/\//g,"-")));

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="blog-empty-state">
        <p>這個組合目前還沒有文章。</p>
        <button type="button" class="blog-reset-btn" data-blog-reset>看全部文章</button>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((a, i) => {
    // 第一篇設為特選大卡 (Featured)
    const isFeatured = i === 0 && unfiltered;
    const badgeMap = {
      "酉時圖書館": "badge-library",
      "酒界新聞": "badge-news",
      "搭餐推薦": "badge-pairing",
      "酉時快訊": "badge-flash"
    };
    const bClass = badgeMap[a.mainTags?.[0]] || "badge-library";

    return `
      <a class="card blog-card-link ${isFeatured ? 'featured-card' : ''}" href="/blog/${a.slug}/">
        <div class="blog-cover card-media">
          <div class="blog-badge ${bClass}">${a.mainTags?.[0] || '酉時圖書館'}</div>
          <img src="${a.cover}" alt="${a.title}" width="800" height="540" ${i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async">
        </div>
        <div class="blog-card-body">
          <h2 class="blog-card-title">${a.title}</h2>
          <p class="blog-card-excerpt">${a.excerpt}</p>
          <div class="blog-card-meta-bottom">
            <span>by ${a.author}</span>
            <span>${a.date}</span>
          </div>
        </div>
      </a>
    `;
  }).join("");
}

/** 初始化部落格列表與篩選事件 */
function initBlogList() {
  const pills = document.querySelectorAll(".filter-pill");
  if (!pills.length) {
    // 如果沒有篩選按鈕（某些嵌入頁面），直接渲染全部
    renderBlogGrid();
    return;
  }

  let currentMain = "All";
  let currentSub  = "All";

  // 0 篇的類別不顯示：點了才發現是空的很掃興（之後有文章就會自動出現）
  if (typeof articles !== "undefined") {
    pills.forEach(pill => {
      const tag = pill.getAttribute("data-tag");
      if (tag === "All") return;
      const key = pill.classList.contains("filter-main") ? "mainTags" : "subTags";
      pill.hidden = !articles.some(a => (a[key] || []).includes(tag));
    });
  }

  // 選中狀態同時寫進 class 與 aria-pressed（篩選鈕是 <button>，報讀得到「已按下」）
  const setActive = (group, tag) => {
    document.querySelectorAll(group).forEach(p => {
      const on = p.getAttribute("data-tag") === tag;
      p.classList.toggle("active", on);
      p.setAttribute("aria-pressed", String(on));
    });
  };

  pills.forEach(pill => {
    pill.addEventListener("click", function() {
      const tag = this.getAttribute("data-tag");
      if (this.classList.contains("filter-main")) {
        currentMain = tag;
        setActive(".filter-main", tag);
      } else {
        currentSub = tag;
        setActive(".filter-sub", tag);
      }
      renderBlogGrid(currentMain, currentSub);
    });
  });

  // 篩選無結果時的「看全部文章」
  const gridEl = document.getElementById("blogGrid");
  if (gridEl) gridEl.addEventListener("click", (e) => {
    if (!e.target.closest("[data-blog-reset]")) return;
    currentMain = "All";
    currentSub  = "All";
    setActive(".filter-main", "All");
    setActive(".filter-sub", "All");
    renderBlogGrid();
    const all = document.querySelector('.filter-main[data-tag="All"]');
    if (all) all.focus();
  });

  // 初始渲染
  renderBlogGrid();
}


// 點擊選單外部時自動關閉選單
// 捕獲階段＋擋下這一下：選單開著時點外面（遮罩區）只負責關選單，不會順手點到底下的連結
document.addEventListener("click", (e) => {
  const nav = document.querySelector("nav");
  const toggle = document.querySelector(".menu-toggle");
  if(nav && nav.classList.contains("open")){
    if(!nav.contains(e.target) && (!toggle || !toggle.contains(e.target))){
      e.preventDefault();
      e.stopPropagation();
      nav.classList.remove("open");
      syncMenuToggle(false);
    }
  }
}, true);

// Esc 關閉手機選單，焦點回到漢堡按鈕
document.addEventListener("keydown", (e) => {
  if(e.key !== "Escape") return;
  const nav = document.querySelector("nav");
  if(!nav || !nav.classList.contains("open")) return;
  nav.classList.remove("open");
  syncMenuToggle(false);
  document.querySelector(".menu-toggle")?.focus();
});

/** 「跳到主要內容」：只在有 <main id="main"> 的頁面注入，鍵盤第一個 Tab 停點 */
function ensureSkipLink(){
  const main = document.getElementById("main");
  if(!main || document.querySelector(".skip-link")) return;
  if(!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
  const a = document.createElement("a");
  a.className = "skip-link";
  a.href = "#main";
  a.textContent = "跳到主要內容";
  document.body.prepend(a);
}
if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", ensureSkipLink);
else ensureSkipLink();

/** 取得郵寄溫層選擇（常溫 / 冷藏），預設常溫 */
function getSelectedShipTemp(){
  const checked = document.querySelector('input[name="shipTemp"]:checked');
  return (checked && checked.value) ? checked.value : "常溫";
}

/** 計算運費：非郵寄為 0，滿額免運，依溫層計費 */
function calcShippingFee(pickup, itemsTotal, shipTemp){
  if(pickup !== "郵寄") return 0;
  if(parseInt(itemsTotal, 10) >= SHIPPING_FREE_THRESHOLD) return 0;
  return shipTemp === "冷藏" ? SHIPPING_FEE_COLD : SHIPPING_FEE_ROOM;
}

/** 免運進度文字：門檻以「折扣後金額」計算，與 calcShippingFee 一致；自取本來就不收運費 */
function freeShipText(total){
  const need = SHIPPING_FREE_THRESHOLD - (parseInt(total, 10) || 0);
  return need > 0
    ? `宅配再買 NT$${need.toLocaleString()} 免運`
    : "已達宅配免運";
}

/** 購物車抽屜內的免運進度條；total 為 null 時隱藏（空車） */
function renderFreeShipProgress(el, total){
  if(!el) return;
  if(total == null){ el.innerHTML = ""; el.hidden = true; return; }
  const amount = parseInt(total, 10) || 0;
  const ratio  = Math.min(1, amount / SHIPPING_FREE_THRESHOLD);
  el.hidden = false;
  el.classList.toggle("is-done", ratio >= 1);
  el.innerHTML = `
    <div class="mini-cart-ship-text"><strong>${freeShipText(amount)}</strong><span>滿 NT$${SHIPPING_FREE_THRESHOLD.toLocaleString()} 宅配免運，自取不收運費</span></div>
    <div class="mini-cart-ship-bar" role="progressbar" aria-label="免運進度" aria-valuemin="0" aria-valuemax="${SHIPPING_FREE_THRESHOLD}" aria-valuenow="${Math.min(amount, SHIPPING_FREE_THRESHOLD)}"><span style="width:${(ratio * 100).toFixed(1)}%"></span></div>`;
}


/* ===== 3. 年齡驗證 ===== */

// localStorage key 與有效期設定
const AGE_STORAGE_KEY = "age_ok_v2";
const AGE_TTL_DAYS    = 1; // 通過後有效天數，到期需重新驗證

/** 將年齡驗證結果寫入 localStorage，附帶到期時間 */
function _setAgeOk(days = AGE_TTL_DAYS){
  try{
    const expiresAt = Date.now() + (Number(days) * 24 * 60 * 60 * 1000);
    localStorage.setItem(AGE_STORAGE_KEY, JSON.stringify({ ok: true, expiresAt }));
    localStorage.removeItem("age_ok"); // 清除舊版 key
  }catch(e){}
}

/** 讀取年齡驗證狀態，過期自動清除並回傳 false */
function _readAgeOk(){
  try{
    const raw = localStorage.getItem(AGE_STORAGE_KEY);
    if(raw){
      const data = JSON.parse(raw);
      if(data?.ok && Number(data?.expiresAt) && Date.now() < Number(data.expiresAt)) return true;
      localStorage.removeItem(AGE_STORAGE_KEY);
      return false;
    }
    // 相容舊版：age_ok="yes" → 轉換為新格式
    if(localStorage.getItem("age_ok") === "yes"){
      _setAgeOk(AGE_TTL_DAYS);
      return true;
    }
    return false;
  }catch(e){
    try{ localStorage.removeItem(AGE_STORAGE_KEY); }catch(_){}
    return false;
  }
}

/** 頁面載入時檢查年齡驗證，未通過則顯示覆蓋層（不跳轉，避免 Google 判定為重新導向） */
function ageCheck(){
  if(location.pathname.startsWith("/age")) return; // 驗證頁本身不攔截

  // 允許爬蟲與效能測試工具直接讀取內容（含 Google WRS, Lighthouse 等）
  const isBot = /bot|googlebot|crawler|spider|robot|crawling|bingbot|facebookexternalhit|baiduspider|yandexbot|slurp|applebot|HeadlessChrome|Lighthouse/i.test(navigator.userAgent);
  if(isBot) return;

  if(!_readAgeOk()){
    _showAgeOverlay();
  }
}

/** 以覆蓋層方式顯示年齡驗證（不跳轉，解決 Google 重新導向問題） */
function _showAgeOverlay(){
  if(document.getElementById('age-overlay')) return; // 防止重複呼叫

  const overlay = document.createElement('div');
  overlay.id = 'age-overlay';
  // 無障礙（2026-11，經使用者同意）：標成對話框、讓報讀唸出標題與說明、打開時焦點移到確認鈕
  // 只加屬性與焦點，年齡判斷與紀錄方式不變
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'ageOverlayTitle');
  overlay.setAttribute('aria-describedby', 'ageOverlayDesc');
  overlay.innerHTML = `
    <div class="age-overlay-box">
      <div class="kicker">年齡確認</div>
      <h1 id="ageOverlayTitle" style="margin:8px 0 10px; font-size:24px;">請確認你已滿 18 歲</h1>
      <p id="ageOverlayDesc">依法律規定，未滿法定飲酒年齡者請勿瀏覽本網站。</p>
      <div class="age-overlay-actions">
        <button class="btn btn-primary" onclick="_confirmAge()">我已滿 18 歲，進入網站</button>
        <button class="btn" onclick="_denyAge()">我未滿 18 歲</button>
      </div>
      <p class="mono" style="margin-top:12px;">酉時喝酒 YOU-SI｜日系酒款選品：清酒・燒酎・果實酒・茶酒・葡萄酒</p>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.classList.add('age-overlay-active');
  overlay.querySelector('.btn-primary')?.focus();

  // 焦點鎖定（2026-11，經使用者同意）：只處理焦點與背景 inert，年齡判斷與 _confirmAge/_denyAge 不變
  setPageInert(overlay, true);
  overlay.addEventListener('keydown', (e) => trapTab(overlay, e));
  // 按「未滿 18 歲」後內容被替換，焦點移到新的「返回上一頁」
  new MutationObserver(() => {
    if(!overlay.contains(document.activeElement)) overlay.querySelector('button')?.focus();
  }).observe(overlay, { childList: true, subtree: true });
  // 按「已滿 18 歲」後 overlay 被移除 → 解除背景 inert
  const releaseObs = new MutationObserver(() => {
    if(!document.body.contains(overlay)){ setPageInert(null, false); releaseObs.disconnect(); }
  });
  releaseObs.observe(document.body, { childList: true });
}

/** 年齡驗證通過：移除覆蓋層 */
function _confirmAge(){
  _setAgeOk();
  const overlay = document.getElementById('age-overlay');
  if(overlay) overlay.remove();
  document.body.classList.remove('age-overlay-active');
}

/** 年齡驗證拒絕 (移除 alert 以符合 Best Practices) */
function _denyAge(){
  const box = document.querySelector('.age-overlay-box');
  if(box) {
    box.innerHTML = `
      <div class="kicker" style="color:#b43c3c;">存取遭拒</div>
      <h1 style="margin:8px 0 10px; font-size:24px;">未滿法定飲酒年齡</h1>
      <p>抱歉，依據法律規定，未滿 18 歲者不得瀏覽或購買酒精飲品。</p>
      <div style="margin-top:20px;">
        <button class="btn btn-primary" onclick="history.back()">返回上一頁</button>
      </div>
    `;
  }
}


/* ===== 4. 商品排序與篩選 ===== */

/**
 * 將商品 type 對應到分類 group key
 * 用於篩選邏輯與 CATEGORY_ORDER 排序
 */
function groupOf(p){
  if(p.type === "清酒")                       return "sake";
  if(p.type === "葡萄酒")                     return "wine";
  if(p.type === "果實酒" || p.type === "茶酒") return "fruittea";
  if(p.type === "烈酒")                       return "spirits";
  if(p.type === "小罐專區")                  return "mini";
  return "all";
}

/** 讀取商品 priority，未填預設為 3，限制在 1~5 */
function getPriority(p){
  const v = Number(p?.priority);
  if(Number.isFinite(v)) return Math.max(1, Math.min(5, v));
  return 3;
}

/** 同分類內排序：priority 大→小，priority 相同時用 id 穩定排序 */
function sortByPriorityDesc(list){
  return [...list].sort((a, b) => {
    const pa = getPriority(a), pb = getPriority(b);
    if(pa !== pb) return pb - pa;
    return (a.id || 0) - (b.id || 0);
  });
}

/* 商品列表頁（/products/ 與五個分類頁）的搜尋、篩選、排序在 catalog-page.js。
   舊版 #q／#cat／#minp／#maxp 四個欄位已不存在，對應的 applyFilters() 等函式於 2026-11 移除 */


/* ===== 5. 商品 Grid 與 Card 渲染 ===== */

/**
 * 將商品陣列渲染成卡片 Grid
 * @param {Array}  list - 商品陣列
 * @param {string} id   - 目標容器的 element id
 * @param {{allLazy?: boolean}} [opts] - allLazy：容器在首屏以下時用（例如首頁「用口味找酒」），
 *        全部圖片延遲載入，不搶首屏主視覺（LCP）的頻寬
 */
/**
 * 依商品 priority 產生推薦 badge HTML
 * priority 5 → 「店長精選」深棕 badge
 * priority 4 → 「推薦」暖金 badge
 * 其餘 → 空字串
 */
/**
 * 智慧縮圖輔助函式：針對 Cloudinary URL 注入轉型參數
 * @param {string} url - 原始 URL
 * @param {string} params - Cloudinary 參數 (例如 'w_400,h_500,c_fill')
 */
function optimizeImgUrl(url, params) {
  if (!url || !url.includes("cloudinary.com")) return url;
  if (url.includes("/upload/")) {
    return url.replace("/upload/", `/upload/${params}/`);
  }
  return url;
}

function renderPriorityBadge(p){
  const pr = getPriority(p);
  if(pr === 5) return `<span class="name-tag name-tag--5">✦ 店長精選</span>`;
  if(pr === 4) return `<span class="name-tag name-tag--4">✦ 推薦</span>`;
  return "";
}

/* ===== 5.1 商品卡活動徽章 ===== */

/**
 * main.js 為傳統 script 無法 import promotions.data.js 的 isPromoActive，
 * 此處為對應的活動期間判斷（邏輯需與 promotions.data.js 保持一致）
 */
function isPromoLive(promo){
  const now = Date.now();
  if(promo.startAt){
    const start = new Date(promo.startAt + "T00:00:00").getTime();
    if(!isNaN(start) && now < start) return false;
  }
  if(promo.endAt){
    const end = new Date(promo.endAt + "T23:59:59").getTime();
    if(!isNaN(end) && now > end) return false;
  }
  return true;
}

/** 商品 id → 進行中且設有 display.cardBadge 的促銷（同商品命中多個活動時取第一個） */
function getPromoBadgeMap(){
  const map = new Map();
  (window.PROMOTIONS || []).forEach(promo => {
    if(!promo.display || !promo.display.cardBadge) return;
    if(!Array.isArray(promo.targetIds)) return;
    if(!isPromoLive(promo)) return;
    promo.targetIds.forEach(pid => { if(!map.has(pid)) map.set(pid, promo); });
  });
  return map;
}

/**
 * 商品卡活動徽章 + 說明浮窗
 * 桌機：徽章絕對定位於圖片上緣空白帶，hover 顯示浮窗
 * 手機：徽章排在「店長精選／推薦」標籤列下方，點擊展開浮窗（樣式見 style.css .card-promo-badge）
 */
function renderPromoBadge(p, badgeMap){
  const promo = badgeMap.get(p.id);
  if(!promo) return "";
  const d = promo.display;
  return `
    <span class="card-promo-badge" data-promo-badge role="button" tabindex="0" aria-expanded="false" aria-label="活動說明：${d.cardBadge}">
      ${d.cardBadge}
      <span class="card-promo-pop">
        <span class="card-promo-pop-title">${d.title || promo.label}</span>
        <span class="card-promo-pop-desc">${d.cardBadgeDetail || promo.description}</span>
        <a class="card-promo-pop-link" href="/promotions/">查看活動 →</a>
      </span>
    </span>`;
}

/* 徽章點擊展開／收合（手機主要互動；桌機 hover 由 CSS 處理，點擊亦可固定浮窗） */
document.addEventListener("click", (e) => {
  if(e.target.closest(".card-promo-pop")) return; // 點浮窗內容（含連結）不收合
  const badge = e.target.closest("[data-promo-badge]");
  document.querySelectorAll("[data-promo-badge].open").forEach(b => {
    if(b !== badge){ b.classList.remove("open"); b.setAttribute("aria-expanded", "false"); }
  });
  if(badge){
    const opened = badge.classList.toggle("open");
    badge.setAttribute("aria-expanded", String(opened));
  }
});
document.addEventListener("keydown", (e) => {
  if(e.key !== "Enter" && e.key !== " ") return;
  if(!e.target || !e.target.closest) return;
  if(e.target.closest(".card-promo-pop")) return; // 浮窗內的連結維持原生 Enter 行為
  const badge = e.target.closest("[data-promo-badge]");
  if(!badge) return;
  e.preventDefault();
  const opened = badge.classList.toggle("open");
  badge.setAttribute("aria-expanded", String(opened));
});

/**
 * 商品詳情頁：進行中的活動做成一枚精簡徽章，放在徽章列最前面（商品資訊最上方）
 * 例：「活動中　雙11 茶酒2件92折・至 11/12 →」，點了到 /promotions/；完整說明放在 title／報讀名稱
 * 插進既有的徽章列（同一行），幾乎不推動下方版面；原本在加入購物車下方的三行大方塊已移除
 * 商品 id 從 .pdp-btn-cart 的 onclick="addToCart(N)" 解析，靜態頁不需重新生成
 */
function injectPdpPromoBanner(){
  const btn = document.querySelector(".pdp-btn-cart");
  const badges = document.querySelector(".pdp-badges");
  if(!btn || !badges || badges.querySelector(".pdp-badge--promo")) return;
  const m = btn.getAttribute("onclick") ? btn.getAttribute("onclick").match(/addToCart\((\d+)\)/) : null;
  const id = m ? parseInt(m[1], 10) : NaN;
  if(Number.isNaN(id)) return;

  const promos = (window.PROMOTIONS || []).filter(promo =>
    promo.display && promo.display.cardBadge &&
    Array.isArray(promo.targetIds) && promo.targetIds.includes(id) &&
    isPromoLive(promo)
  );
  if(!promos.length) return;

  const html = promos.map(promo => {
    // 徽章文字去掉開頭的 emoji，維持商品頁安靜；加上截止日（月/日）
    const short = String(promo.display.cardBadge).replace(/^[^\p{L}\p{N}]+/u, "").trim();
    const end = promo.endAt ? `・至 ${Number(promo.endAt.slice(5, 7))}/${Number(promo.endAt.slice(8, 10))}` : "";
    const detail = String(promo.display.cardBadgeDetail || promo.description || "").replace(/"/g, "&quot;");
    return `<a class="pdp-badge pdp-badge--promo" href="/promotions/" title="${detail}" aria-label="活動中：${short}。${detail}看所有活動">
      <span class="pdp-promo-tag">活動中</span>${short}${end}<span class="pdp-promo-go" aria-hidden="true">→</span></a>`;
  }).join("");
  badges.insertAdjacentHTML("afterbegin", html);
}

/**
 * 口味短語（商品卡、首頁「用口味找酒」共用）
 * 資料：catalog.js 的 p.flavor = [家族, X(1–5), Y(1–5)]；文字表 FLAVOR_WORDS 也由 catalog.js 提供，
 *       唯一來源是 build.js 的 FLAVOR_FAMILIES（改文字請改那裡再跑 node build.js）
 */
function flavorReading(p){
  // FLAVOR_WORDS 由 catalog.js 提供；沒載入 catalog.js 的頁面（例如 /wineries/）就不顯示
  if(typeof FLAVOR_WORDS === "undefined") return "";
  const f = p && p.flavor;
  const w = f && FLAVOR_WORDS[f[0]];
  if(!w) return "";
  return w.x[f[1] - 1] + "，" + w.y[f[2] - 1];
}

function renderGrid(list, id, opts){
  const box = document.getElementById(id);
  if(!box) return;

  // 篩選無結果時給明確提示，避免使用者看到一片空白不知道發生什麼事
  if(!list || !list.length){
    box.innerHTML = `
      <div class="grid-empty">
        <p class="grid-empty-title">找不到符合條件的酒款</p>
        <p class="grid-empty-hint">試試放寬價格範圍、換個關鍵字，或<a href="/products/">查看全部商品</a>。</p>
      </div>`;
    return;
  }

  const promoBadgeMap = getPromoBadgeMap();

  box.innerHTML = list.map((p, index) => {
    let cover = Array.isArray(p.imgs) ? p.imgs[0] : "";
    
    // 效能優化核心：首屏 (前 5 名) 搶先下載，非首屏則延遲載入
    const isAboveFold = !(opts && opts.allLazy) && index < 5;
    const loading = isAboveFold ? "eager" : "lazy";
    const decoding = isAboveFold ? "sync" : "async";
    const priority = isAboveFold ? 'fetchpriority="high"' : '';
    
    // 列表頁使用縮圖 (手機端 400 寬度已足夠清晰，減少流量消耗)
    cover = optimizeImgUrl(cover, "w_400,h_500,c_limit");

    const internalCat = groupOf(p);
    const pathSegment = internalCat === "fruittea" ? "fruit-tea" : internalCat;
    const catPath = pathSegment === "all" ? "" : `${pathSegment}/`;
    const slug = p.name.replace(/[&]+/g, '').replace(/\s+/g, '-');
    const productUrl = `/products/${catPath}${slug}/`;

    return `
      <div class="card" data-id="${p.id}">
        <div class="card-media">
          <a href="${productUrl}" aria-label="查看 ${p.name}">
            <img src="${cover}" alt="${p.name}" width="400" height="500" loading="${loading}" decoding="${decoding}" ${priority}>
          </a>
        </div>
        <div class="card-body">
          <div class="card-tag-row">${renderPriorityBadge(p)}</div>
          ${renderPromoBadge(p, promoBadgeMap)}
          <a href="${productUrl}" class="name">${p.name}</a>
          <div class="spec">${p.spec || ""}</div>
          ${flavorReading(p) ? `<div class="card-flavor">${flavorReading(p)}</div>` : ""}
          <div class="card-meta">
            <div class="price-wrap">${renderPrice(p)}</div>
            ${p.soldOut
              ? `<button class="btn-add is-soldout" disabled aria-label="完售${p.restockNote ? "・" + p.restockNote : ""}：${p.name}">完售</button>`
              : `<button class="btn-add" onclick="addToCart(${p.id})" aria-label="加入購物車：${p.name}">加入<span class="btn-add-rest">購物車</span></button>`}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * 靜態商品卡的 runtime 掛載
 *
 * build.js 會把商品卡直接寫進 HTML（供不執行 JS 的 AI 爬蟲讀取，同時加速 LCP）。
 * 這些靜態卡刻意不含活動徽章 —— 促銷有起訖日期，烘進 HTML 會過期。
 * 本函式在頁面載入後補上目前進行中的活動徽章。
 *
 * @param {string} id 容器 element id
 * @returns {boolean} 是否找到靜態卡（false 代表需要走 renderGrid 動態渲染）
 */
function hydrateStaticGrid(id){
  const box = document.getElementById(id);
  if(!box) return false;
  const cards = box.querySelectorAll(".card[data-id]");
  if(!cards.length) return false;

  const badgeMap = getPromoBadgeMap();
  if(badgeMap.size){
    cards.forEach(card => {
      if(card.querySelector(".card-promo-badge")) return;   // 冪等，避免重複掛載
      const html = renderPromoBadge({ id: Number(card.dataset.id) }, badgeMap);
      if(!html) return;
      const row = card.querySelector(".card-tag-row");
      if(row) row.insertAdjacentHTML("afterend", html);
    });
  }
  return true;
}

/** 渲染商品價格，有原價則同時顯示劃線原價 */
function renderPrice(p){
  // 金額依文案規範加千分位：NT$1,500
  const fmt = n => Number(n).toLocaleString("en-US");
  if(p.originPrice && p.originPrice > p.price){
    return `<div class="price-now">NT$${fmt(p.price)}</div><div class="price-origin">NT$${fmt(p.originPrice)}</div>`;
  }
  return `<div class="price-now">NT$${fmt(p.price)}</div>`;
}


/* ===== 6. Lightbox（PDP 商品圖放大）===== */

// 點擊 lightbox 背景關閉
document.addEventListener("click", (e) => {
  if(e.target && e.target.id === "lightbox") closeLightbox();
});

/** 關閉 lightbox / 商品 Modal，解除 body 捲動鎖定 */
function closeLightbox(){
  const box = document.getElementById("lightbox");
  if(box) box.style.display = "none";
  document.body.classList.remove("modal-open");
}


/* ===== 6.5. 部落格關聯商品渲染 ===== */
function renderBlogRelatedProducts(retryCount = 0) {
  const currentPath = window.location.pathname;
  
  // 1. 提取 slug：支援各種網址格式 (含 /blog/slug/ 與 /blog/slug/index.html)
  // 移除結尾的 index.html 並確保格式正確
  const cleanPath = currentPath.replace(/\/index\.html$/i, '/').replace(/\/$/, '');
  const pathSegments = cleanPath.split('/');
  const blogIdx = pathSegments.indexOf('blog');
  
  if (blogIdx === -1 || blogIdx === pathSegments.length - 1) return;
  const slug = pathSegments[blogIdx + 1].toLowerCase();

  // 2. 存取全域資料并增加重試機制 (解決大型資料檔在 Safari 上的掛載延遲)
  const allArticles = window.articles || (typeof articles !== 'undefined' ? articles : null);
  const allProducts = window.products || (typeof products !== 'undefined' ? products : null);
  
  if (!allArticles || !allProducts) {
    if (retryCount < 3) {
      setTimeout(() => renderBlogRelatedProducts(retryCount + 1), 150);
      return;
    }
    console.warn('[Blog] RelatedProducts aborted: Data variables not found after retries.');
    return;
  }

  // 3. 尋找對應文章
  const article = allArticles.find(a => a.slug.toLowerCase() === slug);
  const ctaContainer = document.querySelector('.article-cta');
  
  if (!ctaContainer) return;

  // 4. 渲染邏輯
  if (article && Array.isArray(article.relatedProductIds) && article.relatedProductIds.length > 0) {
      const list = allProducts.filter(p => article.relatedProductIds.includes(p.id));
      
      if (list.length > 0) {
          // 改用語意化 Class 並交由 style.css 統一控制樣式
          ctaContainer.innerHTML = `
              <section class="blog-related-section">
                  <h3>與此文章相關的推薦酒款</h3>
                  <div id="blog-related-grid" class="grid"></div>
              </section>
          `;
          ctaContainer.style.display = "block";
          
          renderGrid(list, 'blog-related-grid', { allLazy: true }); // 在文末：不跟文章封面（LCP）搶頻寬
          return;
      }
  }
  
  // 5. 若無資料則隱藏該區塊防止顯示無效按鈕
  ctaContainer.style.display = 'none';
}


/* ===== 9. 購物車核心 ===== */

/** 從 localStorage 讀取購物車原始資料（[{id, qty}]） */
/*  防護：內容壞掉、不是陣列、或瀏覽器封鎖儲存空間時一律當成空車 —— 這支每一頁載入都會跑，
    丟例外會讓整頁的初始化中斷（key 名稱與資料格式不變） */
function getCart(){
  try{
    const c = JSON.parse(localStorage.getItem("cart") || "[]");
    return Array.isArray(c) ? c.filter(x => x && typeof x === "object") : [];
  }catch(e){
    return [];
  }
}

/** 儲存購物車至 localStorage */
function saveCart(c){
  try{ localStorage.setItem("cart", JSON.stringify(c)); }
  catch(e){ console.warn("購物車無法寫入瀏覽器儲存空間", e); }
}

/**
 * 將商品加入購物車
 * 已存在則 qty++，否則新增一筆
 * 加入後觸發加入成功 toast 與促銷引導 toast
 */
function addToCart(id){
  // 完售（products.data.js 的 soldOut）：按鈕本來就停用，這裡是最後一道防線（例如舊分頁還留著可按的按鈕）
  const soldOut = typeof products !== "undefined" ? products.find(x => x.id === id && x.soldOut) : null;
  if(soldOut){
    showPromoToast(`「${soldOut.name}」目前完售${soldOut.restockNote ? "，" + soldOut.restockNote : ""}`);
    return;
  }

  const cart = getCart();
  const item = cart.find(x => x.id === id);
  if(item) item.qty++;
  else     cart.push({ id, qty: 1 });

  saveCart(cart);
  renderCartMini();
  updateCartUI();

  const p = products.find(p => p.id === id);
  if(!p) return;

  trackEvent('add_to_cart', {
    currency: 'TWD',
    value: p.price,
    items: [{
      item_id: String(p.id),
      item_name: p.name,
      item_category: p.category,
      price: p.price,
      quantity: 1
    }]
  });

  showCartToast(p, cart.find(x => x.id === id)?.qty || 1);

  // 促銷引導提示：距離下一個折扣還差幾件
  // 傳入剛加入的商品 id，只對「該商品屬於促銷白名單」的促銷顯示 toast
  const totalQty  = cart.reduce((s, x) => s + (x.qty || 0), 0);
  const nextPromo = getNextPromotionHint(totalQty, id);
  if(nextPromo) showPromoToast(nextPromo.msg || `再買 ${nextPromo.need} 件可享 ${nextPromo.text}`);
}

/** 從購物車移除指定商品 */
function removeFromCart(id){
  saveCart(getCart().filter(x => x.id !== id));
  renderCartMini();
  updateCartUI();
}

/** 更新購物車內指定商品數量，最小為 1 */
function setQty(id, qty){
  const cart = getCart();
  const item = cart.find(x => x.id === id);
  if(item) item.qty = Math.max(1, parseInt(qty) || 1);
  saveCart(cart);
  renderCartMini();
  updateCartUI();
}

/** 將購物車 id 列表展開為完整商品資料（含 qty），過濾掉已下架商品 */
function readCart(){
  return getCart()
    .map(c => { const p = products.find(p => p.id === c.id); return p ? { ...p, qty: c.qty } : null; })
    .filter(Boolean);
}

/** 計算購物車原價小計（未套用折扣） */
function cartTotal(){
  return readCart().reduce((s, p) => s + p.price * p.qty, 0);
}

/**
 * 取得購物車統計資料，供促銷引擎使用
 * @returns {{ items, totalQty, subtotal, categories, breweries }}
 */
function getCartContext(){
  const cart = readCart();
  return {
    items:      cart,
    totalQty:   cart.reduce((s, p) => s + p.qty, 0),
    subtotal:   cart.reduce((s, p) => s + p.price * p.qty, 0),
    categories: new Set(cart.map(p => p.category).filter(Boolean)),
    breweries:  new Set(cart.map(p => p.brewery).filter(Boolean)),
    ids:        new Set(cart.map(p => p.id))  // 供 combo-ids 促銷使用
  };
}

/**
 * 更新所有購物車相關 UI：
 * - header 浮動購物車 badge
 * - sticky bar 件數與金額
 * - 已開啟的 mini cart overlay
 * - order 頁右側 cartMini 區塊
 * - 促銷區塊
 */
function updateCartUI(){
  const cart      = readCart();
  const itemCount = cart.reduce((s, p) => s + (p.qty || 0), 0);
  const promo     = applyPromotions(getCartContext());

  const badge = document.getElementById("cartBadge");
  if(badge){ badge.textContent = String(itemCount); badge.style.display = itemCount > 0 ? "inline-flex" : "none"; }

  const stickyCount = document.getElementById("stickyCount");
  const stickyTotal = document.getElementById("stickyTotal");
  if(stickyCount) stickyCount.textContent = String(itemCount);
  if(stickyTotal) stickyTotal.textContent = "NT$" + Number(promo.finalTotal).toLocaleString();
  const stickyShip = document.getElementById("stickyShip");
  if(stickyShip) stickyShip.textContent = itemCount > 0 ? freeShipText(promo.finalTotal) : "";
  // 空車時只留「LINE 詢問推薦」，不顯示「0 項 NT$0」
  document.getElementById("stickyBar")?.classList.toggle("is-empty", itemCount === 0);

  const overlay = document.getElementById("miniCartOverlay");
  if(overlay && overlay.style.display === "flex") renderMiniCart();

  if(document.getElementById("cartMini")) renderCartMini();
  renderPromotionBlock();
  document.dispatchEvent(new CustomEvent("cart:updated")); // 商品頁「已加入 N 件」等頁面元件用
}

/**
 * 渲染 order 頁右側購物車摘要（#cartMini）
 * 含商品列、折扣行、運費行（僅 order 頁）、總金額
 */
function renderCartMini(){
  const wrap = document.getElementById("cartMini");
  if(!wrap) return;

  const cart        = readCart();
  const promo       = applyPromotions(getCartContext());
  const subtotal    = cartTotal();
  const itemsTotal  = promo.finalTotal;
  const isOrderPage = (pathKey() === "order");

  let pickup = "", shipTemp = "常溫", shippingFee = 0, grandTotal = itemsTotal;
  if(isOrderPage){
    pickup      = (document.getElementById("order-pickup")?.value || "自取").trim();
    shipTemp    = pickup === "郵寄" ? getSelectedShipTemp() : "常溫";
    shippingFee = calcShippingFee(pickup, itemsTotal, shipTemp);
    grandTotal  = itemsTotal + shippingFee;
  }

  if(cart.length === 0){
    wrap.innerHTML = `<div class="mono">購物車目前沒有商品。</div><div id="promotionBlock" class="promotion-block"></div>`;
    renderPromotionBlock();
    return;
  }

  const itemsHtml = cart.map(p => `
    <div class="cart-item">
      <div class="cart-item-main">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-spec">${p.spec || ""}</div>
        <div class="cart-item-price">NT$${Number(p.price).toLocaleString("en-US")}</div>
      </div>
      <div class="cart-item-side">
        <div class="cart-item-qty-wrap">
          <div class="qty-pill">
            <button class="qty-btn" type="button" aria-label="減少 ${p.name} 數量" onclick="setQty(${p.id}, ${Math.max(1,(p.qty||1)-1)})">−</button>
            <span class="qty-num" aria-label="數量">${p.qty}</span>
            <button class="qty-btn" type="button" aria-label="增加 ${p.name} 數量" onclick="setQty(${p.id}, ${(p.qty||1)+1})">＋</button>
          </div>
          <button class="cart-item-remove" type="button" aria-label="移除 ${p.name}" onclick="removeFromCart(${p.id})">移除</button>
        </div>
      </div>
    </div>
  `).join("");

  const fmt = n => Number(n).toLocaleString("en-US"); // 文案規範：NT$1,500

  // 運費列：只在 order 頁且選擇郵寄時顯示
  const shippingRowHtml = (isOrderPage && pickup === "郵寄") ? `
    <div class="cart-total-row cart-total-shipping">
      <span>運費（${shipTemp}${itemsTotal >= SHIPPING_FREE_THRESHOLD ? "｜滿額免運" : ""}）</span>
      <span>${shippingFee > 0 ? `NT$${fmt(shippingFee)}` : "NT$0"}</span>
    </div>` : "";

  wrap.innerHTML = `
    <div class="cart-items">${itemsHtml}</div>
    <div class="cart-total">
      <div class="cart-total-row cart-total-subtotal"><span>小計</span><span>NT$${fmt(subtotal)}</span></div>
      <div id="promotionBlock" class="promotion-block"></div>
      ${promo.discount > 0 ? `<div class="cart-total-row cart-total-discount"><span>優惠折抵</span><span>- NT$${fmt(promo.discount)}</span></div>` : ""}
      ${shippingRowHtml}
      <div class="cart-total-row cart-total-final"><strong>總金額</strong><strong>NT$${fmt(grandTotal)}</strong></div>
    </div>
  `;
  renderPromotionBlock();
}


/* ===== 10. 浮動購物車與 Sticky Bar ===== */

/**
 * 動態注入三個全站 UI 元件（每個只注入一次）：
 * 1. Desktop header 浮動購物車（含 badge）
 * 2. Mobile 底部 sticky bar（購物車摘要 + LINE 按鈕）
 * 3. Mini cart overlay（抽屜式購物車）
 */
function ensureStickyUI(){
  const key = pathKey();
  if(key === "age") return; // 年齡驗證頁不注入

  // 1) Desktop header 浮動購物車
  if(!document.getElementById("cartFloat")){
    const header = document.querySelector(".header");
    if(header){
      const wrap = document.createElement("div");
      wrap.id = "cartFloat";
      wrap.className = "cart-float";
      wrap.setAttribute("role", "button");
      wrap.setAttribute("tabindex", "0");
      wrap.setAttribute("aria-label", "查看購物車");
      wrap.innerHTML = `
        <span class="cart-float-icon" aria-hidden="true">🛒</span>
        <span class="cart-float-badge" id="cartBadge" aria-label="購物車品項數">0</span>
      `;
      const navCta = header.querySelector(".nav-cta");
      if(navCta) navCta.appendChild(wrap);
      else header.appendChild(wrap);

      const open = () => openMiniCart();
      wrap.addEventListener("click", open);
      wrap.addEventListener("keydown", (e) => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); open(); } });
    }
  }

  // 2) Mobile 底部 sticky bar
  if(!document.getElementById("stickyBar")){
    const bar = document.createElement("div");
    bar.id = "stickyBar";
    bar.className = "sticky-bar";
    // 空車：只有「LINE 詢問推薦」一顆大按鈕
    // 有酒款：主按鈕改成「填寫詢問單」（帶著購物車去下單頁），LINE 縮成旁邊的小按鈕
    //         —— 避免客人挑好酒後被主按鈕帶去空白的 LINE 對話、購物車就斷在這裡
    bar.innerHTML = `
      <button class="sticky-cart" id="stickyCartBtn" type="button">
        <span class="visually-hidden">查看購物車：</span>
        <div class="sticky-cart-top">🛒 <span id="stickyCount">0</span> 項　<span id="stickyTotal">NT$0</span></div>
        <div class="sticky-cart-bottom" id="stickyShip"></div>
      </button>
      <a class="sticky-order" id="stickyOrderBtn" href="/order/">填寫詢問單</a>
      <a class="sticky-cta" id="stickyLineBtn" href="${BRAND.lineUrl}" target="_blank" rel="noopener" aria-label="LINE 詢問推薦">
        <span class="sticky-cta-full">LINE 詢問推薦</span><span class="sticky-cta-short" aria-hidden="true">LINE</span>
      </a>
    `;
    document.body.appendChild(bar);
    bar.querySelector("#stickyCartBtn")?.addEventListener("click", openMiniCart);

    // 商品頁：空車時底部列固定是「加入購物車 NT$…」＋右側小 LINE，版型不再變形（同一個拇指位置不會一下買、一下 LINE）
    // 頁內「加入購物車」與「用 LINE 詢問這款酒」都在畫面上時，整條底部列淡出讓位（.is-buy-away 被拿掉）
    const pdpBtn = document.querySelector(".pdp-btn-cart[data-pid]");
    if(pdpBtn){
      const buy = document.createElement("button");
      buy.type = "button";
      buy.className = "sticky-buy";
      buy.innerHTML = `<span>${pdpBtn.dataset.label || "加入購物車"}</span><span class="sticky-buy-price">NT$${Number(pdpBtn.dataset.price).toLocaleString("en-US")}</span>`;
      buy.addEventListener("click", () => addToCart(Number(pdpBtn.dataset.pid)));
      bar.insertBefore(buy, bar.querySelector("#stickyLineBtn"));
      bar.classList.add("has-buy");
      const lineText = document.querySelector(".pdp-btn-line[data-line-text]")?.dataset.lineText;
      const lineBtn = bar.querySelector("#stickyLineBtn");
      if(lineText) lineBtn.href = lineMessageUrl(lineText);
      lineBtn.setAttribute("aria-label", "LINE 詢問這款酒"); // 與頁內按鈕同名
      if("IntersectionObserver" in window){
        // 底部列約 110px 高：按鈕被它蓋住也算「看不到」
        new IntersectionObserver(([e]) => bar.classList.toggle("is-buy-away", !e.isIntersecting), { rootMargin: "0px 0px -110px 0px" }).observe(pdpBtn);
      }else{
        bar.classList.add("is-buy-away"); // 舊瀏覽器：底部列一直顯示
      }
      // 這一支已在購物車裡（.has-mine）：同一個位置的「加入購物車」原地換成「填寫詢問單」，並在摘要寫「本款 N 件」
      // 還沒加這一支：就算購物車已有別的酒，這個位置仍是「加入購物車」（熟客湊免運的情境）
      const syncMine = () => {
        const mine = readCart().find(x => x.id === Number(pdpBtn.dataset.pid));
        bar.classList.toggle("has-mine", !!mine);
        const ship = document.getElementById("stickyShip");
        if(mine && ship) ship.textContent = `本款 ${mine.qty} 件・${ship.textContent}`;
      };
      document.addEventListener("cart:updated", syncMine);
      syncMine();
    }
    // LINE 按鈕：連結本身就會開新分頁，這裡只記錄事件（之前另外 window.open 會開出兩個分頁）
    bar.querySelector("#stickyLineBtn")?.addEventListener("click", () => {
      trackEvent('click_line', { method: 'LINE', source: 'sticky_bar' });
    });
    document.body.classList.add("has-sticky-bar");
  }

  // 3) Mini cart overlay（抽屜式）
  if(!document.getElementById("miniCartOverlay")){
    const overlay = document.createElement("div");
    overlay.id = "miniCartOverlay";
    overlay.className = "mini-cart-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
      <div class="mini-cart-sheet" role="dialog" aria-modal="true" aria-labelledby="miniCartTitle">
        <div class="mini-cart-header">
          <div class="mini-cart-title" id="miniCartTitle">購物車（<span id="miniCartCount">0</span> 項）</div>
          <button class="mini-cart-close" id="miniCartClose" type="button" aria-label="關閉">✕</button>
        </div>
        <div class="mini-cart-body" id="miniCartList"></div>
        <div class="mini-cart-ship" id="miniCartShip" aria-live="polite" hidden></div>
        <div class="mini-cart-footer">
          <div class="mini-cart-sum" id="miniCartSum" hidden></div>
          <div class="mini-cart-total">總金額 <span id="miniCartTotal">0</span></div>
          <a class="btn btn-primary mini-cart-checkout" href="/order/">填寫詢問單</a>
          <p class="mini-cart-note">送出後由專人透過 LINE 確認品項與金額，確認前不需付款。</p>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    const close = () => closeMiniCart();
    overlay.addEventListener("click", (e) => { if(e.target === overlay) close(); });
    overlay.querySelector("#miniCartClose")?.addEventListener("click", close);
    document.addEventListener("keydown", (e) => { if(e.key === "Escape") close(); });
  }

  // order 頁隱藏 sticky bar，避免遮擋表單
  if(key === "order"){
    document.getElementById("stickyBar")?.classList.add("hidden");
    document.body.classList.remove("has-sticky-bar");
  }
}

/* ===== 對話框焦點管理（購物車抽屜、年齡驗證共用）=====
 * 打開時：背後頁面設為 inert（不能點、不能 Tab、報讀也略過），焦點移進對話框，Tab 只在裡面循環
 * 關閉時：解除 inert，焦點還給打開它的那顆按鈕
 */
function setPageInert(except, on){
  [...document.body.children].forEach(el => {
    if(el.tagName === "SCRIPT") return;
    if(on){
      if(el === except || (except && el.contains(except))) return;
      if(!el.inert){ el.inert = true; el.dataset.dlgInert = "1"; }
    }else if(el.dataset.dlgInert){
      // 加入購物車提示若在對話框開著時已收起，維持 inert，不要還原成看不見的 Tab 停點
      el.inert = el.id === "cartToast" && !el.classList.contains("show");
      delete el.dataset.dlgInert;
    }
  });
}
function dialogFocusables(root){
  return [...root.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter(el => el.getClientRects().length > 0);
}
function trapTab(root, e){
  if(e.key !== "Tab") return;
  const f = dialogFocusables(root);
  if(!f.length){ e.preventDefault(); return; }
  const first = f[0], last = f[f.length - 1];
  if(!root.contains(document.activeElement)){ e.preventDefault(); first.focus(); }
  else if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
}

let _miniCartReturnFocus = null;

/** 開啟 mini cart overlay */
function openMiniCart(){
  const overlay = document.getElementById("miniCartOverlay");
  if(!overlay) return;
  const wasOpen = overlay.style.display === "flex";
  renderMiniCart();
  overlay.style.display = "flex";
  overlay.setAttribute("aria-hidden", "false");
  if(!wasOpen){
    _miniCartReturnFocus = document.activeElement;
    // 抽屜打開時收起浮在上面的提示，避免蓋住購物車內容
    const toast = document.getElementById("cartToast");
    if(toast){ toast.classList.remove("show"); toast.inert = true; }
    document.querySelectorAll(".promo-toast").forEach(t => t.remove());
    setPageInert(overlay, true);
    if(!overlay.dataset.trap){
      overlay.dataset.trap = "1";
      overlay.addEventListener("keydown", (e) => trapTab(overlay.querySelector(".mini-cart-sheet") || overlay, e));
    }
    overlay.querySelector("#miniCartClose")?.focus();
  }

  const cart = readCart();
  if (cart.length > 0) {
    trackEvent('view_cart', {
      currency: 'TWD',
      value: cartTotal(),
      items: cart.map(p => ({
        item_id: String(p.id),
        item_name: p.name,
        item_category: p.category,
        price: p.price,
        quantity: p.qty
      }))
    });
  }
}

/** 關閉 mini cart overlay */
function closeMiniCart(){
  const overlay = document.getElementById("miniCartOverlay");
  if(!overlay) return;
  const wasOpen = overlay.style.display === "flex";
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden", "true");
  if(!wasOpen) return; // 全站 Esc 監聽也會呼叫這裡：沒開著就不動焦點
  setPageInert(overlay, false);
  // 焦點還給打開它的按鈕；若那顆按鈕已看不見（例如加入購物車提示已收起），改還給購物車按鈕
  const back = _miniCartReturnFocus;
  _miniCartReturnFocus = null;
  if(back && back !== document.body && document.contains(back) && back.getClientRects().length && !back.closest("[inert]")) back.focus();
  else (document.getElementById("cartFloat")?.getClientRects().length ? document.getElementById("cartFloat") : document.getElementById("stickyCartBtn"))?.focus();
}

/**
 * 渲染 mini cart overlay 內容
 * 含商品列（數量調整）、促銷區塊、總金額
 */
function renderMiniCart(){
  const listEl  = document.getElementById("miniCartList");
  const countEl = document.getElementById("miniCartCount");
  const totalEl = document.getElementById("miniCartTotal");
  if(!listEl || !countEl || !totalEl) return;

  const cart      = readCart();
  const itemCount = cart.reduce((s, p) => s + (p.qty || 0), 0);
  const promo     = applyPromotions(getCartContext());

  const fmt = n => "NT$" + Number(n).toLocaleString("en-US"); // 文案規範：NT$1,500

  countEl.textContent = String(itemCount);
  totalEl.textContent = fmt(promo.finalTotal);
  renderFreeShipProgress(document.getElementById("miniCartShip"), itemCount > 0 ? promo.finalTotal : null);

  // 有折扣時，總金額上方先列「小計」與「優惠折抵」，客人才對得上每一列的金額
  const sumEl = document.getElementById("miniCartSum");
  if(sumEl){
    sumEl.hidden = !(cart.length && promo.discount > 0);
    sumEl.innerHTML = sumEl.hidden ? "" : `
      <div class="mini-cart-sum-row"><span>小計</span><span>${fmt(cartTotal())}</span></div>
      <div class="mini-cart-sum-row is-discount"><span>優惠折抵</span><span>− ${fmt(promo.discount)}</span></div>`;
  }

  // 重畫前記住焦點在哪一顆（步進器、數量欄、移除），重畫後還原，鍵盤使用者不會被丟回頁首
  const active = document.activeElement;
  const focusKey = listEl.contains(active) ? active.dataset.focus : null;
  const focusRow = focusKey ? [...listEl.querySelectorAll(".mini-cart-item")].indexOf(active.closest(".mini-cart-item")) : -1;

  if(cart.length === 0){
    listEl.innerHTML = `<div class="mono">購物車目前沒有商品。</div><div id="promotionBlock" class="promotion-block"></div>`;
    renderPromotionBlock();
    if(focusKey) document.getElementById("miniCartClose")?.focus();
    return;
  }

  listEl.innerHTML = cart.map(p => {
    const qty = p.qty || 1;
    return `
    <div class="mini-cart-item">
      <div class="mini-cart-info">
        <div class="mini-cart-name">${p.name}</div>
        <div class="mini-cart-spec">${p.spec || ""}</div>
        <div class="mini-cart-line">
          <span class="mini-cart-unit">${fmt(p.price)}${qty > 1 ? ` × ${qty}` : ""}</span>
          ${qty > 1 ? `<span class="mini-cart-subtotal">${fmt(p.price * qty)}</span>` : ""}
        </div>
      </div>
      <div class="mini-cart-actions">
        <div class="mini-cart-qty">
          <button type="button" class="mini-qty-btn" data-focus="dec-${p.id}" aria-label="減少 ${p.name} 數量"
            onclick="setQty(${p.id}, ${Math.max(1, qty - 1)})">−</button>
          <input class="mini-qty-input" type="number" min="1" value="${qty}" data-focus="qty-${p.id}" aria-label="${p.name} 數量"
            onchange="setQty(${p.id}, this.value)">
          <button type="button" class="mini-qty-btn" data-focus="inc-${p.id}" aria-label="增加 ${p.name} 數量"
            onclick="setQty(${p.id}, ${qty + 1})">＋</button>
        </div>
        <button type="button" class="mini-remove" data-focus="rm-${p.id}" aria-label="移除 ${p.name}" onclick="removeFromCart(${p.id})">移除</button>
      </div>
    </div>`;
  }).join("");

  listEl.insertAdjacentHTML("beforeend", `<div id="promotionBlock" class="promotion-block"></div>`);
  renderPromotionBlock();

  if(focusKey){
    // 同一顆還在就回到同一顆；整列被移除了，就移到原位置（或上一列）的「移除」
    const rows = listEl.querySelectorAll(".mini-cart-item");
    const same = listEl.querySelector(`[data-focus="${focusKey}"]`);
    const near = rows[Math.min(focusRow, rows.length - 1)]?.querySelector(".mini-remove");
    (same || near || document.getElementById("miniCartClose"))?.focus();
  }
}


/* ===== 11. 促銷引擎 ===== */

/**
 * 套用所有促銷規則，回傳折扣計算結果
 * 規則來源：promotions_data.js 的 PROMOTIONS 陣列
 * - stackable: false → 不可疊加，自動選最優惠的一個
 * - stackable: true  → 可疊加，全部套用
 * @returns {{ finalTotal, discount, applied[] }}
 */
function applyPromotions(ctx){
  // 防錯：若頁面未載入 promotions 腳本則直接返回原始狀態
  if (typeof PROMOTIONS === 'undefined' || !Array.isArray(PROMOTIONS)) {
    return { finalTotal: ctx.subtotal, discount: 0, applied: [] };
  }

  let total = ctx.subtotal, discountTotal = 0;
  const applied = [];

  // 折扣碼包裝成條件式 promotion 後一併參與評選
  const activePromos = PROMOTIONS.concat(getActiveCouponPromotions());

  // 不可疊加：取折抵金額最大的那個；同一 stackGroup 的活動先加總成一個候選
  const candidates = {};
  activePromos.filter(p => !p.stackable).forEach(p => {
    if(p.condition(ctx)){
      const key = p.stackGroup || p.id;
      const c = candidates[key] || (candidates[key] = { amount: 0, entries: [] });
      const discount = p.apply(ctx);
      c.amount += discount;
      c.entries.push({ id: p.id, label: p.label, amount: discount });
    }
  });
  let best = null;
  Object.values(candidates).forEach(c => {
    if(c.amount > 0 && (!best || c.amount > best.amount)) best = c;
  });
  if(best){
    total -= best.amount; discountTotal += best.amount;
    best.entries.filter(e => e.amount > 0).forEach(e => applied.push(e));
  }

  // 可疊加：全部套用
  activePromos.filter(p => p.stackable).forEach(p => {
    if(p.condition(ctx)){
      const discount = p.apply(ctx);
      total -= discount; discountTotal += discount; 
      applied.push({ id: p.id, label: p.label, amount: discount }); 
    }
  });

  return { finalTotal: total, discount: discountTotal, applied };
}

/* ===== 11-b. 折扣碼引擎 ===== */

const COUPON_STORAGE_KEY  = "activeCouponHash";

/** SHA-256 → 16 進位字串 */
async function sha256Hex(str){
  const buf  = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0")).join("");
}

/** 檢查折扣碼是否在有效期間內（validFrom / validUntil 皆含當天，未設定則不限） */
function isCouponInPeriod(coupon){
  const today = new Date();
  if (coupon.validFrom  && today < new Date(coupon.validFrom  + "T00:00:00")) return false;
  if (coupon.validUntil && today > new Date(coupon.validUntil + "T23:59:59")) return false;
  return true;
}

/** 取得當前已啟用的折扣碼定義（用 sessionStorage 的 hash 反查） */
function getActiveCoupon(){
  if (!window.COUPONS) return null;
  const hash = sessionStorage.getItem(COUPON_STORAGE_KEY);
  if (!hash) return null;
  const coupon = window.COUPONS.find(c => c.hash === hash) || null;
  if (coupon && !isCouponInPeriod(coupon)) return null;
  return coupon;
}

/** 將已啟用折扣碼包裝成 promotion 陣列，供 applyPromotions 統一評選
 *  折抵 = 折扣率（rateTarget / rateDefault）＋ 滿額折抵（stepAmount / stepDiscount，選填），兩項累計
 *  ⚠️ 順序＝「先折扣率、再算滿額級距」：滿額折抵以折扣率套用後的金額為基準 */
function getActiveCouponPromotions(){
  const coupon = getActiveCoupon();
  if (!coupon) return [];
  return [{
    id:        coupon.id,
    label:     coupon.label,
    stackable: coupon.stackable === true,  // 預設不可疊加
    condition: () => true,
    apply(ctx){
      // ① 折扣率：指定商品用 rateTarget，其餘用 rateDefault（皆以原價小計為基準）
      //    有填 defaultIds 時，rateDefault 只套用在 defaultIds 內的商品，清單外商品不打折
      const targetIds = coupon.targetIds || [];
      const targetSub = ctx.items
        .filter(i => targetIds.includes(i.id))
        .reduce((s, p) => s + p.price * p.qty, 0);
      const otherSub  = Array.isArray(coupon.defaultIds)
        ? ctx.items
            .filter(i => !targetIds.includes(i.id) && coupon.defaultIds.includes(i.id))
            .reduce((s, p) => s + p.price * p.qty, 0)
        : ctx.subtotal - targetSub;
      const rateOff   = Math.round(targetSub * coupon.rateTarget + otherSub * coupon.rateDefault);

      // ② 滿額折抵（選填；語意與 promotions.data.js 的 stepAmount / stepDiscount / stepScope 相同）
      //    ⚠️ 順序＝「先折扣率、再算滿額級距」：基準是折扣率套用後的金額，不是原價
      //    基準看 stepScope："all" → 全館折後小計；未填或 "target" → 指定商品折後小計
      //    ⚠️ 未填 stepAmount / stepDiscount 的折扣碼 stepOff 恆為 0，行為與改版前完全相同
      const stepAmount   = Number(coupon.stepAmount)   || 0;
      const stepDiscount = Number(coupon.stepDiscount) || 0;
      let   stepOff      = 0;
      if (stepAmount > 0 && stepDiscount > 0) {
        const stepBase = coupon.stepScope === "all"
          ? ctx.subtotal - rateOff                                   // 全館：扣掉整筆折扣率折抵
          : targetSub - Math.round(targetSub * coupon.rateTarget);   // 指定商品：只扣該部分的折抵
        stepOff = Math.floor(stepBase / stepAmount) * stepDiscount;
      }

      return rateOff + stepOff;   // 折扣率與滿額折抵兩項累計
    }
  }];
}

/** 嘗試套用折扣碼；回傳 { ok, message } */
async function applyCouponCode(rawInput){
  const input = (rawInput || "").trim();
  if (!input) return { ok: false, message: "請輸入折扣碼" };

  if (!window.COUPONS) return { ok: false, message: "折扣碼系統未載入，請重整頁面" };

  const hash    = await sha256Hex(input);
  const matched = window.COUPONS.find(c => c.hash === hash);

  if (!matched) {
    return { ok: false, message: "折扣碼無效" };
  }

  if (!isCouponInPeriod(matched)) {
    return { ok: false, message: "折扣碼不在活動期間內" };
  }

  sessionStorage.setItem(COUPON_STORAGE_KEY, hash);
  return { ok: true, message: "折扣碼已套用", coupon: matched };
}

/** 移除已套用的折扣碼 */
function removeCoupon(){
  sessionStorage.removeItem(COUPON_STORAGE_KEY);
}

/** 渲染折扣碼 UI（#couponBlock） */
function renderCouponBlock(){
  const box = document.getElementById("couponBlock");
  if (!box) return;

  const coupon = getActiveCoupon();
  if (coupon) {
    box.innerHTML = `
      <div class="coupon-title">🎟️ 折扣碼</div>
      <div class="coupon-applied">
        <span class="coupon-applied-tag">✓ 已套用</span>
        <span class="coupon-applied-name">${coupon.label}</span>
        <button type="button" class="coupon-remove-btn" onclick="handleRemoveCoupon()">移除</button>
      </div>
    `;
  } else {
    box.innerHTML = `
      <div class="coupon-title">🎟️ 折扣碼</div>
      <div class="coupon-form">
        <input type="text" class="coupon-input" id="couponInput" size="1" placeholder="請輸入折扣碼" autocomplete="off" onkeydown="if(event.key==='Enter'){event.preventDefault();handleApplyCoupon();}">
        <button type="button" class="coupon-apply-btn" onclick="handleApplyCoupon()">套用</button>
      </div>
      <div class="coupon-msg" id="couponMsg"></div>
    `;
  }
}

/** 套用按鈕 handler */
async function handleApplyCoupon(){
  const input = document.getElementById("couponInput");
  const msg   = document.getElementById("couponMsg");
  if (!input) return;
  const res = await applyCouponCode(input.value);
  if (msg) {
    msg.textContent = res.message;
    msg.className   = "coupon-msg " + (res.ok ? "is-ok" : "is-err");
  }
  if (res.ok) {
    renderCouponBlock();
    refreshAllCartUI();
  }
}

/** 移除按鈕 handler */
function handleRemoveCoupon(){
  removeCoupon();
  renderCouponBlock();
  refreshAllCartUI();
}

/** 折扣碼套用後刷新所有相關 UI */
function refreshAllCartUI(){
  if (typeof updateCartUI === "function") updateCartUI();
  if (document.getElementById("cartMini")) renderCartMini();
  renderPromotionBlock();
}

// 暴露給 inline onclick 使用
window.handleApplyCoupon  = handleApplyCoupon;
window.handleRemoveCoupon = handleRemoveCoupon;

/**
 * 渲染促銷區塊（#promotionBlock）
 * 只列出活動期間內的促銷規則，已達成的打勾標示
 */
function renderPromotionBlock(){
  // 下單頁同時有兩個優惠區塊（右側摘要 #cartMini 裡、購物車抽屜 #miniCartList 裡），而且 id 相同：
  // getElementById 只會拿到第一個，抽屜裡那個會是空的 → 兩個容器裡的都畫。
  // ⚠️ 只認這兩個容器：order/index.html 在 #cartMini 外面還有一個同名的空區塊（從來不會被填），
  //    若連它一起畫，優惠清單會在摘要裡出現兩次
  let boxes = document.querySelectorAll("#cartMini .promotion-block, #miniCartList .promotion-block");
  if(!boxes.length){
    const first = document.getElementById("promotionBlock");
    boxes = first ? [first] : [];
  }
  if(!boxes.length || !window.PROMOTIONS) return;
  const html = promotionBlockHTML();
  boxes.forEach(box => { box.innerHTML = html; });
}

/** 優惠區塊的內容；沒有可列的活動時回傳空字串 */
function promotionBlockHTML(){
  // 已結束／尚未開始的活動不列出（金額計算另由各 promo 的 condition 擋掉）
  const livePromos = window.PROMOTIONS.filter(isPromoLive);
  if(livePromos.length === 0) return "";

  const ctx = getCartContext();
  const res = applyPromotions(ctx);
  const cart = readCart();

  // 購物車有酒時，只列跟購物車內酒款有關的活動（指定酒款活動要有任一支在車內；全館活動一律列出）
  // 購物車是空的：列出所有進行中的活動，當成資訊
  const inCart = id => cart.some(item => item.id === id);
  const shown = cart.length
    ? livePromos.filter(p => !Array.isArray(p.targetIds) || p.targetIds.some(inCart))
    : livePromos;
  if(shown.length === 0) return "";

  // 每個活動的狀態都寫成文字（不只靠打勾或顏色），報讀也聽得到
  const itemHtml = p => {
    if(!cart.length){
      return `<li class="promo-item"><span class="promo-mark" aria-hidden="true"></span><span class="promo-text"><span class="promo-label">${p.label}</span></span></li>`;
    }
    const ok = res.applied.some(a => a.id === p.id);
    let state = "pending", note = "";
    if(ok){
      state = "applied"; note = "已套用";
    }else{
      let met = false;
      try { met = !!p.condition(ctx); } catch(e){ met = false; }
      if(met && !p.stackable){
        state = "superseded"; note = "不可併用，已自動套用較優惠的方案";
      }else if(p.hint && typeof p.hint.minQty === "number" && Array.isArray(p.targetIds)){
        const qty = cart.filter(item => p.targetIds.includes(item.id)).reduce((s, item) => s + (item.qty || 0), 0);
        const need = p.hint.minQty - qty;
        if(need > 0) note = `活動酒款再加 ${need} 件即可套用`;
      }
    }
    return `<li class="promo-item is-${state}"><span class="promo-mark" aria-hidden="true"></span><span class="promo-text"><span class="promo-label">${p.label}</span>${note ? `<span class="promo-note">${note}</span>` : ""}</span></li>`;
  };

  return `
    <div class="promo-title">${cart.length ? "這些酒款的優惠" : "目前優惠"}</div>
    <ul class="promo-list">
      ${shown.map(itemHtml).join("")}
    </ul>
    ${res.discount > 0 ? `<div class="promo-discount">已折抵 NT$${res.discount}</div>` : `<div class="promo-hint"></div>`}
  `;
}

/**
 * 計算距離下一個折扣還差幾件（件數型）或還差多少金額（金額型）
 * 供加入購物車時的引導 toast 使用
 * 金額型會自帶 msg（完整訊息），件數型只回 need / text 由呼叫端組訊息
 * @returns {{ need: number, text: string, msg?: string } | null}
 */
function getNextPromotionHint(cartQty, addedId){
  if(!window.PROMOTIONS || !Array.isArray(PROMOTIONS)) return null;

  // 支援 combo-ids 型促銷：計算指定商品的購物車數量
  const cart = readCart();

  const hintPromos = PROMOTIONS
    .filter(p => isPromoLive(p) && p.hint && typeof p.hint.minQty === "number")
    .sort((a, b) => a.hint.minQty - b.hint.minQty);

  for(const p of hintPromos){
    let currentQty;
    if(p.type === "combo-ids" && Array.isArray(p.targetIds)){
      // combo-ids 型：加入的商品不在白名單內，不顯示此促銷的 toast
      if(addedId !== undefined && !p.targetIds.includes(addedId)) continue;
      // 只計算此促銷白名單內的商品數量
      currentQty = cart
        .filter(item => p.targetIds.includes(item.id))
        .reduce((s, item) => s + item.qty, 0);
    } else {
      // 舊版 quantity 型：計算全購物車件數
      currentQty = cartQty;
    }
    const need = p.hint.minQty - currentQty;
    if(need > 0) return { need, text: p.label };
  }

  /* ── 金額型提示（hint.kind === "amount"）：「再買 NT$X，可多折 NT$Y」──
     基準與 promo 的 apply() 一致：promo 有自訂 stepBase() / stepNeed() 就優先呼叫
     （例：中秋活動的級距是算 95 折後的金額），否則跟著該 promo 的 stepScope 走：
       stepScope:"all"  → 全館小計（加任何商品都會推進級距）
       未填 / "target"  → 只算白名單商品的小計
     上方件數型提示優先 —— 兩者都成立時只會發出件數型那一則。
     ⚠️ 客人身上有折扣碼時一律不提示：折扣碼與活動是擇優（stackable:false），
        此時「再買 X 元多折 100」不一定成立，寧可不提示也不要誤導。 */
  if(typeof getActiveCouponPromotions === "function" && getActiveCouponPromotions().length) return null;

  const amountPromos = PROMOTIONS.filter(p =>
    isPromoLive(p) && p.hint && p.hint.kind === "amount" &&
    (p.stepScope === "all" || Array.isArray(p.targetIds)) &&
    Number(p.stepAmount) > 0 && Number(p.stepDiscount) > 0
  );

  const hintCtx = getCartContext();   // 供 promo 自訂的 stepBase() / stepNeed() 使用

  for(const p of amountPromos){
    const allScope = p.stepScope === "all";   // 全館型：不受白名單限制

    // 只算白名單時，與 combo-ids 一致：剛加入的商品不在白名單內就不提示
    if(!allScope && addedId !== undefined && !p.targetIds.includes(addedId)) continue;

    // 基準小計：promo 有自訂 stepBase() 就以它為準（下架品已由 readCart 濾掉；price 缺值當 0）
    const sub = typeof p.stepBase === "function"
      ? p.stepBase(hintCtx)
      : allScope
        ? cartTotal()
        : cart
            .filter(item => p.targetIds.includes(item.id))
            .reduce((s, item) => s + (Number(item.price) || 0) * (Number(item.qty) || 0), 0);
    if(!Number.isFinite(sub) || sub <= 0) continue;   // 注意 NaN <= 0 為 false，需 isFinite 擋

    const step   = Number(p.stepAmount);
    // 差額要換算回「原價」才能對客人講：基準是折後金額時不能直接拿原價相減，
    // 所以 promo 有自訂 stepNeed() 就以它為準
    const need   = typeof p.stepNeed === "function"
      ? p.stepNeed(hintCtx)
      : step - (sub % step);                          // 正好落在級距上 → need === step（指向下一級）
    const within = Number(p.hint.nudgeWithin) || step;
    if(!(need > 0) || need > within) continue;        // 差太多就不提示，避免無感提示

    const prefix = allScope ? "再買" : "活動酒款再買";
    return { need, text: p.label, msg: `${prefix} NT$${need}，可多折 NT$${Number(p.stepDiscount)}` };
  }

  return null;
}

/**
 * 計算完整訂單金額（含折扣與運費）
 * 供 submitOrder 組訂單摘要文字使用
 */
function getOrderPricing(pickup, shipTemp){
  const ctx        = getCartContext();
  const promo      = applyPromotions(ctx);
  const itemsTotal = promo.finalTotal;
  return {
    subtotal:      ctx.subtotal,
    discounts:     promo.applied || [],
    discountTotal: promo.discount,
    itemsTotal,
    shippingFee:   calcShippingFee(pickup, itemsTotal, shipTemp),
    total:         itemsTotal + calcShippingFee(pickup, itemsTotal, shipTemp)
  };
}


/* ===== 12. Toast 通知 ===== */

let toastTimer = null;

/**
 * 加入購物車成功 Toast
 * 顯示圖片、名稱及目前購物車該品項總件數，2 秒後自動淡出
 */
function showCartToast(product, currentQty){
  let toast = document.getElementById("cartToast");
  if(!toast){
    toast = document.createElement("div");
    toast.id = "cartToast";
    toast.className = "cart-toast";
    document.body.appendChild(toast);
  }
  
  // 萃取第一張圖做縮圖（小尺寸，避免手機上縮圖還沒載完提示就消失）
  const cover = (Array.isArray(product.imgs) && product.imgs.length > 0) ? optimizeImgUrl(product.imgs[0], "w_96,h_96,c_limit") : "";

  toast.setAttribute("role", "status");
  toast.innerHTML = `
    <div class="cart-toast-inner">
      ${cover ? `<div class="cart-toast-img"><img src="${cover}" alt=""></div>` : ""}
      <div class="cart-toast-text">
        <div class="title">${document.querySelector(`.pdp-btn-cart[data-pid="${product.id}"]`)?.dataset.label === "加入預購" ? "已加入預購" : "已加入購物車"}</div>
        <div class="desc">${product.name}（共 ${currentQty} 件）</div>
      </div>
      <button type="button" class="cart-toast-view">查看購物車</button>
    </div>
  `;
  toast.querySelector(".cart-toast-view")?.addEventListener("click", () => {
    toast.classList.remove("show");
    toast.inert = true; // 提示收起；關閉抽屜時焦點改還給購物車按鈕
    openMiniCart();
  });

  toast.classList.add("show");
  toast.inert = false;

  // 3.5 秒後淡出；滑鼠停在上面或鍵盤聚焦時先不收
  // 收起後設為 inert：透明的「查看購物車」不再是看不見的 Tab 停點
  const hide = () => {
    if(toast.matches(":hover") || toast.contains(document.activeElement)){
      toastTimer = setTimeout(hide, 1200);
      return;
    }
    toast.classList.remove("show");
    toast.inert = true;
  };
  if(toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(hide, 3500);
}

/** 促銷引導 Toast（顯示距下一折扣還差幾件），2.6 秒後自動移除 */
function showPromoToast(text){
  const toast = document.createElement("div");
  toast.className = "promo-toast";
  toast.textContent = text;
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.classList.add("show"); });
  setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 300); }, 2600);
}


/* ===== 13. 下單流程 ===== */

let isSubmittingOrder = false; // 防止重複送出

/**
 * 送出訂單主流程：
 * 1. 讀取並驗證表單欄位
 * 2. 組訂單摘要文字
 * 3. 送至後端 /api/order（fire-and-forget）
 * 4. 複製訂單文字至剪貼簿
 * 5. 清空購物車，開啟成功 Modal
 */
async function submitOrder(){
  if(isSubmittingOrder) return;
  isSubmittingOrder = true;
  const btn = event?.target;
  if(btn) btn.disabled = true;

  // 讀取表單欄位
  const name    = (document.getElementById("order-name")?.value    || "").trim();
  const phone   = (document.getElementById("order-phone")?.value   || "").trim();
  const email   = (document.getElementById("order-email")?.value   || "").trim();
  const pickup  = (document.getElementById("order-pickup")?.value  || "自取").trim();
  const address = (document.getElementById("order-address")?.value || "").trim();
  const note    = (document.getElementById("order-note")?.value    || "").trim();

  // 防呆驗證
  if(!name)                          return alert("請填寫姓名"),           resetSubmit(btn);
  if(!phone || !isValidPhone(phone)) return alert("電話格式不正確"),        resetSubmit(btn);
  if(!email || !isValidEmail(email)) return alert("Email 格式不正確"),      resetSubmit(btn);
  if(pickup === "郵寄" && !address)  return alert("選擇郵寄時請填寫地址"), resetSubmit(btn);

  const cart = readCart();
  if(cart.length === 0){ alert("購物車沒有商品"); return resetSubmit(btn); }

  // 計算金額
  const shipTemp = pickup === "郵寄" ? getSelectedShipTemp() : "常溫";
  const pricing  = getOrderPricing(pickup, shipTemp);

  // 組訂單摘要（複製到剪貼簿後貼至 LINE）
  const summary =
`【酉時喝酒 詢問單】
姓名：${name}
電話：${phone}
Email：${email}
取貨方式：${pickup}${pickup === "郵寄" ? `（${shipTemp}配送）` : ""}
地址：${pickup === "郵寄" ? address : "（自取）"}
備註：${note || "（無）"}

【品項】
${cart.map(p => `${p.name}（${p.spec}）×${p.qty} - NT$${p.price}`).join("\n")}

【金額明細】
原價小計：NT$${pricing.subtotal}
${pricing.discounts.length ? pricing.discounts.map(d => `- ${d.label}：-NT$${d.amount}`).join("\n") : "（未使用折扣）"}
折扣合計：-NT$${pricing.discountTotal}
運費：NT$${pricing.shippingFee}
實付金額：NT$${pricing.total}
`;

  // 送至後端（fire-and-forget，不阻塞 UX）
  // keepalive：客人送出後馬上跳去 LINE 或關掉分頁，這個請求也會送完，不會被瀏覽器取消
  fetch(GAS_ORDER_URL, {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, email, pickup, address, summary,
      subtotal: pricing.subtotal, discount: pricing.discountTotal, total: pricing.total })
  }).catch(err => { console.error("Order submit failed:", err); });

  // 複製至剪貼簿
  let copiedOK = false;
  try{ await navigator.clipboard.writeText(summary); copiedOK = true; }
  catch(e){ console.warn("Clipboard copy failed", e); }

  trackEvent('purchase', {
    transaction_id: 'T' + Date.now() + Math.random().toString(36).slice(2, 7),
    currency: 'TWD',
    value: pricing.total,
    shipping: pricing.shippingFee,
    items: cart.map(p => ({
      item_id: String(p.id),
      item_name: p.name,
      item_category: p.category,
      price: p.price,
      quantity: p.qty
    }))
  });

  // 清空購物車
  localStorage.removeItem("cart");
  renderCartMini();
  if(typeof updateCartUI === "function") updateCartUI();

  openOrderSuccessModal({ lineUrl: BRAND.lineUrl, copiedOK, summary });
  resetSubmit(btn);
}

/** 重置送出狀態與按鈕可用性 */
function resetSubmit(btn){
  isSubmittingOrder = false;
  if(btn) btn.disabled = false;
}

/** 開啟下單成功 Modal，顯示複製狀態並提供前往 LINE 按鈕 */
function openOrderSuccessModal({ lineUrl, copiedOK, summary }){
  const modal = document.getElementById("orderSuccessModal");
  if(!modal){
    // fallback：Modal HTML 不存在時用 alert
    alert(copiedOK
      ? "詢問單已送出，訂單內容已複製。請手動前往 LINE 官方帳號貼上訊息完成下單。"
      : "詢問單已送出，但瀏覽器阻擋複製。請回到頁面手動複製訂單內容後前往 LINE。");
    return;
  }
  const status     = modal.querySelector("[data-role='copyStatus']");
  const statusHint = modal.querySelector("[data-role='copyHint']");
  const txt        = document.getElementById("orderSummaryText");
  const goLine     = document.getElementById("goLineAfterOrder");
  const goVerify   = document.getElementById("goVerifyAfterOrder");

  if(txt)    txt.value  = summary || "";
  if(goLine) {
    goLine.href = lineUrl || "#";
    goLine.onclick = () => trackEvent('click_line', { method: 'LINE', source: 'order_success_modal', verified: 'existing_customer' });
  }
  if(goVerify) {
    // 身分驗證頁網址
    const VERIFY_URL = "https://yousi-kyc-form.vercel.app/";
    const orderNo = "YS" + new Date().toISOString().replace(/[-:T.Z]/g, "").slice(0, 14);
    const name  = (document.getElementById("order-name")?.value  || "").trim();
    const phone = (document.getElementById("order-phone")?.value || "").trim();
    const params = new URLSearchParams();
    params.set("order", orderNo);
    if(name)  params.set("name", name);
    if(phone) params.set("phone", phone);
    goVerify.href = VERIFY_URL + (VERIFY_URL.includes("?") ? "&" : "?") + params.toString();
    goVerify.onclick = () => trackEvent('click_verify', { source: 'order_success_modal', order_no: orderNo });
  }
  if(status){
    status.classList.remove("is-ok", "is-fail");
    status.classList.add(copiedOK ? "is-ok" : "is-fail");
    status.textContent = copiedOK ? "已複製訂單內容" : "複製失敗（可手動複製）";
  }
  if(statusHint){
    statusHint.textContent = copiedOK
      ? "請點『前往 LINE』並直接貼上即可。"
      : "你的瀏覽器可能阻擋剪貼簿權限。請點下方『再次複製』，或手動全選文字後複製。";
  }
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
}

/** 關閉成功 Modal，可選擇是否跳轉回首頁 */
function closeOrderSuccessModal({ goHome = false } = {}){
  const modal = document.getElementById("orderSuccessModal");
  if(modal) modal.style.display = "none";
  document.body.classList.remove("modal-open");
  if(goHome) window.location.href = "/";
}

/** Modal 內「再次複製」按鈕：重新寫入剪貼簿，失敗則選取文字提示手動複製 */
async function copyOrderSummaryFromModal(){
  const txt   = document.getElementById("orderSummaryText");
  const modal = document.getElementById("orderSuccessModal");
  if(!txt || !modal) return;

  const status     = modal.querySelector("[data-role='copyStatus']");
  const statusHint = modal.querySelector("[data-role='copyHint']");
  const v = (txt.value || "").trim();
  if(!v){ if(status){ status.classList.add("is-fail"); status.textContent = "沒有可複製的內容"; } return; }

  try{
    await navigator.clipboard.writeText(v);
    if(status){ status.classList.remove("is-fail"); status.classList.add("is-ok"); status.textContent = "已複製訂單內容"; }
    if(statusHint) statusHint.textContent = "已更新剪貼簿。請前往 LINE 直接貼上即可。";
  }catch(e){
    txt.focus(); txt.select();
    if(status){ status.classList.remove("is-ok"); status.classList.add("is-fail"); status.textContent = "仍無法自動複製（已為你選取文字）"; }
    if(statusHint) statusHint.textContent = "請按 Ctrl+C（手機長按複製），再點『前往 LINE』貼上。";
  }
}

/**
 * 綁定 order 頁取貨方式選單的聯動邏輯：
 * 選「郵寄」→ 顯示地址欄與溫層選擇；切換時即時更新右側金額
 */
function bindOrderPickup(){
  const pickupEl = document.getElementById("order-pickup");
  const addrWrap = document.getElementById("addrWrap");
  const shipWrap = document.getElementById("shipWrap");
  if(!pickupEl) return;

  const sync = () => {
    const isMail = pickupEl.value === "郵寄";
    if(addrWrap) addrWrap.style.display = isMail ? "block" : "none";
    if(shipWrap) shipWrap.style.display = isMail ? "block" : "none";
    if(!isMail){
      const room = document.querySelector('input[name="shipTemp"][value="常溫"]');
      if(room) room.checked = true;
    }
    renderCartMini();
  };

  pickupEl.addEventListener("change", sync);
  document.querySelectorAll('input[name="shipTemp"]').forEach(r => r.addEventListener("change", () => renderCartMini()));
  sync();
}




/* ===== 14. 表單工具 ===== */

/** 台灣手機（09xxxxxxxx）或市話格式驗證 */
function isValidPhone(phone){
  if(!phone) return false;
  const p = phone.replace(/[\s-]/g, "");
  if(/^09\d{8}$/.test(p))         return true; // 手機
  if(/^0\d{1,2}\d{6,8}$/.test(p)) return true; // 市話
  return false;
}

/** Email 必填且格式驗證 */
function isValidEmail(email){
  if(!email) return false; // 必填
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ===== 16. 活動頁 ===== */

/**
 * 渲染活動頁內容
 * - 即將舉行（#eventUpcoming）：取最近一場顯示大卡片
 * - 過往活動（#eventPast）：依年份分組的時間軸
 * 資料來源：events_data.js 的 events 陣列
 */
function renderEvents(){
  const upBox   = document.getElementById("eventUpcoming");
  const pastBox = document.getElementById("eventPast");
  if(!upBox || !pastBox) return;

  const fallbackCover = "https://res.cloudinary.com/dcrn2oyxk/image/upload/f_auto,q_auto/LINE_ALBUM_果實酒茶酒_251205_1.webp";

  function parseDate(s){
    const m = (s || "").match(/^(\d{4})\/(\d{2})\/(\d{2})/);
    if(!m) return null;
    return new Date(parseInt(m[1],10), parseInt(m[2],10)-1, parseInt(m[3],10));
  }
  function fmtMonth(d){ return d.toLocaleString("en-US", { month: "short" }); }

  const upcoming = events
    .filter(e => e.status === "upcoming")
    .map(e => ({ ...e, _dt: parseDate(e.date) }))
    .sort((a, b) => (b._dt?.getTime()||0) - (a._dt?.getTime()||0));

  const ended = events
    .filter(e => e.status === "ended")
    .map(e => ({ ...e, _dt: parseDate(e.date) }))
    .sort((a, b) => (b._dt?.getTime()||0) - (a._dt?.getTime()||0)); // 最近的在上

  // 即將舉行：顯示所有活動
  if(upcoming.length === 0){
    upBox.innerHTML = `<div class="mono">目前沒有即將舉行的活動。</div>`;
  }else{
    upBox.innerHTML = upcoming.map(e => `
      <div class="event-up-card">
        <div class="event-up-media">
          <img src="${e.cover || fallbackCover}" alt="${e.title}" loading="lazy" decoding="async">
        </div>
        <div class="event-up-body">
          <div class="event-up-meta">${e.date}${e.time ? ` ${e.time}` : ""}${e.city ? `｜${e.city}` : ""}</div>
          <div class="event-up-name">${e.title}</div>
          <div class="event-up-loc">📍 ${e.location || ""}</div>
          ${e.note ? `<div class="event-note-wrap"><p class="mono event-note-text" style="margin:10px 0 0;">${e.note}</p><button class="event-note-toggle" onclick="toggleEventNote(this)" type="button">展開 ▾</button></div>` : ""}
          ${Array.isArray(e.tags) && e.tags.length
            ? `<div class="event-up-tags">${e.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}</div>`
            : ""}
        <div class="event-up-actions">
          <a class="btn-signup" href="${e.link}" target="_blank" rel="noopener">
            <span class="btn-signup-text">點我報名</span>
            <span class="btn-signup-arrow">→</span>
          </a>
        </div>
        </div>
      </div>
    `).join("");
  }

  // 過往活動：依年份分組
  if(ended.length === 0){
    pastBox.innerHTML = `<div class="mono">目前沒有過往活動。</div>`;
    return;
  }

  const groups = {};
  ended.forEach(e => {
    const y = e._dt ? e._dt.getFullYear() : "其他";
    if(!groups[y]) groups[y] = [];
    groups[y].push(e);
  });

  pastBox.innerHTML = Object.keys(groups)
    .sort((a, b) => (parseInt(b,10)||0) - (parseInt(a,10)||0))
    .map(y => `
      <div class="event-year">
        <h3>${y}</h3>
        <div class="event-timeline">
          ${groups[y].map(e => `
            <div class="event-row">
              <div class="event-date-pill">
                <div class="m">${e._dt ? fmtMonth(e._dt) : ""}</div>
                <div class="d">${e._dt ? String(e._dt.getDate()).padStart(2,"0") : ""}</div>
              </div>
              <div class="event-mobile-meta">
                <span class="m-date">${e.date}</span>
                <span class="m-time">${e.time || ""}</span>
              </div>
              <div class="event-item">
                <div class="event-thumb">
                  <img src="${e.cover || fallbackCover}" alt="${e.title}" loading="lazy" decoding="async">
                </div>
                <div class="event-info">
                  <div class="event-title-line">${e.title}</div>
                  <div class="event-sub"><span>📍 ${e.city || e.location || ""}</span></div>
                  <div style="margin-top:10px">
                    <a class="btn btn-ghost" href="${e.link}" target="_blank" rel="noopener">查看活動紀錄</a>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
}


/* ===== 17. 頁面初始化（DOMContentLoaded）===== */

document.addEventListener("DOMContentLoaded", () => {

  /* 全站通用 */
  renderAnnouncements(); // 全站統一公告邏輯 (置於最前以確保佈局計算正確)
  syncMenuToggle(false); // 漢堡選單補上報讀名稱與 aria-expanded
  setNavActive();        // nav active 狀態
  ageCheck();            // 年齡驗證

  // 填入所有 data-line-link / data-ig-link 元素的連結
  // 有 data-line-text（商品頁「用 LINE 詢問這款酒」）：開啟對話並預填酒名，客人不用再打一次是哪一支
  document.querySelectorAll("[data-line-link]").forEach(a => {
    a.href = a.dataset.lineText ? lineMessageUrl(a.dataset.lineText) : BRAND.lineUrl;
    a.target = "_blank"; 
    a.rel = "noopener"; 
    a.addEventListener("click", () => trackEvent('click_line', { method: 'LINE', source: 'global_link' }));
  });
  document.querySelectorAll("[data-ig-link]").forEach(a => { a.href = BRAND.igUrl; a.target = "_blank"; a.rel = "noopener"; });

  renderCartMini();       // 渲染購物車摘要（order 頁右側）
  ensureStickyUI();       // 注入浮動購物車 / sticky bar
  updateCartUI();         // 更新購物車 UI 數字

  const key = pathKey();

  /* 首頁：首屏輪盤、口味座標、促銷輪播各自在 home-reel.js／home-taste.js／index.html 內處理，這裡不需要另外初始化
     （舊版 #homeGrid 精選卡、.hero-bg 背景圖、#homePromo 橫幅已於 2026-11 改版移除） */

  /* 商品總覽頁：搜尋、篩選、?q=／?minp=／?maxp=／?cat= 網址參數都由 catalog-page.js 處理。
     這裡只替 build.js 寫進 HTML 的靜態卡補上活動徽章（catalog-page.js 沒跑起來時，畫面上看到的就是這批靜態卡） */
  if(key === "products") hydrateStaticGrid("productGrid");

  /* 商品分類頁（必須有 #productGrid 才視為分類頁，雙重保險）*/
  if(key === "products-sake" && document.getElementById("productGrid")){
    if(!hydrateStaticGrid("productGrid")){
      renderGrid(sortByPriorityDesc(products.filter(p => groupOf(p) === "sake")), "productGrid");
    }
  }
  if(key === "products-fruittea" && document.getElementById("productGrid")){
    if(!hydrateStaticGrid("productGrid")){
      renderGrid(sortByPriorityDesc(products.filter(p => groupOf(p) === "fruittea")), "productGrid");
    }
  }
  if(key === "products-spirits" && document.getElementById("productGrid")){
    if(!hydrateStaticGrid("productGrid")){
      renderGrid(sortByPriorityDesc(products.filter(p => groupOf(p) === "spirits")), "productGrid");
    }
  }
  if(key === "products-wine" && document.getElementById("productGrid")){
    if(!hydrateStaticGrid("productGrid")){
      renderGrid(sortByPriorityDesc(products.filter(p => groupOf(p) === "wine")), "productGrid");
    }
  }
  if(key === "products-mini" && document.getElementById("productGrid")){
    if(!hydrateStaticGrid("productGrid")){
      renderGrid(sortByPriorityDesc(products.filter(p => groupOf(p) === "mini")), "productGrid");
    }
  }

  /* 活動頁 */
  if(key === "offers") renderEvents();

  /* 商品詳情頁：活動橫幅注入 */
  if(key === "product-detail") injectPdpPromoBanner();

  /* 部落格文章列表 */
  if(key === "blog") initBlogList();

  /* 下單頁 */
  if(key === "order") {
    bindOrderPickup();
    const cart = readCart();
    if(cart.length > 0) {
      trackEvent('begin_checkout', {
        currency: 'TWD',
        value: cartTotal(),
        items: cart.map(p => ({
          item_id: String(p.id),
          item_name: p.name,
          item_category: p.category,
          price: p.price,
          quantity: p.qty
        }))
      });
    }
  }

  /* 舊 URL 相容：?item=N → 自動跳轉到新的靜態產品頁 */
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = parseInt(urlParams.get('item'), 10);
  if (itemId && !Number.isNaN(itemId)) {
    const productData = products.find(p => p.id === itemId);
    if(productData) {
      const cat = productData.category || 'fruit-tea';
      const slug = productData.name.replace(/[&]+/g, '').replace(/\s+/g, '-');
      window.location.replace(`/products/${cat}/${slug}/`);
      return; // 停止後續初始化
    }
  }

  // 渲染部落格關聯商品
  if(typeof renderBlogRelatedProducts === "function"){
    renderBlogRelatedProducts();
  }
});
/* ===== 活動描述展開/收起（手機版） ===== */
function toggleEventNote(btn){
  const wrap = btn.closest(".event-note-wrap");
  const text = wrap.querySelector(".event-note-text");
  const isOpen = wrap.classList.contains("is-open");
  if(isOpen){
    wrap.classList.remove("is-open");
    btn.textContent = "展開 ▾";
  } else {
    wrap.classList.add("is-open");
    btn.textContent = "收起 ▴";
  }
}

/* 商品列表與商品詳情：長頁面回到頂端 */
document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector("[data-catalog], #pdpMainImg")) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "product-back-top";
  button.hidden = true;
  button.setAttribute("aria-label", "回到頁首");
  button.title = "回到頁首";
  button.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M6 11l6-6 6 6M12 5v14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(button);

  let pending = false;
  const mobileBackTop = matchMedia("(max-width: 768px)");
  let scrollIdle;
  function sync() {
    pending = false;
    button.hidden = window.scrollY < window.innerHeight;
    let bottom = 16;
    document.querySelectorAll(".alcohol-bar, #stickyBar, #pdpDock").forEach(function (bar) {
      const style = getComputedStyle(bar);
      if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") return;
      const rect = bar.getBoundingClientRect();
      if (rect.height && rect.top < window.innerHeight && rect.bottom > 0) {
        bottom = Math.max(bottom, window.innerHeight - rect.top + 12);
      }
    });
    button.style.bottom = bottom + "px";
  }
  function schedule() {
    if (!pending) { pending = true; requestAnimationFrame(sync); }
  }
  window.addEventListener("scroll", function () {
    if (mobileBackTop.matches) {
      button.classList.add("is-scrolling");
      clearTimeout(scrollIdle);
      scrollIdle = setTimeout(function () {
        button.classList.remove("is-scrolling");
        schedule();
      }, 450);
    }
    schedule();
  }, { passive: true });
  mobileBackTop.addEventListener("change", function () {
    clearTimeout(scrollIdle);
    button.classList.remove("is-scrolling");
    schedule();
  });
  window.addEventListener("resize", schedule);
  const bars = document.querySelectorAll(".alcohol-bar, #stickyBar, #pdpDock");
  const observer = new MutationObserver(schedule);
  bars.forEach(function (bar) {
    observer.observe(bar, { attributes: true, childList: true, subtree: true });
    if (window.ResizeObserver) new ResizeObserver(schedule).observe(bar);
  });
  button.addEventListener("click", function () {
    const heading = document.querySelector("main h1");
    if (heading) {
      const previous = heading.getAttribute("tabindex");
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
      heading.addEventListener("blur", function () {
        if (previous === null) heading.removeAttribute("tabindex");
        else heading.setAttribute("tabindex", previous);
      }, { once: true });
    }
    window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });
  sync();
});
