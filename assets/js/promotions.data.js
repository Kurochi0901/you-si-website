/* ======================================================
   PROMOTIONS DATA（指定商品 ID 組合促銷版）

   新增促銷只需複製一個 block，修改：
   - id           → 唯一識別碼（自訂字串）
   - label        → 顯示在購物車的文字
   - description  → 說明文字
   - targetIds    → 參與此促銷的商品 id 白名單（陣列）
   - minQty       → 白名單商品加總需達到幾件才觸發
   - discount     → 折扣率，例如 0.05 = 95折（折抵 5%）
   - stepAmount   → 滿額折抵級距：白名單商品小計每滿多少元（選填）
   - stepDiscount → 滿額折抵金額：每達一個級距折多少元（選填）
   - startAt      → 活動開始日 "YYYY-MM-DD"（留空 = 無起始限制）
   - endAt        → 活動結束日 "YYYY-MM-DD"（留空 = 不會結束）
   - display      → 是否要在 /offers/ 頁面顯示為活動卡片

   🖼 Banner 兩種尺寸：
   display.bannerImage       = 桌機版（1920 寬）
   display.bannerImageMobile = 手機版（750 寬），螢幕 ≤640px 時自動換這張
   兩者用 <picture> + media query 切換（同首頁 hero 輪播的做法）。
   只填 bannerImage 也可以，手機會直接縮放桌機版那張。

   📌 /promotions/ 卡片排序：
   由頁面自動依狀態排（進行中 → 長期活動 → 即將開始 → 已結束），
   同狀態內維持本檔案的排列順序，所以這裡不用為了版位順序搬動 block。

   apply(ctx) 計算邏輯：
   只計算「在白名單內的商品」的小計，再乘以折扣率
   回傳「折抵金額」（正整數）

   💰 滿額折抵（stepAmount / stepDiscount）：
   在 apply(ctx) 內以 Math.floor(白名單小計 / stepAmount) * stepDiscount 計算，
   可與同一個 block 的折扣率「累計」（例：95 折 ＋ 每滿 1500 折 100）。
   基準一律是「白名單商品的原價小計」——不含非活動商品，也不用折後價再折。
   不想設上限就不用寫上限；要設上限請在 apply() 內自行 Math.min()。

   🛒 加購提示 hint（加入購物車時的引導 toast，見 main.js getNextPromotionHint）：
   hint.minQty        → 件數型：「再買 N 件可享…」
   hint.kind:"amount" → 金額型：「活動酒款再買 NT$X，可多折 NT$Y」
                        級距直接讀本 block 的 stepAmount / stepDiscount
   hint.nudgeWithin   → 金額型專用：差額 ≤ 此值才提示（預設 = stepAmount），
                        避免出現「再買 NT$1,500」這種無感提示
   ⚠️ 件數型優先；且客人身上有折扣碼時金額型不提示（折扣碼與活動擇優，提示可能不成立）

   ⏰ 日期自動結束：
   只要 condition(ctx) 開頭呼叫 isPromoActive(this)，
   超過 endAt 當日 23:59:59 之後，購物車折扣自動失效。
   /offers/ 頁面也會自動顯示「活動已結束」徽章。
====================================================== */

/** 判斷某個 promo 目前是否在活動期間內（無起訖日期 = 永遠有效） */
export function isPromoActive(promo){
  const now = Date.now();
  if (promo.startAt) {
    const start = new Date(promo.startAt + "T00:00:00").getTime();
    if (isNaN(start) === false && now < start) return false;
  }
  if (promo.endAt) {
    const end = new Date(promo.endAt + "T23:59:59").getTime();
    if (isNaN(end) === false && now > end) return false;
  }
  return true;
}

/** 回傳活動狀態：'upcoming' | 'active' | 'ended' | 'always' */
export function getPromoStatus(promo){
  const now = Date.now();
  const hasStart = !!promo.startAt;
  const hasEnd   = !!promo.endAt;
  if (!hasStart && !hasEnd) return 'always';
  if (hasStart) {
    const start = new Date(promo.startAt + "T00:00:00").getTime();
    if (now < start) return 'upcoming';
  }
  if (hasEnd) {
    const end = new Date(promo.endAt + "T23:59:59").getTime();
    if (now > end) return 'ended';
  }
  return 'active';
}

export const PROMOTIONS = [

  /* =============================
     酉時之約：夏日祭典前哨站
     指定 款酒任選 2 入 92 折
     ✏️  要調整哪幾瓶參與，改 targetIds 即可
     ✏️  要設定活動期間，改 startAt / endAt（到期會自動失效）
     ✏️  要關閉活動，把整個 block 註解掉即可
  ============================= */
  {
    id: "summer-festival-2026-92",
    type: "combo-ids",
    stackable: false, // 與其他不可疊加優惠擇優

    label: "酉時之約：夏日祭典前哨站 — 指定酒款任選 2 入 92 折",
    description: "指定 11 款酒任選 2 件（含）以上，該活動商品小計享 92 折",

  
    targetIds: [
      5, 6, 7, 13, 14, 15, 19, 22, 35, 36, 45, 52, 64, 68, 70, 71, 84, 85, 118, 119, 120, 121, 122, 123
    ],

    // ✏️ 活動期間 "YYYY-MM-DD"（留空字串=無限制；endAt 過了會自動失效）
    startAt: "2026-05-01",   // 例："2026-06-01"
    endAt:   "2026-07-31",   // 例："2026-06-30"

    // ✏️ 在 /offers/ 頁面顯示為活動卡片（不想顯示就把 showOnOffersPage 改成 false）
    display: {
      showOnOffersPage: true,
      title: "🍶 酉時之約：夏日祭典前哨站",
      summary: "夏日將至，從清酒到葡萄酒精選 11 款解暑酒款，任選 2 件即享 92 折優惠。",
      bannerImage:       "/assets/images/home/夏日活動1920.webp?v=2",  // 桌機版（1920 寬）
      bannerImageMobile: "/assets/images/home/夏日活動750.webp?v=2",   // 手機版（750 寬，≤640px 時自動切換；留空=手機也用桌機版）
      bannerLink: "",  // 點 banner 跳轉的網址；留空=不可點

      // ✏️ 商品卡活動徽章：cardBadge = 卡片上的短標籤（留空/刪除 = 不顯示徽章）
      //    cardBadgeDetail = 滑鼠移過 / 點擊徽章時浮窗顯示的完整說明
      cardBadge: "🍶夏日祭典 任2件92折",
      cardBadgeDetail: "指定酒款任選 2 件（含）以上，活動商品小計享 92 折。"
    },

    hint: {
      kind: "combo-ids",
      minQty: 2
    },

    condition(ctx) {
      if (!isPromoActive(this)) return false;  // ⏰ 活動期間外自動失效
      const qty = ctx.items
        .filter(p => this.targetIds.includes(p.id))
        .reduce((s, p) => s + p.qty, 0);
      return qty >= 2;
    },

    apply(ctx) {
      const sub = ctx.items
        .filter(p => this.targetIds.includes(p.id))
        .reduce((s, p) => s + p.price * p.qty, 0);
      return Math.round(sub * 0.08); // 92折 = 折抵 8%
    }
  },

  /* =============================
     可愛貓咪系列 任兩件 NT$2,600
     ✏️  參與商品：32 / 33（萩之鶴 櫻花貓・暖桌貓；115 納涼貓已下架）
     ✏️  規則：任 2 件固定 2600；4 件 → 兩組 2600；3 件 → 1 組 2600 + 多的 1 件原價（可參與其他優惠）
     ✏️  stackable: false → 與其他不可疊加優惠（夏日活動、折扣碼）擇優套用，避免貓咪價再被折扣碼疊到
  ============================= */
  {
    id: "cat-series-2-2600",
    type: "combo-ids",
    stackable: false,

    label: "慵懶貓咪系列 任 2 件 NT$2,600",
    description: "萩之鶴 櫻花貓・暖桌貓 任選 2 件固定 NT$2,600（不與其他折扣疊加）",

    targetIds: [32, 33],

    // 此活動不設期間 → 永久有效；如需限時請填 startAt / endAt
    startAt: "",
    endAt:   "",

    display: {
      showOnOffersPage: true,
      title: "🐱 慵懶貓咪系列 任 2 件 NT$2,600",
      summary: "萩之鶴櫻花貓・暖桌貓，任選 2 件 NT$2,600。季節限定：萩之鶴生原酒春櫻、冬暖雙貓，季季果香微甜。",
      bannerImage:       "/assets/images/home/貓咪系列1920.webp?v=2",
      bannerImageMobile: "/assets/images/home/貓咪系列750.webp?v=2",
      bannerLink: "",

      // ✏️ 商品卡活動徽章：cardBadge = 卡片上的短標籤（留空/刪除 = 不顯示徽章）
      //    cardBadgeDetail = 滑鼠移過 / 點擊徽章時浮窗顯示的完整說明
      cardBadge: "🐱貓咪系列 任2件$2,600",
      cardBadgeDetail: "萩之鶴 櫻花貓・暖桌貓 任選 2 件固定 NT$2,600（不與其他折扣疊加）。"
    },

    hint: {
      kind: "combo-ids",
      minQty: 2
    },

    condition(ctx) {
      if (!isPromoActive(this)) return false;
      const qty = ctx.items
        .filter(p => this.targetIds.includes(p.id))
        .reduce((s, p) => s + p.qty, 0);
      return qty >= 2;
    },

    apply(ctx) {
      // 將貓咪系列每一單件攤平成單價陣列，由高到低排序
      // 取「最貴的 2*pairs 件」湊組，讓多的 1 件留下最低單價（對客戶較有利）
      const unitPrices = [];
      ctx.items
        .filter(p => this.targetIds.includes(p.id))
        .forEach(p => { for (let i = 0; i < p.qty; i++) unitPrices.push(p.price); });
      unitPrices.sort((a, b) => b - a);

      const pairs = Math.floor(unitPrices.length / 2);
      if (pairs <= 0) return 0;

      const pairedSum = unitPrices.slice(0, pairs * 2).reduce((s, v) => s + v, 0);
      const discount = pairedSum - 2600 * pairs;
      return discount > 0 ? Math.round(discount) : 0;
    }
  },

  /* =============================
     ⛔ 已結束封存：酉時之約：醉美圓月迎中秋（中秋前哨，2026/08/07–08/31）
     指定酒款 95 折（無件數門檻）— 已由下方「中秋團圓慶」正式檔接手
  ============================= */
  // {
  //   id: "mid-autumn-2026-95",
  //   type: "combo-ids",
  //   stackable: false, // 與其他不可疊加優惠擇優

  //   label: "酉時之約：醉美圓月迎中秋 — 指定酒款 95 折",
  //   description: "指定酒款不限件數，該活動商品小計享 95 折",

  //   targetIds: [
  //     5, 6, 7, 10, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 32,
  //     35, 36, 39, 40, 44, 45, 67, 71, 97, 98, 99, 122, 123, 127
  //     // ⚠️ id 39（鳳凰美田 冷卸 山田錦）目前在 products.data.js 內被註解下架，
  //     //    活動頁與購物車暫時不會帶到；商品重新上架後會自動加入本活動。
  //   ],

  //   // ✏️ 活動期間 "YYYY-MM-DD"（留空字串=無限制；endAt 過了會自動失效）
  //   startAt: "2026-08-07",
  //   endAt:   "2026-08-31",

  //   display: {
  //     showOnOffersPage: true,
  //     title: "🌕 中秋前哨：醉美圓月迎中秋",
  //     summary: "月圓人團圓，精選梅酒、果實酒、清酒與葡萄酒，不限件數即享 95 折，佐一桌烤肉與柚香。",
  //     bannerImage:       "/assets/images/home/8月中秋前哨1920.webp?v=2",
  //     bannerImageMobile: "/assets/images/home/8月中秋前哨750.webp?v=2",
  //     bannerLink: "",

  //     cardBadge: "🌕中秋95折",
  //     cardBadgeDetail: "指定酒款不限件數，活動商品小計享 95 折。活動至 2026/08/31 止。"
  //   },

  //   // 無件數門檻 → 不需要 hint（hint 是用來提示「再買 N 件就享優惠」）

  //   condition(ctx) {
  //     if (!isPromoActive(this)) return false;  // ⏰ 活動期間外自動失效
  //     return ctx.items.some(p => this.targetIds.includes(p.id));
  //   },

  //   apply(ctx) {
  //     const sub = ctx.items
  //       .filter(p => this.targetIds.includes(p.id))
  //       .reduce((s, p) => s + p.price * p.qty, 0);
  //     return Math.round(sub * 0.05); // 95折 = 折抵 5%
  //   }
  // },

  /* =============================
     酉時之約：中秋團圓慶（2026 正式檔）
     指定酒款 95 折（無件數門檻）＋ 活動酒款小計每滿 1500 再折 100，兩項累計
     ✏️  要調整哪幾瓶參與，改 targetIds 即可
     ✏️  要調整滿額級距，改 stepAmount / stepDiscount（目前不設上限）
     ✏️  要設定活動期間，改 startAt / endAt（到期會自動失效）
     ✏️  要關閉活動，把整個 block 註解掉即可
  ============================= */
  {
    id: "mid-autumn-2026-festival",
    type: "combo-ids",
    stackable: false, // 與全站折扣碼、貓咪系列擇優，不疊加

    label: "酉時之約：中秋團圓慶 — 指定酒款 95 折＋滿額折抵",
    description: "指定酒款不限件數享 95 折；活動酒款小計每滿 NT$1,500 再折 NT$100（滿 3,000 折 200，依此類推），兩項優惠可累計",

    // 中秋前哨的 29 款 ＋ 新增 128 柚子梅酒、130 龜之尾（banner 主視覺酒款），共 31 款
    targetIds: [
      5, 6, 7, 10, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 32,
      35, 36, 39, 40, 44, 45, 67, 71, 97, 98, 99, 122, 123, 127,
      128, 130
    ],

    // ✏️ 活動期間 "YYYY-MM-DD"（留空字串=無限制；endAt 過了會自動失效）
    startAt: "2026-09-07",
    endAt:   "2026-10-31",

    // ✏️ 滿額折抵級距：活動酒款小計每滿 stepAmount 元，折 stepDiscount 元（不設上限）
    stepAmount:   1500,
    stepDiscount: 100,

    display: {
      showOnOffersPage: true,
      title: "🌕 中秋團圓慶：兩瓶，才完整",
      summary: "月圓人團圓。精選梅酒、果實酒、清酒與葡萄酒，指定酒款不限件數即享 95 折；活動酒款小計每滿 NT$1,500 再折 NT$100（滿 3,000 折 200，依此類推），兩項優惠可累計。活動至 2026/10/31 止。",
      bannerImage:       "/assets/images/home/9月中秋慶1920.webp",
      bannerImageMobile: "/assets/images/home/9月中秋慶750.webp",
      bannerLink: "",

      cardBadge: "🌕中秋95折＋滿額折",
      cardBadgeDetail: "指定酒款不限件數享 95 折；活動酒款小計每滿 NT$1,500 再折 NT$100（滿 3,000 折 200，依此類推），兩項可累計。活動至 2026/10/31 止。"
    },

    hint: {
      kind: "amount",     // 金額型加購提示（級距讀上方 stepAmount / stepDiscount）
      nudgeWithin: 1000   // 差額 ≤ 1000 才提示，避免「再買 NT$1,500」這種無感提示
    },

    condition(ctx) {
      if (!isPromoActive(this)) return false;  // ⏰ 活動期間外自動失效
      return ctx.items.some(p => this.targetIds.includes(p.id));
    },

    apply(ctx) {
      // 折扣基準：只算白名單商品的「原價小計」（不含非活動商品，也不用折後價再折）
      const sub = ctx.items
        .filter(p => this.targetIds.includes(p.id))
        .reduce((s, p) => s + p.price * p.qty, 0);

      const rateOff = Math.round(sub * 0.05);                                // 95 折
      const stepOff = Math.floor(sub / this.stepAmount) * this.stepDiscount; // 每滿 1500 折 100
      return rateOff + stepOff;                                              // 兩項累計
    }
  },

  /* =============================
     慶祝官網上架：滿 3 瓶全面 9 折
  ============================= */
  // {
  //   id: "grand-opening-3-90",
  //   type: "quantity",
  //   stackable: false, // 與其他不可疊加優惠擇優

  //   label: "慶祝官網上架：滿 3 瓶全面 9 折",
  //   description: "全站商品任選 3 件（含）以上，總金額享 9 折優惠",

  //   hint: {
  //     kind: "quantity",
  //     minQty: 3
  //   },

  //   condition(ctx) {
  //     return ctx.totalQty >= 3;
  //   },

  //   apply(ctx) {
  //     // 全面 9 折 = 折抵 10%
  //     return Math.round(ctx.subtotal * 0.1);
  //   }
  // },

  /* =============================
     滿 2800 送開運御守
  ============================= */
  // {
  //   id: "lucky-charm-2800",
  //   type: "flag",
  //   stackable: true, // 可與其他優惠疊加（因為是送贈品）

  //   label: "滿 NT$2,800 送開運御守（數量有限，送完為止）",
  //   description: "下單滿 NT$2,800 即贈送「開運御守」乙個（數量有限，送完為止）",

  //   condition(ctx) {

  //     return ctx.subtotal >= 2800;
  //   },

  //   apply(ctx) {
  //     // 贈品不影響金額，回傳 0
  //     return 0;
  //   }
  // },


  /* =============================
     梅侍系列 任選 3 件 95 折
     ✏️  要調整哪幾瓶參與，改 targetIds 即可
  ============================= */
  // {
  //   id: "plumate-3-95",
  //   type: "combo-ids",
  //   stackable: false,

  //   label: "梅侍系列 任選 3 件 95 折",
  //   description: "指定梅侍商品任選 3 件（含）以上，該商品小計享 95 折",

  //   // ✏️ 在這裡填入要參與折扣的商品 id
  //   targetIds: [1, 2, 3, 4, 8, 9],

  //   // ✏️ 幾件以上觸發
  //   hint: {
  //     kind: "combo-ids",
  //     minQty: 3
  //   },

  //   condition(ctx) {
  //     const qty = ctx.items
  //       .filter(p => this.targetIds.includes(p.id))
  //       .reduce((s, p) => s + p.qty, 0);
  //     return qty >= 3;
  //   },

  //   apply(ctx) {
  //     const sub = ctx.items
  //       .filter(p => this.targetIds.includes(p.id))
  //       .reduce((s, p) => s + p.price * p.qty, 0);
  //     return Math.round(sub * 0.05); // 95折 = 折抵 5%
  //   }
  // },

  /* =============================
     ✏️ 範例：天吹系列 任選 2 件 95 折（目前關閉）
  ============================= */
  // {
  //   id: "amabuki-2-95",
  //   type: "combo-ids",
  //   stackable: false,
  //   label: "天吹系列 任選 2 件 95 折",
  //   description: "指定天吹商品任選 2 件（含）以上，該商品小計享 95 折",
  //   targetIds: [5, 6, 7],   // ✏️ 填天吹的 id
  //   hint: { kind: "combo-ids", minQty: 2 },
  //   condition(ctx) {
  //     const qty = ctx.items.filter(p => this.targetIds.includes(p.id)).reduce((s,p)=>s+p.qty,0);
  //     return qty >= 2;
  //   },
  //   apply(ctx) {
  //     const sub = ctx.items.filter(p => this.targetIds.includes(p.id)).reduce((s,p)=>s+p.price*p.qty,0);
  //     return Math.round(sub * 0.05);
  //   }
  // },

  /* =============================
     ✏️ 範例：新戶首購折 NT$100（目前關閉）
  ============================= */
  // {
  //   id: "new-user-100",
  //   type: "new-user",
  //   stackable: true,
  //   label: "新戶首購折 NT$100",
  //   description: "首次下單直接折抵 NT$100",
  //   targetIds: [],   // 不限商品
  //   hint: { kind: "flag" },
  //   condition() { return !localStorage.getItem("hasOrdered"); },
  //   apply(ctx) { return 100; }
  // },

];