const CDN = "https://res.cloudinary.com/dcrn2oyxk/image/upload/f_auto,q_auto";

const products = [
  {
    id: 1,
    priority: 4, // ✅ 新增：1~5，越大越優先
    name: "梅侍純釀 紅玉紅茶梅酒",
    type: "果實酒", //"清酒" "果實酒" "茶酒" "葡萄酒" "烈酒" "小罐專區"   只能填這6種其中一個
    category: "mini", // ["sake", "fruit-tea", "spirits", "wine", "mini"] 只能填這5種其中一個	
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
    priority: 3, // ✅ 新增：1~5，越大越優先
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
  }
]