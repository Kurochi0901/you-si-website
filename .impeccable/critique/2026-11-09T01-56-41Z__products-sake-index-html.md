---
target: 商品頁
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\jason\\Desktop\\酒\\you-si-website\\products\\sake\\鳳凰美田-純米吟釀-冷卸-山田錦\\index.html"
target_fingerprint: "sha256:4e49fed8cd57a6e338a7a599e21ee8f429b24e91b3d7cc31bb901090325db4d7"
target_path: "C:\\Users\\jason\\Desktop\\酒\\you-si-website\\products\\sake\\鳳凰美田-純米吟釀-冷卸-山田錦\\index.html"
timestamp: 2026-11-09T01-56-41Z
slug: products-sake-index-html
---
Method: dual-agent (A: design-review subagent · B: detector+browser subagent)

# 商品頁 Critique（第一次）：酉時喝酒 YOU-SI
代表頁：products/sake/鳳凰美田-純米吟釀-冷卸-山田錦/（build.js generateHTML 模板，套用全部 123 支）。抽看 wine、fruit-tea、spirits、預購組合頁，模板一致。

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | 加入後提示＋查看購物車完整；過期預購（10/31 截止）頁面無變化 |
| 2 | Match System / Real World | 2 | 米旨／辛口／精米步合未解釋；「酵母：未公開」30 頁；主圖 17% vs 規格 16% |
| 3 | User Control and Freedom | 2 | 燈箱無關閉鈕、Esc 關不掉；手機點座標直接跳別支 |
| 4 | Consistency and Standards | 3 | 三類模板一致；手機兩顆 LINE；🛒 emoji vs SVG |
| 5 | Error Prevention | 2 | 過期預購可加入；座標點擊區 19px、中心距 10.8px 互相重疊 |
| 6 | Recognition Rather Than Recall | 3 | 座標有文字結論與圖例；同類酒名只靠 hover |
| 7 | Flexibility and Efficiency | 2 | 無數量選擇；相關商品只列同酒造；縮圖不能鍵盤操作 |
| 8 | Aesthetic and Minimalist Design | 3 | 資訊欄安靜；相簿混入會員好禮／出貨保證宣傳圖 |
| 9 | Error Recovery | 2 | 燈箱困住鍵盤；預購截止無說明 |
| 10 | Help and Documentation | 2 | 付款流程、運費、冷鏈不在商品頁，要開抽屜才看到 |
| Total | | 24/40 | Acceptable（60%） |

## Design Specificity Verdict
一半專屬：風味座標（和紙雙金框、明朝直書軸、墨暈、44 個靜態可報讀連結、「甘辛適中，偏果香」結論）換任何酒商都長不出來。其餘是標準電商商品頁骨架。品牌差異點（品鑑師試飲、清酒冷鏈、可以私訊聊酒）在商品頁一個字都沒有。廠商海報主圖（紅字、青藍浪）視覺張力比 UI 強，與座標搶主角。
Detector: CLI 3 頁 20 筆（cream-palette 3、marquee 3、dark-glow 3、broken-image 2、cramped-padding 2、design-system-* 8）。cream-palette、marquee（skeleton shimmer）、dark-glow（1px 縮圖框／focus ring）、broken-image（燈箱空殼 img）、手機 text-occlusion（pointer-events:none 警語列）為誤報；design-system-* 多為紅酒頁 inline「桶陳紅酒推薦」框與「省 $X」膠囊色，屬真偏離。overlay 桌面 1、手機 2。量測：小於 44px 可點元素桌面 70/84、手機 59（座標點 44 個 9×9）；11px 文字：公告、麵包屑、qr-sub；無 console 錯誤、無水平捲動。

## Priority Issues
- [P1] 手機落地首屏沒有價格與購買動作：主圖 46vh，h1 被底部列蓋住半截，價格 y=852、加入購物車 y=909，可視底線 706；空車底部列只有「LINE 詢問推薦」。修法：手機主圖降到約 34vh；加入購物車捲出畫面時底部列改「NT$1,750｜加入購物車」；底部已有 LINE 時頁內 LINE 降為文字連結。（adapt / layout）
- [P1] 風味座標在觸控與入門者面前失靈：點 9px、點擊區 19px 重疊；酒名只靠 hover；一點就跳頁；空心點邊框 2.6:1；米旨／辛口無解釋；手機結論排在圖下方。修法：先選取再前往（下方說明列顯示酒名＋看這支）；邊框改金褐字或 2px；補一行軸線說明；手機結論移到圖上方。（harden / clarify）
- [P1] 「用 LINE 詢問這款酒」不帶酒名：main.js L2147 把所有 [data-line-link] 覆寫成加好友頁。修法：商品頁按鈕帶 data-line-product，改用 oaMessage 預填「我想詢問：品名｜價格｜網址」。（clarify / harden）
- [P2] 購買安心資訊不在決策點：服務列只有一行 13px 灰字；付款流程、冷藏運費 NT$230、免運 NT$2,800、冷鏈沒有文字；會員好禮／出貨保證做成圖片塞在相簿第 3、4 張。修法：改成三步「怎麼買」文字區塊＋運費一行，宣傳圖移出相簿。（clarify / distill）
- [P2] 狀態與鍵盤缺口：過期預購仍「加入購物車」；縮圖與主圖放大是 div onclick；燈箱無 role／關閉鈕／Esc、alt 空；模板無 <main id="main">，跳到主要內容不會出現；手機箭頭 36px。（harden）

## Persona Red Flags
Casey：拇指只碰得到 LINE；加入購物車要上滑 200px；座標誤觸跳頁；箭頭 36px、麵包屑 11px。
Jordan：米旨、精米步合、酵母未公開沒解釋；本頁無搭餐／溫度（.pdp-serve 只有 21 頁）；沒有「適合誰、什麼場合」。
Riley：過期預購可加入；2 瓶組合只畫一個風味點；375px h1 斷成「冷卸 山／田錦」；17% vs 16%；燈箱卡焦點；16 支烈酒無座標。
送禮者：無包裝／提袋／禮盒資訊；不連到 /wineries/ 酒造故事；「店長精選」徽章沒說意思；送達時間要問 LINE 且要重講酒名。

## Minor Observations
product-page.css 檔頭註解仍寫 3px 小圓角舊語彙；規格「類型」與徽章重複、「產地：日本」可細到縣；桌面加入購物車提示框蓋到座標文字欄；第一張縮圖 lazy 常空白；「相關商品」太泛，可寫「同酒造：鳳凰美田」再加「口味相近」；紅酒頁 inline 推薦框偏離 token；body.scrollWidth 381 由隱藏的 .pdp-map-tip 造成（已被 clip）。

## Questions to Consider
1. 風味座標是唯一視覺重點，手機為什麼要捲過 374px 海報、標題、價格、兩顆按鈕才看到？能否在標題下放一行可點的口味標籤直接跳到座標？
2. 44 個點是導航還是閱讀？改成「同一格還有 6 支 →」會不會更好？
3. 「品鑑師試飲後才上架」能否變成每支一句真實的「為什麼選它」，取代部分 9 列規格表？
4. 廠商海報主圖是品牌的一部分嗎？若不是，是否另拍和紙底去背瓶照，讓黃昏酒桌延續到商品頁？
