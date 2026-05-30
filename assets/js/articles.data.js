const articles = [
  {
    id: 1,
    slug: "Beginner-Guide-Discover-Your-Soul-Sake",
    title: "新手必看・清酒入門指南｜五分鐘挑選你的本命酒",
    excerpt: "從精米步合到風味密碼，帶你拆解清酒標籤。5 分鐘學會自選本命酒！",
    cover: "/assets/images/blog/五分鐘挑選你的本命酒.webp",
    date: "2026/04/13",
    author: "酉時喝酒",
    mainTags: ["酉時圖書館"],
    subTags: ["日本酒"],
    relatedProductIds: [32, 30, 39, 44]
  },
  {
    id: 2,
    slug: "try-spring-sake",
    title: "跟著季節呼吸｜清酒，品味四季最溫柔的載體",
    excerpt: "一起尋覓屬於春季的風味：新酒．初榨．生霞酒！",
    cover: "/assets/images/blog/部落文封面.webp",
    date: "2026/04/27",
    author: "酉時喝酒",
    mainTags: ["酉時圖書館"],
    subTags: ["日本酒"],
    relatedProductIds: [80, 32, 44, 63, 58]
  },
  {
    id: 3,
    slug: "invited-to-share-by-tcyd",
    title: "受邀臺北市青年局分享：回首創業起點，用真實故事啟發更多追夢青年",
    excerpt: "從酒與茶的知識起點出發，酉時喝酒如何將專業轉化為禁得起市場檢驗的商業實踐",
    cover: "/assets/images/blog/id3封面.webp",
    date: "2026/05/18",
    author: "酉時喝酒",
    mainTags: ["酉時快訊"],
    subTags: [],
    relatedProductIds: []
  },
  {
    id: 4,
    slug: "2026-internationalalcoholcompetition",
    title: "五月微醺大季！直擊日本新酒鑑評會、IWSC、IWC 頂級得獎榜單",
    excerpt: "【台灣之光】梅侍蟬聯IWSC金牌，梅酒類唯一獲獎品牌！",
    cover: "/assets/images/blog/id4封面.webp",
    date: "2026/05/29",
    author: "酉時喝酒",
    mainTags: ["酉時快訊"],
    subTags: null,
    relatedProductIds: [4, 56, 61, 62, 117]
  },

];
// 強制掛載到全域 window 物件以確保跨腳本讀取
if (typeof window !== 'undefined') {
  window.articles = articles;
}
