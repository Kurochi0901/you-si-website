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
     梅侍系列 任選 3 件 95 折
     ✏️  要調整哪幾瓶參與，改 targetIds 即可
  ============================= */
  {
    id: "plumate-3-95",
    type: "combo-ids",
    stackable: false,

    label: "梅侍系列 任選 3 件 95 折",
    description: "指定梅侍商品任選 3 件（含）以上，該商品小計享 95 折",

    // ✏️ 在這裡填入要參與折扣的商品 id
    targetIds: [1, 2, 3, 4, 8, 9],

    // ✏️ 幾件以上觸發
    hint: {
      kind: "combo-ids",
      minQty: 3
    },

    condition(ctx) {
      const qty = ctx.items
        .filter(p => this.targetIds.includes(p.id))
        .reduce((s, p) => s + p.qty, 0);
      return qty >= 3;
    },

    apply(ctx) {
      const sub = ctx.items
        .filter(p => this.targetIds.includes(p.id))
        .reduce((s, p) => s + p.price * p.qty, 0);
      return Math.round(sub * 0.05); // 95折 = 折抵 5%
    }
  },

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