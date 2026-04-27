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
    relatedProductIds: [31, 30, 39, 44]
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
  }

];
// 強制掛載到全域 window 物件以確保跨腳本讀取
if (typeof window !== 'undefined') {
  window.articles = articles;
}
