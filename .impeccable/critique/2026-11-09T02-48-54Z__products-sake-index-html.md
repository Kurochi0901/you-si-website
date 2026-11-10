---
target: 商品頁
total_score: 26
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\jason\\Desktop\\酒\\you-si-website\\products\\sake\\鳳凰美田-純米吟釀-冷卸-山田錦\\index.html"
target_fingerprint: "sha256:4205c884856f1e9c1efa3f5343b06bb6c4b75e352103c375798550c3bbdffe00"
target_path: "C:\\Users\\jason\\Desktop\\酒\\you-si-website\\products\\sake\\鳳凰美田-純米吟釀-冷卸-山田錦\\index.html"
timestamp: 2026-11-09T02-48-54Z
slug: products-sake-index-html
---
Method: dual-agent (A: design-review subagent · B: detector+browser subagent)

# 商品頁 Critique（第三次）：酉時喝酒 YOU-SI
代表頁：鳳凰美田 冷卸（build.js 模板）；抽看烈酒六代目百合、預購水芭蕉。瀏覽器窗格隱藏，IntersectionObserver／墨暈／dialog close／淡入淡出改以程式邏輯推算。業主決定的內容項目不扣分；座標格子互動、烈酒風味筆記為已排入下一輪的已知項目。

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | 桌面「已加入 N 件」常駐、回訪仍在；缺免運差額 |
| 2 | Match System / Real World | 3 | 軸線白話、怎麼買好；精米步合、山田錦未解釋 |
| 3 | User Control and Freedom | 3 | 先選再前往、Esc 關放大；放大不能換張、加入無復原 |
| 4 | Consistency and Standards | 2 | 有酒時兩個焦茶同視野；LINE 兩種網址三種名稱；「加入預購」後提示「已加入購物車」 |
| 5 | Error Prevention | 2 | 手機加入後同位置變「填寫詢問單」；座標 17% 誤點（已知） |
| 6 | Recognition Rather Than Recall | 3 | 說明列帶酒名口味價格 |
| 7 | Flexibility and Efficiency | 2 | 有酒時底部列不再提供加入這一支；桌面捲過 CTA 無購買入口 |
| 8 | Aesthetic and Minimalist Design | 3 | 安靜合品牌，怎麼買已收合 |
| 9 | Error Recovery | 2 | 桌面 LINE 落到 LINE 官網首頁，詢問斷掉 |
| 10 | Help and Documentation | 3 | 怎麼買、軸線說明、圖例清楚 |
| Total | | 26/40 | Acceptable（65%） |

## Design Specificity Verdict
品牌語彙到位（明朝品名、金縁和紙座標、焦茶膠囊、暖影），品名下的「● 甘辛適中，偏果香 看風味座標 ↓」把座標語彙借到第一屏，是這輪最有品牌感的一筆；構圖仍是通用左圖右文。座標第一屏露出：1440×900 約 41%、1024×768 0%、手機約 1.6 屏後。烈酒頁沒有口味句也沒有座標（已知）。
Detector: CLI 3 頁 22 筆（broken-image 3＝dialog 內 #pdpZoomImg、cramped-padding 5＝透明放大按鈕與絕對定位軸標、cream-palette 3、marquee 3、dark-glow 3、design-system-color 5＝「省 $X」框線 #e9c4bd 與得獎文字 #6b4e1c）。除 design-system-color 兩色未入色盤外皆誤報。overlay 三尺寸皆只有 cream-palette。量測：桌面縮圖在警語列上方 12px；手機首屏底部列（718–783）蓋住價格區（733–789）；主控台 0 錯誤、無水平捲動。

## Priority Issues
- [P1] 桌面「用 LINE 詢問這款酒」落到 LINE 官網首頁：line.me/R/oaMessage 在桌面 UA 轉到 www.line.me（已用 curl 驗證：桌面 → https://www.line.me/en/，手機維持 oaMessage）。修法：只在觸控／手機用 oaMessage；桌面用 ti/p 加好友頁，另提供「複製詢問訊息」。（harden / clarify）
- [P1] 購物車有酒時手機底部列不再服務這一支：.sticky-buy 與淡出只寫在 .is-empty；加入後同位置變「填寫詢問單」，頁內 CTA 可見時兩個焦茶同視野。修法：商品頁底部列固定「購物車摘要（小）｜加入購物車／本款已加入則改填寫詢問單｜LINE」，頁內 CTA 可見時不論購物車都淡出。（adapt / harden）
- [P2] 桌面捲過 CTA 後沒有購買入口；#pdpAdded 缺免運差額；怎麼買收合句在已滿額時仍寫「滿 NT$2,800 免運」。修法：sticky 相簿欄下放精簡 CTA（頁內按鈕離開畫面才出現）；renderAdded 補 freeShipText。（layout / clarify）
- [P2] 手機首屏底部列蓋住價格區（量測 718–783 對 733–789），底部列本身有價格但頁內價格被遮。（adapt）
- [P2・已知] 座標以點為互動單位：17% 誤點、44 Tab 停點；新觀察：選取中的同類點是實心深點，與圖例「深色圓點是這一款」衝突。（clarify / harden）
- [P3] 預購與現貨用詞混用：「加入預購」後提示「已加入購物車」、#pdpAdded 合併金額、步驟 3 未說到貨時間。（clarify）

## Persona Red Flags
Casey：首屏價格被底部列蓋住；加入後同位置變填寫詢問單；提示框＋底部列＋警語約 29% 畫面 3.5 秒；座標誤點。
Jordan：精米步合、山田錦沒解釋；選了同類酒後圖上兩個深點分不清本款。
Riley：加入購物車是第 23 個 Tab 停點；桌面 LINE 死路；預購用詞；861–899px 套手機版型但沒有底部列。
送禮者：辦公室桌機按 LINE 會斷掉；預購混車不知何時到貨。

## Minor Observations
1440 下加入提示框疊到座標右緣約 20px；提示框「查看購物車」與 #pdpAdded「前往填寫詢問單」說法不同；放大約只有 1.1 倍且不能換張；手機「1 / 4」疊在主圖警語條；.pdp-taste 報讀連成一句無停頓；「省 $X」框線與得獎文字色未入 DESIGN.md 色盤。

## Questions to Consider
1. 商品頁底部列在賣「這一支」還是在結「整台購物車」？
2. 桌面沒有 LINE App 的人，需要一顆和加入購物車並排的 LINE 大按鈕嗎？QR＋複製訊息會不會更誠實？
3. 口味句已在第一屏回答味道，座標是否該改成「找下一支」（比這支更辛口的 3 支）？
4. 預購和現貨共用一個購物車總額，客人知道整單可能要等到 12 月嗎？
