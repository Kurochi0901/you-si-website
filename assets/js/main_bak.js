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

const BRAND = {
  name: "酉時喝酒 YOU-SI",
  lineId: "@008jcfgc",
  lineUrl: "https://line.me/ti/p/@008jcfgc",
  igUrl: "https://www.instagram.com/yousi1719_drink/",
  googleFormView: "https://docs.google.com/forms/d/e/1FAIpQLSdt6tYWDbQOc3xk60XK-_I-p5S1cRmWpa5KIdC8CDf9rEJLhg/viewform",
  googleFormPost: "https://docs.google.com/forms/d/e/1FAIpQLSdt6tYWDbQOc3xk60XK-_I-p5S1cRmWpa5KIdC8CDf9rEJLhg/formResponse"
};

/* ===== 酒款資料（沿用你上傳的內容） ===== */
const products = [
  /* ================= 果實酒・茶酒 ================= */
  {
    id:1,
    name:"上等梅酒 知覽茶",
    category:"fruit-tea",
    type:"果實酒",
    spec:"ALC 10% / 日本本坊酒造",
    price:850,
    img:"/assets/images/LINE_ALBUM_果實酒茶酒_251205_8.jpg",
    note:{
      oneLine:"茶香溫潤、梅酸柔和，是非常順口的日系梅酒。",
      goodFor:"喜歡茶系風味、想輕鬆喝一杯的人",
      notFor:"偏好高度酒感或烈酒風味的人"
    }
  },
  {
    id:2,
    name:"梅侍 碧螺春綠茶梅酒",
    category:"fruit-tea",
    type:"果實酒",
    spec:"ALC 10% / 台灣梅侍",
    price:1000,
    img:"/assets/images/LINE_ALBUM_果實酒茶酒_251205_10.jpg",
    note:{
      oneLine:"綠茶清香明顯，梅子甜酸平衡、口感清爽。",
      goodFor:"喜歡清香茶感、不想太甜的人",
      notFor:"偏好厚重酒體或高酒精的人"
    }
  },
  {
    id:3,
    name:"梅侍 東方美人茶梅酒",
    category:"fruit-tea",
    type:"果實酒",
    spec:"ALC 10% / 台灣梅侍",
    price:1100,
    img:"/assets/images/product_03.svg",
    note:{
      oneLine:"熟果與蜜香型茶感，香氣層次較豐富。",
      goodFor:"喜歡茶香有深度、想慢慢喝的人",
      notFor:"只想喝清爽系果實酒的人"
    }
  },
  {
    id:4,
    name:"梅侍 凍頂烏龍茶梅酒",
    category:"fruit-tea",
    type:"果實酒",
    spec:"ALC 10% / 台灣梅侍",
    price:1100,
    img:"/assets/images/LINE_ALBUM_果實酒茶酒_251205_11.jpg",
    note:{
      oneLine:"焙茶感明顯、梅酸柔和，尾韻乾淨。",
      goodFor:"喜歡烏龍茶焙香、不愛甜膩的人",
      notFor:"偏好果香型甜酒的人"
    }
  },
  {
    id:5,
    name:"天吹 抹茶梅酒",
    category:"tea",
    type:"茶酒",
    spec:"ALC 9% / 天吹酒造",
    price:950,
    img:"/assets/images/product_05.svg",
    note:{
      oneLine:"抹茶苦韻與梅甜交織，層次鮮明。",
      goodFor:"喜歡抹茶風味、想找特色梅酒的人",
      notFor:"不喜歡茶苦感的人"
    }
  },
  {
    id:6,
    name:"天吹 伯爵紅茶梅酒",
    category:"tea",
    type:"茶酒",
    spec:"ALC 9% / 天吹酒造",
    price:950,
    img:"/assets/images/product_06.svg",
    note:{
      oneLine:"紅茶香氣突出、甜度溫和，冰飲非常順口。",
      goodFor:"喜歡紅茶香、不想太甜的人",
      notFor:"追求烈酒感或高度酒精的人"
    }
  },
  {
    id:7,
    name:"天吹 千年抹茶酒",
    category:"tea",
    type:"茶酒",
    spec:"ALC 6% / 天吹酒造",
    price:1200,
    img:"/assets/images/product_07.svg",
    note:{
      oneLine:"抹茶風味純淨，酒感極輕、像甜點酒。",
      goodFor:"不常喝酒、喜歡甜點系酒款的人",
      notFor:"想要酒精存在感的人"
    }
  },
  {
    id:8,
    name:"八女綠茶梅酒",
    category:"tea",
    type:"茶酒",
    spec:"ALC 12% / 西吉田酒造",
    price:1300,
    img:"/assets/images/product_08.svg",
    note:{
      oneLine:"八女茶清香明亮，酒體比一般梅酒更俐落。",
      goodFor:"喜歡茶香清爽、想搭餐的人",
      notFor:"偏好甜口果實酒的人"
    }
  },
  {
    id:9,
    name:"梅侍 紅玉紅茶梅酒",
    category:"tea",
    type:"茶酒",
    spec:"ALC 10% / 台灣梅侍",
    price:1000,
    img:"/assets/images/LINE_ALBUM_果實酒茶酒_251205_9.jpg",
    note:{
      oneLine:"紅玉紅茶厚實香氣，梅酸圓潤。",
      goodFor:"喜歡台灣茶風味、想單喝的人",
      notFor:"追求烈酒刺激感的人"
    }
  },

  /* ================= 果實酒 ================= */
  {
    id:10,
    name:"山形正宗 濃郁梅酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 10% / 水戶部酒造",
    price:1200,
    img:"/assets/images/product_10.svg",
    note:{
      oneLine:"梅香濃厚、甜度明顯，口感飽滿。",
      goodFor:"喜歡甜口梅酒、濃郁風格的人",
      notFor:"偏好清爽型果實酒的人"
    }
  },
  {
    id:11,
    name:"UMESKY 梅酒威士忌",
    category:"liqueur",
    type:"果實酒",
    spec:"ALC 24% / 若鶴酒造",
    price:1350,
    img:"/assets/images/product_11.svg",
    note:{
      oneLine:"威士忌酒感明確，尾韻帶梅香。",
      goodFor:"威士忌愛好者、想嘗試梅酒變化的人",
      notFor:"只喝低酒精甜酒的人"
    }
  },
  {
    id:12,
    name:"鉾杉 柚子酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 8% / 河武釀造",
    price:1100,
    img:"/assets/images/product_12.svg",
    note:{
      oneLine:"柚子香氣清新、酸甜平衡。",
      goodFor:"喜歡柑橘清爽風味的人",
      notFor:"偏好濃甜酒款的人"
    }
  },
  {
    id:13,
    name:"上喜元 柚子酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 8% / 酒田酒造",
    price:990,
    img:"/assets/images/LINE_ALBUM_果實酒茶酒_251205_5.jpg",
    note:{
      oneLine:"柚香奔放、口感活潑。",
      goodFor:"喜歡酸香果實酒的人",
      notFor:"不愛酸感的人"
    }
  },
  {
    id:14,
    name:"愛知國盛 水蜜桃酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 7% / 中埜酒造",
    price:850,
    img:"/assets/images/product_14.svg",
    note:{
      oneLine:"水蜜桃香甜討喜，酒感輕盈。",
      goodFor:"不常喝酒、想輕鬆微醺的人",
      notFor:"想要酒體厚重的人"
    }
  },
  {
    id:15,
    name:"愛知國盛 水梨酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 7% / 中埜酒造",
    price:850,
    img:"/assets/images/product_15.svg",
    note:{
      oneLine:"梨子清甜、口感非常清爽。",
      goodFor:"喜歡淡雅果香的人",
      notFor:"偏好濃甜系酒款的人"
    }
  },
  {
    id:16,
    name:"愛知國盛 芒果酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 7% / 中埜酒造",
    price:850,
    img:"/assets/images/product_16.svg",
    note:{
      oneLine:"芒果香氣明確、甜感活潑。",
      goodFor:"喜歡熱帶水果甜酒的人",
      notFor:"不喜歡甜口酒款的人"
    }
  },
  {
    id:17,
    name:"愛知國盛 柑橘酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 7% / 中埜酒造",
    price:850,
    img:"/assets/images/product_17.svg",
    note:{
      oneLine:"柑橘酸甜平衡，適合冰飲。",
      goodFor:"喜歡清爽果實酒的人",
      notFor:"不愛酸感的人"
    }
  },

  /* ================= 清酒（含甜辛） ================= */
  {
    id:19,
    name:"萩之鶴 純米吟釀 萬聖貓",
    category:"sake",
    type:"清酒",
    spec:"精米 48% / ALC 15%",
    price:1500,
    img:"/assets/images/product_19.svg",
    sweetness:2,
    note:{
      oneLine:"果香柔和、酒體乾淨，平衡感極佳。",
      goodFor:"吟釀入門、喜歡清爽果香的人",
      notFor:"偏好濃厚米旨或熱燗的人"
    }
  },
  {
    id:20,
    name:"元祖眼鏡 十周年",
    category:"sake",
    type:"清酒",
    spec:"ALC 15% / 國產米",
    price:1500,
    img:"/assets/images/LINE_ALBUM_清酒_251205_2.jpg",
    sweetness:3,
    note:{
      oneLine:"口感圓潤、風味平衡，適合日常飲用。",
      goodFor:"想找百搭清酒的人",
      notFor:"追求強烈個性酒款的人"
    }
  },
  {
    id:21,
    name:"鳳凰美田 純米吟釀 冷卸",
    category:"sake",
    type:"清酒",
    spec:"精米 55% / ALC 16%",
    price:1890,
    img:"/assets/images/product_21.svg",
    sweetness:2,
    note:{
      oneLine:"吟釀果香細緻，口感清爽俐落。",
      goodFor:"喜歡冷飲清酒的人",
      notFor:"偏好甜口或厚重酒體的人"
    }
  },
  {
    id:22,
    name:"會津譽 純米大吟釀 極",
    category:"sake",
    type:"清酒",
    spec:"精米 50% / ALC 16%",
    price:1100,
    img:"/assets/images/product_22.svg",
    sweetness:2,
    note:{
      oneLine:"香氣優雅、口感乾淨，是性價比很高的大吟釀。",
      goodFor:"想入門大吟釀的人",
      notFor:"想要濃郁米香的人"
    }
  },
  {
    id:23,
    name:"仁勇 鰻魚米酒",
    category:"sake",
    type:"清酒",
    spec:"精米 65% / ALC 15%",
    price:450,
    img:"/assets/images/LINE_ALBUM_清酒_251205_4.jpg",
    sweetness:4,
    note:{
      oneLine:"米旨感明顯、口感偏甜，非常適合配餐。",
      goodFor:"喜歡甜口清酒、配重口味料理的人",
      notFor:"只喝吟釀系的人"
    }
  },
  {
    id:24,
    name:"谷川岳 純米大吟釀",
    category:"sake",
    type:"清酒",
    spec:"精米 50% / ALC 15%",
    price:1380,
    img:"/assets/images/LINE_ALBUM_清酒_251205_3.jpg",
    sweetness:2,
    note:{
      oneLine:"風味細膩、酒體乾淨，屬於優雅型清酒。",
      goodFor:"喜歡細緻口感的人",
      notFor:"偏好厚重酒感的人"
    }
  },

  /* ================= 葡萄酒 ================= */
  {
    id:25,
    name:"Donnafugata Anthilia",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 12.5% / 義大利",
    price:990,
    img:"/assets/images/product_25.svg",
    note:{
      oneLine:"白花與果香清新，酒體輕盈。",
      goodFor:"想找百搭白酒、配餐的人",
      notFor:"偏好濃郁橡木桶風味的人"
    }
  },
  {
    id:26,
    name:"Cab. Franc",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 14.5% / 保加利亞",
    price:1000,
    img:"/assets/images/LINE_ALBUM_葡萄酒_251205_6.jpg",
    note:{
      oneLine:"黑莓與香料氣息，酒體扎實。",
      goodFor:"紅酒入門、喜歡果香酒體的人",
      notFor:"只喝輕酒體紅酒的人"
    }
  },
  {
    id:27,
    name:"R-Evolution ESPÍGOL",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 14% / 西班牙",
    price:1200,
    img:"/assets/images/product_27.svg",
    note:{
      oneLine:"果香成熟、結構感明確。",
      goodFor:"想找個性派紅酒的人",
      notFor:"只喝清爽系紅酒的人"
    }
  },
  {
    id:28,
    name:"Abadía de San Campio",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 12.5% / 西班牙",
    price:1000,
    img:"/assets/images/LINE_ALBUM_葡萄酒_251205_7.jpg",
    note:{
      oneLine:"白花與柑橘香氣，酸度清新。",
      goodFor:"喜歡清爽白酒的人",
      notFor:"偏好厚重白酒的人"
    }
  },
  {
    id:29,
    name:"Malvasia 微甜氣泡酒",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 6% / 義大利",
    price:790,
    img:"/assets/images/product_29.svg",
    note:{
      oneLine:"氣泡細緻、微甜討喜。",
      goodFor:"聚會、送禮、酒精耐受低的人",
      notFor:"不喜歡甜酒的人"
    }
  },
  {
    id:30,
    name:"Sensale BIO Grillo",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 12.5% / 義大利",
    price:750,
    img:"/assets/images/product_30.svg",
    note:{
      oneLine:"柑橘與草本風味，口感清新。",
      goodFor:"日常配餐白酒",
      notFor:"偏好濃郁橡木桶的人"
    }
  },
  {
    id:31,
    name:"Finca Estarijo",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 14% / 西班牙",
    price:1200,
    img:"/assets/images/LINE_ALBUM_葡萄酒_251205_3.jpg",
    note:{
      oneLine:"成熟果香、酒體厚實。",
      goodFor:"喜歡濃郁紅酒的人",
      notFor:"只喝輕酒體紅酒的人"
    }
  }
];

/* ===== 工具 ===== */
function formatPrice(v){ return "NT$" + v; }

function groupOf(p){
  if(p.type==="清酒") return "sake";
  if(p.type==="茶酒") return "tea";
  if(p.type==="葡萄酒") return "wine";
  if(p.type==="果實酒") return "fruit";
  return "all";
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
  if(p.startsWith("/products/fruit")) return "products-fruit";
  if(p.startsWith("/products/tea")) return "products-tea";
  if(p.startsWith("/products/wine")) return "products-wine";
  return "home";
}

/* ===== 年齡驗證 ===== */
function ageCheck(){
  const ok = localStorage.getItem("age_ok");
  if(!ok && !location.pathname.startsWith("/age")){
    location.href="/age/";
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

/* ===== 清酒甜辛 ===== */
function renderSweetness(level){
  const labels = ["偏乾","稍乾","中間","稍甜","偏甜"];
  const lv = Math.min(5, Math.max(1, parseInt(level || 3,10)));
  return `
    <div style="margin-top:14px;">
      <strong>甜辛感</strong>
      <div style="display:flex; gap:6px; margin-top:6px;">
        ${[1,2,3,4,5].map(i=>`
          <span style="
            width:22px;
            height:8px;
            border-radius:6px;
            background:${i<=lv ? '#b48a63' : '#eee'};
            display:inline-block;
          "></span>
        `).join("")}
      </div>
      <div style="font-size:12px; color:#888; margin-top:4px;">
        ${labels[lv-1]}
      </div>
    </div>
  `;
}

/* ===== 酒款說明 ===== */
function openNote(id){
  const p = products.find(x => x.id === id);
  if(!p) return;

  const box  = document.getElementById("lightbox");
  const img  = document.getElementById("lightbox-img");
  const note = document.getElementById("lightbox-note");
  if(!box || !note) return;

  if(img) img.style.display = "none";
  note.style.display = "block";

  note.innerHTML = `
    <div class="note-card">
      <h3>${p.name}</h3>

      <p><strong>風味一句話</strong><br>
      ${p.note?.oneLine || "（尚未填寫）"}</p>

      <p><strong>適合誰</strong><br>
      ${p.note?.goodFor || "（尚未填寫）"}</p>

      <p><strong>不適合誰</strong><br>
      ${p.note?.notFor || "（尚未填寫）"}</p>

      ${renderSweetness(p.sweetness || 3)}
    </div>
  `;

  box.style.display = "flex";
}

/* ===== 購物車（單一資料來源） ===== */
function getCart(){ return JSON.parse(localStorage.getItem("cart")||"[]"); }
function saveCart(c){ localStorage.setItem("cart",JSON.stringify(c)); }

function addToCart(id){
  const cart=getCart();
  const i=cart.find(x=>x.id===id);
  if(i) i.qty++;
  else cart.push({id,qty:1});
  saveCart(cart);
  renderCartMini();
}

function removeFromCart(id){
  saveCart(getCart().filter(x=>x.id!==id));
  renderCartMini();
}

function setQty(id,qty){
  const cart=getCart();
  const i=cart.find(x=>x.id===id);
  if(i) i.qty=Math.max(1,parseInt(qty)||1);
  saveCart(cart);
  renderCartMini();
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

/* ===== 商品 Grid ===== */
function renderGrid(list,id){
  const box=document.getElementById(id);
  if(!box) return;
  box.innerHTML=list.map(p=>`
    <div class="card">
      <div class="card-media">
        <img src="${p.img}" alt="${p.name}" onclick="openLightbox('${p.img}')">
      </div>
      <div class="card-body">
        <div class="name" onclick="openNote(${p.id})" style="cursor:pointer">${p.name}</div>
        <div class="spec">${p.spec}</div>
        <div class="card-meta">
          <div class="price">${formatPrice(p.price)}</div>
          <button class="btn-add" onclick="addToCart(${p.id})">加入購物車</button>
        </div>
      </div>
    </div>`).join("");
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

  renderGrid(list, "productGrid");
}

/* ===== IG QR ===== */
function setIgQr(){
  const img = document.getElementById("igQrImg");
  if(!img) return;
  const url = encodeURIComponent(BRAND.igUrl);
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${url}`;
}

/* ===== 下單送出（補齊 order 頁所需） ===== */
async function submitOrder(){
  const name = (document.getElementById("order-name")?.value || "").trim();
  const phone = (document.getElementById("order-phone")?.value || "").trim();
  const email = (document.getElementById("order-email")?.value || "").trim();
  const pickup = (document.getElementById("order-pickup")?.value || "店內取貨").trim();
  const address = (document.getElementById("order-address")?.value || "").trim();
  const note = (document.getElementById("order-note")?.value || "").trim();

  if(!name || !phone){
    alert("請填寫姓名與電話。");
    return;
  }
  if(pickup === "郵寄" && !address){
    alert("選擇郵寄時，請填寫完整地址。");
    return;
  }

  const cart = readCart();
  if(cart.length === 0){
    alert("購物車沒有商品，請先加入商品再送出。");
    return;
  }

  const itemsText = cart.map(p=>`${p.name}（${p.spec}）x${p.qty} - NT$${p.price}`).join("\n");
  const total = cartTotal();

  const orderText =
`【酉時喝酒 訂單】
姓名：${name}
電話：${phone}
Email：${email || "（未填）"}
取貨方式：${pickup}
地址：${pickup==="郵寄" ? address : "（店內取貨）"}
備註：${note || "（無）"}

【品項】
${itemsText}

總金額：NT$${total}
`;

  // 1) 先複製到剪貼簿（成功率最高）
  try{
    await navigator.clipboard.writeText(orderText);
    alert("訂單內容已複製到剪貼簿。\n接下來會為你開啟 LINE 官方帳號，直接貼上送出即可。");
  }catch(_e){
    alert("將為你開啟 LINE 官方帳號。\n（若未成功複製，請手動複製頁面上的訂單內容。）");
  }

  // 2) 開啟 LINE 官方帳號
  window.open(BRAND.lineUrl, "_blank");

  // 3) 也提供 Google 表單入口（保留你原本的流程）
  // 你若要「自動送出到 Google Form」，需要你提供 form 的 entry.* 欄位 id，我再幫你接上。
}

/* ===== Order頁：郵寄地址顯示 ===== */
function bindOrderPickup(){
  const pickupEl = document.getElementById("order-pickup");
  const addrWrap = document.getElementById("addrWrap");
  if(!pickupEl || !addrWrap) return;

  const sync = ()=>{
    addrWrap.style.display = pickupEl.value === "郵寄" ? "block" : "none";
  };
  pickupEl.addEventListener("change", sync);
  sync();
}

/* ===== 初始化 ===== */
document.addEventListener("DOMContentLoaded",()=>{
  ageCheck();

  // bind social links
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
  renderCartMini();

  const key = pathKey();

  // home
  if(key === "home"){
    renderGrid(products.slice(0,4), "homeGrid");
  }

  // products (all + filters)
  if(key === "products"){
    // wiring filters
    document.getElementById("q")?.addEventListener("input", applyFilters);
    document.getElementById("cat")?.addEventListener("change", applyFilters);
    document.getElementById("minp")?.addEventListener("input", applyFilters);
    document.getElementById("maxp")?.addEventListener("input", applyFilters);
    applyFilters();
  }

  // category pages
  if(key === "products-sake") renderGrid(products.filter(p=>groupOf(p)==="sake"), "productGrid");
  if(key === "products-fruit") renderGrid(products.filter(p=>groupOf(p)==="fruit"), "productGrid");
  if(key === "products-tea") renderGrid(products.filter(p=>groupOf(p)==="tea"), "productGrid");
  if(key === "products-wine") renderGrid(products.filter(p=>groupOf(p)==="wine"), "productGrid");

  // offers page: simple “本週推薦”
  if(key === "offers"){
    // 你可自行改推薦邏輯：目前取前 6 支作為範例
    renderGrid(products.slice(0,6), "offerGrid");
  }

  // order page
  if(key === "order"){
    bindOrderPickup();
  }
});
