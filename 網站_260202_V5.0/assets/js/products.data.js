const products = [
  /* ================= 果實酒・茶酒 ================= */
  {
    id:1,
    priority: 1, // ✅ 新增：1~5，越大越優先
    name:"上等梅酒 知覽茶",
    category:"fruit-tea",
    type:"果實酒",
    spec:"ALC 10% / 日本本坊酒造",
    price:850,
    imgs:[
      "/assets/images/網站11去背.jpg",
      "/assets/images/LINE_ALBUM_果實酒茶酒_251205_8.jpg",
      "/assets/images/0626-2025.png"
    ],
    note:{
      oneLine:"茶香溫潤、梅酸柔和，是非常順口的日系梅酒。",
      goodFor:"喜歡茶系風味、想輕鬆喝一杯的人"
    }
  },
  {
    id:2,
    name:"梅侍 碧螺春綠茶梅酒",
    category:"fruit-tea",
    type:"果實酒",
    spec:"ALC 10% / 台灣梅侍",
    price:1000,
    imgs:[
      "/assets/images/LINE_ALBUM_果實酒茶酒_251205_10.jpg"
    ],
    note:{
      oneLine:"綠茶清香明顯，梅子甜酸平衡、口感清爽。",
      goodFor:"喜歡清香茶感、不想太甜的人"
    }
  },
  {
    id:3,
    name:"梅侍 東方美人茶梅酒",
    category:"fruit-tea",
    type:"烈酒",
    spec:"ALC 10% / 台灣梅侍",
    price:1100,
    imgs:[
      "/assets/images/product_03.svg"
    ],
    note:{
      oneLine:"熟果與蜜香型茶感，香氣層次較豐富。",
      goodFor:"喜歡茶香有深度、想慢慢喝的人"
    }
  },
  {
    id:4,
    priority: 5, // ✅ 新增：1~5，越大越優先
    name:"梅侍 凍頂烏龍茶梅酒",
    category:"fruit-tea",
    type:"果實酒",
    spec:"ALC 10% / 台灣梅侍",
    price:1100,
    imgs:[
      "/assets/images/LINE_ALBUM_果實酒茶酒_251205_11.jpg"
    ],
    note:{
      oneLine:"焙茶感明顯、梅酸柔和，尾韻乾淨。",
      goodFor:"喜歡烏龍茶焙香、不愛甜膩的人"
    }
  },
  {
    id:5,
    priority: 1, // ✅ 新增：1~5，越大越優先
    name:"天吹 抹茶梅酒",
    category:"tea",
    type:"茶酒",
    spec:"ALC 9% / 天吹酒造",
    price:950,
    imgs:[
      "/assets/images/product_05.svg"
    ],
    note:{
      oneLine:"抹茶苦韻與梅甜交織，層次鮮明。",
      goodFor:"喜歡抹茶風味、想找特色梅酒的人"
    }
  },
  {
    id:6,
    name:"天吹 伯爵紅茶梅酒",
    category:"tea",
    type:"茶酒",
    spec:"ALC 9% / 天吹酒造",
    price:950,
    imgs:[
      "/assets/images/product_06.svg"
    ],
    note:{
      oneLine:"紅茶香氣突出、甜度溫和，冰飲非常順口。",
      goodFor:"喜歡紅茶香、不想太甜的人"
    }
  },
  {
    id:7,
    name:"天吹 千年抹茶酒",
    category:"tea",
    type:"茶酒",
    spec:"ALC 6% / 天吹酒造",
    price:1200,
    imgs:[
      "/assets/images/product_07.svg"
    ],
    note:{
      oneLine:"抹茶風味純淨，酒感極輕、像甜點酒。",
      goodFor:"不常喝酒、喜歡甜點系酒款的人"
    }
  },
  {
    id:8,
    name:"八女綠茶梅酒",
    category:"tea",
    type:"茶酒",
    spec:"ALC 12% / 西吉田酒造",
    price:1300,
    imgs:[
      "/assets/images/product_08.svg"
    ],
    note:{
      oneLine:"八女茶清香明亮，酒體比一般梅酒更俐落。",
      goodFor:"喜歡茶香清爽、想搭餐的人"
    }
  },
  {
    id:9,
    name:"梅侍 紅玉紅茶梅酒",
    category:"tea",
    type:"茶酒",
    spec:"ALC 10% / 台灣梅侍",
    price:1000,
    imgs:[
      "/assets/images/LINE_ALBUM_果實酒茶酒_251205_9.jpg"
    ],
    note:{
      oneLine:"紅玉紅茶厚實香氣，梅酸圓潤。",
      goodFor:"喜歡台灣茶風味、想單喝的人"
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
    imgs:[
      "/assets/images/product_10.svg"
    ],
    note:{
      oneLine:"梅香濃厚、甜度明顯，口感飽滿。",
      goodFor:"喜歡甜口梅酒、濃郁風格的人"
    }
  },
  {
    id:11,
    name:"UMESKY 梅酒威士忌",
    category:"liqueur",
    type:"果實酒",
    spec:"ALC 24% / 若鶴酒造",
    price:1350,
    imgs:[
      "/assets/images/product_11.svg"
    ],
    note:{
      oneLine:"威士忌酒感明確，尾韻帶梅香。",
      goodFor:"威士忌愛好者、想嘗試梅酒變化的人"
    }
  },
  {
    id:12,
    name:"鉾杉 柚子酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 8% / 河武釀造",
    price:1100,
    imgs:[
      "/assets/images/product_12.svg"
    ],
    note:{
      oneLine:"柚子香氣清新、酸甜平衡。",
      goodFor:"喜歡柑橘清爽風味的人"
    }
  },
  {
    id:13,
    name:"上喜元 柚子酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 8% / 酒田酒造",
    price:990,
    imgs:[
      "/assets/images/LINE_ALBUM_果實酒茶酒_251205_5.jpg"
    ],
    note:{
      oneLine:"柚香奔放、口感活潑。",
      goodFor:"喜歡酸香果實酒的人"
    }
  },
  {
    id:14,
    name:"愛知國盛 水蜜桃酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 7% / 中埜酒造",
    price:850,
    imgs:[
      "/assets/images/product_14.svg"
    ],
    note:{
      oneLine:"水蜜桃香甜討喜，酒感輕盈。",
      goodFor:"不常喝酒、想輕鬆微醺的人"
    }
  },
  {
    id:15,
    name:"愛知國盛 水梨酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 7% / 中埜酒造",
    price:850,
    imgs:[
      "/assets/images/product_15.svg"
    ],
    note:{
      oneLine:"梨子清甜、口感非常清爽。",
      goodFor:"喜歡淡雅果香的人"
    }
  },
  {
    id:16,
    name:"愛知國盛 芒果酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 7% / 中埜酒造",
    price:850,
    imgs:[
      "/assets/images/product_16.svg"
    ],
    note:{
      oneLine:"芒果香氣明確、甜感活潑。",
      goodFor:"喜歡熱帶水果甜酒的人"
    }
  },
  {
    id:17,
    name:"愛知國盛 柑橘酒",
    category:"fruit",
    type:"果實酒",
    spec:"ALC 7% / 中埜酒造",
    price:850,
    imgs:[
      "/assets/images/product_17.svg"
    ],
    note:{
      oneLine:"柑橘酸甜平衡，適合冰飲。",
      goodFor:"喜歡清爽果實酒的人"
    }
  },

  /* ================= 清酒（含甜辛） ================= */
  {
    id: 19,
    priority: 1, // ✅ 新增：1~5，越大越優先
    name: "萩之鶴 純米吟釀 萬聖貓",
    type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒"
    category: "sake",
    imgs: ["/assets/images/xxxxxx.jpg",
      "/assets/images/yyyyyyy.jpg",
      "/assets/images/qqqqqqq.jpg",
    ], //圖片檔名

    price: 1500, //優惠價
    originPrice: 1800, //原價

    spec: "720ml", //容量 or 想要的敘述

    note: {
      oneLine: "果香柔和、酒體乾淨，平衡感極佳。果香柔和、酒體乾淨，平衡感極佳。果香柔和、酒體乾淨，平衡感極佳。果香柔和、酒體乾淨，平衡感極佳。果香柔和、酒體乾淨，平衡感極佳。", //酒款特色
    },

    //features: ["吟釀果香", "酒體乾淨", "平衡百搭"],

    info: {
      brand: "萩之鶴", //品牌
      origin: "日本・宮城縣", //產地
      rice: null, //原料米
      yeast: null, //酵母
      variety:null,//品種(葡萄)
      polish: '48%',//精米步合
      alcohol: "15%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {
      sakeDrySweet: 2, // 1=最辛 → 7=最甘
      sakeUmamiFruity: 5,  // 1=最米旨 → 7=最果香
    
      ftAcidSweet: null, // 1=最酸 → 7=最甜
      ftFreshRich: null,  // 1=最清爽 → 7=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 7=單寧強烈
      wineFreshFull: null  // 1=清爽 → 7=厚實
    },

    wineryId: "nanbu" //酒造名稱
  },
  {
    id:20,
    name:"元祖眼鏡 十周年",
    category:"sake",
    type:"清酒",
    spec:"ALC 15% / 國產米",
    price:1500,
    imgs:[
      "/assets/images/LINE_ALBUM_清酒_251205_2.jpg"
    ],
    sweetness:3,
    note:{
      oneLine:"口感圓潤、風味平衡，適合日常飲用。",
      goodFor:"想找百搭清酒的人"
    }
  },
  {
    id:21,
    name:"鳳凰美田 純米吟釀 冷卸",
    category:"sake",
    type:"清酒",
    spec:"精米 55% / ALC 16%",
    price:1890,
    imgs:[
      "/assets/images/product_21.svg"
    ],
    sweetness:2,
    note:{
      oneLine:"吟釀果香細緻，口感清爽俐落。",
      goodFor:"喜歡冷飲清酒的人"
    }
  },
  {
    id:22,
    priority: 5, // ✅ 新增：1~5，越大越優先
    name:"會津譽 純米大吟釀 極",
    category:"sake",
    type:"清酒",
    spec:"精米 50% / ALC 16%",
    price:1100,
    imgs:[
      "/assets/images/product_22.svg"
    ],
    sweetness:2,
    note:{
      oneLine:"香氣優雅、口感乾淨，是性價比很高的大吟釀。",
      goodFor:"想入門大吟釀的人"
    }
  },
  {
    id:23,
    name:"仁勇 鰻魚米酒",
    category:"sake",
    type:"清酒",
    spec:"精米 65% / ALC 15%",
    price:450,
    imgs:[
      "/assets/images/LINE_ALBUM_清酒_251205_4.jpg"
    ],
    sweetness:4,
    note:{
      oneLine:"米旨感明顯、口感偏甜，非常適合配餐。",
      goodFor:"喜歡甜口清酒、配重口味料理的人"
    }
  },
  {
    id:24,
    name:"谷川岳 純米大吟釀",
    category:"sake",
    type:"清酒",
    spec:"精米 50% / ALC 15%",
    price:1380,
    imgs:[
      "/assets/images/LINE_ALBUM_清酒_251205_3.jpg"
    ],
    sweetness:2,
    note:{
      oneLine:"風味細膩、酒體乾淨，屬於優雅型清酒。",
      goodFor:"喜歡細緻口感的人"
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
    imgs:[
      "/assets/images/product_25.svg"
    ],
    note:{
      oneLine:"白花與果香清新，酒體輕盈。",
      goodFor:"想找百搭白酒、配餐的人"
    }
  },
  {
    id:26,
    name:"Cab. Franc",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 14.5% / 保加利亞",
    price:1000,
    imgs:[
      "/assets/images/LINE_ALBUM_葡萄酒_251205_6.jpg"
    ],
    note:{
      oneLine:"黑莓與香料氣息，酒體扎實。",
      goodFor:"紅酒入門、喜歡果香酒體的人"
    }
  },
  {
    id:27,
    name:"R-Evolution ESPÍGOL",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 14% / 西班牙",
    price:1200,
    imgs:[
      "/assets/images/product_27.svg"
    ],
    note:{
      oneLine:"果香成熟、結構感明確。",
      goodFor:"想找個性派紅酒的人"
    }
  },
  {
    id:28,
    name:"Abadía de San Campio",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 12.5% / 西班牙",
    price:1000,
    imgs:[
      "/assets/images/LINE_ALBUM_葡萄酒_251205_7.jpg"
    ],
    note:{
      oneLine:"白花與柑橘香氣，酸度清新。",
      goodFor:"喜歡清爽白酒的人"
    }
  },
  {
    id:29,
    name:"Malvasia 微甜氣泡酒",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 6% / 義大利",
    price:790,
    imgs:[
      "/assets/images/product_29.svg"
    ],
    note:{
      oneLine:"氣泡細緻、微甜討喜。",
      goodFor:"聚會、送禮、酒精耐受低的人"
    }
  },
  {
    id:30,
    name:"Sensale BIO Grillo",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 12.5% / 義大利",
    price:750,
    imgs:[
      "/assets/images/product_30.svg"
    ],
    note:{
      oneLine:"柑橘與草本風味，口感清新。",
      goodFor:"日常配餐白酒"
    }
  },
  {
    id:31,
    name:"Finca Estarijo",
    category:"wine",
    type:"葡萄酒",
    spec:"ALC 14% / 西班牙",
    price:1200,
    imgs:[
      "/assets/images/LINE_ALBUM_葡萄酒_251205_3.jpg"
    ],
    note:{
      oneLine:"成熟果香、酒體厚實。",
      goodFor:"喜歡濃郁紅酒的人"
    }
  }
];
