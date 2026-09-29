export const COUPONS = [


  /* KPMG 企業合作碼（明碼另外保管，勿寫入本檔 — 本檔會完整送到瀏覽器）
     優惠＝指定酒款分級折扣（2026-09-29 起）：
       targetIds  → 9 折（rateTarget  0.10）
       defaultIds → 95 折（rateDefault 0.05）
       兩份清單以外的商品不打折；已取消「每滿 NT$1,500 折 NT$100」
     ⚠️ rateTarget 不可刪：apply() 會算 targetSub * rateTarget，
        缺值時 0 * undefined = NaN，整筆折扣會靜默失效
     未設 validFrom / validUntil → 長期有效，無需每年調整 */
  {
    hash: "0a2e759bdc1e0370d1d9a698c62a981b3a865cea4086a5370dd51bbdaef79d93",
    id: "coupon-kpmg",
    label: "KPMG 折扣碼（指定酒款 95 折／9 折）",
    stackable: false,

    targetIds:  [45, 52, 82, 83, 127],   // 9 折
    defaultIds: [                        // 95 折
      1, 2, 3, 4, 6, 8, 9, 11, 12, 16, 23, 25, 28, 30, 32, 33, 36, 37,
      39, 43, 48, 55, 56, 57, 61, 62, 64, 67, 71, 73, 74, 75, 76, 81,
      84, 91, 95, 97, 98, 99, 103, 118, 119, 120, 122, 123, 133
    ],

    rateDefault: 0.05,  // defaultIds 95折 → 折抵 5%
    rateTarget:  0.10   // targetIds  9折  → 折抵 10%
  },

  {
    hash: "4c6f94bedd00a508353551d6b05d42e7c9436eac1177c438d356528acc719ddc",
    id: "coupon-hbd",
    label: "HBD 生日折扣碼（全館95折)",
    stackable: false,
    targetIds: [5, 6, 7, 13, 14, 15, 19, 22, 35, 36, 45, 52, 64, 68, 71, 84, 85, 118, 119, 120, 121, 122, 123],

    validFrom:  "2026-07-15",  // 活動開始日（含當天）
    validUntil: "2026-08-07",  // 活動結束日（含當天）

    rateDefault: 0.05,  // 非指定商品 95折 → 折抵 5%
    rateTarget:  0.10   // 指定商品 9折 → 折抵 10%
  },

  /* GYRO 企業合作碼（明碼另外保管，勿寫入本檔 — 本檔會完整送到瀏覽器）
     優惠＝指定酒款分級折扣（2026-09-29 起），與 KPMG 相同：
       targetIds  → 9 折（rateTarget  0.10）
       defaultIds → 95 折（rateDefault 0.05）
       兩份清單以外的商品不打折；已取消「每滿 NT$1,500 折 NT$100」
     ⚠️ rateTarget 不可刪：apply() 會算 targetSub * rateTarget，
        缺值時 0 * undefined = NaN，整筆折扣會靜默失效
     未設 validFrom / validUntil → 長期有效，無需每年調整 */
  {
    hash: "2eb1b1fde34f252f326d78b8b03f8ef9c07fb4396171f2ac3277d7afb4a98edf",
    id: "coupon-gyro",
    label: "GYRO 折扣碼（指定酒款 95 折／9 折）",
    stackable: false,

    targetIds:  [45, 52, 82, 83, 127],   // 9 折
    defaultIds: [                        // 95 折
      1, 2, 3, 4, 6, 8, 9, 11, 12, 16, 23, 25, 28, 30, 32, 33, 36, 37,
      39, 43, 48, 55, 56, 57, 61, 62, 64, 67, 71, 73, 74, 75, 76, 81,
      84, 91, 95, 97, 98, 99, 103, 118, 119, 120, 122, 123, 133
    ],

    rateDefault: 0.05,  // defaultIds 95折 → 折抵 5%
    rateTarget:  0.10   // targetIds  9折  → 折抵 10%
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
