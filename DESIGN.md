---
name: 酉時喝酒 YOU-SI
description: 日系酒款選品官網——黃昏酒桌般溫暖、安靜、讓人選得下手
colors:
  jiaocha: "#5c4a32"
  yousi-gold: "#c9a87a"
  yousi-gold-soft: "#e3cda4"
  gold-text: "#7a5a35"
  washi-paper: "#fbf6ea"
  page-bg: "#faf7f4"
  card-white: "#ffffff"
  warm-white: "#fffdf9"
  ink: "#231a12"
  ink-soft: "#4a3f35"
  muted: "#7a6f66"
  line: "#ece6df"
  field-line: "#e4d9c6"
  field-edge: "#9f8b72"
  error-red: "#a1372b"
  pick-dark: "#2d1f0e"
  pick-cream: "#f5e0c0"
  legacy-amber: "#b48a63"
  legacy-amber-light: "#d6b79b"
  dusk-sand: "#f6ead2"
  dusk-honey: "#eed7ae"
  dusk-amber: "#dcb37c"
  dusk-ink: "#4a3826"
  dusk-ink-deep: "#3e3227"
  dusk-muted: "#6b5740"
typography:
  display:
    fontFamily: "Noto Serif TC, Songti TC, PMingLiU, serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "0.04em"
  headline:
    fontFamily: "Noto Serif TC, Songti TC, PMingLiU, serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.04em"
  title:
    fontFamily: "Noto Serif TC, Songti TC, PMingLiU, serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.04em"
  item-name:
    fontFamily: "Noto Sans TC, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
  price:
    fontFamily: "Noto Sans TC, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 900
    fontFeature: "tnum"
  body:
    fontFamily: "Noto Sans TC, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "Noto Sans TC, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Noto Sans TC, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    letterSpacing: "0.04em"
rounded:
  tag: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  card: "18px"
  lg: "20px"
  pill: "999px"
spacing:
  gutter: "18px"
  card-gap: "16px"
  block-head: "20px"
  section: "56px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.jiaocha}"
    textColor: "{colors.washi-paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.washi-paper}"
  button-line:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.jiaocha}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.washi-paper}"
    textColor: "{colors.jiaocha}"
  button-add-card:
    backgroundColor: "{colors.jiaocha}"
    textColor: "{colors.washi-paper}"
    rounded: "{rounded.pill}"
    padding: "10px 12px"
  button-legacy-amber:
    backgroundColor: "{colors.legacy-amber}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.pill}"
    padding: "10px 12px"
  input-field:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "11px 14px"
    height: "48px"
  card-product:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  tag-pick:
    backgroundColor: "{colors.pick-dark}"
    textColor: "{colors.pick-cream}"
    rounded: "{rounded.pill}"
    padding: "3px 12px"
  nav-link:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "8px 10px"
  flavor-map:
    backgroundColor: "{colors.washi-paper}"
    rounded: "{rounded.lg}"
  dusk-pick:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 38px 12px 16px"
  dusk-reel-add:
    backgroundColor: "{colors.jiaocha}"
    textColor: "{colors.washi-paper}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "32px"
---

# Design System: 酉時喝酒 YOU-SI

## Overview

**Creative North Star: "黃昏酒桌"**

酉時是夜幕將臨、一天慢下來的時刻。整個介面就是那張擺好的酒桌：米白和紙般的底色、焦茶色的木質重量、一道細細的酉時金描邊，光線溫暖但不刺眼。頁面不催促，而是像店主把酒一支支擺上桌、說清楚每一支是什麼味道，讓入門者與送禮的人都選得下手。

密度屬於「好逛的選品店」：商品卡片整齊排列、資訊精簡（品名、一句話、口味短語、價格、加入購物車），重心放在一個真正有用的視覺重點上，也就是**風味座標**。其餘一律安靜。2026-11 的柔和版是現行標準：大圓角、暖棕色的柔和陰影取代硬線，按鈕是膠囊形，懸停時輕輕浮起、按下時微微下沉。「金縁和紙」的雙細線框保留給簽名元件（風味座標、下單傳票），不再當成全站通用的框線語言。

已確認拒絕的方向：**大型量販風**（紅黃促銷、爆炸標籤、滿版折扣字）與**冷調科技風**（灰藍、純白、過度極簡的 SaaS 感）。

**Key Characteristics:**
- 暖白和紙底＋焦茶主色＋酉時金細線，全站沒有冷色。
- 標題用明朝體（Noto Serif TC）呼應酒標，內文與介面用 Noto Sans TC。
- 柔和陰影一律帶暖棕色調（rgba 92,74,50），不使用純黑陰影。
- 每個畫面只有一個視覺重點；其他元素退後。首頁首屏的重點是「本月精選輪盤」，往下捲到「用口味找酒」時才輪到風味座標。
- 動態輕、短、可關閉（全面支援 `prefers-reduced-motion`）。

## Colors

一組從和紙、木桶與黃昏光線取色的暖色系：單一深色主色、單一金色點綴，其餘都是帶黃調的中性色。

### Primary
- **焦茶**（jiaocha）：所有主要動作的實色，包括加入購物車、搜尋、送出訂單、手機底部列、免運達成時的進度條。也用在選中狀態的內框、焦點外框與「本款」圓點。懸停時加深為墨色（ink）。

### Secondary
- **酉時金**（yousi-gold）：細線與點綴，例如簽名元件的外框、免運進度條的填色、聚焦光暈的色源、推薦徽章的描邊。它是線與光，不當大面積底色。
- **酉時金・淡**（yousi-gold-soft）：雙線框的內線與連結底線，比酉時金更退後一層。
- **金褐字**（gold-text）：在和紙底上需要金色感的文字，例如座標軸、口味短語、商品數量。對比 ≥ 4.5:1，用來取代直接拿酉時金當文字色。

### Tertiary
- **店長精選深棕**（pick-dark）＋**奶油金**（pick-cream）：只用在最高優先級（priority 5）的「✦ 店長精選」徽章。
- **舊琥珀漸層**（legacy-amber → legacy-amber-light，90deg）：舊版主要按鈕的金色漸層，導覽列與部分舊頁面仍在使用。保留為**次要樣式**，不再是主要動作的顏色。
- **黃昏漸層**（dusk-sand → dusk-honey → dusk-amber，118deg；手機 170deg）：只用在首頁首屏，像傍晚斜射進來的光，酒款後方疊一圈 `rgba(255,240,212,.85)` 的暖光。漸層上的文字用**黃昏墨**（dusk-ink，標題與問句）與**黃昏墨・深**（dusk-ink-deep，說明文字），比一般的墨・淡多一點暖褐。輔助數字（例如輪盤的「29 支」）用**黃昏灰褐**（dusk-muted），在漸層上仍有 4.9:1 以上。

### Neutral
- **和紙**（washi-paper）：簽名元件底色、懸停底色、主色按鈕上的文字色。
- **頁面底**（page-bg）：全站 body 背景，比和紙更淡、更中性。
- **卡片白**（card-white）與**暖白**（warm-white）：卡片與次要按鈕用純白；輸入框靜止時用暖白，聚焦後才轉成純白。
- **墨**（ink）：主要文字與標題，也是焦茶按鈕的懸停色。
- **墨・淡**（ink-soft）：段落內文、導言。
- **灰褐**（muted）：說明文字、規格、導覽連結、麵包屑。
- **細線**（line）與**欄位線**（field-line）：分隔線與裝飾性的淡框，都帶暖調。
- **欄位外框**（field-edge）：輸入框邊框、取貨卡片上未選取的圓圈。對暖白／白 ≥3:1（WCAG 1.4.11），讓人看得出欄位在哪。
- **錯誤紅**（error-red）：表單驗證錯誤，搭配 4px 的淡紅光暈。

### Named Rules
**The 無冷色 Rule.** 全站沒有藍、灰藍或中性冷灰。即使是錯誤狀態也用磚紅（error-red），不用正紅。
**The 金是光不是牆 Rule.** 酉時金只用在 1–1.5px 的線、進度條、徽章描邊與光暈。需要「金色文字」時改用金褐字（gold-text）。
**The 一個焦茶 Rule.** 同一個視野裡只有一個焦茶實色的主要動作；第二個動作用白底膠囊（button-line）。

## Typography

**Display Font:** Noto Serif TC（備用 Songti TC、PMingLiU、serif）
**Body Font:** Noto Sans TC（備用 system-ui、-apple-system、Segoe UI、sans-serif）

**Character:** 明朝體帶著酒標的書法感，只用在標題與品名的「說故事」層；黑體負責所有可操作、可掃讀的資訊。兩者都用 600–700 的字重，不用極細體。

### Hierarchy
- **Display**（600，34px，行高 1.45，字距 .04em）：商品頁品名 h1，明朝體。
- **Headline**（600，24px，行高 1.4）：首頁區塊標題（本月精選、用口味找酒），明朝體。
- **Title**（600，18–20px）：商品頁段落標題、酒類快捷列名稱，明朝體。
- **Item name**（700，16px）：商品卡品名，黑體。
- **Price**（900，20px，tabular-nums）：現價；原價 14px 灰色刪除線。
- **Body**（400，15px，行高 1.9）：導言與內文，最寬約 36em；About 頁長文用到行高 2.1。
- **Label**（400，12–13px）：規格、口味短語、提示、麵包屑；徽章 10px／700。

### Named Rules
**The 明朝說故事 Rule.** 襯線字只給標題與品名。按鈕、價格、表單、標籤一律用黑體。
**The 16px 輸入 Rule.** 所有輸入框字級至少 16px，避免 iPhone 聚焦時自動放大頁面。

## Layout

- 容器最寬 1200px（下單頁 1120px），左右內距 18px。
- 首頁區塊上下間距 56px；區塊標題與內容間距 20px，標題列左邊放標題、右邊放「看全部」連結（以基線對齊）。
- 商品以卡片網格呈現，桌面 5 欄。
- 主要斷點 860px：以下切換為手機版，導覽收進漢堡選單，酒類快捷列改成兩欄，底部出現固定的購物車／LINE 列。次要斷點 640px、520px 用於細部調整。
- header 與公告列都是 sticky，固定元素（如下單頁摘要）需讓出這段高度（約 96–132px）。
- 頁面底部有固定的飲酒警語列，body 為它預留下方空間。

## Elevation & Depth

柔和、分層的立體感：表面靠暖棕色的模糊陰影浮在頁面底上，而不是用硬邊框圍起來。陰影屬於氛圍，不是結構，所以都很淡（不透明度 .06–.08），只有焦茶按鈕帶比較明顯的陰影（.18），讓主要動作看起來可以按。

### Shadow Vocabulary
- **柔和陰影**（`box-shadow: 0 10px 30px rgba(92,74,50,.08)`）：圖片主圖、風味座標、懸停後的卡片與選項。
- **柔和陰影・小**（`box-shadow: 0 4px 14px rgba(92,74,50,.07)`）：搜尋列、預算膠囊、縮圖、選中的分頁。
- **按鈕陰影**（`box-shadow: 0 6px 16px rgba(92,74,50,.18)`）：焦茶主要按鈕靜止狀態；懸停時加深為 `0 10px 22px rgba(92,74,50,.22)`。
- **聚焦光暈**（`box-shadow: 0 0 0 4px rgba(201,168,122,.28)`）：輸入框聚焦。
- **卡片陰影（舊）**（`box-shadow: 0 10px 24px rgba(17,12,8,.06)`）：商品卡靜止狀態，沿用自舊版變數。

### Named Rules
**The 暖影 Rule.** 陰影色一律取自焦茶（92,74,50），不用純黑或冷灰。
**The 陰影取代硬線 Rule.** 需要區隔時先用陰影或和紙底色，不加新的實線框；實線只留在簽名元件的雙線框上。

## Shapes

柔和、圓潤的形體語言。

- 按鈕、搜尋列、導覽連結、分頁切換、徽章：全膠囊（999px）。
- 商品卡：18px；風味座標與大型容器：20px；選項卡與下單摘要：16px；輸入框、提示框：12px；小元件：8px。
- 舊版文字小標籤保留 4px 小圓角，屬於例外。
- 簽名雙線框：外層 1px 酉時金實線，內層以 `inset 0 0 0 3px 和紙, inset 0 0 0 4px 酉時金・淡` 畫出第二道細線，像酒標的金邊。
- 圓點只用在風味座標上標示本款位置（焦茶實心圓），是圖表資料，不是裝飾。2026-11-09 起口味短語、說明列、段落標題前**不加任何圓點或圖示**（使用者覺得雙圈圓點不好看）；段落需要起點感時，用標題上方一道 32px、1.5px 的酉時金短線。

## Components

### Buttons
溫和、可按、按下有回饋。
- **Shape:** 全膠囊（999px），文字 700、字距 .04em。
- **Primary（焦茶）:** 焦茶底、和紙色字，帶按鈕陰影。商品頁主按鈕高度 48px、左右 24px；商品卡「加入購物車」較小（10px 12px，13px 字）。
- **Hover / Active / Focus:** 懸停時底色轉成墨色、上浮 1px、陰影加深；按下時縮成 .97–.98 倍；焦點用 2px 焦茶外框、偏移 2–3px。
- **Line（次要）:** 白底、焦茶字、1px 酉時金框；懸停時底色轉成和紙、框線轉成焦茶。用於「LINE 詢問這款酒」等第二動作。
- **Legacy amber（次要樣式）:** 琥珀 90deg 漸層、白字，用在導覽列等舊頁面。可以保留，但不放在主要購買動作上。

### Chips / Tags
- **店長精選:** 深棕底、奶油金字、1.5px 酉時金描邊、膠囊形，10px／700，前面加「✦」。
- **推薦:** 透明底、深金褐字（#8a5e16）、1.5px 酉時金描邊、膠囊形。
- **預算膠囊:** 白底、淡金線、小柔和陰影；懸停時框線轉成酉時金並上浮。

### Cards / Containers
- **Corner Style:** 18px。
- **Background:** 卡片白，1px rgba(0,0,0,.05) 極淡邊。
- **Shadow Strategy:** 靜止時用舊卡片陰影，懸停時浮起（見 Elevation）。
- **Content order:** 徽章 → 品名 → 一句話規格 → 口味短語（金褐字，前面不加圓點）→ 價格列（現價＋原價）＋加入購物車。
- **Overflow:** 卡片設為 visible，好讓活動徽章外溢；圖片圓角由內層的圖片容器自己裁切。

### Inputs / Fields
- **Style:** 暖白底、1px 欄位外框（field-edge）、12px 圓角、最小高度 48px、內距 11px 14px、字級 16px。
- **Focus:** 框線轉成焦茶，外加 1px 焦茶線與 4px 金色光暈（`0 0 0 1px 焦茶, var(--focus-glow)`），底色轉成純白。光暈是氛圍，焦茶線才是看得清的焦點指示（金色只有 2.1:1）。
- **Error:** 框線轉成錯誤紅，外加 1px 錯誤紅線與 4px 淡紅光暈 rgba(161,55,43,.12)，下方顯示 13px／600 的紅字訊息。
- **Search:** 左半輸入框與右半焦茶按鈕組成一整條膠囊。
- **Choice cards（取貨方式／溫層）:** 淡金框＋小柔和陰影；選中時出現 1px 焦茶內框。

### Navigation
- **Desktop:** 白底 sticky header，底部有極淡的分隔線與 `0 2px 16px rgba(0,0,0,.04)` 陰影。Logo 用 15px／800、字距 .12em。連結為 14px 灰褐字、膠囊形；懸停底色 #f6f1eb，目前頁面為淡米色底、墨色粗體。
- **Mobile（≤860px）:** 漢堡按鈕（白底、細線框、12px 圓角）；底部固定列放購物車摘要與焦茶「LINE 詢問推薦」膠囊，購物車為空時只顯示 LINE 按鈕。
- **公告列:** 最上方一行，例如促銷檔期。

### 首屏「黃昏酒桌」與本月精選輪盤（Signature Component）
首頁第一個畫面：左邊是品牌句（明朝體「酉時，是夜幕將臨、一天慢下來的時刻。」）、一句「品鑑師試飲認可後才上架」、「今晚想喝什麼口味？」與 4 個口味選項；右邊是本月精選輪盤。底色是黃昏漸層。
- **口味選項（dusk-pick）：** 暖白半透明卡、16px 圓角、帶暖影；第一行品名（16px／700），第二行是金褐字的口味描述，右上角是款數。點了會切到下方「用口味找酒」的對應格子。手機改成 2×2，拿掉款數與箭頭。
- **輪盤：** priority 5 全部是靜態連結（由 `build.js` 寫入），JS 才排成扇形：中間一支最大，兩側每遠一支就縮小 16%、傾斜 5°、變淡，舞台兩側用遮罩淡出。可以拖曳或滑動，也會每 3.6 秒自動慢轉；滑鼠停留、鍵盤操作、手指按住時暫停，右上角有暫停鍵，系統開啟「減少動態效果」時不自動轉。
- **說明列：** 品名、口味、價格、焦茶膠囊「加入購物車」固定單行，口味過長以「…」截斷，換酒時高度不變。手機把 ‹ › 移到酒的兩側。
- **標題：** 「本月精選 N 支」疊在輪盤左上，明朝體 19px（手機 16px），與 meta description、ItemList 結構化資料的名稱一致。

### 風味座標（Signature Component）
商品頁與首頁「用口味找酒」共用同一套，是商品頁唯一的視覺重點。正方形、和紙底、20px 圓角、簽名雙線框＋柔和陰影。軸線文字用金褐字（左右直書、上下橫書），格子用點陣表示酒款分佈，本款以焦茶圓點標記，選中的格子用 1.5px 焦茶內框。首頁上方的分頁切換是和紙底的膠囊列，選中的分頁轉成白底、焦茶字並帶小柔和陰影。

### 下單傳票（Signature Component）
下單頁右側的「你的酒款」摘要，像酒屋開給客人的傳票：和紙底、酉時金框、16px 圓角、柔和陰影、淡分隔線；桌面版會黏在畫面上，手機版改為一般排列。

### 商品列表頁（/products/ 與五個分類頁，2026-11）
樣式在 `assets/css/catalog.css`，互動在 `assets/js/catalog-page.js`。順序：麵包屑（13px，與 BreadcrumbList 同名）→ 標題＋一句導言（其餘導言收進「更多說明」）→ 分類分頁 → 工具列 → 左欄目錄＋右欄（店主挑好的兩排 → 依酒造分章）。
- **分類分頁：** 白底膠囊、欄位線框，目前分類為焦茶底和紙字；款數用 12px 灰褐字跟在名稱後。手機橫向捲動。
- **工具列：** 搜尋框與預算、排序下拉都是 48px、12px 圓角、欄位外框（field-edge）、16px 字。口味是兩軸分段膠囊（原生 radio），每軸分「不限＋三段」，軸名用金褐字；只有有風味刻度的分類（清酒、茶酒與果實酒、葡萄酒）才出現。
- **精選排（店長精選、活動中）：** 明朝體 22px 排名＋灰褐說明；卡片橫向捲動、scroll-snap，右緣淡出提示還有。少於 2 款就不擺。
- **酒造章：** 861px 以上是兩欄：左側 52px 是直書（vertical-rl）明朝體 24px 酒造名、字距 .18em，右側一道 1px 酉時金細線隔開，捲動整章時名字會黏住；右欄是金褐字的「全名 ・ 產地 ・ 款數」與酒卡。整個分類只有一個產地時（例如清酒都是日本）不寫產地。860px 以下改橫書，上方一道 32px、1.5px 酉時金短線。只有 1 款的品牌集中到最後的「更多酒造」，卡片上補一行金褐字酒造名。總覽頁的章節是五個酒類，每類先列 10 款。
- **酒造目錄（簽名動作）：** 標題「目錄」。桌機左欄 200px、sticky，從首屏就看得到，先列精選排、一道 1px 酉時金・淡細線、再列各章；捲動時目前章節轉成白底、粗體、小柔和陰影。1023px 以下改成章節名膠囊橫排（分隔改成直線），一樣黏在 header 下方（頁底色＋淡陰影），目前章節的膠囊會自動捲進畫面。黏住的位置由 JS 量 header 實際下緣（`--ct-toc-top`，重疊 1px），因為 header 高度隨寬度在 62–65px 之間，不要寫死。
- **精選排裡的卡片**不再顯示「✦ 店長精選」標籤（排名已經說了）；活動說明列不帶 emoji。
- **手機（≤860px，2026-11-10）：** 商品卡在列表頁是兩欄直式卡：圖框 1:1 撐滿卡寬（商品圖都是 1:1，不留白）、品名兩行、口味短語一行、價格＋「加入」小膠囊；一句話規格收起。工具列只留搜尋＋「篩選・排序」按鈕（帶已套用條件數），口味、預算、排序點了才攤開。精選排是 148px 窄直卡；已在「店長精選」的酒不重複出現在「活動中」。超過 2 款的酒造章排成一列左右滑（同 148px 窄直卡），章頭右側「展開全部 N 款」原地變回兩欄、再按「收合」；2 款以下的章與篩選結果維持兩欄。手機卡片不顯示活動徽章（看「活動中」那排）。目錄改成文字分頁＋2px 焦茶底線（不是膠囊，和分類分頁分開）。購物車是空的時候，底部 LINE 列縮成右下角一顆「LINE 詢問」小膠囊。
- **篩選結果：** 有搜尋、口味或預算條件時，精選排與章節收起，換成一整片結果格線與「符合條件 N 款」，旁邊有「清除條件」；沒有結果時是和紙底提示框。

## Do's and Don'ts

### Do:
- **Do** 把焦茶實色留給每個視野裡唯一的主要動作；第二個動作用白底膠囊（button-line）。
- **Do** 讓陰影帶暖棕色調（rgba 92,74,50），不透明度保持在 .06–.08；只有主要按鈕用到 .18。
- **Do** 在和紙底上需要金色文字時用金褐字（gold-text），確保對比 ≥ 4.5:1。
- **Do** 每個可互動元件都寫 `:focus-visible`（2px 焦茶外框）與 `prefers-reduced-motion` 的關閉規則。
- **Do** 在按鈕上明確寫 `font-family: inherit`，否則瀏覽器會退回 Arial（商品卡「加入購物車」已於 2026-11-09 補上）。
- **Do** 新頁面沿用 `--r-*`、`--soft-shadow*`、`--btn-shadow*`、`--focus-glow`、`--ease-soft` 這組共用變數，不要再寫死數值。品牌色也一樣：`--jiaocha`、`--yousi-gold`、`--yousi-gold-soft`、`--gold-text`、`--washi`、`--warm-white`、`--ink-soft`、`--field-line`、`--field-edge`、`--error-red`（定義在 style.css `:root`），頁面 CSS 不要再各自定義一份。

### Don't:
- **Don't** 做成大型量販風：不用紅黃促銷色、爆炸形標籤、滿版折扣大字。促銷用公告列與小徽章表達即可。
- **Don't** 做成冷調科技風：不用灰藍、冷灰、純白大底，也不要過度極簡的 SaaS 版面。
- **Don't** 把新元件做回 3px 小圓角加硬線框；那是柔和版之前的舊語彙，雙線框只留給風味座標與下單傳票。
- **Don't** 把舊琥珀漸層用在加入購物車、送出訂單等主要購買動作。
- **Don't** 在同一個畫面放兩個搶眼的視覺重點（首頁首屏是輪盤，商品頁是風味座標）。
- **Don't** 把黃昏漸層用到首頁首屏以外的地方；其他區塊維持和紙底。
- **Don't** 用明朝體寫按鈕、價格或表單文字。
