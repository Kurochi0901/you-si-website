/**
 * 酉時喝酒 YOU-SI｜公告 / 促銷資料
 *
 * 使用方式：
 *   - 有公告時：在 announcements 陣列加入物件
 *   - 沒有公告時：將陣列清空 → []  公告條會自動隱藏，頁面不位移
 *
 * 每則公告格式：
 *   { text: "顯示的文字", link: "點擊連結（選填，不需要可省略）" }
 */

const announcements = [
  {
    text: "🎉 本月精選！任選 3 件享 85 折優惠，數量有限",
    link: "/products/"
  },
  {
    text: "📦 新品到貨｜萩之鶴 純米吟釀 辛口 現正熱賣中",
    link: "/products/"
  },
  {
    text: "歡慶官網上線!! 滿千送百",
    link: "/offers/"
  }
];
