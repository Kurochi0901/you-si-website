const articles = [
  // {
  //   id: 1,
  //   slug: "sake-pairing-guide",
  //   title: "清酒與料理的搭配指南",
  //   excerpt: "從刺身到燉煮，找到適合每道菜的清酒風味，讓餐桌上的搭配變得簡單又有趣。",
  //   cover: "/assets/images/blog/sake-pairing.jpg",
  //   date: "2025/08/01",
  //   author: "酉時喝酒",
  //   mainTags: ["酉時圖書館"],
  //   subTags: ["日本酒"],
  //   relatedProductIds: [1, 2, 3]
  // },
];
// 強制掛載到全域 window 物件以確保跨腳本讀取
if (typeof window !== 'undefined') {
  window.articles = articles;
}
