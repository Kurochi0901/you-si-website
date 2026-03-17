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

// 商品分類顯示順序（總覽頁排序用）
const CATEGORY_ORDER = ["sake", "fruit-tea", "wine", "spirits", "mini"];

// 風味刻度格數（1~5）
const SCALE_MAX = 5;


/* ===== 2. 路由與頁面工具 ===== */

/**
 * 依 URL pathname 回傳對應的頁面 key
 * 用於 DOMContentLoaded 判斷要執行哪段初始化邏輯
 */
function pathKey(){
  const p = location.pathname.replace(/\/+/g, '/');
  if(p === "/" || p === "/index.html")                 return "home";
  if(p.startsWith("/age"))                             return "age";
  if(p.startsWith("/about"))                           return "about";
  if(p.startsWith("/offers"))                          return "offers";
  if(p.startsWith("/order"))                           return "order";
  if(p === "/products/" || p === "/products/index.html") return "products";
  if(p.startsWith("/products/sake"))                   return "products-sake";
  if(p.startsWith("/products/fruit-tea"))              return "products-fruittea";
  if(p.startsWith("/products/fruit"))                  return "products-fruittea"; // 舊路徑相容
  if(p.startsWith("/products/tea"))                    return "products-fruittea"; // 舊路徑相容
  if(p.startsWith("/products/wine"))                   return "products-wine";
  if(p.startsWith("/products/spirits"))                return "products-spirits";
  if(p.startsWith("/products/mini"))                   return "products-mini";
  if(p.startsWith("/wineries"))                        return "wineries";
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
    if(key === "order"              && href.startsWith("/order"))     active = true;
    if(key === "wineries"           && href.startsWith("/wineries")) active = true;
    if(active) a.classList.add("active");
  });
}

/** 手機漢堡選單開關 */
function toggleMenu(){
  document.querySelector("nav")?.classList.toggle("open");
}

/** Hero 區域固定背景圖（單張，不輪播） */
function initHeroBackground(){
  const el = document.querySelector(".hero-bg");
  if(!el) return;
  el.style.backgroundImage = `url('https://res.cloudinary.com/dcrn2oyxk/image/upload/f_auto,q_auto/LINE_ALBUM_果實酒茶酒_251205_1.webp')`;
}

/** Fisher-Yates 隨機打亂陣列，回傳新陣列（不修改原陣列） */
function shuffleArray(arr){
  const a = [...arr];
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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

/** 頁面載入時檢查年齡驗證，未通過則跳轉至 /age/ */
function ageCheck(){
  if(location.pathname.startsWith("/age")) return; // 驗證頁本身不攔截
  if(!_readAgeOk()){
    const from = encodeURIComponent(location.pathname + location.search + location.hash);
    location.href = "/age/?from=" + from;
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

/** 總覽頁排序：先依 CATEGORY_ORDER，再依 priority 大→小 */
function sortAllByCategoryThenPriority(list){
  return [...list].sort((a, b) => {
    const ca = CATEGORY_ORDER.indexOf(a?.category);
    const cb = CATEGORY_ORDER.indexOf(b?.category);
    const ga = ca === -1 ? 999 : ca, gb = cb === -1 ? 999 : cb;
    if(ga !== gb) return ga - gb;
    const pa = getPriority(a), pb = getPriority(b);
    if(pa !== pb) return pb - pa;
    return (a.id || 0) - (b.id || 0);
  });
}

/**
 * 商品總覽頁的即時篩選邏輯
 * 讀取頁面上的搜尋關鍵字、分類、最低/最高價格，
 * 過濾後排序並重新渲染 #productGrid
 */
function applyFilters(){
  const qEl   = document.getElementById("q");
  const catEl = document.getElementById("cat");
  const minpEl = document.getElementById("minp");
  const maxpEl = document.getElementById("maxp");
  if(!qEl && !catEl && !minpEl && !maxpEl) return;

  const q    = qEl   ? qEl.value.trim().toLowerCase() : "";
  const cat  = catEl ? catEl.value : "all";
  const minp = minpEl && minpEl.value ? parseInt(minpEl.value, 10) : 0;
  const maxp = maxpEl && maxpEl.value ? parseInt(maxpEl.value, 10) : 999999;

  const list = products.filter(p => {
    if(cat !== "all" && groupOf(p) !== cat) return false;
    if(p.price < minp || p.price > maxp)    return false;
    if(q && !`${p.name} ${p.spec} ${p.type}`.toLowerCase().includes(q)) return false;
    return true;
  });

  // 選定分類：該類內 priority 排序；all：先分類再 priority
  renderGrid(cat !== "all" ? sortByPriorityDesc(list) : sortAllByCategoryThenPriority(list), "productGrid");
}


/* ===== 5. 商品 Grid 與 Card 渲染 ===== */

/**
 * 將商品陣列渲染成卡片 Grid
 * @param {Array}  list - 商品陣列
 * @param {string} id   - 目標容器的 element id
 */
/**
 * 依商品 priority 產生推薦 badge HTML
 * priority 5 → 「店長精選」深棕 badge
 * priority 4 → 「推薦」暖金 badge
 * 其餘 → 空字串
 */
function renderPriorityBadge(p){
  const pr = getPriority(p);
  if(pr === 5) return `<span class="priority-badge priority-badge--5">店長精選</span>`;
  if(pr === 4) return `<span class="priority-badge priority-badge--4">推薦</span>`;
  return "";
}

function renderGrid(list, id){
  const box = document.getElementById(id);
  if(!box) return;
  box.innerHTML = list.map(p => {
    const cover = Array.isArray(p.imgs) ? p.imgs[0] : "";
    return `
      <div class="card" style="position:relative;">
        ${renderPriorityBadge(p)}
        <div class="card-media">
          <img src="${cover}" alt="${p.name}" loading="lazy" decoding="async"
            onclick="openProduct(${p.id})" style="cursor:pointer">
        </div>
        <div class="card-body">
          <div class="name" onclick="openProduct(${p.id})" style="cursor:pointer">${p.name}</div>
          <div class="spec">${p.spec || ""}</div>
          <div class="card-meta">
            <div class="price-wrap">${renderPrice(p)}</div>
            <button class="btn-add" onclick="addToCart(${p.id})">加入購物車</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/** 渲染商品價格，有原價則同時顯示劃線原價 */
function renderPrice(p){
  if(p.originPrice && p.originPrice > p.price){
    return `<div class="price-now">NT$${p.price}</div><div class="price-origin">NT$${p.originPrice}</div>`;
  }
  return `<div class="price-now">NT$${p.price}</div>`;
}

/** 產生 Schema.org JSON-LD 商品結構化資料，注入 <head>（SEO 用） */
function injectProductSchema(list, title){
  if(!Array.isArray(list) || list.length === 0) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": title,
    "itemListElement": list.slice(0, 10).map((p, i) => ({
      "@type": "Product",
      "position": i + 1,
      "name": p.name,
      "brand": BRAND.name,
      "offers": { "@type": "Offer", "priceCurrency": "TWD", "price": p.price,
        "availability": "https://schema.org/InStock" }
    }))
  });
  document.head.appendChild(script);
}


/* ===== 6. 商品 Modal（Lightbox）===== */

// 點擊 lightbox 背景關閉
document.addEventListener("click", (e) => {
  if(e.target && e.target.id === "lightbox") closeLightbox();
});

/**
 * 點擊商品卡片後開啟商品詳情 Modal
 * 包含：圖片切換、風味刻度、產品資訊、酒造介紹
 */
function openProduct(id){
  const p = products.find(x => x.id === id);
  if(!p) return;

  const box  = document.getElementById("lightbox");
  const img  = document.getElementById("lightbox-img");
  const note = document.getElementById("lightbox-note");
  if(!box || !note) return;

  if(img) img.style.display = "none";
  note.style.display = "block";

  // 初始化圖片切換狀態
  window._currentProductImgs = Array.isArray(p.imgs) ? p.imgs : [];
  _currentImgIndex = 0;

  note.innerHTML = `
    <div class="product-modal" role="dialog" aria-modal="true" aria-label="${p.name}">
      <button class="modal-close" type="button" aria-label="關閉" onclick="closeLightbox()">✕</button>

      <div class="product-media">
        ${renderProductImages(window._currentProductImgs, p.name)}
      </div>

      <div class="product-content">
        <h3>${p.name}</h3>
        <div class="price-block">${renderPrice(p)}</div>

        <div class="feature-block">
          <h4 class="feature-title">酒款特色</h4>
          <p class="feature-desc">${p.note?.oneLine || ""}</p>
        </div>

        ${getScaleMetaByType(p.type).map(meta => renderScaleAxis(meta, p.scale?.[meta.key])).join("")}

        <div class="info-section">
          <h4 class="info-title">產品資訊</h4>
          <ul class="info-list">
            ${p.info?.brand   ? `<li><span>品牌：</span><b>${p.info.brand}</b></li>`       : ""}
            ${p.info?.origin  ? `<li><span>產地：</span><b>${p.info.origin}</b></li>`      : ""}
            ${p.info?.rice    ? `<li><span>原料米：</span><b>${p.info.rice}</b></li>`      : ""}
            ${p.info?.variety ? `<li><span>葡萄品種：</span><b>${p.info.variety}</b></li>` : ""}
            ${p.info?.yeast   ? `<li><span>酵母：</span><b>${p.info.yeast}</b></li>`       : ""}
            ${p.info?.polish  ? `<li><span>精米步合：</span><b>${p.info.polish}</b></li>`  : ""}
            ${p.info?.alcohol ? `<li><span>酒精濃度：</span><b>${p.info.alcohol}</b></li>` : ""}
            ${p.info?.volume  ? `<li><span>容量：</span><b>${p.info.volume}</b></li>`      : ""}
          </ul>
        </div>

        ${renderWinery(p.wineryId)}
      </div>
    </div>
  `;

  box.style.display = "flex";
  document.body.classList.add("modal-open");
}

/** 關閉 lightbox / 商品 Modal，解除 body 捲動鎖定 */
function closeLightbox(){
  const box = document.getElementById("lightbox");
  if(box) box.style.display = "none";
  document.body.classList.remove("modal-open");
}

/** 渲染酒造介紹區塊（需商品有 wineryId 且 wineries 資料已載入） */
function renderWinery(id){
  if(!id || !window.wineries) return "";
  const w = window.wineries.find(x => x.id === id);
  if(!w) return "";
  return `
    <hr>
    <h4>酒造介紹</h4>
    <p><strong>${w.name}</strong>｜${w.location}</p>
    <p>${w.description}</p>
  `;
}


/* ===== 7. 商品圖片切換 ===== */

let _currentImgIndex = 0; // 目前顯示的圖片索引（對應 window._currentProductImgs）

/** 渲染商品圖片區域（含左右切換按鈕） */
function renderProductImages(imgs = [], name = ""){
  if(!imgs.length){
    return `<div class="product-gallery empty"><div class="product-img-empty">（尚未提供圖片）</div></div>`;
  }
  return `
    <div class="product-gallery">
      <button class="img-btn left" onclick="prevProductImg()">‹</button>
      <img id="productImg" src="${imgs[0]}" alt="${name}">
      <button class="img-btn right" onclick="nextProductImg()">›</button>
    </div>
  `;
}

/** 將 #productImg 切換為 _currentImgIndex 對應的圖片 */
function updateProductImg(){
  const img = document.getElementById("productImg");
  if(!img || !window._currentProductImgs.length) return;
  img.src = window._currentProductImgs[_currentImgIndex];
}

function prevProductImg(){
  if(!window._currentProductImgs.length) return;
  _currentImgIndex = (_currentImgIndex - 1 + window._currentProductImgs.length) % window._currentProductImgs.length;
  updateProductImg();
}

function nextProductImg(){
  if(!window._currentProductImgs.length) return;
  _currentImgIndex = (_currentImgIndex + 1) % window._currentProductImgs.length;
  updateProductImg();
}


/* ===== 8. 風味刻度 ===== */

/**
 * 依商品 type 回傳對應的風味刻度軸設定
 * 清酒：口感（辛口/甘口）+ 風味（米旨/果香）
 * 果實酒/茶酒：風味（酸度/甜度）+ 口感（清爽/濃郁）
 * 葡萄酒：單寧 + 酒體
 * 烈酒：不顯示刻度
 * @returns {Array<{key, title, left, right}>}
 */
function getScaleMetaByType(type){
  if(type === "烈酒") return [];
  if(type === "清酒") return [
    { key: "sakeDrySweet",    title: "口感", left: "辛口", right: "甘口" },
    { key: "sakeUmamiFruity", title: "風味", left: "米旨", right: "果香" }
  ];
  if(type === "果實酒" || type === "茶酒") return [
    { key: "ftAcidSweet", title: "風味", left: "酸度", right: "甜度" },
    { key: "ftFreshRich", title: "口感", left: "清爽", right: "濃郁" }
  ];
  if(type === "葡萄酒") return [
    { key: "wineTannin",    title: "單寧", left: "單寧輕盈", right: "單寧強烈" },
    { key: "wineFreshFull", title: "酒體", left: "清爽",     right: "厚實" }
  ];
  return [];
}

/**
 * 渲染單條風味刻度軸（單點高亮，非累積式）
 * @param {{ title, left, right }} meta - 刻度設定
 * @param {number|null} rawLevel        - 原始數值（1~SCALE_MAX）
 */
function renderScaleAxis(meta, rawLevel){
  const lv = (() => { const v = parseInt(rawLevel, 10); return Number.isNaN(v) ? null : Math.min(SCALE_MAX, Math.max(1, v)); })();
  return `
    <div class="scale-block">
      <div class="scale-head"><strong class="scale-title">${meta.title}</strong></div>
      <div class="scale-track">
        <div class="scale-bars" aria-label="${meta.title}：${meta.left} 到 ${meta.right}">
          ${Array.from({ length: SCALE_MAX }, (_, i) => `<span class="${lv === i+1 ? 'on' : ''}"></span>`).join("")}
        </div>
        <div class="scale-axis" aria-hidden="true">
          <span class="axis-left">${meta.left}</span>
          <span class="axis-right">${meta.right}</span>
        </div>
      </div>
      <div class="scale-note">${lv ? "" : "未標示"}</div>
    </div>
  `;
}


/* ===== 9. 購物車核心 ===== */

/** 從 localStorage 讀取購物車原始資料（[{id, qty}]） */
function getCart(){ return JSON.parse(localStorage.getItem("cart") || "[]"); }

/** 儲存購物車至 localStorage */
function saveCart(c){ localStorage.setItem("cart", JSON.stringify(c)); }

/**
 * 將商品加入購物車
 * 已存在則 qty++，否則新增一筆
 * 加入後觸發加入成功 toast 與促銷引導 toast
 */
function addToCart(id){
  const cart = getCart();
  const item = cart.find(x => x.id === id);
  if(item) item.qty++;
  else     cart.push({ id, qty: 1 });

  saveCart(cart);
  renderCartMini();
  updateCartUI();

  const p = products.find(p => p.id === id);
  if(!p) return;

  showCartToast(p.name, cart.find(x => x.id === id)?.qty || 1);

  // 促銷引導提示：距離下一個折扣還差幾件
  // 傳入剛加入的商品 id，只對「該商品屬於促銷白名單」的促銷顯示 toast
  const totalQty  = cart.reduce((s, x) => s + (x.qty || 0), 0);
  const nextPromo = getNextPromotionHint(totalQty, id);
  if(nextPromo) showPromoToast(`再買 ${nextPromo.need} 件可享 ${nextPromo.text}`);
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
  if(stickyTotal) stickyTotal.textContent = "NT$" + promo.finalTotal;

  const overlay = document.getElementById("miniCartOverlay");
  if(overlay && overlay.style.display === "flex") renderMiniCart();

  if(document.getElementById("cartMini")) renderCartMini();
  renderPromotionBlock();
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
    pickup      = (document.getElementById("order-pickup")?.value || "店內取貨").trim();
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
        <div class="cart-item-price">NT$${p.price}</div>
      </div>
      <div class="cart-item-side">
        <div class="cart-item-qty-wrap">
          <div class="qty-pill">
            <button class="qty-btn" onclick="setQty(${p.id}, ${Math.max(1,(p.qty||1)-1)})">−</button>
            <span class="qty-num">${p.qty}</span>
            <button class="qty-btn" onclick="setQty(${p.id}, ${(p.qty||1)+1})">＋</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${p.id})">移除</button>
        </div>
      </div>
    </div>
  `).join("");

  // 運費列：只在 order 頁且選擇郵寄時顯示
  const shippingRowHtml = (isOrderPage && pickup === "郵寄") ? `
    <div class="cart-total-row cart-total-shipping">
      <span>運費（${shipTemp}${itemsTotal >= SHIPPING_FREE_THRESHOLD ? "｜滿額免運" : ""}）</span>
      <span>${shippingFee > 0 ? `NT$${shippingFee}` : "NT$0"}</span>
    </div>` : "";

  wrap.innerHTML = `
    <div class="cart-items">${itemsHtml}</div>
    <div class="cart-total">
      <div class="cart-total-row cart-total-subtotal"><span>小計</span><span>NT$${subtotal}</span></div>
      <div id="promotionBlock" class="promotion-block"></div>
      ${promo.discount > 0 ? `<div class="cart-total-row cart-total-discount"><span>優惠折抵</span><span>- NT$${promo.discount}</span></div>` : ""}
      ${shippingRowHtml}
      <div class="cart-total-row cart-total-final"><strong>總金額</strong><strong>NT$${grandTotal}</strong></div>
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
      wrap.innerHTML = `
        <span class="cart-float-icon" aria-hidden="true">🛒</span>
        <span class="cart-float-badge" id="cartBadge" aria-label="購物車品項數">0</span>
      `;
      const navCta = header.querySelector(".nav-cta");
      if(navCta) header.insertBefore(wrap, navCta);
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
    bar.innerHTML = `
      <button class="sticky-cart" id="stickyCartBtn" type="button" aria-label="查看已選酒款">
        <div class="sticky-cart-top">🛒 <span id="stickyCount">0</span> 項</div>
        <div class="sticky-cart-bottom">NT$ <span id="stickyTotal">0</span></div>
      </button>
      <a class="sticky-cta" id="stickyLineBtn" href="${BRAND.lineUrl}" target="_blank" rel="noopener">LINE 詢問推薦</a>
    `;
    document.body.appendChild(bar);
    bar.querySelector("#stickyCartBtn")?.addEventListener("click", openMiniCart);
    // LINE 按鈕直接綁定（動態注入後無法靠 data-line-link 統一處理）
    bar.querySelector("#stickyLineBtn")?.addEventListener("click", () => {
      window.open(BRAND.lineUrl, "_blank", "noopener");
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
      <div class="mini-cart-sheet" role="dialog" aria-modal="true" aria-label="已選酒款">
        <div class="mini-cart-header">
          <div class="mini-cart-title">已選酒款（<span id="miniCartCount">0</span> 項）</div>
          <button class="mini-cart-close" id="miniCartClose" type="button" aria-label="關閉">✕</button>
        </div>
        <div class="mini-cart-body" id="miniCartList"></div>
        <div class="mini-cart-footer">
          <div class="mini-cart-total">總金額 <span id="miniCartTotal">0</span></div>
          <a class="btn btn-primary mini-cart-checkout" href="/order/">前往下單</a>
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

/** 開啟 mini cart overlay */
function openMiniCart(){
  const overlay = document.getElementById("miniCartOverlay");
  if(!overlay) return;
  renderMiniCart();
  overlay.style.display = "flex";
  overlay.setAttribute("aria-hidden", "false");
}

/** 關閉 mini cart overlay */
function closeMiniCart(){
  const overlay = document.getElementById("miniCartOverlay");
  if(!overlay) return;
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden", "true");
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

  countEl.textContent = String(itemCount);
  totalEl.textContent = "NT$" + promo.finalTotal;

  if(cart.length === 0){
    listEl.innerHTML = `<div class="mono">購物車目前沒有商品。</div><div id="promotionBlock" class="promotion-block"></div>`;
    renderPromotionBlock();
    return;
  }

  listEl.innerHTML = cart.map(p => `
    <div class="mini-cart-item">
      <div class="mini-cart-info">
        <div class="mini-cart-name">${p.name}</div>
        <div class="mini-cart-spec">${p.spec || ""}</div>
      </div>
      <div class="mini-cart-actions">
        <div class="mini-cart-qty">
          <button type="button" class="mini-qty-btn" aria-label="減少數量"
            onclick="setQty(${p.id}, ${Math.max(1,(p.qty||1)-1)})">−</button>
          <input class="mini-qty-input" type="number" min="1" value="${p.qty||1}"
            onchange="setQty(${p.id}, this.value)">
          <button type="button" class="mini-qty-btn" aria-label="增加數量"
            onclick="setQty(${p.id}, ${(p.qty||1)+1})">＋</button>
        </div>
        <button type="button" class="mini-remove" onclick="removeFromCart(${p.id})">移除</button>
      </div>
    </div>
  `).join("");

  listEl.insertAdjacentHTML("beforeend", `<div id="promotionBlock" class="promotion-block"></div>`);
  renderPromotionBlock();
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
  let total = ctx.subtotal, discountTotal = 0;
  const applied = [];

  // 不可疊加：取折抵金額最大的那個
  // apply(ctx) 回傳「折抵金額」（正整數），不再是折後總價
  let bestExclusive = null, bestDiscount = 0;
  PROMOTIONS.filter(p => !p.stackable).forEach(p => {
    if(p.condition(ctx)){
      const discount = p.apply(ctx);
      if(discount > bestDiscount){ bestDiscount = discount; bestExclusive = p; }
    }
  });
  if(bestExclusive){
    total -= bestDiscount; discountTotal += bestDiscount;
    applied.push({ id: bestExclusive.id, label: bestExclusive.label, amount: bestDiscount });
  }

  // 可疊加：全部套用
  PROMOTIONS.filter(p => p.stackable).forEach(p => {
    if(p.condition(ctx)){
      const discount = p.apply(ctx);
      if(discount > 0){ total -= discount; discountTotal += discount; applied.push({ id: p.id, label: p.label, amount: discount }); }
    }
  });

  return { finalTotal: total, discount: discountTotal, applied };
}

/**
 * 渲染促銷區塊（#promotionBlock）
 * 列出所有促銷規則，已達成的打勾標示
 */
function renderPromotionBlock(){
  const box = document.getElementById("promotionBlock");
  if(!box || !window.PROMOTIONS) return;
  const res = applyPromotions(getCartContext());
  box.innerHTML = `
    <div class="promo-title">目前優惠</div>
    <ul class="promo-list">
      ${window.PROMOTIONS.map(p => {
        const ok = res.applied.some(a => a.id === p.id);
        return `<li class="promo-item${ok ? ' achieved' : ''}"><span class="promo-check-box"></span>${p.label}</li>`;
      }).join("")}
    </ul>
    ${res.discount > 0 ? `<div class="promo-discount">已折抵 NT$${res.discount}</div>` : `<div class="promo-hint"></div>`}
  `;
}

/** 渲染首頁促銷橫幅（#homePromo），列出所有促銷標籤文字 */
function renderHomePromotion(){
  const box = document.getElementById("homePromo");
  if(!box || !window.PROMOTIONS) return;
  box.innerHTML = `
    <div class="home-promo-inner">
      <div class="home-promo-title">目前優惠</div>
      <div class="home-promo-items">${window.PROMOTIONS.map(p => p.label).join(" ／ ")}</div>
    </div>
  `;
}

/**
 * 計算距離下一個數量折扣還差幾件
 * 供加入購物車時的引導 toast 使用
 * @returns {{ need: number, text: string } | null}
 */
function getNextPromotionHint(cartQty, addedId){
  if(!window.PROMOTIONS || !Array.isArray(PROMOTIONS)) return null;

  // 支援 combo-ids 型促銷：計算指定商品的購物車數量
  const cart = readCart();

  const hintPromos = PROMOTIONS
    .filter(p => p.hint && typeof p.hint.minQty === "number")
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
  return null;
}

// 接到購物車更新後，同步更新 #totalAmount 與促銷區塊
const _updateCartUI = window.updateCartUI;
window.updateCartUI = function(){
  if(typeof _updateCartUI === "function") _updateCartUI();
  const totalEl = document.getElementById("totalAmount");
  if(totalEl) totalEl.textContent = "NT$" + applyPromotions(getCartContext()).finalTotal;
  renderPromotionBlock();
};

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
 * 格式：「已加入購物車 / 數量: 商品名稱 × n」
 * 2 秒後自動消失
 */
function showCartToast(productName, qty = 1){
  let toast = document.getElementById("cartToast");
  if(!toast){
    toast = document.createElement("div");
    toast.id = "cartToast";
    toast.className = "cart-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <div class="cart-toast-inner">
      <div class="cart-toast-text">
        <div class="title">已加入購物車</div>
        <div class="desc">數量: ${productName} × ${qty}</div>
      </div>
    </div>
  `;
  toast.classList.add("show");
  if(toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.classList.remove("show"); }, 2000);
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
  const pickup  = (document.getElementById("order-pickup")?.value  || "店內取貨").trim();
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
`【酉時喝酒 訂單】
姓名：${name}
電話：${phone}
Email：${email}
取貨方式：${pickup}
地址：${pickup === "郵寄" ? address : "（店內取貨）"}
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
  fetch(GAS_ORDER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, email, pickup, address, summary,
      subtotal: pricing.subtotal, discount: pricing.discountTotal, total: pricing.total })
  }).catch(err => { console.error("Order submit failed:", err); });

  // 複製至剪貼簿
  let copiedOK = false;
  try{ await navigator.clipboard.writeText(summary); copiedOK = true; }
  catch(e){ console.warn("Clipboard copy failed", e); }

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
      ? "訂單已送出，訂單內容已複製。請手動前往 LINE 官方帳號貼上訊息完成下單。"
      : "訂單已送出，但瀏覽器阻擋複製。請回到頁面手動複製訂單內容後前往 LINE。");
    return;
  }
  const status     = modal.querySelector("[data-role='copyStatus']");
  const statusHint = modal.querySelector("[data-role='copyHint']");
  const txt        = document.getElementById("orderSummaryText");
  const goLine     = document.getElementById("goLineAfterOrder");

  if(txt)    txt.value  = summary || "";
  if(goLine) goLine.href = lineUrl || "#";
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

/** 只允許輸入數字（含貼上防護），綁定所有 .js-only-number 元素 */
function bindOnlyNumberInputs(){
  document.querySelectorAll(".js-only-number").forEach(input => {
    input.addEventListener("input", () => { input.value = input.value.replace(/\D+/g, ""); });
    input.addEventListener("paste", e => {
      e.preventDefault();
      input.value += (e.clipboardData || window.clipboardData).getData("text").replace(/\D+/g, "");
    });
  });
}


/* ===== 15. QR Code ===== */

/** 產生 IG QR Code 圖片並填入所有 .ig-qr-img 元素 */
function setIgQr(){
  const imgs = document.querySelectorAll(".ig-qr-img");
  if(!imgs.length) return;
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(BRAND.igUrl)}`;
  imgs.forEach(img => { img.src = src; });
}

/** 產生 LINE QR Code 圖片並填入所有 .line-qr-img 元素 */
function setLineQr(){
  const imgs = document.querySelectorAll(".line-qr-img");
  if(!imgs.length) return;
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(BRAND.lineUrl)}`;
  imgs.forEach(img => { img.src = src; });
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
    .sort((a, b) => (a._dt?.getTime()||0) - (b._dt?.getTime()||0));

  const ended = events
    .filter(e => e.status === "ended")
    .map(e => ({ ...e, _dt: parseDate(e.date) }))
    .sort((a, b) => (b._dt?.getTime()||0) - (a._dt?.getTime()||0)); // 最近的在上

  // 即將舉行：只顯示最近一場
  if(upcoming.length === 0){
    upBox.innerHTML = `<div class="mono">目前沒有即將舉行的活動。</div>`;
  }else{
    const e = upcoming[0];
    upBox.innerHTML = `
      <div class="event-up-card">
        <div class="event-up-media">
          <img src="${e.cover || fallbackCover}" alt="${e.title}" loading="lazy" decoding="async">
        </div>
        <div class="event-up-body">
          <div class="event-up-meta">${e.date}${e.time ? ` ${e.time}` : ""}${e.city ? `｜${e.city}` : ""}</div>
          <div class="event-up-name">${e.title}</div>
          <div class="event-up-loc">📍 ${e.location || ""}</div>
          ${e.note ? `<p class="mono" style="margin:10px 0 0;">${e.note}</p>` : ""}
          ${Array.isArray(e.tags) && e.tags.length
            ? `<div class="event-up-tags">${e.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}</div>`
            : ""}
          <div class="event-up-actions">
            <a class="btn" href="${e.link}" target="_blank" rel="noopener">查看活動</a>
          </div>
        </div>
      </div>
    `;
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
  setNavActive();        // nav active 狀態（直接呼叫，不輪詢）
  ageCheck();            // 年齡驗證

  // 填入所有 data-line-link / data-ig-link 元素的連結
  document.querySelectorAll("[data-line-link]").forEach(a => { a.href = BRAND.lineUrl; a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll("[data-ig-link]").forEach(a => { a.href = BRAND.igUrl; a.target = "_blank"; a.rel = "noopener"; });

  setIgQr();              // 產生 IG QR Code
  setLineQr();            // 產生 LINE QR Code
  renderCartMini();       // 渲染購物車摘要（order 頁右側）
  bindOnlyNumberInputs(); // 綁定數字輸入限制
  renderHomePromotion();  // 渲染首頁促銷橫幅
  ensureStickyUI();       // 注入浮動購物車 / sticky bar
  updateCartUI();         // 更新購物車 UI 數字

  const key = pathKey();

  /* 首頁 */
  if(key === "home"){
    initHeroBackground();

    // 精選商品：優先取 priority 5（超過 5 個隨機抽）
    // 不足 5 個時，用 priority 4 隨機補齊
    const HOME_MAX = 5;
    const p5 = products.filter(p => getPriority(p) === 5);
    let featured = p5.length > HOME_MAX ? shuffleArray(p5).slice(0, HOME_MAX) : [...p5];
    if(featured.length < HOME_MAX){
      const used = new Set(featured.map(p => p.id));
      const p4   = products.filter(p => getPriority(p) === 4 && !used.has(p.id));
      featured   = [...featured, ...shuffleArray(p4).slice(0, HOME_MAX - featured.length)];
    }
    renderGrid(featured, "homeGrid");
  }

  /* 商品總覽頁 */
  if(key === "products"){
    document.getElementById("q")?.addEventListener("input", applyFilters);
    document.getElementById("cat")?.addEventListener("change", applyFilters);
    document.getElementById("minp")?.addEventListener("input", applyFilters);
    document.getElementById("maxp")?.addEventListener("input", applyFilters);
    applyFilters();
  }

  /* 商品分類頁（各自渲染 + 注入 Schema.org）*/
  if(key === "products-sake"){
    const s = sortByPriorityDesc(products.filter(p => groupOf(p) === "sake"));
    renderGrid(s, "productGrid"); injectProductSchema(s, "清酒商品列表｜酉時喝酒");
  }
  if(key === "products-fruittea"){
    const s = sortByPriorityDesc(products.filter(p => groupOf(p) === "fruittea"));
    renderGrid(s, "productGrid"); injectProductSchema(s, "果實酒・茶酒商品列表｜酉時喝酒");
  }
  if(key === "products-spirits"){
    const s = sortByPriorityDesc(products.filter(p => groupOf(p) === "spirits"));
    renderGrid(s, "productGrid"); injectProductSchema(s, "烈酒商品列表｜酉時喝酒");
  }
  if(key === "products-wine"){
    const s = sortByPriorityDesc(products.filter(p => groupOf(p) === "wine"));
    renderGrid(s, "productGrid"); injectProductSchema(s, "葡萄酒商品列表｜酉時喝酒");
  }
  if(key === "products-mini"){
    const s = sortByPriorityDesc(products.filter(p => groupOf(p) === "mini"));
    renderGrid(s, "productGrid"); injectProductSchema(s, "小罐專區商品列表｜酉時喝酒");
  }

  /* 活動頁 */
  if(key === "offers") renderEvents();

  /* 下單頁 */
  if(key === "order") bindOrderPickup();

  /* About 頁：Scroll Reveal */
  const reveals = document.querySelectorAll(".reveal");
  if(reveals.length){
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){ entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => io.observe(el));
  }

});