---
target: 商品頁
total_score: 25
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\jason\\Desktop\\酒\\you-si-website\\products\\sake\\鳳凰美田-純米吟釀-冷卸-山田錦\\index.html"
target_fingerprint: "sha256:b83d55cfd953065a74b0e82bd9d39570c1b6331ab11dddc8bf9d64cb8b6c5ce8"
target_path: "C:\\Users\\jason\\Desktop\\酒\\you-si-website\\products\\sake\\鳳凰美田-純米吟釀-冷卸-山田錦\\index.html"
timestamp: 2026-11-09T02-32-19Z
slug: products-sake-index-html
---
Method: dual-agent (A: design-review subagent · B: detector+browser subagent)

# 商品頁 Critique（第二次）：酉時喝酒 YOU-SI
代表頁：products/sake/鳳凰美田-純米吟釀-冷卸-山田錦/（build.js 模板）。抽看烈酒「黑木本店 百年孤獨」、預購「水芭蕉」。業主決定這輪不處理的內容（酒精度不一致、過期預購、酵母未公開、相簿宣傳圖）不扣分。

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | 手機加入後底部列很好；桌面加入後按鈕不變、提示 3.5 秒消失，只剩頁首小圖示 |
| 2 | Match System / Real World | 3 | 怎麼買、軸線白話說明好；冷卸、精米步合未解釋 |
| 3 | User Control and Freedom | 3 | 座標先選再前往、dialog Esc 回焦點；放大裡不能換張 |
| 4 | Consistency and Standards | 2 | LINE 四種名稱；「✦ 推薦」與「✦ 店長精選」同樣式；預購按鈕「加入預購」但步驟寫「加入購物車」 |
| 5 | Error Prevention | 2 | 手機底部列同位置在「加入購物車」與「LINE 詢問推薦」間切換，實測誤開 LINE；座標點 19px、間距 11px |
| 6 | Recognition Rather Than Recall | 3 | 說明列帶酒名口味價格 |
| 7 | Flexibility and Efficiency | 2 | 44 個座標點都是 Tab 停點；桌面捲動後無購買入口 |
| 8 | Aesthetic and Minimalist Design | 3 | 安靜合品牌；「怎麼買」視覺重量壓過座標 |
| 9 | Error Recovery | 2 | 加入無復原；誤開 LINE 無退路 |
| 10 | Help and Documentation | 3 | 怎麼買＋軸線說明清楚；保存方式只在 JSON-LD |
| Total | | 25/40 | Acceptable（62.5%） |

## Design Specificity Verdict
視覺語言是品牌自己的（明朝品名、金縁和紙座標、焦茶膠囊、暖影），但構圖仍是通用商品頁；簽名元件座標在 1440×900 頂端 y=855 正好被警語列切掉，手機在 y=1502，墨暈動畫在畫面外播完。上一輪加入的「怎麼買」把座標再往下推。
Detector: CLI 3 頁 23 筆（broken-image 2＝dialog 內未開啟的 #pdpZoomImg、cramped-padding 4、cream-palette 3、marquee 3、dark-glow 3、design-system-* 8 多為停售頁「安娜詠」的獨立樣式）。除「省 $X」膠囊邊框色、獎項文字色外皆誤報。overlay 桌面 1（cream-palette）、手機 2（另一筆 text-occlusion 是固定警語列切到頁內加入購物車）。量測：手機第一屏 h1 完整、價格只露 11px、底部列「加入購物車 NT$1,750」；小於 44px 的可點元素主要是 44 個座標點（9×9，點擊區 19×19）；無主控台錯誤、無實際水平捲動。

## Priority Issues
- [P1] 風味座標被「怎麼買」壓到第一屏外，墨暈在畫面外播完：在品名價格附近放一行口味結論（● 甘辛適中，偏果香 看風味座標 ↓）；「怎麼買」縮成按鈕下一行＋可展開，或移到座標之後；墨暈改進入畫面才播。（layout / distill）
- [P1] 手機底部列同一位置在「加入購物車」與全寬「LINE 詢問推薦」之間變形，捲回頂端立刻點會誤開 LINE；兩個 LINE 名稱不同。修法：底部列不變形，LINE 永遠是右側小按鈕，頁內按鈕可見時購買鈕讓位或整條淡出；文字統一「LINE 詢問這款酒」。（harden / adapt）
- [P2] 座標點 9px、點擊區 19px、間距 11px；44 個 Tab 停點。修法：互動單位改成格（有酒的格是按鈕，點下列出該格酒款），單點改裝飾，整張座標一個 Tab 停點＋方向鍵。（harden / clarify）
- [P2] 桌面加入後沒有延續狀態；1024×768 sticky 相簿縮圖落在視窗外。修法：按鈕下方常駐「已加入 1 件・購物車 NT$1,750 前往填寫詢問單 →」；相簿主圖依視窗高度限高。（clarify / layout）
- [P2] 烈酒 16 支沒有座標也沒有替代：做同語彙的「風味筆記」卡（一句口味、飲法、溫度）或定義烈酒自己的軸。（clarify / bolder）

## Persona Red Flags
Casey：底部列變形誤開 LINE；座標點不準；放大只有約 1.15 倍且不能換張；.pdp-zoom 繼承 touch-action: manipulation，主圖左右滑需實機確認。
Jordan：冷卸、精米步合沒解釋；這支無搭餐與溫度；口味結論要捲 1.5 屏。
Riley：44 次 Tab 越過座標；預購步驟文字不一致；推薦與店長精選同樣式；長品名 tooltip nowrap 可能超出手機；觸控選點後 hover tooltip 與說明列重複酒名。
送禮者：商品頁與下單頁沒有禮盒／包裝／寄給收禮人與到貨天數資訊。

## Minor Observations
麵包屑分隔符號 #ccc 冷灰；手機張數「1 / 4」疊在主圖底部警語條上；宣傳圖縮圖載入 800px 原圖；公告列內容與酒款無關；產地只寫日本。業主這輪不處理的內容：酒精度不一致、過期預購、酵母未公開、相簿宣傳圖。

## Questions to Consider
1. 已經買過十次的 LINE 熟客也要每次讀三步驟？
2. 入門者要的是「我會不會喜歡」，能否用熟客常回購的一支當參考點（比〇〇更偏果香）？
3. 空購物車時底部列有什麼理由變成 LINE？
4. 烈酒是否該有自己的簽名元件（飲法與溫度）？
