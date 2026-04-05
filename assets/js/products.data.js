const CDN = "https://res.cloudinary.com/dcrn2oyxk/image/upload/f_auto,q_auto";

const products = [
  {
    id: 1,
    priority: 4, // ✅ 新增：1~5，越大越優先
    name: "梅侍純釀 紅玉紅茶梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個	
    imgs: [`${CDN}/1梅侍紅玉1.webp`,
      `${CDN}/1梅侍紅玉2.webp`,
    ], //圖片檔名

    price: 948, //優惠價
    originPrice: 1118, //原價

    spec: "紅玉茶香與梅韻圓潤酸甜", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2024年 IWSC國際烈酒競賽 銀獎
              🏆2024年 ISC國際烈酒競賽 銅牌
              
              全程不額外添加酒精，自然發酵將糖分轉化為酒精，風味純淨自然。

              開瓶即散發濃郁紅玉紅茶香，帶有如肉桂果茶般的溫潤辛香，
              隨後浮現清雅梅韻，香氣層次分明。
              入口圓潤滑順，酸甜柔和，茶韻與梅香交織，
              尾韻乾淨悠長，溫暖而耐人回味。

              原料：台灣產精選梅、紅玉紅茶、糖`, //酒款特色
    },

    info: {
      brand: "梅侍", //品牌
      origin: "台灣・南投縣青梅・南投縣紅玉紅茶", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "10%", //酒精濃度
      volume: "700ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "plumate" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 2,
    priority: 4, // ✅ 新增：1~5，越大越優先
    name: "梅侍純釀 碧螺春綠茶梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/2梅侍碧螺春1.webp`,
      `${CDN}/2梅侍碧螺春2.webp`,
    ], //圖片檔名

    price: 948, //優惠價
    originPrice: 1118, //原價

    spec: "碧螺春與梅韻交錯清爽甘甜", //容量 or 想要的敘述

    note: {
      oneLine: `全程不額外添加酒精，以自然發酵將糖分轉化為酒精，風味純淨自然。

碧螺春鮮雅茶香，交織清新的酸甜梅果氣息。
入口清爽滑順，綠茶的鮮活與梅酒的圓潤果韻相互襯托，
層次細緻展開，尾韻帶出柔和甘甜與淡雅茶香，清新而耐人回味。

原料：台灣產精選梅、碧螺春綠茶、糖`, //酒款特色
    },

    info: {
      brand: "梅侍", //品牌
      origin: "台灣・南投縣青梅・新北市碧螺春綠茶", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "10%", //酒精濃度
      volume: "700ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 2,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "plumate" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 3,
    priority: 4, // ✅ 新增：1~5，越大越優先
    name: "梅侍純釀 凍頂烏龍茶梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/3梅侍凍頂1.webp`,
      `${CDN}/3梅侍凍頂2.webp`,
    ], //圖片檔名

    price: 1018, //優惠價
    originPrice: 1198, //原價

    spec: "焙香烏龍尾韻醇厚", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2024年 ISC國際烈酒大賽 銀牌

全程不額外添加酒精，以自然發酵將糖分轉化為酒精，風味純淨自然。

嚴選凍頂烏龍入酒，焙火茶香沉穩迷人，揉合熟成梅果的圓潤酸甜。
入口厚實滑順，茶韻與梅韻層層交織，
尾韻帶微焙甘香，溫潤悠長、風味深邃耐飲。

原料：台灣產精選梅、凍頂烏龍茶、糖`, //酒款特色
    },

    info: {
      brand: "梅侍", //品牌
      origin: "台灣・南投縣青梅・南投縣凍頂烏龍茶", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "10%", //酒精濃度
      volume: "700ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 4,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "plumate" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 4,
    priority: 4, // ✅ 新增：1~5，越大越優先
    name: "梅侍純釀 東方美人茶梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/4梅侍東方1.webp`,
      `${CDN}/4梅侍東方2.webp`,
    ], //圖片檔名

    price: 1018, //優惠價
    originPrice: 1198, //原價

    spec: "蜜香美人茶韻遇上甘潤梅果", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2024年 ISC國際烈酒大賽 金牌
🏆選用世界19冠金牌製茶師 張家齊師傅 的茶葉

全程不額外添加酒精，以自然發酵將糖分轉化為酒精，風味純淨自然。

嚴選東方美人茶入釀，天然蜜香與熟成果韻交織，襯托清甜梅果酸香。
入口圓潤柔順，花果茶韻層層綻放，
尾韻甘潤悠長，展現優雅細緻的茶梅酒風味。

原料：台灣產精選梅、東方美人茶、糖`, //酒款特色
    },

    info: {
      brand: "梅侍", //品牌
      origin: "台灣・南投縣青梅・竹苗東方美人茶", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "10%", //酒精濃度
      volume: "700ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "plumate" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 5,
    priority: 4, // ✅ 新增：1~5，越大越優先
    name: "天吹 抹茶梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/5抹茶梅酒1.webp`,
      `${CDN}/5抹茶梅酒2.webp`,
    ], //圖片檔名

    price: 950, //優惠價 // 已完售
    originPrice: 1200, //原價

    spec: "京都抹茶濃醇梅果清甜 (已完售)", //容量 or 想要的敘述

    note: {
      oneLine: `採用京都抹茶入釀，茶香鮮明而細膩，與酸甜梅果完美融合。
入口柔順醇郁，抹茶的鮮韻與梅酒的果香交織，
尾韻甘甜悠長，風味層次豐富，帶來典雅茶道的飲酒體驗。

原料：京都抹茶、南高梅、糖`, //酒款特色
    },

    info: {
      brand: "天吹酒造", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "9%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 4,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "amabuki" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 6,
    priority: 4, // ✅ 新增：1~5，越大越優先
    name: "天吹 伯爵紅茶梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/6伯爵紅茶梅酒1.webp`,
      `${CDN}/6伯爵紅茶梅酒2.webp`,
    ], //圖片檔名

    price: 950, //優惠價
    originPrice: 1200, //原價

    spec: "柑橘紅茶香融合酸甜梅果", //容量 or 想要的敘述

    note: {
      oneLine: `柑橘香料調的伯爵茶香，入口初感紅茶溫潤，
隨即被梅果酸甜包裹，帶出柔和果香與淡雅香料尾韻。
整體層次明顯，口感既活潑又溫潤。

原料：格雷伯爵紅茶、南高梅、糖`, //酒款特色
    },

    info: {
      brand: "天吹酒造", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "9%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "amabuki" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 7,
    priority: 4, // ✅ 新增：1~5，越大越優先
    name: "天吹 京都千年抹茶酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/7千年抹茶酒1.webp`,
      `${CDN}/7千年抹茶酒2.webp`,
    ], //圖片檔名

    price: 1150, //優惠價 // 已完售
    originPrice: 1350, //原價

    spec: "世界首創 抹茶柚子清新微甜", //容量 or 想要的敘述

    note: {
      oneLine: `世界首創茶與柚子酒融合。
入口先是抹茶的細膩鮮韻，隨後柚子果香清新上揚，
酸甜平衡，尾韻帶微苦茶感與果香回甘。
層次分明，清爽雅致，是創新的飲酒體驗。

建議使用圓弧杯（高腳杯等）品飲，層次鮮明有趣。

原料：京都頂級抹茶、柚子汁`, //酒款特色
    },

    info: {
      brand: "天吹酒造", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "6.6%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "amabuki" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 8,
    priority: 3, // ✅ 新增：1~5，越大越優先
    name: "梅侍純釀 果泥梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/8梅侍果泥1.webp`,
      `${CDN}/8梅侍果泥2.webp`,
    ], //圖片檔名

    price: 868, //優惠價
    originPrice: 1018, //原價

    spec: "果泥濃郁，梅香層次豐富", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2025年 ISC國際烈酒競賽 金牌
🏆2024年 IWSC國際烈酒競賽 銀獎

全程不額外添加酒精，以自然發酵將糖分轉化為酒精，風味純淨自然。

在梅酒基底加入去核梅果泥，使梅香更鮮明且層次豐富。
入口果香酸甜交織，質地厚實微濁，梅子原始風味完整保留，
尾韻果香悠揚回甘，是一款富果感與風味深度的台灣純釀梅酒。

原料：台灣產精選梅、台灣梅果泥、砂糖`, //酒款特色
    },

    info: {
      brand: "梅侍", //品牌
      origin: "台灣・南投縣精選梅", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "10%", //酒精濃度
      volume: "700ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 4,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "plumate" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 9,
    priority: 3, // ✅ 新增：1~5，越大越優先
    name: "梅侍純釀 香米梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/9梅侍香米1.webp`,
      `${CDN}/9梅侍香米2.webp`,
    ], //圖片檔名

    price: 948, //優惠價
    originPrice: 1118, //原價

    spec: "台稉米香與梅果交融", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2025年 IWSC國際大賽 金牌
🏆2025年 SFWSC 舊金山烈酒大賽 銀牌
🏆2025年 ISC國際烈酒競賽 銅牌

全程不額外添加酒精，以自然發酵將糖分轉化為酒精，風味純淨自然。

以花蓮玉里台稉4號香米純釀，融合台灣梅果自然酸甜。
酒液清澈，米香清雅先引，隨即轉為明亮梅果風味，
清爽順口，尾韻帶出鮮米甜韻，層次細緻且宜人。

原料：香米、台灣產精選梅、糖`, //酒款特色
    },

    info: {
      brand: "梅侍", //品牌
      origin: "台灣・南投縣精選梅・花蓮梗米", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "10%", //酒精濃度
      volume: "700ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "plumate" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 10,
    priority: 3, // ✅ 新增：1~5，越大越優先
    name: "北海道十勝 白蘭地梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/10白蘭地梅酒1.webp`,
      `${CDN}/10白蘭地梅酒2.webp`,
    ], //圖片檔名

    price: 980, //優惠價
    originPrice: 1200, //原價

    spec: "白蘭地橡木桶熟成，梅香醇厚", //容量 or 想要的敘述

    note: {
      oneLine: `將北海道當季青梅與自家白蘭地原酒置於法國橡木桶熟成。
白蘭地的濃醇香氣與梅子的淡雅酸香交織，甜度較低但後味豐富溫潤，呈現深層果香與橡木成熟芬芳的成熟風味。

富有白蘭地的特性，可享受冰～熱飲，不同溫度下梅酒風味的變化`, //酒款特色
    },

    info: {
      brand: "池田葡萄酒研究所", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "12%", //酒精濃度
      volume: "500ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "tokachi" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
  {
    id: 11,
    priority: 3, // ✅ 新增：1~5，越大越優先
    name: "山形正宗 濃郁梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個	
    imgs: [`${CDN}/11濃郁梅酒1.webp`,
      `${CDN}/11濃郁梅酒2.webp`,
      `${CDN}/11濃郁梅酒3.webp`,
    ], //圖片檔名

    price: 1200, //優惠價
    originPrice: 1480, //原價

    spec: "吃得到果肉的梅酒！", //容量 or 想要的敘述

    note: {
      oneLine: `基底為山形正宗自家清酒。
嚴選完熟南高梅浸漬釀造，酒體濃稠飽滿，入口如梅果蜜露般綻放。
酸甜交疊中帶熟成果香與微微杏仁核韻，尾韻深長溫潤，展現山形正宗招牌的厚實層次感。

口感濃郁，推薦搭配楊桃汁、蘋果汁品飲；亦可搭配香草冰淇淋、優格。

原料：南高梅、糖、釀造酒精、清酒`, //酒款特色
    },

    info: {
      brand: "水戶部・山形正宗", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "10%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 5,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "mitobe" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 12,
    priority: 4, // ✅ 新增：1~5，越大越優先
    name: "若鶴 梅酒威士忌 UMESKY",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/12梅酒威士忌1.webp`,
      `${CDN}/12梅酒威士忌2.webp`,
      `${CDN}/12梅酒威士忌3.webp`,
    ], //圖片檔名

    price: 1350, //優惠價
    originPrice: 1650, //原價

    spec: "大人口味的梅酒！", //容量 or 想要的敘述

    note: {
      oneLine: `融合威士忌桶熟成底蘊與濃厚梅果香氣，熟梅蜜甜與酸韻交織。
入口圓潤飽滿，果香層層堆疊，隨後浮現淡雅木質與香草氣息，尾韻溫暖深長，展現梅酒與桶陳交融的成熟風味。

24％的大人口味！下班後的夜晚淋在冰球上來一杯，至高的享受。

原料：梅、糖、威士忌`, //酒款特色
    },

    info: {
      brand: "若鶴", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "24%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "wakatsuru" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 13,
    priority: 3, // ✅ 新增：1~5，越大越優先
    name: "本坊 上等梅酒 知覽茶",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/13知覽茶1.webp`,
      `${CDN}/13知覽茶2.webp`,
      `${CDN}/13知覽茶3.webp`,
    ], //圖片檔名

    price: 820, //優惠價
    originPrice: 1100, //原價

    spec: "清新一番茶清雅回甘", //容量 or 想要的敘述

    note: {
      oneLine: `嚴選鹿兒島知覽茶的一番茶 與熟成梅酒調和，茶湯般的清雅香氣緩緩展開。
入口先是柔順茶韻，隨後梅果酸甜浮現，交織出細緻層次，尾韻帶茶感回甘，清新而沉穩。

一番茶：每年第一批新葉，風味清雅細緻。

原料：梅、釀造酒精、糖類、茶葉、酸化防止劑(維生素C）`, //酒款特色
    },

    info: {
      brand: "本坊酒造", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "10%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 2,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "hombo" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 14,
    priority: 3, // ✅ 新增：1~5，越大越優先
    name: "西吉田 八女綠茶梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/14八女綠茶1.webp`,
      `${CDN}/14八女綠茶2.webp`,
    ], //圖片檔名

    price: 1250, //優惠價
    originPrice: 1600, //原價

    spec: "採用日本知名八女綠茶", //容量 or 想要的敘述

    note: {
      oneLine: `嚴選福岡八女綠茶入釀，茶香濃郁鮮明，如現沖綠茶般清苦回甘。
入口以厚實茶韻為主調，隨後梅果柔酸風味浮現，平衡茶感深度，尾韻悠長。

原料：梅、八女茶、本格燒酎、糖`, //酒款特色
    },

    info: {
      brand: "西吉田", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "12%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "nishiyoshida" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 15,
    priority: 2, // ✅ 新增：1~5，越大越優先
    name: "上喜元 柚子酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/15上喜元柚子1.webp`,
      `${CDN}/15上喜元柚子2.webp`,
    ], //圖片檔名

    price: 950, //優惠價
    originPrice: 1080, //原價

    spec: "高知柚子清香，酸甜果味輕盈", //容量 or 想要的敘述

    note: {
      oneLine: `上喜元柚子酒以高知縣新鮮柚子果汁融合本釀造原酒，開瓶即溢出清新爽亮的柚香。
入口果酸與柔和甜味交織，低酒精設計使口感輕盈易飲，適合冷藏直飲或加冰塊、氣泡水品味清爽層次。

原料：柚子汁、清酒、糖`, //酒款特色
    },

    info: {
      brand: "酒田・上喜元", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "8%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 2, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kawabu" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 16,
    priority: 2, // ✅ 新增：1~5，越大越優先
    name: "河武釀造 鉾杉柚子酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/16鉾杉柚子1.webp`,
      `${CDN}/16鉾杉柚子2.webp`,
      `${CDN}/16鉾杉柚子3.webp`,
      `${CDN}/16鉾杉柚子4.webp`,
    ], //圖片檔名

    price: 990, //優惠價
    originPrice: 1100, //原價

    spec: "柚香清爽甘甜 酸爽平衡", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2020年 法國世界女性酒評競賽 金賞

河武釀造以經典清酒為基底，融合日本產柚子原汁，開瓶即釋放明亮柚香。
入口酸甜交錯，柚子清爽果味充盈味蕾，中段保留微苦與米香平衡甜度，尾韻清新回甘，是清爽易飲的果實酒代表。

原料：柚子汁、清酒、糖`, //酒款特色
    },

    info: {
      brand: "河武釀造", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "8%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kawabu" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 17,
    priority: 2, // ✅ 新增：1~5，越大越優先
    name: "堤酒造 晚白柚酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/17晚白柚1.webp`,
      `${CDN}/17晚白柚2.webp`,
      `${CDN}/17晚白柚3.webp`,
      `${CDN}/17晚白柚4.webp`,
    ], //圖片檔名

    price: 990, //優惠價
    originPrice: 1150, //原價

    spec: "熊本晚白柚 層次豐富不膩口", //容量 or 想要的敘述

    note: {
      oneLine: `全世界最大的柑橘果實！
嚴選熊本縣八代地區晚白柚原汁與堤酒造本格燒酎調和，保留柚子自然酸甜與淡雅苦韻。
入口如咬果肉般清新，香氣在口中層層綻放，尾韻微苦而回甘，是清爽爽口且層次分明的柚子風味佳釀。

層次豐富，適合佳節搭配油膩食物（烤肉、粽子等）。其豐富風韻能將食物油脂包覆，清爽不膩口。

原料：本格燒酎・晚白柚果汁・香料`, //酒款特色
    },

    info: {
      brand: "堤酒造", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "8%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 2,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "tsutsumi" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 18,
    priority: 2, // ✅ 新增：1~5，越大越優先
    name: "愛知國盛 水蜜桃風味酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/18蜜桃風味1.webp`,
      `${CDN}/18蜜桃風味2.webp`,
      `${CDN}/18蜜桃風味3.webp`,
    ], //圖片檔名

    price: 800, //優惠價
    originPrice: 1080, //原價

    spec: "水蜜桃原汁濃醇甜美", //容量 or 想要的敘述

    note: {
      oneLine: `愛知國盛水蜜桃風味酒以高達 50% 日本國產水蜜桃果汁與果泥釀造，開瓶即散發濃郁蜜桃香氣。
入口果甜多汁，質地飽滿豐厚，果肉沉澱增添口感層次，清爽甜美且令人一試難忘。

推薦亦可搭配柳橙汁或蔓越莓汁一同品飲，在家調出蜜桃水果酒！

原料：日本水蜜桃、檸檬汁、釀造酒精、糖、酸味料、酸化防止劑(維生素C）`, //酒款特色
    },

    info: {
      brand: "中埜・愛知國盛", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "7%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "nakano" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 19,
    priority: 2, // ✅ 新增：1~5，越大越優先
    name: "愛知國盛 水梨風味酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/19水梨風味1.webp`,
      `${CDN}/19水梨風味2.webp`,
    ], //圖片檔名

    price: 800, //優惠價
    originPrice: 1080, //原價

    spec: "難得一見的水梨果酒", //容量 or 想要的敘述

    note: {
      oneLine: `採用100%日本國產水梨與高達 50% 果汁濃度，開瓶散發清新優雅水梨香氣。
清爽多汁，酸甜交錯並略帶柑檸酸度平衡甜味，尾韻清新而不膩，夏日冰鎮或加入氣泡水更添清爽層次。

推薦亦可搭配紅茶品飲。

原料：日本水梨、檸檬汁、釀造酒精、糖、酸化防止劑(維生素C）`, //酒款特色
    },

    info: {
      brand: "中埜・愛知國盛", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "7%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "nakano" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 20,
    priority: 2, // ✅ 新增：1~5，越大越優先
    name: "愛知國盛 蜜柑風味酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/20蜜柑風味1.webp`,
      `${CDN}/20蜜柑風味2.webp`,
    ], //圖片檔名

    price: 800, //優惠價
    originPrice: 1080, //原價

    spec: "80%蜜柑原汁 濃厚柑橘風味", //容量 or 想要的敘述

    note: {
      oneLine: `採用80%日本蜜柑原汁，鮮豔的色彩無添加任何著色劑、調味劑及防腐劑。
入口即刻感受到蜜柑的清甜多汁，果香濃郁清新，冰飲或加氣泡水都爽口宜人。

調酒小撇步：可與蜜桃風味酒、氣泡水 搭配製成「蜜桃蜜柑調酒」

原料：日本蜜柑、百香果、釀造酒精、糖`, //酒款特色
    },

    info: {
      brand: "中埜・愛知國盛", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "7%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "nakano" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
  {
    id: 21,
    priority: 2, // ✅ 新增：1~5，越大越優先
    name: "愛知國盛 芒果風味酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個	
    imgs: [`${CDN}/21芒果風味酒1.webp`,
      `${CDN}/21芒果風味酒2.webp`,
      `${CDN}/21芒果風味酒3.webp`,
      `${CDN}/21芒果風味酒4.webp`,
    ], //圖片檔名

    price: 800, //優惠價
    originPrice: 1080, //原價

    spec: "芒果濃熟果香甜潤", //容量 or 想要的敘述

    note: {
      oneLine: `採用新鮮芒果果汁釀製，不添加防腐劑。
濃熟芒果香氣飽滿奔放，入口柔滑多汁，酸甜平衡，帶出熱帶果實的馥郁層次，尾韻綿長誘人。

除了氣泡水，建議也可搭配紅茶一同品飲。

原料：芒果汁、百香果汁、醸造酒精、糖、酸味料`, //酒款特色
    },

    info: {
      brand: "中埜・愛知國盛", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "7%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 4,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "nakano" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 22,
    priority: 2, // ✅ 新增：1~5，越大越優先
    name: "愛知國盛 白葡萄風味酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/22白葡萄風味酒1.webp`,
      `${CDN}/22白葡萄風味酒2.webp`,
      `${CDN}/22白葡萄風味酒3.webp`,
    ], //圖片檔名

    price: 800, //優惠價
    originPrice: 1080, //原價

    spec: "清甜白葡萄果香細緻", //容量 or 想要的敘述

    note: {
      oneLine: `🏆日本酒類評鑑會 風味酒部門 金賞
🎁2023 G7廣島高峰會指定用酒
富含50%白葡萄原汁，彷彿新鮮果實般垂涎欲滴，水潤多汁的甘甜滋味與酸度表現相當契合，清爽香甜的風味即使直接飲用也不易覺得負擔。

原料：葡萄汁、檸檬汁、醸造酒精、糖、香料`, //酒款特色
    },

    info: {
      brand: "中埜・愛知國盛", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "7%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "nakano" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 23,
    priority: 5, // ✅ 新增：1~5，越大越優先
    name: "北川本家 八橋肉桂梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/23八橋肉桂梅酒1.webp`,
      `${CDN}/23八橋肉桂梅酒2.webp`,
    ], //圖片檔名

    price: 1250, //優惠價
    originPrice: 1500, //原價

    spec: "京都特產！肉桂口味梅酒！", //容量 or 想要的敘述

    note: {
      oneLine: `以京都傳統八橋肉桂風味為靈感，融合酸甜梅酒基底，辛香溫潤、尾韻帶甜。
香氣層次豐富，冷飲清爽、熱飲更顯暖心，是風味系梅酒代表作。

推薦搭配「金ケ崎 蘋果餐前酒」，在家自製「蘋果肉桂調酒」！

原料：米燒酎、梅、糖、日本酒、肉桂`, //酒款特色
    },

    info: {
      brand: "北川本家", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "12%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 4,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kitagawa" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 24,
    priority: 1, // ✅ 新增：1~5，越大越優先
    name: "精釀菊花袖珍奇異果酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/24菊花奇異果酒1.webp`,
      `${CDN}/24菊花奇異果酒2.webp`,
      `${CDN}/24菊花奇異果酒3.webp`,
    ], //圖片檔名

    price: 930, //優惠價
    originPrice: 1180, //原價

    spec: "菊香清雅奇異果酸甜", //容量 or 想要的敘述

    note: {
      oneLine: `菊花淡雅花香揉合袖珍奇異果清新酸甜，入口柔順細緻、果香明亮。
尾韻帶微酸與花韻層次，不添加調味劑、防腐劑，採用新鮮果汁釀製。

原料：釀造酒精、岩手產袖珍奇異果及果汁、岩手產食用菊花、甜菜糖`, //酒款特色
    },

    info: {
      brand: "金ケ崎薬草", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "8%", //酒精濃度
      volume: "500ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 2,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kanegasaki" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 25,
    priority: 1, // ✅ 新增：1~5，越大越優先
    name: "精釀生薑青紫蘇酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/25生薑青紫蘇酒1.webp`,
      `${CDN}/25生薑青紫蘇酒2.webp`,
      `${CDN}/25生薑青紫蘇酒3.webp`,
    ], //圖片檔名

    price: 930, //優惠價
    originPrice: 1180, //原價

    spec: "寒冬中辛薑暖香 紫蘇清冽", //容量 or 想要的敘述

    note: {
      oneLine: `生薑辛香溫潤奔放，揉合青紫蘇草本清冽氣息，入口微辣帶甘、層次鮮明。
尾韻暖感悠長，不添加調味劑、防腐劑，採用天然素材釀製。

原料：釀造酒精、岩手產生姜、岩手產大葉(青紫蘇)、甜菜糖`, //酒款特色
    },

    info: {
      brand: "金ケ崎薬草", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "8%", //酒精濃度
      volume: "500ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kanegasaki" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 26,
    priority: 1, // ✅ 新增：1~5，越大越優先
    name: "金ケ崎 鳥海梅花酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/26鳥海梅花酒1.webp`,
      `${CDN}/26鳥海梅花酒2.webp`,
      `${CDN}/26鳥海梅花酒3.webp`,
    ], //圖片檔名

    price: 990, //優惠價
    originPrice: 1250, //原價

    spec: "梅花雅馥清甜細緻", //容量 or 想要的敘述

    note: {
      oneLine: `嚴選青梅釀製，浸漬梅花花瓣增添雅緻花香。入口清甜柔和，花韻與梅酸交織，香氣細膩悠長。
不添加調味劑、防腐劑，以純粹萃釀工法呈現素材真實風味層次。

原料：釀造酒精、桃果汁、梅、藍莓、香草、甜菜糖`, //酒款特色
    },

    info: {
      brand: "金ケ崎薬草", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "8%", //酒精濃度
      volume: "500ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kanegasaki" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 27,
    priority: 1, // ✅ 新增：1~5，越大越優先
    name: "池亀 浮露鳳梨果實酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/27浮露鳳梨果實酒1.webp`,
      `${CDN}/27浮露鳳梨果實酒2.webp`,
    ], //圖片檔名

    price: 930, //優惠價
    originPrice: 1180, //原價

    spec: "熟成鳳梨蜜香濃郁 層次奔放", //容量 or 想要的敘述

    note: {
      oneLine: `嚴選熟成鳳梨釀製，開瓶即湧現濃郁熱帶果香。
入口酸甜鮮明，帶鳳梨纖維感與果汁濃度，尾韻微酵母氣息收束，層次立體且多汁飽滿。

喜愛鳳梨的您絕對不能錯過的，一款宛如新鮮鳳梨汁的水果酒！

原料：鳳梨果汁、糖類、釀造酒精(甲式燒酎)、酸味料`, //酒款特色
    },

    info: {
      brand: "池龜酒造", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "7%", //酒精濃度
      volume: "500ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "ikekame" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 28,
    priority: 1, // ✅ 新增：1~5，越大越優先
    name: "金ケ崎 蘋果餐前酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/28蘋果餐前酒1.webp`,
      `${CDN}/28蘋果餐前酒2.webp`,
    ], //圖片檔名

    price: 990, //優惠價
    originPrice: 1250, //原價

    spec: "清新蘋果 開胃爽口", //容量 or 想要的敘述

    note: {
      oneLine: `採用新鮮蘋果果汁釀製，不添加調味劑與防腐劑。
入口清新酸甜、果香明亮，口感輕盈，尾韻柔和清爽，是餐前開胃或搭配輕食的理想果酒。

推薦搭配「北川本家 八橋肉桂梅酒」，在家自製「蘋果肉桂調酒」！
亦或是搭配「山形正宗 濃郁梅酒」，自製「蘋果梅酒」❤️

原料：釀造酒精、岩手產蘋果及其果汁、甜菜糖`, //酒款特色
    },

    info: {
      brand: "金ケ崎薬草", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "8%", //酒精濃度
      volume: "500ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 2,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kanegasaki" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 29,
    priority: 5, // ✅ 新增：1~5，越大越優先
    name: "池亀 果凍梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "fruit-tea", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/29果凍梅酒1.webp`,
      `${CDN}/29果凍梅酒2.webp`,
      `${CDN}/29果凍梅酒3.webp`,
      `${CDN}/29果凍梅酒4.webp`,
    ], //圖片檔名

    price: 1080, //優惠價
    originPrice: 1400, //原價

    spec: "Q彈果凍濃梅酸甜", //容量 or 想要的敘述

    note: {
      oneLine: `日本第一支果凍狀梅酒，果凍原料為天然成分，富含食物纖維。

以濃郁梅酒為基底製成Q彈果凍質地，輕搖瓶身之後即可享用，入口滑順中帶彈性口感。
梅香飽滿、酸甜鮮明，彷彿帶有桃子般的香氣，尾韻清爽不膩。趣味與風味兼具，是一款討喜的送禮佳選。

原料：本格米燒酎、完熟梅果實、砂糖、增粘多糖類、酸味料`, //酒款特色
    },

    info: {
      brand: "池龜酒造", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "8%", //酒精濃度
      volume: "500ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: null, // 1=最辛 → 5=最甘
      sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: 3, // 1=最酸 → 5=最甜
      ftFreshRich: 3,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "ikekame" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
{
    id: 30,
    priority: 4, // ✅ 新增：1~5，越大越優先
    name: "萩之鶴 純米吟釀 辛口",
    type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: ["https://res.cloudinary.com/dcrn2oyxk/image/upload/v1773388720/30%E8%90%A9%E4%B9%8B%E9%B6%B4_%E7%B4%94%E7%B1%B3%E5%90%9F%E9%87%80_%E8%BE%9B%E5%8F%A31.webp",
      "https://res.cloudinary.com/dcrn2oyxk/image/upload/v1773388720/30%E8%90%A9%E4%B9%8B%E9%B6%B4_%E7%B4%94%E7%B1%B3%E5%90%9F%E9%87%80_%E8%BE%9B%E5%8F%A32.webp",
    ], //圖片檔名

    price: 1350, //優惠價
    originPrice: 1500, //原價

    spec: "酒度+10，俐落辛口旨味清透", //容量 or 想要的敘述

    note: {
      oneLine: `這款銘柄是萩之鶴少見以「辛口」為主題的作品。
刻意降低甜度，入口銳利、緊實的酸度與鮮明的旨味，展現前所未見、明快的辛口風格。整體風味乾淨俐落，又不失萩之鶴特有的細膩平衡感，是追求清冽感與爽快餘韻者不可錯過的一款辛口酒。

適合搭配刺身或鹽烤料理。

日本酒度：+10 / 酸度：1.4`, //酒款特色
    },

    info: {
      brand: "萩野・萩之鶴", //品牌
      origin: "日本", //產地
      rice: "未公開", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: "55%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "15%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
      sakeDrySweet: 1, // 1=最辛 → 5=最甘
      sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
    
      ftAcidSweet: null, // 1=最酸 → 5=最甜
      ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
    
      wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
      wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "hagino" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
  },
  {
    id: 31,
    priority: 5, // ✅ 新增：1~5，越大越優先
    name: "萩之鶴 貓咪組合 純米吟釀 生原酒",
    type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個 
    imgs: [`${CDN}/31萩之鶴_純米吟釀_貓咪組合1.webp`,
      `${CDN}/31萩之鶴_純米吟釀_貓咪組合2.webp`,
      `${CDN}/31萩之鶴_純米吟釀_貓咪組合3.webp`,
    ], //圖片檔名

    price: 2600, //優惠價
    originPrice: 3000, //原價

    spec: "萩之鶴「暖桌貓×櫻花貓」組合限定登場", //容量 or 想要的敘述

    note: {
      oneLine: `不必出國，也能同步感受日本酒造的季節更迭。這對超人氣貓咪組合是生原酒愛好者的首選：
	
	暖桌貓｜帶有蘋果與哈密瓜香氣，旨味圓潤微甜，如躲在暖桌般療癒。推薦從冰飲至常溫，感受多層次風味變化。
	櫻花貓（預計4月中下旬抵台）｜採用大吟釀等級宮城酵母，在嚴格溫控下釀造，酒質輕盈甘甜。
	此組合在萩之鶴特有的宜人酸度調和下，展現極佳的易飲性，是任何人都能輕鬆享受的生原酒酒款。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "萩野・萩之鶴", //品牌
      origin: "日本", //產地
      rice: "美山錦", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"48%、55%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "15%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "hagino" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
    id: 32,
    priority: 5, // ✅ 新增：1~5，越大越優先
    name: "萩之鶴 純米吟釀 生原酒 櫻花貓",
    type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個 
    imgs: [`${CDN}/32萩之鶴_純米吟釀_櫻花貓1.webp`,
      `${CDN}/32萩之鶴_純米吟釀_櫻花貓2.webp`,
      `${CDN}/32萩之鶴_純米吟釀_櫻花貓3.webp`,
    ], //圖片檔名

    price: 1350, //優惠價
    originPrice: 1500, //原價

    spec: "春季限定，大吟釀等級的輕盈甘甜", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2013 日本酒競賽 大吟釀部門 榮獲最高金賞

	春季限定品。
	特別採用大吟釀等級常用的宮城酵母釀造。
	在酒造嚴格的低溫控管下，呈現出如春風般輕盈且優雅的甘甜感。開瓶後散發細緻香氣，搭配萩之鶴標誌性的清爽酸度，口感俐落不甜膩，是一款能讓人輕鬆享受春日氛圍的絕佳生原酒。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "萩野・萩之鶴", //品牌
      origin: "日本", //產地
      rice: "美山錦", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "宮城酵母", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"55%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "15%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "hagino" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 33,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "萩之鶴 純米吟釀 生原酒 暖桌貓",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/33萩之鶴_純米吟釀_暖桌貓1.webp`,
      `${CDN}/33萩之鶴_純米吟釀_暖桌貓2.webp`,
      `${CDN}/33萩之鶴_純米吟釀_暖桌貓3.webp`,
    ], //圖片檔名

    price: 1350, //優惠價
    originPrice: 1500, //原價

    spec: "窩進暖桌般的療癒感，圓潤果香生原酒", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2013 日本酒競賽 大吟釀部門 榮獲最高金賞
	
	萩之鶴暖桌貓純米吟釀生原酒，是專為冬季設計的療癒之作。
	酒體帶有蘋果與哈密瓜的飽滿香氣，口感圓潤且伴隨著恰到好處的微甜旨味，彷彿冬日裡躲進暖桌般的舒適與放鬆。

	這款生原酒特別推薦從冰飲開始，隨著室溫緩慢回溫至常溫飲用。在溫度升高的過程中，暖桌貓會展現出不同的層次與風味變化。搭配萩之鶴標誌性的宜人酸度調和，整體口感輕盈不膩口，是款不論單飲或佐餐都能輕鬆享受的季節限定佳釀。

	日本酒度：-5（甘口類型）

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "萩野・萩之鶴", //品牌
      origin: "日本", //產地
      rice: "美山錦", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"48%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "15%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "hagino" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 34,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "萩之鶴 貴釀酒 Gradation Aged 1year",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/34萩之鶴_貴釀酒_GA1.webp`,
      `${CDN}/34萩之鶴_貴釀酒_GA2.webp`,
    ], //圖片檔名

    price: 1350, //優惠價
    originPrice: 1500, //原價

    spec: "一年熟成貴釀酒，層疊醇厚甘甜餘韻", //容量 or 想要的敘述

    note: {
      oneLine: `🌟酒造限量釋出 全球僅300瓶，超級限量
	🏆2013 日本酒競賽 大吟釀部門 榮獲最高金賞
	
	萩之鶴貴釀酒 Gradation 採用奢華的貴釀造工藝，在發酵過程中使用清酒代替部分釀造水，並經過一年的低溫低氧熟成。這段緩慢的時間賦予了酒液深邃的層次與如同蜂蜜般的濃郁甘甜感。

	這款酒展現出 Gradation 系列特有的風味漸層，酒體醇厚卻在末端帶有優雅的平衡感。一年間的熟成讓原本飽滿的甜度變得更加圓潤且具有厚度，香氣表現出乾果與焦糖般的溫暖氣息。不論是作為餐後甜點酒，或是搭配濃郁風味料理與起司，都能感受到這款熟成貴釀酒極具深度的魅力。

	日本酒度：-32（極甘口類型）`, //酒款特色
    },

    info: {
      brand: "萩野・萩之鶴", //品牌
      origin: "日本", //產地
      rice: "宮城縣產吟のいろは（吟之五郎八）", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"未公開",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "16%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 5, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "hagino" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 35,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "谷川岳 純米大吟釀",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/35谷川岳_純米大吟釀1.webp`,
      `${CDN}/35谷川岳_純米大吟釀2.webp`,
    ], //圖片檔名

    price: 1320, //優惠價
    originPrice: 1400, //原價

    spec: "如山嵐清冽，俐落甘口純米大吟釀", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2022 Kura Master 純米大吟釀部門 金賞
	🏆2023 Kura Master 純米大吟釀部門 金賞
	
	谷川岳純米大吟釀以如同山間清泉般的純淨感著稱。
	
	似白桃純淨香氣，入口滑順，酒體飽滿，口感微辛口且帶有膨脹感的旨味，尾韻毫不拖泥帶水，清澈酒質宛若谷川岳般山清水秀。不論冷飲或微放常溫，都能品味到來自雪國釀造的清徹質感，是餐桌上最優雅的良伴。

	日本酒度：+3（辛口類型）`, //酒款特色
    },

    info: {
      brand: "永井・谷川岳", //品牌
      origin: "日本", //產地
      rice: "美山錦", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"50%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "15%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 2, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "nagai" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 36,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "鳳凰美田 Assemblage-White & Bronze",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/36鳳凰美田1.webp`,
      `${CDN}/36鳳凰美田2.webp`,
      `${CDN}/36鳳凰美田3.webp`,
    ], //圖片檔名

    price: 1620, //優惠價
    originPrice: 1800, //原價

    spec: "果香與旨味交疊，絕美調配層次感", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2013 日本酒競賽 大吟釀部門 榮獲最高金賞
	
	「Assemblage(調配)」原為葡萄酒術語，意指以調和技法創造新的味覺層次。不同於以往僅追求山田錦或愛山等單一酒米極致表現的作法，本隻酒結合了不同酒米的優點。

	這款酒不僅保有酒造引以為傲的高雅哈密瓜香氣，更透過調配工藝展現出扎實的旨味與優雅吟釀香氣完美調和。口感層次分明，酸度優雅，入喉後回甘悠長且不膩，是款追求極致風味和諧的當代佳作。


	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "小林・鳳凰美田", //品牌
      origin: "日本", //產地
      rice: "未公開", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"未公開",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "16%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 5,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kobayashi" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 37,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "鳳凰美田 藍鳳凰 純米大吟釀 Sparkling",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/37鳳凰美田_藍鳳凰1.webp`,
      `${CDN}/37鳳凰美田_藍鳳凰2.webp`,
    ], //圖片檔名

    price: 4050, //優惠價
    originPrice: 4500, //原價

    spec: "如香檳般細緻，華麗果香氣泡酒", //容量 or 想要的敘述

    note: {
      oneLine: `藍鳳凰 純米大吟釀 氣泡酒 是鳳凰美田的頂級之作。
	採用瓶內二次發酵技術，創造出如香檳般綿密持久的氣泡。

	開瓶即散發成熟果實般的芳醇香氣，口感清新且帶有優雅的甜味，尾韻收斂俐落，帶有一絲堅果氣息。在氣泡的引導下顯得更加輕盈活潑。無論作為慶祝場合的開場，或是搭配精緻料理，都能展現出非凡的奢華質感。

	原料：米、米麴（嚴選兵庫縣產特A愛山精心釀造）`, //酒款特色
    },

    info: {
      brand: "小林・鳳凰美田", //品牌
      origin: "日本", //產地
      rice: "愛山", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"45%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "17%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 4,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kobayashi" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 38,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "鳳凰美田 黑判 純米大吟釀原酒 復刻版",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/38鳳凰美田_黑判1.webp`,
      `${CDN}/38鳳凰美田_黑判2.webp`,
    ], //圖片檔名

    price: 1980, //優惠價
    originPrice: 2150, //原價

    spec: "經典復刻，濃郁果香與厚實原酒感", //容量 or 想要的敘述

    note: {
      oneLine: `首次推出是在2011年，彼時日本仍籠罩在東日本大震災的陰影之中；第二次是在2019年，疫情讓人連出門都變成奢侈。如今，第三次的2025年在日本全國稻米騷動、原料高漲的壓力下登場。即便如此，藏人們依然抱著「日本酒絕不止於此」「讓更多人享受日本酒吧！」的信念，決心再度復刻這款特別的作品。

	以秋田流生酛技法、精米45%的山田錦釀製，原酒一滴一滴細心壓榨，再以瓶燗火入封存風味。入口是舒適的吟釀香氣與柔滑質地，最後以溫柔而綿長的餘韻收尾。這款限定復刻的銘柄，像是在辛苦的日常裡遞上一口溫暖，為您的生活悄悄加點力量。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "小林・鳳凰美田", //品牌
      origin: "日本", //產地
      rice: "山田錦", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"45%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "17%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 2,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kobayashi" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 39,
      priority: 5, // ✅ 新增：1~5，越大越優先
      name: "鳳凰美田 純米吟釀 冷卸 山田錦",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/39鳳凰美田_純米吟釀冷卸1.webp`,
      `${CDN}/39鳳凰美田_純米吟釀冷卸2.webp`,
    ], //圖片檔名

    price: 1750, //優惠價
    originPrice: 1850, //原價

    spec: "秋季限定熟成，山田錦圓潤旨味", //容量 or 想要的敘述

    note: {
      oneLine: `鳳凰美田冷卸酒 採用酒米之王山田錦釀造，經過一個夏季的低溫熟成，褪去了新酒的輕狂，轉而化為內斂且溫潤的口感。
	保有酒造標誌性的花果香氣，但在熟成洗禮下，山田錦的旨味更加凝聚且滑順。口感如秋風般優雅，適度的酸度平衡了酒體的厚實感，是品味季節轉換的最佳選擇。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "小林・鳳凰美田", //品牌
      origin: "日本", //產地
      rice: "山田錦", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"55%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "16%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 4,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kobayashi" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 40,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "鳳凰美田 黑鳳凰 純米吟釀",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/40鳳凰美田_黑鳳凰1.webp`,
      `${CDN}/40鳳凰美田_黑鳳凰2.webp`,
    ], //圖片檔名

    price: 1750, //優惠價
    originPrice: 2150, //原價

    spec: "華麗麝香葡萄氣息，濃郁果香代名詞", //容量 or 想要的敘述

    note: {
      oneLine: `鳳凰美田 黑鳳凰，以壓倒性的華麗香氣聞名。

	選用高品質山田錦酒米，開瓶後如同成熟鳳梨與柑橘的多汁芳香撲鼻而來。酒體飽滿且富有濃郁的果實感，入口後呈現細緻的層次與圓潤甜美，餘韻悠長且純淨，是酒造展現高雅芳香風格的經典代表作。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "小林・鳳凰美田", //品牌
      origin: "日本", //產地
      rice: "愛山", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"55%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "16%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 4, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 5,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kobayashi" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
    {
      id: 41,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "鳳凰美田 初榨 純米吟釀 無濾過生酒",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/41鳳凰美田_初榨純米吟釀1.webp`,
      `${CDN}/41鳳凰美田_初榨純米吟釀2.webp`,
    ], //圖片檔名

    price: 1750, //優惠價
    originPrice: 2150, //原價

    spec: "新酒初榨，鮮嫩多汁的無濾過生酒", //容量 or 想要的敘述

    note: {
      oneLine: `鳳凰美田初榨系列是每年冬季最受期待的作品。
	這款無濾過生酒保留了酒液最原始的風味，帶有豐富且清新的麝香葡萄與水梨香氣。入口後能感受到微細的二氧化碳氣泡感，伴隨著生酒特有的多汁甜味與俐落酸度，口感純淨透明且充滿活力，是品味新酒季最完美的起點。
	此款無濾過生酒甘甜不膩，適合佐餐

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "小林・鳳凰美田", //品牌
      origin: "日本", //產地
      rice: "五百萬石", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"55%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "17%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 4,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kobayashi" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 42,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "鳳凰美田 純米吟釀",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/42鳳凰美田_純米吟釀1.webp`,
      `${CDN}/42鳳凰美田_純米吟釀2.webp`,
    ], //圖片檔名

    price: 1750, //優惠價
    originPrice: 1950, //原價

    spec: "雅緻哈密瓜芳香，經典平衡純米吟釀", //容量 or 想要的敘述

    note: {
      oneLine: `鳳凰美田純米吟釀是展現酒造實力的代表作。
	開瓶後散發出標誌性的高雅綠色哈密瓜香氣，酒質清澈如泉水，入口後果實的甘甜感與洗鍊的酸度在舌尖交織。整體層次分明，餘韻乾淨俐落，無論是搭配精緻的和食或是單獨飲用，都能感受到這款酒所傳達的優雅與純粹。

	原料：麹米（山田錦）・掛米（五百万石）`, //酒款特色
    },

    info: {
      brand: "小林・鳳凰美田", //品牌
      origin: "日本", //產地
      rice: "山田錦、五百萬石", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"55%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "16%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 5,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kobayashi" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 43,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "鳳凰美田 純米大吟釀 赤判",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/43鳳凰美田_赤判1.webp`,
      `${CDN}/43鳳凰美田_赤判2.webp`,
    ], //圖片檔名

    price: 2450, //優惠價
    originPrice: 3750, //原價

    spec: "頂級山田錦釀造，極致絲滑果香饗宴", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2024 SAKE COMPETITION 純米大吟釀部門 金賞
	
	選用兵庫縣西脇地區栽培的特級山田錦，精米步合達40%。
	酒質如絲綢般滑順，充滿華麗的麝香葡萄與成熟蜜瓜香氣。原酒的飽滿厚實感在口中優雅綻放，隨後轉為乾淨利落的餘韻，是款將奢華芳香與精緻酒質完美融合的巔峰之作。

	日本酒度：+1 酸度：2
	
	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "小林・鳳凰美田", //品牌
      origin: "日本", //產地
      rice: "兵庫縣產山田錦", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"40%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "16%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 5,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kobayashi" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 44,
      priority: 5, // ✅ 新增：1~5，越大越優先
      name: "蓬萊泉 一念不動 特別純米 無濾過 しぼりたて",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/44一念不動_特別純米新酒1.webp`,
      `${CDN}/44一念不動_特別純米新酒2.webp`,
    ], //圖片檔名

    price: 1350, //優惠價
    originPrice: 1450, //原價

    spec: "新酒首發，初榨生酒香氣飽滿活力", //容量 or 想要的敘述

    note: {
      oneLine: `🌟愛知縣特約店限定酒

	這是一款搶在冬季採收後，首批壓榨即裝瓶的限量新酒。
	以今年新米釀製而成的初榨酒，可體會極致清新滋味。口感輕快，並帶有俐落酸度，很適合搭配醬烤類料理、新和食和義式或其他西洋風料理。雖是初榨，但明顯的花果香氣及清爽鮮味，以及尾韻飽滿與多汁感，是此酒款最大特色。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "関谷・一念不動", //品牌
      origin: "日本", //產地
      rice: "夢山水", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"60%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "17%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 4, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 4,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "sekiya" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 45,
      priority: 5, // ✅ 新增：1~5，越大越優先
      name: "純米大吟釀 初花 金魚台輪",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/45初花_金魚台輪純米大吟釀1.webp`,
      `${CDN}/45初花_金魚台輪純米大吟釀2.webp`,
    ], //圖片檔名

    price: 1890, //優惠價
    originPrice: 2100, //原價

    spec: "兩百年祭典神韻，高雅清冽", //容量 or 想要的敘述

    note: {
      oneLine: `本款酒是將新潟新發田祭兩百年的文化魂魄，凝練於酒液之中的巔峰之作。酒造以此款酒向地方傳統致敬，展現出如同祭典台輪巡行般的威嚴與華麗感。

	風味上承襲了新潟酒極致清粹的地酒體質，入口瞬間散發出如白桃與青蘋果般的澄澈香氣，隨之而來的是大吟釀等級的細緻質地。口感流暢、不帶雜質，彷彿雪國冬祭後的清甜甘露。
	這不僅是一瓶純米大吟釀，更是連結在地情感與頂級釀造工藝的藝術品，適合在重要場合中，品味那份傳承百年的歷史榮光。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "金升・初花", //品牌
      origin: "日本", //產地
      rice: "五百萬石", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"50%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "17%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "kanemasu" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 46,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "蓬萊泉 和 純米吟釀 わ",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/46蓬萊泉_和_純米吟釀1.webp`,
      `${CDN}/46蓬萊泉_和_純米吟釀2.webp`,
    ], //圖片檔名

    price: 1680, //優惠價
    originPrice: 1800, //原價

    spec: "如絹絲滑順，和諧溫潤的純米吟釀", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2020 世界競賽IWC 金賞
	本款酒以追求口感的和諧與圓潤聞名。酒質展現出山田錦特有的紮實風味，香氣內斂且優雅。
	入口質地溫潤，微甜的果實感與細膩旨味交織出絕佳的和諧感。其圓潤的酒體與俐落餘韻，無論常溫飲用或搭配各式料理，都能展現出溫柔且高級的餐酒體驗。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "関谷・蓬萊泉", //品牌
      origin: "日本", //產地
      rice: "山田錦", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"50%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "15%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 4, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "sekiya" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 47,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "蓬萊泉 和 熟成生酒 わ",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/47蓬萊泉_和_熟成生酒1.webp`,
      `${CDN}/47蓬萊泉_和_熟成生酒2.webp`,
    ], //圖片檔名

    price: 1750, //優惠價
    originPrice: 1920, //原價

    spec: "生酒一年熟成，難得一見的稀有珍釀", //容量 or 想要的敘述

    note: {
      oneLine: `✨生酒狀態一年熟成，難得一見的稀有珍釀✨

	選用高品質酒米製作，並在裝瓶前經過一年時間的熟成。這款生酒褪去了初榨時的生澀，轉化為可可般的細緻圓潤口感。香氣優雅內斂，入口後帶有飽滿的旨味與恰到好處的甘甜，質地如同絹絲般滑順，是款能與各類料理完美結合的熟成佳作。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "関谷・蓬萊泉", //品牌
      origin: "日本", //產地
      rice: "山田錦", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"50%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "15%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "sekiya" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 48,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "蓬萊泉 美 純米大吟釀",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/48蓬萊泉_美_純米大吟釀1.webp`,
      `${CDN}/48蓬萊泉_美_純米大吟釀2.webp`,
    ], //圖片檔名

    price: 2900, //優惠價
    originPrice: 2900, //原價

    spec: "如花綻放，極致細緻優雅純米大吟釀", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2022 世界競賽IWC 大會推薦賞
	🏆2024 世界競賽IWC 大會推薦賞

	這款名為美的純米大吟釀，完美體現了女性般的柔美與優雅。
	香氣清爽且充滿層次，帶有如哈密瓜般的清甜果香。酒質極其細緻流暢，入口後甘甜感與酸度達到絕佳平衡，口感輕盈卻不失存在感。無論作為餐前酒或搭配茶碗蒸等輕食，都能感受到其高貴且純淨的味覺享受。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "関谷・蓬萊泉", //品牌
      origin: "日本", //產地
      rice: "山田錦", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"45%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "16%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 4, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 4,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "sekiya" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 49,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "蓬萊泉 金 純米大吟釀",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/49蓬萊泉_金_純米大吟釀1.webp`,
      `${CDN}/49蓬萊泉_金_純米大吟釀2.webp`,
    ], //圖片檔名

    price: 2300, //優惠價
    originPrice: 2450, //原價

    spec: "如葡萄酒般輕快優雅，綻放極致旨味", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2022 世界競賽IWC 銅賞

	蓬萊泉推出全新荒川杜氏系列。
	選用奧三河產夢山水酒米，精米步合百分之四十五。十四度的低酒精設計，使其如葡萄酒般輕快易飲。
	帶有西洋梨般優雅寬廣的香氣，口感輕盈細緻。適合搭配鮪魚、鰹魚等鮮味濃郁的料理。
	瓶標採用金黃稻穗設計，是份精緻且體面的送禮首選。

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "関谷・蓬萊泉", //品牌
      origin: "日本", //產地
      rice: "夢山水", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"45%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "14%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 3, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "sekiya" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 50,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "蓬萊泉 銀 純米吟釀",
      type: "清酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "sake", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/50蓬萊泉_銀_純米吟釀1.webp`,
      `${CDN}/50蓬萊泉_銀_純米吟釀2.webp`,
    ], //圖片檔名

    price: 1530, //優惠價
    originPrice: 1740, //原價

    spec: "品味溫潤如玉，溫柔且圓潤入口", //容量 or 想要的敘述

    note: {
      oneLine: `選用奧三河在地酒米「Mineharuka(嶺遙)」，入口感受溫潤圓潤的甘甜與米旨味，餘韻悠長細緻。除了甜美感外，更有豐富Umami！
	這款純米吟釀非常適合搭配佃煮、肉類等濃郁家常菜，是能輕鬆融入日常餐桌的風格佳作！

	原料：米、米麴`, //酒款特色
    },

    info: {
      brand: "関谷・蓬萊泉", //品牌
      origin: "日本", //產地
      rice: "嶺遙", //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: "未公開", //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: null,//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish:"55%",//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "14%", //酒精濃度
      volume: "720ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: 2, // 1=最辛 → 5=最甘
        sakeUmamiFruity: 3,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: null,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: null  // 1=清爽 → 5=厚實
    },
    

    wineryId: "sekiya" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
    {
      id: 64,
      priority: 5, // ✅ 新增：1~5，越大越優先
      name: "奧野田 La Florette 粉紅酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/64奧野田_LaFlorette1.webp`,
      `${CDN}/64奧野田_LaFlorette2.webp`,
    ], //圖片檔名

    price: 1350, //優惠價
    originPrice: 1400, //原價

    spec: "稀有品種，玫瑰荔枝香甜奔放", //容量 or 想要的敘述

    note: {
      oneLine: `瀰漫著玫瑰花、荔枝、白桃般的浪漫芳香，完美呈現稀有黑葡萄品種「Mills」的特色，在口中綻放淡雅甘甜滋味，點綴清爽酸度，馥郁香氣加上飽滿的口感層次感十足，柔美餘韻繚繞不絕。

	搭餐推薦：藍紋乳酪、乳酪甜點、生火腿水果沙拉、玫瑰覆盆莓馬卡龍

	建議適飲溫度：6~10°C`, //酒款特色
    },

    info: {
      brand: "奧野田", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Mills",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "8.5%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 3  // 1=清爽 → 5=厚實
    },
    

    wineryId: "okunota" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 65,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "奧野田 花水木 甲州白葡萄酒 2024",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/65奧野田_花水木1.webp`,
      `${CDN}/65奧野田_花水木2.webp`,
    ], //圖片檔名

    price: 1400, //優惠價
    originPrice: 1680, //原價

    spec: "如花水木優雅，純淨山梨甲州風味", //容量 or 想要的敘述

    note: {
      oneLine: `選用山梨縣甲州市契作農園的優質甲州葡萄，這款花水木白酒展現出如其名般優雅清新的氣質。2024年份具備小白花、洋梨、香蕉般的甜美香氣，入喉感輕盈乾爽。獨特的礦石感與細緻酸度交織，尾韻帶有些微皮渣接觸帶來的深度。
	這是一款極致純淨的甲州酒，能完美襯托出日式料理與海鮮的鮮甜。

	搭餐推薦：胡麻菠菜、涼拌菠菜豆腐、蔬菜天婦羅

	建議適飲溫度：10~12°C`, //酒款特色
    },

    info: {
      brand: "奧野田", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "甲州",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "11.5%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 2  // 1=清爽 → 5=厚實
    },
    

    wineryId: "okunota" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 66,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "奧野田 DOLCE 白葡萄酒 2024",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/66奧野田_DOLCE1.webp`,
      `${CDN}/66奧野田_DOLCE2.webp`,
    ], //圖片檔名

    price: 1100, //優惠價
    originPrice: 1250, //原價

    spec: "頂級山田錦釀造，極致絲滑果香饗宴", //容量 or 想要的敘述

    note: {
      oneLine: `選用盛夏陽光滋養的完熟德拉瓦葡萄釀造，釋放出宛如蜜蘋果般的華麗果香，融合濃郁果實風味及蜂蜜般的甜美餘韻，層層堆疊豐富層次，清爽酸度巧妙地平衡了整體甜感，口感飽滿卻不顯厚重，適合作為餐後甜點酒享用。

	搭餐推薦：飯後甜食、冷盤沙拉

	建議適飲溫度：6~8°C`, //酒款特色
    },

    info: {
      brand: "奧野田", //品牌
      origin: "日本", //產地
      rice: null, //原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null, //酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Delaware",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "8.5%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null,  // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 2  // 1=清爽 → 5=厚實
    },
    

    wineryId: "okunota" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 67,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "瑪爾維西亞 氣泡甜白酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/67瑪爾維西亞_氣泡甜白1.webp`,
      `${CDN}/67瑪爾維西亞_氣泡甜白2.webp`,
      `${CDN}/67瑪爾維西亞_氣泡甜白3.webp`,
    ], //圖片檔名

    price: 780, //優惠價
    originPrice: 880, //原價

    spec: "百年酒莊經典，蜜香細緻氣泡甜白", //容量 or 想要的敘述

    note: {
      oneLine: `源始於1900年，經過世代傳承，尤其是義式氣泡酒Lambrusco獲得葡萄酒大師Hugh Johnson讚譽其為Lambrusco最佳釀酒廠​!

	100% Malvasia Aromatica品種，淡雅黃色帶有菩提樹開花的香氣，配上白桃和柑橘花香，搭配奶油甜點、酥餅糕點香香甜甜有戀愛的滋味。

	搭餐推薦：奶油甜點、酥餅糕點

	建議適飲溫度：6~8°C`, //酒款特色`, //酒款特色
    },

    info: {
      brand: "卡莎莉酒莊", //品牌
      origin: "義大利", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Malvasia",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "6%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 2  // 1=清爽 → 5=厚實
    },
    

    wineryId: "casali" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 68,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "進化系薰衣草 白葡萄酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/68進化系薰衣草1.webp`,
      `${CDN}/68進化系薰衣草2.webp`,
    ], //圖片檔名

    price: 1150, //優惠價
    originPrice: 1200, //原價

    spec: "最少的人為干預釀造，濃郁香氣奔放", //容量 or 想要的敘述

    note: {
      oneLine: `手工採摘，輕柔壓榨後，在不銹鋼槽中16°C低溫發酵持續17天。之後再經過34天54公升玻璃甕與酵母泡渣，未經過橡木桶陳釀，以保有酒體純淨感。

	酒色鵝黃透綠，散發濃郁甜美果香與森林花味。口感清新且酸度適中，尾韻持久並帶有豐富層次。這款純素友善的佳釀，與熱帶水果沙拉或燒烤海鮮皆是絕佳搭配。

	建議適飲溫度：10~12°C`, //酒款特色
    },

    info: {
      brand: "巴塔生物動力酒莊", //品牌
      origin: "西班牙", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Malvasía de Sitges",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "14%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 1  // 1=清爽 → 5=厚實
    },
    

    wineryId: "pares-balta" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 69,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "向祖父致敬 經典老Cava氣泡酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/69向祖父致敬_Cava1.webp`,
      `${CDN}/69向祖父致敬_Cava2.webp`,
    ], //圖片檔名

    price: 1500, //優惠價
    originPrice: 1500, //原價

    spec: "祖傳黃金比例，36個月瓶陳熟成", //容量 or 想要的敘述

    note: {
      oneLine: `採用有機種植葡萄與最低人工干預釀製。
	手工採收後在酒莊輕柔榨汁，每種葡萄在16°C的不鏽鋼槽中分別發酵2週，之後依照傳統法進行瓶中2次發酵，並在瓶中熟成至少36個月，未經橡木桶陳年。
	祖傳黃金比例調配，瓶中熟成長達三十六個月，賦予其黃金調色澤與奶油般質地。帶有蜜餞、堅果及細緻糕點香氣，口感優雅濃郁，細緻氣泡伴隨微苦尾韻，完美呈現最原始的西班牙老CAVA風味。

	搭餐推薦：適合與各式美食搭配，也適合搭配一口食小點、米食料理及燉肉。

	建議適飲溫度：6~8°C`, //酒款特色
    },

    info: {
      brand: "巴塔生物動力酒莊", //品牌
      origin: "西班牙", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "60% Xarel·lo、20% Macabeu、20% Parellada",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "12%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 3  // 1=清爽 → 5=厚實
    },
    

    wineryId: "pares-balta" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 70,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "阿拔迪亞小神父 白葡萄酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/70阿拔迪亞小神父1.webp`,
      `${CDN}/70阿拔迪亞小神父2.webp`,
    ], //圖片檔名

    price: 950, //優惠價
    originPrice: 1000, //原價

    spec: "原生酵母發酵，綻放成熟熱帶果香", //容量 or 想要的敘述

    note: {
      oneLine: `採用冷浸法浸漬，並選用自家葡萄園的原生酵母發酵，待酒質穩定後裝瓶，完整保留純粹風土。
	酒色呈現亮麗的稻穗金，香氣以成熟的芒果與鳳梨為主調，交織著梨子與金黃蘋果的細膩清新。口感純淨且具層次感，是一款展現熱帶果實豐盈生命力的優雅佳作。

	搭餐推薦：海鮮，尤其是牡蠣和螃蟹 與帶有濃郁辛辣醬汁的亞洲美食。

	建議適飲溫度：10~12°C`, //酒款特色
    },

    info: {
      brand: "高達大地酒莊", //品牌
      origin: "西班牙", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Albariño",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "12.5%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 2  // 1=清爽 → 5=厚實
    },
    

    wineryId: "terras-gauda" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 71,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "安提利亞 白葡萄酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/71安提利亞_白酒1.webp`,
      `${CDN}/71安提利亞_白酒2.webp`,
    ], //圖片檔名

    price: 990, //優惠價
    originPrice: 990, //原價

    spec: "西西里浪漫・海風氣息與果香交織", //容量 or 想要的敘述

    note: {
      oneLine: `此款為多娜佳塔酒莊的首款作品，以西西里古城安特拉命名。酒標描繪艾利米恩文明的神祕女性，象徵其悠久底蘊。
	選用盧奇多為主體，混釀原生與國際品種，經低溫發酵與陳釀，展現新鮮白桃與野花香氣。果味多汁且餘韻持久，完整呈現品種與溫控發酵帶來的層次感。

	搭餐推薦：適合搭配輕煙燻魚類、甲殼類海鮮、前菜和烤物。和鮪魚、凱薩沙拉亦是絕配。

	建議適飲溫度：9~11°C`, //酒款特色
    },

    info: {
      brand: "多娜佳塔酒莊", //品牌
      origin: "義大利・西西里", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Lucido、當地品種",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "12.5%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 2  // 1=清爽 → 5=厚實
    },
    

    wineryId: "donnafugata" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 72,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "TOSO 微甜氣泡酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/72TOSO_微甜氣泡酒1.webp`,
      `${CDN}/72TOSO_微甜氣泡酒2.webp`,
    ], //圖片檔名

    price: 450, //優惠價
    originPrice: 450, //原價

    spec: "細緻珠光微甜氣泡", //容量 or 想要的敘述

    note: {
      oneLine: `嚴選義大利山麓地帶的莫斯卡托（Moscato）葡萄釀製。酒體呈淡淡的麥稈黃色，氣泡如珍珠般細緻持久。
	香氣令人愉悅，充滿熱帶水果、荔枝與白花氣息，酒精濃度溫和適中。入口感受其甜美飽滿的果實風味與清爽酸度，餘韻純淨滿足。

	搭餐推薦：新鮮水果、派餅或各式甜點，亦可作為歡聚場合的開胃酒。

	建議適飲溫度：6~10°C`, //酒款特色
    },

    info: {
      brand: "多索酒莊", //品牌
      origin: "義大利", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Moscato、當地品種",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "6%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 2  // 1=清爽 → 5=厚實
    },
    

    wineryId: "toso" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 73,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "卡本內之父 桶香紅",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/73卡本內之父_桶香紅1.webp`,
      `${CDN}/73卡本內之父_桶香紅2.webp`,
      `${CDN}/73卡本內之父_桶香紅3.webp`,
    ], //圖片檔名

    price: 1000, //優惠價
    originPrice: 1000, //原價

    spec: "多瑙河畔羅馬堡壘，現代優雅風土", //容量 or 想要的敘述

    note: {
      oneLine: `創立於本世紀初的保加利亞酒莊，坐落於多瑙河斜坡的羅馬堡壘舊址。秉持新鮮、果感與品質的原則，以極少人工干預展現風土。
	這款卡本內弗朗呈現紅寶石色澤，經法國桶陳釀九至十二個月，帶有黑醋栗、覆盆子與草本香氣，並伴隨淡淡香料與香草餘韻。酒體醇厚均衡，展現櫻桃果味與大地泥土感，餘韻悠長且細緻。

	搭餐推薦：義大利風格菜餚、熟食、肉類、燒烤及素食皆可搭配。

	建議適飲溫度：12~16°C`, //酒款特色
    },

    info: {
      brand: "布爾松城堡", //品牌
      origin: "保加利亞", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Cabernet Franc",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "14.5%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 3,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 3  // 1=清爽 → 5=厚實
    },
    

    wineryId: "chateau-burgozone" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 74,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "馬瑟蘭 花果香紅酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/74馬瑟蘭1.webp`,
      `${CDN}/74馬瑟蘭2.webp`,
    ], //圖片檔名

    price: 1150, //優惠價
    originPrice: 1200, //原價

    spec: "法桶陳釀石榴紅，莓果與煙燻層次", //容量 or 想要的敘述

    note: {
      oneLine: `產自多瑙河流域的紅酒，採用人工採摘並經嚴格篩選，於不鏽鋼桶恆溫發酵後，進入法國橡木桶陳釀六至九個月。
	色澤呈鮮豔石榴紅，具備紅色與深色莓果、酸櫻桃及黑莓的持久香氣，並與煙燻及焦糖氣息完美結合。口感濃郁強烈，展現均勻的果感，尾韻則帶有雪松、香草與巧克力的細緻香氣，完美體現新鮮與高品質的風格。

	搭餐推薦：燒烤、肉類野味和巧克力甜點。

	建議適飲溫度：15~17°C`, //酒款特色
    },

    info: {
      brand: "布爾松城堡", //品牌
      origin: "保加利亞", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Marselan",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "15%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 3,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 4  // 1=清爽 → 5=厚實
    },
    

    wineryId: "chateau-burgozone" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 75,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "飛機 手工紅酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/75飛機_手工紅酒1.webp`,
      `${CDN}/75飛機_手工紅酒2.webp`,
    ], //圖片檔名

    price: 1150, //優惠價
    originPrice: 1200, //原價

    spec: "不壓榨釀造，單寧輕盈細緻", //容量 or 想要的敘述

    note: {
      oneLine: `高達大地酒莊坐落於西班牙西北角，以尊重土地節奏與低干預方式釀造。
	這款紅酒結合傳統Rioja品種與Garnacha，手工採摘後確保葡萄完整進入發酵罐，於25度溫控下發酵二十天。酒液經七百公升小橡木桶陳釀16個月，並歷經三年瓶陳。
	深寶石紅色澤中，散發Garnacha特有的黑色水果、甘草與精緻細膩的胭脂香氣。口感展現出獨樹一格的清新感與活力，隨著時間推移，單寧變得柔和且層次豐富，整體表現和諧而精美。

	搭餐推薦：傳統的西班牙燉菜或砂鍋菜、羊排、烤魚、炒蘑菇等。

	建議適飲溫度：15~18°C`, //酒款特色
    },

    info: {
      brand: "高達大地酒莊", //品牌
      origin: "西班牙", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Graciano、Garnacha、Tempranillo、Mazuela",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "14%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 2,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 3  // 1=清爽 → 5=厚實
    },
    

    wineryId: "terras-gauda" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 76,
      priority: 3, // ✅ 新增：1~5，越大越優先
      name: "酒神 桶陳紅酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/76酒神_桶陳紅酒1.webp`,
      `${CDN}/76酒神_桶陳紅酒2.webp`,
    ], //圖片檔名

    price: 1150, //優惠價
    originPrice: 1200, //原價

    spec: "冰雪與烈日的淬鍊，多汁純淨石榴紅", //容量 or 想要的敘述

    note: {
      oneLine: `歷經寒冬降雪與春季濕冷，在夏季炎熱乾燥後迎來穩定成熟，產量稀少且風味複雜。
	採用十二公斤小木盒人工採摘，於不鏽鋼罐發酵十五天，並以放血法靜置一個月。酒液於法國與美國橡木桶陳釀八個月，裝瓶後再經兩年休整。色澤呈石榴紅，散發新鮮紅果、香料、石墨與礦物質氣息。口感優柔多汁，餘韻悠長且具層次。

	搭餐推薦：豐富多樣的搭配，如烤肉或燉肉、豆類濃湯，以及冷肉、起司、義大利麵、肉餡捲餅、拌有適當冷醬的沙拉。

	建議適飲溫度：15~18°C`, //酒款特色
    },

    info: {
      brand: "高達大地酒莊", //品牌
      origin: "西班牙", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Mencía",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "14.5%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 3,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 4  // 1=清爽 → 5=厚實
    },
    

    wineryId: "terras-gauda" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 77,
      priority: 4, // ✅ 新增：1~5，越大越優先
      name: "安娜詠 經選桶陳紅酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/77安娜詠_經選桶陳1.webp`,
      `${CDN}/77安娜詠_經選桶陳2.webp`,
    ], //圖片檔名

    price: 1280, //優惠價
    originPrice: 1350, //原價

    spec: "老藤混釀醇厚果香，法國老桶香氣層次", //容量 or 想要的敘述

    note: {
      oneLine: `🏆2023 James Suckling -91分
	🏆2023 Guía Peñín -91分
	🏆2023 39 Guía Vinos Gourmets -92分


	精選30至48年不等的老藤Syrah、Merlot、Cariñena與Tempranillo釀製。葡萄園坐落於高海拔山脈，板岩土壤與強勁通風賦予果實極佳集中度。
	酒液分別於美國、法國與納瓦拉橡木桶陳釀十一個月。色澤濃紅帶紫，散發黑櫻桃、栗子與香草誘人香氣。口感飽滿、單寧成熟，入口帶有黑櫻桃、雪松和煙草葉的風味層次，尾韻悠長且極具複雜度。

	搭餐推薦：雞肉丸子、烤蔬菜和金槍魚燉菜，或搭配火雞火腿和松露雞肉等高級冷盤。乾酪則推薦老馬翁奶酪或熟成的高達乾酪。

	建議適飲溫度：15~17°C`, //酒款特色
    },

    info: {
      brand: "安娜詠酒莊", //品牌
      origin: "西班牙", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "Tempranillo、Cariñena、Merlot、Syrah",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "14.5%", //酒精濃度
      volume: "750ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 4,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 5  // 1=清爽 → 5=厚實
    },
    

    wineryId: "anayón" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 78,
      priority: 5, // ✅ 新增：1~5，越大越優先
      name: "我們的經典熱紅酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/78我們的經典熱紅酒1.webp`,
      `${CDN}/78我們的經典熱紅酒2.webp`,
    ], //圖片檔名

    price: 550, //優惠價
    originPrice: 600, //原價

    spec: "德國傳統工法，歐洲經典聖誕風味", //容量 or 想要的敘述

    note: {
      oneLine: `由indie drinkster與擁有90年以上熱紅酒釀酒經驗的德國Bayernwald共同設計，承襲歐洲道地傳統手工釀造。以新鮮水果酒為基底，融合肉桂、丁香、柳橙與檸檬等秘方辛香料，堅持天然無人工香料。風味大膽且層次豐富，散發酸甜莓果與柑橘果香，完美捕捉聖誕佳節氣息。
	建議加熱至60-70度飲用，亦可冰鎮品嚐，是熱紅酒愛好者的經典首選。

	建議適飲溫度：6~10°C 或 55~65°C`, //酒款特色
    },

    info: {
      brand: "Indie drinkster・Bayernwald", //品牌
      origin: "德國", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "紅酒、辛香料、柳橙、檸檬",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "9%", //酒精濃度
      volume: "1000ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 5  // 1=清爽 → 5=厚實
    },
    

    wineryId: "bayernwald" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    },
{
      id: 79,
      priority: 5, // ✅ 新增：1~5，越大越優先
      name: "我們的德國烤蘋果熱酒",
      type: "葡萄酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
      category: "wine", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個
    imgs: [`${CDN}/79烤蘋果熱酒1.webp`,
      `${CDN}/79烤蘋果熱酒2.webp`,
    ], //圖片檔名

    price: 550, //優惠價
    originPrice: 600, //原價

    spec: "德國傳統工法，溫潤烤蘋果派香氣", //容量 or 想要的敘述

    note: {
      oneLine: `與德國擁有九十年經驗的專業酒廠bayernwald共同設計，傳承寒冷歐洲的聖誕傳統。
	以香醇蘋果酒為基底，堅持使用天然香草與精選辛香料，無人工添加，純手工釀製而成。酒體捕捉了剛出爐蘋果派的甜美肉桂香，如同冬日暖心的佳餚。
	建議加熱至60-70度飲用以釋放迷人香氣，亦可直接冰鎮品味不同層次，是烤蘋果派愛好者的絕佳選擇。

	建議適飲溫度：6~8°C 或 55~65°C`, //酒款特色
    },

    info: {
      brand: "Indie drinkster・Bayernwald", //品牌
      origin: "德國", //產地
      rice: null,//原料米    如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      yeast: null,//酵母     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      variety: "蘋果酒、辛香料",//品種(葡萄)   如果不知道可以填入"未標示"，如果是清酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      polish: null,//精米步合     如果不知道可以填入"未標示"，如果是葡萄酒之類的沒有的話填入null，注意null不需要使用"" null的話會整欄不顯示
      alcohol: "5.4%", //酒精濃度
      volume: "1000ml" //容量
    },

    scale: {   //1-5分，分數越低越靠左，分數越高越靠右 ，不適用的欄位填入null
        sakeDrySweet: null, // 1=最辛 → 5=最甘
        sakeUmamiFruity: null, // 1=最米旨 → 5=最果香
      
        ftAcidSweet: null, // 1=最酸 → 5=最甜
        ftFreshRich: null,  // 1=最清爽 → 5=最濃郁
      
        wineTannin: 1,  // 1=單寧輕盈 → 5=單寧強烈
        wineFreshFull: 5  // 1=清爽 → 5=厚實
    },
    

    wineryId: "bayernwald" //酒造名稱  如果未來想要有相關酒造資訊顯示的話可以填入，不知道可以先填null
    }
]