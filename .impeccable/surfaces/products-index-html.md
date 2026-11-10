---
version: 1
slug: "products-index-html"
primary_target: "products/index.html"
related_targets: ["products/sake/index.html","products/fruit-tea/index.html","products/wine/index.html","products/spirits/index.html","products/mini/index.html"]
---

# 商品列表頁（/products/ 與五個分類頁）

## Scope
- 模式：Operate（訪客要在 123 款裡找到一支、加入購物車）
- 頁面：/products/、/products/fruit-tea/、/sake/、/wine/、/spirits/、/mini/
- 受眾：清酒入門者、送禮者、IG／LINE 回購熟客（見 PRODUCT.md）
- 限制：h1、title、meta、JSON-LD 不動；#productGrid 靜態卡保留（build.js 注入、SEO 用）；不捏造酒造故事或評價
- 未決：「入門好喝」一排需要資料欄位（目前沒有），先不做；品牌名稱有不一致（関谷／關谷、本坊／本坊酒造）需資料端統一

## Direction contract
THESIS：列表依「誰釀的」組織——每個分類先擺店主挑好的兩排（店長精選、活動中），往下按酒造分章；拒絕「一整片同款卡片格線＋陽春輸入框」的預設。
OWN-WORLD：黃昏酒桌不變：和紙頁底、焦茶唯一主色、酉時金細線、明朝體標題、柔和暖影卡片、膠囊按鈕；章頭是直書明朝體酒造名＋一道酉時金細線，不用雙線框。
STORY：先看到這一類有什麼（分類分頁＋款數），再看店主推薦與正在優惠的酒，接著依酒造逛、或用搜尋／口味／預算／排序直接縮小，加入購物車。
FIRST VIEWPORT：麵包屑與 h1＋一句導言；分類分頁（含款數）；工具列（搜尋、口味兩軸分段鈕、預算、排序）；「店長精選」橫向一排；桌機右側或下方開始酒造章節，左欄 sticky 酒造目錄。
FORM：依酒造分章（dealt #7）為主，加上店主先挑好的幾排（dealt #2）；seed:15252e7449d802b7；簽名動作：酒造目錄 sticky＋捲動時目前章節自動標示。
FINISH：unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
