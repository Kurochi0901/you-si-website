/* ======================================================
   PROMOTIONS DATA（規則設定 + UI metadata）
====================================================== */

export const PROMOTIONS = [

  /* =============================
     數量優惠：2 件 9 折
  ============================= */
  {
    id: "qty-2-90",
    type: "quantity",
    stackable: false,

    label: "任選 2 件 9 折",
    description: "任選任意商品，滿 2 件享 9 折優惠",

    // 👉 UI / 導購提示用
    hint: {
      kind: "qty",
      minQty: 2
    },

    // 👉 計算邏輯
    condition(ctx) {
      return ctx.totalQty >= 2;
    },
    apply(total) {
      return Math.round(total * 0.9);
    }
  },

  /* =============================
     數量優惠：3 件 8 折
  ============================= */
  {
    id: "qty-3-80",
    type: "quantity",
    stackable: false,

    label: "任選 3 件 8 折",
    description: "任選任意商品，滿 3 件享 8 折優惠",

    hint: {
      kind: "qty",
      minQty: 3
    },

    condition(ctx) {
      return ctx.totalQty >= 3;
    },
    apply(total) {
      return Math.round(total * 0.8);
    }
  },

  /* =============================
     新戶優惠
  ============================= */
  // {
  //   id: "new-user-100",
  //   type: "new-user",
  //   stackable: true,

  //   label: "新戶折 NT$100",
  //   description: "首次下單可直接折抵 NT$100",

  //   // 👉 UI 用（不是門檻型，不需要 min）
  //   hint: {
  //     kind: "flag"
  //   },

  //   condition() {
  //     return !localStorage.getItem("hasOrdered");
  //   },
  //   apply(total) {
  //     return Math.max(0, total - 100);
  //   }
  // }

  /* =============================
     預留：分類 / 酒莊限制
  ============================= */
  /*
  {
    id: "sake-only",
    type: "category",
    stackable: true,

    label: "清酒 95 折",
    description: "僅限清酒分類商品",

    hint: {
      kind: "category",
      category: "sake"
    },

    condition(ctx) {
      return ctx.categories.has("sake");
    },
    apply(total) {
      return Math.round(total * 0.95);
    }
  }
  */
];
