const events = [
    {
      id: 1,
      priority: 5, // ✅ 新增：1~5，越大越優先
      name: "萩之鶴 純米吟釀 萬聖貓",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒"   只能填這5種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine"] 只能填這4種其中一個
      imgs: ["/assets/images/products/xxxxxx.jpg",
        "/assets/images/products/yyyyyyy.jpg",
        "/assets/images/products/qqqqqqq.jpg",
      ], //圖片檔名

      price: 1500, //優惠價
      originPrice: 1800, //原價

      spec: "720ml", //容量 or 想要的敘述

      note: {
        oneLine: "果香柔和、酒體乾淨，平衡感極佳。", //酒款特色
      },

      info: {
        brand: "萩之鶴", //品牌
        origin: "日本・宮城縣", //產地
        rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
        yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
        variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
        polish: "48%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
        alcohol: "15%", //酒精濃度
        volume: "720ml" //容量
      },

      scale: {   //1-7分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 2, // 1=最辛 → 7=最甘
        sakeUmamiFruity: 5,  // 1=最米旨 → 7=最果香
      
        ftAcidSweet: null, // 1=最酸 → 7=最甜
        ftFreshRich: null,  // 1=最清爽 → 7=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 7=單寧強烈
        wineFreshFull: null  // 1=清爽 → 7=厚實
      },
      

      wineryId: "nanbu" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    }
]