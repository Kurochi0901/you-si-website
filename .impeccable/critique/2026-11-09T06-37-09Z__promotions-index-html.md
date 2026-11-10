---
target: 優惠活動頁
total_score: 19
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\jason\\Desktop\\酒\\you-si-website\\promotions\\index.html"
target_fingerprint: "sha256:50261fceb460c7d1dd564fd01b8ed96e04245875c18a74b22ab492332b8438ed"
target_path: "C:\\Users\\jason\\Desktop\\酒\\you-si-website\\promotions\\index.html"
timestamp: 2026-11-09T06-37-09Z
slug: promotions-index-html
---
# Critique: /promotions/ (Persuade) — 2026-11-09
Method: dual-agent. Score 19/36 (heuristic 7 n/a) — Acceptable.
Heuristics: 1=3 2=3 3=2 4=1 5=2 6=2 7=n/a 8=2 9=2 10=2
Specificity: legacy generic e-commerce template; not in 黃昏酒桌 world.
Priority issues:
- [P1] Not in design system: Bootstrap status badges (style.css:3267-3269), .promo-card 12px hard border + gradient, amber gradient .btn-primary (white text 1.9-3.1:1), emoji headings, no Noto Serif TC. -> polish/typeset
- [P1] Ended promotions occupy ~1,500px with grayscale banners; "點我查看活動酒單" banner not clickable. Collapse into 過去的活動 details, text rows only. -> distill
- [P1] Mobile 375: .price-now NT$948 overlapped by .btn-add inside .promo-card. -> adapt
- [P2] Active promo lacks how-to-buy reassurance (auto-applied, NT$2,800 free shipping, LINE confirm); products collapsed by default. -> clarify
- [P2] Data/copy contradictions: 國慶 summary 10/31 vs endAt 10-29; 貓咪 NT$2,600 vs 87折. -> clarify
- [P2] Banners lack width/height (CLS ~319px), first banner lazy above fold. -> optimize
Minor: kicker-above-heading x2 (2.9:1), dates YYYY-MM-DD, dev copy in empty state, FAQ JSON-LD stale (owner decision).
Personas: first-timer (no coupon/how-to), gift buyer (no lead time/price bands), mobile (price overlap, 14-card wall).
