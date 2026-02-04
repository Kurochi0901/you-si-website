/* =========================
   酉時喝酒 YOU-SI | main.js (FULL OVERRIDE)
   - Folder URL routing (no .html)
   - RWD hamburger menu
   - Products data
   - Filtering / category pages
   - Lightbox (image + note)
   - Cart (localStorage)
   - Order submit (copy + open LINE + optional Google Form)
   - IG QR generation
========================= */
const FORM_DEBUG = true; // ← 要關掉就改成 false
const ORDER_API_KEY = "yousi-2025-secret";
const GAS_ORDER_URL = "https://script.google.com/macros/s/AKfycby7r8nQ-RfyOXW-ZRwHiB_ZjKwizJ0X2FRef2x8MEo59fqkM_kQKDtGoeZgdwIljTAm/exec";
const BRAND = {
  name: "酉時喝酒 YOU-SI",
  lineId: "@008jcfgc",
  lineUrl: "https://line.me/ti/p/@008jcfgc",
  igUrl: "https://www.instagram.com/yousi1719_drink/",
  googleFormView: "https://docs.google.com/forms/d/e/1FAIpQLSeR8RKGW3dLMkgf2oS-sn4QgYUansg2Ml35b8l8-WpxMMrOig/viewform?usp=pp_url",
  googleFormPost: "https://docs.google.com/forms/d/e/1FAIpQLSeR8RKGW3dLMkgf2oS-sn4QgYUansg2Ml35b8l8-WpxMMrOig/formResponse",
};
let currentGallery = [];
let currentIndex = 0;
/* ===== 工具 ===== */
function formatPrice(v){ return "NT$" + v; }

function groupOf(p){
  if(p.type==="清酒") return "sake";
  if(p.type==="葡萄酒") return "wine";

  // ✅ 合併：果實酒 + 茶酒
  if(p.type==="果實酒" || p.type==="茶酒") return "fruittea";

  // ✅ 新增：烈酒
  if(p.type==="烈酒") return "spirits";

  return "all";
}

/* =========================
   Sorting: Priority (1~5, bigger = higher)
========================= */

// category 顯示順序（總覽 all 用）
const CATEGORY_ORDER = ["sake", "fruit-tea", "wine", "spirits"];

// priority：越大越前；未填視為 3
function getPriority(p){
  const v = Number(p?.priority);
  if(Number.isFinite(v)) return Math.max(1, Math.min(5, v));
  return 3;
}

// 同 category 內排序：priority 由大到小，第二排序用 id 穩定
function sortByPriorityDesc(list){
  return [...list].sort((a,b)=>{
    const pa = getPriority(a);
    const pb = getPriority(b);
    if(pa !== pb) return pb - pa;     // ✅ 越大越前
    return (a.id || 0) - (b.id || 0); // ✅ 穩定排序
  });
}

// 總覽 all 排序：先 category 順序，再 priority 由大到小
function sortAllByCategoryThenPriority(list){
  return [...list].sort((a,b)=>{
    const ca = CATEGORY_ORDER.indexOf(a?.category);
    const cb = CATEGORY_ORDER.indexOf(b?.category);
    const ga = ca === -1 ? 999 : ca;
    const gb = cb === -1 ? 999 : cb;
    if(ga !== gb) return ga - gb;

    const pa = getPriority(a);
    const pb = getPriority(b);
    if(pa !== pb) return pb - pa;

    return (a.id || 0) - (b.id || 0);
  });
}

/* ===== Folder routing helpers ===== */
function pathKey(){
  // Normalize:
  // "/" => "home"
  // "/products/" => "products"
  // "/products/sake/" => "products-sake"
  // "/about/" => "about" etc.
  const p = location.pathname.replace(/\/+/g,'/'); // collapse
  if(p === "/" || p === "/index.html") return "home";
  if(p.startsWith("/age")) return "age";
  if(p.startsWith("/about")) return "about";
  if(p.startsWith("/offers")) return "offers";
  if(p.startsWith("/order")) return "order";
  if(p === "/products/" || p === "/products/index.html") return "products";
  if(p.startsWith("/products/sake")) return "products-sake";

  // ✅ 新版合併頁
  if(p.startsWith("/products/fruit-tea")) return "products-fruittea";

  // ✅ 舊版相容：fruit / tea 都導到同一個 key
  if(p.startsWith("/products/fruit")) return "products-fruittea";
  if(p.startsWith("/products/tea")) return "products-fruittea";

  if(p.startsWith("/products/wine")) return "products-wine";

  // ✅ 新增烈酒
  if(p.startsWith("/products/spirits")) return "products-spirits";

  if (p.startsWith("/wineries")) return "wineries";

  return "home";
}

/* ===== 年齡驗證 ===== */
/* ===== 年齡驗證（有期限，不永久放行）===== */
const AGE_STORAGE_KEY = "age_ok_v2";
const AGE_TTL_DAYS = 1; // ✅ 通過後有效天數：不想永久放行就設定 7 / 30 / 1 等

function _setAgeOk(days = AGE_TTL_DAYS){
  try{
    const expiresAt = Date.now() + (Number(days) * 24 * 60 * 60 * 1000);
    const payload = { ok: true, expiresAt };
    localStorage.setItem(AGE_STORAGE_KEY, JSON.stringify(payload));

    // 向下相容：清掉舊 key，避免混亂
    localStorage.removeItem("age_ok");
  }catch(e){
    // localStorage 失敗（例如無痕/被禁用）時，不寫入也不崩
  }
}

function _readAgeOk(){
  try{
    // 1) 優先讀新版
    const raw = localStorage.getItem(AGE_STORAGE_KEY);
    if(raw){
      const data = JSON.parse(raw);
      const ok = !!data?.ok;
      const expiresAt = Number(data?.expiresAt || 0);

      if(ok && expiresAt && Date.now() < expiresAt){
        return true; // ✅ 未過期
      }

      // 過期或資料不完整：清掉
      localStorage.removeItem(AGE_STORAGE_KEY);
      return false;
    }

    // 2) 相容舊版：若發現舊的 age_ok="yes"，轉成「有期限」版本
    const legacy = localStorage.getItem("age_ok");
    if(legacy === "yes"){
      _setAgeOk(AGE_TTL_DAYS);
      return true;
    }

    return false;
  }catch(e){
    // JSON 壞掉、localStorage 讀取失敗等：視為未通過
    try{ localStorage.removeItem(AGE_STORAGE_KEY); }catch(_){}
    return false;
  }
}

function ageCheck(){
  // age 頁本身不攔截
  if(location.pathname.startsWith("/age")) return;

  const ok = _readAgeOk();
  if(!ok){
    // 帶上 from，方便通過後回到原頁
    const from = encodeURIComponent(location.pathname + location.search + location.hash);
    location.href = "/age/?from=" + from;
  }
}


/* ===== Mobile menu ===== */
function toggleMenu(){
  document.querySelector("nav")?.classList.toggle("open");
}

/* ===== Lightbox（圖片 + 說明共用） ===== */
function openLightbox(src){
  const box=document.getElementById("lightbox");
  const img=document.getElementById("lightbox-img");
  const note=document.getElementById("lightbox-note");
  if(note) note.style.display="none";
  if(img){
    img.style.display="block";
    img.src=src;
  }
  if(box) box.style.display="flex";
}

document.addEventListener("click",e=>{
  if(e.target && e.target.id==="lightbox"){
    e.target.style.display="none";
  }
});

// /* ===== 清酒甜辛 ===== */
// function renderSweetness(level){
//   const labels = ["偏乾","稍乾","中間","稍甜","偏甜"];
//   const lv = Math.min(5, Math.max(1, parseInt(level || 3,10)));
//   return `
//     <div style="margin-top:14px;">
//       <strong>甜辛感</strong>
//       <div style="display:flex; gap:6px; margin-top:6px;">
//         ${[1,2,3,4,5].map(i=>`
//           <span style="
//             width:22px;
//             height:8px;
//             border-radius:6px;
//             background:${i<=lv ? '#b48a63' : '#eee'};
//             display:inline-block;
//           "></span>
//         `).join("")}
//       </div>
//       <div style="font-size:12px; color:#888; margin-top:4px;">
//         ${labels[lv-1]}
//       </div>
//     </div>
//   `;
// }


/* ===== 購物車（單一資料來源） ===== */
function getCart(){ return JSON.parse(localStorage.getItem("cart")||"[]"); }
function saveCart(c){ localStorage.setItem("cart",JSON.stringify(c)); }

function addToCart(id){
  const cart = getCart();
  const item = cart.find(x => x.id === id);

  if(item){
    item.qty++;
  }else{
    cart.push({ id, qty: 1 });
  }

  saveCart(cart);
  renderCartMini();
  updateCartUI();

  const p = products.find(p => p.id === id);
  if (!p) return;

  // 原本的加入成功 toast（完全不動）
  showCartToast(p.name, 1);

  // ===== 新增：促銷引導 toast =====
  const totalQty = cart.reduce((s,x)=>s+(x.qty||0),0);
  const nextPromo = getNextPromotionHint(totalQty);

  if(nextPromo){
    showPromoToast(`再買 ${nextPromo.need} 件可享 ${nextPromo.text}`);
  }
}






function removeFromCart(id){
  saveCart(getCart().filter(x=>x.id!==id));
  renderCartMini();
  updateCartUI();
}

function setQty(id,qty){
  const cart=getCart();
  const i=cart.find(x=>x.id===id);
  if(i) i.qty=Math.max(1,parseInt(qty)||1);
  saveCart(cart);
  renderCartMini();
  updateCartUI();
}

function readCart(){
  return getCart().map(c=>{
    const p=products.find(p=>p.id===c.id);
    return p?{...p,qty:c.qty}:null;
  }).filter(Boolean);
}

function cartTotal(){
  return readCart().reduce((s,p)=>s+p.price*p.qty,0);
}

function renderCartMini(){
  const box=document.getElementById("cartMini");
  if(!box) return;
  const cart=readCart();
  if(cart.length===0){
    box.innerHTML="<div class='mono'>購物車目前沒有商品。</div>";
    return;
  }
  box.innerHTML=cart.map(p=>`
    <div style="border-bottom:1px dashed #eee;padding:10px 0">
      <strong>${p.name}</strong><br>
      ${p.spec}<br>
      NT$${p.price} ×
      <input type="number" min="1" value="${p.qty}"
        onchange="setQty(${p.id},this.value)" style="width:64px">
      <button class="btn" onclick="removeFromCart(${p.id})">移除</button>
    </div>`).join("")+
    `<div style="margin-top:10px;font-weight:800">總金額 NT$${cartTotal()}</div>`;
}
/* ===== Toast 通知（加入購物車成功） ===== */
let toastTimer = null;

function showCartToast(productName, qty = 1) {
  let toast = document.getElementById("cartToast");

  // 如果不存在就建立
  if (!toast) {
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

  // 顯示
  toast.classList.add("show");

  // 清掉舊計時
  if (toastTimer) clearTimeout(toastTimer);

  // 2 秒後自動關閉
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
function showInfoToast(text){
  const toast = document.createElement("div");
  toast.className = "cart-toast info";
  toast.textContent = text;

  document.body.appendChild(toast);

  requestAnimationFrame(()=>{
    toast.classList.add("show");
  });

  setTimeout(()=>{
    toast.classList.remove("show");
    setTimeout(()=>toast.remove(), 300);
  }, 2400);
}

/* ===== 商品 Grid ===== */
function renderGrid(list, id){
  const box = document.getElementById(id);
  if(!box) return;

  box.innerHTML = list.map(p => {
    const cover = Array.isArray(p.imgs) ? p.imgs[0] : "";

    return `
      <div class="card">

        <div class="card-media">
          <img
            src="${cover}"
            alt="${p.name}"
            loading="lazy"
            decoding="async"
            onclick="openProduct(${p.id})"
            style="cursor:pointer"
          >
        </div>

        <div class="card-body">
          <div
            class="name"
            onclick="openProduct(${p.id})"
            style="cursor:pointer"
          >
            ${p.name}
          </div>

          <div class="spec">${p.spec || ""}</div>

          <div class="card-meta">
            <div class="price-wrap">
              ${renderPrice(p)}
            </div>
            <button
              class="btn-add"
              onclick="addToCart(${p.id})"
            >
              加入購物車
            </button>
          </div>
        </div>

      </div>
    `;
  }).join("");
}


/* ===== 商品分類 / 搜尋 / 價格篩選（products 專用） ===== */
function applyFilters(){
  const qEl = document.getElementById("q");
  const catEl = document.getElementById("cat");
  const minpEl = document.getElementById("minp");
  const maxpEl = document.getElementById("maxp");

  if(!qEl && !catEl && !minpEl && !maxpEl) return;

  const q = qEl ? qEl.value.trim().toLowerCase() : "";
  const cat = catEl ? catEl.value : "all";
  const minp = minpEl && minpEl.value ? parseInt(minpEl.value, 10) : 0;
  const maxp = maxpEl && maxpEl.value ? parseInt(maxpEl.value, 10) : 999999;

  const list = products.filter(p => {
    if(cat !== "all"){
      const group = groupOf(p);
      if(group !== cat) return false;
    }
    if(p.price < minp || p.price > maxp) return false;

    if(q){
      const text = `${p.name} ${p.spec} ${p.type}`.toLowerCase();
      if(!text.includes(q)) return false;
    }
    return true;
  });

  // ✅ 排序：
  // - 若使用者選了某一類（cat != all），則「該類內 priority 大→小」
  // - 若是 all，則「category 順序 + priority 大→小」
  const sorted =
    (cat !== "all")
      ? sortByPriorityDesc(list)
      : sortAllByCategoryThenPriority(list);

  renderGrid(sorted, "productGrid");

}

/* ===== IG line QR ===== */
function setIgQr(){
  const imgs = document.querySelectorAll(".ig-qr-img");
  if(!imgs.length) return;

  const url = encodeURIComponent(BRAND.igUrl);
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${url}`;

  imgs.forEach(img => {
    img.src = src;
  });
}


function setLineQr(){
  const imgs = document.querySelectorAll(".line-qr-img");
  if(!imgs.length) return;

  const url = encodeURIComponent(BRAND.lineUrl);
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${url}`;

  imgs.forEach(img => {
    img.src = src;
  });
}


/* ===== 下單送出（補齊 order 頁所需） ===== */

/* =========================
   運費規則（Order 頁使用）
   - 只在「郵寄」時計算
   - 滿 NT$3000 免運（以折扣後商品金額 itemsTotal 判斷）
   - 常溫 170 / 冷藏 230
   - 郵寄預設常溫
========================= */
/* =========================
   運費規則（僅 order 頁右側金額用）
========================= */
const SHIPPING_FREE_THRESHOLD = 3000;
const SHIPPING_FEE_ROOM = 170;
const SHIPPING_FEE_COLD = 230;

function getSelectedShipTemp(){
  const checked = document.querySelector('input[name="shipTemp"]:checked');
  return (checked && checked.value) ? checked.value : "常溫"; // 預設常溫（2A）
}

function calcShippingFee(pickup, itemsTotal, shipTemp){
  if(pickup !== "郵寄") return 0;
  const t = parseInt(itemsTotal, 10) || 0;
  if(t >= SHIPPING_FREE_THRESHOLD) return 0;
  return shipTemp === "冷藏" ? SHIPPING_FEE_COLD : SHIPPING_FEE_ROOM;
}


function formatMoneyLine(label, amount){
  // amount 可能為 0
  const n = parseInt(amount, 10) || 0;
  return `${label}：NT$${n}`;
}

/* ===== 下單送出（補齊 order 頁所需） ===== */
let isSubmittingOrder = false;

async function submitOrder(){
  if(isSubmittingOrder) return;
  isSubmittingOrder = true;

  const btn = event?.target;
  if(btn) btn.disabled = true;

  /* =========================
     1️⃣ 讀取欄位
     ========================= */
  const name = (document.getElementById("order-name")?.value || "").trim();
  const phone = (document.getElementById("order-phone")?.value || "").trim();
  const email = (document.getElementById("order-email")?.value || "").trim();
  const pickup = (document.getElementById("order-pickup")?.value || "店內取貨").trim();
  const address = (document.getElementById("order-address")?.value || "").trim();
  const note = (document.getElementById("order-note")?.value || "").trim();

  /* =========================
     2️⃣ 前端防呆
     ========================= */
  if(!name) return alert("請填寫姓名"), resetSubmit(btn);
  if(!phone || !isValidPhone(phone)) return alert("電話格式不正確"), resetSubmit(btn);
  if(!email || !isValidEmail(email)) return alert("Email 格式不正確"), resetSubmit(btn);
  if(pickup === "郵寄" && !address) return alert("選擇郵寄時請填寫地址"), resetSubmit(btn);

  const cart = readCart();
  if(cart.length === 0){
    alert("購物車沒有商品");
    return resetSubmit(btn);
  }

  /* =========================
     3️⃣ 組品項文字
     ========================= */
  const itemsText = cart
    .map(p => `${p.name}（${p.spec}）×${p.qty} - NT$${p.price}`)
    .join("\n");

  /* =========================
     ⭐ 3.5 訂單金額（關鍵）
     ========================= */
  const pricing = getOrderPricing();

  const pricingText = `
【金額明細】
原價小計：NT$${pricing.subtotal}
${
  pricing.discounts.length
    ? pricing.discounts.map(d => `- ${d.label}：-NT$${d.amount}`).join("\n")
    : "（未使用折扣）"
}
折扣合計：-NT$${pricing.discountTotal}
實付金額：NT$${pricing.total}
`;

  /* =========================
     4️⃣ 組完整訂單摘要
     ========================= */
  const summary =
`【酉時喝酒 訂單】
姓名：${name}
電話：${phone}
Email：${email}
取貨方式：${pickup}
地址：${pickup === "郵寄" ? address : "（店內取貨）"}
備註：${note || "（無）"}

【品項】
${itemsText}

${pricingText}
`;

  /* =========================
     5️⃣ 送至 GAS
     ========================= */
  try{
    await fetch(GAS_ORDER_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: "yousi-2025-secret",
        name,
        phone,
        email,
        pickup,
        address,
        summary,
        subtotal: pricing.subtotal,
        discount: pricing.discountTotal,
        total: pricing.total
      })
    });
  }catch(err){
    console.error("Order submit failed:", err);
    alert("訂單送出失敗，請稍後再試或直接聯繫我們。");
    return resetSubmit(btn);
  }

  /* =========================
     6️⃣ 複製給 LINE（同一份金額）
     ========================= */
  let copiedOK = false;
  try{
    await navigator.clipboard.writeText(summary);
    copiedOK = true;
  }catch(e){
    console.warn("Clipboard copy failed", e);
    copiedOK = false;
  }

  /* =========================
     7️⃣ 成功處理（不再使用 alert / 不再自動跳轉）
     - 顯示日系風格成功 Modal
     - 讓使用者主動點擊「前往 LINE」→ 避免 popup blocker 不穩定
     ========================= */

  // ✅ 先清空購物車（保留你原本的行為）
  localStorage.removeItem("cart");
  renderCartMini();
  if(typeof updateCartUI === "function") updateCartUI();

  // ✅ 打開成功視窗（同時顯示複製成功/失敗狀態）
  openOrderSuccessModal({
    lineUrl: BRAND.lineUrl,
    copiedOK,
    summary
  });

  resetSubmit(btn);
}




/* ===== 重置送出狀態 ===== */
function resetSubmit(btn){
  isSubmittingOrder = false;
  if(btn) btn.disabled = false;
}

/* ===== 下單成功 Modal（日系視覺 + 複製狀態） ===== */
function openOrderSuccessModal({ lineUrl, copiedOK, summary }){
  const modal = document.getElementById("orderSuccessModal");
  if(!modal){
    // 若頁面未放置 modal HTML，不要讓流程壞掉（保守 fallback）
    const msg = copiedOK
      ? "訂單已送出，訂單內容已複製。請手動前往 LINE 官方帳號貼上訊息完成下單。"
      : "訂單已送出，但瀏覽器阻擋複製。請回到頁面手動複製訂單內容後前往 LINE。";
    alert(msg);
    return;
  }

  const status = modal.querySelector("[data-role='copyStatus']");
  const statusHint = modal.querySelector("[data-role='copyHint']");
  const txt = document.getElementById("orderSummaryText");
  const goLine = document.getElementById("goLineAfterOrder");

  if(txt) txt.value = summary || "";
  if(goLine) goLine.href = lineUrl || "#";

  if(status){
    status.classList.remove("is-ok","is-fail");
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

function closeOrderSuccessModal({ goHome = false } = {}){
  const modal = document.getElementById("orderSuccessModal");
  if(modal) modal.style.display = "none";
  document.body.classList.remove("modal-open");
  if(goHome) window.location.href = "/";
}

async function copyOrderSummaryFromModal(){
  const txt = document.getElementById("orderSummaryText");
  const modal = document.getElementById("orderSuccessModal");
  if(!txt || !modal) return;

  const status = modal.querySelector("[data-role='copyStatus']");
  const statusHint = modal.querySelector("[data-role='copyHint']");

  const v = (txt.value || "").trim();
  if(!v){
    if(status){
      status.classList.remove("is-ok","is-fail");
      status.classList.add("is-fail");
      status.textContent = "沒有可複製的內容";
    }
    return;
  }

  try{
    await navigator.clipboard.writeText(v);
    if(status){
      status.classList.remove("is-fail");
      status.classList.add("is-ok");
      status.textContent = "已複製訂單內容";
    }
    if(statusHint){
      statusHint.textContent = "已更新剪貼簿。請前往 LINE 直接貼上即可。";
    }
  }catch(e){
    // fallback：選取文字，讓使用者手動 Ctrl+C / 長按複製
    txt.focus();
    txt.select();
    if(status){
      status.classList.remove("is-ok");
      status.classList.add("is-fail");
      status.textContent = "仍無法自動複製（已為你選取文字）";
    }
    if(statusHint){
      statusHint.textContent = "請按 Ctrl+C（手機長按複製），再點『前往 LINE』貼上。";
    }
  }
}





function bindOrderPickup(){
  const pickupEl = document.getElementById("order-pickup");
  const addrWrap = document.getElementById("addrWrap");
  const shipWrap = document.getElementById("shipWrap");
  if(!pickupEl) return;

  const sync = ()=>{
    const isMail = pickupEl.value === "郵寄";
    if(addrWrap) addrWrap.style.display = isMail ? "block" : "none";
    if(shipWrap) shipWrap.style.display = isMail ? "block" : "none";

    // 非郵寄時：溫層回預設常溫，避免殘值
    if(!isMail){
      const room = document.querySelector('input[name="shipTemp"][value="常溫"]');
      if(room) room.checked = true;
    }

    // ✅ 右側金額即時更新
    renderCartMini();
  };

  pickupEl.addEventListener("change", sync);

  // ✅ 切換溫層時即時更新右側金額
  document.querySelectorAll('input[name="shipTemp"]').forEach(r=>{
    r.addEventListener("change", ()=> renderCartMini());
  });

  sync();
}




/* ===== 浮動購物車（桌機）＋ Bottom Sticky Bar（行動） ===== */
function ensureStickyUI(){
  // Avoid injecting on age gate page
  const key = pathKey();
  if(key === "age") return;

  // 1) Desktop floating cart in header (right top)
  if(!document.getElementById("cartFloat")){
    const header = document.querySelector(".header");
    if(header){
      const wrap = document.createElement("div");
      wrap.id = "cartFloat";
      wrap.className = "cart-float";
      wrap.setAttribute("role","button");
      wrap.setAttribute("tabindex","0");
      wrap.innerHTML = `
        <span class="cart-float-icon" aria-hidden="true">🛒</span>
        <span class="cart-float-badge" id="cartBadge" aria-label="購物車品項數">0</span>
      `;
      // Insert before nav-cta if exists, otherwise append
      const navCta = header.querySelector(".nav-cta");
      if(navCta) header.insertBefore(wrap, navCta);
      else header.appendChild(wrap);

      const open = ()=> openMiniCart();
      wrap.addEventListener("click", open);
      wrap.addEventListener("keydown", (e)=>{ if(e.key==="Enter" || e.key===" "){ e.preventDefault(); open(); }});
    }
  }

  // 2) Mobile bottom sticky bar (cart summary + LINE CTA)
  if(!document.getElementById("stickyBar")){
    const bar = document.createElement("div");
    bar.id = "stickyBar";
    bar.className = "sticky-bar";

    bar.innerHTML = `
      <button class="sticky-cart" id="stickyCartBtn" type="button" aria-label="查看已選酒款">
        <div class="sticky-cart-top">🛒 <span id="stickyCount">0</span> 項</div>
        <div class="sticky-cart-bottom">NT$ <span id="stickyTotal">0</span></div>
      </button>
      <a class="sticky-cta" id="stickyLineBtn" data-line-link href="#" target="_blank" rel="noopener">LINE 詢問推薦</a>
    `;
    document.body.appendChild(bar);

    // Bar click bindings
    bar.querySelector("#stickyCartBtn")?.addEventListener("click", openMiniCart);

    // Reserve space so content is not covered
    document.body.classList.add("has-sticky-bar");
  }

  // 3) Mini cart overlay / sheet (shared)
  if(!document.getElementById("miniCartOverlay")){
    const overlay = document.createElement("div");
    overlay.id = "miniCartOverlay";
    overlay.className = "mini-cart-overlay";
    overlay.setAttribute("aria-hidden","true");
    overlay.innerHTML = `
      <div class="mini-cart-sheet" role="dialog" aria-modal="true" aria-label="已選酒款">
        <div class="mini-cart-header">
          <div class="mini-cart-title">已選酒款（<span id="miniCartCount">0</span> 項）</div>
          <button class="mini-cart-close" id="miniCartClose" type="button" aria-label="關閉">✕</button>
        </div>
        <div class="mini-cart-body" id="miniCartList"></div>
        <div class="mini-cart-footer">
          <div class="mini-cart-total">總金額 NT$<span id="miniCartTotal">0</span></div>
          <a class="btn btn-primary mini-cart-checkout" href="/order/">前往下單</a>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const close = ()=> closeMiniCart();
    overlay.addEventListener("click", (e)=>{
      if(e.target === overlay) close();
    });
    overlay.querySelector("#miniCartClose")?.addEventListener("click", close);
    document.addEventListener("keydown", (e)=>{
      if(e.key === "Escape") close();
    });
  }

  // Hide sticky bar on order page to avoid covering the form
  const key2 = pathKey();
  if(key2 === "order"){
    document.getElementById("stickyBar")?.classList.add("hidden");
    document.body.classList.remove("has-sticky-bar");
  }
}

function openMiniCart(){
  const overlay = document.getElementById("miniCartOverlay");
  if(!overlay) return;
  renderMiniCart();
  overlay.style.display = "flex";
  overlay.setAttribute("aria-hidden","false");
}

function closeMiniCart(){
  const overlay = document.getElementById("miniCartOverlay");
  if(!overlay) return;
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden","true");
}

function renderMiniCart(){
  const listEl = document.getElementById("miniCartList");
  const countEl = document.getElementById("miniCartCount");
  const totalEl = document.getElementById("miniCartTotal");
  if(!listEl || !countEl || !totalEl) return;

  const cart = readCart();
  const itemCount = cart.reduce((s,p)=>s+(p.qty||0),0);

  const ctx = getCartContext();
  const promo = applyPromotions(ctx);

  countEl.textContent = String(itemCount);
  totalEl.textContent = "NT$" + promo.finalTotal;

  if(cart.length === 0){
    // ✅ 讓 overlay 空購物車時也能顯示促銷（吸引加購）
    listEl.innerHTML = `
      <div class="mono">購物車目前沒有商品。</div>
      <div id="promotionBlock" class="promotion-block"></div>
    `;
    renderPromotionBlock();
    return;
  }

  listEl.innerHTML = cart.map(p=>`
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

  // ✅ overlay 有商品時，也一樣顯示促銷區塊（若你想放在列表下方）
  listEl.insertAdjacentHTML("beforeend", `<div id="promotionBlock" class="promotion-block"></div>`);
  renderPromotionBlock();
}
function renderCartMini(){
  const wrap = document.getElementById("cartMini");
  if(!wrap) return;

  const cart = readCart();
  const ctx = getCartContext();
  const promo = applyPromotions(ctx);

  const subtotal = cartTotal();
  const discount = promo.discount;
  const itemsTotal = promo.finalTotal; // 折扣後商品金額（不含運）

  const isOrderPage = (pathKey() === "order");

  // ✅ 只在 order 頁右側加運費
  let pickup = "";
  let shipTemp = "常溫";
  let shippingFee = 0;
  let grandTotal = itemsTotal;

  if(isOrderPage){
    pickup = (document.getElementById("order-pickup")?.value || "店內取貨").trim();
    shipTemp = pickup === "郵寄" ? getSelectedShipTemp() : "常溫";
    shippingFee = calcShippingFee(pickup, itemsTotal, shipTemp);
    grandTotal = itemsTotal + shippingFee;
  }

  // ===== 空購物車 =====
  if(cart.length === 0){
    wrap.innerHTML = `
      <div class="mono">購物車目前沒有商品。</div>
      <div id="promotionBlock" class="promotion-block"></div>
    `;
    renderPromotionBlock();
    return;
  }

  // ===== 商品列 =====
  const itemsHtml = cart.map(p=>`
    <div class="cart-item">
      <div class="cart-item-main">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-spec">${p.spec || ""}</div>
        <div class="cart-item-price">NT$${p.price}</div>
      </div>

      <div class="cart-item-side">
        <div class="cart-item-qty-wrap">
          <div class="qty-pill">
            <button class="qty-btn"
              onclick="setQty(${p.id}, ${Math.max(1,(p.qty||1)-1)})">−</button>
            <span class="qty-num">${p.qty}</span>
            <button class="qty-btn"
              onclick="setQty(${p.id}, ${(p.qty||1)+1})">＋</button>
          </div>

          <button class="cart-item-remove"
            onclick="removeFromCart(${p.id})">移除</button>
        </div>
      </div>
    </div>
  `).join("");

  // ===== 金額與促銷區 =====
  const shippingRowHtml = (isOrderPage && pickup === "郵寄")
    ? `
      <div class="cart-total-row cart-total-shipping">
        <span>運費（${shipTemp}${itemsTotal >= SHIPPING_FREE_THRESHOLD ? "｜滿額免運" : ""}）</span>
        <span>${shippingFee > 0 ? `NT$${shippingFee}` : "NT$0"}</span>
      </div>
    `
    : "";

  const totalHtml = `
    <div class="cart-total">

      <!-- 小計（原價） -->
      <div class="cart-total-row cart-total-subtotal">
        <span>小計</span>
        <span>NT$${subtotal}</span>
      </div>

      <!-- 促銷列表 -->
      <div id="promotionBlock" class="promotion-block"></div>

      <!-- 折抵 -->
      ${
        discount > 0
          ? `
            <div class="cart-total-row cart-total-discount">
              <span>優惠折抵</span>
              <span>- NT$${discount}</span>
            </div>
          `
          : ""
      }

      ${shippingRowHtml}

      <!-- 總金額 -->
      <div class="cart-total-row cart-total-final">
        <strong>總金額</strong>
        <strong>NT$${grandTotal}</strong>
      </div>

    </div>
  `;

  // ===== 輸出 =====
  wrap.innerHTML = `
    <div class="cart-items">
      ${itemsHtml}
    </div>
    ${totalHtml}
  `;

  // DOM 出現後再 render 促銷
  renderPromotionBlock();
}






function updateCartUI(){
  const cart = readCart();
  const itemCount = cart.reduce((s,p)=>s+(p.qty||0),0);

  const ctx = getCartContext();
  const promo = applyPromotions(ctx);

  const badge = document.getElementById("cartBadge");
  if(badge){
    badge.textContent = String(itemCount);
    badge.style.display = itemCount > 0 ? "inline-flex" : "none";
  }

  const stickyCount = document.getElementById("stickyCount");
  const stickyTotal = document.getElementById("stickyTotal");
  if(stickyCount) stickyCount.textContent = String(itemCount);
  if(stickyTotal) stickyTotal.textContent = "NT$" + promo.finalTotal;

  // ✅ Overlay mini cart 開啟就刷新
  const overlay = document.getElementById("miniCartOverlay");
  if(overlay && overlay.style.display === "flex"){
    renderMiniCart();
  }

  // ✅ Order 頁右側 cartMini 區塊存在就刷新
  if(document.getElementById("cartMini")){
    renderCartMini();
  }

  // ✅ 若你在其它頁也有 promotionBlock，確保同步
  renderPromotionBlock();
}





/* ===== 初始化（唯一入口） ===== */
document.addEventListener("DOMContentLoaded", () => {

  /* ===== 全站通用 ===== */
  waitForHeaderAndSetActive();
  ageCheck();

  document.querySelectorAll("[data-line-link]").forEach(a=>{
    a.href = BRAND.lineUrl;
    a.target = "_blank";
    a.rel = "noopener";
  });

  document.querySelectorAll("[data-ig-link]").forEach(a=>{
    a.href = BRAND.igUrl;
    a.target = "_blank";
    a.rel = "noopener";
  });

  setIgQr();
  setLineQr();
  renderCartMini();
  bindOnlyNumberInputs();
  renderHomePromotion();

  if (typeof ensureStickyUI === "function") ensureStickyUI();
  if (typeof updateCartUI === "function") updateCartUI();
  

  const key = pathKey();

  /* ===== 首頁 ===== */
  if (key === "home") {
    initHeroBackgroundSlideshow();
  
    let featuredProducts = [];
  
    // 若有手動指定首頁精選
    if (Array.isArray(window.HOME_FEATURED_IDS) && window.HOME_FEATURED_IDS.length) {
      featuredProducts = window.HOME_FEATURED_IDS
        .map(id => products.find(p => p.id === id))
        .filter(Boolean);
    }
  
    // 若沒有設定或設定錯誤，回退預設邏輯
    if (!featuredProducts.length) {
      featuredProducts = products.slice(0, 4);
    }
  
    renderGrid(featuredProducts, "homeGrid");
  }
  

  /* ===== 商品總覽 ===== */
  if(key === "products"){
    document.getElementById("q")?.addEventListener("input", applyFilters);
    document.getElementById("cat")?.addEventListener("change", applyFilters);
    document.getElementById("minp")?.addEventListener("input", applyFilters);
    document.getElementById("maxp")?.addEventListener("input", applyFilters);
    applyFilters();
  }

  /* ===== 商品分類頁 ===== */
  if(key === "products-sake"){
    const list = products.filter(p=>groupOf(p)==="sake");
    renderGrid(sortByPriorityDesc(list), "productGrid");
    injectProductSchema(sortByPriorityDesc(list), "清酒商品列表｜酉時喝酒");
  }
  

  // if(key === "products-fruit"){
  //   const list = products.filter(p=>groupOf(p)==="fruit");
  //   renderGrid(list, "productGrid");
  //   injectProductSchema(list, "果實酒商品列表｜酉時喝酒");
  // }

  // if(key === "products-tea"){
  //   const list = products.filter(p=>groupOf(p)==="tea");
  //   renderGrid(list, "productGrid");
  //   injectProductSchema(list, "茶酒商品列表｜酉時喝酒");
  // }
  if(key === "products-fruittea"){
    const list = products.filter(p=>groupOf(p)==="fruittea");
    renderGrid(sortByPriorityDesc(list), "productGrid");
    injectProductSchema(list, "果實酒・茶酒商品列表｜酉時喝酒");
  }

  if(key === "products-spirits"){
    const list = products.filter(p=>groupOf(p)==="spirits");
    renderGrid(sortByPriorityDesc(list), "productGrid");
    injectProductSchema(list, "烈酒商品列表｜酉時喝酒");
  }


  if(key === "products-wine"){
    const list = products.filter(p=>groupOf(p)==="wine");
    renderGrid(sortByPriorityDesc(list), "productGrid");
    injectProductSchema(sortByPriorityDesc(list), "葡萄酒商品列表｜酉時喝酒");
  }
  

  /* ===== 活動頁 ===== */
  if(key === "offers"){
    /renderGrid(products.slice(0,6), "offerGrid");/
    renderEvents();
  }
  

  /* ===== 下單頁 ===== */
  if(key === "order"){
    bindOrderPickup();
  }

  /* ===== About Page Enhancements ===== */

  // Scroll Reveal（只有有 .reveal 才會啟用）
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => io.observe(el));
  }

});


function injectProductSchema(list, title){
  if(!Array.isArray(list) || list.length === 0) return;

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": title,
    "itemListElement": list.slice(0,10).map((p,i)=>({
      "@type":"Product",
      "position": i+1,
      "name": p.name,
      "brand": BRAND.name,
      "offers":{
        "@type":"Offer",
        "priceCurrency":"TWD",
        "price": p.price,
        "availability":"https://schema.org/InStock"
      }
    }))
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function setNavActive(){
  const key = pathKey();
  document.querySelectorAll("nav a").forEach(a=>{
    const href = a.getAttribute("href");
    let active = false;

    if(key === "home" && href === "/") active = true;
    if(key === "about" && href.startsWith("/about")) active = true;
    if(key.startsWith("products") && href.startsWith("/products")) active = true;
    if(key === "offers" && href.startsWith("/offers")) active = true;
    if(key === "order" && href.startsWith("/order")) active = true;
    if(key === "wineries" && href.startsWith("/wineries")) active = true;    

    if(active) a.classList.add("active");
  });
}

// function renderEvents(){
//   const box = document.getElementById("eventGrid");
//   if(!box) return;

//   box.innerHTML = events.map(e => {
//     const isEnded = e.status === "ended";

//     return `
//       <div class="card ${isEnded ? 'event-ended' : ''}">
//         <div class="card-body">
//           <div class="name">${e.title}</div>
//           <div class="spec">${e.date}｜${e.location}</div>
//           <p class="mono">${e.note || ""}</p>

//           ${
//             isEnded
//               ? `
//                 <div class="event-ended-box">
//                   此活動已結束，仍可查看活動頁面與紀錄
//                 </div>
//               `
//               : ""
//           }

//           <div style="margin-top:10px">
//             <a
//               class="btn ${isEnded ? 'btn-ghost' : ''}"
//               href="${e.link}"
//               target="_blank"
//               rel="noopener"
//             >
//               ${isEnded ? "查看活動紀錄" : "查看活動"}
//             </a>
//           </div>
//         </div>
//       </div>
//     `;
//   }).join("");
// }

function renderEvents(){
  const upBox = document.getElementById("eventUpcoming");
  const pastBox = document.getElementById("eventPast");
  if(!upBox || !pastBox) return;

  const fallbackCover = "/assets/images/home/LINE_ALBUM_果實酒茶酒_251205_1.jpg";

  // 解析 YYYY/MM/DD
  function parseDate(s){
    const m = (s || "").match(/^(\d{4})\/(\d{2})\/(\d{2})/);
    if(!m) return null;
    const y = parseInt(m[1],10), mo = parseInt(m[2],10)-1, d = parseInt(m[3],10);
    return new Date(y, mo, d);
  }

  function fmtMonth(d){
    return d.toLocaleString("en-US", { month: "short" }); // Aug., Sep.
  }

  // 分類
  const upcoming = events
    .filter(e => e.status === "upcoming")
    .map(e => ({...e, _dt: parseDate(e.date)}))
    .sort((a,b)=> (a._dt?.getTime()||0) - (b._dt?.getTime()||0));

  const ended = events
    .filter(e => e.status === "ended")
    .map(e => ({...e, _dt: parseDate(e.date)}))
    .sort((a,b)=> (b._dt?.getTime()||0) - (a._dt?.getTime()||0)); // 近的在上

  // ===== 1) 即將舉行：只顯示最近一場（如要多場可改成 map） =====
  if(upcoming.length === 0){
    upBox.innerHTML = `<div class="mono">目前沒有即將舉行的活動。</div>`;
  }else{
    const e = upcoming[0];
    const cover = e.cover || fallbackCover;
    const timeText = e.time ? ` ${e.time}` : "";
    const cityText = e.city || "";

    upBox.innerHTML = `
      <div class="event-up-card">
        <div class="event-up-media">
          <img src="${cover}" alt="${e.title}" loading="lazy" decoding="async">
        </div>

        <div class="event-up-body">
          <div class="event-up-meta">${e.date}${timeText}${cityText ? `｜${cityText}` : ""}</div>

          <div class="event-up-name">${e.title}</div>

          <div class="event-up-loc">📍 ${e.location || ""}</div>

          ${e.note ? `<p class="mono" style="margin:10px 0 0;">${e.note}</p>` : ""}

          ${
            Array.isArray(e.tags) && e.tags.length
              ? `<div class="event-up-tags">
                  ${e.tags.map(t=>`<span class="tag-pill">${t}</span>`).join("")}
                </div>`
              : ""
          }

          <div class="event-up-actions">
            <a class="btn" href="${e.link}" target="_blank" rel="noopener">查看活動</a>
          </div>
        </div>
      </div>
    `;
  }

  // ===== 2) 過往活動：依年份分組的時間軸 =====
  if(ended.length === 0){
    pastBox.innerHTML = `<div class="mono">目前沒有過往活動。</div>`;
    return;
  }

  // group by year
  const groups = {};
  ended.forEach(e=>{
    const y = e._dt ? e._dt.getFullYear() : "其他";
    if(!groups[y]) groups[y] = [];
    groups[y].push(e);
  });

  const years = Object.keys(groups)
    .sort((a,b)=> (parseInt(b,10)||0) - (parseInt(a,10)||0));

  pastBox.innerHTML = years.map(y=>{
    const list = groups[y];

    return `
      <div class="event-year">
        <h3>${y}</h3>
        <div class="event-timeline">
          ${list.map(e=>{
            const d = e._dt;
            const m = d ? fmtMonth(d) : "";
            const day = d ? String(d.getDate()).padStart(2,"0") : "";
            const cover = e.cover || fallbackCover;
            const cityText = e.city || "";

            return `
              <div class="event-row">
                <div class="event-date-pill">
                  <div class="m">${m}</div>
                  <div class="d">${day}</div>
                </div>

                <div class="event-item">
                  <div class="event-thumb">
                    <img src="${cover}" alt="${e.title}" loading="lazy" decoding="async">
                  </div>

                  <div class="event-info">
                    <div class="event-title-line">${e.title}</div>
                    <div class="event-sub">
                      <span>📍 ${cityText || e.location || ""}</span>
                    </div>

                    <div style="margin-top:10px">
                      <a class="btn btn-ghost" href="${e.link}" target="_blank" rel="noopener">
                        查看活動紀錄
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}


/* ===== 只允許輸入數字（含貼上） ===== */
function bindOnlyNumberInputs(){
  document.querySelectorAll(".js-only-number").forEach(input => {

    // 鍵盤輸入時
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D+/g, "");
    });

    // 貼上時（防止貼上亂碼）
    input.addEventListener("paste", e => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData("text");
      input.value += text.replace(/\D+/g, "");
    });

  });
}

function showError(id, msg){
  const el = document.getElementById(id);
  if(!el) return;
  el.textContent = msg;
  el.classList.add("show");
}

function clearErrors(){
  document.querySelectorAll(".form-error").forEach(el=>{
    el.textContent = "";
    el.classList.remove("show");
  });
}

/* ===== 表單防呆驗證 ===== */

// 台灣手機 / 提取常見格式
function isValidPhone(phone){
  if(!phone) return false;

  // 移除空白與 -
  const p = phone.replace(/[\s-]/g, "");

  // 09xxxxxxxx（手機）
  if(/^09\d{8}$/.test(p)) return true;

  // 市話（02,03,04...）
  if(/^0\d{1,2}\d{6,8}$/.test(p)) return true;

  return false;
}

// Email（選填）
function isValidEmail(email){
  if(!email) return true; // 選填：空白直接通過
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function openPrefilledGoogleForm(fields){
  const params = [];

  Object.entries(fields).forEach(([key, value]) => {
    if(value !== undefined && value !== null && value !== ""){
      params.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      );
    }
  });

  const url = `${BRAND.googleFormView}&${params.join("&")}`;
  console.log("[FORM PREFILL URL]", url); // debug 用
  window.open(url, "_blank", "noopener");
}


function showFormHint(){
  const hint = document.createElement("div");
  hint.className = "form-hint-overlay";
  hint.innerHTML = `
    <div class="form-hint-box">
      <h3>最後一步</h3>
      <p>
        我們已為你填好 Google 表單，<br>
        請確認內容後 <strong>按下送出</strong> 即可完成備份。
      </p>
      <button class="btn btn-primary">我知道了</button>
    </div>
  `;
  document.body.appendChild(hint);

  hint.querySelector("button").onclick = () => {
    hint.remove();
  };
}

function initHeroBackgroundSlideshow(){
  const el = document.querySelector(".hero-bg");
  if(!el) return;

  console.log("hero slideshow init");

  // ===== 請換成你實際存在的圖片路徑 =====
  const imgs = [
    "/assets/images/home/LINE_ALBUM_果實酒茶酒_251205_1.jpg",
    // "/assets/images/home/LINE_ALBUM_果實酒茶酒_251205_2.jpg",
    // "/assets/images/home/LINE_ALBUM_果實酒茶酒_251205_3.jpg",
    // "/assets/images/home/LINE_ALBUM_果實酒茶酒_251205_7.jpg",
    // "/assets/images/home/LINE_ALBUM_清酒_251205_5.jpg",
    // "/assets/images/home/LINE_ALBUM_葡萄酒_251205_2.jpg",
  ];

  // 至少要兩張才輪播
  if(imgs.length < 2){
    console.warn("Hero slideshow: not enough images");
    el.style.backgroundImage = `url('${imgs[0]}')`;
    return;
  }

  let index = 0;

  // 預載圖片，避免切換閃爍
  imgs.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // 切換背景（淡出 → 換圖 → 淡入）
  function switchBg(){
    index = (index + 1) % imgs.length;
    const next = imgs[index];

    console.log("switch to:", next);

    el.classList.add("is-fading");

    setTimeout(() => {
      el.style.backgroundImage = `url('${next}')`;
      el.classList.remove("is-fading");
    }, 300);
  }

  // 初始化第一張
  el.style.backgroundImage = `url('${imgs[0]}')`;

  // 每 7 秒切一次（Earthboat 那種慢節奏）
  setInterval(switchBg, 7000);
}

function waitForHeaderAndSetActive(){
  const timer = setInterval(() => {
    const nav = document.querySelector(".main-nav");
    if(nav){
      clearInterval(timer);
      setNavActive();
    }
  }, 50);
}
/* ======================================================
   PROMOTION ENGINE（GLOBAL SAFE VERSION）
====================================================== */

function getCartContext(){
  const cart = readCart();
  return {
    items: cart,
    totalQty: cart.reduce((s,p)=>s+p.qty,0),
    subtotal: cart.reduce((s,p)=>s+p.price*p.qty,0),
    categories: new Set(cart.map(p => p.category).filter(Boolean)),
    breweries: new Set(cart.map(p => p.brewery).filter(Boolean))
  };
}

function applyPromotions(ctx){
  let total = ctx.subtotal;
  let discountTotal = 0;
  const applied = [];

  // 可疊加 / 不可疊加分流
  const stackables = PROMOTIONS.filter(p => p.stackable);
  const exclusives = PROMOTIONS.filter(p => !p.stackable);

  // 先處理不可疊加（取最優惠）
  let bestExclusive = null;
  let bestTotal = total;

  exclusives.forEach(p => {
    if(p.condition(ctx)){
      const after = p.apply(total);
      if(after < bestTotal){
        bestTotal = after;
        bestExclusive = p;
      }
    }
  });

  if(bestExclusive){
    const before = total;
    total = bestTotal;
    const amount = before - total;

    discountTotal += amount;
    applied.push({
      id: bestExclusive.id,
      label: bestExclusive.label,
      amount
    });
  }

  // 再處理可疊加
  stackables.forEach(p => {
    if(p.condition(ctx)){
      const before = total;
      const after = p.apply(total);
      const amount = before - after;

      if(amount > 0){
        total = after;
        discountTotal += amount;
        applied.push({
          id: p.id,
          label: p.label,
          amount
        });
      }
    }
  });

  return {
    finalTotal: total,
    discount: discountTotal,
    applied
  };
}


function renderPromotionBlock(){
  const box=document.getElementById("promotionBlock");
  if(!box || !window.PROMOTIONS) return;

  const ctx=getCartContext();
  const res=applyPromotions(ctx);

  box.innerHTML=`
    <div class="promo-title">目前優惠</div>
    <ul class="promo-list">
      ${window.PROMOTIONS.map(p=>{
        const ok=res.applied.some(a=>a.id===p.id);
        return `
          <li class="${ok?'achieved':''}">
            <span class="check">${ok?'✔':'◻'}</span>
            ${p.label}
          </li>
        `;
      }).join("")}
    </ul>
    ${res.discount>0
      ? `<div class="promo-discount">已折抵 NT$${res.discount}</div>`
      : `<div class="promo-hint"></div>`
    }
  `;
}

/* 接到你原本購物車更新 */
const _updateCartUI = window.updateCartUI;
window.updateCartUI = function(){
  if(typeof _updateCartUI==="function") _updateCartUI();

  const totalEl=document.getElementById("totalAmount");
  if(totalEl){
    const ctx=getCartContext();
    const promo=applyPromotions(ctx);
    totalEl.textContent="NT$"+promo.finalTotal;
  }

  renderPromotionBlock();
};

function renderHomePromotion() {
  const box = document.getElementById("homePromo");
  if (!box || !window.PROMOTIONS) return;

  box.innerHTML = `
    <div class="home-promo-inner">
      <div class="home-promo-title">目前優惠</div>
      <div class="home-promo-items">
        ${window.PROMOTIONS.map(p => p.label).join(" ／ ")}
      </div>
    </div>
  `;
}

function getNextPromotionHint(cartQty){
  if (!window.PROMOTIONS || !Array.isArray(PROMOTIONS)) return null;

  const qtyPromos = PROMOTIONS
    .filter(p =>
      p.type === "quantity" &&
      p.hint &&
      typeof p.hint.minQty === "number"
    )
    .sort((a,b)=>a.hint.minQty - b.hint.minQty);

  for (const p of qtyPromos){
    const need = p.hint.minQty - cartQty;
    if (need > 0){
      return {
        need,
        text: p.label
      };
    }
  }
  return null;
}



function showPromoToast(text){
  const toast = document.createElement("div");
  toast.className = "promo-toast";
  toast.textContent = text;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

function getOrderPricing(){
  const ctx = getCartContext();
  const promo = applyPromotions(ctx);

  return {
    subtotal: ctx.subtotal,          // 原價
    discounts: promo.applied || [],  // 使用的折扣清單
    discountTotal: promo.discount,   // 折扣總額
    total: promo.finalTotal          // 實際總金額
  };
}

function openGallery(productId){
  const p = products.find(x => x.id === productId);
  if(!p) return;

  currentGallery = p.imgs && p.imgs.length ? p.imgs : [p.img];
  currentIndex = 0;

  showGalleryImage();
}

function showGalleryImage(){
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const note = document.getElementById("lightbox-note");

  if(note) note.style.display = "none";
  if(img){
    img.style.display = "block";
    img.src = currentGallery[currentIndex];
  }
  if(box) box.style.display = "flex";

  updateGalleryControls();
}

function prevImage(){
  currentIndex =
    (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  showGalleryImage();
}

function nextImage(){
  currentIndex =
    (currentIndex + 1) % currentGallery.length;
  showGalleryImage();
}

function renderPrice(p){
  if(p.originPrice && p.originPrice > p.price){
    return `
      <div class="price-now">NT$${p.price}</div>
      <div class="price-origin">NT$${p.originPrice}</div>
    `;
  }
  return `<div class="price-now">NT$${p.price}</div>`;
}

let currentImgIndex = 0;

function renderProductImages(imgs = [], name = ""){
  if(!imgs.length){
    return `
      <div class="product-gallery empty">
        <div class="product-img-empty">（尚未提供圖片）</div>
      </div>
    `;
  }

  return `
    <div class="product-gallery">
      <button class="img-btn left" onclick="prevProductImg()">‹</button>

      <img
        id="productImg"
        src="${imgs[0]}"
        alt="${name}"
      >

      <button class="img-btn right" onclick="nextProductImg()">›</button>
    </div>
  `;
}




function switchImg(dir){
  const imgs = window._currentProductImgs;
  currentImgIndex = (currentImgIndex + dir + imgs.length) % imgs.length;
  document.getElementById("productImg").src = imgs[currentImgIndex];
}

// function renderScale(label, level){
//   const lv = parseInt(level ?? 0, 10);

//   return `
//     <div class="scale-block">
//       <strong>${label}</strong>
//       <div class="scale-bars">
//         ${[1,2,3,4,5].map(i=>`
//           <span class="${i <= lv ? 'on' : ''}"></span>
//         `).join("")}
//       </div>
//       <div class="scale-hint">
//         ${lv ? `等級 ${lv}` : "未標示"}
//       </div>
//     </div>
//   `;
// }

/* ======================================================
   SCALE (7-step) – by type
   - single active dot (not cumulative)
   - no "等級" text
====================================================== */

const SCALE_MAX = 7;

function clampInt(n, min, max){
  const v = parseInt(n, 10);
  if(Number.isNaN(v)) return null;
  return Math.min(max, Math.max(min, v));
}

function getScaleMetaByType(type){
  // 依你確認：烈酒以 type 判斷，不顯示
  if(type === "烈酒") return [];

  if(type === "清酒"){
    return [
      { key: "sakeDrySweet",    title: "口感", left: "辛口", right: "甘口" },
      { key: "sakeUmamiFruity", title: "風味", left: "米旨", right: "果香" }
    ];
  }

  if(type === "果實酒" || type === "茶酒"){
    return [
      { key: "ftAcidSweet",  title: "風味", left: "酸度", right: "甜度" },
      { key: "ftFreshRich",  title: "口感", left: "清爽", right: "濃郁" }
    ];
  }

  if(type === "葡萄酒"){
    return [
      { key: "wineTannin",     title: "單寧", left: "單寧輕盈", right: "單寧強烈" },
      { key: "wineFreshFull",  title: "酒體", left: "清爽",     right: "厚實" }
    ];
  }

  // 其他未定義 type：不顯示（避免錯誤）
  return [];
}

function renderScaleAxis(meta, rawLevel){
  const lv = clampInt(rawLevel, 1, SCALE_MAX);

  return `
    <div class="scale-block">
      <div class="scale-head">
        <strong class="scale-title">${meta.title}</strong>
      </div>

      <div class="scale-track">
        <div class="scale-bars" aria-label="${meta.title}：${meta.left} 到 ${meta.right}">
          ${Array.from({length: SCALE_MAX}, (_,i)=> i+1).map(i=>`
            <span class="${lv === i ? 'on' : ''}"></span>
          `).join("")}
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



let _currentImgIndex = 0;

function openProduct(id){

  const p = products.find(x => x.id === id);
  if(!p) return;

  console.log("scale:", p.scale);

  const box  = document.getElementById("lightbox");
  const img  = document.getElementById("lightbox-img");
  const note = document.getElementById("lightbox-note");

  // 關閉舊的單圖顯示
  if(img) img.style.display = "none";

  note.style.display = "block";

  // 設定目前商品圖片
  window._currentProductImgs = Array.isArray(p.imgs) ? p.imgs : [];
  _currentImgIndex = 0;

  note.innerHTML = `
    <div class="product-modal">

      <!-- 商品圖片 -->
      <div class="product-media">
        ${renderProductImages(window._currentProductImgs, p.name)}
      </div>

      <!-- 商品內容 -->
      <div class="product-content">

        <h3>${p.name}</h3>

        <div class="price-block">
          ${renderPrice(p)}
        </div>

        <!-- 酒款特色 -->
        <div class="feature-block">
          <h4 class="feature-title">酒款特色</h4>
          <p class="feature-desc">
            ${p.note?.oneLine || ""}
          </p>
        </div>

        <!-- Scale（依 type 自動顯示 2 條，烈酒不顯示） -->
        ${
          getScaleMetaByType(p.type).map(meta => {
            const v = p.scale ? p.scale[meta.key] : null;
            return renderScaleAxis(meta, v);
          }).join("")
        }


        <!-- 產品資訊（無按鈕、直接顯示） -->
        <div class="info-section">
          <h4 class="info-title">產品資訊</h4>
          <ul class="info-list">
            ${p.info?.brand   ? `<li><span>品牌:</span><b>${p.info.brand}</b></li>` : ""}
            ${p.info?.origin  ? `<li><span>產地:</span><b>${p.info.origin}</b></li>` : ""}
            ${p.info?.rice    ? `<li><span>原料米:</span><b>${p.info.rice}</b></li>` : ""}
            ${p.info?.variety ? `<li><span>葡萄品種:</span><b>${p.info.variety}</b></li>` : ""}
            ${p.info?.yeast   ? `<li><span>酵母:</span><b>${p.info.yeast}</b></li>` : ""}
            ${p.info?.polish  ? `<li><span>精米步合:</span><b>${p.info.polish}</b></li>` : ""}
            ${p.info?.alcohol ? `<li><span>酒精濃度:</span><b>${p.info.alcohol}</b></li>` : ""}
            ${p.info?.volume  ? `<li><span>容量:</span><b>${p.info.volume}</b></li>` : ""}
          </ul>
        </div>

        <!-- 酒造介紹 -->
        ${renderWinery(p.wineryId)}

      </div>
    </div>
  `;

  box.style.display = "flex";
}


function renderWinery(id){
  if(!id || !window.wineries) return "";

  const w = window.wineries.find(x => x.id === id);
  if(!w) return "";

  // return `
  //   <hr>
  //   <h4>酒造介紹</h4>
  //   <p><strong>${w.name}</strong>｜${w.location}</p>
  //   <p>${w.description}</p>
  //   <a class="btn" href="/wineries/#${w.id}">前往酒造介紹</a>
  // `;
  return `
    <hr>
    <h4>酒造介紹</h4>
    <p><strong>${w.name}</strong>｜${w.location}</p>
    <p>${w.description}</p>
  `;
}


function toggleInfo(btn){
  const wrap = btn?.closest(".info-section");
  if(!wrap) return;
  wrap.classList.toggle("open");
}

function updateProductImg(){
  const img = document.getElementById("productImg");
  if(!img || !window._currentProductImgs.length) return;

  img.src = window._currentProductImgs[_currentImgIndex];
}

function prevProductImg(){
  if(!window._currentProductImgs.length) return;

  _currentImgIndex =
    (_currentImgIndex - 1 + window._currentProductImgs.length) %
    window._currentProductImgs.length;

  updateProductImg();
}

function nextProductImg(){
  if(!window._currentProductImgs.length) return;

  _currentImgIndex =
    (_currentImgIndex + 1) %
    window._currentProductImgs.length;

  updateProductImg();
}
