---
target: 酉時圖書館列表與文章頁
total_score: 20
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\jason\\Desktop\\酒\\you-si-website\\blog\\index.html"
target_fingerprint: "sha256:0cbb5aa4bd150dfe2cb63d4d336e483a188229e1d7c4f64a4f06576a085785d4"
target_path: "C:\\Users\\jason\\Desktop\\酒\\you-si-website\\blog\\index.html"
timestamp: 2026-11-09T06-37-09Z
slug: blog-index-html
---
# Critique: /blog/ list + article template (Read) — 2026-11-09
Method: dual-agent. Score 20/40 — Acceptable.
Heuristics: 1=2 2=3 3=2 4=1 5=2 6=2 7=1 8=3 9=2 10=2
Specificity: half-bespoke (酉時圖書館 naming, voice, illustrations) on a generic magazine skeleton; pre-soft visual language.
Priority issues:
- [P1] Mobile: <nav class="breadcrumbs"> hijacked by global ≤860 nav menu rule (style.css:528) → white 174px panel over footer on all 9 articles. Scope menu rules to .header nav. -> adapt
- [P1] Not in design system: h1 Noto Sans 800, h2 5px border-left, .btn-inline-cta amber gradient (1.9-3.1:1), cold badges .badge-news/.badge-flash, .filter-pill.active 3.1:1. -> polish/typeset
- [P1] Beginner path buried: renderBlogGrid sorts by date only; 入門指南 is card 9/9. Add 從這裡開始 row. -> layout
- [P2] .filter-pill are <span> (no keyboard); 2 categories with 0 articles; empty state inline #999 without reset. -> harden
- [P2] Mobile list cards: 120px cover, contain, titles truncated. -> adapt
- [P2] Article template: no <main>, cover lazy (LCP) while related product images eager+high priority, .article-figure UA margins 40px, mobile hero margin-top 68px. -> optimize/layout
- [P3] 秋季限定 CTA links to all sake; internal target=_blank; related grid 4-in-3 orphan.
Minor: hidden SEO h2 display:none (owner decision), mixed illustration styles.
Personas: sake beginner (start point buried, CTAs lack flavor), mobile (breadcrumb panel, truncated titles).
