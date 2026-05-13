export const COUPONS = [


  {
    hash: "0a2e759bdc1e0370d1d9a698c62a981b3a865cea4086a5370dd51bbdaef79d93",
    id: "coupon-kpmg",
    label: "KPMG 折扣碼（全站95折／指定商品9折）",
    stackable: false,
    targetIds: [],

    rateDefault: 0.05,  // 非指定商品 95折 → 折抵 5%
    rateTarget:  0.10   // 指定商品 9折 → 折抵 10%
  },

];
