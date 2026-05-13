/* ======================================================
   PROMOTIONS DATA（指定商品 ID 組合促銷版）

   新增促銷只需複製一個 block，修改：
   - id          → 唯一識別碼（自訂字串）
   - label       → 顯示在購物車的文字
   - description → 說明文字
   - targetIds   → 參與此促銷的商品 id 白名單（陣列）
   - minQty      → 白名單商品加總需達到幾件才觸發
   - discount    → 折扣率，例如 0.05 = 95折（折抵 5%）
   
   apply(ctx) 計算邏輯：
   只計算「在白名單內的商品」的小計，再乘以折扣率
   回傳「折抵金額」（正整數）
====================================================== */

export const PROMOTIONS = [

  /* =============================
     慶祝官網上架：滿 3 瓶全面 9 折
  ============================= */
  {
    id: "grand-opening-3-90",
    type: "quantity",
    stackable: false, // 與其他不可疊加優惠擇優

    label: "慶祝官網上架：滿 3 瓶全面 9 折",
    description: "全站商品任選 3 件（含）以上，總金額享 9 折優惠",

    hint: {
      kind: "quantity",
      minQty: 3
    },

    condition(ctx) {
      return ctx.totalQty >= 3;
    },

    apply(ctx) {
      // 全面 9 折 = 折抵 10%
      return Math.round(ctx.subtotal * 0.1);
    }
  },

  /* =============================
     滿 2800 送開運御守
  ============================= */
  {
    id: "lucky-charm-2800",
    type: "flag",
    stackable: true, // 可與其他優惠疊加（因為是送贈品）

    label: "滿 NT$2,800 送開運御守（數量有限，送完為止）",
    description: "下單滿 NT$2,800 即贈送「開運御守」乙個（數量有限，送完為止）",

    condition(ctx) {

      return ctx.subtotal >= 2800;
    },

    apply(ctx) {
      // 贈品不影響金額，回傳 0
      return 0;
    }
  },


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