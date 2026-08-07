export const COUPONS = [


  {
    hash: "0a2e759bdc1e0370d1d9a698c62a981b3a865cea4086a5370dd51bbdaef79d93",
    id: "coupon-kpmg",
    label: "KPMG 折扣碼（全站95折）",
    stackable: false,
    targetIds: [],

    rateDefault: 0.05,  // 非指定商品 95折 → 折抵 5%
    rateTarget:  0.10   // 指定商品 9折 → 折抵 10%
  },

  {
    hash: "4c6f94bedd00a508353551d6b05d42e7c9436eac1177c438d356528acc719ddc",
    id: "coupon-hbd",
    label: "HBD 生日折扣碼（全館95折)",
    stackable: false,
    targetIds: [5, 6, 7, 13, 14, 15, 19, 22, 35, 36, 45, 52, 64, 68, 70, 71, 84, 85, 116, 118, 119, 120, 121, 122, 123],

    validFrom:  "2026-07-15",  // 活動開始日（含當天）
    validUntil: "2026-08-07",  // 活動結束日（含當天）

    rateDefault: 0.05,  // 非指定商品 95折 → 折抵 5%
    rateTarget:  0.10   // 指定商品 9折 → 折抵 10%
  },

  {
    hash: "2eb1b1fde34f252f326d78b8b03f8ef9c07fb4396171f2ac3277d7afb4a98edf",
    id: "coupon-gyro",
    label: "GYRO 折扣碼（全站95折／指定商品9折）",
    stackable: false,
    targetIds: [],

    rateDefault: 0.05,  // 非指定商品 95折 → 折抵 5%
    rateTarget:  0.10   // 指定商品 9折 → 折抵 10%
  },

  /* 2026 秋季全站碼（明碼另外保管，勿寫入本檔 — 本檔會完整送到瀏覽器）
     全站一律 95 折 → targetIds 留空，rateTarget 也設 0.05，
     日後若真要加指定商品加碼，再把 rateTarget 調成 0.10 */
  {
    hash: "46c02a6298fbe89b1f7ad3ea8708e6cf0e2e342e22cd4b77ba90670daa097b0a",
    id: "coupon-autumn-95",
    label: "全站 95 折折扣碼（活動至 10/10）",
    stackable: false,
    targetIds: [],

    validFrom:  "2026-08-07",  // 活動開始日（含當天）
    validUntil: "2026-10-10",  // 活動結束日（含當天）

    rateDefault: 0.05,  // 全站 95折 → 折抵 5%
    rateTarget:  0.05   // 無指定商品，與 rateDefault 一致
  },

];
