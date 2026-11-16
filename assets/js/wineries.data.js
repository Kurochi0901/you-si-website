/**
 * 酒造／酒莊資料（/wineries/ 總覽與 /wineries/<slug>/ 各頁的唯一資料來源）
 *
 * 只給 build.js 讀：頁面是 build 時產生的靜態 HTML，瀏覽器不載入這支檔案。
 * 改完內容要跑 node build.js。
 *
 * grid  ：日本縣格地圖 [縣, 欄, 列, 緯度]（13×13 方格，緯度取縣廳所在地；沒緯度的縣只畫格子）
 * route ：由北往南的路線 [地域, [[縣或國家, [酒造...]]]]
 *         酒造 { slug: 網址, mei: 銘柄, kura: 酒造名, wid: 商品的 wineryId, only: 只收這幾支商品 id（同一 wineryId 拆成兩家時用） }
 * story ：每家的故事（每一條都查得到來源；查不到或說法不一的不寫）
 *         one 一字主題｜hook 首屏一句｜about 介紹長文＋小檔案｜timeline 年表｜name 名字由來｜place 風土
 *         craft 工法與一句話｜cycle 循環圖｜teamap 茶產地圖｜photos 公開授權照片｜sources 資料來源
 *         order 模組順序（就是頁面結構）｜tone 酒標色 [底, 字, 次要字, 點綴]（只用暖色）、dark 深底
 *
 * ⚠️ 照片目前直接連維基共享資源（Wikimedia Commons），上線公開前要搬到 Cloudinary。
 * ⚠️ 新增商品時若 wineryId 是新的酒造，要在 route 與 story 補上，否則那支酒不會出現在任何酒造頁。
 */
window.WINERIES_DATA = {
 "grid": [
  [
   "北海道",
   12,
   0,
   43.1
  ],
  [
   "青森",
   11,
   1
  ],
  [
   "秋田",
   10,
   2,
   39.7
  ],
  [
   "岩手",
   11,
   2,
   39.7
  ],
  [
   "山形",
   10,
   3,
   38.2
  ],
  [
   "宮城",
   11,
   3,
   38.3
  ],
  [
   "石川",
   7,
   4
  ],
  [
   "富山",
   8,
   4,
   36.7
  ],
  [
   "新潟",
   9,
   4,
   37.9
  ],
  [
   "福島",
   10,
   4,
   37.8
  ],
  [
   "福井",
   7,
   5
  ],
  [
   "岐阜",
   8,
   5,
   35.4
  ],
  [
   "長野",
   9,
   5
  ],
  [
   "群馬",
   10,
   5,
   36.4
  ],
  [
   "栃木",
   11,
   5,
   36.6
  ],
  [
   "島根",
   3,
   6
  ],
  [
   "鳥取",
   4,
   6
  ],
  [
   "兵庫",
   5,
   6
  ],
  [
   "京都",
   6,
   6,
   35
  ],
  [
   "滋賀",
   7,
   6,
   35
  ],
  [
   "愛知",
   8,
   6,
   35.2
  ],
  [
   "山梨",
   9,
   6,
   35.7
  ],
  [
   "埼玉",
   10,
   6
  ],
  [
   "茨城",
   11,
   6
  ],
  [
   "山口",
   2,
   7
  ],
  [
   "廣島",
   3,
   7
  ],
  [
   "岡山",
   4,
   7
  ],
  [
   "大阪",
   5,
   7
  ],
  [
   "奈良",
   6,
   7
  ],
  [
   "三重",
   7,
   7,
   34.7
  ],
  [
   "靜岡",
   8,
   7,
   35
  ],
  [
   "神奈川",
   9,
   7
  ],
  [
   "東京",
   10,
   7
  ],
  [
   "千葉",
   11,
   7
  ],
  [
   "福岡",
   1,
   8,
   33.6
  ],
  [
   "愛媛",
   3,
   8
  ],
  [
   "香川",
   4,
   8
  ],
  [
   "德島",
   5,
   8
  ],
  [
   "和歌山",
   6,
   8
  ],
  [
   "長崎",
   0,
   9
  ],
  [
   "佐賀",
   1,
   9,
   33.2
  ],
  [
   "大分",
   2,
   9
  ],
  [
   "高知",
   4,
   9,
   33.6
  ],
  [
   "熊本",
   1,
   10,
   32.8
  ],
  [
   "宮崎",
   2,
   10,
   31.9
  ],
  [
   "鹿兒島",
   1,
   11,
   31.6
  ],
  [
   "沖繩",
   0,
   12
  ]
 ],
 "route": [
  [
   "北海道・東北",
   [
    [
     "北海道",
     [
      {
       "slug": "tokachi",
       "mei": "十勝",
       "kura": "池田町ブドウ・ブドウ酒研究所",
       "wid": "tokachi"
      },
      {
       "slug": "kiyosato",
       "mei": "清里",
       "kura": "清里焼酎醸造所",
       "wid": "kiyosato"
      }
     ]
    ],
    [
     "秋田",
     [
      {
       "slug": "hiraizumi",
       "mei": "飛良泉",
       "kura": "飛良泉本舖",
       "wid": "hiraizumi"
      }
     ]
    ],
    [
     "岩手",
     [
      {
       "slug": "kanegasaki",
       "mei": "金ケ崎",
       "kura": "金ケ崎藥草酒造",
       "wid": "kanegasaki"
      }
     ]
    ],
    [
     "宮城",
     [
      {
       "slug": "hagino",
       "mei": "萩之鶴",
       "kura": "萩野酒造",
       "wid": "hagino"
      }
     ]
    ],
    [
     "山形",
     [
      {
       "slug": "mitobe",
       "mei": "山形正宗",
       "kura": "水戶部酒造",
       "wid": "mitobe"
      },
      {
       "slug": "sakata",
       "mei": "上喜元",
       "kura": "酒田酒造",
       "wid": "kawabu",
       "only": [
        15
       ]
      }
     ]
    ],
    [
     "福島",
     [
      {
       "slug": "miyaizumi",
       "mei": "宮泉",
       "kura": "宮泉銘釀",
       "wid": "miyaizumi"
      },
      {
       "slug": "suehiro",
       "mei": "末廣",
       "kura": "末廣酒造",
       "wid": "suehiro"
      },
      {
       "slug": "sasanokawa",
       "mei": "山櫻",
       "kura": "笹之川酒造",
       "wid": "sasanokawa"
      }
     ]
    ]
   ]
  ],
  [
   "關東・甲信越",
   [
    [
     "新潟",
     [
      {
       "slug": "kanemasu",
       "mei": "初花",
       "kura": "金升酒造",
       "wid": "kanemasu"
      }
     ]
    ],
    [
     "群馬",
     [
      {
       "slug": "nagai",
       "mei": "水芭蕉・谷川岳",
       "kura": "永井酒造",
       "wid": "nagai"
      }
     ]
    ],
    [
     "栃木",
     [
      {
       "slug": "kobayashi",
       "mei": "鳳凰美田",
       "kura": "小林酒造",
       "wid": "kobayashi"
      }
     ]
    ],
    [
     "山梨",
     [
      {
       "slug": "okunota",
       "mei": "奧野田",
       "kura": "奧野田葡萄酒",
       "wid": "okunota"
      }
     ]
    ]
   ]
  ],
  [
   "中部・北陸",
   [
    [
     "富山",
     [
      {
       "slug": "wakatsuru",
       "mei": "若鶴",
       "kura": "若鶴酒造",
       "wid": "wakatsuru"
      }
     ]
    ],
    [
     "岐阜",
     [
      {
       "slug": "nakajima",
       "mei": "小左衛門",
       "kura": "中島醸造",
       "wid": "nakajima"
      },
      {
       "slug": "hayasihonten",
       "mei": "百十郎",
       "kura": "林本店",
       "wid": "hayasihonten"
      }
     ]
    ],
    [
     "愛知",
     [
      {
       "slug": "sekiya",
       "mei": "蓬萊泉",
       "kura": "關谷釀造",
       "wid": "sekiya"
      },
      {
       "slug": "nakano",
       "mei": "國盛",
       "kura": "中埜酒造",
       "wid": "nakano"
      }
     ]
    ],
    [
     "靜岡",
     [
      {
       "slug": "hatsukame",
       "mei": "初龜",
       "kura": "初龜釀造",
       "wid": "hatsukame"
      }
     ]
    ]
   ]
  ],
  [
   "近畿",
   [
    [
     "三重",
     [
      {
       "slug": "kawabu",
       "mei": "鉾杉",
       "kura": "河武釀造",
       "wid": "kawabu",
       "only": [
        16
       ]
      }
     ]
    ],
    [
     "滋賀",
     [
      {
       "slug": "naminooto",
       "mei": "浪乃音",
       "kura": "浪乃音酒造",
       "wid": "naminooto"
      }
     ]
    ],
    [
     "京都",
     [
      {
       "slug": "kitagawa",
       "mei": "北川本家",
       "kura": "北川本家",
       "wid": "kitagawa"
      },
      {
       "slug": "nichinichi",
       "mei": "日日",
       "kura": "日々醸造",
       "wid": "nichinichi"
      }
     ]
    ]
   ]
  ],
  [
   "四國",
   [
    [
     "高知",
     [
      {
       "slug": "arimitsu",
       "mei": "安藝虎",
       "kura": "有光酒造場",
       "wid": "arimitsu"
      }
     ]
    ]
   ]
  ],
  [
   "九州",
   [
    [
     "福岡",
     [
      {
       "slug": "nishiyoshida",
       "mei": "西吉田",
       "kura": "西吉田酒造",
       "wid": "nishiyoshida"
      },
      {
       "slug": "ikekame",
       "mei": "池龜",
       "kura": "池龜酒造",
       "wid": "ikekame"
      }
     ]
    ],
    [
     "佐賀",
     [
      {
       "slug": "amabuki",
       "mei": "天吹",
       "kura": "天吹酒造",
       "wid": "amabuki"
      },
      {
       "slug": "koueigiku",
       "mei": "光榮菊",
       "kura": "光榮菊酒造",
       "wid": "koueigiku"
      }
     ]
    ],
    [
     "熊本",
     [
      {
       "slug": "tsutsumi",
       "mei": "堤",
       "kura": "堤酒造",
       "wid": "tsutsumi"
      }
     ]
    ],
    [
     "宮崎",
     [
      {
       "slug": "kurokihonten",
       "mei": "黑木本店",
       "kura": "黑木本店",
       "wid": "kurokihonten"
      },
      {
       "slug": "watanabe-distillery",
       "mei": "萬年",
       "kura": "渡邊酒造場",
       "wid": "watanabe-distillery"
      },
      {
       "slug": "yanagita-shochu",
       "mei": "赤鹿毛",
       "kura": "柳田酒造",
       "wid": "yanagita-shochu"
      }
     ]
    ],
    [
     "鹿兒島",
     [
      {
       "slug": "hombo",
       "mei": "本坊",
       "kura": "本坊酒造",
       "wid": "hombo"
      },
      {
       "slug": "shiota",
       "mei": "六代目百合",
       "kura": "塩田酒造",
       "wid": "shiota"
      }
     ]
    ]
   ]
  ],
  [
   "海外",
   [
    [
     "台灣",
     [
      {
       "slug": "plumate",
       "mei": "梅侍",
       "kura": "南投",
       "wid": "plumate"
      }
     ]
    ],
    [
     "義大利",
     [
      {
       "slug": "casali",
       "mei": "卡莎莉",
       "kura": "Casali",
       "wid": "casali"
      },
      {
       "slug": "donnafugata",
       "mei": "多娜佳塔",
       "kura": "Donnafugata",
       "wid": "donnafugata"
      },
      {
       "slug": "toso",
       "mei": "多索",
       "kura": "Toso",
       "wid": "toso"
      }
     ]
    ],
    [
     "西班牙",
     [
      {
       "slug": "pares-balta",
       "mei": "巴塔",
       "kura": "Parés Baltà",
       "wid": "pares-balta"
      },
      {
       "slug": "terras-gauda",
       "mei": "高達大地",
       "kura": "Terras Gauda",
       "wid": "terras-gauda"
      }
     ]
    ],
    [
     "德國",
     [
      {
       "slug": "bayernwald",
       "mei": "Bayernwald",
       "kura": "Bayernwald KG",
       "wid": "bayernwald"
      },
      {
       "slug": "kessler-zink",
       "mei": "金凱勒",
       "kura": "Kessler-Zink",
       "wid": "kessler-zink",
       "only": [
        97
       ]
      },
      {
       "slug": "georg-mueller",
       "mei": "喬治穆勒",
       "kura": "Georg Müller Stiftung",
       "wid": "kessler-zink",
       "only": [
        133
       ]
      }
     ]
    ],
    [
     "法國",
     [
      {
       "slug": "lgi-wines",
       "mei": "LGI",
       "kura": "LGI Wines",
       "wid": "lgi-wines"
      }
     ]
    ],
    [
     "保加利亞",
     [
      {
       "slug": "chateau-burgozone",
       "mei": "布爾松城堡",
       "kura": "Château Burgozone",
       "wid": "chateau-burgozone"
      }
     ]
    ],
    [
     "智利",
     [
      {
       "slug": "vina-casa-silva",
       "mei": "凱撒西瓦",
       "kura": "Viña Casa Silva",
       "wid": "vina-casa-silva"
      },
      {
       "slug": "tabali",
       "mei": "塔巴利",
       "kura": "Tabalí",
       "wid": "tabali"
      }
     ]
    ],
    [
     "墨西哥",
     [
      {
       "slug": "butterfly-cannon",
       "mei": "蝴蝶加濃",
       "kura": "Butterfly Cannon",
       "wid": "butterfly-cannon"
      }
     ]
    ]
   ]
  ]
 ],
 "story": {
  "kobayashi": {
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Kobayashi_shuzo_%E6%9C%AC%E7%A4%BE%E8%94%B5.jpg",
     "w": 1440,
     "t": "小林酒造的本社藏",
     "by": "Kobayashi shuzo",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Kobayashi_shuzo_本社蔵.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Japan%2C_Tochigi%2C_Gunma_-_Nikko_mountain_range_from_Koga_2009.jpg",
     "w": 3610,
     "t": "從平原望見的日光連山（攝於鄰近的古河市）",
     "by": "駅弁（ja.wikipedia）",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Japan,_Tochigi,_Gunma_-_Nikko_mountain_range_from_Koga_2009.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/78/Manakabashi_bridge%2COmoigawa_River.jpg",
     "w": 2816,
     "t": "流經小山市的思川",
     "by": "ほぶ",
     "lic": "公眾領域",
     "licUrl": "",
     "page": "https://commons.wikimedia.org/wiki/File:Manakabashi_bridge,Omoigawa_River.jpg"
    }
   ],
   "tone": [
    "#2a221c",
    "#fbf6ea",
    "#d9c39b",
    "#c9a87a"
   ],
   "dark": true,
   "hero": 40,
   "city": "小山市",
   "founded": "1872",
   "one": {
    "c": "吟",
    "t": "一年釀不到十桶、差點關門的酒藏，1995 年決定從此只釀吟釀。鳳凰美田的一切，都從這個決定開始。"
   },
   "hook": "從快要關門的小酒藏，到只釀吟釀的鳳凰美田。",
   "order": [
    "about",
    "timeline",
    "craft",
    "name",
    "place"
   ],
   "about": {
    "paras": [
     "小林酒造位在栃木縣小山市卒島，這一帶舊稱「美田村」。明治五年（1872），初代小林米造沿著通往日光的例幣使街道開了「丸越酒店」，從此在關東平原北部的田園裡釀酒，用的是日光山系的伏流水。",
     "戰時酒藏一度停止釀酒、只做零售，1954 年才恢復。到了 1990 年代初，第五代小林正樹回到家裡時，酒藏一年仕込不到十本，幾乎撐不下去。",
     "他在 1994 年推出「鳳凰美田」，隔年乾脆停掉普通酒與本釀造，只釀吟釀。2004、2005 年連續兩年拿下全國新酒鑑評會金賞，鳳凰美田的名字才在全國傳開；2014 年另設了水果利口酒專用的第二工廠。",
     "現在的小林酒造仍守著幾道費工的做法：用直火加熱的傳統和釜蒸米、全部手工製麴，上槽不用機械壓榨，而是雫取り、袋吊り與佐瀬式槽搾り。2022 年，第三座藏「飛翔蔵」在鄰近的栃木市啟用。"
    ],
    "profile": [
     [
      "所在地",
      "栃木縣小山市卒島（舊美田村）"
     ],
     [
      "創業",
      "1872 年（明治 5 年）"
     ],
     [
      "當主",
      "小林正樹，第五代"
     ],
     [
      "水",
      "日光山系伏流水"
     ],
     [
      "招牌",
      "只釀吟釀；和釜蒸米、手工製麴"
     ],
     [
      "銘柄",
      "鳳凰美田"
     ]
    ]
   },
   "name": {
    "parts": [
     {
      "c": "鳳凰",
      "r": "ほうおう",
      "n": "由來說法不一，酒藏沒有統一的官方說明。"
     },
     {
      "c": "美田",
      "r": "みた",
      "n": "酒藏所在地的舊村名「美田村」，1950 年代併入小山市。"
     }
    ]
   },
   "timeline": [
    {
     "y": 1872,
     "e": "明治 5 年",
     "t": "初代創業，店號「丸越酒店」"
    },
    {
     "y": 1954,
     "e": "",
     "t": "戰後恢復釀酒"
    },
    {
     "y": 1991,
     "e": "1990 年代初",
     "t": "小林正樹回到酒藏，一年仕込不到十本",
     "approx": true
    },
    {
     "y": 1994,
     "e": "",
     "t": "鳳凰美田上市"
    },
    {
     "y": 1995,
     "e": "",
     "t": "停做普通酒，只釀吟釀"
    },
    {
     "y": 2004,
     "e": "2004–05",
     "t": "連續兩年全國新酒鑑評會金賞"
    },
    {
     "y": 2022,
     "e": "",
     "t": "第三座藏「飛翔蔵」啟用"
    }
   ],
   "place": [
    {
     "k": "水",
     "t": "日光山系的伏流水"
    },
    {
     "k": "田",
     "t": "關東平原北部，四周是望不到邊的田園，當地水井很多"
    },
    {
     "k": "道",
     "t": "沿著江戶時代的日光例幣使街道"
    }
   ],
   "craft": {
    "title": "不用機器的那幾道工",
    "points": [
     [
      "蒸米",
      "用直火加熱的傳統和釜，不用鍋爐蒸氣"
     ],
     [
      "製麴",
      "全部手工"
     ],
     [
      "上槽",
      "不用機械壓榨，改用雫取り、袋吊り、佐瀬式槽搾り"
     ],
     [
      "用米",
      "與全國產地契作，以栃木縣產為主"
     ]
    ],
    "quote": {
     "t": "那時候想釀好酒，自然就走向了吟釀。",
     "o": "当時は、いい酒を造ろうとすると必然的に吟醸造りになった",
     "who": "小林正樹，第五代",
     "src": "nihonmono"
    }
   },
   "sources": [
    [
     "小林酒造官網",
     "https://hououbiden.jp/kura/"
    ],
    [
     "nihonmono",
     "https://nihonmono.jp/article/50001/"
    ],
    [
     "SAKETIMES",
     "https://jp.sake-times.com/knowledge/description/hououbiden"
    ],
    [
     "Wikipedia",
     "https://ja.wikipedia.org/wiki/小林酒造_(栃木県)"
    ]
   ]
  },
  "kurokihonten": {
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Osuzuyama.jpg",
     "w": 4000,
     "t": "尾鈴山（畫面右側），分藏尾鈴山蒸留所就在它的山谷裡",
     "by": "アラツク",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Osuzuyama.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/84/Omaru_River_Kijo_Hiki_2025.jpg",
     "w": 4000,
     "t": "木城町一帶的小丸川",
     "by": "Sanjo",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Omaru_River_Kijo_Hiki_2025.jpg"
    }
   ],
   "tone": [
    "#e9ddcd",
    "#2f2117",
    "#7a5238",
    "#9c6a45"
   ],
   "city": "高鍋町",
   "founded": "1885",
   "one": {
    "c": "還",
    "t": "燒酎粕做成有機肥料回到田裡，田裡再長出下一批麥、芋與米。官網把它寫成一句話：「自然の恵みを自然に還す」。"
   },
   "hook": "燒酎粕回到田裡，田裡長出下一批原料。",
   "order": [
    "about",
    "cycle",
    "name",
    "place",
    "timeline"
   ],
   "about": {
    "paras": [
     "黑木本店在宮崎縣高鍋町。明治 18 年（1885），第一滴燒酎從蒸餾器滴下，酒藏把這一刻當作創業。宮崎日照長，官網稱這裡是「太陽與綠的縣」；釀酒用的是尾鈴山水系、小丸川的伏流水，屬於軟水。",
     "讓黑木本店廣為人知的是麥燒酎「百年の孤独」。名字取自馬奎斯的同名小說，以白橡木桶熟成，混調三、四、五年的酒，酒標上還印著爵士樂手 Eric Dolphy 的一段話。",
     "這家酒藏最特別的，是把田也當成釀酒的一部分。自家農場「甦る大地の会」約四十公頃，不用農藥，種芋、麥和米；釀完酒的燒酎粕做成緩效性有機肥，再回到田裡。製麴靠手工，酵母自家純粹培養，二次仕込用木桶。",
     "第五代黑木信作曾在法國勃根地的酒莊研修，2019 年接任代表；同一年，木城町山谷裡的分藏尾鈴山蒸留所開始蒸餾威士忌。官網寫著：「是人的眼睛與雙手在釀燒酎。」"
    ],
    "profile": [
     [
      "所在地",
      "宮崎縣兒湯郡高鍋町"
     ],
     [
      "創業",
      "1885 年（明治 18 年）"
     ],
     [
      "當主",
      "黑木信作，第五代"
     ],
     [
      "水",
      "尾鈴山水系、小丸川伏流水（軟水）"
     ],
     [
      "田",
      "自家農場約 40 公頃，不用農藥"
     ],
     [
      "銘柄",
      "百年の孤独、中々"
     ]
    ]
   },
   "cycle": {
    "title": "一支燒酎的循環",
    "steps": [
     "自家田種麥、芋、米",
     "手工製麴、木桶二次仕込",
     "蒸餾成燒酎",
     "燒酎粕做成緩效性有機肥",
     "肥料回到田裡"
    ]
   },
   "name": {
    "parts": [
     {
      "c": "百年の孤独",
      "r": "ひゃくねんのこどく",
      "n": "取自馬奎斯的同名小說；酒標上印著爵士樂手 Eric Dolphy 的一段話。"
     },
     {
      "c": "中々",
      "r": "なかなか",
      "n": "讀作 なかなか，日文裡是「相當、頗為」的意思（字義，非官方說明）。"
     }
    ]
   },
   "place": [
    {
     "k": "水",
     "t": "尾鈴山水系、小丸川的伏流水，軟水"
    },
    {
     "k": "陽",
     "t": "宮崎的日照時數在日本名列前段，官網稱「太陽與綠的縣」"
    },
    {
     "k": "田",
     "t": "自家農場「甦る大地の会」約四十公頃，不用農藥"
    },
    {
     "k": "山",
     "t": "分藏尾鈴山蒸留所在木城町的山谷，麴箱、甑、木桶用宮崎的飫肥杉"
    }
   ],
   "timeline": [
    {
     "y": 1885,
     "e": "明治 18 年",
     "t": "第一滴燒酎從蒸餾器滴下"
    },
    {
     "y": 2012,
     "e": "",
     "t": "黑木信作進入公司"
    },
    {
     "y": 2016,
     "e": "",
     "t": "推出 14 度芋燒酎「球」"
    },
    {
     "y": 2019,
     "e": "",
     "t": "信作接任代表；尾鈴山開始蒸餾威士忌"
    },
    {
     "y": 2024,
     "e": "",
     "t": "信作出任農業法人「甦る大地の会」代表"
    }
   ],
   "craft": {
    "quote": {
     "t": "燒酎，是喝得到的大地香水。",
     "o": "焼酎は飲む“大地の香水”",
     "who": "黑木信作，第五代",
     "src": "サライ"
    }
   },
   "sources": [
    [
     "黑木本店官網・生產",
     "https://www.kurokihonten.co.jp/production"
    ],
    [
     "黑木本店官網・公司",
     "https://www.kurokihonten.co.jp/company"
    ],
    [
     "サライ",
     "https://serai.jp/gourmet/1234395"
    ],
    [
     "Wikipedia（百年の孤独）",
     "https://ja.wikipedia.org/wiki/百年の孤独_(焼酎)"
    ]
   ]
  },
  "hiraizumi": {
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Hiraizumi_brewery.jpg",
     "w": 4608,
     "t": "飛良泉本舖的酒藏",
     "by": "掬茶",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Hiraizumi_brewery.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/98/Mt.Chokai_20190512.jpg",
     "w": 6000,
     "t": "從にかほ市望見的鳥海山",
     "by": "掬茶",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Mt.Chokai_20190512.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/2e/%E5%B9%B3%E6%B2%A2%E6%B5%B7%E6%B0%B4%E6%B5%B4%E5%A0%B4_%E3%81%AB%E3%81%8B%E3%81%BB%E5%B8%82_Jan_29%2C_2006.jpg",
     "w": 1280,
     "t": "酒藏所在的平沢海岸，冬天",
     "by": "over hilowsee",
     "lic": "CC BY-SA 2.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
     "page": "https://commons.wikimedia.org/wiki/File:平沢海水浴場_にかほ市_Jan_29,_2006.jpg"
    }
   ],
   "tone": [
    "#ece4d6",
    "#2a241c",
    "#6b5d48",
    "#a08a66"
   ],
   "city": "にかほ市",
   "founded": "1487",
   "one": {
    "c": "泉",
    "t": "「白」疊在「水」上就是「泉」——酒名裡藏著齋藤家從泉州來的出身。"
   },
   "hook": "室町時代創業，東北最古老的酒藏。",
   "order": [
    "about",
    "name",
    "timeline",
    "place",
    "craft"
   ],
   "about": {
    "paras": [
     "飛良泉本舖在秋田縣にかほ市平沢，背倚靈峰鳥海山的北麓，離日本海岸只有約五十公尺。1487 年（長享元年）創業，官網自稱東北最古、全國第三古的酒藏，現任當主是第二十六代。",
     "齋藤家原本是北前船的回船問屋，第二代才開始兼營釀酒。江戶時代的平沢是仁賀保氏的城下町、羽州街道上的宿場町，也是北前船停靠的港口。",
     "這裡受對馬暖流影響，在秋田算是溫暖，冬季季風卻很強，海岸會出現「波の華」。藏外有一棵樹齡五百年的大欅樹，夏天替酒藏遮陽；現存的土藏建於明治 15 年（1882）。",
     "招牌是山廢酒母：約要三十天，比速釀多一倍，官網形容要像照顧費心的孩子一樣。2018 年下一代齋藤雅昭回到酒藏，隔年推出新系列「飛囀 HITEN」，他說希望讓女性與年輕人更輕鬆地喝日本酒。"
    ],
    "profile": [
     [
      "所在地",
      "秋田縣にかほ市平沢"
     ],
     [
      "創業",
      "1487 年（長享元年）"
     ],
     [
      "當主",
      "第二十六代"
     ],
     [
      "地形",
      "鳥海山北麓，離海約 50 公尺"
     ],
     [
      "招牌",
      "山廢酒母、自家培養酵母"
     ],
     [
      "銘柄",
      "飛良泉、飛囀 HITEN"
     ]
    ]
   },
   "name": {
    "lead": "畫家增田九木寫給良寬和尚的信裡，形容這裡的酒是「飛び切り良い、白い水」——好得不得了的白色之水。",
    "parts": [
     {
      "c": "飛良",
      "r": "ひら",
      "n": "「飛」「良」念作 ひら，暗指地名「平沢」。"
     },
     {
      "c": "泉",
      "r": "白＋水",
      "n": "白疊在水上成「泉」，暗指齋藤家出身的泉州。"
     }
    ]
   },
   "timeline": [
    {
     "y": 1487,
     "e": "長享元年",
     "t": "創業，原為北前船回船問屋"
    },
    {
     "y": 1800,
     "e": "江戶後期",
     "t": "酒名從「金亀」改為「飛良泉」",
     "approx": true
    },
    {
     "y": 1882,
     "e": "明治 15 年",
     "t": "現存的土藏建成"
    },
    {
     "y": 2018,
     "e": "",
     "t": "下一代齋藤雅昭回到酒藏"
    },
    {
     "y": 2019,
     "e": "",
     "t": "推出新系列「飛囀 HITEN」"
    }
   ],
   "place": [
    {
     "k": "山",
     "t": "靈峰鳥海山的北麓"
    },
    {
     "k": "海",
     "t": "離日本海岸約五十公尺；冬季季風強，岸邊會出現「波の華」"
    },
    {
     "k": "港",
     "t": "江戶時代是羽州街道的宿場町，也是北前船的停靠港"
    },
    {
     "k": "樹",
     "t": "藏外一棵樹齡五百年的大欅樹，夏天替酒藏遮陽"
    }
   ],
   "craft": {
    "title": "山廢，像養一個費心的孩子",
    "points": [
     [
      "酒母",
      "山廢酒母約要三十天，速釀約兩週"
     ],
     [
      "酵母",
      "多數用自家培養酵母；「山廃純米 マル飛」用協會 77 號高酸酵母"
     ],
     [
      "用米",
      "美山錦、秋田酒こまち、山田錦"
     ]
    ]
   },
   "sources": [
    [
     "飛良泉本舖官網・藏元介紹",
     "https://www.hiraizumi.co.jp/kuramoto/"
    ],
    [
     "飛良泉本舖官網・商品",
     "https://www.hiraizumi.co.jp/item/"
    ],
    [
     "nihonmono",
     "https://nihonmono.jp/en/article/31785/"
    ]
   ]
  },
  "plumate": {
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/50/%E4%BF%A1%E7%BE%A9%E9%84%89-%E7%89%9B%E7%A8%A0%E5%9D%91-%E6%9F%B3%E5%AE%B6%E6%A2%85%E5%9C%92_-_Flickr_-_%E8%94%A1%E4%BD%A9%E6%9B%B8.jpg",
     "w": 2048,
     "t": "南投信義鄉牛稠坑的梅園",
     "by": "蔡佩書",
     "lic": "CC BY 2.0",
     "licUrl": "https://creativecommons.org/licenses/by/2.0/",
     "page": "https://commons.wikimedia.org/wiki/File:信義鄉-牛稠坑-柳家梅園_-_Flickr_-_蔡佩書.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/25/Landscape_of_Yuchi.jpg",
     "w": 2816,
     "t": "日月潭所在的魚池鄉，紅玉紅茶的產區",
     "by": "Dquai",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Landscape_of_Yuchi.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/84/NUU_bajia_tea_garden.jpg",
     "w": 4800,
     "t": "苗栗的茶園",
     "by": "苗栗縣政府",
     "lic": "政府資料開放授權",
     "licUrl": "",
     "page": "https://commons.wikimedia.org/wiki/File:NUU_bajia_tea_garden.jpg"
    }
   ],
   "tone": [
    "#f3e2d8",
    "#4a2219",
    "#8a4a38",
    "#b5644c"
   ],
   "hero": 4,
   "city": "",
   "founded": "2024",
   "oneName": "梅侍",
   "one": {
    "c": "茶",
    "t": "台灣做梅酒的不少，但把五個台灣茶產區一支一支釀進梅酒裡的，是梅侍。2026 年拿下的兩面金牌，都是茶梅酒。"
   },
   "hook": "信義鄉海拔八百公尺的手採青梅，配上台灣五個產區的茶。",
   "order": [
    "about",
    "teamap",
    "craft",
    "timeline"
   ],
   "about": {
    "paras": [
     "梅侍是 2024 年成立的台灣梅酒品牌，共同創辦人楊欲奇最早做的是純釀果醋，後來才轉向梅酒。梅子來自南投縣信義鄉海拔八百公尺以上的小農果園，那裡日夜溫差大、常有雲霧，果園不灑農藥。",
     "青梅靠人工手採，品牌說這樣能保留果皮上的天然酵母；每批也做第三方農藥檢驗。釀法是一層梅果一層糖、低溫發酵，不額外添加食用酒精，也不加香料、色素與酸味劑，最後經過「一轉、二澄、三濾」。",
     "梅侍最大的特色，是把台灣各地的茶釀進梅酒：苗栗的東方美人、三峽碧螺春、日月潭的紅玉（台茶 18 號）、鹿谷凍頂烏龍、台東鹿野紅烏龍。東方美人用的是冠軍製茶師張家齊的茶，茶葉反覆烘焙四十小時。",
     "成立第一年就在 IWSC、ISC 等國際賽事得獎；2026 年，東方美人茶梅酒拿下 IWSC 金牌，紅烏龍茶梅酒拿下 ISC 金牌。"
    ],
    "profile": [
     [
      "品牌",
      "梅侍 PLUMATE"
     ],
     [
      "成立",
      "2024 年"
     ],
     [
      "梅子",
      "南投信義鄉，海拔 800 公尺以上"
     ],
     [
      "茶",
      "苗栗、三峽、日月潭、鹿谷、鹿野"
     ],
     [
      "釀法",
      "自然發酵，不額外添加食用酒精"
     ],
     [
      "酒精度",
      "10%"
     ]
    ]
   },
   "teamap": {
    "title": "一顆梅，五個茶產區",
    "marks": [
     {
      "p": "南投",
      "k": "梅",
      "t": "信義鄉青梅，海拔 800 公尺以上"
     },
     {
      "p": "南投",
      "k": "茶",
      "t": "日月潭紅玉（台茶 18 號）、鹿谷凍頂烏龍"
     },
     {
      "p": "苗栗",
      "k": "茶",
      "t": "東方美人，冠軍製茶師張家齊，反覆烘焙 40 小時"
     },
     {
      "p": "新北",
      "k": "茶",
      "t": "三峽碧螺春"
     },
     {
      "p": "台東",
      "k": "茶",
      "t": "鹿野紅烏龍"
     }
    ]
   },
   "craft": {
    "title": "純釀這件事急不得",
    "points": [
     [
      "手採",
      "保留果皮上的天然酵母，第三方農藥檢驗未檢出"
     ],
     [
      "發酵",
      "一層梅果一層糖，低溫發酵，不額外添加食用酒精"
     ],
     [
      "澄清",
      "一轉、二澄、三濾"
     ],
     [
      "添加",
      "零香料、色素、酸味劑"
     ]
    ],
    "quote": {
     "t": "純釀這件事急不得。",
     "who": "梅侍",
     "src": "今周刊"
    }
   },
   "timeline": [
    {
     "y": 2024.1,
     "e": "2024",
     "t": "品牌成立；IWSC 紅玉紅茶、果泥梅酒銀牌"
    },
    {
     "y": 2024.6,
     "e": "",
     "t": "ISC 首次參賽，東方美人金牌"
    },
    {
     "y": 2025.4,
     "e": "2025",
     "t": "IWSC 香米梅酒金牌"
    },
    {
     "y": 2026,
     "e": "2026",
     "t": "IWSC 東方美人金牌、ISC 紅烏龍金牌"
    }
   ],
   "sources": [
    [
     "梅侍官網",
     "https://www.plumate.com.tw/about"
    ],
    [
     "梅侍官網・茶產地",
     "https://www.plumate.com.tw/blog/90400ba81f7"
    ],
    [
     "梅侍官網・2026 ISC",
     "https://www.plumate.com.tw/blog/2026-isc-1-3"
    ],
    [
     "今周刊",
     "https://www.businesstoday.com.tw/article/category/183030/post/202608170042/"
    ]
   ]
  },
  "okunota": {
   "tone": [
    "#2a1a1c",
    "#f5ebe0",
    "#d6b3a0",
    "#b0475a"
   ],
   "dark": true,
   "city": "甲州市",
   "founded": "1962",
   "oneName": "奧野田葡萄酒",
   "one": {
    "c": "承",
    "t": "原本是奧野田地區幾戶農家把葡萄湊在一起釀酒的釀造場；農家高齡化、找不到人接手，1989 年由當時 26 歲、在勝沼老牌酒莊工作的中村雅量承接下來，重新出發。"
   },
   "hook": "一間農家合作的小釀造場找不到繼承人，1989 年，一位 26 歲的年輕釀酒人把它接了下來。",
   "order": [
    "about",
    "place",
    "name",
    "timeline",
    "craft"
   ],
   "about": {
    "paras": [
     "奧野田葡萄酒釀造位在山梨縣甲州市鹽山牛奧，甲府盆地的東緣。山梨縣觀光網站記載，它在昭和 37 年（1962）誕生，是當地農家各自帶葡萄來釀酒的釀造場；酒莊官網則說，發起的是甲州市奧野田地區的幾戶農家。",
     "後來農家高齡化、後繼無人，開始找人接手。消息傳到在勝沼老牌酒莊工作的中村雅量那裡，他在 26 歲時取得奧野田葡萄酒，平成元年（1989）重新出發。如今由中村雅量、中村亞貴子夫婦經營，官網的座右銘是「正因為小，才能做得細」。",
     "他們主張「好酒從好葡萄開始」：1998 年成立農業生產法人「夢郷葡萄研究所」（2012 年併入酒莊），自家園地約 1.5 公頃，以自然農法栽培卡本內蘇維濃、梅洛、夏多內與德拉瓦，畝全部朝正南。2022 年，他們把用到 2020 年的舊釀造空間改裝成商店與沙龍，另建新釀造場。"
    ],
    "profile": [
     [
      "所在地",
      "山梨縣甲州市鹽山牛奧 2529-3"
     ],
     [
      "創業",
      "昭和 37 年（1962）；1989 年由現任經營者承接"
     ],
     [
      "當主",
      "中村雅量、中村亞貴子"
     ],
     [
      "園地",
      "自家園約 1.5 公頃，分布在甲州市內 4 處，標高約 450–500 公尺"
     ],
     [
      "招牌",
      "自然農法、糖度高的葡萄；酒用品種以平垣根栽培"
     ],
     [
      "銘柄",
      "奧野田"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1962,
     "e": "昭和 37 年",
     "t": "奧野田地區農家合作成立葡萄酒釀造場",
     "approx": false
    },
    {
     "y": 1989,
     "e": "平成元年",
     "t": "26 歲的中村雅量承接，奧野田葡萄酒重新出發",
     "approx": false
    },
    {
     "y": 1996,
     "e": "平成 8 年",
     "t": "日灼園種下 900 株卡本內蘇維濃",
     "approx": false
    },
    {
     "y": 1998,
     "e": "平成 10 年",
     "t": "成立農業生產法人「夢郷葡萄研究所」，開始垣根式種植",
     "approx": false
    },
    {
     "y": 2008,
     "e": "平成 20 年",
     "t": "日灼園開始舉辦採收活動與葡萄樹認養",
     "approx": false
    },
    {
     "y": 2012,
     "e": "平成 24 年",
     "t": "夢郷葡萄研究所併入奧野田葡萄酒釀造",
     "approx": false
    },
    {
     "y": 2022,
     "e": "令和 4 年",
     "t": "舊釀造空間改裝為商店與沙龍開幕",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒莊名來自地名，四塊葡萄園也各有名字。",
    "parts": [
     {
      "c": "奧野田",
      "r": "おくのた",
      "n": "甲州市奧野田地區，當年合作釀酒的農家所在地。"
     },
     {
      "c": "日灼",
      "r": "ひやけ",
      "n": "四塊園裡唯一的平地，位在北酒窖正前方，種卡本內蘇維濃；官網說這裡的葡萄用於頂級酒款。"
     },
     {
      "c": "櫻澤・長門原・神田",
      "r": "さくらざわ・ながとはら・かんだ",
      "n": "其餘三塊斜坡園：櫻澤與長門原種夏多內（櫻澤另有德拉瓦棚架），神田種梅洛與卡本內蘇維濃。"
     }
    ]
   },
   "place": [
    {
     "k": "坡",
     "t": "位在甲府盆地東緣向陽的斜面，排水良好；園地標高約 450–500 公尺，多為南向或西南向坡。"
    },
    {
     "k": "土",
     "t": "櫻澤、長門原表土平均約 15 公分，底下是花崗岩，再往下是甲州御影石的山；神田是含花崗岩、較貧瘠的深紅土。"
    },
    {
     "k": "架",
     "t": "酒用品種採平垣根（籬架）栽培，德拉瓦則用日本傳統的棚架。"
    }
   ],
   "craft": {
    "title": "從葡萄園開始",
    "points": [
     [
      "自家園",
      "約 1.5 公頃、甲州市內 4 塊園地，從 1996 年起陸續種下。"
     ],
     [
      "自然農法",
      "官網說他們堅持自然農法，只用糖度高的優質葡萄，讓酒帶出素材原本的味道。"
     ],
     [
      "小規模",
      "座右銘是「正因為小，才能做得細」，栽培到銷售由全體員工一起完成。"
     ],
     [
      "甜白酒",
      "官網列出的 Dolce（ドルチェ）是以甲州市產、帶籽德拉瓦 100% 釀成的甜白酒，2026 年款酒精度 8.5%。"
     ]
    ],
    "quote": {
     "t": "朝著我們理想中的葡萄酒前進……",
     "o": "私たちの理想のワインを目指して、、、",
     "who": "中村雅量、中村亞貴子，奧野田葡萄酒經營者",
     "src": "奧野田葡萄酒官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Katsunuma_vineyard_ac_%285%29.jpg",
     "w": 5973,
     "t": "同在甲州市的勝沼町葡萄園（甲州種棚架，2023 年 6 月）",
     "by": "Asturio Cantabrio",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Katsunuma_vineyard_ac_(5).jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/30/%E3%83%95%E3%83%AB%E3%83%BC%E3%83%84%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%8B%E3%82%89%E7%94%B2%E5%B7%9E%E5%B8%82%E8%A1%97_20121022_-_panoramio.jpg",
     "w": 2736,
     "t": "從山坡上的農道「フルーツライン」俯瞰甲州市街",
     "by": "690 Noda",
     "lic": "CC BY 3.0",
     "licUrl": "https://creativecommons.org/licenses/by/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E3%83%95%E3%83%AB%E3%83%BC%E3%83%84%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%8B%E3%82%89%E7%94%B2%E5%B7%9E%E5%B8%82%E8%A1%97_20121022_-_panoramio.jpg"
    }
   ],
   "sources": [
    [
     "奧野田葡萄酒官網・ワイナリー",
     "https://web.okunota.com/winery/"
    ],
    [
     "奧野田葡萄酒官網・葡萄畑",
     "https://web.okunota.com/vineyard/"
    ],
    [
     "奧野田葡萄酒官網首頁（Dolce 介紹）",
     "https://web.okunota.com/"
    ],
    [
     "山梨縣觀光推進機構：奥野田葡萄酒醸造",
     "https://www.yamanashi-kankou.jp/kankou/specialty/n_6955.html"
    ]
   ]
  },
  "amabuki": {
   "tone": [
    "#f6ede0",
    "#3a2420",
    "#9a6a5a",
    "#b8475a"
   ],
   "city": "みやき町",
   "founded": "元祿年間（1688–1704）",
   "oneName": "天吹酒造",
   "one": {
    "c": "花",
    "t": "天吹不用一般從酒醪分離的酵母，而是用從花裡分離出來的「花酵母」釀酒；官網列出的就有撫子、向日葵、月下美人、秋海棠、萬壽菊等十多種。"
   },
   "hook": "一間元祿年間開業、三百多年的佐賀酒藏，兩兄弟在東京農大學釀酒時遇見從花朵裡找到的酵母，從此整間藏只用花來發酵。",
   "order": [
    "about",
    "craft",
    "name",
    "timeline",
    "place"
   ],
   "about": {
    "paras": [
     "天吹酒造在佐賀縣東部的みやき町東尾，官網寫創業於元祿年間（1688–1704），已有三百多年歷史。藏名取自酒藏東北方的天吹山——官網說，是仰望那座山的雄偉樣貌，才拿來當作藏的名字。",
     "這家最有名的是「花酵母」。一般清酒酵母是從酒醪裡分離培養的，天吹用的則是從自然界花朵中分離出來的酵母。現任代表木下壯太郎和弟弟木下大輔，都曾在東京農業大學跟著開發花酵母的中田久保教授學釀酒；畢業後教授寄來用花酵母試釀的酒，兩兄弟決定把它當成酒藏的方向。",
     "釀酒原料以雄町、山田錦和佐賀縣產米為主，仕込水是脊振山系柔和的伏流水。藏裡有一群超過百年的酒藏建築，其中舊仕込藏（現為裝瓶工廠）、舊白米倉庫、地下貯藏庫等在 2014 年登錄為日本國家登錄有形文化財。",
     "除了清酒，天吹也做以清酒為基底的利口酒。我們店裡的「京都千年抹茶酒」用京都府產抹茶，官網強調不加釀造酒精、是「日本酒仕込み」的抹茶酒，酒精濃度 6%；並提到釀造用水來自脊振山——那裡被視為日本茶的發源地之一。"
    ],
    "profile": [
     [
      "所在地",
      "佐賀縣三養基郡みやき町東尾 2894"
     ],
     [
      "創業",
      "元祿年間（1688–1704）"
     ],
     [
      "代表",
      "木下壯太郎"
     ],
     [
      "水",
      "脊振山系伏流水"
     ],
     [
      "米",
      "雄町、山田錦、佐賀縣產米"
     ],
     [
      "招牌",
      "花酵母（撫子、向日葵、月下美人、萬壽菊、草莓、蘋果等）"
     ],
     [
      "建築",
      "酒藏建物群為國家登錄有形文化財（2014 年登錄）"
     ],
     [
      "銘柄",
      "天吹"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1688,
     "e": "元祿年間",
     "t": "於現在的みやき町東尾創業（官網只寫元祿年間；2021 年酒藏以元祿元年起算慶祝創業 333 年）",
     "approx": true
    },
    {
     "y": 1917,
     "e": "大正 6 年",
     "t": "興建土藏造的白米倉庫（今為貯藏庫）",
     "approx": false
    },
    {
     "y": 1923,
     "e": "大正 12 年",
     "t": "興建木造二層的仕込藏（今為裝瓶工廠）",
     "approx": false
    },
    {
     "y": 2004,
     "e": "2000 年代初",
     "t": "木下兄弟在東京農大中田久保教授門下接觸花酵母後，酒藏改以花酵母釀酒（2024 年報導稱已全面使用約 20 年）",
     "approx": true
    },
    {
     "y": 2014,
     "e": "平成 26 年",
     "t": "舊仕込藏、舊白米倉庫、地下貯藏庫等登錄為國家登錄有形文化財（1 月 8 日）",
     "approx": false
    },
    {
     "y": 2021,
     "e": "令和 3 年",
     "t": "迎接創業 333 週年",
     "approx": false
    }
   ],
   "name": {
    "lead": "藏名不是人名，是一座山。",
    "parts": [
     {
      "c": "天吹",
      "r": "あまぶき",
      "n": "取自酒藏東北方的天吹山。官網原文：「雄大な容姿に思いを馳せ蔵の名に頂戴しました」——遙想山的雄偉樣貌，借來作為藏名。"
     }
    ]
   },
   "place": [
    {
     "k": "山",
     "t": "天吹山位在酒藏東北方，是藏名的由來；釀造用水則來自脊振山系。"
    },
    {
     "k": "水",
     "t": "脊振山系的伏流水，官網形容為「まろやか」（圓潤柔和）。"
    },
    {
     "k": "米",
     "t": "以雄町、山田錦和佐賀縣產米為主，官網英文版提到使用佐賀平原的米。"
    },
    {
     "k": "茶",
     "t": "抹茶酒的商品說明寫到，脊振山被視為日本茶的發祥地之一。"
    }
   ],
   "craft": {
    "title": "從花裡找來的酵母",
    "points": [
     [
      "酵母",
      "不用從酒醪分離的一般清酒酵母，而是從花朵分離出的花酵母；官網列出撫子、向日葵、月下美人、蔓薔薇、石楠花、秋海棠、萬壽菊、紫茉莉、六道木（Abelia）等，另有草莓、蘋果酵母。"
     ],
     [
      "來源",
      "花酵母由東京農業大學中田久保教授開發；木下兄弟在學時就是他的學生。"
     ],
     [
      "原料",
      "雄町、山田錦、佐賀縣產米；脊振山系伏流水。"
     ],
     [
      "利口酒",
      "京都千年抹茶酒以清酒為基底、不添加釀造酒精，加入京都府產抹茶、綠茶與柚子汁，酒精 6%。"
     ]
    ]
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/14/%E5%A4%A9%E5%90%B9%E9%85%92%E9%80%A0%E4%B8%BB%E5%B1%8B.jpg",
     "w": 5712,
     "t": "天吹酒造的主屋，佐賀縣みやき町東尾",
     "by": "ハポニアラ",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E5%90%B9%E9%85%92%E9%80%A0%E4%B8%BB%E5%B1%8B.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/1a/%E5%A4%A9%E5%90%B9%E9%85%92%E9%80%A0%E6%97%A7%E4%BB%95%E8%BE%BC%E8%94%B5.jpg",
     "w": 5712,
     "t": "天吹酒造的舊仕込藏（大正 12 年建，今為裝瓶工廠，國家登錄有形文化財）",
     "by": "ハポニアラ",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E5%90%B9%E9%85%92%E9%80%A0%E6%97%A7%E4%BB%95%E8%BE%BC%E8%94%B5.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/9a/%E5%A4%A9%E5%90%B9%E9%85%92%E9%80%A0%E6%97%A7%E7%99%BD%E7%B1%B3%E5%80%89%E5%BA%AB.jpg",
     "w": 5712,
     "t": "天吹酒造的舊白米倉庫（大正 6 年建的土藏，國家登錄有形文化財）",
     "by": "ハポニアラ",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E5%90%B9%E9%85%92%E9%80%A0%E6%97%A7%E7%99%BD%E7%B1%B3%E5%80%89%E5%BA%AB.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/82/%E5%A4%A9%E5%90%B9%E9%85%92%E9%80%A0%E6%97%A7%E9%85%92%E9%80%A0%E8%94%B5%E7%85%99%E7%AA%81.jpg",
     "w": 4284,
     "t": "天吹酒造舊酒造藏的煙囪（國家登錄有形文化財）",
     "by": "ハポニアラ",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E5%90%B9%E9%85%92%E9%80%A0%E6%97%A7%E9%85%92%E9%80%A0%E8%94%B5%E7%85%99%E7%AA%81.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Amabuki_Shuzo_warehouses_Miyaki.jpg",
     "w": 4608,
     "t": "天吹酒造的傳統倉庫群，佐賀縣みやき町東尾",
     "by": "Pekachu",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Amabuki_Shuzo_warehouses_Miyaki.jpg"
    }
   ],
   "sources": [
    [
     "天吹酒造官網｜蔵元紹介",
     "https://www.amabuki.co.jp/brewery/"
    ],
    [
     "天吹酒造官網｜こだわり（花酵母）",
     "https://www.amabuki.co.jp/commitment/"
    ],
    [
     "天吹酒造官網｜天吹 京都千年抹茶酒",
     "https://www.amabuki.co.jp/sake/000190.php"
    ],
    [
     "天吹酒造官網（英文）｜Brewery",
     "https://www.amabuki.co.jp/en/brewery/"
    ],
    [
     "文化遺産オンライン｜みやき町の文化財",
     "https://online.bunka.go.jp/heritages/region/41/41346"
    ],
    [
     "Sakenomy｜天吹酒造合資会社",
     "https://www.sakenomy.jp/brewery/K01N041001"
    ],
    [
     "Umami Mart｜Interview with Wataru Hosokawa（2024-08）",
     "https://umamimart.com/blogs/main/interview-with-wataru-hosokawa-director-of-overseas-business-development-at-amabuki-shuzo"
    ],
    [
     "Umami Mart｜Flower Power: Amabuki Shuzo（2024-09）",
     "https://umamimart.com/blogs/main/sake-gumi-newsletter-flower-power-an-exploration-of-flower-yeast-at-amabuki-shuzo-september-2024"
    ],
    [
     "天吹酒造 創業 333 週年新聞稿（2021-03，kinpa.jp 刊載）",
     "https://www.kinpa.jp/pdf/press-release/20210302-ss-333.pdf"
    ]
   ]
  },
  "arimitsu": {
   "tone": [
    "#2b1d14",
    "#f7eedc",
    "#d8b98a",
    "#c8782a"
   ],
   "dark": true,
   "city": "安芸市",
   "founded": "1903",
   "oneName": "有光酒造場",
   "one": {
    "c": "柔",
    "t": "高知（土佐）的酒以辛口出名，有光酒造場卻刻意往另一邊走：用赤野川的軟水，釀不會太辛、柔和圓潤、適合配餐的酒。"
   },
   "hook": "在以辛口聞名的土佐，有一間緊鄰赤野川的小酒藏，用柔軟的河水和老式的槽壓，釀出一款名字取自戰國武將的「柔」酒。",
   "order": [
    "about",
    "craft",
    "name",
    "place",
    "timeline"
   ],
   "about": {
    "paras": [
     "有光酒造場在高知縣東部的安芸市赤野，就在清流赤野川旁。明治 36 年（1903）創業，是一間少量手工釀造的小酒藏；現任代表是有光尚，杜氏是尾木芳之。",
     "招牌銘柄「安藝虎」取自戰國時代統治土佐東部的武將安藝國虎——他是土佐七雄之一，1569 年在與長宗我部元親的戰爭中敗北，安藝氏從此滅亡。",
     "土佐的酒一般給人「淡麗辛口」的印象，有光酒造場則說，赤野川水系的水質偏軟，適合釀出有膨度、溫和的酒；酒藏以「配餐的酒」為主題，刻意不釀得太辛。",
     "藏裡仍用傳統的「槽（ふね）」壓酒：把酒醪裝進酒袋、疊在槽中，先讓酒靠自重流出，再蓋上蓋子慢慢加壓。這種做法費工，但因為酒藏規模小才做得到。"
    ],
    "profile": [
     [
      "所在地",
      "高知縣安芸市赤野甲 38-1"
     ],
     [
      "創業",
      "明治 36 年（1903）"
     ],
     [
      "代表",
      "有光尚"
     ],
     [
      "杜氏",
      "尾木芳之"
     ],
     [
      "水",
      "赤野川水系（軟水）"
     ],
     [
      "招牌",
      "槽壓、柔和的食中酒"
     ],
     [
      "銘柄",
      "安藝虎、赤野"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1569,
     "e": "永祿 12 年",
     "t": "土佐東部的安藝國虎敗給長宗我部元親——日後酒名「安藝虎」的由來",
     "approx": false
    },
    {
     "y": 1903,
     "e": "明治 36 年",
     "t": "有光酒造場在安芸市赤野創業",
     "approx": false
    },
    {
     "y": 2012,
     "e": "平成 24 年",
     "t": "當年報導記錄：每年 10 月初開始備料，11 月中第一批新酒出槽，1 月中釀完，2 月初舉辦「酒藏開放」請客人試新酒",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒名來自一位戰國武將。",
    "parts": [
     {
      "c": "安藝虎",
      "r": "あきとら",
      "n": "取自戰國時代土佐七雄之一、統治土佐東部的安藝國虎。酒藏所在的安芸市，就是安藝氏的根據地。"
     }
    ]
   },
   "place": [
    {
     "k": "川",
     "t": "酒藏緊鄰赤野川，這條河以水質清澈聞名；仕込水取自赤野川水系，水質偏軟。"
    },
    {
     "k": "地",
     "t": "安芸市位在高知縣東部，面向太平洋（土佐灣），氣候溫暖。"
    }
   ],
   "craft": {
    "title": "在辛口的土佐釀柔和的酒",
    "points": [
     [
      "水",
      "赤野川水系的軟水，適合釀出有膨度、溫和的口感。"
     ],
     [
      "壓榨",
      "用傳統的槽（ふね）壓：酒袋疊在槽裡先自然滴流，再慢慢加壓；費工，小藏才做得到。"
     ],
     [
      "風格",
      "以配餐為主題，刻意不做得太辛，追求柔和圓潤、帶輕快酸味的酒。"
     ],
     [
      "米",
      "使用山田錦、雄町、高知縣的吟之夢等；也有以安芸市入河內產米釀的「入河內」。"
     ]
    ]
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/72/Akano_kyuukeisyo_20231124_1.jpg",
     "w": 2016,
     "t": "赤野休憩所，高知縣安芸市赤野一帶",
     "by": "Araiyasushige",
     "lic": "CC0",
     "licUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Akano_kyuukeisyo_20231124_1.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akano_station_02.jpg",
     "w": 3468,
     "t": "土佐黑潮鐵道ごめん・なはり線赤野站，高知縣安芸市赤野",
     "by": "Navian",
     "lic": "Public domain",
     "licUrl": "",
     "page": "https://commons.wikimedia.org/wiki/File:Akano_station_02.jpg"
    }
   ],
   "sources": [
    [
     "Sakenomy｜有光酒造場",
     "https://www.sakenomy.jp/brewery/K01N039005/"
    ],
    [
     "SAKETIME｜安芸虎（有光酒造場）",
     "https://www.saketime.jp/brands/1940/"
    ],
    [
     "NIHONMONO｜Arimitsu Shuzo: Mild sake made in a small brewery in Kochi",
     "https://nihonmono.jp/en/article/14455/"
    ],
    [
     "Tosa Wave｜Shall we go to Sakagura?（2012）",
     "https://tosawave.blogspot.com/2012/08/shall-we-go-to-sakagura.html"
    ],
    [
     "ニッポン旅マガジン｜安芸城跡",
     "https://tabi-mag.jp/ko0100/"
    ]
   ]
  },
  "bayernwald": {
   "tone": [
    "#3b1d1a",
    "#f7ecdc",
    "#dcb98e",
    "#c4553a"
   ],
   "dark": true,
   "city": "亨格斯貝格（Hengersberg）",
   "founded": "1923",
   "oneName": "Bayernwald",
   "one": {
    "c": "果",
    "t": "Bayernwald 公司全名的 Früchteverwertung 意思是「水果加工」：1923 年起在巴伐利亞森林把在地水果和莓果做成果汁濃縮、果泥，後來才做起水果酒與水果熱酒。"
   },
   "hook": "從 1923 年替巴伐利亞森林的莓果做果汁開始，一百年後成了德國主要的水果熱酒廠之一。",
   "order": [
    "about",
    "name",
    "place",
    "timeline",
    "craft"
   ],
   "about": {
    "paras": [
     "Bayernwald 是德國巴伐利亞的家族企業，設在下巴伐利亞的小鎮亨格斯貝格（Hengersberg），位於巴伐利亞森林邊緣。公司 1923 年創立，本業是水果加工，把水果做成果汁濃縮、果泥等半成品。",
     "後來他們也釀水果酒和水果熱酒（Glühwein），以 Bavaria Waldfrucht 為總品牌；旗下的 Hitzkopf（德文「急性子」）是德國熱賣的水果熱酒品牌，經典款（Klassik）與烤蘋果（Bratapfel）是最暢銷的兩款。",
     "2015 年的業界報導提到，公司約 160 名員工，產品線有八款水果熱酒、三款無酒精熱飲與十款水果酒，同時供應超市與聖誕市集。2022 年他們迎接百年前夕，還和同在巴伐利亞森林的老酒廠 Penninger 推出聯名熱酒。",
     "我們賣的兩款熱酒，是台灣的 Indie drinkster 與 Bayernwald 合作設計的版本；烤蘋果熱酒 5.4% 的酒精度，和 Bayernwald 的有機烤蘋果柳橙熱酒一致。"
    ],
    "profile": [
     [
      "所在地",
      "德國 巴伐利亞邦 亨格斯貝格（Schwanenkirchner Str. 28）"
     ],
     [
      "創業",
      "1923 年"
     ],
     [
      "本業",
      "水果與莓果加工（果汁濃縮、果泥），水果酒、水果熱酒"
     ],
     [
      "品牌",
      "Bavaria Waldfrucht、Hitzkopf"
     ],
     [
      "招牌",
      "Hitzkopf Klassik（水果莓果熱酒）、Hitzkopf Bratapfel（烤蘋果熱酒）"
     ],
     [
      "台灣合作",
      "Indie drinkster 共同設計"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1923,
     "e": "",
     "t": "在巴伐利亞森林的亨格斯貝格創立，從水果加工起家。",
     "approx": false
    },
    {
     "y": 2015,
     "e": "",
     "t": "Hitzkopf 全系列換新包裝，並推出有機烤蘋果柳橙熱酒（5.4%）等有機款，於科隆 Anuga 食品展發表。",
     "approx": false
    },
    {
     "y": 2022,
     "e": "",
     "t": "百年前夕，與同在巴伐利亞森林的 Penninger 酒廠推出聯名限定熱酒 GlühSchuss。",
     "approx": false
    },
    {
     "y": 2023,
     "e": "",
     "t": "創業滿 100 年。",
     "approx": false
    }
   ],
   "name": {
    "lead": "名字直接說明了它來自哪裡、做什麼。",
    "parts": [
     {
      "c": "Bayernwald",
      "r": "Bayern（巴伐利亞）＋ Wald（森林）",
      "n": "巴伐利亞森林，公司所在的山林地區。"
     },
     {
      "c": "Früchteverwertung",
      "r": "Früchte（水果）＋ Verwertung（加工利用）",
      "n": "公司全名裡的「水果加工」，說明它的本業。"
     },
     {
      "c": "Hitzkopf",
      "r": "Hitze（熱）＋ Kopf（頭）",
      "n": "德文俗語「急性子、火爆脾氣」，是他們水果熱酒的品牌名。"
     }
    ]
   },
   "place": [
    {
     "k": "林",
     "t": "亨格斯貝格在德國東南部的巴伐利亞森林邊緣，這片中級山地與捷克的波希米亞森林相連。"
    },
    {
     "k": "河",
     "t": "小鎮位在下巴伐利亞的多瑙河畔一帶，屬德根多夫縣，人口約七千。"
    },
    {
     "k": "果",
     "t": "公司以在地的水果與莓果為原料，做果汁、果泥，再延伸到水果酒與熱酒。"
    }
   ],
   "craft": {
    "title": "水果加工廠做的熱酒",
    "points": [
     [
      "原料",
      "公司本業是把水果、莓果加工成果汁濃縮與果泥，熱酒也以水果酒為基底。"
     ],
     [
      "品項",
      "2015 年時有八款水果熱酒，包括經典、烤蘋果、櫻桃、黑刺李、藍莓、草莓香草、接骨木薑等口味。"
     ],
     [
      "喝法",
      "水果熱酒可加熱飲用；同系列也有無酒精的兒童熱飲版本。"
     ]
    ]
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/30/Blick_auf_Hengersberg.jpg",
     "w": 3072,
     "t": "從 Frauenberg 教堂俯瞰亨格斯貝格（Hengersberg），Bayernwald 所在的巴伐利亞森林邊緣小鎮",
     "by": "SimonHGBG",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Blick_auf_Hengersberg.jpg"
    }
   ],
   "sources": [
    [
     "about-drinks.com：Neu von Bavaria Waldfrucht（2015）",
     "https://www.about-drinks.com/neu-von-bavaria-waldfrucht-bio-fruchtgluehwein/"
    ],
    [
     "Regensburger Nachrichten：Zum 100-jährigen – Kooperationen zwischen Bayernwald und Penninger（2022）",
     "https://www.regensburger-nachrichten.de/panorama/92179-zum-100-jaehrigen-neue-kooperationen-zwischen-bayernwald-und-penninger"
    ],
    [
     "Key to Bavaria 企業資料庫：Bayernwald Früchteverwertung KG",
     "https://www.keytobavaria.com/company-details/bayernwald-fruechteverwertung-kg-27027"
    ],
    [
     "yumda：Bayernwald Früchteverwertung KG",
     "https://www.yumda.com/en/companies/1030560/bayernwald-fruechteverwertung-kg.html"
    ],
    [
     "Tatler Asia：聖誕熱紅酒推薦（Indiedrinkster 熱紅酒）",
     "https://www.tatlerasia.com/dining/drinks/mulled-wine-2023-zh-hant"
    ],
    [
     "Wikipedia：Hengersberg",
     "https://en.wikipedia.org/wiki/Hengersberg"
    ]
   ]
  },
  "butterfly-cannon": {
   "tone": [
    "#f6e7dc",
    "#3a2220",
    "#8a5a4a",
    "#c4566a"
   ],
   "city": "哈利斯科州（Jalisco）",
   "founded": "2021",
   "oneName": "蝴蝶加濃",
   "one": {
    "c": "蝶",
    "t": "品牌名取自每年從美國飛往墨西哥過冬的帝王斑蝶大遷徙；品牌方也表示會撥款支持保育墨西哥蝴蝶棲地的計畫。"
   },
   "hook": "名字來自每年飛越美墨邊境的蝴蝶；倒進檸檬或通寧水，藍色的酒會變成淡紫粉。",
   "order": [
    "about",
    "craft",
    "name",
    "timeline",
    "place"
   ],
   "about": {
    "paras": [
     "蝴蝶加濃（The Butterfly Cannon）是 2021 年 9 月在英國上市的龍舌蘭品牌，由葡萄酒烈酒公司 Biggar & Leith 打造；Biggar & Leith 是 Elwyn Gladstone 在 2016 年創立的公司（他也是 Malfy 琴酒的創辦人），Mark Teasdale 2018 年加入。",
     "酒本身在墨西哥哈利斯科州的 Destiladora del Valle de Tequila（NOM 1438）代工釀造：用 7–8 年生、手工採收的 100% 藍色龍舌蘭，蒸汽爐烤熟後壓碎、發酵、蒸餾。品牌名取自蝴蝶從美國遷徙到墨西哥的旅程，品牌方表示會撥款支持保育墨西哥蝴蝶棲地的計畫。",
     "藍鑽（Blue）浸泡仙人掌果（prickly pear）與小柑橘皮，顏色來自蝶豆花（另有資料說也用了甜菜），加入檸檬汁或通寧水這類酸性的調酒材料，深藍會轉成淡紫粉；粉鑽（Rosa）則浸泡墨西哥粉紅葡萄柚皮。"
    ],
    "profile": [
     [
      "產地",
      "墨西哥哈利斯科州（龍舌蘭谷地）"
     ],
     [
      "蒸餾廠",
      "Destiladora del Valle de Tequila（NOM 1438）"
     ],
     [
      "品牌方",
      "Biggar & Leith（Elwyn Gladstone 2016 年創立）"
     ],
     [
      "上市",
      "2021 年 9 月（英國）"
     ],
     [
      "原料",
      "100% 藍色龍舌蘭，7–8 年生，手工採收"
     ],
     [
      "工法",
      "蒸汽爐烤熟、壓碎、發酵、蒸餾，再浸泡果皮與花草"
     ],
     [
      "系列",
      "Blue（藍鑽）、Rosa（粉鑽）、Silver Cristalino、The Winged King Reposado"
     ]
    ]
   },
   "timeline": [
    {
     "y": 2016,
     "e": "",
     "t": "Elwyn Gladstone 創立 Biggar & Leith",
     "approx": false
    },
    {
     "y": 2018,
     "e": "",
     "t": "Mark Teasdale 加入 Biggar & Leith",
     "approx": false
    },
    {
     "y": 2021,
     "e": "9 月",
     "t": "The Butterfly Cannon 在英國上市，推出 Rosa、Silver Cristalino、Blue 三款",
     "approx": false
    },
    {
     "y": 2022,
     "e": "10 月",
     "t": "由 Stuart Alexander 引進澳洲，主打「會變色的龍舌蘭」",
     "approx": false
    }
   ],
   "name": {
    "lead": "Butterfly Cannon，直譯是「蝴蝶大砲」：",
    "parts": [
     {
      "c": "Butterfly",
      "r": "蝴蝶",
      "n": "指每年從美國經德州飛往墨西哥過冬的帝王斑蝶遷徙"
     },
     {
      "c": "Cannon",
      "r": "大砲",
      "n": "品牌沒有公開說明這個字的由來"
     }
    ]
   },
   "place": [
    {
     "k": "州",
     "t": "哈利斯科州是龍舌蘭酒的核心產地；龍舌蘭谷地（Los Valles）的藍色龍舌蘭田一帶，已列入聯合國教科文組織世界遺產「龍舌蘭景觀與古龍舌蘭工業設施」。"
    },
    {
     "k": "蝶",
     "t": "帝王斑蝶每年秋天從北美南飛，到墨西哥中部的山林過冬，品牌名就取自這段遷徙。"
    }
   ],
   "craft": {
    "title": "先把龍舌蘭做對，再讓顏色變魔術",
    "points": [
     [
      "原料",
      "7–8 年生、手工採收的 100% 藍色龍舌蘭。"
     ],
     [
      "烹煮",
      "蒸汽爐烤熟龍舌蘭心，再壓碎、發酵、蒸餾。"
     ],
     [
      "藍鑽",
      "浸泡仙人掌果與小柑橘皮，蝶豆花上色；遇到酸性的檸檬汁或通寧水，會從深藍變成淡紫粉。"
     ],
     [
      "粉鑽",
      "浸泡墨西哥粉紅葡萄柚皮。"
     ]
    ],
    "quote": {
     "t": "我們做 The Butterfly Cannon，是要讓你重新想想龍舌蘭這個類別。",
     "o": "We created The Butterfly Cannon Tequila to make you rethink the tequila category",
     "who": "Elwyn Gladstone，Biggar & Leith",
     "src": "Asian Trader（2021）"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/82/Paisaje_agaves_cerca_de_Tequila%2C_Jal._28042024.jpg",
     "w": 7977,
     "t": "哈利斯科州特基拉鎮（Tequila）附近的藍色龍舌蘭田",
     "by": "Juan Carlos Fonseca Mata",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Paisaje_agaves_cerca_de_Tequila,_Jal._28042024.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/85/Paisaje_agavero_en_Para%C3%ADso_Azul%2C_Tequila%2C_Jalisco.jpg",
     "w": 2048,
     "t": "哈利斯科州特基拉的龍舌蘭景觀",
     "by": "Pequeño mar",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Paisaje_agavero_en_Para%C3%ADso_Azul,_Tequila,_Jalisco.jpg"
    }
   ],
   "sources": [
    [
     "Asian Trader：Biggar and Leith launches The Butterfly Cannon Tequila in UK（2021）",
     "https://www.asiantrader.biz/biggar-and-leith-launches-the-butterfly-cannon-tequila-in-uk"
    ],
    [
     "The Shout：Introducing the world's first colour-changing tequila（2022）",
     "https://theshout.com.au/introducing-the-worlds-first-colour-changing-tequila/"
    ],
    [
     "Caskers：Butterfly Cannon Blue Tequila",
     "https://caskers.com/butterfly-cannon-blue-tequila"
    ],
    [
     "Great Wine：Butterfly Cannon Blue Tequila（NOM 1438）",
     "https://greatwine.co.uk/butterfly-cannon-blue-tequila"
    ],
    [
     "Best Tasting Spirits：Review – Butterfly Cannon Blue Tequila",
     "https://www.besttastingspirits.com/?p=25089"
    ]
   ]
  },
  "casali": {
   "tone": [
    "#f6eedc",
    "#3a2a1e",
    "#8a6a4a",
    "#c49a45"
   ],
   "city": "斯坎迪亞諾（Scandiano）",
   "founded": "1900",
   "oneName": "卡莎莉酒莊",
   "one": {
    "c": "古",
    "t": "1900 年由 Giuseppe Casali 創立，自稱也被媒體稱為雷焦艾米利亞（Reggio Emilia）最古老的酒莊；1980 年代挖新酒窖時，還挖出一塊刻著「Ca' Bezina」的古羅馬石板。"
   },
   "hook": "第一間酒窖就蓋在斯坎迪亞諾的博亞爾多城堡旁；搬到新址挖地基時，挖出了一塊兩千年前的羅馬石板。",
   "order": [
    "about",
    "timeline",
    "name",
    "place",
    "craft"
   ],
   "about": {
    "paras": [
     "卡莎莉（Casali Viticultori）位在義大利艾米利亞－羅馬涅大區雷焦艾米利亞省的斯坎迪亞諾，酒莊在 Scandiano 與 Canossa 一帶的第一道緩坡上。官網寫明 1900 年由 Giuseppe Casali 把家裡自釀的酒變成正式事業，酒款也一直掛著「1900」的字樣。",
     "最早的酒窖緊鄰斯坎迪亞諾的博亞爾多城堡（Rocca dei Boiardo）。後來銷量變大、舊窖不夠用，1980 年代酒莊遷到現址 Pratissolo di Scandiano；挖新酒窖時出土一塊西元前後的羅馬石板，上面刻著貴族家族名「Ca' Bezina」，後來成了他們氣泡酒 Ca' Besina 的名字。",
     "這家酒莊專釀當地原生品種：各種藍布魯斯科（Lambrusco）、Spergola，以及我們這款用的 Malvasia di Candia Aromatica（芳香型瑪爾維西亞）。官網提到丘陵間有一道石膏礦脈（vena del gesso），他們認為這讓葡萄多了清爽與鹹鮮感。",
     "2014 年卡莎莉加入由當地三家老合作社組成的 Emilia Wine 集團，年產約 200 萬瓶，但仍以「卡莎莉 1900」品牌經營。"
    ],
    "profile": [
     [
      "所在地",
      "義大利 雷焦艾米利亞省 斯坎迪亞諾 Pratissolo（Via delle Scuole 7）"
     ],
     [
      "創業",
      "1900 年，Giuseppe Casali"
     ],
     [
      "集團",
      "2014 年起屬於 Emilia Wine 集團"
     ],
     [
      "土壤",
      "丘陵上的石膏礦脈與黏土"
     ],
     [
      "品種",
      "Lambrusco、Spergola、Malvasia di Candia Aromatica、Malbo Gentile 等原生品種"
     ],
     [
      "招牌",
      "Pra di Bosso 藍布魯斯科、Ca' Besina Spergola 傳統法氣泡酒"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1900,
     "e": "",
     "t": "Giuseppe Casali 把家中自釀變成正式釀酒事業，第一間酒窖緊鄰斯坎迪亞諾的博亞爾多城堡。",
     "approx": false
    },
    {
     "y": 1980,
     "e": "",
     "t": "以 Spergola 釀出 Ca' Besina 傳統法氣泡酒（1980 年份，1980 年代中推出），被視為艾米利亞－羅馬涅第一款 Spergola 傳統法氣泡酒。",
     "approx": true
    },
    {
     "y": 1985,
     "e": "",
     "t": "1980 年代：舊酒窖不敷使用，遷到 Pratissolo di Scandiano 現址；挖窖時出土刻有「Ca' Bezina」的羅馬石板。",
     "approx": true
    },
    {
     "y": 2014,
     "e": "",
     "t": "加入雷焦地區三家歷史酒廠合組的 Emilia Wine 集團。",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒莊名與酒款名，都有來歷。",
    "parts": [
     {
      "c": "Casali",
      "r": "卡莎莉",
      "n": "創辦人 Giuseppe Casali 的姓氏。"
     },
     {
      "c": "1900",
      "r": "",
      "n": "創業年份，也是酒莊對外使用的品牌名「Casali 1900」。"
     },
     {
      "c": "Ca' Besina",
      "r": "",
      "n": "來自新酒窖工地出土的羅馬石板上的家族名「Ca' Bezina」，後來用來命名他們的 Spergola 傳統法氣泡酒。"
     }
    ]
   },
   "place": [
    {
     "k": "丘",
     "t": "葡萄園在斯坎迪亞諾與 Quattro Castella 之間的第一道丘陵與山麓，介於波河平原與亞平寧山之間。"
    },
    {
     "k": "土",
     "t": "丘陵裡有一道石膏礦脈（vena del gesso），酒莊認為它帶來清爽感與淡淡鹹味。"
    },
    {
     "k": "城",
     "t": "斯坎迪亞諾的博亞爾多城堡（Rocca dei Boiardo）是鎮上地標，卡莎莉最早的酒窖就在城堡旁。"
    }
   ],
   "craft": {
    "title": "只釀雷焦的原生品種",
    "points": [
     [
      "Malvasia",
      "Malvasia di Candia Aromatica 是當地芳香型白葡萄，卡莎莉自有園地種植；這款氣泡甜白就是 100% 這個品種。"
     ],
     [
      "Spergola",
      "官網稱 Spergola 為 15 世紀就有記載的原生品種，酒莊有約十公頃 Spergola 園。"
     ],
     [
      "Lambrusco",
      "Pra di Bosso Storico 是他們第一款單一園藍布魯斯科，1980 年代初推出。"
     ]
    ]
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Rocca_dei_Boiardo_-_Scandiano%2C_Reggio_Emilia%2C_Italia_-_2_Agosto_2022.jpg",
     "w": 8248,
     "t": "斯坎迪亞諾的博亞爾多城堡（Rocca dei Boiardo）；卡莎莉最早的酒窖就在城堡旁",
     "by": "GiorgioGaleotti",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Rocca_dei_Boiardo_-_Scandiano,_Reggio_Emilia,_Italia_-_2_Agosto_2022.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rocca_dei_Boiardo_-_Scandiano%2C_Reggio_Emilia%2C_Italy_-_December_11%2C_2011_01.jpg",
     "w": 5500,
     "t": "冬日的博亞爾多城堡，義大利雷焦艾米利亞省斯坎迪亞諾",
     "by": "Giorgio Galeotti",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Rocca_dei_Boiardo_-_Scandiano,_Reggio_Emilia,_Italy_-_December_11,_2011_01.jpg"
    }
   ],
   "sources": [
    [
     "Casali 1900 官網：La Cantina",
     "https://casali1900.it/la-cantina/"
    ],
    [
     "Casali 1900 官網",
     "https://casali1900.it/"
    ],
    [
     "Quotidiano.net：Casali Viticultori, frizzante orgoglio reggiano",
     "https://www.quotidiano.net/itinerari/vini/casali-viticultori-frizzante-orgoglio-reggiano-dal-lambrusco-alla-spergola-p8zwpz7o"
    ],
    [
     "Vinicum：Casali 1900 酒莊頁",
     "https://www.vinicum.com/en/le-cantine/casali-1900"
    ],
    [
     "Wine.com：Casali Viticultori Emilia Acaja Dolce Malvasia",
     "https://www.wine.com/product/casali-viticultori-emilia-acaja-dolce-malvasia-2012/310116"
    ]
   ]
  },
  "chateau-burgozone": {
   "tone": [
    "#3b1d22",
    "#f5ecdf",
    "#d6b99a",
    "#b5763f"
   ],
   "dark": true,
   "city": "奧里亞霍沃（Oryahovo）",
   "founded": "2000",
   "oneName": "布爾松城堡",
   "one": {
    "c": "堡",
    "t": "酒莊名字取自一座古羅馬要塞 Burgozone——它曾立在今天葡萄園所在的多瑙河岸，守著羅馬帝國的北方邊界；遺址出土的陶片收藏在當地鄉土博物館。"
   },
   "hook": "葡萄園蓋在古羅馬要塞的舊址上，往下看就是多瑙河與對岸的羅馬尼亞。",
   "order": [
    "about",
    "name",
    "timeline",
    "place",
    "craft"
   ],
   "about": {
    "paras": [
     "布爾松城堡（Château Burgozone）位在保加利亞西北部，多瑙河南岸奧里亞霍沃（Oryahovo）附近的萊斯科韋茨村，是家族經營的酒莊。名字來自曾經立在這片坡地上的羅馬要塞 Burgozone，它位於古羅馬的 Via Istrum 道路上，守衛帝國北境。",
     "2000 年，Marinov 一家造訪奧里亞霍沃一帶，土壤專家 Penkov 教授確認這裡的風土是保加利亞最好的之一，計畫就此開始。2003 年把最好的地塊整合成一片，2005 年依土壤與氣候分析挑選品種、從法國引進苗木；2010 年酒廠正式落成，有自己的裝瓶線。",
     "葡萄園約 100 公頃，連成一整片圍著酒廠，位在多瑙河陡峭的南岸，海拔 130–180 公尺，看得見河中的 Esperanto 島。土壤是深厚黃土上的碳酸鹽黑鈣土，多孔、排水好，有些地方根能扎到 7 公尺深。酒莊相信「八成的品質來自葡萄」，所有酒只用自家葡萄。",
     "這裡種了 11 個國際品種和兩個保加利亞原生品種 Gamza（紅）與 Tamyanka（白）。招牌是夏多內，2009 年拿下保加利亞第一面布魯塞爾世界葡萄酒大賽大金牌；保加利亞經濟部多次評為「金牌酒莊」。現任負責人 Stefan Marinov，女兒負責出口，酒賣到四大洲 24 個國家。"
    ],
    "profile": [
     [
      "所在地",
      "保加利亞弗拉察州奧里亞霍沃附近萊斯科韋茨村，多瑙河南岸"
     ],
     [
      "創業",
      "2000 年計畫開始；2010 年酒廠落成"
     ],
     [
      "莊主",
      "Marinov 家族（Stefan Marinov）"
     ],
     [
      "葡萄園",
      "約 100 公頃單一園，海拔 130–180 公尺"
     ],
     [
      "土壤",
      "深厚黃土上的碳酸鹽黑鈣土"
     ],
     [
      "品種",
      "夏多內、維歐尼耶、白蘇維濃、黑皮諾、卡本內弗朗、馬瑟蘭、希哈等，及原生 Gamza、Tamyanka"
     ],
     [
      "招牌",
      "Château Burgozone 夏多內"
     ]
    ]
   },
   "timeline": [
    {
     "y": 2000,
     "e": "",
     "t": "土壤專家 Penkov 教授確認奧里亞霍沃一帶風土，Burgozone 計畫開始",
     "approx": false
    },
    {
     "y": 2003,
     "e": "",
     "t": "整合最好的地塊，成為一整片自家掌控的葡萄園",
     "approx": false
    },
    {
     "y": 2005,
     "e": "",
     "t": "依土壤與氣候分析選定品種，從法國引進苗木種植",
     "approx": false
    },
    {
     "y": 2009,
     "e": "",
     "t": "夏多內在布魯塞爾世界葡萄酒大賽拿下保加利亞第一面大金牌",
     "approx": false
    },
    {
     "y": 2010,
     "e": "",
     "t": "酒廠落成，設有自己的裝瓶線",
     "approx": false
    },
    {
     "y": 2011,
     "e": "",
     "t": "與比利時進口商簽約，首次出口",
     "approx": false
    },
    {
     "y": 2018,
     "e": "",
     "t": "推出原生品種 Tamyanka 與 Gamza",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒莊、酒款系列，都用了羅馬時代的名字：",
    "parts": [
     {
      "c": "Burgozone",
      "r": "布爾松",
      "n": "曾立於葡萄園所在地的羅馬要塞，守衛帝國北方的多瑙河邊界"
     },
     {
      "c": "Via Istrum",
      "r": "伊斯特倫大道",
      "n": "要塞所在的古羅馬道路，酒莊也用它當一個系列的名字"
     }
    ]
   },
   "place": [
    {
     "k": "河",
     "t": "葡萄園在多瑙河陡峭的南岸，河對面是羅馬尼亞，可以看到河中的 Esperanto 島；河流帶來涼意，也讓這裡偏潮濕。"
    },
    {
     "k": "土",
     "t": "深厚黃土上的碳酸鹽黑鈣土，多孔透水，地下水豐富，根系有的深達 7 公尺。"
    },
    {
     "k": "坡",
     "t": "海拔 130–180 公尺的單一坡地，約 100 公頃葡萄園圍繞著酒廠。"
    }
   ],
   "craft": {
    "title": "只用自家園的葡萄",
    "points": [
     [
      "原則",
      "相信八成品質來自葡萄，所有酒只用莊內 100 公頃的葡萄。"
     ],
     [
      "田間",
      "超過 30 個無性繁殖系，產量控制在每公頃 20–45 百升；河邊太潮濕做不了有機，但讓覆蓋作物自然生長。"
     ],
     [
      "風格",
      "酒莊用「3F」形容自己的風格：Fresh、Fruity、Fine（新鮮、果香、細緻）。"
     ]
    ],
    "quote": {
     "t": "每一杯 Burgozone，都帶你到多瑙河畔的坡地走一趟。",
     "o": "Each glass of Burgozone takes you on a journey to the slopes of the Danube.",
     "who": "Château Burgozone 酒莊",
     "src": "bulgaria-shop.de 酒莊介紹"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/12/Oryahovo2TB.jpg",
     "w": 2816,
     "t": "多瑙河南岸的奧里亞霍沃鎮，布爾松城堡就在鎮外的河岸坡地上",
     "by": "Todor Bozhinov",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Oryahovo2TB.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/77/Oryahovo5TB.jpg",
     "w": 2816,
     "t": "奧里亞霍沃與對岸羅馬尼亞 Bechet 之間的多瑙河渡輪",
     "by": "Todor Bozhinov",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Oryahovo5TB.jpg"
    }
   ],
   "sources": [
    [
     "bulgaria-shop.de：Winery Château Burgozone（含酒莊年表）",
     "https://www.bulgaria-shop.de/en/hersteller/winery-chateau-burgozone"
    ],
    [
     "Wine Anorak：Exploring Bulgarian wine (4) Château Burgozone",
     "https://wineanorak.com/2025/03/28/exploring-bulgarian-wine-4-chateau-burgozone/"
    ],
    [
     "WineTourism.com：Chateau Burgozone",
     "https://www.winetourism.com/winery/chateau-burgozone/"
    ],
    [
     "BTA：Chateau Burgozone wines exported to 24 countries across four continents",
     "https://www.bta.bg/en/bg-wine/976426-chateau-burgozone-wines-exported-to-24-countries-across-four-continents"
    ],
    [
     "European Commission 出口商故事：Bulgaria – Burgozone",
     "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/exporters-stories/bulgaria-burgozone_en"
    ],
    [
     "Emerging Europe：The charm of Bulgaria's wine chateaux",
     "https://emerging-europe.com/the-charm-of-bulgarias-wine-chateaux/"
    ]
   ]
  },
  "donnafugata": {
   "tone": [
    "#3a1f1c",
    "#f6ecdc",
    "#d8b98f",
    "#c0603e"
   ],
   "dark": true,
   "city": "孔泰薩恩泰利納（Contessa Entellina）／馬沙拉（Marsala）",
   "founded": "1983",
   "oneName": "多娜佳塔酒莊",
   "one": {
    "c": "逃",
    "t": "Donnafugata 意思是「逃走的女人」，典故出自小說《豹》（Il Gattopardo）：拿坡里王后瑪麗亞・卡洛琳娜逃難時，曾避居在今天酒莊葡萄園所在的這片土地；酒莊標誌就是一位髮絲被風吹起的女子。"
   },
   "hook": "名字取自一位逃難的王后；第一款酒 Anthìlia，則是古羅馬人替山頂古城恩泰拉取的名字。",
   "order": [
    "about",
    "name",
    "timeline",
    "place",
    "craft"
   ],
   "about": {
    "paras": [
     "多娜佳塔（Donnafugata）是西西里的家族酒莊。Rallo 家族在馬沙拉（Marsala）的老酒窖可追溯到 1851 年；1983 年，第四代 Giacomo Rallo 和妻子 Gabriella 在 Gabriella 家位於西西里西部孔泰薩恩泰利納（Contessa Entellina）的莊園，創立了 Donnafugata。",
     "酒莊名來自蘭佩杜薩的小說《豹》：Donnafugata 是「逃走的女人」，指的是拿坡里王后瑪麗亞・卡洛琳娜逃難時避居此地的故事。酒標上那位風中女子，就是從這個典故來的。",
     "我們賣的安提利亞（Anthìlia）是酒莊構想的第一款酒。Anthìlia 是古羅馬人對恩泰拉（Entella）的稱呼，那是一座建在岩山頂上、由古代艾利米人（Elymians）建立的城市；酒標上神祕的女性臉孔，就是在呼應艾利米人。",
     "1989 年酒莊登上潘泰萊里亞島種 Zibibbo 釀甜酒，2016 年再擴及埃特納火山與維多利亞。創辦人 Giacomo 於 2016 年過世，現在由第五代 José 與 Antonio Rallo 姊弟共同經營，Gabriella 任榮譽董事長。"
    ],
    "profile": [
     [
      "所在地",
      "義大利 西西里島西部 孔泰薩恩泰利納（另有馬沙拉、潘泰萊里亞、埃特納、維多利亞園區）"
     ],
     [
      "創業",
      "1983 年（Rallo 家族馬沙拉酒窖始於 1851 年）"
     ],
     [
      "創辦人",
      "Giacomo Rallo（1937–2016）與 Gabriella Anca Rallo"
     ],
     [
      "經營",
      "第五代 José Rallo、Antonio Rallo"
     ],
     [
      "風土",
      "孔泰薩恩泰利納丘陵，海拔約 200–400 公尺，以黏壤土為主"
     ],
     [
      "招牌",
      "Anthìlia（第一款酒）、Mille e una Notte（1995 年與釀酒師 Giacomo Tachis 合作推出）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1851,
     "e": "",
     "t": "Rallo 家族在馬沙拉的歷史酒窖可追溯至這一年。",
     "approx": false
    },
    {
     "y": 1983,
     "e": "",
     "t": "Giacomo Rallo 與 Gabriella 在孔泰薩恩泰利納莊園創立 Donnafugata；第一款構想的酒就是 Anthìlia。",
     "approx": false
    },
    {
     "y": 1989,
     "e": "",
     "t": "登上潘泰萊里亞島，種植 Zibibbo、釀造潘泰萊里亞風乾甜酒。",
     "approx": false
    },
    {
     "y": 1994,
     "e": "",
     "t": "與插畫家 Stefano Vitale 合作，推出第一張插畫酒標 La Fuga。",
     "approx": false
    },
    {
     "y": 2016,
     "e": "",
     "t": "擴展到埃特納火山與維多利亞；同年創辦人 Giacomo Rallo 辭世。",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒莊和這款酒的名字，都藏著西西里的故事。",
    "parts": [
     {
      "c": "Donnafugata",
      "r": "donna（女人）＋ fugata（逃走的）",
      "n": "「逃走的女人」。出自小說《豹》，指拿坡里王后瑪麗亞・卡洛琳娜逃難時避居於此；酒莊標誌是一位髮絲隨風飛揚的女子。"
     },
     {
      "c": "Anthìlia",
      "r": "安提利亞",
      "n": "古羅馬人對恩泰拉（Entella）的稱呼。恩泰拉是艾利米人建在岩山頂上的古城，就在孔泰薩恩泰利納一帶。"
     }
    ]
   },
   "place": [
    {
     "k": "岩",
     "t": "恩泰拉岩山（Rocca d'Entella）是孔泰薩恩泰利納附近的地標，山頂有古城遺址；Anthìlia 的名字就從這裡來。"
    },
    {
     "k": "丘",
     "t": "Anthìlia 的葡萄主要來自孔泰薩恩泰利納莊園，丘陵海拔約 200–400 公尺，黏壤土為主。"
    },
    {
     "k": "島",
     "t": "1989 年起在潘泰萊里亞火山島的梯田種 Zibibbo（亞歷山大麝香）。"
    }
   ],
   "craft": {
    "title": "用插畫說酒的故事",
    "points": [
     [
      "品種",
      "Anthìlia 以 Lucido（即 Catarratto）為主，混入其他原生與國際品種。"
     ],
     [
      "陳釀",
      "在不鏽鋼槽陳放至少兩個月，再瓶陳約兩個月後上市。"
     ],
     [
      "酒標",
      "1994 年起與插畫家 Stefano Vitale 合作；酒莊的說法是：藝術不是裝飾酒，而是在描述酒。"
     ]
    ],
    "quote": {
     "t": "釀出好酒，首先是一種尊重。",
     "o": "Make quality wine is, first and foremost, an act of respect.",
     "who": "Donnafugata 酒莊理念",
     "src": "Donnafugata 官網 Roots 頁"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/57/Rocca_di_Entella.JPG",
     "w": 7984,
     "t": "恩泰拉岩山（Rocca di Entella），古城恩泰拉的所在地，Anthìlia 之名由此而來",
     "by": "Davide Mauro",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Rocca_di_Entella.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/4/40/Rocca_di_Entella_da_Monte_Genuardo.jpg",
     "w": 4032,
     "t": "從 Genuardo 山眺望恩泰拉岩山與周邊丘陵，西西里西部",
     "by": "Davide Mauro",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Rocca_di_Entella_da_Monte_Genuardo.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/16/Comune_di_Contessa_Entellina_PA_skyline.jpg",
     "w": 4549,
     "t": "孔泰薩恩泰利納鎮景，多娜佳塔創立的地方",
     "by": "Swoolverton",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Comune_di_Contessa_Entellina_PA_skyline.jpg"
    }
   ],
   "sources": [
    [
     "Donnafugata 官網：Roots",
     "https://www.donnafugata.it/en/roots/"
    ],
    [
     "Donnafugata 官網：Anthìlia",
     "https://www.donnafugata.it/en/product/anthilia/"
    ],
    [
     "Folio Fine Wine Partners：Donnafugata Anthìlia",
     "https://www.foliowine.com/wine/donnafugata-anthilia"
    ],
    [
     "Decanter：Producer profile: Donnafugata",
     "https://www.decanter.com/premium/producer-profile-donnafugata-410859/"
    ],
    [
     "wein.plus 葡萄酒辭典：Donnafugata",
     "https://glossary.wein.plus/donnafugata"
    ]
   ]
  },
  "georg-mueller": {
   "tone": [
    "#3a1f1c",
    "#f6eedf",
    "#d8bfa0",
    "#b8864b"
   ],
   "dark": true,
   "city": "哈騰海姆（Hattenheim）",
   "founded": "1882",
   "oneName": "喬治穆勒基金會酒莊",
   "one": {
    "c": "贈",
    "t": "1913 年 12 月 6 日，創辦人喬治・穆勒把整座酒莊捐給家鄉哈騰海姆，成立基金會（Stiftung），規定收益用來幫助村裡需要幫助的人。酒莊名字裡的「Stiftung」就是這份捐贈留下的。"
   },
   "hook": "一座被主人整個捐給家鄉的酒莊：1913 年起，它的收益屬於哈騰海姆村。",
   "order": [
    "about",
    "timeline",
    "name",
    "craft",
    "place"
   ],
   "about": {
    "paras": [
     "喬治穆勒基金會酒莊（Weingut Georg Müller Stiftung）位在德國萊茵高的哈騰海姆，地址是 Eberbacher Straße 7–9。19 世紀末，埃爾特維勒氣泡酒商 Matheus Müller 家族的喬治・穆勒在這裡創立酒莊，多數資料記為 1882 年。",
     "1913 年 12 月 6 日，喬治・穆勒把酒莊捐給家鄉哈騰海姆，成立基金會，收益要給村裡有需要的居民。1972 年哈騰海姆併入埃爾特維勒市，酒莊改稱「埃爾特維勒市立酒莊」，一直到 2003 年市政府決定民營化。",
     "2003 年，曾任德國大型酒商執行長的 Peter Winter 買下酒莊，向市政府租用葡萄園，整修建物與設備；市府至今仍收取葡萄園租金與「Georg Müller Stiftung」名稱的授權費。酒莊的歷史拱頂酒窖改成當代藝術展場（Kunstkeller），定期展出藝術家作品。",
     "酒莊是德國頂級酒莊聯盟 VDP 成員，種植面積約 20 公頃，約八成是麗絲玲，其餘有早熟與晚熟黑皮諾等。現任莊主 Peter Winter，營運經理兼釀酒師是 Tim Lilienström。"
    ],
    "profile": [
     [
      "所在地",
      "德國萊茵高・埃爾特維勒市哈騰海姆，Eberbacher Straße 7–9"
     ],
     [
      "創業",
      "19 世紀末（多數資料記為 1882 年）；1913 年捐為基金會"
     ],
     [
      "莊主",
      "Peter Winter（2003 年起）"
     ],
     [
      "釀酒師",
      "Tim Lilienström（營運經理兼酒窖主任）"
     ],
     [
      "葡萄園",
      "約 20.8 公頃；Hattenheimer Schützenhaus、Hassel、Nußbrunnen、Wisselbrunnen、Engelmannsberg、Heiligenberg 等"
     ],
     [
      "品種",
      "約 80% 麗絲玲、15% 早熟／晚熟黑皮諾，其餘 5% 為 Auxerrois 等"
     ],
     [
      "土壤",
      "壤土與黃土，夾石英岩等岩塊，部分為沖積土"
     ],
     [
      "所屬",
      "VDP 德國頂級酒莊聯盟"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1882,
     "e": "19 世紀末",
     "t": "Matheus Müller 氣泡酒家族的喬治・穆勒在哈騰海姆創立酒莊",
     "approx": true
    },
    {
     "y": 1913,
     "e": "12 月 6 日",
     "t": "喬治・穆勒把酒莊捐給家鄉哈騰海姆，成立基金會，收益用於救助村中有需要的人",
     "approx": false
    },
    {
     "y": 1972,
     "e": "",
     "t": "哈騰海姆併入埃爾特維勒市，酒莊改稱「埃爾特維勒市立酒莊」",
     "approx": false
    },
    {
     "y": 2003,
     "e": "",
     "t": "市府決定民營化，Peter Winter 買下酒莊並租用葡萄園，大幅整修",
     "approx": false
    },
    {
     "y": 2007,
     "e": "",
     "t": "推出第一批 Erstes Gewächs（一級園）等級的酒款",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒莊的全名就是一段歷史。",
    "parts": [
     {
      "c": "Georg Müller",
      "r": "喬治・穆勒",
      "n": "創辦人，埃爾特維勒氣泡酒商 Matheus Müller 的孫子"
     },
     {
      "c": "Stiftung",
      "r": "基金會",
      "n": "1913 年他把酒莊捐給哈騰海姆村成立基金會，收益用來救助村民；酒莊民營化後仍保留這個名字"
     }
    ]
   },
   "place": [
    {
     "k": "村",
     "t": "哈騰海姆是萊茵河右岸的葡萄酒村，1972 年併入埃爾特維勒市。酒莊現址是 Eberbacher Straße 上的歷史建築 Wilhelmj-Haus。"
    },
    {
     "k": "土",
     "t": "葡萄園以壤土與黃土為主，夾雜石英岩等岩塊，靠近河岸的地塊有沖積土。"
    },
    {
     "k": "園",
     "t": "主要地塊包括 Hattenheimer Schützenhaus、Hassel、Nußbrunnen、Wisselbrunnen、Engelmannsberg，除 Heiligenberg 外都列為一級園（Erstes Gewächs）。"
    }
   ],
   "craft": {
    "title": "酒與藝術放在同一個酒窖",
    "points": [
     [
      "田間",
      "官網表示不用化學肥料與除草劑，行間混播覆蓋作物，大部分葡萄手工採收。"
     ],
     [
      "品種",
      "約八成麗絲玲，另有黑皮諾；2020 年份 Hattenheimer Engelmannsberg 黑皮諾在 ProWein 2024 的 Mundus Vini 獲評為德國最佳黑皮諾。"
     ],
     [
      "酒窖",
      "歷史拱頂酒窖改為當代藝術展場（Kunstkeller），由莊主 Peter Winter 策劃展覽。"
     ]
    ],
    "quote": {
     "t": "釀酒是一門手藝，把品質做到頂尖則是一門藝術。",
     "o": "Weinherstellung ist ein Handwerk, Topqualität zu erreichen ist eine Kunst.",
     "who": "Peter Winter，酒莊莊主",
     "src": "Weingut Georg Müller Stiftung 官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/8b/HattenheimHausWilhelmjO.JPG",
     "w": 1704,
     "t": "哈騰海姆 Eberbacher Straße 上的 Wilhelmj 宅，酒莊目前就設在這棟歷史建築（由東側拍攝）",
     "by": "Brühl",
     "lic": "Public domain",
     "licUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
     "page": "https://commons.wikimedia.org/wiki/File:HattenheimHausWilhelmjO.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/67/Georg_Mueller_Stiftung_Weinbergsmarkierung_Hattenheimer_Sch%C3%BCtzenhaus.jpg",
     "w": 3790,
     "t": "Hattenheimer Schützenhaus 葡萄園裡，標示喬治穆勒基金會酒莊地塊的歷史界石",
     "by": "Marion Halft",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Georg_Mueller_Stiftung_Weinbergsmarkierung_Hattenheimer_Sch%C3%BCtzenhaus.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/ff/HattenheimerPfaffenbergB42Nachtfrost.JPG",
     "w": 3314,
     "t": "秋天的哈騰海姆：前景是 Pfaffenberg 葡萄園，後方是村子（從西南方拍攝）",
     "by": "Brühl",
     "lic": "Public domain",
     "licUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
     "page": "https://commons.wikimedia.org/wiki/File:HattenheimerPfaffenbergB42Nachtfrost.JPG"
    }
   ],
   "sources": [
    [
     "Wikipedia (de)：Weingut Georg Müller Stiftung",
     "https://de.wikipedia.org/wiki/Weingut_Georg_M%C3%BCller_Stiftung"
    ],
    [
     "VDP：Weingut Georg Müller Stiftung",
     "https://www.vdp.de/en/die-winzer/rheingau/vdpweingut-georg-mueller-stiftung"
    ],
    [
     "Weingut Georg Müller Stiftung 官網",
     "https://www.georg-mueller-stiftung.de/"
    ],
    [
     "Wine Business International：Weingut Georg Müller Stiftung - Drink wine and contribute to a charitable cause",
     "https://www.wine-business-international.com/wine/families-wine-sponsored-reports/weingut-georg-muller-stiftung-drink-wine-and-contribute"
    ],
    [
     "Schiller-Wine：Wine and Art – Peter Winter's Georg Müller Stiftung",
     "https://schiller-wine.blogspot.com/2010/06/wine-and-art-peter-winters-georg.html"
    ]
   ]
  },
  "hagino": {
   "tone": [
    "#f6eee4",
    "#3a2421",
    "#8c5d55",
    "#b0485a"
   ],
   "city": "栗原市",
   "founded": "1840",
   "oneName": "萩野酒造",
   "one": {
    "c": "少",
    "t": "萩野酒造把理念寫得很直白：「良いものを少しだけ造る」——好東西，只做一點點。酒藏一般不開放參觀，連店面也只賣部分酒款。"
   },
   "hook": "奧州街道上的宿場「有壁宿」，本陣家族分出一支，在天保 11 年（1840）開始釀酒；2011 年震災把工廠整個震毀，一年半後的秋天，他們又重新開釀。",
   "order": [
    "about",
    "timeline",
    "craft",
    "name",
    "place"
   ],
   "about": {
    "paras": [
     "萩野酒造在宮城縣最北端的栗原市金成有壁。有壁是江戶時代奧州街道上的宿場，1619 年（元和 5 年）設置宿驛時建了接待大名的「有壁本陣」；萩野酒造正是從本陣家族分家出來，在 1840 年（天保 11 年）開始釀酒，1923 年（大正 12 年）改組為公司。",
     "二戰期間酒造一度中斷，1948 年（昭和 23 年）復釀。2011 年東日本大震災，工廠全毀；靠著群組補助金與縣的災後設備重建貸款，震災一年半後的秋天重新開始釀酒。現任代表佐藤曜平是第 8 代。",
     "主力銘柄有兩個：以舊地名「萩の村」命名的「萩の鶴」，以及主打生酛系的「日輪田」。酒藏的理想是「既休閒又有質感，像一件好 T 恤的酒」，讓人配著料理留下記憶。",
     "我們店裡的三支都是萩の鶴純米吟醸：辛口一支，加上季節限定的「別仕込 生原酒」貓標系列——春天的櫻花貓、冬天的暖桌貓，每季換一隻貓上酒標。"
    ],
    "profile": [
     [
      "所在地",
      "宮城縣栗原市金成有壁新町 52 番地"
     ],
     [
      "創業",
      "1840 年（天保 11 年）；1923 年（大正 12 年）設立公司"
     ],
     [
      "當主",
      "代表取締役 佐藤曜平（第 8 代）"
     ],
     [
      "水",
      "從自家山林引來的軟水"
     ],
     [
      "米",
      "藏の華、美山錦、雄町、山田錦等"
     ],
     [
      "銘柄",
      "萩の鶴、日輪田"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1619,
     "e": "元和 5 年",
     "t": "奧州街道設置有壁宿，建立有壁本陣",
     "approx": false
    },
    {
     "y": 1840,
     "e": "天保 11 年",
     "t": "自有壁本陣分家，開始釀酒",
     "approx": false
    },
    {
     "y": 1923,
     "e": "大正 12 年",
     "t": "設立清酒製造販賣公司",
     "approx": false
    },
    {
     "y": 1948,
     "e": "昭和 23 年",
     "t": "戰時中斷後恢復釀酒",
     "approx": false
    },
    {
     "y": 2011,
     "e": "平成 23 年",
     "t": "東日本大震災，工廠全毀",
     "approx": false
    },
    {
     "y": 2012,
     "e": "平成 24 年",
     "t": "震災約一年半後的秋天，重新開始釀酒",
     "approx": true
    },
    {
     "y": 2023,
     "e": "令和 5 年",
     "t": "「日輪田 生酛 純米大吟醸」在 IWC 2023 純米大吟醸部門獲第一名",
     "approx": false
    }
   ],
   "name": {
    "lead": "兩個銘柄，一個講土地，一個講田。",
    "parts": [
     {
      "c": "萩の鶴",
      "r": "はぎのつる",
      "n": "取自這一帶的舊地名「萩の村」，萩花的「萩」配上吉祥的「鶴」"
     },
     {
      "c": "日輪田",
      "r": "ひわた",
      "n": "古代為獻給神明而種穀物的圓形田；也寄託「太陽」與「田」的恩惠，大家圍成「輪」一起享用之意"
     }
    ]
   },
   "place": [
    {
     "k": "宿場",
     "t": "有壁是奧州街道的宿驛。舊有壁宿本陣 1971 年被指定為國家史跡，佐藤家世代擔任本陣與町的檢斷，參勤交代的大名也在此歇腳。"
    },
    {
     "k": "水",
     "t": "仕込水是從自家所有地的山上引來的軟水。"
    },
    {
     "k": "米",
     "t": "以宮城縣產米為中心，使用藏の華、美山錦，也用雄町、山田錦。"
    }
   ],
   "craft": {
    "title": "好東西，只做一點點",
    "points": [
     [
      "酒母",
      "速釀酛（約兩週）與承襲生酛系的山廢酛（約一個月）並用"
     ],
     [
      "發酵",
      "醪最高溫控制在 11–14℃ 左右，一般 22–25 天，大吟釀 30–35 天"
     ],
     [
      "上槽",
      "自動壓榨之外，也做吊掛棉袋、只取自然滴落部分的「袋しぼり」"
     ],
     [
      "過濾",
      "萩の鶴、日輪田多數不做活性碳過濾"
     ],
     [
      "貯藏",
      "火入後以瓶裝冷藏貯存，控管熟成"
     ]
    ],
    "quote": {
     "t": "如果能善用好米與好水這些自然的恩惠，光是這樣就應該能釀出好喝的酒。",
     "o": "良い米と良い水、この自然の恵みを生かすことができれば、それだけで美味しい酒ができるはずです。",
     "who": "萩野酒造",
     "src": "萩野酒造官網〈コンセプト〉"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/df/Arikabejyukuhonjin.jpg",
     "w": 1423,
     "t": "栗原市金成有壁的舊有壁宿本陣（國家史跡），萩野酒造即從本陣家族分家而來",
     "by": "Ty19080914",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Arikabejyukuhonjin.jpg"
    }
   ],
   "sources": [
    [
     "萩野酒造官網：会社案内",
     "https://www.hagino-shuzou.co.jp/profile.php"
    ],
    [
     "萩野酒造官網：コンセプト",
     "https://www.hagino-shuzou.co.jp/concept.php"
    ],
    [
     "みやぎ産業振興機構：支援メニュー活用事例 萩野酒造株式会社（令和6年3月）",
     "https://www.joho-miyagi.or.jp/wp-content/uploads/2024/03/R603_haginoshuzo-1.pdf"
    ],
    [
     "宮城縣：国指定史跡 旧有壁宿本陣",
     "https://www.pref.miyagi.jp/soshiki/bunkazai/kuni-siseki11.html"
    ],
    [
     "SAKETIME：萩の鶴 純米吟醸 別仕込 生原酒（貓標）相關評論",
     "https://www.saketime.jp/reviews/186135/"
    ]
   ]
  },
  "hatsukame": {
   "tone": [
    "#f3ead6",
    "#2e241c",
    "#8a6a4a",
    "#b8452f"
   ],
   "city": "藤枝市",
   "founded": "1636",
   "oneName": "初龜釀造",
   "one": {
    "c": "龜",
    "t": "酒名取「像初日一樣閃耀、像龜一樣長久繁榮」之意；1977 年推出的「秘藏大吟釀 龜」定價一萬日圓，當時被稱為日本最貴的日本酒。"
   },
   "hook": "靜岡現存最古老的酒藏，1967 年一口氣拿下三大品評會第一，順勢推出了「大吟釀 愛」。",
   "order": [
    "about",
    "timeline",
    "name",
    "craft",
    "place"
   ],
   "about": {
    "paras": [
     "初龜釀造是靜岡縣現存最古老的酒藏。寬永 13 年（1636），初代橋本九郎右衛門以「足名屋」為屋號，在駿府城附近（今靜岡市葵區中町）開始釀酒。",
     "明治 9 年（1876），初龜買下舊東海道岡部宿的一家造酒屋作為第二釀造所，後來釀造集中到岡部，就是今天藤枝市岡部町的酒藏。",
     "昭和 42 年（1967），初龜在三個主要品評會同時拿下第一，為了紀念而開始市售「大吟釀 愛」；十年後又推出「秘藏大吟釀 龜」，以一萬日圓的零售價被稱為當時日本最貴的日本酒。",
     "仕込水是藏內約 50 公尺深井抽上來的南阿爾卑斯伏流水；主要用米是靜岡縣自己的酒米「譽富士」與兵庫縣東條特A地區的山田錦。官網把酒的理想寫成與靜岡的人與飲食文化調和。"
    ],
    "profile": [
     [
      "所在地",
      "靜岡縣藤枝市岡部町岡部 744（舊東海道岡部宿）"
     ],
     [
      "創業",
      "寬永 13 年（1636），屋號「足名屋」"
     ],
     [
      "杜氏",
      "南部杜氏 八重樫次幸（據 SAKETIME 介紹）"
     ],
     [
      "水",
      "藏內約 50 公尺深井的南阿爾卑斯伏流水"
     ],
     [
      "米",
      "譽富士（靜岡）、山田錦（兵庫東條）"
     ],
     [
      "銘柄",
      "初龜（はつかめ）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1636,
     "e": "寬永 13 年",
     "t": "橋本九郎右衛門以屋號「足名屋」在駿府城附近開始釀酒",
     "approx": false
    },
    {
     "y": 1876,
     "e": "明治 9 年",
     "t": "買下岡部宿的造酒屋，作為第二釀造所",
     "approx": false
    },
    {
     "y": 1967,
     "e": "昭和 42 年",
     "t": "三大品評會同時奪得第一，紀念推出「大吟釀 愛」",
     "approx": false
    },
    {
     "y": 1977,
     "e": "昭和 52 年",
     "t": "推出「秘藏大吟釀 龜」，零售價一萬日圓，被稱為當時日本最貴的日本酒",
     "approx": false
    }
   ],
   "name": {
    "lead": "新年第一道光，加上長壽的龜。",
    "parts": [
     {
      "c": "初",
      "r": "はつ",
      "n": "像初日（元旦第一道日出）一樣閃耀。"
     },
     {
      "c": "龜",
      "r": "かめ",
      "n": "像龜一樣長久繁榮。因為字面吉利，常被選來當新年與喜宴用酒。"
     }
    ]
   },
   "place": [
    {
     "k": "宿場",
     "t": "酒藏位在舊東海道的岡部宿，1876 年從駿府城下搬來這裡。"
    },
    {
     "k": "水",
     "t": "從藏內約 50 公尺深的井抽取南阿爾卑斯的伏流水，用於洗米、浸米、仕込與加水。"
    },
    {
     "k": "米",
     "t": "以靜岡縣自己的酒米「譽富士」和兵庫縣東條特A地區的山田錦為主。"
    }
   ],
   "craft": {
    "title": "靜岡型的吟釀",
    "points": [
     [
      "寒造",
      "只在 10 月到隔年 4 月的冬季半年仕込。"
     ],
     [
      "吟釀",
      "官網自述是吟釀釀造的先驅之一，1967 年的「大吟釀 愛」與 1977 年的「龜」是代表。"
     ],
     [
      "酒質",
      "官網的目標是甜味與酸味收斂、香氣清新、口感輕盈，帶適度的米香。"
     ]
    ]
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Hatsukame_Sake_Brewery_ac_%281%29.jpg",
     "w": 5816,
     "t": "藤枝市岡部町的初龜釀造，木造兩層的主屋與門前的松樹（2023 年攝）",
     "by": "Asturio Cantabrio",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Hatsukame_Sake_Brewery_ac_(1).jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Hatsukame_Sake_Brewery_ac_%283%29.jpg",
     "w": 5788,
     "t": "從街道另一側看初龜釀造的主屋與板牆（2023 年攝）",
     "by": "Asturio Cantabrio",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Hatsukame_Sake_Brewery_ac_(3).jpg"
    }
   ],
   "sources": [
    [
     "初龜釀造官網：歷史",
     "https://www.hatsukame.jp/history.html"
    ],
    [
     "初龜釀造官網：首頁",
     "https://hatsukame.jp/"
    ],
    [
     "初龜釀造官網：理念",
     "https://www.hatsukame.jp/thought.html"
    ],
    [
     "初龜釀造官網：原料",
     "https://www.hatsukame.jp/ingredients.html"
    ],
    [
     "地球の歩き方：初亀醸造",
     "https://www.arukikata.co.jp/webmagazine/294669/"
    ],
    [
     "SAKETIME：初亀",
     "https://www.saketime.jp/brands/1101/"
    ]
   ]
  },
  "hayasihonten": {
   "tone": [
    "#f6ece6",
    "#2c1c1a",
    "#7c5a50",
    "#c0485a"
   ],
   "city": "各務原市",
   "founded": "1920",
   "oneName": "林本店",
   "one": {
    "c": "櫻",
    "t": "主力銘柄「百十郎」取自各務原出身的歌舞伎演員市川百十郎——他在 1931、1932 年捐出共 1,200 株吉野櫻種在新境川堤，後來被稱為「百十郎櫻」。酒藏說，2010 年推出這支酒，是想做一支在盛開的百十郎櫻下開心喝的酒。"
   },
   "hook": "1931 年，一位在全國巡演的歌舞伎演員回到故鄉各務原，捐了上千株櫻花；八十年後，當地酒藏用他的名字釀了一支賞櫻的酒。",
   "order": [
    "about",
    "name",
    "place",
    "craft",
    "timeline"
   ],
   "about": {
    "paras": [
     "林本店位在岐阜縣各務原市那加新加納町。官網說，創業者林榮一原本是種稻的農家，想用自己種的米釀出最好喝的酒，1920 年（大正 9 年）開了酒藏，第一支酒就叫「榮一」。",
     "現任社長林里榮子是第五代當主，2007 年就任。她在官網寫道，自己生在酒藏，幼稚園畢業紀念冊上就寫著「要當酒屋」。Umami Mart 的訪問提到，她在東京農業大學念釀造學，之後在麒麟啤酒做過業務；祖父早逝後，是祖母以女社長身分撐起酒藏。",
     "2010 年推出的「百十郎」，名字來自各務原出身的歌舞伎演員市川百十郎（1882–1969）。他以舞台結合影片的「連鎖劇」走紅，被稱為東海第一的花形演員；1930 年得知故鄉境川放水路工程有人罹難，隔年捐出 1,000 株吉野櫻，與居民一起種在堤上，1932 年又加捐 200 株，這片櫻堤就是今天的賞花名所「百十郎櫻」。",
     "2020 年迎來釀酒 100 年，酒藏推出新概念的「NEXT GENERATION」系列，並以「無添加乳酸菌發酵製法」為號召，主張只借微生物之力釀酒。標語是「ワクワクを醸そう」（釀出雀躍的心情）。"
    ],
    "profile": [
     [
      "所在地",
      "岐阜縣各務原市那加新加納町 2239"
     ],
     [
      "創業",
      "大正 9 年（1920）10 月"
     ],
     [
      "當主",
      "第五代 代表取締役社長 林里榮子（2007 年就任）"
     ],
     [
      "水",
      "長良川伏流水（官網形容為來自日本阿爾卑斯的超軟水）"
     ],
     [
      "米",
      "只在岐阜美濃地方栽培的飯米「ハツシモ」等"
     ],
     [
      "銘柄",
      "百十郎、榮一"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1920,
     "e": "大正 9 年",
     "t": "林榮一創立酒藏，推出第一支酒「榮一」",
     "approx": false
    },
    {
     "y": 1931,
     "e": "昭和 6 年",
     "t": "市川百十郎捐出 1,000 株吉野櫻種在境川放水路堤，隔年再捐 200 株",
     "approx": false
    },
    {
     "y": 1966,
     "e": "昭和 41 年",
     "t": "第三代林キミ就任社長",
     "approx": false
    },
    {
     "y": 2007,
     "e": "平成 19 年",
     "t": "第五代林里榮子就任社長",
     "approx": false
    },
    {
     "y": 2010,
     "e": "平成 22 年",
     "t": "推出銘柄「百十郎」",
     "approx": false
    },
    {
     "y": 2020,
     "e": "令和 2 年",
     "t": "釀酒 100 年，推出新概念系列「NEXT GENERATION」",
     "approx": false
    }
   ],
   "name": {
    "lead": "林本店的兩個銘柄，一個是創業者，一個是同鄉的歌舞伎演員。",
    "parts": [
     {
      "c": "百十郎",
      "r": "ひゃくじゅうろう",
      "n": "歌舞伎演員市川百十郎（本名加藤劍作，生於今各務原市蘇原大島町）。他捐贈的櫻堤稱「百十郎櫻」，酒標以歌舞伎臉譜為設計。"
     },
     {
      "c": "榮一",
      "r": "えいいち",
      "n": "創業者林榮一的名字，1920 年第一支酒的酒名；酒藏網域 eiichi.co.jp 也用這兩個字。"
     }
    ]
   },
   "place": [
    {
     "k": "櫻",
     "t": "新境川堤的「百十郎櫻」，由市川百十郎在 1931–1932 年捐贈的吉野櫻而來，現為各務原的賞花名所。"
    },
    {
     "k": "水",
     "t": "使用長良川伏流水，酒藏形容為來自日本阿爾卑斯雪融水的超軟水。"
    },
    {
     "k": "米",
     "t": "使用只在岐阜美濃地方栽培的米「ハツシモ」，官網說這些米以長良川的水灌溉。"
    }
   ],
   "craft": {
    "title": "只借微生物之力",
    "points": [
     [
      "乳酸菌",
      "以「無添加乳酸菌發酵製法」釀造，主打不添加、只借微生物之力的自然取向。"
     ],
     [
      "冷藏藏",
      "以冷藏藏製法在固定溫度下管理釀造工序，全年產出新鮮的酒。"
     ],
     [
      "岐阜原料",
      "米、水、酵母都用岐阜的。"
     ],
     [
      "沒有手冊",
      "社長在訪問中說，藏裡沒有釀酒手冊，她想打造一個讓成員邊想邊做的環境。"
     ]
    ],
    "quote": {
     "t": "相信明天的成果一定會比今天更好。",
     "o": "今日より明日の仕上がりは必ず良くなる",
     "who": "林里榮子，林本店第五代當主・社長",
     "src": "林本店官網 ABOUT"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Sinsakariv.JPG",
     "w": 3264,
     "t": "各務原市新境川堤盛開的櫻花（2009 年 4 月）",
     "by": "レルバ",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Sinsakariv.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Shin-Sakai_river.jpg",
     "w": 1280,
     "t": "各務原市的新境川（2008 年 7 月）",
     "by": "KAMUI",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Shin-Sakai_river.jpg"
    }
   ],
   "sources": [
    [
     "林本店官網",
     "https://www.eiichi.co.jp/"
    ],
    [
     "林本店官網 ABOUT（會社概要・沿革）",
     "https://www.eiichi.co.jp/about/"
    ],
    [
     "林本店官網：市川百十郎",
     "https://www.eiichi.co.jp/hyakujuro_ichikawa/"
    ],
    [
     "林本店官網：Natural Sake",
     "https://www.eiichi.co.jp/naturalsake/"
    ],
    [
     "Wikipedia：市川百十郎",
     "https://ja.wikipedia.org/wiki/市川百十郎"
    ],
    [
     "Umami Mart：Rieko Hayashi of Hayashi Honten Sake Brewery",
     "https://umamimart.com/blogs/main/rieko-hayashi-of-hayashi-honten-sake-brewery"
    ],
    [
     "SAKETIME：百十郎 蔵元情報",
     "https://www.saketime.jp/brands/2718/"
    ],
    [
     "value press：林本店新聞稿",
     "https://www.value-press.com/pressrelease/295598"
    ]
   ]
  },
  "hombo": {
   "tone": [
    "#2a1a1c",
    "#f6ece0",
    "#d8b9a0",
    "#b8454e"
   ],
   "dark": true,
   "city": "南薩摩市",
   "founded": "1872",
   "oneName": "本坊酒造",
   "one": {
    "c": "星",
    "t": "創業時當家庭院裡的梅子，用一款叫「星」的燒酎泡成梅酒；這款燒酎後來改名「寳星」，今天的梅酒藏也因此叫「星舎藏」。"
   },
   "hook": "明治五年（1872）在津貫以製棉起家；創業時當家庭院的梅樹結實，用自家燒酎「星」泡成的梅酒在地方上很有名，那份味道就是今天上等梅酒的源頭。",
   "order": [
    "about",
    "name",
    "craft",
    "timeline",
    "place"
   ],
   "about": {
    "paras": [
     "本坊酒造 1872 年（明治五年）在鹿兒島津貫（今南薩摩市加世田津貫）創業，最早做的是製棉，之後才走進燒酎。2022 年 2 月迎來 150 周年，現任社長是本坊和人。",
     "1909 年取得舊式燒酎（今稱本格燒酎）執照，1918 年引進德國專利的伊爾格斯式蒸餾機，開始做新式燒酎。1949 年取得威士忌執照，1955 年開始做梅酒，1960 年進入山梨的葡萄酒事業，今天旗下有「マルス」威士忌與葡萄酒。",
     "梅酒在鹿兒島工場裡的「星舎藏（ほしやぐら）」釀造，每年六月前後把新鮮青梅泡進酒裡。上等梅酒不加香料、色素與酸味料，梅子依收成選用南高梅、鶯宿梅、白加賀；為了更自然的梅香與酸味，梅子放得比較多，再加一點白蘭地與蜂蜜。",
     "我們店裡的兩款都屬於「上等梅酒」系列：知覽茶版泡入鹿兒島品牌茶「知覽茶」當年第一批新芽做的一番茶，是綠茶梅酒；柚子版是加入柚子的上等梅酒 ゆず。"
    ],
    "profile": [
     [
      "所在地",
      "創業地：鹿兒島縣南薩摩市加世田津貫；本社：鹿兒島市南榮"
     ],
     [
      "創業",
      "明治五年（1872）"
     ],
     [
      "社長",
      "本坊和人（代表取締役社長）"
     ],
     [
      "梅酒藏",
      "星舎藏（鹿兒島工場內）"
     ],
     [
      "招牌",
      "本格燒酎、マルス威士忌、上等梅酒"
     ],
     [
      "銘柄",
      "寳星、あらわざ桜島、マルス、上等梅酒（原味／黒糖／知覧茶／ゆず）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1872,
     "e": "明治 5 年",
     "t": "本坊郷右衛門與兒子松左衛門在津貫以製棉業創業",
     "approx": false
    },
    {
     "y": 1909,
     "e": "明治 42 年",
     "t": "取得舊式燒酎（本格燒酎）製造執照，在津貫展開酒類事業",
     "approx": false
    },
    {
     "y": 1928,
     "e": "昭和 3 年",
     "t": "燒酎「星」獻上天皇、皇后，之後改名「寳星」",
     "approx": false
    },
    {
     "y": 1949,
     "e": "昭和 24 年",
     "t": "取得威士忌製造執照",
     "approx": false
    },
    {
     "y": 1955,
     "e": "昭和 30 年",
     "t": "開始製造梅酒；同年改組為本坊酒造株式會社",
     "approx": false
    },
    {
     "y": 2016,
     "e": "平成 28 年",
     "t": "在創業地津貫啟用「マルス津貫蒸溜所」",
     "approx": false
    },
    {
     "y": 2022,
     "e": "令和 4 年",
     "t": "創業 150 周年",
     "approx": false
    }
   ],
   "name": {
    "lead": "梅酒藏的名字，來自一款老燒酎。",
    "parts": [
     {
      "c": "星",
      "r": "ほし",
      "n": "創業時期泡梅酒用的自家燒酎銘柄；1928 年獻上皇室後改名「寳星」。"
     },
     {
      "c": "星舎藏",
      "r": "ほしやぐら",
      "n": "以傳承當年手作梅酒味道的銘柄「星舎の梅酒」命名的梅酒仕込藏。"
     },
     {
      "c": "上等",
      "r": "じょうとう",
      "n": "官網稱為「ワンランク上」的本格梅酒：梅子多放，不加香料、色素、酸味料。"
     }
    ]
   },
   "place": [
    {
     "k": "梅",
     "t": "本坊把南薩摩市加世田津貫的自家梅園「津貫源次郎梅園」無償提供給在地居民管理，再收購採下的梅子用於自家梅酒。"
    },
    {
     "k": "茶",
     "t": "知覽茶是鹿兒島的品牌茶；上等梅酒 知覧茶使用當年最早的新芽「一番茶」。"
    },
    {
     "k": "津貫",
     "t": "創業地津貫今天有津貫貴匠藏與マルス津貫蒸溜所，本坊家舊宅「寶常」也在這裡。"
    }
   ],
   "craft": {
    "title": "不加香料的青梅酒",
    "points": [
     [
      "梅",
      "每年六月前後的新鮮青梅，依收成選用南高梅、鶯宿梅、白加賀"
     ],
     [
      "不加",
      "不使用香料、著色料、酸味料"
     ],
     [
      "配方",
      "梅子用量加多，以白蘭地與蜂蜜點綴（原料：梅實、釀造酒精、白蘭地、糖類、蜂蜜，14 度）"
     ],
     [
      "知覽茶",
      "泡入知覽茶一番茶葉的綠茶梅酒"
     ],
     [
      "評價",
      "官網列出上等梅酒獲 IWSC 金賞（2021、2023、2024），上等梅酒 知覧茶獲 SFWSC 最優秀金賞（2023、2024）"
     ]
    ],
    "quote": {
     "t": "在地的東西，在全世界都有價值。",
     "o": "ローカルはグローバルに価値を持つ",
     "who": "本坊和人，代表取締役社長",
     "src": "本坊酒造官網「トップメッセージ」"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/59/Tea_Plantation_in_Chiran_01.jpg",
     "w": 3264,
     "t": "鹿兒島縣南九州市的知覽茶園",
     "by": "Naokijp",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Tea_Plantation_in_Chiran_01.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kagoshima_prefectural_road_270_at_Kami-tsunuki.JPG",
     "w": 6000,
     "t": "南薩摩市加世田津貫一帶的縣道 270 號，本坊酒造創業地附近",
     "by": "Sakoppi",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Kagoshima_prefectural_road_270_at_Kami-tsunuki.JPG"
    }
   ],
   "sources": [
    [
     "本坊酒造官網：沿革",
     "https://www.hombo.co.jp/company/history/"
    ],
    [
     "本坊酒造官網：トップメッセージ",
     "https://www.hombo.co.jp/company/message/"
    ],
    [
     "本坊酒造官網：事業所・製造所",
     "https://www.hombo.co.jp/company/office/"
    ],
    [
     "本坊酒造官網：上等梅酒（星舎藏、受賞）",
     "https://www.hombo.co.jp/item/liqueur/jyoto-umeshu/"
    ],
    [
     "本坊酒造官網：本坊クオリティー リキュール（知覧茶、津貫源次郎梅園）",
     "https://www.hombo.co.jp/quality/liqueur/"
    ],
    [
     "本坊酒造新聞稿：IWSC 2023 上等梅酒金賞（PDF）",
     "https://www.hombo.co.jp/hombo-mars/wp-content/uploads/2023/07/20230718_iwsc2023_liqueur_prize.pdf"
    ],
    [
     "鹿兒島縣：本坊酒造 マルス津貫蒸溜所立地協定",
     "https://www.pref.kagoshima.jp/af03/honbou.html"
    ]
   ]
  },
  "ikekame": {
   "tone": [
    "#231a15",
    "#f6efe2",
    "#cdb79a",
    "#a8432f"
   ],
   "dark": true,
   "city": "久留米市",
   "founded": "1875",
   "oneName": "池龜酒造",
   "one": {
    "c": "黑",
    "t": "代表作「黑兜」是用燒酎、泡盛常用的黑麴釀成的日本酒——黑麴在清酒釀造裡很少見，會帶出明顯的酸。"
   },
   "hook": "筑後川畔一家明治 8 年開業的酒藏，把九州燒酎用的黑麴拿來釀清酒，還做出搖一搖就會倒出果凍的梅酒。",
   "order": [
    "about",
    "craft",
    "name",
    "timeline",
    "place"
   ],
   "about": {
    "paras": [
     "池龜酒造在福岡縣久留米市三潴町，靠近筑後川下游。明治 8 年（1875）創業，據介紹，創業者蒲池源藏曾是與久留米藩有關的劍術師範。現任代表是蒲池輝行。",
     "名字的由來據說和酒桶有關：酒藏最早叫「池屋」，各桶酒以鶴、龜等命名，其中「龜」的評價最好，被稱作「池屋的龜」，後來就成了「池龜」。",
     "這家的招牌是純米吟釀「黑兜」，用的是燒酎用的黑麴，而不是清酒常用的黃麴；福岡縣觀光網站形容它口感滑順、收尾俐落、帶有輕快的果實般酸味。酒藏在 1980 年代清酒不景氣時也開始做燒酎。",
     "福岡縣觀光網站引述蒲池社長的話：想用自己的技術，做出大廠不會做的、有個性的酒。我們店裡的果凍梅酒就是一例——用完熟大梅釀的梅酒做成軟凍，搖一搖再倒，倒出來的是一塊塊晃動的梅酒凍。"
    ],
    "profile": [
     [
      "所在地",
      "福岡縣久留米市三潴町草場 545"
     ],
     [
      "創業",
      "明治 8 年（1875）"
     ],
     [
      "創業者",
      "蒲池源藏"
     ],
     [
      "代表",
      "蒲池輝行"
     ],
     [
      "水",
      "筑後川水系伏流水"
     ],
     [
      "招牌",
      "黑麴釀造的純米吟釀「黑兜」"
     ],
     [
      "銘柄",
      "池龜、黑兜"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1875,
     "e": "明治 8 年",
     "t": "蒲池源藏於筑後川畔創業",
     "approx": false
    },
    {
     "y": 1985,
     "e": "1980 年代",
     "t": "清酒市場低迷，酒藏開始兼做燒酎",
     "approx": true
    },
    {
     "y": 2007,
     "e": "平成 19 年",
     "t": "5 月推出以黑麴釀造的純米吟釀「黑兜」",
     "approx": false
    },
    {
     "y": 2009,
     "e": "平成 21 年",
     "t": "酒藏內的直賣店開幕",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒藏的名字，來自一桶特別好喝的酒。",
    "parts": [
     {
      "c": "池",
      "r": "いけ",
      "n": "取自酒藏最早的屋號「池屋」。"
     },
     {
      "c": "亀",
      "r": "かめ",
      "n": "池屋的酒桶以鶴、龜等命名，「龜」那桶最受好評，被叫作「池屋的龜」，後來簡稱池龜。"
     },
     {
      "c": "黒兜",
      "r": "くろかぶと",
      "n": "招牌酒款名。「黑」指的是釀造用的黑麴。"
     }
    ]
   },
   "place": [
    {
     "k": "川",
     "t": "酒藏位在筑後川流域的三潴町，使用筑後川水系的伏流水。"
    },
    {
     "k": "地",
     "t": "酒藏在久留米市南部的三潴町，距西鐵天神大牟田線大善寺站車程約 10 分鐘。"
    }
   ],
   "craft": {
    "title": "用黑麴釀清酒",
    "points": [
     [
      "麴",
      "「黑兜」用燒酎、泡盛常用的黑麴釀造。黑麴會大量產生檸檬酸，使酒醪保持強酸性、抑制雜菌，也帶來明顯的酸味。"
     ],
     [
      "研究",
      "社長在酒藏實驗室保存自家的酵母與麴菌，持續試驗；黑兜系列也有用白麴的版本。"
     ],
     [
      "燒酎",
      "1980 年代開始製作燒酎，也嘗試過橡木桶熟成與酒粕燒酎。"
     ],
     [
      "果實酒",
      "果凍梅酒以完熟大梅釀成後做成軟凍狀；直賣店也賣鳳梨、柚子等果實酒與甘酒。"
     ]
    ],
    "quote": {
     "t": "想用自己的技術，做出大廠不會做的、有個性的酒。",
     "o": "大手メーカーが作らないような個性的なお酒を独自の技術で造りたい",
     "who": "蒲池社長，池龜酒造",
     "src": "クロスロードふくおか（福岡縣觀光資訊網）"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/31/View_of_Chikugo_River_from_Suiten-gu.jpg",
     "w": 2592,
     "t": "從久留米水天宮望向筑後川（福岡縣久留米市）",
     "by": "STA3816",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:View_of_Chikugo_River_from_Suiten-gu.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Nishitetsu-tenjinomuta-mizumastation.jpg",
     "w": 1024,
     "t": "西鐵天神大牟田線三潴站，福岡縣久留米市三潴町",
     "by": "みんと",
     "lic": "Public domain",
     "licUrl": "",
     "page": "https://commons.wikimedia.org/wiki/File:Nishitetsu-tenjinomuta-mizumastation.jpg"
    }
   ],
   "sources": [
    [
     "クロスロードふくおか｜池亀酒造",
     "https://www.crossroadfukuoka.jp/spot/10547"
    ],
    [
     "Sakenomy｜池亀酒造株式会社",
     "https://www.sakenomy.jp/brewery/K01N040034/"
    ],
    [
     "SAKETIMES｜Ikekame Shuzo",
     "https://en.sake-times.com/breweries/ikekame-shuzo"
    ],
    [
     "Umami Mart｜Ikekame Shuzo, Fukuoka（2023-12）",
     "https://umamimart.com/blogs/main/ikekame-shuzo-fukuoka"
    ],
    [
     "JREF Sake｜Ikekame Kurokabuto（酒藏背景）",
     "https://jref.com/sake/ikekame-junmai-ginj%C5%8D-kurokabuto-yumeikken-namazake.562/"
    ],
    [
     "WoWith｜Ikekame Shuzo tasting",
     "https://wowith.com/articles/tasting_ikekameshuzo"
    ],
    [
     "JREF Sake｜Ikekame Kurokabuto Yamadanishiki",
     "https://jref.com/sake/ikekame-junmai-ginj%C5%8D-kurokabuto-yamadanishiki-namazake.568/"
    ]
   ]
  },
  "kanegasaki": {
   "tone": [
    "#efe4cc",
    "#3a2c1d",
    "#7c6247",
    "#a8743a"
   ],
   "city": "金ケ崎町",
   "founded": "2021",
   "oneName": "金ケ崎藥草酒造",
   "one": {
    "c": "草",
    "t": "創辦人在東京開了四年以自製香草為主題的酒吧，回鄉後自己開香草農場、種了 50 種以上的香草，專做以日本原生「和ハーブ」為核心的利口酒。"
   },
   "hook": "一位在溫哥華當過調酒師、在東京開過香草酒吧的岩手青年，疫情後回到家鄉金ケ崎，把父親老家的碾米場改成町內唯一的酒造。",
   "order": [
    "about",
    "craft",
    "timeline",
    "name",
    "place"
   ],
   "about": {
    "paras": [
     "金ケ崎藥草酒造在岩手縣南部的金ケ崎町，2021 年 12 月開始製造，是町內唯一的酒造場。經營公司是株式會社 K.S.P（Kanegasaki Sustainable Product），旗下另有香草農場與設計部門。",
     "創辦人老川和磨 1993 年生於岩手，2015 年到加拿大溫哥華當調酒師，在當地一家使用在地原料的蒸餾所得到啟發；2017 年回東京獨立，經營以自製香草為主題的酒吧四年，開發過約 100 種原創利口酒。新冠疫情後，他決定回故鄉創業。",
     "酒造設在創辦人父親老家的碾米場舊址。公司自己的香草農場種了 50 種以上香草，也把原本會被丟棄的蔬果拿來釀酒，減少食物浪費。第一個系列「和花」主打低酒精、200ml 小瓶，在群眾募資三天內募得 200 萬日圓。",
     "我們店裡的四支都是 8% 的果實系利口酒，原料寫著岩手產的袖珍奇異果與食用菊、生薑與青紫蘇、蘋果等，延續這家「用日本素材做只有日本做得出來的酒」的路線。"
    ],
    "profile": [
     [
      "所在地",
      "岩手縣膽澤郡金ケ崎町西根"
     ],
     [
      "創業",
      "2021 年（令和 3 年）11 月取得利口酒製造執照，12 月開始製造"
     ],
     [
      "當主",
      "代表 老川和磨（株式會社 K.S.P 代表取締役）"
     ],
     [
      "原料",
      "自家香草農場的 50 種以上香草、岩手產蔬果"
     ],
     [
      "招牌",
      "和ハーブ利口酒「和花」、アマーロ、茶酒"
     ]
    ]
   },
   "timeline": [
    {
     "y": 2015,
     "e": "平成 27 年",
     "t": "老川和磨赴溫哥華擔任調酒師，受當地在地原料蒸餾所啟發",
     "approx": false
    },
    {
     "y": 2017,
     "e": "平成 29 年",
     "t": "在東京獨立經營香草主題酒吧，四年間開發約 100 種原創利口酒",
     "approx": false
    },
    {
     "y": 2021,
     "e": "令和 3 年",
     "t": "回到金ケ崎，以父親老家碾米場舊址成立金ケ崎藥草酒造，11 月取得利口酒執照、12 月開始製造",
     "approx": false
    },
    {
     "y": 2022,
     "e": "令和 4 年",
     "t": "第一個系列「和花」（樹・果）群眾募資三天達 200 萬日圓",
     "approx": false
    }
   ],
   "name": {
    "lead": "名字直接說明了在哪裡、做什麼。",
    "parts": [
     {
      "c": "金ケ崎",
      "r": "かねがさき",
      "n": "所在地岩手縣金ケ崎町，也是創辦人的故鄉"
     },
     {
      "c": "薬草",
      "r": "やくそう",
      "n": "藥草；官方說明和ハーブ（日本原生香草）過去常被當作食物與藥使用"
     },
     {
      "c": "酒造",
      "r": "しゅぞう",
      "n": "酒造；這裡做的是利口酒，不是清酒"
     }
    ]
   },
   "place": [
    {
     "k": "町",
     "t": "町內的鳥海柵跡位在北上川與膽澤川匯流處西北方約 2.5 公里的金ケ崎段丘上，被認為是平安時代豪族安倍氏的柵（據點），2013 年指定為國家史跡。"
    },
    {
     "k": "草",
     "t": "公司在町內經營自己的香草農場，種植 50 種以上香草，以紫蘇、山椒、山葵等和ハーブ為核心。"
    }
   ],
   "craft": {
    "title": "和ハーブ，從田裡開始",
    "points": [
     [
      "原料",
      "自家農場香草，加上原本會被丟棄的岩手蔬果"
     ],
     [
      "方向",
      "日本素材的純飲利口酒、アペリティフ（餐前酒）與アマーロ"
     ],
     [
      "規格",
      "「和花」系列 10%、200ml，主打「少しを楽しむお酒」"
     ]
    ],
    "quote": {
     "t": "我想用日本的素材，做出只有日本才做得出來的純飲利口酒。",
     "o": "日本の素材で、日本でしかつくれないストレートリキュールをつくりたい。",
     "who": "老川和磨，金ケ崎藥草酒造代表",
     "src": "Makuake 專案頁"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Tonomi_Palisade_Marker.jpg",
     "w": 525,
     "t": "金ケ崎町鳥海柵跡（國家史跡）的標柱",
     "by": "Iwatebud",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Tonomi_Palisade_Marker.jpg"
    }
   ],
   "sources": [
    [
     "Makuake：金ケ崎薬草酒造「和花」專案",
     "https://www.makuake.com/project/herb_liqueur/"
    ],
    [
     "マイナビ農業（PR TIMES）：金ケ崎町唯一の酒造場「金ケ崎薬草酒造」誕生",
     "https://agri.mynavi.jp/prtimes/2022_02_14_184350/"
    ],
    [
     "文化遺産オンライン：鳥海柵跡",
     "https://online.bunka.go.jp/heritages/detail/232541"
    ]
   ]
  },
  "kanemasu": {
   "tone": [
    "#f7efe0",
    "#33241b",
    "#8b6b4f",
    "#c0392b"
   ],
   "city": "新發田市",
   "founded": "1822",
   "oneName": "金升酒造",
   "one": {
    "c": "升",
    "t": "店號「金升」的家紋是一把曲尺（尺金）加一只升：長度用尺量、容量用升量，代表做正確、正直的生意。"
   },
   "hook": "兩百年前在新潟開業的酒藏，昭和初年搬進新發田藩主溝口家的御菜園舊址，在那裡釀了快一百年。",
   "order": [
    "about",
    "name",
    "timeline",
    "place",
    "craft"
   ],
   "about": {
    "paras": [
     "文政 5 年（1822），初代高橋善之助在新潟縣北蒲原郡岡方村長戶呂（今新潟市）開了「高橋酒造店」。明治 16 年（1883）遷到濁川村，大正 8 年（1919），第三代高橋耘平決定把藏遷往新發田，地點是舊新發田藩主溝口侯的「御菜園」（藥草園）舊址。",
     "昭和 5 年（1930）現在的工廠落成，公司依店號改名為金升酒造。座敷、庭園與酒藏至今保留 1930 年興建時的樣子，一號藏與二號藏並排而立，庭園出自名匠田中泰阿彌之手。",
     "這間藏的路線不只清酒：昭和 15 年（1940）建起單式與連續式蒸餾設備開始做燒酎；戰後第四代高橋六次郎取得威士忌執照，以「KINSYO WHISKY」之名自家蒸餾麥芽，直到 2010 年才繳回執照。官網也記載，它是全國最早開始清酒四季釀造的酒藏之一。",
     "2010 年經營體制更新後，清酒收斂成日常的「金升 碧ラベル」「朱ラベル」與純米線「初花」。2017 年與在地農家合設農業法人「かなうカンパニー」，在新發田的中山間地自己種酒米「越淡麗」；2022 年迎來創業 200 年。"
    ],
    "profile": [
     [
      "所在地",
      "新潟縣新發田市豐町 1-9-30"
     ],
     [
      "創業",
      "文政 5 年（1822）"
     ],
     [
      "家族",
      "高橋家，官網英文頁稱已傳六代"
     ],
     [
      "水",
      "飯豐山系伏流水；官網英文頁也提到加治川"
     ],
     [
      "招牌",
      "自家栽培越淡麗、四季釀造、清酒與燒酎兼營"
     ],
     [
      "銘柄",
      "金升、初花；燒酎「かねます」"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1822,
     "e": "文政 5 年",
     "t": "初代高橋善之助於岡方村長戶呂（今新潟市）創立高橋酒造店",
     "approx": false
    },
    {
     "y": 1919,
     "e": "大正 8 年",
     "t": "第三代高橋耘平決定遷往新發田藩主溝口侯御菜園舊址",
     "approx": false
    },
    {
     "y": 1930,
     "e": "昭和 5 年",
     "t": "現工廠落成，改組為金升酒造株式會社",
     "approx": false
    },
    {
     "y": 1945,
     "e": "昭和 20 年",
     "t": "第四代高橋六次郎取得威士忌蒸餾執照（KINSYO WHISKY，至 2010 年）",
     "approx": false
    },
    {
     "y": 2015,
     "e": "平成 27 年",
     "t": "清酒統一為「碧ラベル」「朱ラベル」與純米「初花」",
     "approx": false
    },
    {
     "y": 2017,
     "e": "平成 29 年",
     "t": "與農家合設農業法人，開始自家栽培酒米",
     "approx": false
    },
    {
     "y": 2022,
     "e": "令和 4 年",
     "t": "創業 200 年",
     "approx": false
    }
   ],
   "name": {
    "lead": "家紋就是一句商訓。",
    "parts": [
     {
      "c": "金",
      "r": "かね",
      "n": "指「尺金」（曲尺），量長度的工具。"
     },
     {
      "c": "升",
      "r": "ます",
      "n": "量容量的升。兩者合起來，意思是「長度用尺量、容量用升量」，做正確正直的生意。"
     },
     {
      "c": "初花",
      "r": "はつはな",
      "n": "藏的純米酒系列，用自家栽培的越淡麗；純米大吟釀初花精米 40%。"
     }
    ]
   },
   "place": [
    {
     "k": "城下",
     "t": "新發田是溝口家新發田藩的城下町，酒藏就蓋在藩主御菜園（藥草園）的舊址上。"
    },
    {
     "k": "水",
     "t": "使用飯豐山系的伏流水；藏的田也在這條水系滋潤的土地上。"
    },
    {
     "k": "米",
     "t": "在新發田中山間地自家種植越淡麗，用於純米大吟釀初花、特別純米初花與金升朱ラベル。"
    },
    {
     "k": "祭",
     "t": "金魚台輪是新發田的鄉土玩具：據新潟縣觀光協會介紹，因溝口侯愛金魚，明治初年竹細工師做了金魚形燈籠給孩子拉著玩，如今在新發田祭中遊行。"
    }
   ],
   "craft": {
    "title": "從田到瓶都在新發田",
    "points": [
     [
      "自家米",
      "2017 年起與農家合設法人，耕作容易被棄耕的中山間地，種越淡麗。"
     ],
     [
      "一枚田",
      "2020 年起與新發田出身的侍酒師澀谷康弘合作「Domaine 高橋」計畫，只用一塊田的米釀成無濾過生原酒。"
     ],
     [
      "四季釀造",
      "早年就為釀造藏裝設冷房，全年都能釀酒。"
     ],
     [
      "杜氏的話",
      "純米大吟釀初花：「華麗卻順喉輕快，比一般對大吟釀的印象更沉穩。」"
     ]
    ],
    "quote": {
     "t": "押出來的力道不強，卻能在用餐時陪你很久。",
     "o": "押し出しは強くなくとも、食事の時間に長く付き合える酒です。",
     "who": "金升酒造杜氏（談特別純米 初花）",
     "src": "金升酒造官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a1/%E5%A4%8F%E7%A5%AD%E3%82%8A%E3%81%AE%E9%87%91%E9%AD%9A%E5%8F%B0%E8%BC%AA.JPG",
     "w": 3264,
     "t": "新發田夏祭裡孩子們拉著的金魚台輪",
     "by": "Eiichiro Izawa",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:夏祭りの金魚台輪.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/92/%E5%AE%B5%E3%81%AE%E9%87%91%E9%AD%9A%E5%8F%B0%E8%BC%AA.JPG",
     "w": 3264,
     "t": "傍晚點燈的金魚台輪",
     "by": "Eiichiro Izawa",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:宵の金魚台輪.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/4/43/Shibata_Castle_003_May2020.jpg",
     "w": 2364,
     "t": "新發田城本丸表門（2020 年 5 月）",
     "by": "Drph17",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Shibata_Castle_003_May2020.jpg"
    }
   ],
   "sources": [
    [
     "金升酒造官網：当蔵について（沿革、紋印）",
     "https://kanemasu-sake.shop-pro.jp/?mode=f1"
    ],
    [
     "金升酒造官網：地産製造の取り組み",
     "https://kanemasu-sake.shop-pro.jp/?mode=f2"
    ],
    [
     "金升酒造官網：Introduction of Our Brewery",
     "https://kanemasu-sake.shop-pro.jp/?mode=f3"
    ],
    [
     "金升酒造官網：商品紹介（初花、杜氏より）",
     "https://www.kanemasu-sake.co.jp/"
    ],
    [
     "新潟縣酒造組合：金升酒造株式会社",
     "https://www.niigata-sake.or.jp/kuramoto/kanemasu/"
    ],
    [
     "新潟縣新發田地域振興局：新発田地域の酒蔵",
     "https://www.pref.niigata.lg.jp/site/shibata/sibatatiikisakagura.html"
    ],
    [
     "にいがた観光ナビ：金升酒造（株）",
     "https://niigata-kankou.or.jp/spot/detail_5521.html"
    ],
    [
     "にいがた観光ナビ（教育旅行）：金魚台輪",
     "https://niigata-kankou.or.jp/educational_trip/spot/detail_51143.html"
    ]
   ]
  },
  "sakata": {
   "tone": [
    "#f6efe2",
    "#3a2a20",
    "#8a6f58",
    "#b5473a"
   ],
   "city": "酒田市",
   "founded": "1946",
   "oneName": "酒田酒造",
   "one": {
    "c": "喜",
    "t": "招牌酒名「上喜元」讀作 jōkigen，和日文「上機嫌」（心情大好）同音；釀酒的人說，好酒喝下去，人就會上機嫌。"
   },
   "hook": "戰後第二年，港町酒田的五家酒藏合而為一；它們共同的招牌，取名自「心情大好」。",
   "order": [
    "about",
    "craft",
    "name",
    "place"
   ],
   "about": {
    "paras": [
     "酒田酒造位在山形縣酒田市，日本海邊的港町。昭和 21 年（1946），市內的「男山」「養老」「藤屋」「千里井」「玉の川」五家酒藏合併成一家，以其中的橋本酒造建物作為母屋，一路用到今天。",
     "招牌酒「上喜元」讀作 jōkigen，和日文「上機嫌」同音，意思是心情很好。日本旅遊媒體 NIHONMONO 的採訪寫道，酒田酒造就是把「上機嫌」直接當成了酒名。",
     "現任社長佐藤正一同時擔任藏元杜氏，自己站在釀造第一線。他說酒田酒造「可能是用最多種酒米的酒藏」：山形本地的美山錦、出羽燦々，也有山田錦、雄町、五百萬石等，依米種調整精米步合與酵母，並設有自家酵母培養設備。",
     "釀造用水是鳥海山系的伏流水。佐藤認為，酒米品種與設備都在進步，「以日本酒的歷史來說，現在是最好喝的時候」。"
    ],
    "profile": [
     [
      "所在地",
      "山形縣酒田市日吉町二丁目"
     ],
     [
      "創業",
      "昭和 21 年（1946），五家酒藏合併"
     ],
     [
      "當主",
      "佐藤正一（社長兼藏元杜氏）"
     ],
     [
      "水",
      "鳥海山系伏流水"
     ],
     [
      "招牌",
      "多品種酒米、吟釀與純米吟釀為主、自家酵母"
     ],
     [
      "銘柄",
      "上喜元"
     ]
    ]
   },
   "name": {
    "lead": "酒名是一句日常話。",
    "parts": [
     {
      "c": "上喜元",
      "r": "じょうきげん／jōkigen",
      "n": "與日文「上機嫌」同音，意思是心情很好；NIHONMONO 採訪寫道，這名字就是把「上機嫌」直接拿來用。"
     }
    ]
   },
   "place": [
    {
     "k": "港",
     "t": "酒田屬山形縣庄內地區，是面向日本海的港町。"
    },
    {
     "k": "水",
     "t": "使用鳥海山系的伏流水釀酒。"
    },
    {
     "k": "米",
     "t": "山形產的美山錦、出羽燦々、山形酒 4 號，加上山田錦、五百萬石、雄町等多種外地酒米。"
    }
   ],
   "craft": {
    "title": "一間酒藏，十多種酒米",
    "points": [
     [
      "酒米",
      "不固定只用一種米，依目標風味換米；佐藤社長自稱可能是用米品種最多的酒藏。"
     ],
     [
      "酵母",
      "依米種換酵母，設有自家培養設備，也在開發自家酵母。"
     ],
     [
      "造法",
      "以吟釀、純米吟釀為主，也投入生酛造。"
     ],
     [
      "氣泡酒",
      "佐藤社長喝過別家的瓶內二次發酵酒後，決定不正面比拚，改以長時間注入碳酸氣體，讓氣泡留得住。"
     ]
    ],
    "quote": {
     "t": "把數值和感覺結合起來，就能做出好東西。",
     "o": "数値と感覚を合わせていいものを作っていくことができる",
     "who": "佐藤正一，酒田酒造社長",
     "src": "NIHONMONO"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/37/%E5%B1%B1%E5%B1%85%E5%80%89%E5%BA%AB_-_panoramio.jpg",
     "w": 4770,
     "t": "酒田市的山居倉庫（米倉群）",
     "by": "くろふね",
     "lic": "CC BY 3.0",
     "licUrl": "https://creativecommons.org/licenses/by/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:山居倉庫_-_panoramio.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/31/%E9%B3%A5%E6%B5%B7%E5%B1%B1%E3%81%A8%E9%85%92%E7%94%B0%E3%81%AE%E7%94%B0%E7%95%91_-_panoramio.jpg",
     "w": 4770,
     "t": "鳥海山與酒田的田地",
     "by": "くろふね",
     "lic": "CC BY 3.0",
     "licUrl": "https://creativecommons.org/licenses/by/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:鳥海山と酒田の田畑_-_panoramio.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/af/Chokai_San.JPG",
     "w": 3057,
     "t": "從酒田市望向鳥海山",
     "by": "Sakburgh5",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Chokai_San.JPG"
    }
   ],
   "sources": [
    [
     "山形縣酒造組合：酒田酒造（所在地、代表者、創業年）",
     "https://yamagata-sake.or.jp/publics/index/67/"
    ],
    [
     "SAKETIME：上喜元（五藏合併、鳥海山系伏流水、酒米與酵母，鈴木真弓撰文）",
     "https://www.saketime.jp/brands/242/"
    ],
    [
     "NIHONMONO：“うまい”を口にすれば上機嫌になれる。日本酒「上喜元」",
     "https://nihonmono.jp/article/18586/"
    ]
   ]
  },
  "kawabu": {
   "tone": [
    "#3a2a1e",
    "#f2e6cf",
    "#c8a87c",
    "#b5523a"
   ],
   "dark": true,
   "city": "多氣町",
   "founded": "1857",
   "oneName": "河武釀造",
   "one": {
    "c": "杉",
    "t": "招牌銘柄「鉾杉」取自伊勢神宮神域裡形狀像鉾、筆直向上生長的杉樹神木；釀酒用的桶與道具也離不開杉木。"
   },
   "hook": "伊勢神宮旁的山村酒藏，用流經神宮的宮川水系地下水釀酒，酒名來自神域裡的杉樹神木。",
   "order": [
    "about",
    "name",
    "place",
    "craft",
    "timeline"
   ],
   "about": {
    "paras": [
     "河武釀造位在三重縣多氣町五桂，伊勢神宮附近、紀州街道沿線的山村裡。酒藏夾在兩條河之間：一邊是外宮豐受大神宮的淨身之河宮川，一邊是與倭姬命、齋宮起源有關的櫛田川。",
     "創業於安政 4 年（1857），現任代表取締役是第八代。社名用「釀造」而不是「酒造」，是因為過去除了酒，也做味噌、醬油等麴製食品。",
     "仕込水抽自宮川水系的地下水；宮川在國家水質調查中十多次排名全國第一。米除了自家培育的「弓形穗」，也依酒款選用三重產山田錦、五百萬石與神之穗。",
     "近年河武釀造在國際比賽表現亮眼，2021 年「鉾杉 弓形穗 純米大吟釀」獲 Kura Master 白金獎，普通酒「秀醇」在 IWC 拿下 Great Value 冠軍；2022 年另推出新品牌「KAWABU」。"
    ],
    "profile": [
     [
      "所在地",
      "三重縣多氣郡多氣町五桂 234"
     ],
     [
      "創業",
      "安政 4 年（1857）"
     ],
     [
      "當主",
      "代表取締役 第八代 河合英彥"
     ],
     [
      "水",
      "宮川水系的地下水"
     ],
     [
      "米",
      "自家酒米「弓形穗」、三重山田錦、五百萬石、神之穗"
     ],
     [
      "銘柄",
      "鉾杉（ほこすぎ）、KAWABU"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1857,
     "e": "安政 4 年",
     "t": "在伊勢地方的多氣創業",
     "approx": false
    },
    {
     "y": 1930,
     "e": "昭和初期",
     "t": "開始以「鉾杉」作為酒名",
     "approx": true
    },
    {
     "y": 2021,
     "e": "令和 3 年",
     "t": "「鉾杉 弓形穗 純米大吟釀」獲 Kura Master 白金獎；「秀醇」獲 IWC 金牌與 Great Value 冠軍",
     "approx": false
    },
    {
     "y": 2022,
     "e": "令和 4 年",
     "t": "發表新品牌「KAWABU」",
     "approx": false
    }
   ],
   "name": {
    "lead": "神域裡的一棵杉樹。",
    "parts": [
     {
      "c": "鉾杉",
      "r": "ほこすぎ（hokosugi）",
      "n": "伊勢神宮神域中聳立的杉樹神木，形狀像古代兵器「鉾」，持續筆直向上生長，因而得名。"
     }
    ]
   },
   "place": [
    {
     "k": "兩河",
     "t": "酒藏位在宮川與櫛田川之間的綠地。宮川是參拜伊勢者淨身的河，櫛田川則與倭姬命及齋宮的起源相連。"
    },
    {
     "k": "水",
     "t": "從地下汲取宮川水系的水；宮川在國家水質調查中十多次排名全國第一。"
    },
    {
     "k": "御食國",
     "t": "伊勢自古是向朝廷進貢食材的「御食國」，海、川、山的物產豐富。"
    }
   ],
   "craft": {
    "title": "自然與人合力",
    "points": [
     [
      "米",
      "自家培育的酒米「弓形穗」，加上三重產山田錦、五百萬石、神之穗，依想要的風味挑米。"
     ],
     [
      "山廢",
      "產品線包含山廢仕込的純米酒，2021 年在 IWC 與 Feminalise 得獎。"
     ],
     [
      "常若",
      "受伊勢神宮每二十年重建的式年遷宮啟發，官網以「常若」形容想讓酒的香氣與滋味歷久常新。"
     ]
    ],
    "quote": {
     "t": "酒，是自然與人合力造出來的東西。",
     "o": "酒は、自然と人が力を合わせ造るもの。",
     "who": "河武釀造",
     "src": "河武釀造官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Kushida_River%28Taki-cho%29.JPG",
     "w": 4320,
     "t": "流經多氣町的櫛田川，河武釀造就在這條河與宮川之間（2016 年攝）",
     "by": "Indiana jo",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Kushida_River(Taki-cho).JPG"
    }
   ],
   "sources": [
    [
     "河武釀造官網：蔵元案内",
     "https://kawabu.jp/guide/"
    ],
    [
     "河武釀造官網：私たちの酒造り",
     "https://kawabu.jp/about/"
    ],
    [
     "河武釀造官網：河武醸造の美学",
     "https://kawabu.jp/bigaku/"
    ],
    [
     "河武釀造官網：首頁",
     "https://kawabu.jp/"
    ],
    [
     "ふるさと納税（多氣町）：河武醸造 事業者介紹",
     "https://www.furusato-tax.jp/product/detail/24441/6015664/40"
    ],
    [
     "SalesNow DB：河武醸造株式会社",
     "https://salesnow.jp/db/companies/jcb00ugc673t6d6t"
    ],
    [
     "SAKETIME：鉾杉",
     "https://www.saketime.jp/brands/1319/"
    ]
   ]
  },
  "kessler-zink": {
   "tone": [
    "#f4ead4",
    "#3b2a1e",
    "#7a5c42",
    "#b8863f"
   ],
   "city": "弗隆海姆（Flonheim）",
   "founded": "",
   "oneName": "金凱勒",
   "one": {
    "c": "乳",
    "t": "我們賣的這支是 Liebfraumilch，字面意思是「聖母之乳」，名字來自萊茵黑森沃爾姆斯（Worms）聖母教堂周圍的葡萄園；Kessler-Zink 就在同一個產區。"
   },
   "hook": "「聖母之乳」這個名字，出自萊茵黑森一座哥德式教堂旁的葡萄園，金凱勒就在同一個產區裝瓶。",
   "order": [
    "about",
    "name",
    "timeline",
    "place"
   ],
   "about": {
    "paras": [
     "Kessler-Zink GmbH 位在德國萊茵黑森的弗隆海姆（Flonheim），地址是 An der Dohlmühle 3–5。官網自稱「Weingut – Weinkellerei」，也就是同時有自家葡萄園、也做收購與裝瓶的酒窖；由家族經營三代，從一間私人酒莊發展成今天的規模，累積三十多年經驗。",
     "官網寫每年處理超過 200 萬公升葡萄酒，來源包括德國與其他國家；產品依產地分為 Kessler-Zink Rheinhessen、Kessler Rheinhessen，以及義大利、西班牙、法國與有機酒系列，主張「人人負擔得起、永續生產的葡萄酒」，並支持可回收重複使用的酒瓶（Mehrweg）。展會名錄列出的執行長是 Ingo Stütz；同一條路上的 Dohlmühle 酒莊由 Stütz 家族種植約 30 公頃葡萄園。",
     "我們賣的「聖母之乳」是德國經典的 Liebfraumilch（舊拼法 Liebfrauenmilch，意為「聖母之乳」）。這個名稱源自沃爾姆斯聖母教堂（Liebfrauenkirche）四周的葡萄園；依德國法規，它必須是產自萊茵黑森、法爾茲、那赫或萊茵高的 QbA 等級半甜白酒，至少七成來自麗絲玲、希瓦納、米勒圖高或肯納，每公升殘糖 18–40 克。這支酒以麗絲玲和 Rivaner（米勒圖高的別名）調配。"
    ],
    "profile": [
     [
      "所在地",
      "德國萊茵黑森・弗隆海姆，An der Dohlmühle 3–5"
     ],
     [
      "型態",
      "家族酒莊兼酒窖（Weingut – Weinkellerei），自稱經營三代"
     ],
     [
      "規模",
      "每年處理超過 200 萬公升葡萄酒（官網）"
     ],
     [
      "負責人",
      "Ingo Stütz（展會名錄列為執行長）"
     ],
     [
      "招牌",
      "Liebfraumilch（聖母之乳）、Kessler Rheinhessen 系列"
     ],
     [
      "品種",
      "我們這支：麗絲玲＋Rivaner（米勒圖高）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1267,
     "e": "1267–1465 年",
     "t": "沃爾姆斯聖母教堂（Liebfrauenkirche）興建，四周的葡萄園日後成為 Liebfraumilch 名稱的源頭",
     "approx": false
    },
    {
     "y": 1687,
     "e": "",
     "t": "「Liebfraumilch」一詞第一次見於文字紀錄（一位英國人的遊記）",
     "approx": false
    },
    {
     "y": 1834,
     "e": "",
     "t": "葡萄酒先驅 Philipp Bronner 記載：真正的 Liebfraumilch 只長在教堂塔影所及之處",
     "approx": false
    },
    {
     "y": 1908,
     "e": "",
     "t": "沃爾姆斯酒商 Valckenberg 為保護原始產地採取行動，被視為德國第一個品牌酒",
     "approx": false
    },
    {
     "y": 1990,
     "e": "約 1990 年代",
     "t": "Kessler-Zink 官網自述有「三十多年經驗」，由私人酒莊起家（確切年份未公開）",
     "approx": true
    }
   ],
   "name": {
    "lead": "Liebfraumilch 拆開來看：",
    "parts": [
     {
      "c": "Liebfrau",
      "r": "Liebe Frau，親愛的聖母",
      "n": "指沃爾姆斯的聖母教堂（Liebfrauenkirche）"
     },
     {
      "c": "Milch",
      "r": "牛奶、乳",
      "n": "傳說教堂修道院主事把這裡的酒分給朝聖者，形容它「像聖母的乳汁一樣甜」"
     }
    ]
   },
   "place": [
    {
     "k": "產區",
     "t": "萊茵黑森是德國面積最大的葡萄酒產區，位在萊茵河西岸、美因茲與沃爾姆斯之間。"
    },
    {
     "k": "鎮",
     "t": "弗隆海姆位在 Wiesbach 河谷，葡萄園間散布著石砌的圓頂小屋（Trullo），是當地的地標。"
    },
    {
     "k": "教堂",
     "t": "沃爾姆斯聖母教堂四周的 Liebfrauenstift-Kirchenstück 葡萄園約 14.3 公頃，只種麗絲玲，就是 Liebfraumilch 名字的來源地。"
    }
   ],
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Liebfrauenkirche_Worms_von_Osten.JPG",
     "w": 1565,
     "t": "沃爾姆斯聖母教堂（Liebfrauenkirche）與周圍葡萄園，Liebfraumilch 之名就從這裡來",
     "by": "Joachim Specht",
     "lic": "CC0",
     "licUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Liebfrauenkirche_Worms_von_Osten.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/66/Rheinhessen_Flonheim_-_Trullo.jpg",
     "w": 4320,
     "t": "萊茵黑森弗隆海姆葡萄園裡的石砌圓頂小屋（Trullo）",
     "by": "Peter.Pielmeier",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Rheinhessen_Flonheim_-_Trullo.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Uffhofen_%28Flonheim%29%2C_Trullo_bei_der_Geisterm%C3%BChle.JPG",
     "w": 2764,
     "t": "弗隆海姆 Uffhofen 區，Geistermühle 磨坊旁的葡萄園小屋",
     "by": "Dguendel",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Uffhofen_(Flonheim),_Trullo_bei_der_Geisterm%C3%BChle.JPG"
    }
   ],
   "sources": [
    [
     "KESSLER-ZINK GmbH 官網",
     "https://www.kessler-zink.de/"
    ],
    [
     "Rheinhessen.de：Vinothek Weingut Dohlmühle",
     "https://www.rheinhessen.de/en/a-vinothek-winery-dohlmuehle"
    ],
    [
     "German Pavilion ProWine Shanghai 展商名錄：KESSLER-ZINK GmbH",
     "https://prowine.german-pavilion.com/en/sites/exhibitors/127625"
    ],
    [
     "Wines of Germany：Wormser Liebfrauenstift-Kirchenstück",
     "https://www.winesofgermany.com/our-regions/highlight-of-wine-culture/365/wormser-liebfrauenstift-kirchenst%C3%BCck"
    ],
    [
     "Wikipedia：Liebfraumilch",
     "https://en.wikipedia.org/wiki/Liebfraumilch"
    ]
   ]
  },
  "kitagawa": {
   "tone": [
    "#2d2320",
    "#f3e9d6",
    "#c9ab84",
    "#9e3b34"
   ],
   "dark": true,
   "city": "京都市伏見區",
   "founded": "1657",
   "oneName": "北川本家",
   "one": {
    "c": "翁",
    "t": "招牌銘柄「富翁」由第十代北川三右衛門取自中國古籍，意思是「心靈富足的人，晚年會得到幸福」。"
   },
   "hook": "伏見的一間船宿，替旅客釀的酒出了名，從 1657 年一路傳到第十四代。",
   "order": [
    "about",
    "name",
    "timeline",
    "craft",
    "place"
   ],
   "about": {
    "paras": [
     "北川本家是京都伏見的老酒藏。明曆 3 年（1657），初代鮒屋四郎兵衛在伏見經營名叫「鮒屋」的船宿，替往來旅客釀酒，酒漸漸出了名，成了伏見的代表酒之一。",
     "後來第十代北川三右衛門從中國古籍取字，為酒命名「富翁」。1936 年改組為公司，現任代表取締役是第十四代北川幸宏。",
     "伏見古時寫作「伏水」，桃山丘陵濾過的清澈伏流水在這裡湧出。北川本家說自己的酒靠伏見的水而生，至 2023 年 6 月累計在全國新酒鑑評會拿下 21 次金賞。",
     "除了日本酒，北川本家也釀本格燒酎與利口酒，並經營直營店「おきな屋」；2025 年由武田博文接任杜氏。"
    ],
    "profile": [
     [
      "所在地",
      "京都市伏見區村上町 370-6（本社）；釀造免許地 伏見區山崎町 364"
     ],
     [
      "創業",
      "明曆 3 年（1657）"
     ],
     [
      "當主",
      "代表取締役 北川幸宏（第十四代）"
     ],
     [
      "杜氏",
      "武田博文（2025 年就任）"
     ],
     [
      "水",
      "伏見的伏流水（桃山丘陵濾過的湧水）"
     ],
     [
      "銘柄",
      "富翁（とみおう）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1657,
     "e": "明曆 3 年",
     "t": "初代鮒屋四郎兵衛在伏見經營船宿「鮒屋」，為旅客釀酒",
     "approx": false
    },
    {
     "y": 1936,
     "e": "昭和 11 年",
     "t": "5 月 29 日成立公司",
     "approx": false
    },
    {
     "y": 2023,
     "e": "令和 5 年",
     "t": "全國新酒鑑評會金賞累計達 21 次",
     "approx": false
    },
    {
     "y": 2025,
     "e": "令和 7 年",
     "t": "武田博文就任杜氏，釀造團隊同時換新",
     "approx": false
    }
   ],
   "name": {
    "lead": "富，不只是錢。",
    "parts": [
     {
      "c": "富翁",
      "r": "とみおう（tomio）",
      "n": "第十代北川三右衛門取自中國古籍，意思是「心靈富足的人，晚年會得到幸福」。"
     },
     {
      "c": "鮒屋",
      "r": "ふなや",
      "n": "初代在伏見經營的船宿屋號，北川本家的源頭。"
     }
    ]
   },
   "place": [
    {
     "k": "水",
     "t": "伏見古稱「伏水」，穿過桃山丘陵的清澈地下水在此湧出；酒藏有「一升酒要八升水」的說法。"
    },
    {
     "k": "米",
     "t": "與合作農家河北農園往來約 20 年，用他們的米釀「丹州山田錦」，員工每年也參加插秧。"
    }
   ],
   "craft": {
    "title": "守住該守的，做這個時代的酒",
    "points": [
     [
      "傳承",
      "一邊引進新技術，一邊把傳統手法傳給下一代。"
     ],
     [
      "米",
      "與河北農園合作約 20 年，用其山田錦釀「丹州山田錦」。"
     ],
     [
      "杜氏",
      "2025 年武田博文就任杜氏，信條是「和釀良酒」。"
     ]
    ],
    "quote": {
     "t": "釀酒，人與人的連結最重要。",
     "o": "お酒造りは人の輪が大切です。",
     "who": "北川幸宏，第十四代當主",
     "src": "北川本家官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/3e/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E5%8C%97%E5%B7%9D%E6%9C%AC%E5%AE%B6_%E5%A4%96%E8%A6%B3.jpg",
     "w": 1600,
     "t": "京都伏見的北川本家酒藏外觀，深色木板外牆的酒藏與儲槽（2012 年攝）",
     "by": "Umio",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E5%8C%97%E5%B7%9D%E6%9C%AC%E5%AE%B6_%E5%A4%96%E8%A6%B3.jpg"
    }
   ],
   "sources": [
    [
     "北川本家官網：企業情報",
     "https://www.tomio-sake.co.jp/about/"
    ],
    [
     "北川本家官網：酒造り",
     "https://www.tomio-sake.co.jp/craft/"
    ],
    [
     "北川本家官網：首頁",
     "https://www.tomio-sake.co.jp/"
    ]
   ]
  },
  "kiyosato": {
   "tone": [
    "#f3eadb",
    "#3b2a1e",
    "#8a6a4f",
    "#b5763b"
   ],
   "city": "清里町",
   "founded": "1975",
   "oneName": "清里燒酎釀造所",
   "one": {
    "c": "芋",
    "t": "1979 年在這裡上市的「きよさと」，是日本第一支以馬鈴薯為主原料的本格燒酎；原料用的是清里町自產的澱粉加工用馬鈴薯。"
   },
   "hook": "町民想要一個「用自己農產品做的特產」，町公所就派職員去東京學釀燒酎，把廢校的中學教室改成試驗所——四年後，日本第一支本格馬鈴薯燒酎誕生。",
   "order": [
    "about",
    "timeline",
    "craft",
    "place",
    "name"
   ],
   "about": {
    "paras": [
     "清里燒酎釀造所在北海道東部的清里町，位在日本百名山斜里岳山腳、知床半島的根部。這裡的製造者登記就是「清里町」，官方說法是町自己主導的醸造事業，代表人是町長。",
     "清里町以旱田農業為主，小麥、甜菜、馬鈴薯是主要作物，但多半只是當作加工原料出貨。1975 年，町民要求「用清里的農產做出自己的特產」，町公所啟動特產品計畫；有人想起戰時北見曾用馬鈴薯製造燃料用酒精，於是決定試做馬鈴薯燒酎。",
     "町公所派一名職員到東京的國立釀造試驗所學習約一年，1976 年把舊中學校舍改建成「清里町馬鈴薯釀造試驗研究所」。經過多次失敗與試釀，1979 年終於推出日本第一支本格馬鈴薯燒酎「きよさと」。",
     "現在的主力酒是「北海道 清里」系列。酒醪用北海道產二條大麥做麴，加入清里產的澱粉用馬鈴薯，蒸餾後在槽中熟成兩年以上，部分品項改放白橡木桶，就是店裡的〈樽〉；〈原酒〉則是不加水稀釋的版本。"
    ],
    "profile": [
     [
      "所在地",
      "北海道斜里郡清里町羽衣町 62 番地 1"
     ],
     [
      "創業",
      "1975 年（昭和 50 年）町主導開始釀造事業"
     ],
     [
      "經營",
      "清里町（代表人為町長）"
     ],
     [
      "原料",
      "清里町產澱粉加工用馬鈴薯、北海道產二條大麥麴"
     ],
     [
      "水",
      "斜里岳山麓湧出的水"
     ],
     [
      "銘柄",
      "北海道 清里（標準、〈樽〉、〈原酒〉、原酒 18 年）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1955,
     "e": "昭和 30 年",
     "t": "上斜里村升格為町，改名「清里町」",
     "approx": false
    },
    {
     "y": 1975,
     "e": "昭和 50 年",
     "t": "町啟動特產品計畫，派職員赴東京國立釀造試驗所學習燒酎製法約一年",
     "approx": false
    },
    {
     "y": 1976,
     "e": "昭和 51 年",
     "t": "改建舊中學校舍，成立「清里町馬鈴薯釀造試驗研究所」開始試釀",
     "approx": false
    },
    {
     "y": 1979,
     "e": "昭和 54 年",
     "t": "日本第一支本格馬鈴薯燒酎「きよさと」上市",
     "approx": false
    },
    {
     "y": 1986,
     "e": "昭和 61 年",
     "t": "設立新的釀造事業所",
     "approx": false
    },
    {
     "y": 2014,
     "e": "平成 26 年",
     "t": "品牌設計大幅改版",
     "approx": false
    },
    {
     "y": 2025,
     "e": "令和 7 年",
     "t": "馬鈴薯燒酎迎來 50 週年",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒名就是町名。",
    "parts": [
     {
      "c": "清",
      "r": "きよ",
      "n": "取自分出前的母村「小清水」，也有「清らかな里」（清澈的村落）之意"
     },
     {
      "c": "里",
      "r": "さと",
      "n": "取自另一個母村「斜里」；1943 年從兩地分出時叫上斜里村，1955 年改名清里町"
     }
    ]
   },
   "place": [
    {
     "k": "山",
     "t": "日本百名山之一的斜里岳俯瞰全町，清里町就在它的山腳下。"
    },
    {
     "k": "水",
     "t": "官網說用的是斜里岳山麓湧出的清水；酒藏後方流過的斜里川，官網稱曾獲選透明度日本第一。"
    },
    {
     "k": "田",
     "t": "旱田農業發達，種小麥、甜菜、馬鈴薯、洋蔥、蕎麥；燒酎用的是比食用馬鈴薯澱粉更多的澱粉加工用品種。"
    }
   ],
   "craft": {
    "title": "馬鈴薯怎麼變成燒酎",
    "points": [
     [
      "麴",
      "用北海道產二條大麥製麴，而不是米麴"
     ],
     [
      "主原料",
      "清里町產的澱粉加工用馬鈴薯，澱粉含量比食用馬鈴薯高"
     ],
     [
      "醪",
      "一次醪約一週達 10% 以上，加入馬鈴薯的二次醪約兩週達 15% 左右"
     ],
     [
      "熟成",
      "蒸餾後在槽中熟成兩年以上，部分品項改用白橡木桶"
     ]
    ],
    "quote": {
     "t": "（今年也）用心進行釀造作業。",
     "o": "心を込めて作業を進める",
     "who": "新輪誠一，清里燒酎釀造所所長",
     "src": "北海道新聞（2025 年 9 月）"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/18/Mt_Shari_2.JPG",
     "w": 2816,
     "t": "從南南西側裏摩周展望台望向斜里岳",
     "by": "Highten31",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Mt_Shari_2.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Mt_Shari.JPG",
     "w": 2816,
     "t": "斜里岳西北面",
     "by": "Highten31",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Mt_Shari.JPG"
    }
   ],
   "sources": [
    [
     "清里焼酎醸造所官網：清里焼酎とは（年表）",
     "https://kiyosato-shochu.com/pages/kiyosato-shochu-history"
    ],
    [
     "清里焼酎醸造所官網：清里焼酎が出来るまで",
     "https://kiyosato-shochu.com/pages/kiyosato-shochu-production-process"
    ],
    [
     "清里焼酎醸造所官網：組織概要",
     "https://kiyosato-shochu.com/pages/kiyosato-shochu-organization-overview"
    ],
    [
     "清里焼酎醸造所官網（商品）",
     "https://www.kiyosato-shochu.com/"
    ],
    [
     "北海道新聞：心込め節目の仕込み 誕生50年の清里・じゃがいも焼酎",
     "https://www.hokkaido-np.co.jp/article/1216704/"
    ],
    [
     "Wikipedia：清里町",
     "https://ja.wikipedia.org/wiki/%E6%B8%85%E9%87%8C%E7%94%BA"
    ]
   ]
  },
  "koueigiku": {
   "tone": [
    "#f7f0de",
    "#2e241a",
    "#8c7350",
    "#c99a2e"
   ],
   "city": "小城市",
   "founded": "2019",
   "oneName": "光榮菊酒造",
   "one": {
    "c": "甦",
    "t": "明治年間就在釀酒的老藏 2006 年停業，空了十多年；2019 年兩位前 NHK 節目製作人和杜氏山本克明把它修好、重新開釀，銘柄沿用舊名「光榮菊」。"
   },
   "hook": "一間停業十三年、差點被拆走運到美國的明治酒藏，被兩個做電視的人和一位杜氏救了回來。",
   "order": [
    "about",
    "timeline",
    "craft",
    "name",
    "place"
   ],
   "about": {
    "paras": [
     "光榮菊酒造在佐賀縣中部的小城市三日月町織島。這座酒藏原本是有長久歷史的老藏，2006 年停業；藏裡最老的建物「ムロマエ」建於明治中期（1883–1897），被日本文化廳評為「施設內最古、在酒造設施史上重要」。",
     "2018 年起，曾在 NHK 做節目的日下智、田下裕也，和杜氏山本克明開始籌備讓它復活。杜氏在訪談中說，停業後這棟明治、大正年間的木造建物一度要被拆遷到美國；他們資金有限，自己換瓦、換掉腐朽的木料、一天天打掃，設備則用其他縣已關閉酒藏留下的器材。",
     "2019 年 8 月剛整頓好，就遇上令和元年佐賀豪雨，麴室進水；同年 12 月仍完成第一槽酒。銘柄沿用前身的「光榮菊」，酒藏說是希望做「地域に愛される酒」——被這片土地喜愛的酒。2021 年，ムロマエ、モトクラ、舊麴室與煙囪等建物登錄為國家登錄有形文化財。",
     "杜氏山本克明之前在愛知縣藤市酒造釀「菊鷹」。在光榮菊，他採用被稱為「天然乳酸菌仕込み」的酒母做法，大多數酒款以無濾過生原酒出貨，而且刻意不在酒標上寫特定名稱、精米步合與米種。"
    ],
    "profile": [
     [
      "所在地",
      "佐賀縣小城市三日月町織島"
     ],
     [
      "創業",
      "2019 年（以光榮菊酒造株式會社重新開業；前身老藏 2006 年停業）"
     ],
     [
      "代表",
      "日下智"
     ],
     [
      "杜氏",
      "山本克明（前「菊鷹」杜氏）"
     ],
     [
      "招牌",
      "天然乳酸菌仕込み、無濾過生原酒"
     ],
     [
      "建築",
      "ムロマエ（明治中期）等 4 棟為國家登錄有形文化財（2021）"
     ],
     [
      "銘柄",
      "光榮菊"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1890,
     "e": "明治中期（1883–1897）",
     "t": "藏內現存最老的建物「ムロマエ」建成",
     "approx": true
    },
    {
     "y": 2006,
     "e": "平成 18 年",
     "t": "前身酒藏停業",
     "approx": false
    },
    {
     "y": 2018,
     "e": "平成 30 年",
     "t": "日下智、田下裕也與杜氏山本克明開始籌備復活",
     "approx": false
    },
    {
     "y": 2019,
     "e": "令和元年",
     "t": "8 月設備就緒，旋即遭令和元年佐賀豪雨、麴室進水；12 月完成第一槽酒",
     "approx": false
    },
    {
     "y": 2021,
     "e": "令和 3 年",
     "t": "ムロマエ、モトクラ、舊麴室、煙囪登錄為國家登錄有形文化財（2 月 26 日）",
     "approx": false
    }
   ],
   "name": {
    "lead": "名字是接手來的。",
    "parts": [
     {
      "c": "光榮菊",
      "r": "こうえいぎく",
      "n": "前身酒藏的銘柄。新團隊復活時選擇沿用，理由是想做「地域に愛される酒」。"
     }
    ]
   },
   "place": [
    {
     "k": "地",
     "t": "小城市位在佐賀縣中部；杜氏在訪談中形容，酒藏北望筑紫山地、南面有明海，附近有祇園川流過。"
    },
    {
     "k": "藏",
     "t": "建物群是明治、大正年間的木造酒藏，其中 4 棟為國家登錄有形文化財；煙囪被文化廳形容為「地域的地標」。"
    }
   ],
   "craft": {
    "title": "不寫等級的酒標",
    "points": [
     [
      "酒母",
      "藏方稱為「天然乳酸菌仕込み」，類似生酛、山廢但不完全相同的自家酒母做法。"
     ],
     [
      "出貨",
      "多數酒款為無濾過生原酒；從釀造、裝瓶都維持低溫，減少氧化。"
     ],
     [
      "酒標",
      "大多不標特定名稱（純米、吟釀等），也不公布精米步合、米種、日本酒度與酸度。"
     ],
     [
      "人",
      "代表日下智、田下裕也出身 NHK 節目製作；杜氏山本克明具南部杜氏資格，曾任愛知縣藤市酒造杜氏、釀「菊鷹」。"
     ]
    ],
    "quote": {
     "t": "因為我們希望你不帶先入為主的想法，單純享受這杯酒。",
     "o": "Because we want you to enjoy the alcohol itself without any preconceived notions.",
     "who": "山本克明，光榮菊酒造杜氏",
     "src": "Umami Mart（2026）"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/31/%E5%85%89%E6%A0%84%E8%8F%8A%E9%85%92%E9%80%A0.jpg",
     "w": 4032,
     "t": "光榮菊酒造外觀，佐賀縣小城市三日月町",
     "by": "ハポニアラ",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E5%85%89%E6%A0%84%E8%8F%8A%E9%85%92%E9%80%A0.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/e/e4/%E5%85%89%E6%A0%84%E8%8F%8A%E9%85%92%E9%80%A0%E3%83%A0%E3%83%AD%E3%83%9E%E3%82%A8.jpg",
     "w": 4032,
     "t": "光榮菊酒造的ムロマエ，藏內最老的建物（明治中期，國家登錄有形文化財）",
     "by": "ハポニアラ",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E5%85%89%E6%A0%84%E8%8F%8A%E9%85%92%E9%80%A0%E3%83%A0%E3%83%AD%E3%83%9E%E3%82%A8.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/c/c2/%E5%85%89%E6%A0%84%E8%8F%8A%E9%85%92%E9%80%A0%E3%83%A2%E3%83%88%E3%82%AF%E3%83%A9.jpg",
     "w": 4032,
     "t": "光榮菊酒造的モトクラ（國家登錄有形文化財）",
     "by": "ハポニアラ",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E5%85%89%E6%A0%84%E8%8F%8A%E9%85%92%E9%80%A0%E3%83%A2%E3%83%88%E3%82%AF%E3%83%A9.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/09/%E5%85%89%E6%A0%84%E8%8F%8A%E9%85%92%E9%80%A0%E7%85%99%E7%AA%81.jpg",
     "w": 4284,
     "t": "光榮菊酒造的煙囪（國家登錄有形文化財）",
     "by": "ハポニアラ",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E5%85%89%E6%A0%84%E8%8F%8A%E9%85%92%E9%80%A0%E7%85%99%E7%AA%81.jpg"
    }
   ],
   "sources": [
    [
     "Sakenomy｜光栄菊酒造株式会社",
     "https://www.sakenomy.jp/brewery/K01N041030/"
    ],
    [
     "SAKETIME｜光栄菊 銘柄・酒蔵情報",
     "https://www.saketime.jp/brands/3256/"
    ],
    [
     "Umami Mart｜Interview with Master Brewer Katsuaki Yamamoto（2026-06）",
     "https://umamimart.com/blogs/main/interview-with-master-brewer-katsuaki-yamamoto-of-koueigiku-brewery"
    ],
    [
     "文化遺産オンライン｜光栄菊酒造ムロマエ",
     "https://online.bunka.go.jp/heritages/detail/517427"
    ],
    [
     "文化遺産オンライン｜小城市の文化財",
     "https://online.bunka.go.jp/heritages/region/41/41208"
    ],
    [
     "SAKETIME｜菊鷹（藤市酒造）",
     "https://www.saketime.jp/brands/2777/"
    ]
   ]
  },
  "lgi-wines": {
   "tone": [
    "#f3e6d3",
    "#3d2418",
    "#8a5a3c",
    "#a8432f"
   ],
   "city": "卡爾卡松（Carcassonne）",
   "founded": "1999",
   "oneName": "LGI",
   "one": {
    "c": "合",
    "t": "LGI 不靠一座自家葡萄園起家，而是和南法各地的合作酒廠、裝瓶廠一起做酒：技術團隊整年跟著合作酒廠，再把酒賣到 40 多個國家。"
   },
   "hook": "三個人在中世紀古城卡爾卡松創業，替朗格多克的酒農把酒賣到 40 多個國家。",
   "order": [
    "about",
    "name",
    "timeline",
    "craft",
    "place"
   ],
   "about": {
    "paras": [
     "LGI Wines 1999 年成立於南法卡爾卡松（Carcassonne），創辦人是 Thierry Leduc、Mark Lynton 與 Alain Grignon；公司名 LGI 取自三人姓氏：Leduc／Lynton Grignon International。他們的出發點是把朗格多克的酒賣到海外市場。",
     "LGI 的做法是和產區裡的合作酒廠、裝瓶廠一起工作，技術團隊整年跟著合作酒廠，客戶可以指定品種、調配、酒瓶、瓶塞到酒標。官網說，這樣能替酒農的酒找到價格公道、可長久的市場。產品主要來自加斯科涅、朗格多克與普羅旺斯。",
     "2001 年加入的 Xavier Roger 現任釀酒師兼總經理，2014 年接替退休的創辦人 Alain Grignon。公司約 45 名員工，酒賣到 40 多個國家，英國（2004）、中國（2008）、美國（2015）、韓國（2023）都設有據點；2020 年買下地中海邊梅茲（Mèze）的 Domaine Saint-André，有了自己的莊園。"
    ],
    "profile": [
     [
      "所在地",
      "法國奧德省卡爾卡松（545 avenue Georges Guille）"
     ],
     [
      "創業",
      "1999 年"
     ],
     [
      "創辦人",
      "Thierry Leduc、Mark Lynton、Alain Grignon"
     ],
     [
      "現任",
      "Xavier Roger（釀酒師兼總經理）"
     ],
     [
      "型態",
      "與合作酒廠一起釀造、裝瓶的出口型酒商"
     ],
     [
      "產區",
      "加斯科涅、朗格多克、普羅旺斯"
     ],
     [
      "自有莊園",
      "Domaine Saint-André（梅茲，2020 年購入）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1999,
     "e": "",
     "t": "Leduc、Lynton、Grignon 三人在卡爾卡松創立 LGI，專做朗格多克葡萄酒出口",
     "approx": false
    },
    {
     "y": 2001,
     "e": "",
     "t": "Xavier Roger 加入",
     "approx": false
    },
    {
     "y": 2004,
     "e": "",
     "t": "成立英國分公司，英國成為最主要的市場",
     "approx": false
    },
    {
     "y": 2008,
     "e": "",
     "t": "設立中國辦公室",
     "approx": false
    },
    {
     "y": 2014,
     "e": "",
     "t": "創辦人 Alain Grignon 退休，Xavier Roger 接任總經理",
     "approx": false
    },
    {
     "y": 2016,
     "e": "",
     "t": "卡爾卡松新總部啟用",
     "approx": false
    },
    {
     "y": 2020,
     "e": "",
     "t": "買下地中海岸梅茲的 Domaine Saint-André",
     "approx": false
    }
   ],
   "name": {
    "lead": "LGI 三個字母，是三位創辦人：",
    "parts": [
     {
      "c": "L",
      "r": "Leduc／Lynton",
      "n": "創辦人 Thierry Leduc 與 Mark Lynton"
     },
     {
      "c": "G",
      "r": "Grignon",
      "n": "創辦人 Alain Grignon，2014 年退休"
     },
     {
      "c": "I",
      "r": "International",
      "n": "一開始就以出口為目標"
     }
    ]
   },
   "place": [
    {
     "k": "城",
     "t": "總部在卡爾卡松，城裡有列入世界遺產的中世紀城堡城（Cité de Carcassonne），四周就是葡萄園。"
    },
    {
     "k": "土",
     "t": "合作酒廠的葡萄來自朗格多克的 Argeliers、Cruzy 一帶，土壤是紅砂岩與黏土石灰岩（英國進口商 Enotria 資料）。"
    },
    {
     "k": "海",
     "t": "2020 年購入的 Domaine Saint-André 位在梅茲，緊鄰地中海。"
    }
   ],
   "craft": {
    "title": "從田間到酒標都能一起決定",
    "points": [
     [
      "合作",
      "技術團隊整年和合作酒廠一起工作，從採收到調配。"
     ],
     [
      "客製",
      "客戶可指定品種、調配、酒瓶、瓶塞、酒標與紙箱。"
     ],
     [
      "白酒",
      "部分白酒夜間採收、控溫發酵，並帶細酒渣熟成（Enotria 資料）。"
     ]
    ],
    "quote": {
     "t": "去回應市場的需要，而不是把產品硬塞給市場。",
     "o": "respond to the needs of the market, rather than imposing products on them",
     "who": "LGI 創辦人的經營原則",
     "src": "LGI Wines 官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Les_vignes_et_la_Cit%C3%A9.jpg",
     "w": 3892,
     "t": "從葡萄園望向卡爾卡松中世紀古城的城牆",
     "by": "Jean-Jacques Lasmolles",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Les_vignes_et_la_Cit%C3%A9.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/77/Carcassonne_-_Les_Mures_%28tone-mapping%29.jpg",
     "w": 3008,
     "t": "卡爾卡松古城城牆，從西南方望去",
     "by": "Guido Radig",
     "lic": "CC BY 3.0",
     "licUrl": "https://creativecommons.org/licenses/by/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Carcassonne_-_Les_Mures_(tone-mapping).jpg"
    }
   ],
   "sources": [
    [
     "LGI Wines 官網（Our History）",
     "https://www.lgiwines.com/"
    ],
    [
     "Enotria&Coe：LGI 生產者頁",
     "https://www.enotria.com/producers/lgi"
    ],
    [
     "Vinissimus：LGI Wines",
     "https://vinissimus.com/en/winery/lgi-wines"
    ],
    [
     "Businesscoot：LGI Wines",
     "https://businesscoot.com/en/company/lgi-wines"
    ]
   ]
  },
  "mitobe": {
   "tone": [
    "#2b2019",
    "#f8f1e3",
    "#d6bf98",
    "#b8864b"
   ],
   "dark": true,
   "city": "天童市",
   "founded": "1898",
   "oneName": "水戶部酒造",
   "one": {
    "c": "米",
    "t": "水戶部酒造以「從種米開始的釀酒」為方針，全量只釀純米酒；2004 年起自己下田種米，面積從 17 公畝擴大到約 6 公頃。"
   },
   "hook": "第五代當主說自己年輕時「一直在逃」；接下家業後，他下田種米、把整間酒藏改成只釀純米，還做出用葡萄酒乳酸發酵技術釀的日本酒。",
   "order": [
    "about",
    "craft",
    "timeline",
    "place",
    "name"
   ],
   "about": {
    "paras": [
     "水戶部酒造位在山形縣天童市，1898 年（明治 31 年）由初代水戶部彌作創立，主力銘柄是「山形正宗」。現任代表取締役水戶部朝信是第五代，從第四代的父親手中接下酒藏。",
     "這是一間小酒藏，2018 年經濟產業省的介紹寫員工 14 人。他們實行「從種米開始的釀酒」，全量以純米酒仕込；2004 年起自己種米，面積從 17 公畝擴大到約 6 公頃，自稱「ほぼドメーヌ化」——像擁有葡萄園的酒莊那樣，自種米與外地酒米並用。",
     "仕込水取自奧羽山系的伏流水，2014 年的英文專訪寫它來自立谷川河床，硬度 127 mg/L，約是日本平均的兩倍，這也是山形正宗被稱作硬水系、口感俐落的原因。",
     "他們也不排斥新技術：與山形縣工業技術中心合作，把葡萄酒的蘋果酸–乳酸發酵（MLF）用在日本酒上，做出「まろら」；還和楯の川、小嶋總本店、男山三家山形年輕藏元，各取一字組成共同企劃「山川光男」。"
    ],
    "profile": [
     [
      "所在地",
      "山形縣天童市大字原町乙 7 番地"
     ],
     [
      "創業",
      "1898 年（明治 31 年），初代水戶部彌作"
     ],
     [
      "當主",
      "代表取締役 水戶部朝信（第五代）"
     ],
     [
      "水",
      "奧羽山系伏流水（立谷川），硬水"
     ],
     [
      "招牌",
      "全量純米、自家栽培米、槽搾"
     ],
     [
      "銘柄",
      "山形正宗、稲造"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1898,
     "e": "明治 31 年",
     "t": "初代水戶部彌作在天童創業",
     "approx": false
    },
    {
     "y": 2001,
     "e": "平成 13 年",
     "t": "第五代水戶部朝信接手釀造",
     "approx": false
    },
    {
     "y": 2004,
     "e": "平成 16 年",
     "t": "開始自家種米，從 17 公畝起步",
     "approx": false
    },
    {
     "y": 2015,
     "e": "平成 27 年",
     "t": "改修仕込藏，由出身天童木工的年輕藏人負責設計",
     "approx": false
    }
   ],
   "name": {
    "lead": "「正宗」不只是常見的酒名後綴。",
    "parts": [
     {
      "c": "山形",
      "r": "やまがた",
      "n": "酒藏所在的縣"
     },
     {
      "c": "正宗",
      "r": "まさむね",
      "n": "據 2014 年專訪，取自 14 世紀名刀匠五郎入道正宗"
     }
    ]
   },
   "place": [
    {
     "k": "水",
     "t": "天童位在山形盆地，仕込水是奧羽山系的伏流水；英文專訪寫取自立谷川河床，硬度 127 mg/L。"
    },
    {
     "k": "田",
     "t": "2004 年起在天童一帶自種酒米，2014 年報導種有出羽燦々、美山錦、山田錦，自種米約占用量一半。"
    },
    {
     "k": "人",
     "t": "冬季藏人多是農家，冬天沒有農活就來酒藏工作；2015 年改修的仕込藏，由當地家具廠天童木工出身的藏人設計。"
    }
   ],
   "craft": {
    "title": "從種米開始的釀酒",
    "points": [
     [
      "全量純米",
      "所有酒都以純米酒仕込，不添加釀造酒精"
     ],
     [
      "自家米",
      "2004 年起自種，面積擴大到約 6 公頃，與外地酒米並用"
     ],
     [
      "手作業",
      "洗米與製麴以手工進行，上槽用傳統的槽（ふね）"
     ],
     [
      "新技術",
      "與山形縣工業技術中心合作，把葡萄酒的 MLF 用在日本酒「まろら」"
     ]
    ],
    "quote": {
     "t": "水，還有人。",
     "o": "The water, and the people.",
     "who": "水戶部朝信，水戶部酒造第五代",
     "src": "Spirited Asia（2014）"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/63/Tachiyagawa_River%2C_Yamagata-City_and_Tendo-City.jpg",
     "w": 2560,
     "t": "流經山形市與天童市之間的立谷川（從天山橋望向上游）",
     "by": "Suz-b",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Tachiyagawa_River,_Yamagata-City_and_Tendo-City.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/79/Yamadera%27s_Tachiya_river_%2851969039904%29.jpg",
     "w": 5793,
     "t": "立谷川上游，山寺一帶",
     "by": "Raita Futo",
     "lic": "CC BY 2.0",
     "licUrl": "https://creativecommons.org/licenses/by/2.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Yamadera%27s_Tachiya_river_(51969039904).jpg"
    }
   ],
   "sources": [
    [
     "中小企業庁（2018）事例資料：株式会社水戸部酒造",
     "https://www.chusho.meti.go.jp/keiei/sapoin/monozukuri300sha/2018/juyou017_mitobesyuzo.pdf"
    ],
    [
     "Spirited Asia：Profile – Yamagata Masamune（2014）",
     "https://www.spiritedasia.com/2014/11/profile-yamagata-masamune/"
    ],
    [
     "SAKETIMES：Mitobe Sake Brewery",
     "https://en.sake-times.com/breweries/mitobe-sake-brewery"
    ],
    [
     "さけのわ：山形正宗",
     "https://sakenowa.com/en/brand/EpeLAT"
    ]
   ]
  },
  "miyaizumi": {
   "tone": [
    "#2b201a",
    "#f4ead8",
    "#cdb592",
    "#a8743f"
   ],
   "dark": true,
   "city": "會津若松市",
   "founded": "1955",
   "oneName": "宮泉銘釀",
   "one": {
    "c": "改",
    "t": "曾經以觀光酒藏聞名、經營卻陷入困境；第四代宮森義弘從東京的系統工程師回鄉接手，停掉觀光與參觀，從洗米方式到分析室一項項改起。"
   },
   "hook": "一間靠觀光客撐著的酒藏，被一位回鄉的系統工程師停掉了參觀，從洗米開始重做一遍。",
   "order": [
    "about",
    "craft",
    "timeline",
    "name",
    "place"
   ],
   "about": {
    "paras": [
     "宮泉銘釀在福島縣會津若松市，鶴之城（鶴ヶ城）腳下。官網記載，昭和 30 年（1955）12 月以「宮森啓治酒造場」設立，昭和 39 年（1964）改組為宮泉銘釀株式會社。這家藏是從同地的花春酒造分家出來的，名字取創業者的姓「宮森」，加上讓出土地的「和泉」家的姓。",
     "第四代宮森義弘接手以前，宮泉是當地有名的觀光酒藏，「會津宮泉」是遊客帶回家的伴手禮，多的時候一天有三百多位觀光客。但除此之外酒賣不太動，經營每況愈下。",
     "義弘原本在東京當系統工程師，據 JR 東日本《トランヴェール》報導，讓他決定回鄉的，是在東京的料理店看到日本酒被慎重對待的樣子。他 2007 年起負責製造，2010 年起兼任社長與杜氏，停掉觀光化與酒藏參觀，把力氣全放在酒質上。隔年就遇上東日本大震災與核災帶來的風評傷害。",
     "現在藏裡有兩個看板：義弘主導的「冩樂」，以及由弟弟宮森大和專務負責、嘗試生酛與白麴的「會津宮泉」。另一條線是本格燒酎「玄武」，其中「皇貴玄武」是先釀成純米酒，再把純米酒拿去蒸餾。"
    ],
    "profile": [
     [
      "所在地",
      "福島縣會津若松市東栄町 8-7"
     ],
     [
      "創業",
      "昭和 30 年（1955）12 月，宮森啓治酒造場設立；昭和 39 年（1964）法人化"
     ],
     [
      "當主",
      "宮森義弘（代表取締役，藏元杜氏）"
     ],
     [
      "水",
      "磐梯山伏流水（地下水，汲上時與使用前各過濾一次）"
     ],
     [
      "招牌",
      "小篩分洗米、仕込水雙重過濾用在所有酒款；榨好即裝瓶冷藏，不用槽貯存"
     ],
     [
      "銘柄",
      "冩樂、會津宮泉、玄武（本格燒酎）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1955,
     "e": "昭和 30 年",
     "t": "12 月，宮森啓治酒造場設立（自花春酒造分家）",
     "approx": false
    },
    {
     "y": 1964,
     "e": "昭和 39 年",
     "t": "4 月法人化，成為宮泉銘釀株式會社",
     "approx": false
    },
    {
     "y": 2007,
     "e": "平成 19 年",
     "t": "宮森義弘開始擔任製造負責人",
     "approx": false
    },
    {
     "y": 2010,
     "e": "平成 22 年",
     "t": "義弘就任代表取締役，社長兼杜氏",
     "approx": false
    },
    {
     "y": 2011,
     "e": "平成 23 年",
     "t": "東日本大震災，酒藏承受核災風評",
     "approx": false
    }
   ],
   "name": {
    "lead": "「宮泉」不是泉水，是兩個家族的姓。",
    "parts": [
     {
      "c": "宮",
      "r": "みや",
      "n": "取自創業者宮森家的「宮」。"
     },
     {
      "c": "泉",
      "r": "いずみ",
      "n": "取自讓出建藏土地的和泉家的「泉」。"
     },
     {
      "c": "玄武",
      "r": "げんぶ",
      "n": "藏裡本格燒酎的品牌：米玄武、麥玄武（25 度），以及以純米酒蒸餾的皇貴玄武（40 度）。"
     }
    ]
   },
   "place": [
    {
     "k": "城下",
     "t": "會津若松是鶴之城的城下町，宮森大和說這裡從江戶時代起就盛行釀酒。"
    },
    {
     "k": "水",
     "t": "磐梯山的伏流水，宮森大和形容是「適度的軟水」，能讓酒的味道飽滿。"
    },
    {
     "k": "氣候",
     "t": "官網說會津一年平均有 140 天以上低於零度，雜菌少、適合釀酒；25 度以上的日子約 100 天，夏秋讓酒熟成出深度。"
    },
    {
     "k": "米",
     "t": "冩樂用福島縣的「夢の香」「五百萬石」，部分與會津的農家共同栽培；也用兵庫、岡山等名產地的酒米。"
    }
   ],
   "craft": {
    "title": "把參賽酒的手工，用在每一瓶",
    "points": [
     [
      "洗米",
      "精米後把米分成小篩，一篩一篩洗、計時浸漬，再翻面讓水分走勻，避免吸水不均。"
     ],
     [
      "仕込水",
      "地下水汲上來時過濾一次、使用前再過濾一次；以前這種處理只用在參賽的大吟釀。"
     ],
     [
      "貯存",
      "不用大槽貯酒，榨好就裝瓶，生酒或火入後直接進冷藏庫，減少氧化。"
     ],
     [
      "藏元杜氏",
      "原本只有杜氏能進的「杜氏部屋」改成分析室，由經營者兼任杜氏，決定更快。"
     ]
    ],
    "quote": {
     "t": "我們想釀的，是大家一起喝時會說「好喝！」的酒。",
     "o": "僕らがみんなと飲んで「美味い！」と思う酒を造りたいですね。",
     "who": "宮森大和，宮泉銘醸專務",
     "src": "Precious.jp"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/c/ca/%E9%B6%B4%E3%83%B6%E5%9F%8E.jpg",
     "w": 3264,
     "t": "會津若松市的鶴之城（若松城）",
     "by": "Kiha 40-2020",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:鶴ヶ城.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/62/Mt._Bandaisan_0811.JPG",
     "w": 3264,
     "t": "福島縣的磐梯山",
     "by": "Qwert1234",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Mt._Bandaisan_0811.JPG"
    }
   ],
   "sources": [
    [
     "宮泉銘醸 官網：会社概要",
     "https://miyaizumi.co.jp/about"
    ],
    [
     "宮泉銘醸 官網：玄武",
     "https://miyaizumi.co.jp/sake/genbu.html"
    ],
    [
     "宮泉銘醸 官網：冩樂商品",
     "https://miyaizumi.co.jp/sake"
    ],
    [
     "Precious.jp：「写楽」の蔵元へ（宮森大和專務訪談）",
     "https://precious.jp/articles/-/9121"
    ],
    [
     "JR東日本《トランヴェール》2021 年 2 月號：宮泉銘醸、酒造りの信念",
     "https://www.jreast.co.jp/railway/trainvert/archive/2021_trainvert/2102_03_part.html"
    ],
    [
     "SAKETIME：會津宮泉（山內聖子撰文）",
     "https://www.saketime.jp/brands/315/"
    ]
   ]
  },
  "nagai": {
   "tone": [
    "#f5efe1",
    "#2f261e",
    "#857057",
    "#b98a4b"
   ],
   "city": "川場村",
   "founded": "1886",
   "oneName": "永井酒造",
   "one": {
    "c": "水",
    "t": "初代永井庄治因為愛上川場村的水而在這裡開藏；為了守住仕込水，永井家一點一點買下水源沢兩側的森林，至今仍自己照顧。"
   },
   "hook": "1886 年，一個人愛上了川場村的水；之後永井家把水源兩旁的森林一塊塊買下來，好讓那口水一直乾淨。",
   "order": [
    "about",
    "place",
    "craft",
    "timeline",
    "name"
   ],
   "about": {
    "paras": [
     "永井酒造在群馬縣最北部的利根郡川場村，利根川的源流域。明治 19 年（1886），初代永井庄治在這裡遇見從武尊山落下、經尾瀨一帶大地濾過的雨雪之水，決定在此釀酒。",
     "為了守住這口仕込水，永井家把取水的沢兩側森林一點一點買下，到今天仍由酒藏自己整理林地。藏的四周是大片水田，酒米除了兵庫三木市別所的山田錦，也用川場村產的「雪ほたか」與五百萬石，都是契約栽培。",
     "平成 4 年（1992），主力品牌「水芭蕉」上市，被酒藏稱為「第二次創業」；平成 6 年（1994）專做吟釀的新藏「水芭蕉藏」完工。另一個品牌「谷川岳」，和水芭蕉一樣是以大自然命名，追求「美麗、乾淨」的酒。",
     "第六代藏元永井則吉為了做出世界通用的日本酒，跑到法國香檳區取經。2008 年，用瓶內二次發酵製成的氣泡清酒「MIZUBASHO PURE」問世，之後再推出 Vintage Sake 與 Dessert Sake，組成從乾杯到餐後的「NAGAI STYLE」。"
    ],
    "profile": [
     [
      "所在地",
      "群馬縣利根郡川場村門前 713"
     ],
     [
      "創業",
      "明治 19 年（1886）"
     ],
     [
      "當主",
      "永井則吉（代表取締役，第六代藏元）"
     ],
     [
      "水",
      "武尊山的雨雪經尾瀨大地濾過的天然水；酒藏自有水源林"
     ],
     [
      "招牌",
      "瓶內二次發酵氣泡清酒 MIZUBASHO PURE"
     ],
     [
      "銘柄",
      "水芭蕉、谷川岳"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1886,
     "e": "明治 19 年",
     "t": "初代永井庄治在川場村創業",
     "approx": false
    },
    {
     "y": 1992,
     "e": "平成 4 年",
     "t": "主力品牌「水芭蕉」上市，酒藏稱為第二次創業",
     "approx": false
    },
    {
     "y": 1994,
     "e": "平成 6 年",
     "t": "專釀吟釀的新藏「水芭蕉藏」完工",
     "approx": false
    },
    {
     "y": 2008,
     "e": "平成 20 年",
     "t": "瓶內二次發酵氣泡清酒「MIZUBASHO PURE」誕生",
     "approx": false
    },
    {
     "y": 2013,
     "e": "平成 25 年",
     "t": "推出「Vintage Sake」",
     "approx": false
    },
    {
     "y": 2014,
     "e": "平成 26 年",
     "t": "2 月推出「Dessert Sake」，NAGAI STYLE 成形",
     "approx": false
    }
   ],
   "name": {
    "lead": "兩個品牌，都是群馬北部的自然。",
    "parts": [
     {
      "c": "水芭蕉",
      "r": "みずばしょう",
      "n": "濕原上的白色花（水芭蕉），1992 年起的主力品牌；酒藏說品牌名就是要表現大自然。"
     },
     {
      "c": "谷川岳",
      "r": "たにがわだけ",
      "n": "群馬與新潟縣界的名山，永井酒造另一個主要品牌。"
     },
     {
      "c": "川場",
      "r": "かわば",
      "n": "酒藏所在的村名，據說因為河川多而得名。"
     }
    ]
   },
   "place": [
    {
     "k": "山",
     "t": "武尊山的雨雪落下，經尾瀨的山地濾過，在川場村湧出成為仕込水。"
    },
    {
     "k": "森",
     "t": "永井家陸續買下取水沢兩側的森林，守護水源，至今由酒藏維護。"
    },
    {
     "k": "田",
     "t": "藏前是一望無際的水田；酒米含川場村產「雪ほたか」，以及長野舊鬼無里村契約栽培的「ひとごこち」。"
    },
    {
     "k": "河",
     "t": "川場村位在利根川的源流域。"
    }
   ],
   "craft": {
    "title": "把香檳的方法用在米上",
    "points": [
     [
      "起點",
      "為了做出世界通用的日本酒，永井則吉到法國香檳區學葡萄酒，決定「把葡萄做的事，用米來做」。"
     ],
     [
      "Sparkling",
      "MIZUBASHO PURE 以香檳傳統的瓶內二次發酵製成，取得國際與日本國內的製造及產品專利。"
     ],
     [
      "Still",
      "水芭蕉、谷川岳的純米吟釀與純米大吟釀。"
     ],
     [
      "Vintage／Dessert",
      "經 20 年研究提出的「不是古酒的 Vintage」，以及搭配甜點與起司的 Dessert Sake。"
     ]
    ],
    "quote": {
     "t": "我自己在世界上最愛的地方，就是川場村。",
     "o": "私自身も世界で最も愛する場所が川場村であります。",
     "who": "永井則吉，永井酒造代表取締役・第六代藏元",
     "src": "永井酒造官網 代表挨拶"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Hotaka01.JPG",
     "w": 2304,
     "t": "從谷川岳望向群馬的武尊山西北西面",
     "by": "Mass Ave 975",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Hotaka01.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Mount_Tanigawa_%2852212084000%29.jpg",
     "w": 5934,
     "t": "夏天的谷川岳",
     "by": "Raita Futo",
     "lic": "CC BY 2.0",
     "licUrl": "https://creativecommons.org/licenses/by/2.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Mount_Tanigawa_(52212084000).jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/c/ce/JP-10_Ozegahara_Lysichiton_camtschatcense.jpg",
     "w": 3264,
     "t": "尾瀨之原的水芭蕉花季",
     "by": "tata_aka_T (Flickr)",
     "lic": "CC BY 2.0",
     "licUrl": "https://creativecommons.org/licenses/by/2.0/",
     "page": "https://commons.wikimedia.org/wiki/File:JP-10_Ozegahara_Lysichiton_camtschatcense.jpg"
    }
   ],
   "sources": [
    [
     "永井酒造官網：History",
     "https://nagai-sake.co.jp/history/"
    ],
    [
     "永井酒造官網：Kura（水・米・技）",
     "https://nagai-sake.co.jp/kura/"
    ],
    [
     "永井酒造官網：会社概要",
     "https://nagai-sake.co.jp/corporate/"
    ],
    [
     "永井酒造官網：代表挨拶",
     "https://nagai-sake.co.jp/corporate/message/"
    ],
    [
     "群馬縣：ぐんまの地酒 永井酒造",
     "https://www.pref.gunma.jp/site/sake/500073.html"
    ]
   ]
  },
  "nakajima": {
   "tone": [
    "#efe4cf",
    "#2a1f17",
    "#6e5440",
    "#9c3b2a"
   ],
   "city": "瑞浪市",
   "founded": "1702",
   "oneName": "中島釀造",
   "one": {
    "c": "米",
    "t": "元祿 15 年（1702），初代中島小左衛門用信拿年貢米開始釀酒；三百年後的 2002 年，酒藏又「像元祿 15 年那樣」請瑞浪農家種酒米，2007 年做到全部使用瑞浪產酒造好適米。"
   },
   "hook": "從元祿年間的年貢米起家，三百年後又回到瑞浪的田裡：小左衛門這個銘柄，用的是初代當主的名字。",
   "order": [
    "about",
    "name",
    "timeline",
    "craft",
    "place"
   ],
   "about": {
    "paras": [
     "中島釀造位在岐阜縣東濃地方的瑞浪市土岐町，從 JR 瑞浪站步行約 15 分鐘。官網記載，元祿 15 年（1702）初代中島小左衛門用信利用年貢米開始釀酒；昭和 28 年（1953），第 12 代中島小左衛門擔任當主時設立株式會社。",
     "1990 年代末起，酒藏轉向：1997 年開始釀古酒並提高特定名稱酒的比例，1998 年取得瑞士伯恩財團許可，把畫家保羅・克利（Paul Klee）的三幅作品印上「始祿」的酒標。2000 年推出以初代名字命名的新銘柄「小左衛門」，首批以純米與三年古酒為主共 7 款。",
     "2001 年迎來創業 300 年。隔年，酒藏仿照元祿 15 年的做法，請瑞浪農家種植、收成酒米，以「瑞浪米」釀了兩款純米吟釀；2004 年不再仰賴外地季節工，三百年來第一次只靠自家社員釀酒。2018 年設置新藏，從只在冬季釀造改為「四季釀造」。",
     "官網沿革寫到，2013 年前後已與法國、德國、台灣、美國等 24 國往來；2015 年第一次參加全國新酒鑑評會，純米大吟釀（精米 40%）獲金賞，並連續三年獲獎。"
    ],
    "profile": [
     [
      "所在地",
      "岐阜縣瑞浪市土岐町 7181-1"
     ],
     [
      "創業",
      "元祿 15 年（1702）；1953 年設立株式會社"
     ],
     [
      "代表",
      "代表取締役 中野孝彥（官網與 JETRO 資料）"
     ],
     [
      "招牌",
      "純米與熟成酒；生酛；再仕込貴釀酒；四季釀造"
     ],
     [
      "米",
      "瑞浪產酒米、岐阜縣產「ひだ譽」及各地契作酒米"
     ],
     [
      "銘柄",
      "小左衛門、始祿"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1702,
     "e": "元祿 15 年",
     "t": "初代中島小左衛門用信以年貢米開始釀酒",
     "approx": false
    },
    {
     "y": 1953,
     "e": "昭和 28 年",
     "t": "第 12 代中島小左衛門任當主，設立株式會社",
     "approx": false
    },
    {
     "y": 1998,
     "e": "平成 10 年",
     "t": "取得許可，以保羅・克利三幅畫作為「始祿」酒標",
     "approx": false
    },
    {
     "y": 2000,
     "e": "平成 12 年",
     "t": "推出新銘柄「小左衛門」",
     "approx": false
    },
    {
     "y": 2002,
     "e": "平成 14 年",
     "t": "委託瑞浪農家種酒米，釀出「瑞浪米」純米吟釀",
     "approx": false
    },
    {
     "y": 2004,
     "e": "平成 16 年",
     "t": "不再雇用外地季節工，首度全由自家社員釀酒",
     "approx": false
    },
    {
     "y": 2018,
     "e": "平成 30 年",
     "t": "設置新藏，由冬季釀造改為四季釀造",
     "approx": false
    }
   ],
   "name": {
    "lead": "銘柄沿用了創業者的名字。",
    "parts": [
     {
      "c": "小左衛門",
      "r": "こざえもん",
      "n": "初代當主中島小左衛門用信之名；官網沿革裡第 12 代當主也叫中島小左衛門。2000 年起作為新銘柄。"
     },
     {
      "c": "始祿",
      "r": "しろく",
      "n": "酒藏較早的銘柄，1998 年的克利酒標款、2001 年的創業 300 年紀念酒「始祿 三百年」都用這個名字。"
     }
    ]
   },
   "place": [
    {
     "k": "地",
     "t": "瑞浪市位於岐阜縣東南部的東濃地方，酒藏在市內土岐町，離 JR 瑞浪站步行約 15 分鐘。"
    },
    {
     "k": "米",
     "t": "2002 年起請瑞浪農家種植酒米，2006 年開始與單位農協往來、取得看得見農家面孔的酒米，2007 年做到全量使用瑞浪產酒造好適米。"
    }
   ],
   "craft": {
    "title": "從熟成到四季釀造",
    "points": [
     [
      "熟成",
      "1997 年開始釀古酒；2003 年著手熟成酒，也以精米 80% 等規格正面挑戰純米酒。"
     ],
     [
      "生酛",
      "2009 年開始以生酛釀造。"
     ],
     [
      "貴釀酒",
      "2011 年著手再仕込貴釀酒（以酒代替部分仕込水的做法）。"
     ],
     [
      "四季釀造",
      "2018 年設置新藏，全年釀造，讓酒能以新鮮的節奏出貨。"
     ],
     [
      "契作",
      "播州山田錦、愛山、備前雄町、赤磐雄町、信濃美山錦等酒米，以及高知馬路村柚子、和歌山南高梅，皆與當地農家契作。"
     ]
    ]
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/70/%E8%AB%8F%E8%A8%AA%E7%A5%9E%E7%A4%BE_%28%E7%91%9E%E6%B5%AA%E5%B8%82%E5%9C%9F%E5%B2%90%E7%94%BA%29.jpg",
     "w": 1616,
     "t": "酒藏所在的瑞浪市土岐町的諏訪神社（2025 年）",
     "by": "へぼ飯",
     "lic": "CC0",
     "licUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E8%AB%8F%E8%A8%AA%E7%A5%9E%E7%A4%BE_(%E7%91%9E%E6%B5%AA%E5%B8%82%E5%9C%9F%E5%B2%90%E7%94%BA).jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/89/Mizunamicity_Gifupref_Agricultural_zone.JPG",
     "w": 2304,
     "t": "瑞浪市內的農業地帶（2014 年）",
     "by": "Mti",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Mizunamicity_Gifupref_Agricultural_zone.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/04/%E4%B8%96%E7%95%8C%E4%B8%80%E3%81%AE%E7%8B%9B%E7%8A%AC%E3%81%AE%E5%89%8D%E3%81%AE%E6%A3%9A%E7%94%B0%EF%BC%88%E7%94%B0%E5%9C%92%E9%A2%A8%E6%99%AF%EF%BC%89_-_panoramio.jpg",
     "w": 4288,
     "t": "瑞浪市的梯田田園風景（2011 年 11 月）",
     "by": "ｓｏｎｏｙａｎ",
     "lic": "CC BY 3.0",
     "licUrl": "https://creativecommons.org/licenses/by/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E4%B8%96%E7%95%8C%E4%B8%80%E3%81%AE%E7%8B%9B%E7%8A%AC%E3%81%AE%E5%89%8D%E3%81%AE%E6%A3%9A%E7%94%B0%EF%BC%88%E7%94%B0%E5%9C%92%E9%A2%A8%E6%99%AF%EF%BC%89_-_panoramio.jpg"
    }
   ],
   "sources": [
    [
     "中島釀造官網・會社概要（沿革）",
     "https://kozaemon.jp/about"
    ],
    [
     "JETRO 岐阜：中島醸造株式会社",
     "https://www.jetro.go.jp/jetro/japan/gifu/company/nakashima_sake_brewing.html"
    ],
    [
     "國稅廳名古屋國稅局：酒蔵一覧",
     "https://www.nta.go.jp/about/organization/nagoya/sake/sakagura/pdf/02.pdf"
    ]
   ]
  },
  "nakano": {
   "tone": [
    "#2b2420",
    "#f4ead8",
    "#cdb998",
    "#a8402e"
   ],
   "dark": true,
   "city": "半田市",
   "founded": "1844",
   "oneName": "中埜酒造",
   "one": {
    "c": "船",
    "t": "創業者小栗冨次郎原本是替中埜家（今日 Mizkan 醋的源頭）運送醋的船長，因生意有成而從中埜家接下釀酒權；酒藏至今仍立在半田運河邊。"
   },
   "hook": "一位替醋廠跑船的船長，在 1844 年的半田運河邊開始釀「國盛」。",
   "order": [
    "about",
    "timeline",
    "craft",
    "place",
    "name"
   ],
   "about": {
    "paras": [
     "中埜酒造位在愛知縣知多半島的半田市。江戶時代起，知多半島就是釀酒、釀醋、味噌與醬油的重鎮，半田的粕醋還被江戶流行的「早壽司」拿來用。",
     "弘化元年（1844），初代小栗冨次郎在半田村創立「國盛」。他原本是替中埜家運醋的船長，中埜家正是今日 Mizkan 醋的源頭。日俄戰爭後小栗家的事業接連倒閉，明治 42 年（1909）由中埜家與釀「雪山」的瀧本家合組丸中酒造合資會社，才把酒藏救了回來；1990 年改名為中埜酒造。",
     "黑色板牆的舊酒藏挺過了 1944 年的東南海地震與 1959 年的伊勢灣颱風，1985 年起改為「國盛 酒の文化館」對外開放，館內保留昔日的釀酒工具。",
     "除了日本酒，中埜酒造也以梅酒和水果酒聞名。2008 年成立「國盛FARM」自己種梅，以「用知多的酒醃知多的梅」為概念，從種植到釀造一手包辦。"
    ],
    "profile": [
     [
      "所在地",
      "愛知縣半田市東本町二丁目 24 番地"
     ],
     [
      "創業",
      "弘化元年（1844）"
     ],
     [
      "當主",
      "代表取締役社長 中埜溫子"
     ],
     [
      "水",
      "知多半島豐沛的湧水（官網說明此地成為釀造重鎮的原因之一）"
     ],
     [
      "招牌",
      "日本酒、梅酒、水果酒與甘酒"
     ],
     [
      "銘柄",
      "國盛（くにざかり）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1844,
     "e": "弘化元年",
     "t": "初代小栗冨次郎在半田村創立「國盛」",
     "approx": false
    },
    {
     "y": 1909,
     "e": "明治 42 年",
     "t": "中埜家與「雪山」瀧本家合組丸中酒造合資會社，讓瀕臨倒閉的酒藏重生",
     "approx": false
    },
    {
     "y": 1920,
     "e": "大正 9 年",
     "t": "俳人河東碧梧桐造訪半田，題寫了國盛酒標上的字",
     "approx": false
    },
    {
     "y": 1985,
     "e": "昭和 60 年",
     "t": "舊酒藏改為「酒の文化館」開館",
     "approx": false
    },
    {
     "y": 1990,
     "e": "平成 2 年",
     "t": "公司改名為中埜酒造",
     "approx": false
    },
    {
     "y": 2008,
     "e": "平成 20 年",
     "t": "成立「國盛FARM」，自己種梅釀梅酒",
     "approx": false
    },
    {
     "y": 2017,
     "e": "平成 29 年",
     "t": "甘酒專用工廠開始運作",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒名是一個願望。",
    "parts": [
     {
      "c": "國盛",
      "r": "くにざかり（kunizakari）",
      "n": "官網說明：祈願國家繁榮，也盼自家的酒隨之興盛。"
     }
    ]
   },
   "place": [
    {
     "k": "運河",
     "t": "酒藏位在半田運河旁，黑板牆的倉庫沿著河岸排開；明治末年的老照片裡，運河邊就是丸中酒造（今中埜酒造）的酒藏。"
    },
    {
     "k": "半島",
     "t": "知多半島因湧水、氣候、好米與海運，從江戶初期就是醋、酒、味噌、醬油的釀造重鎮。"
    },
    {
     "k": "梅",
     "t": "2008 年在知多地方成立「國盛FARM」，用自家種的梅釀梅酒。"
    }
   ],
   "craft": {
    "title": "從醋船到梅園",
    "points": [
     [
      "梅酒",
      "以「用知多的酒醃知多的梅」為概念，自 2008 年起自家種梅，從栽培到釀造都自己來。"
     ],
     [
      "甘酒",
      "2017 年啟用甘酒專用工廠。"
     ],
     [
      "酒粕",
      "2020 年起把酒粕拿去當知多和牛的飼料。"
     ]
    ],
    "quote": {
     "t": "站在買的人的立場，用真心做好東西。",
     "o": "買う身になって まごころこめて よい品を",
     "who": "中埜酒造的經營理念",
     "src": "中埜酒造官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/64/Kunizakari_Sake_no_Bunkakan_Museum_ac.jpg",
     "w": 5861,
     "t": "半田市的「國盛 酒の文化館」，由中埜酒造的舊酒藏改建（2018 年攝）",
     "by": "Asturio Cantabrio",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Kunizakari_Sake_no_Bunkakan_Museum_ac.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/af/Handa_Canal_ac.jpg",
     "w": 5995,
     "t": "流經半田市的半田運河，沿岸是黑板牆的釀造倉庫（2020 年攝）",
     "by": "Asturio Cantabrio",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Handa_Canal_ac.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/52/Handa_Canal_Meiji_40s.jpg",
     "w": 1560,
     "t": "明治 40 年代的半田港（半田運河），右側是釀「國盛」的丸中酒造（今中埜酒造）酒藏",
     "by": "國書刊行會（出版）",
     "lic": "Public domain",
     "licUrl": "",
     "page": "https://commons.wikimedia.org/wiki/File:Handa_Canal_Meiji_40s.jpg"
    }
   ],
   "sources": [
    [
     "中埜酒造官網：中埜酒造のあゆみ",
     "https://www.nakanoshuzou.jp/progress/"
    ],
    [
     "中埜酒造官網：中埜酒造について",
     "https://www.nakanoshuzou.jp/mind/"
    ],
    [
     "中埜酒造官網：会社案内",
     "https://www.nakanoshuzou.jp/corporate/"
    ],
    [
     "中埜酒造官網：酒の文化館",
     "https://www.nakanoshuzou.jp/museum/"
    ],
    [
     "中埜酒造官網：梅酒",
     "https://www.nakanoshuzou.jp/product/plumwine.html"
    ],
    [
     "愛知縣觀光官網 Aichi Now：國盛 酒の文化館",
     "https://www.aichinow.pref.aichi.jp/spots/detail/110/"
    ]
   ]
  },
  "naminooto": {
   "tone": [
    "#f5ecdc",
    "#2f2620",
    "#8c6e55",
    "#a8463a"
   ],
   "city": "大津市",
   "founded": "1805",
   "oneName": "浪乃音酒造",
   "one": {
    "c": "壺",
    "t": "酒藏的理念「古壺新酒」借自俳人高濱虛子的造語，意思是用舊的壺裝新的酒：守住兩百多年的傳統，同時繼續嘗試新東西。"
   },
   "hook": "琵琶湖畔的家族小酒藏，把比叡山僧人取名「浪乃音」的那一年，定為創業之年。",
   "order": [
    "about",
    "name",
    "craft",
    "place"
   ],
   "about": {
    "paras": [
     "浪乃音酒造位在滋賀縣大津市本堅田，琵琶湖西南岸。堅田正好在湖面收窄、把琵琶湖分成南北兩半的岸邊，自古是湖上交通的要地，近江八景之一「堅田落雁」也在附近。",
     "酒藏把比叡山的僧人替它取名「浪乃音」的文化 2 年（1805）定為創業年，在這片湖岸釀酒已超過兩百年。",
     "這是一間小酒藏，堅持小批量仕込，由第十代藏元中井孝與兩位兄弟一起釀酒。他們曾請來能登杜氏金井在吟釀上指導，招牌大吟釀「金井泰一流」便是承襲這段師承。",
     "第十一代中井充也以二十多歲的感性，推出新品牌「Te to Te（手と手）」，想把手工釀的酒從自己手中交到客人手中，常態用米是滋賀縣產的玉榮、渡船與吟吹雪。"
    ],
    "profile": [
     [
      "所在地",
      "滋賀縣大津市本堅田 1-7-16"
     ],
     [
      "創業",
      "文化 2 年（1805）"
     ],
     [
      "當主",
      "第十代藏元 中井孝；第十一代 中井充也"
     ],
     [
      "理念",
      "古壺新酒、和釀良酒；主題「くつろぎを呑む」"
     ],
     [
      "招牌",
      "大吟釀「金井泰一流」、純米大吟釀「古壺新酒」、Te to Te"
     ],
     [
      "銘柄",
      "浪乃音（なみのおと）"
     ]
    ]
   },
   "name": {
    "lead": "一位比叡山僧人取的名字。",
    "parts": [
     {
      "c": "浪乃音",
      "r": "なみのおと（naminooto），浪的聲音",
      "n": "據酒藏說法，由比叡山的僧人命名；酒藏把命名的 1805 年定為創業年。"
     },
     {
      "c": "Te to Te",
      "r": "てとて，手與手",
      "n": "第十一代推出的新品牌，意思是把手工釀的酒，從我們的手交到客人的手。"
     }
    ]
   },
   "place": [
    {
     "k": "湖",
     "t": "堅田位在琵琶湖分成南北兩湖的岸邊，因此發展成湖上交通的要地。"
    },
    {
     "k": "名勝",
     "t": "酒藏附近是近江八景之一「堅田落雁」的所在，也就是湖上浮御堂（滿月寺）一帶。"
    },
    {
     "k": "米",
     "t": "Te to Te 以滋賀縣產的玉榮、渡船、吟吹雪為常態用米；古壺新酒則全用稀有酒米愛山。"
    }
   ],
   "craft": {
    "title": "一家人的小仕込",
    "points": [
     [
      "小仕込",
      "酒藏小，堅持小批量，由家族一起釀造，奉行「和釀良酒」。"
     ],
     [
      "吟釀",
      "曾請能登杜氏金井指導吟釀，招牌大吟釀「金井泰一流」即以此命名。"
     ],
     [
      "新舊",
      "以「古壺新酒」為理念，第十一代把新技術與浪乃音的傳統做法結合，釀出 Te to Te。"
     ]
    ]
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Mangetsuji_Otsu_Shiga02n4500.jpg",
     "w": 4500,
     "t": "大津市本堅田的滿月寺浮御堂，伸入琵琶湖的佛堂，是近江八景「堅田落雁」之地",
     "by": "663highland",
     "lic": "CC BY 2.5",
     "licUrl": "https://creativecommons.org/licenses/by/2.5/",
     "page": "https://commons.wikimedia.org/wiki/File:Mangetsuji_Otsu_Shiga02n4500.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Mangetsu-ji%2C_Ukimid%C5%8D_at_Sunset_01.jpg",
     "w": 4000,
     "t": "黃昏時的浮御堂與琵琶湖，位在本堅田湖畔",
     "by": "Naokijp",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Mangetsu-ji,_Ukimid%C5%8D_at_Sunset_01.jpg"
    }
   ],
   "sources": [
    [
     "SAKETIME：浪乃音",
     "https://www.saketime.jp/brands/1368/"
    ],
    [
     "Gltjp：浪乃音酒造",
     "https://www.gltjp.com/ja/directory/item/14855/"
    ],
    [
     "財經新聞（新聞稿）：浪乃音酒造 メーカーズディナー",
     "https://www.zaikei.co.jp/releases/2155958/"
    ]
   ]
  },
  "nichinichi": {
   "tone": [
    "#f6f0e4",
    "#2a2420",
    "#9a8468",
    "#b0573c"
   ],
   "city": "京都市伏見區",
   "founded": "2021",
   "oneName": "日日釀造",
   "one": {
    "c": "酛",
    "t": "日日全部以生酛造釀成，只用米和水，靠京都的水與天然乳酸菌養出酒母；松本日出彥說，自己理想中的酒非生酛不可。"
   },
   "hook": "離開家傳酒藏後，他在五家酒藏輪流寄居釀酒，2021 年終於在故鄉伏見蓋起自己的酒藏。",
   "order": [
    "about",
    "craft",
    "timeline",
    "name",
    "place"
   ],
   "about": {
    "paras": [
     "日日釀造（日々醸造）是 2021 年成立的新酒藏，位在京都伏見，由一座原本存放煤炭的倉庫改建成社屋，旁邊再新建小型釀造場。代表兼釀酒人是松本日出彥。",
     "松本出身伏見的老酒藏松本酒造，2007 年 26 歲回到家業，兩年後 28 歲當上杜氏。2020 年他與擔任藏元的父親松本保博一起離開松本酒造。",
     "離開後，他受同業邀請，在滋賀冨田酒造、福岡白糸酒造、熊本花の香酒造、栃木せんきん、秋田新政酒造五家酒藏借場地釀酒，這段經歷被稱為「武者修業」。2021 年他成立日日釀造，2022 年推出品牌「日日」。",
     "日日只用米與水釀造，全量生酛、以原酒形式出貨，酒精度數比一般原酒低。米依產地分開釀，有自家田、秋津山田錦、龜之尾、玉榮、愛山等系列。名字取自禪語「日日是好日」。"
    ],
    "profile": [
     [
      "所在地",
      "京都府京都市伏見區城通町 628"
     ],
     [
      "創立",
      "2021 年"
     ],
     [
      "代表",
      "代表取締役 松本日出彥"
     ],
     [
      "水",
      "京都的水（官網說明）"
     ],
     [
      "招牌",
      "全量生酛、只用米與水、依產地分釀"
     ],
     [
      "銘柄",
      "日日（にちにち）、月日"
     ]
    ]
   },
   "timeline": [
    {
     "y": 2007,
     "e": "平成 19 年",
     "t": "松本日出彥 26 歲回到家業松本酒造",
     "approx": false
    },
    {
     "y": 2009,
     "e": "平成 21 年",
     "t": "28 歲當上松本酒造杜氏",
     "approx": true
    },
    {
     "y": 2020,
     "e": "令和 2 年",
     "t": "與父親一起離開松本酒造，之後在五家酒藏「武者修業」",
     "approx": false
    },
    {
     "y": 2021,
     "e": "令和 3 年",
     "t": "在伏見成立日日釀造",
     "approx": false
    },
    {
     "y": 2022,
     "e": "令和 4 年",
     "t": "5 月推出品牌「日日」",
     "approx": false
    }
   ],
   "name": {
    "lead": "每一天都是好日子。",
    "parts": [
     {
      "c": "日日",
      "r": "にちにち（nichinichi）",
      "n": "取自禪語「日日是好日」：可以理解為努力讓每天都成為好日子，也可以理解為不為一時好壞起伏，珍惜當下。"
     }
    ]
   },
   "place": [
    {
     "k": "伏見",
     "t": "松本日出彥的故鄉，也是京都的酒鄉；他離開家業後，最終回到伏見建藏。"
    },
    {
     "k": "藏",
     "t": "由存放煤炭的舊倉庫改建的社屋，加上新建的小型釀造場。"
    },
    {
     "k": "米",
     "t": "以山田錦為主，兵庫米田村與秋津地區的米分開釀；也有自家田與修業過的酒藏當地的米。"
    }
   ],
   "craft": {
    "title": "只有米和水",
    "points": [
     [
      "生酛",
      "全量生酛造，用天然乳酸菌慢慢育成酒母。"
     ],
     [
      "原料",
      "只用米與水，依米的產地分開釀造。"
     ],
     [
      "原酒",
      "以原酒出貨，但酒精度數約 11–12 度，比一般原酒低得多。"
     ],
     [
      "手工",
      "從洗米開始，幾乎所有步驟都靠手作業。"
     ]
    ],
    "quote": {
     "t": "我理想中的酒，非生酛不可。",
     "o": "自分の理想とする酒は、生酛じゃないと無理。",
     "who": "松本日出彥，日日釀造代表",
     "src": "NIHONMONO（2025）"
    }
   },
   "sources": [
    [
     "日々醸造官網",
     "https://sake.inc/"
    ],
    [
     "日々醸造官網：會社概要",
     "https://sake.inc/pages/company"
    ],
    [
     "NIHONMONO：日本酒の未来を拓く生酛を越えた生酛造り（2025）",
     "https://nihonmono.jp/article/52641/"
    ],
    [
     "SAPIENS TALK vol.01 松本日出彦（前編）（2022）",
     "https://club-sapiens.com/talk/694/"
    ],
    [
     "宇宙兄弟官網：【宇宙兄弟×日々醸造】限定月見酒「月日」製作秘話（2024）",
     "https://koyamachuya.com/contents/112945/"
    ],
    [
     "SAKETIME：日日",
     "https://www.saketime.jp/brands/6316/"
    ]
   ]
  },
  "nishiyoshida": {
   "tone": [
    "#f3ead6",
    "#3b2b1d",
    "#8b6f4e",
    "#b8862f"
   ],
   "city": "筑後市",
   "founded": "1893",
   "oneName": "西吉田酒造",
   "one": {
    "c": "麥",
    "t": "明治 26 年創業以來只做本格燒酎，招牌是 2001 年推出的麥燒酎「つくし」；店裡這瓶綠茶梅酒，基酒也是自家的本格燒酎。"
   },
   "hook": "筑後平原上一家做了一百三十年燒酎的老藏，用自家燒酎泡八女立花的梅子和八女茶，做成一瓶綠茶梅酒。",
   "order": [
    "about",
    "timeline",
    "name",
    "craft",
    "place"
   ],
   "about": {
    "paras": [
     "西吉田酒造在福岡縣南部的筑後市和泉，離 JR 羽犬塚站步行約 12 分鐘。明治 26 年（1893）1 月以「吉田燒酎製造所」創業，昭和 34 年（1959）改組為株式會社，才用上現在的名字。官網說，從創業起就「本格焼酎一筋」，一直只做本格燒酎。",
     "2001 年推出的麥燒酎「つくし」是這家的代表作，到 2026 年剛好 25 週年。名字裡放進了這一帶的古名「筑紫」，也取日文「つくす」（盡力）的意思，官網寫成「技をつくし、心をつくし。」現任社長吉田元彥是第七代，2014 年接手。",
     "燒酎之外，西吉田也用自家燒酎浸漬當地水果做利口酒。我們店裡的「綠茶梅酒」原料是本格燒酎、八女茶與梅子，官網說用的是地方名產「八女茶」和八女立花產的大顆梅子，第一口就有茶香。另一款「つくし梅酒 17 度」在 2025 年拿下全國梅酒品評會本格燒酎梅酒部門金賞。"
    ],
    "profile": [
     [
      "所在地",
      "福岡縣筑後市和泉 612"
     ],
     [
      "創業",
      "明治 26 年（1893），舊名吉田燒酎製造所"
     ],
     [
      "社長",
      "吉田元彥（第七代，2014 年就任）"
     ],
     [
      "水",
      "官網寫「筑後川の水の恵み」；酒造說明提到矢部川"
     ],
     [
      "招牌",
      "麥燒酎「つくし」（2001 年起）"
     ],
     [
      "銘柄",
      "つくし、釈云麦、初潮、呑鷹"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1893,
     "e": "明治 26 年",
     "t": "1 月以「吉田燒酎製造所」創業",
     "approx": false
    },
    {
     "y": 1959,
     "e": "昭和 34 年",
     "t": "改組為株式會社，更名西吉田酒造株式会社",
     "approx": false
    },
    {
     "y": 2001,
     "e": "平成 13 年",
     "t": "8 月推出麥燒酎「つくし」白、黑",
     "approx": false
    },
    {
     "y": 2005,
     "e": "平成 17 年",
     "t": "12 月推出「初潮」與「全麹つくし」",
     "approx": false
    },
    {
     "y": 2014,
     "e": "平成 26 年",
     "t": "第七代社長吉田元彥就任",
     "approx": false
    },
    {
     "y": 2025,
     "e": "令和 7 年",
     "t": "「つくし梅酒 17 度」獲全國梅酒品評會本格燒酎梅酒部門金賞；裸麥燒酎「初潮」獲 Kura Master 麥燒酎部門審查員賞",
     "approx": false
    }
   ],
   "name": {
    "lead": "招牌燒酎的名字，是一個雙關。",
    "parts": [
     {
      "c": "つくし",
      "r": "筑紫",
      "n": "九州北部的古名，酒藏所在的筑後一帶就屬於筑紫。"
     },
     {
      "c": "つくし",
      "r": "尽くし",
      "n": "日文「盡心盡力」。官網：「技をつくし、心をつくし。」——把技術與心意都用盡。"
     }
    ]
   },
   "place": [
    {
     "k": "地",
     "t": "筑後市位在福岡縣南部的筑後平原，酒藏在市內和泉，鄰近 JR 鹿兒島本線羽犬塚站。"
    },
    {
     "k": "水",
     "t": "首頁寫「筑後川の水の恵み」，酒造說明頁則提到流經這一帶的矢部川。"
    },
    {
     "k": "梅",
     "t": "梅酒用的梅子來自酒藏車程約 20 分鐘的八女市立花町山區，官網寫是減農藥栽培。"
    },
    {
     "k": "茶",
     "t": "綠茶梅酒加入的是福岡名產八女茶。"
    }
   ],
   "craft": {
    "title": "燒酎專門藏的底子",
    "points": [
     [
      "麥",
      "依自家標準挑選燒酎用麥：顆粒是否均一、澱粉含量、硬度。"
     ],
     [
      "熟成",
      "「つくし」白與黑都調入熟成 5 年以上的原酒，讓口感更柔和。"
     ],
     [
      "麴",
      "「つくし黑」用傳統黑麴釀造；「全麹つくし」則全部原料都做成麴。"
     ],
     [
      "梅酒",
      "以自家本格燒酎為基酒；綠茶梅酒加入八女茶與八女立花的梅子，酒精 12%。"
     ]
    ],
    "quote": {
     "t": "釀燒酎，就是在釀笑容。",
     "o": "焼酎造りは笑顔づくり。",
     "who": "西吉田酒造的信條",
     "src": "西吉田酒造官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/66/Yabegawa_River_from_bridge_of_Kagoshima_Main_Line.jpg",
     "w": 3264,
     "t": "從 JR 鹿兒島本線列車上望向矢部川上游，前方是九州新幹線橋梁（筑後地方）",
     "by": "そらみみ (Soramimi)",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Yabegawa_River_from_bridge_of_Kagoshima_Main_Line.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Hainuzuka_Station_20161102.jpg",
     "w": 4032,
     "t": "JR 羽犬塚站站舍，福岡縣筑後市；西吉田酒造在步行約 12 分鐘處",
     "by": "そらみみ",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Hainuzuka_Station_20161102.jpg"
    }
   ],
   "sources": [
    [
     "西吉田酒造官網",
     "https://nishiyoshida.jp/"
    ],
    [
     "西吉田酒造官網｜西吉田の酒造り（沿革）",
     "https://nishiyoshida.jp/craftsmanship/"
    ],
    [
     "西吉田酒造官網｜つくしの歴史",
     "https://nishiyoshida.jp/tsukushihistory/"
    ],
    [
     "西吉田酒造官網｜筑後・八女の果実で造ったお酒",
     "https://nishiyoshida.jp/product/product06/"
    ],
    [
     "福岡縣政府｜知事室：西吉田酒造來訪（2025-06）",
     "https://www.pref.fukuoka.lg.jp/site/chiji-top/nishiyoshida.html"
    ],
    [
     "クロスロードふくおか｜西吉田酒造",
     "https://www.crossroadfukuoka.jp/spot/10448"
    ]
   ]
  },
  "pares-balta": {
   "tone": [
    "#efe4cf",
    "#3a2a1c",
    "#8a6b4b",
    "#a8505a"
   ],
   "city": "帕克斯德爾佩內德斯（Pacs del Penedès）",
   "founded": "1790",
   "oneName": "巴塔酒莊",
   "one": {
    "c": "羊",
    "t": "酒莊自己養了一群羊，讓羊群替葡萄園施肥、養地，也自己養蜂幫忙授粉；以生物動力法耕作，不用農藥與除草劑。"
   },
   "hook": "1790 年種下第一批葡萄的莊園，如今由兩位嫁進來、後來去讀釀酒的媳婦掌釀，還有一群羊在園裡幫忙。",
   "order": [
    "about",
    "craft",
    "timeline",
    "place",
    "name"
   ],
   "about": {
    "paras": [
     "巴塔（Parés Baltà）在西班牙加泰隆尼亞的佩內德斯產區，莊園離地中海岸與巴塞隆納約 30 公里。官網寫明 1790 年，第一批葡萄就種在 Parés Baltà 莊園上，那些葡萄園至今仍圍繞著莊園主屋。",
     "現在經營的是 Cusiné 家族第三代 Joan 與 Josep 兄弟。兩人的妻子 María Elena Jiménez 與 Marta Casas 在 1990 年代初嫁進來，參與第一次採收後去塔拉戈納的大學讀釀酒，成為酒莊主釀；她們重新種回 Sumoll、Malvasia de Sitges 等快被遺忘的在地品種。2024 年，Marta Casas 獲 Tim Atkin MW 的加泰隆尼亞特別報告選為年度釀酒師。",
     "酒莊以生物動力法耕作，不用農藥與除草劑，只用天然資材養土；自己養羊替土地施肥，也養蜂授粉。各片葡萄園分布在海拔 170 到 800 公尺、離海 10 到 50 公里之間。",
     "我們賣的「進化系薰衣草」就是他們 R-Evolution 系列的 Espígol，加泰隆尼亞語「薰衣草」的意思；100% Malvasia de Sitges，種在 Alts d'Ancosa 的 Les Torres 園。"
    ],
    "profile": [
     [
      "所在地",
      "西班牙 加泰隆尼亞 佩內德斯 帕克斯德爾佩內德斯"
     ],
     [
      "創業",
      "1790 年種下第一批葡萄"
     ],
     [
      "經營",
      "Cusiné 家族第三代 Joan、Josep Cusiné"
     ],
     [
      "釀酒師",
      "Marta Casas、María Elena Jiménez"
     ],
     [
      "農法",
      "有機、生物動力法；自養羊群與蜜蜂"
     ],
     [
      "招牌",
      "Espígol、Electio、Hisenda Miret、Cuvée de Carol 等"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1790,
     "e": "",
     "t": "在 Parés Baltà 莊園種下第一批葡萄，至今仍圍繞莊園主屋。",
     "approx": false
    },
    {
     "y": 1910,
     "e": "",
     "t": "20 世紀初：在地下 10 公尺處一石一石砌出老 Cava 酒窖。",
     "approx": true
    },
    {
     "y": 1985,
     "e": "",
     "t": "1980 年代：Joan Cusiné Cusiné 接手酒莊，推出第一款白酒 Blanc de Pacs。",
     "approx": true
    },
    {
     "y": 1992,
     "e": "",
     "t": "1990 年代初：Joan 與 Josep 娶了 María Elena Jiménez 與 Marta Casas，兩人日後讀完釀酒成為主釀，復育在地品種。",
     "approx": true
    },
    {
     "y": 2012,
     "e": "",
     "t": "取得生物動力認證（官網首頁寫 2012 年）。",
     "approx": false
    },
    {
     "y": 2024,
     "e": "",
     "t": "Marta Casas 在 Tim Atkin MW 首份加泰隆尼亞特別報告中獲選年度釀酒師。",
     "approx": false
    }
   ],
   "name": {
    "lead": "莊園名和酒名，都跟土地有關。",
    "parts": [
     {
      "c": "Parés Baltà",
      "r": "巴塔",
      "n": "1790 年種下第一批葡萄的莊園名稱，酒莊就以莊園為名。"
     },
     {
      "c": "Espígol",
      "r": "進化系薰衣草",
      "n": "加泰隆尼亞語的「薰衣草」，屬於酒莊的 R-Evolution 系列。"
     },
     {
      "c": "Malvasia de Sitges",
      "r": "",
      "n": "來自鄰近海岸城市錫切斯（Sitges）與加拉夫（Garraf）一帶的在地瑪爾維西亞品種。"
     }
    ]
   },
   "place": [
    {
     "k": "海",
     "t": "莊園離地中海岸與巴塞隆納約 30 公里，各園離海 10 到 50 公里。"
    },
    {
     "k": "高",
     "t": "葡萄園海拔 170 到 800 公尺；Les Torres 園朝北，土層深、排水好，底下是三疊紀石灰岩與白雲岩，帶來清爽感。"
    },
    {
     "k": "土",
     "t": "La Torreta 園地表與地下都找得到海洋化石；Els Pujols 園多河卵石，多年不施氮肥。"
    }
   ],
   "craft": {
    "title": "生物動力法，少干預",
    "points": [
     [
      "羊群",
      "自家羊群在園裡吃草、施肥，替土地補充養分。"
     ],
     [
      "蜜蜂",
      "自己養蜂幫忙授粉，維持植物與動物的多樣性。"
     ],
     [
      "釀造",
      "Espígol 手工採收、輕柔壓榨，16°C 不鏽鋼槽發酵 17 天，不進橡木桶，帶細渣培養。"
     ]
    ],
    "quote": {
     "t": "這份肯定，是我和 Cusiné 家族與整個團隊共同努力的證明。",
     "o": "This recognition is a testament to the collective effort shared with the Cusiné family and our entire team",
     "who": "Marta Casas，Parés Baltà 釀酒師",
     "src": "Parés Baltà 官網新聞（2024）"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/63/Cal_Par%C3%A9s_Balt%C3%A0_%28Pacs_del_Pened%C3%A8s%29_i_Ca_l%27Esquell%C3%B3_%28Vilob%C3%AD_del_Pened%C3%A8s%29_-_P1150984.jpg",
     "w": 4320,
     "t": "遠眺 Cal Parés Baltà（帕克斯德爾佩內德斯）與鄰村 Ca l'Esquelló 一帶，酒廠建物被葡萄園包圍",
     "by": "Pere López Brosa",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Cal_Par%C3%A9s_Balt%C3%A0_(Pacs_del_Pened%C3%A8s)_i_Ca_l%27Esquell%C3%B3_(Vilob%C3%AD_del_Pened%C3%A8s)_-_P1150984.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sant_Gen%C3%ADs_de_Pacs%2C_del_Penedes%2C_Barcelona.jpg",
     "w": 4608,
     "t": "帕克斯德爾佩內德斯的聖赫尼斯教堂（Sant Genís de Pacs）",
     "by": "Angela Llop",
     "lic": "CC BY-SA 2.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Sant_Gen%C3%ADs_de_Pacs,_del_Penedes,_Barcelona.jpg"
    }
   ],
   "sources": [
    [
     "Parés Baltà 官網：Family winery 1790",
     "https://paresbalta.com/en/family-winery-1790/"
    ],
    [
     "Parés Baltà 官網首頁",
     "https://paresbalta.com/en/"
    ],
    [
     "Parés Baltà 官網：Origin & terroir",
     "https://paresbalta.com/en/origin-terroir/"
    ],
    [
     "Parés Baltà 官網：Espígol Malvasia de Sitges",
     "https://paresbalta.com/en/shop/organic-biodynamic-wine/revolution-vegan-friendly-wine/espigol-malvasia-de-sitges/"
    ],
    [
     "Parés Baltà 官網：Marta Casas 獲 Tim Atkin MW 年度釀酒師",
     "https://paresbalta.com/en/marta-casas-from-pares-balta-recognized-as-winemaker-of-the-year-by-tim-atkin-mw/"
    ],
    [
     "Noble Selection：Espígol 2023",
     "https://nobleselection.kork.ca/en/our-wineries/pares-balta/espigol/2023"
    ]
   ]
  },
  "sasanokawa": {
   "tone": [
    "#2a1d14",
    "#f7eedd",
    "#d8bf96",
    "#c08a3e"
   ],
   "dark": true,
   "city": "郡山市",
   "founded": "1765",
   "oneName": "笹之川酒造",
   "one": {
    "c": "風",
    "t": "酒藏自稱「風的酒藏」：冬天從磐梯山越過豬苗代湖吹到郡山盆地的乾冷「磐梯颪」，既是清酒也是安積蒸溜所威士忌熟成時不可少的條件。"
   },
   "hook": "一間 1765 年起在郡山釀清酒的酒藏，戰後拿到威士忌執照，還曾替關門的羽生蒸餾所保管原酒桶。",
   "order": [
    "about",
    "timeline",
    "craft",
    "place",
    "name"
   ],
   "about": {
    "paras": [
     "笹之川酒造在福島縣郡山市笹川，郡山車站南方約 4 公里。官網沿革記載，寶永 7 年（1710）豬苗代湖南岸舟津的山口家已有酒札紀錄，寬保 2 年（1742）遷到郡山村，明和 2 年（1765）開始釀酒與販售。現任社長山口哲藏是初代朝之丞宗友之後的第十代，杜氏是山口敏子。",
     "戰後米糧短缺，清酒難釀，加上西洋文化湧入，旗下的山櫻酒造在昭和 21 年（1946）取得威士忌製造執照。1980 年代，笹之川的「Cherry Whisky」和東亞酒造、Mars 並稱各據一方的地威士忌。",
     "之後威士忌進入冷淡期，熟成桶被擱在藏的深處。2003 年東亞酒造結束營業，羽生蒸餾所的原酒桶輾轉交由笹之川保管，後來成為 Venture Whisky「Ichiro's Malt」的起點之一。2014 年，藏裡沉睡多年的原酒以「YAMAZAKURA」之名重新上市。",
     "2016 年冬，酒藏把從創業地遷來的傳統土藏改成「安積蒸溜所」，3 月開始蒸餾，2019 年推出首支「安積 the First」。蒸餾所所在的安積平野，靠明治時期開鑿的安積疏水才得以開墾；當主的曾祖父，正是當年出資的「開成社」二十五人之一。"
    ],
    "profile": [
     [
      "所在地",
      "福島縣郡山市笹川 1 丁目 178"
     ],
     [
      "創業",
      "明和 2 年（1765）；寶永 7 年（1710）已有山口家酒札紀錄"
     ],
     [
      "當主",
      "山口哲藏（代表取締役，第十代）"
     ],
     [
      "杜氏",
      "山口敏子"
     ],
     [
      "風土",
      "磐梯颪（冬季乾冷北風）、安積疏水灌溉的安積平野"
     ],
     [
      "銘柄",
      "笹の川、山櫻；威士忌 YAMAZAKURA、安積（安積蒸溜所）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1765,
     "e": "明和 2 年",
     "t": "在郡山開始釀酒與販售",
     "approx": false
    },
    {
     "y": 1932,
     "e": "昭和 7 年",
     "t": "設立山櫻酒造合資會社",
     "approx": false
    },
    {
     "y": 1946,
     "e": "昭和 21 年",
     "t": "取得威士忌製造執照",
     "approx": false
    },
    {
     "y": 1998,
     "e": "平成 10 年",
     "t": "山櫻酒造與笹之川酒造合併，以笹之川酒造為存續公司",
     "approx": false
    },
    {
     "y": 2014,
     "e": "平成 26 年",
     "t": "藏內熟成多年的原酒以「YAMAZAKURA」之名發售",
     "approx": false
    },
    {
     "y": 2016,
     "e": "平成 28 年",
     "t": "安積蒸溜所 3 月開始蒸餾",
     "approx": false
    },
    {
     "y": 2019,
     "e": "令和元年",
     "t": "木製發酵槽完工，推出「安積 the First」",
     "approx": false
    }
   ],
   "name": {
    "lead": "兩個名字，一個是清酒，一個是威士忌。",
    "parts": [
     {
      "c": "笹の川",
      "r": "ささのかわ",
      "n": "官網說，日本酒古時被稱為「酒々（ささ）」；也期許酒藏像竹葉（笹）一樣柔韌，再強的風也吹不倒。"
     },
     {
      "c": "山桜",
      "r": "やまざくら",
      "n": "來自 1932 年設立的「山櫻酒造合資會社」，1998 年併入笹之川酒造；威士忌品牌 YAMAZAKURA 沿用此名。"
     }
    ]
   },
   "place": [
    {
     "k": "風",
     "t": "冬天從磐梯山越過豬苗代湖、吹到郡山盆地的乾冷寒風「磐梯颪」，酒藏認為它是釀酒與威士忌熟成不可少的條件。"
    },
    {
     "k": "水路",
     "t": "安積疏水從豬苗代湖鑿隧道引水到安積原野，1879 年以國家事業動工，荷蘭技師 van Doorn 監修；2016 年登錄日本遺產。"
    },
    {
     "k": "米",
     "t": "清酒堅持使用福島縣產米。"
    }
   ],
   "craft": {
    "title": "清酒藏裡的威士忌",
    "points": [
     [
      "執照",
      "1940 年合成清酒、1946 年威士忌、1948 年燒酎、1960 年琴酒與利口酒，一間藏拿齊多種執照。"
     ],
     [
      "保管",
      "2003 年接手保管羽生蒸餾所的原酒桶，後來交由 Venture Whisky 接續。"
     ],
     [
      "蒸溜所",
      "安積蒸溜所設在從創業地移築的白漆喰土藏裡，有罐式蒸餾器與糖化槽，2019 年加入木製發酵槽。"
     ],
     [
      "熟成",
      "酒藏形容威士忌在昏暗的藏裡隨冷暖縮放，等待被喚醒的時候；風帶來的個性就是安積的個性。"
     ]
    ],
    "quote": {
     "t": "我們或許看不到，但這是為了未來的子孫。",
     "o": "我々は見る事はないかもしれないが未来の子孫のために",
     "who": "開成社（明治 11 年在貯水池堤岸植櫻時所言，笹之川當主曾祖父為創社 25 人之一）",
     "src": "笹の川酒造官網・安積蒸溜所 Story"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/0b/%E7%AC%B9%E3%81%AE%E5%B7%9D%E9%85%92%E9%80%A0%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E6%9C%AC%E7%A4%BE.JPG",
     "w": 5184,
     "t": "郡山市笹川的笹之川酒造本社",
     "by": "藍原あおい",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:笹の川酒造株式会社本社.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Mt.Bandai_13.jpg",
     "w": 6000,
     "t": "磐梯山，冬季寒風「磐梯颪」的來處",
     "by": "Σ64",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Mt.Bandai_13.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/5b/AsakaSosuiKansenSuiroB.JPG",
     "w": 3072,
     "t": "安積疏水第一分水路取水口（2007）",
     "by": "BehBeh at Japanese Wikipedia",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:AsakaSosuiKansenSuiroB.JPG"
    }
   ],
   "sources": [
    [
     "笹の川酒造官網：会社概要・沿革",
     "https://www.sasanokawa.co.jp/contents/company.html"
    ],
    [
     "笹の川酒造官網：笹の川 Story（風の酒蔵、名字由來）",
     "https://www.sasanokawa.co.jp/sasanokawa-shuzo/contents/story.html"
    ],
    [
     "笹の川酒造官網：安積蒸溜所 Story（風の蒸留所、安積疏水）",
     "https://www.sasanokawa.co.jp/asaka-distillery/contents/story.html"
    ]
   ]
  },
  "sekiya": {
   "tone": [
    "#f4ead8",
    "#2e2018",
    "#7a5a3e",
    "#a8452f"
   ],
   "city": "設樂町",
   "founded": "1864",
   "oneName": "關谷釀造",
   "one": {
    "c": "和",
    "t": "公司的座右銘是「和釀良酒」——人和才釀得出好酒；官網把它寫成「人の和によって造られる美酒」，我們賣的「蓬萊泉 和」系列也用了這個字。"
   },
   "hook": "奧三河山間的百年酒藏，官網直說自家藏裡「沒有傳統酒藏的風情」：把粗重活交給機器，把人手留給需要細看的地方。",
   "order": [
    "about",
    "craft",
    "timeline",
    "place"
   ],
   "about": {
    "paras": [
     "關谷釀造位在愛知縣東北角、奧三河山間的北設樂郡設樂町田口，元治元年（1864）創業，代表銘柄是「蓬萊泉」。昭和 5 年（1930）改組為合資會社，平成 11 年（1999）成為株式會社，現任社長是第七代關谷健。",
     "官網的企業介紹很不浪漫：藏內積極導入機械，「沒有傳統酒藏的風情」。他們把費力的工序合理化，把人手留給需要細心照看的步驟，並累積細密的數據回饋給下一季釀造。2004 年在豐田市稻武地區（舊稻武町）開設「ほうらいせん吟醸工房」，可參觀、也能體驗釀酒與訂製自己的酒。",
     "2005 年起，關谷釀造在 6 反（60 公畝）田裡種自家參與開發的酒米「夢山水」，之後陸續接手因高齡化而離農的田地，2007 年起連育苗、乾燥都自己做，2019 年耕作面積達 27 公頃；愛知縣的介紹寫目前約 34.5 公頃。",
     "近年他們也和台灣合作：2023 年起，台灣日本酒進口商「本事選酒」發起「台日共生」系列，請關谷釀造把台灣茶浸入自家的梅酒與柚子酒——先後有新竹峨眉徐耀良茶園的東方美人茶、新竹茶行烹雪韻的雲南巴達山大樹生普洱，以及台北乘興院的包種茶。"
    ],
    "profile": [
     [
      "所在地",
      "愛知縣北設樂郡設樂町田口字町浦 22（本社藏）；豐田市黑田町（吟醸工房）"
     ],
     [
      "創業",
      "元治元年（1864）"
     ],
     [
      "當主",
      "代表取締役 關谷健（第七代）"
     ],
     [
      "杜氏",
      "宮瀬直也"
     ],
     [
      "水",
      "設樂町山間的水（官網未指名水源）"
     ],
     [
      "招牌",
      "蓬萊泉；自家田種植酒米夢山水；茶系梅酒與柚子酒"
     ],
     [
      "銘柄",
      "蓬萊泉"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1864,
     "e": "元治元年",
     "t": "於設樂町田口創業",
     "approx": false
    },
    {
     "y": 1930,
     "e": "昭和 5 年",
     "t": "12 月改組為關谷釀造合資會社",
     "approx": false
    },
    {
     "y": 1999,
     "e": "平成 11 年",
     "t": "6 月改組為關谷釀造株式會社",
     "approx": false
    },
    {
     "y": 2004,
     "e": "平成 16 年",
     "t": "吟醸工房（稻武工場）開幕，開放參觀與釀酒體驗",
     "approx": false
    },
    {
     "y": 2005,
     "e": "平成 17 年",
     "t": "在 6 反田開始自種酒米「夢山水」",
     "approx": false
    },
    {
     "y": 2019,
     "e": "令和元年",
     "t": "自營稻田擴大到 27 公頃",
     "approx": false
    },
    {
     "y": 2023,
     "e": "令和 5 年",
     "t": "與台灣本事選酒合作推出「蓬萊泉 徐耀良 東方美人茶梅酒」，首批 700 支",
     "approx": false
    }
   ],
   "place": [
    {
     "k": "地",
     "t": "設樂町位於愛知縣東北部的奧三河山區，本社藏在田口地區。"
    },
    {
     "k": "水",
     "t": "官網與愛知縣介紹都說，設樂町豐富的自然所孕育的水是他們釀酒的原點。"
    },
    {
     "k": "田",
     "t": "在設樂町接手離農的稻田與休耕地，由社員自己種米。"
    },
    {
     "k": "梅",
     "t": "梅酒使用新城市鳳來地區的青梅。"
    }
   ],
   "craft": {
    "title": "機器做粗活，人手做細活",
    "points": [
     [
      "機械化",
      "積極導入機械、合理化費力工序，把人手留給需要細看的作業，並累積數據回饋下一季。"
     ],
     [
      "自家精米",
      "官網說多數酒藏委外精米，關谷釀造則自己精米。"
     ],
     [
      "甑蒸",
      "蒸米用傳統的甑（こしき），追求外硬內軟的蒸米。"
     ],
     [
      "自種米",
      "自家參與開發的酒米「夢山水」，加上千代錦、峰遙等品種，從育苗開始自己種。"
     ],
     [
      "台灣茶",
      "東方美人茶、生普洱各自浸入自家梅酒；包種茶則浸入以米燒酎為基底的柚子酒三天，反覆試驗茶與酒的比例和浸泡時間。"
     ]
    ],
    "quote": {
     "t": "我們的酒藏積極導入機械，沒有傳統酒藏的風情。",
     "o": "当社の酒蔵は積極的な機械の導入で、伝統的な蔵の風情はありません。",
     "who": "關谷釀造，官網企業介紹",
     "src": "關谷釀造官網・會社概要"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sekiya_Brewerly_ac_%281%29.jpg",
     "w": 6016,
     "t": "愛知縣北設樂郡設樂町的關谷釀造（2017 年）",
     "by": "Asturio Cantabrio",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Sekiya_Brewerly_ac_(1).jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Sekiya_jouzou001.JPG",
     "w": 4608,
     "t": "關谷釀造本店（設樂町田口，2015 年）",
     "by": "Opqr",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Sekiya_jouzou001.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Sekiya_jouzou002.JPG",
     "w": 4608,
     "t": "關谷釀造的酒藏（2015 年）",
     "by": "Opqr",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Sekiya_jouzou002.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/4/48/Houraisen_Ginjo-Kobo%2C_Kuroda-cho_Toyota_2019.jpg",
     "w": 1500,
     "t": "ほうらいせん吟醸工房（豐田市黑田町，2019 年 8 月）",
     "by": "Tomio344456",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Houraisen_Ginjo-Kobo,_Kuroda-cho_Toyota_2019.jpg"
    }
   ],
   "sources": [
    [
     "關谷釀造官網・會社概要",
     "https://www.houraisen.co.jp/ja/company-information.html"
    ],
    [
     "關谷釀造官網・農業への取り組み",
     "https://www.houraisen.co.jp/ja/agriculture.html"
    ],
    [
     "關谷釀造官網・酒造りの説明",
     "https://www.houraisen.co.jp/ja/sake-brewing.html"
    ],
    [
     "愛知縣・奥三河の仕事：關谷釀造",
     "https://www.pref.aichi.jp/shinshiroshitara/okumikawa/works/sekiya.html"
    ],
    [
     "Aichi Now：「和譲良酒」に込められた蔵人たちの想い",
     "https://aichinow.pref.aichi.jp/stories/detail/102"
    ],
    [
     "Tatler Asia：台日首度合作茶梅酒（2023-11-24）",
     "https://www.tatlerasia.com/dining/drinks/aikanpai-umeshu-taiwan-tea-zh-hant"
    ],
    [
     "美麗佳人：蓬萊泉徐耀良 東方美人茶梅酒",
     "https://www.marieclaire.com.tw/lifestyle/taste/76212"
    ],
    [
     "美麗佳人：蓬萊泉烹雪韻 生普洱茶梅酒",
     "https://www.marieclaire.com.tw/lifestyle/taste/88747"
    ],
    [
     "鏡週刊：蓬萊泉乘興院包種茶柚子酒（2026-08-25）",
     "https://www.mirrormedia.mg/story/20260825wine001"
    ]
   ]
  },
  "shiota": {
   "tone": [
    "#f7efe2",
    "#2e2219",
    "#8b6b52",
    "#c0563f"
   ],
   "city": "薩摩川內市里町",
   "founded": "",
   "oneName": "塩田酒造",
   "one": {
    "c": "一",
    "t": "鹿兒島有上百家燒酎藏，塩田酒造只釀一個銘柄「六代目百合」，自稱「一藏一銘柄」：「ひとつの銘柄に全てをかける」。"
   },
   "hook": "從串木野港搭渡輪約一小時，東海上的甑島有一間從江戶天保年間傳下來的燒酎藏，只釀一個名字：六代目百合。",
   "order": [
    "about",
    "name",
    "craft",
    "place"
   ],
   "about": {
    "paras": [
     "塩田酒造在鹿兒島縣薩摩川內市里町，位於甑島列島北端的上甑島，離薩摩半島約 40 公里，從串木野港搭渡輪約一小時。舊地名是薩摩郡里村。",
     "酒藏創業於江戶時代的天保年間（1830–1844），現任當主塩田將史是第六代。酒藏奉行「一藏一銘柄」：除了每年秋天的新燒酎和一年一次的無過濾原酒「風に吹かれて」，釀的全都是同一個名字「六代目百合」。",
     "原料芋用島上農家種的「白さつま」，不是鹿兒島最常見的黃金千貫；麴是黑麴，由藏人一粒一粒用手揉。自初代起就用常壓蒸餾，原酒不用機器過濾，熟成期間每天用法蘭絨布撈掉浮在桶面的油分，直到出貨。",
     "「六代目百合」這個名字疊了三層意思：甑島特產的鹿之子百合、以一斗樽為單位釀造的「百合（ひゃくごう）」，以及現任社長是第六代。"
    ],
    "profile": [
     [
      "所在地",
      "鹿兒島縣薩摩川內市里町里（上甑島）"
     ],
     [
      "創業",
      "江戶時代天保年間（1830–1844）"
     ],
     [
      "當主",
      "六代目 塩田將史"
     ],
     [
      "原料",
      "島產白さつま芋、國產米黑麴"
     ],
     [
      "招牌",
      "一藏一銘柄、常壓蒸餾、不機器過濾"
     ],
     [
      "銘柄",
      "六代目百合（另有新燒酎、原酒「風に吹かれて」）"
     ]
    ]
   },
   "name": {
    "lead": "一個銘柄，疊了三層意思。",
    "parts": [
     {
      "c": "六代目",
      "r": "ろくだいめ",
      "n": "現任社長塩田將史是第六代。"
     },
     {
      "c": "百合",
      "r": "ゆり",
      "n": "甑島特產的鹿之子百合（カノコユリ），也畫在酒標上。"
     },
     {
      "c": "百合",
      "r": "ひゃくごう",
      "n": "一斗樽一桶的量；酒藏過去以一斗樽一桶為單位釀造。"
     }
    ]
   },
   "place": [
    {
     "k": "島",
     "t": "甑島列島在薩摩半島西側的東海上，塩田酒造位於北端的上甑島里町，從串木野港搭渡輪約一小時。"
    },
    {
     "k": "芋",
     "t": "原料是島上農家種的「白さつま」，塩田將史說在島上用它比黃金千貫更能釀出好酒；九月中旬起陸續進藏。"
    },
    {
     "k": "花",
     "t": "鹿之子百合是甑島的特產花，也是酒名與酒標的由來之一。"
    }
   ],
   "craft": {
    "title": "一藏一銘柄",
    "points": [
     [
      "麴",
      "黑麴，小批量，由藏人一粒一粒用手揉"
     ],
     [
      "芋",
      "島產白さつま，仔細挑選處理"
     ],
     [
      "蒸餾",
      "自初代起採常壓蒸餾"
     ],
     [
      "濾",
      "不用機器過濾；熟成中每天用法蘭絨布撈掉桶面油分，直到出貨"
     ],
     [
      "熟成",
      "出貨時機由藏人依酒況判斷"
     ]
    ],
    "quote": {
     "t": "最重要的是手。不是藏人一粒一粒用手揉、讓麴菌開花的麴，就釀不出好喝的酒。",
     "o": "大切なのは手、蔵人が一粒ずつ手でもんで花咲かせた麹じゃないとウマいものは出来ません。",
     "who": "塩田將史，塩田酒造六代目",
     "src": "hyotan.co.jp「甑島の芋焼酎『六代目百合』」"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kamikoshiki_Island_Suguchi_Pond_and_Sato_Village_2013-08.JPG",
     "w": 6016,
     "t": "上甑島：前景須口池，中央東海，遠處是塩田酒造所在的里聚落",
     "by": "At by At",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Kamikoshiki_Island_Suguchi_Pond_and_Sato_Village_2013-08.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/38/Kamikoshiki_Island_Sato_Stone_Walls_2013-08.JPG",
     "w": 6016,
     "t": "上甑島里地區的玉石垣（圓石牆）",
     "by": "At by At",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Kamikoshiki_Island_Sato_Stone_Walls_2013-08.JPG"
    }
   ],
   "sources": [
    [
     "hyotan.co.jp：甑島の芋焼酎「六代目百合」と原酒「風に吹かれて」",
     "https://www.hyotan.co.jp/cnt/shochu/yuri.html"
    ],
    [
     "谷本屋：塩田酒造株式会社",
     "https://www.tanimotoya.com/shochu/maker/shiota.html"
    ],
    [
     "ふるなび：六代目百合（製造者 塩田酒造株式会社，薩摩川內市里町里1604）",
     "https://furunavi.jp/product_detail.aspx?pid=879209"
    ]
   ]
  },
  "suehiro": {
   "tone": [
    "#3a1f1a",
    "#f6ecdc",
    "#d6b897",
    "#b8863b"
   ],
   "dark": true,
   "city": "會津若松市",
   "founded": "1850",
   "oneName": "末廣酒造",
   "one": {
    "c": "研",
    "t": "大正年間，會津酒造組合請來的技師輪流住進末廣的藏裡做試驗：速釀酛的江田鎌治郎、山廢酛的嘉儀金一郎，都在這裡試釀、比較過酒母、水與米。"
   },
   "hook": "培理來航前三年開業的會津酒藏，後來成了現代酒母技術的試驗場，野口英世回國時也來這裡坐過。",
   "order": [
    "about",
    "timeline",
    "craft",
    "place"
   ],
   "about": {
    "paras": [
     "嘉永 3 年（1850），會津藩御用酒藏新城家的次男包裕自本家獨立，以「初代猪之吉」之名開始釀酒，那是培理來到浦賀的三年前。幕末的戊辰戰爭燒掉了嘉永藏，明治 2 年（1869）才重新開釀。",
     "第三代猪之吉把事業擴大到漆器、計量用的升，並在本宮、三春、東京神田與日本橋、郡山開設分店；明治 18 年（1885）和 36 年（1903）先後從山形大山和丹波請來杜氏，在當時的會津算是很新的做法。",
     "第四代重吉長年擔任全國清酒品評會審查員。他把會津酒造組合招聘的技術者接進自家藏裡研修與試釀：江田鎌治郎在這裡試驗酒母連釀法，嘉儀金一郎在大正 6 年（1917）於此比較山廢、速釀、生酛三種酒母，並讓各藏帶水來比較，前後指導了三年。",
     "昭和 28 年（1953）改組為末廣酒造株式會社。平成 8 年（1996）在博士山伏流水流經的會津高田町（今會津美里町）蓋了博士藏，主要釀造移到那裡；明治到大正年間建成的嘉永藏則在 2018 年登錄為國家有形文化財，至今開放參觀。"
    ],
    "profile": [
     [
      "所在地",
      "嘉永藏：福島縣會津若松市日新町 12-38；博士藏：福島縣大沼郡會津美里町字宮里 81"
     ],
     [
      "創業",
      "嘉永 3 年（1850）"
     ],
     [
      "當主",
      "新城猪之吉（代表取締役會長，第七代）；新城大輝（代表取締役社長）"
     ],
     [
      "水",
      "會津的水；博士藏位在博士山伏流水流經之地"
     ],
     [
      "招牌",
      "大正年間的山廢酛試驗之藏；1982 年分離出自家酵母「T-1」"
     ],
     [
      "銘柄",
      "末廣"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1850,
     "e": "嘉永 3 年",
     "t": "新城家次男包裕獨立，以初代猪之吉之名創業",
     "approx": false
    },
    {
     "y": 1869,
     "e": "明治 2 年",
     "t": "戊辰戰爭中燒毀的嘉永藏重新開始釀酒",
     "approx": false
    },
    {
     "y": 1892,
     "e": "明治 25 年",
     "t": "新藏落成（今「喫茶杏」），是現存最古老的建物",
     "approx": false
    },
    {
     "y": 1915,
     "e": "大正 4 年",
     "t": "野口英世自美國返國，造訪嘉永藏",
     "approx": false
    },
    {
     "y": 1917,
     "e": "大正 6 年",
     "t": "嘉儀金一郎在藏內比較山廢、速釀、生酛酒母，指導至 1920 年",
     "approx": false
    },
    {
     "y": 1996,
     "e": "平成 8 年",
     "t": "會津高田町的博士藏落成，同年開始外銷歐美",
     "approx": false
    },
    {
     "y": 2018,
     "e": "平成 30 年",
     "t": "嘉永藏登錄為國家有形文化財",
     "approx": false
    }
   ],
   "place": [
    {
     "k": "城下",
     "t": "嘉永藏位在會津若松市日新町，前身是會津藩御用酒藏新城家的分家。"
    },
    {
     "k": "山",
     "t": "1996 年的新藏蓋在博士山伏流水流經的會津高田町，取名博士藏。"
    },
    {
     "k": "人",
     "t": "野口英世的恩師小林榮，其姊嫁給第三代猪之吉；英世的弟弟清三也在藏裡工作過，兩家以親戚往來。"
    }
   ],
   "craft": {
    "title": "會津酒的試驗室",
    "points": [
     [
      "杜氏",
      "明治時期就從山形大山、丹波請來職業杜氏，取代家族自釀。"
     ],
     [
      "精米",
      "明治 41 年（1908）率先引進 Engelberg 精米機，自家精米。"
     ],
     [
      "酒母",
      "江田鎌治郎（速釀酛）與嘉儀金一郎（山廢酛）都在此做過試驗；嘉儀也在這裡比較了會津高野村改良的酒米「旭龜之尾」。"
     ],
     [
      "酵母",
      "1982 年發現並分離自家酵母「T-1」。"
     ]
    ],
    "quote": {
     "t": "即便如此，對於願意「記錄下來」的前人們，我們仍想表達敬意。",
     "o": "それでも「記す」ことを行った先代達には敬意を表したい。",
     "who": "末廣酒造官網〈History〉專欄",
     "src": "末廣酒造官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/e/e8/%E6%9C%AB%E5%BB%A3%E9%85%92%E9%80%A0_2020.jpg",
     "w": 6016,
     "t": "末廣酒造嘉永藏外觀（會津若松市日新町，2020）",
     "by": "皓月旗",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:末廣酒造_2020.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/4/4e/%E6%9C%AB%E5%BB%A3%E9%85%92%E9%80%A0_2020_P2.jpg",
     "w": 5661,
     "t": "末廣酒造嘉永藏（會津若松市日新町，2020）",
     "by": "皓月旗",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:末廣酒造_2020_P2.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f3/%E6%9C%AB%E5%BB%A3%E9%85%92%E9%80%A0_2020_P3.jpg",
     "w": 6016,
     "t": "末廣酒造嘉永藏（2020）",
     "by": "皓月旗",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:末廣酒造_2020_P3.jpg"
    }
   ],
   "sources": [
    [
     "末廣酒造官網：History",
     "https://sake-suehiro.co.jp/history/"
    ],
    [
     "末廣酒造官網：About（代表者、所在地）",
     "https://sake-suehiro.co.jp/about"
    ],
    [
     "Japan Travel by NAVITIME：Suehiro Sake Brewery Kaeigura",
     "https://www.gltjp.com/ja/directory/item/12443/"
    ]
   ]
  },
  "tabali": {
   "tone": [
    "#f1e2c8",
    "#3a2418",
    "#7d5a3c",
    "#b0592f"
   ],
   "city": "奧瓦耶（Ovalle）",
   "founded": "2002",
   "oneName": "塔巴利",
   "one": {
    "c": "刻",
    "t": "塔巴利的面具標誌，取自酒莊旁「魔法谷」（Valle del Encanto）岩石上的古老刻紋；酒莊也負責照顧這處緊鄰葡萄園的考古遺址。"
   },
   "hook": "在阿他加馬沙漠邊緣的河谷裡，酒標上的面具是一千多年前刻在岩石上的。",
   "order": [
    "about",
    "place",
    "timeline",
    "craft",
    "name"
   ],
   "about": {
    "paras": [
     "塔巴利（Viña Tabalí）位在智利北部利馬里谷，靠近奧瓦耶（Ovalle）。1990 年代，企業家 Guillermo Luksic 買下 Hacienda Santa Rosa de Tabalí 莊園——他的母親在奧瓦耶念過書，他小時候常來這一帶。莊園緊鄰國家古蹟「魔法谷」（Valle del Encanto），1993 年種下第一批葡萄，2002 年推出第一批酒，2004 年在利馬里河旁的山谷裡蓋了現代化酒廠，是利馬里谷第一座。",
     "魔法谷是利馬里河的支流峽谷，岩石上有岩畫與刻紋，多半歸於西元 2 到 7 世紀的 El Molle 文化。塔巴利負責照管這處緊鄰葡萄園的遺址，酒標上的面具就取自其中一個刻紋。",
     "2006 年加入的 Felipe Müller 現任執行長兼總釀酒師，2014 年獲選智利年度青年釀酒師，酒莊也在 2020 年獲 Descorchados 評為年度酒莊。2009 年他們買下距太平洋僅 12 公里、幾乎純石灰岩土壤的 Talinay 葡萄園；Guillermo Luksic 2013 年過世後，由兒子 Nicolás Luksic 擔任董事長。",
     "利馬里谷太涼，卡本內蘇維濃熟不透，所以塔巴利 2014 年在邁坡谷買下 DOM 葡萄園，種在南向的海岸丘陵上；我們賣的這支卡本內蘇維濃就來自邁坡谷。"
    ],
    "profile": [
     [
      "所在地",
      "智利第四區科金博，利馬里谷奧瓦耶附近，緊鄰魔法谷國家古蹟"
     ],
     [
      "創業",
      "2002 年（第一批酒）；1993 年首批葡萄種植，2004 年蓋酒廠"
     ],
     [
      "創辦人",
      "Guillermo Luksic（2013 年過世）"
     ],
     [
      "董事長",
      "Nicolás Luksic"
     ],
     [
      "釀酒師",
      "Felipe Müller（執行長兼總釀酒師，2006 年加入）"
     ],
     [
      "葡萄園",
      "Tabalí、Talinay、Espinal（利馬里）、Río Hurtado 山區、DOM（邁坡）"
     ],
     [
      "招牌",
      "Talinay 夏多內與黑皮諾、Pedregoso 系列"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1993,
     "e": "",
     "t": "在 Hacienda Santa Rosa de Tabalí 種下第一批葡萄",
     "approx": false
    },
    {
     "y": 2002,
     "e": "",
     "t": "推出第一批塔巴利葡萄酒",
     "approx": false
    },
    {
     "y": 2004,
     "e": "",
     "t": "在利馬里河旁的山谷蓋起酒廠，利馬里谷第一座現代化酒廠",
     "approx": false
    },
    {
     "y": 2009,
     "e": "",
     "t": "買下距海 12 公里的石灰岩 Talinay 葡萄園",
     "approx": false
    },
    {
     "y": 2014,
     "e": "",
     "t": "買下邁坡谷 DOM 葡萄園，專種卡本內蘇維濃",
     "approx": false
    },
    {
     "y": 2017,
     "e": "",
     "t": "與香檳酒廠 Thiénot 合資釀造氣泡酒，2019 年推出 TATIÉ",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒款名大多直接寫出地質：",
    "parts": [
     {
      "c": "Tabalí",
      "r": "塔巴利",
      "n": "來自莊園舊名 Hacienda Santa Rosa de Tabalí"
     },
     {
      "c": "Talinay",
      "r": "塔里奈",
      "n": "海岸丘陵 Altos de Talinay，葡萄園就在山下的小谷地"
     },
     {
      "c": "Pedregoso",
      "r": "西班牙文「多石的」",
      "n": "指葡萄園滿是石頭的土壤"
     }
    ]
   },
   "place": [
    {
     "k": "谷",
     "t": "魔法谷是利馬里河的支流峽谷，有 El Molle 文化（約西元 2–7 世紀）的岩畫與刻紋，和葡萄園相鄰。"
    },
    {
     "k": "霧",
     "t": "Talinay 葡萄園離太平洋約 12 公里，早上常有海岸霧（camanchaca），夏天最高溫約 23.5°C，是谷裡最涼的葡萄園。"
    },
    {
     "k": "石",
     "t": "利馬里谷多是河流沖積的砂礫土，Talinay 卻幾乎是純石灰岩，在智利很少見。"
    },
    {
     "k": "沙漠",
     "t": "利馬里谷在阿他加馬沙漠南緣，鄰近 Fray Jorge 國家公園（聯合國教科文組織生物圈保護區）。"
    }
   ],
   "craft": {
    "title": "跟著地質走",
    "points": [
     [
      "選地",
      "2009 年規劃 Espinal 葡萄園時，參考衛星照片與地質研究選址。"
     ],
     [
      "分品種",
      "利馬里谷太涼，卡本內蘇維濃熟不透，改種在邁坡谷 DOM 葡萄園；Talinay 專注夏多內與黑皮諾。"
     ],
     [
      "山區",
      "2010 年在 Río Hurtado 山區買下部分 Hacienda El Bosque 舊莊園；安地斯山側的 Roca Madre 園位在海拔約 1,600 公尺、火山岩與玄武岩坡地。"
     ]
    ],
    "quote": {
     "t": "我們的品牌，現在全都在講產地和地質。",
     "o": "Our brand is now all about place and geology.",
     "who": "Felipe Müller，塔巴利執行長兼總釀酒師",
     "src": "WineAlign（2017）"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Petroglifo_del_Valle_del_Encanto.JPG",
     "w": 3240,
     "t": "奧瓦耶附近魔法谷（Valle del Encanto）的岩刻，塔巴利的面具標誌就取自這裡的刻紋",
     "by": "GemaNicole",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Petroglifo_del_Valle_del_Encanto.JPG"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Valle_del_Encanto_07.jpg",
     "w": 2048,
     "t": "魔法谷（Valle del Encanto）岩石上的刻紋，位在奧瓦耶附近的利馬里省",
     "by": "Bachelot Pierre J-P",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Valle_del_Encanto_07.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/24/Tacita_Ovalle.jpg",
     "w": 2560,
     "t": "魔法谷的「杯狀石」（piedras tacitas），岩面上鑿出的圓形凹槽",
     "by": "Aampuero",
     "lic": "Public domain",
     "licUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Tacita_Ovalle.jpg"
    }
   ],
   "sources": [
    [
     "Tabalí 官網：Our History",
     "https://tabali.com/en/our-history/"
    ],
    [
     "Tabalí 官網",
     "https://tabali.com/en/"
    ],
    [
     "WineAlign：Tabalí of Limarí – A Winery Profile（2017）",
     "https://www.winealign.com/articles/2017/07/10/tabali-of-limari-a-winery-profile"
    ],
    [
     "Bound by Wine：Viña Tabalí",
     "https://boundbywine.com/blogs/vineyard-spotlight/vina-tabali"
    ],
    [
     "Lonely Planet：Monumento Arqueológico Valle del Encanto",
     "https://www.lonelyplanet.com/pois/1164407"
    ]
   ]
  },
  "terras-gauda": {
   "tone": [
    "#2e1a17",
    "#f5eadb",
    "#d6b48c",
    "#b5523b"
   ],
   "dark": true,
   "city": "O Rosal（蓬特韋德拉省）",
   "founded": "1989",
   "oneName": "高達大地酒莊",
   "one": {
    "c": "復",
    "t": "Terras Gauda 致力復育下海灣快被遺忘的原生白葡萄 Caíño Blanco；進口商資料指出，下海灣約 98% 的 Caíño Blanco 都種在這個家族的園裡。"
   },
   "hook": "從米尼奧河口一座白酒酒莊起家，如今在里奧哈，用一位飛行先驅的名字和他的機庫釀紅酒。",
   "order": [
    "about",
    "name",
    "timeline",
    "place",
    "craft"
   ],
   "about": {
    "paras": [
     "高達大地（Terras Gauda）1989 年由 José María Fonseca 帶領的加利西亞企業家創立，位在西班牙西北角下海灣（Rías Baixas）產區的 O Rosal 河谷，就在米尼奧河（Miño）出海口旁、與葡萄牙隔河相望。1990 年第一次採收，只裝了 37,000 瓶。",
     "這家以白酒聞名：以 Albariño 為主，混入 Loureiro 與 Caíño Blanco 等原生品種，並復育幾乎消失的 Caíño Blanco。現在由創辦人之子 Antón Fonseca 帶領，把事業擴成一個集團。",
     "2002 年集團取得比埃索（Bierzo）Arganza 的 Pittacum 酒廠，專釀 Mencía 紅酒；2018 年進軍里奧哈，在 Alfaro 買下前身為 Egomei 的酒廠，改名 Heraclio Alfaro。我們賣的「酒神」與「飛機」兩款紅酒，就分別來自這兩家。",
     "「飛機」的名字有來由：Heraclio Alfaro 是 20 世紀初西班牙的航空先驅，酒廠蓋在他從前的飛機機庫原址，旁邊是 El Estarijo 莊園與舊跑道。"
    ],
    "profile": [
     [
      "所在地",
      "西班牙 加利西亞 蓬特韋德拉省 O Rosal（DO Rías Baixas）"
     ],
     [
      "創業",
      "1989 年（首次採收 1990 年）"
     ],
     [
      "創辦人",
      "José María Fonseca；現由 Antón Fonseca 帶領"
     ],
     [
      "招牌",
      "Albariño、Loureiro、Caíño Blanco 混釀白酒"
     ],
     [
      "集團酒廠",
      "Pittacum（比埃索，2002 年加入）、Quinta Sardonia（斗羅河）、Heraclio Alfaro（里奧哈，2018 年）"
     ],
     [
      "我們的酒",
      "飛機＝Heraclio Alfaro（里奧哈）；酒神＝Pittacum（比埃索 Mencía）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1989,
     "e": "",
     "t": "José María Fonseca 等加利西亞企業家在 O Rosal 河谷創立 Terras Gauda，開始復育 Caíño Blanco。",
     "approx": false
    },
    {
     "y": 1990,
     "e": "",
     "t": "第一次採收，產量 37,000 瓶。",
     "approx": false
    },
    {
     "y": 2002,
     "e": "",
     "t": "取得比埃索 Arganza 的 Pittacum 酒廠（1998 年創立），釀 Mencía 紅酒。",
     "approx": false
    },
    {
     "y": 2018,
     "e": "",
     "t": "進軍里奧哈，在 Alfaro 取得前身 Egomei 的酒廠，推出以航空先驅為名的 Heraclio Alfaro。",
     "approx": false
    }
   ],
   "name": {
    "lead": "我們賣的兩款紅酒，名字都有故事。",
    "parts": [
     {
      "c": "Heraclio Alfaro",
      "r": "飛機",
      "n": "20 世紀初設計並駕駛飛機的西班牙航空先驅 Heraclio Alfaro Fournier；酒廠就蓋在他從前的機庫原址。"
     },
     {
      "c": "Pittacum",
      "r": "酒神",
      "n": "酒廠在 Arganza 興建時挖出一件古羅馬人用作計量單位的器物（有說是錐形雙耳陶罐），便以它的名字 pittacum 命名。"
     }
    ]
   },
   "place": [
    {
     "k": "河",
     "t": "Terras Gauda 在米尼奧河出海口附近，靠近大西洋，與葡萄牙隔河相望。"
    },
    {
     "k": "機",
     "t": "Heraclio Alfaro 酒廠位在里奧哈東部的 Alfaro，蓋在昔日飛機機庫原址，旁邊是 El Estarijo 莊園與舊跑道。"
    },
    {
     "k": "谷",
     "t": "Pittacum 在比埃索的 Arganza，以 Mencía 老藤為主，參觀行程包括 19 世紀的老宅 La Casona。"
    }
   ],
   "craft": {
    "title": "從白酒起家，紅酒交給各地酒廠",
    "points": [
     [
      "白酒",
      "Terras Gauda 本家以 Albariño 混 Loureiro、Caíño Blanco 等原生品種為招牌。"
     ],
     [
      "飛機",
      "Heraclio Alfaro 的 Finca Estarijo 以 40 年以上老藤 Graciano 為骨架，混 Garnacha、Tempranillo、Mazuelo，25°C 發酵 20 天，在 700 公升大木槽與橡木桶陳 16 個月（零售商技術資料）。"
     ],
     [
      "酒神",
      "Pittacum 的 Mencía 紅酒先放血（saignée），在槽中靜置一個月，再進 220 公升法國與美國橡木桶陳 8 個月，裝瓶後再休養約兩年（舊年份技術表）。"
     ]
    ]
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/4/41/O_Rosal%2C_Pontevedra%2C_Spain_-_panoramio_%283%29.jpg",
     "w": 3888,
     "t": "O Rosal 山上的小禮拜堂，遠望河谷與群山；Terras Gauda 就在這個鎮",
     "by": "Lucas Martínez Farra…（Panoramio 使用者名稱）",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:O_Rosal,_Pontevedra,_Spain_-_panoramio_(3).jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/0f/O_Rosal%2C_Pontevedra%2C_Spain_-_panoramio.jpg",
     "w": 3888,
     "t": "O Rosal 山間的溪流與岩石，加利西亞濕潤的綠色山景",
     "by": "Lucas Martínez Farra…（Panoramio 使用者名稱）",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:O_Rosal,_Pontevedra,_Spain_-_panoramio.jpg"
    }
   ],
   "sources": [
    [
     "TFE Wines（美國進口商）：Terras Gauda",
     "https://www.tfewines.com/brands/terras-gauda/"
    ],
    [
     "Brands of Spain：Terras Gauda",
     "https://brandsofspain.com/miembro/terras-gauda/"
    ],
    [
     "Turismo Castilla y León：Bodegas Pittacum",
     "https://www.turismocastillayleon.com/en/enotourism-gastronomy/visitable-wineries/bodegas-pittacum"
    ],
    [
     "Aporvino：Heraclio Alfaro Finca Estarijo",
     "https://www.aporvino.com/en/buy-wine-doca-rioja/12582-terras-gauda/heraclio-alfaro-finca-estarijo-2016.html"
    ],
    [
     "NueveCuatroUno：Terras Gauda estrena marca Heraclio Alfaro（2018）",
     "https://nuevecuatrouno.com/2018/11/21/terras-gauda-estrena-marca-vino-bodega-rioja-heraclio-alfaro/"
    ],
    [
     "Alimarket：Terras Gauda lanza su primer Rioja tras comprar Egomei",
     "https://www.alimarket.es/alimentacion/noticia_amp/288594/terras-gauda-lanza-su-primer-rioja-tras-comprar-egomei"
    ],
    [
     "Vinetur：Pittacum 2009 技術表",
     "https://www.vinetur.com/documentos/article/14771/pittacum_2009.pdf"
    ],
    [
     "Enterwine：Pittacum 酒廠",
     "https://www.enterwine.com/en/world-of-wine/wineries/pittacum"
    ]
   ]
  },
  "tokachi": {
   "tone": [
    "#3a1e1f",
    "#f6ecdf",
    "#d8b9a0",
    "#b0464a"
   ],
   "dark": true,
   "city": "池田町",
   "founded": "1963",
   "oneName": "池田町葡萄・葡萄酒研究所",
   "one": {
    "c": "町",
    "t": "釀酒的不是家族酒藏，而是池田町公所本身：1963 年取得果實酒試驗製造執照，成為日本第一個由地方自治體經營的酒廠，至今代表人仍是池田町町長。"
   },
   "hook": "一場地震加上連年冷害，讓十勝平原上的小鎮決定自己種葡萄、自己釀酒——日本第一間「町營」酒廠就這樣開張。",
   "order": [
    "about",
    "timeline",
    "craft",
    "name",
    "place"
   ],
   "about": {
    "paras": [
     "池田町葡萄・葡萄酒研究所位在北海道十勝地方的池田町，對外品牌叫「十勝ワイン」（十勝葡萄酒）。它不是民間酒藏，而是由池田町公所以地方公營企業形式經營，官網的代表人一欄寫的就是町長。",
     "故事起點是 1952 年的十勝沖地震，以及之後連續兩年的冷害，讓以農業為主的池田町大受打擊。當時的町長丸谷金保主張：冬天再冷，這裡也應該種得出葡萄，於是町裡的農村青年在 1960 年組成葡萄愛好會，從零開始試種。",
     "1963 年 6 月，池田町取得果實酒類試驗製造執照，成為日本國內第一個自己釀酒的地方自治體。研究所起初研究當地野生的山葡萄，後來把耐寒品種一棵棵篩選出來，以圃場地名命名為「清見」。",
     "1974 年，研究所的新建築落成，外型像中世紀歐洲古城，從此被稱為「ワイン城」（葡萄酒城），地下熟成室裡放著法國橡木桶。除了葡萄酒，這裡也有白蘭地蒸餾室；我們店裡的白蘭地梅酒，就是用北海道產青梅加白蘭地仕込、在木桶中熟成的品項，原本是酒城賣店的人氣商品。"
    ],
    "profile": [
     [
      "所在地",
      "北海道中川郡池田町清見 83 番地"
     ],
     [
      "創業",
      "1963 年（昭和 38 年）取得果實酒類試驗製造執照"
     ],
     [
      "經營",
      "池田町（地方公營企業），代表人為池田町町長"
     ],
     [
      "招牌",
      "十勝ワイン「清見」「山幸」「トカップ」、十勝白蘭地"
     ],
     [
      "建築",
      "1974 年落成的「ワイン城」，地下設熟成室"
     ],
     [
      "執照",
      "果實酒、甘味果實酒、白蘭地、利口酒、烈酒等"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1952,
     "e": "昭和 27 年",
     "t": "十勝沖地震，其後連續兩年冷害，池田町農業重創",
     "approx": false
    },
    {
     "y": 1960,
     "e": "昭和 35 年",
     "t": "在町長丸谷金保推動下，町內農村青年組成葡萄愛好會，開始試種葡萄",
     "approx": false
    },
    {
     "y": 1963,
     "e": "昭和 38 年",
     "t": "取得果實酒類試驗製造執照，成為日本第一個自治體經營的酒廠",
     "approx": false
    },
    {
     "y": 1966,
     "e": "昭和 41 年",
     "t": "十勝葡萄酒與十勝白蘭地開始販售",
     "approx": false
    },
    {
     "y": 1974,
     "e": "昭和 49 年",
     "t": "古城外觀的研究所建築「ワイン城」落成",
     "approx": false
    },
    {
     "y": 2025,
     "e": "令和 7 年",
     "t": "以自家選育品種釀造的「清見」迎來販售 50 週年",
     "approx": false
    }
   ],
   "name": {
    "lead": "名字其實就是一份公家機關的名稱。",
    "parts": [
     {
      "c": "池田町",
      "r": "いけだちょう",
      "n": "經營者本身：北海道十勝地方的池田町"
     },
     {
      "c": "ブドウ・ブドウ酒研究所",
      "r": "ぶどう・ぶどうしゅけんきゅうじょ",
      "n": "「葡萄與葡萄酒研究所」，因為一開始的任務就是研究能在寒地種活的葡萄"
     },
     {
      "c": "清見",
      "r": "きよみ",
      "n": "研究所選育的耐寒葡萄品種，以圃場所在的地名命名，也是酒城的地址"
     }
    ]
   },
   "place": [
    {
     "k": "地",
     "t": "池田町位在十勝平原東部。官網直言十勝原本並不適合種葡萄，所以這裡的工作從開發寒地栽培法與耐寒品種開始。"
    },
    {
     "k": "城",
     "t": "ワイン城建在可俯瞰町區的山丘上，從 JR 池田站月台就看得到；地下熟成室存放法國橡木桶與老年份酒。"
    },
    {
     "k": "葡萄",
     "t": "早期用當地野生山葡萄（被鑑定為 amurensis 系）釀酒，原料不穩定，後來改良出耐寒的「清見」、「山幸」等品種。"
    }
   ],
   "craft": {
    "title": "公務員釀的辛口與熟成",
    "points": [
     [
      "經營",
      "由町公所職員從葡萄栽培、釀造做到販售，屬地方公營企業"
     ],
     [
      "品種",
      "從法國系 Seibel 品種中篩選耐寒枝條，育成「清見」"
     ],
     [
      "風格",
      "官網表示十勝ワイン一貫堅持辛口路線，並重視熟成"
     ],
     [
      "白蘭地",
      "研究所內設白蘭地蒸餾室，持有白蘭地與利口酒製造執照"
     ]
    ],
    "quote": {
     "t": "為了拯救町的財政危機，町公所的職員釀出了世界頂尖的葡萄酒——這就是十勝葡萄酒的起點。",
     "o": "町の財政危機を救うために町役場の職員が世界でトップクラスのワインを造った。それが十勝ワインの始まりの物語。",
     "who": "十勝ワイン（池田町葡萄・葡萄酒研究所）",
     "src": "十勝ワイン官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/02/Wine_castle_of_Ikeda-Town.jpg",
     "w": 3456,
     "t": "從 JR 池田站月台望向山丘上的ワイン城（池田町葡萄・葡萄酒研究所）",
     "by": "Chatama",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Wine_castle_of_Ikeda-Town.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Wine_Castle_in_Ikeda%2C_Hokkaido_01.jpg",
     "w": 4032,
     "t": "池田町葡萄・葡萄酒研究所（ワイン城）建築外觀",
     "by": "ノボホショコロトソ",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Wine_Castle_in_Ikeda,_Hokkaido_01.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/74/Ikeda%2C_Hokkaido_viewed_from_Wine_Castle_01.jpg",
     "w": 4032,
     "t": "從ワイン城俯瞰北海道池田町",
     "by": "ノボホショコロトソ",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Ikeda,_Hokkaido_viewed_from_Wine_Castle_01.jpg"
    }
   ],
   "sources": [
    [
     "十勝ワイン官網：企業紹介",
     "https://www.tokachi-wine.com/kigyo/"
    ],
    [
     "十勝ワイン官網：十勝ワインについて",
     "https://www.tokachi-wine.com/about/"
    ],
    [
     "ふるさとチョイス（池田町）：清見 50 周年 十勝ワイン特集",
     "https://www.furusato-tax.jp/feature/detail/01644/890"
    ],
    [
     "ふるさとチョイス（池田町）：梅酒 ブランデー仕込み",
     "https://www.furusato-tax.jp/product/detail/01644/6674740/32"
    ],
    [
     "Wikipedia：池田町ブドウ・ブドウ酒研究所",
     "https://ja.wikipedia.org/wiki/%E6%B1%A0%E7%94%B0%E7%94%BA%E3%83%96%E3%83%89%E3%82%A6%E3%83%BB%E3%83%96%E3%83%89%E3%82%A6%E9%85%92%E7%A0%94%E7%A9%B6%E6%89%80"
    ],
    [
     "北海道公式観光サイト：池田町ブドウ・ブドウ酒研究所",
     "https://www.visit-hokkaido.jp/spot/detail_10463.html"
    ]
   ]
  },
  "toso": {
   "tone": [
    "#f4ead2",
    "#3b2b1d",
    "#8c6d45",
    "#d0a24c"
   ],
   "city": "科薩諾貝爾博（Cossano Belbo）",
   "founded": "1910",
   "oneName": "多索酒莊",
   "one": {
    "c": "遷",
    "t": "1910 年，創辦人 Vincenzo Toso 聽聞麝香葡萄和它的氣泡酒，把酒廠從種巴貝拉（Barbera）的山丘，搬到麝香葡萄遍地的貝爾博河谷；1993 年再定居科薩諾貝爾博，一家人跟著葡萄搬家。"
   },
   "hook": "一百多年前，Vincenzo Toso 為了麝香葡萄搬家；如今第四代把這份微甜氣泡，做成每年約 2,800 萬瓶。",
   "order": [
    "about",
    "timeline",
    "place",
    "craft"
   ],
   "about": {
    "paras": [
     "多索（Toso）是義大利皮埃蒙特的家族酒廠，總部在庫內奧省的科薩諾貝爾博（Cossano Belbo），位於朗格與蒙費拉托丘陵之間的貝爾博河谷。官網把家族故事的起點定在 1910 年。",
     "那一年，Vincenzo Toso 聽說了麝香葡萄（Moscato）和它釀成的氣泡酒，便把酒廠從以巴貝拉為主的山丘，搬到麝香葡萄當家的山丘。之後由兒子 Pietro、孫子 Luigi 與 Vincenzo 接手，麝香葡萄微甜氣泡酒 Moscato d'Asti 與 Asti Spumante 也慢慢成為主角。",
     "1993 年，酒廠搬到現在的科薩諾貝爾博定居。現在由第四代的 Pietro、Gianfranco 兄弟和堂兄弟 Massimo 經營；2023 年的報導指出，酒廠年產約 2,800 萬瓶，約 65% 外銷，旗下還有 Gamondi（香艾酒）、Fiocco di Vite 等品牌。",
     "酒廠裡設有一座 Toso 釀酒博物館（Museo Enologico Toso），收藏過去的釀酒器具。官網說這不是懷舊，而是想讓人知道從哪裡來，才知道往哪裡去。"
    ],
    "profile": [
     [
      "所在地",
      "義大利 皮埃蒙特大區 庫內奧省 科薩諾貝爾博（Via Statale 3）"
     ],
     [
      "創業",
      "1910 年，Vincenzo Toso"
     ],
     [
      "經營",
      "第四代 Pietro、Gianfranco Toso 兄弟與堂兄弟 Massimo Toso"
     ],
     [
      "規模",
      "年產約 2,800 萬瓶，約 65% 外銷（2023 年報導）"
     ],
     [
      "風土",
      "朗格與蒙費拉托之間的貝爾博河谷丘陵，氣候涼爽溫和"
     ],
     [
      "招牌",
      "Moscato d'Asti、Asti Spumante 等麝香葡萄氣泡酒"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1910,
     "e": "",
     "t": "Vincenzo Toso 為了麝香葡萄，把酒廠從巴貝拉產區搬到麝香葡萄產區的山丘。",
     "approx": false
    },
    {
     "y": 1950,
     "e": "",
     "t": "由兒子 Pietro 接手，之後再傳給孫子 Luigi 與 Vincenzo；Moscato d'Asti 與 Asti Spumante 成為主力。",
     "approx": true
    },
    {
     "y": 1993,
     "e": "",
     "t": "酒廠定居現址科薩諾貝爾博，更新設備。",
     "approx": false
    },
    {
     "y": 2023,
     "e": "",
     "t": "第四代經營下，年產約 2,800 萬瓶、約 65% 外銷，並投資數位化釀造與裝瓶設備。",
     "approx": false
    }
   ],
   "place": [
    {
     "k": "谷",
     "t": "科薩諾貝爾博在貝爾博河谷，夾在朗格（Langhe）與蒙費拉托（Monferrato）丘陵之間。"
    },
    {
     "k": "葡",
     "t": "這一帶山丘以麝香葡萄（Moscato）為主；Vincenzo Toso 正是為了這種葡萄而搬來。"
    },
    {
     "k": "候",
     "t": "官網認為涼爽溫和的丘陵氣候與原生品種，造就了酒的香氣與個性。"
    }
   ],
   "craft": {
    "title": "百年家族，現代酒廠",
    "points": [
     [
      "品種",
      "以麝香葡萄為核心，釀 Moscato d'Asti、Asti Spumante 等微甜、低酒精的氣泡酒。"
     ],
     [
      "溫控",
      "發酵溫度由電子感測器監控，需要時自動啟動冷卻或熱泵。"
     ],
     [
      "穩定",
      "以切向過濾與物理方式做酒石穩定，避免瓶中產生沉澱。"
     ],
     [
      "博物館",
      "酒廠內的 Toso 釀酒博物館收藏昔日的釀酒器具，平日開放參觀。"
     ]
    ],
    "quote": {
     "t": "這套技術幫我們避開過去常犯的那些錯誤，就算當時是出於好意。",
     "o": "questa tecnologia ci aiuta a evitare tutti quegli errori che si facevano, anche in buona fede, un tempo",
     "who": "Gianfranco Toso，執行董事（第四代）",
     "src": "Sky TG24（2023 年 6 月）"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/20/Cossano_Belbo.jpg",
     "w": 4000,
     "t": "冬日的科薩諾貝爾博（Cossano Belbo），TOSO 酒廠所在的小鎮，四周是種滿葡萄的丘陵",
     "by": "Andrea Marchisio",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Cossano_Belbo.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/b/be/Aerial_view_of_Santo_Stefano_Belbo.jpg",
     "w": 3648,
     "t": "高空俯瞰聖斯特凡諾貝爾博，與科薩諾貝爾博同在貝爾博河谷的麝香葡萄產區",
     "by": "Olivier Cleynen",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Santo_Stefano_Belbo.jpg"
    }
   ],
   "sources": [
    [
     "TOSO 官網：Le radici",
     "https://toso.it/le-radici/"
    ],
    [
     "TOSO 官網：Museo Enologico Toso",
     "https://toso.it/museo-enologico-toso/"
    ],
    [
     "Sky TG24：Grazie alla tecnologia miglioriamo la qualità di vini e spumanti（2023）",
     "https://tg24.sky.it/tecnologia/now/2023/06/08/vino-spumanti-tecnologia-cantine-toso"
    ],
    [
     "Kysela Père et Fils：Toso Winery",
     "https://kysela.com/toso-winery.html"
    ],
    [
     "Italia a Tavola / WineMag：Toso, passione enologica da 4 generazioni",
     "https://www.italiaatavola.net/stampe_art/Art80425-winemag-toso-passione-enologica-da-4-generazioni-80425-23-03-24-17-48-52.pdf"
    ]
   ]
  },
  "tsutsumi": {
   "tone": [
    "#f6eed8",
    "#33251a",
    "#8a6a48",
    "#c9973a"
   ],
   "city": "あさぎり町",
   "founded": "1878",
   "oneName": "堤酒造",
   "one": {
    "c": "熟",
    "t": "官網把「時間」稱為看不見的原料：同一間藏裡，酒分別放進木樽、陶甕，或直接在瓶中慢慢熟成。"
   },
   "hook": "明治十一年（1878）開在球磨盆地的「犬童釀造場」，2002 年改名堤酒造；這家球磨燒酎藏也用八代特產的晚白柚做水果酒。",
   "order": [
    "about",
    "craft",
    "timeline",
    "place",
    "name"
   ],
   "about": {
    "paras": [
     "堤酒造位在熊本縣南部的球磨郡あさぎり町，球磨川流經的球磨盆地。這一帶是「球磨燒酎」的產地，官網說這種米燒酎的傳統已超過 500 年，產地名稱並受到 WTO 的地理標示保護。",
     "酒藏的起點是明治十一年（1878）由犬童馬鞍開設的「犬童釀造場」。2001 年改組為株式會社犬童酒造，隔年改名為現在的株式會社堤酒造，現任社長是堤和弘。",
     "官網說，釀酒用水取自被稱為「日本第一清流」的球磨川水系地下水；技術由杜氏一代傳給下一代。熟成方式不只一種：木樽、陶器的甕、瓶內熟成都有，有些原酒已在藏裡靜靜放了幾十年。",
     "除了球磨燒酎，堤酒造也做利口酒與琴酒。我們店裡的晚白柚酒就是官網「利口酒」類的「晩白柚のお酒」（8 度、720ml）；晚白柚是熊本八代地方特產，金氏世界紀錄認證的最重柑橘。"
    ],
    "profile": [
     [
      "所在地",
      "熊本縣球磨郡あさぎり町岡原南"
     ],
     [
      "創業",
      "明治十一年（1878），前身為犬童釀造場"
     ],
     [
      "社長",
      "堤和弘（代表取締役社長）"
     ],
     [
      "水",
      "球磨川水系地下水"
     ],
     [
      "招牌",
      "球磨燒酎（米燒酎）；樽、甕、瓶內多種熟成"
     ],
     [
      "銘柄",
      "吟球磨、奥球磨櫻、蔵八、OKA GIN 三、晩白柚のお酒"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1878,
     "e": "明治 11 年",
     "t": "犬童馬鞍創立「犬童釀造場」",
     "approx": false
    },
    {
     "y": 2001,
     "e": "平成 13 年",
     "t": "改組為株式會社犬童酒造",
     "approx": false
    },
    {
     "y": 2002,
     "e": "平成 14 年",
     "t": "更名為株式會社堤酒造",
     "approx": false
    },
    {
     "y": 2021,
     "e": "令和 3 年",
     "t": "「晩白柚のお酒」（8 度 720ml）見於日本通路上架，發售日標示為 2021 年 12 月",
     "approx": true
    },
    {
     "y": 2024,
     "e": "令和 6 年",
     "t": "熊本日日新聞報導：琴酒「OKA GIN 三」在舊金山世界烈酒競賽約 450 款琴酒中拿下最高賞",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒造名與招牌銘柄裡的字，多半直接指向這片土地。",
    "parts": [
     {
      "c": "堤",
      "r": "つつみ",
      "n": "2002 年由犬童酒造改名為堤酒造；現任社長姓堤（堤和弘）。"
     },
     {
      "c": "球磨",
      "r": "くま",
      "n": "球磨川與球磨盆地；「吟球磨」「奥球磨櫻」都以產地為名。"
     },
     {
      "c": "晩白柚",
      "r": "ばんぺいゆ",
      "n": "柚類（ザボン）的一種，熊本八代地方特產，金氏紀錄認證最重的柑橘果實。"
     }
    ]
   },
   "place": [
    {
     "k": "水",
     "t": "釀造用水取自球磨川水系的地下水，官網稱球磨川為「日本第一清流」。"
    },
    {
     "k": "盆地",
     "t": "球磨地區冬季寒冷、日夜溫差大，河水豐沛，官網說這樣的環境適合種米，酒藏挑選在地米釀造。"
    },
    {
     "k": "果",
     "t": "晚白柚是熊本縣八代地方的特產柑橘，堤酒造以它做成 8 度的水果利口酒。"
    }
   ],
   "craft": {
    "title": "時間是看不見的原料",
    "points": [
     [
      "水",
      "球磨川水系地下水"
     ],
     [
      "技",
      "杜氏代代相傳的手法，由杜氏與藏人釀造"
     ],
     [
      "熟成",
      "木樽、陶甕、瓶內熟成並用，部分原酒已存放數十年"
     ],
     [
      "新品",
      "除燒酎外，也做琴酒、清酒基底苦艾酒、水果利口酒"
     ]
    ],
    "quote": {
     "t": "傳承舊的，認識新的。",
     "o": "古きを継承する。新しきを知る。",
     "who": "堤酒造",
     "src": "堤酒造官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/75/%E7%99%BE%E5%A4%AA%E9%83%8E%E6%BA%9D_Hyakutarou_Waterway_-_panoramio.jpg",
     "w": 1280,
     "t": "球磨盆地的百太郎溝灌溉水路（あさぎり町一帶）",
     "by": "shunsaku hara (r265)",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E7%99%BE%E5%A4%AA%E9%83%8E%E6%BA%9D_Hyakutarou_Waterway_-_panoramio.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/23/%E7%90%83%E7%A3%A8%E5%B7%9D%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%89%E3%81%A8%E5%B7%9D%E7%80%AC%E6%A9%8B_Cycling_Road_and_Kawase_Bridge_-_panoramio.jpg",
     "w": 3000,
     "t": "あさぎり町的球磨川自行車道與川瀨橋（全景長幅）",
     "by": "shunsaku hara (r265)",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E7%90%83%E7%A3%A8%E5%B7%9D%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%89%E3%81%A8%E5%B7%9D%E7%80%AC%E6%A9%8B_Cycling_Road_and_Kawase_Bridge_-_panoramio.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/16/%E5%A4%A9%E5%AD%90%E3%81%AE%E6%B0%B4%E5%85%AC%E5%9C%92%E3%81%AE%E6%B9%A7%E6%B0%B4_Tenshi_no_mizu_park%2C_Spring_Water_-_panoramio.jpg",
     "w": 960,
     "t": "あさぎり町天子之水公園的湧泉",
     "by": "shunsaku hara (r265)",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E5%AD%90%E3%81%AE%E6%B0%B4%E5%85%AC%E5%9C%92%E3%81%AE%E6%B9%A7%E6%B0%B4_Tenshi_no_mizu_park%2C_Spring_Water_-_panoramio.jpg"
    }
   ],
   "sources": [
    [
     "堤酒造官網：會社情報",
     "https://tsutsumi-syuzou.com/company/"
    ],
    [
     "堤酒造官網：堤酒造介紹",
     "https://tsutsumi-syuzou.com/about/"
    ],
    [
     "堤酒造官網：こだわりの製法",
     "https://tsutsumi-syuzou.com/method/"
    ],
    [
     "堤酒造官網：リキュール・スピリッツ",
     "https://tsutsumi-syuzou.com/product/liqueur/"
    ],
    [
     "Wikipedia（日文）：堤酒造",
     "https://ja.wikipedia.org/wiki/%E5%A0%A4%E9%85%92%E9%80%A0"
    ],
    [
     "熊本日日新聞（2024-12-25）OKA GIN 三 獲 SFWSC 最高賞",
     "https://kumanichi.com/articles/1642549"
    ],
    [
     "Yodobashi：堤酒造商品一覽（晩白柚のお酒 8度 720ml）",
     "https://www.yodobashi.com/maker/5000004354/"
    ]
   ]
  },
  "vina-casa-silva": {
   "tone": [
    "#3a2116",
    "#f7eedf",
    "#d9bd96",
    "#c0612f"
   ],
   "dark": true,
   "city": "聖費爾南多（San Fernando）",
   "founded": "1997",
   "oneName": "凱撒西瓦",
   "one": {
    "c": "根",
    "t": "家族的根在 1887 年從波爾多來到智利的 Emilio Bouchon；他在 Angostura 莊園種下的葡萄，部分是約 1912 年的老藤，到今天仍在釀酒。"
   },
   "hook": "曾祖從波爾多聖愛美濃來到智利，一百多年後，他種下的老藤還在空加瓜結果。",
   "order": [
    "about",
    "timeline",
    "name",
    "craft",
    "place"
   ],
   "about": {
    "paras": [
     "1887 年，22 歲的 Emilio Bouchon Poitvin 從波爾多聖愛美濃一帶來到智利，先在聖地牙哥一座酒莊當釀酒兼栽培師。20 世紀初，他和孩子們在空加瓜谷聖費爾南多附近的 Angostura 莊園種葡萄、蓋酒窖，開始自己的葡萄酒事業。官網照片說明稱這裡的葡萄園約種於 1912 年，是空加瓜最老的葡萄園之一。",
     "1968 年，Bouchon 家的 María Teresa Silva Bouchon 嫁給 Mario Silva Cifuentes。1978 年前後，Mario Silva 開始整理老葡萄園與 Bouchon 家的舊酒窖，成為重要的散裝酒供應商，1980 年起全心經營莊園。",
     "1996 年底，長子 Mario Pablo Silva 提議用「Casa Silva」品牌自己裝瓶；父親答應，條件是他要回家族事業。1997 年 4 月 Viña Casa Silva 正式成立，弟弟 Gonzalo（農務）與 Francisco（公關）也陸續加入。現在由 Mario Silva 任董事長、Mario Pablo Silva 任執行長，釀酒團隊由 Juan Francisco Calderón 領軍。",
     "家族葡萄園分布在靠安地斯山的 Los Lingues、Angostura，與靠太平洋的 Lolol、Paredones，近年還往南到湖區的 Futrono–Lago Ranco 試種。家族老宅如今是 Casa Silva 精品旅館，六代人都在這裡住過；酒賣到 70 多個國家。"
    ],
    "profile": [
     [
      "所在地",
      "智利第六區空加瓜谷，聖費爾南多 Angostura 莊園"
     ],
     [
      "創業",
      "1997 年 4 月成立 Viña Casa Silva；家族葡萄酒事業始於 20 世紀初"
     ],
     [
      "家族",
      "Silva Bouchon 家族，第五代 Mario Pablo Silva 任執行長"
     ],
     [
      "董事長",
      "Mario Silva Cifuentes"
     ],
     [
      "釀酒",
      "Juan Francisco Calderón（釀酒總監）、Patricia González（釀酒師）"
     ],
     [
      "葡萄園",
      "Angostura、Los Lingues、Lolol、Paredones、Lago Ranco"
     ],
     [
      "招牌",
      "卡門內爾（Microterroir de Los Lingues）、老藤系列"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1887,
     "e": "",
     "t": "22 歲的 Emilio Bouchon 從波爾多聖愛美濃來到智利",
     "approx": false
    },
    {
     "y": 1910,
     "e": "20 世紀初",
     "t": "Bouchon 父子在聖費爾南多 Angostura 莊園種葡萄、蓋酒窖",
     "approx": true
    },
    {
     "y": 1912,
     "e": "",
     "t": "Angostura 葡萄園種下，今天仍是空加瓜最老的葡萄園之一",
     "approx": true
    },
    {
     "y": 1978,
     "e": "",
     "t": "Mario Silva 開始整理老葡萄園與 Bouchon 家舊酒窖，供應散裝酒",
     "approx": false
    },
    {
     "y": 1997,
     "e": "4 月",
     "t": "長子 Mario Pablo Silva 主導，Viña Casa Silva 成立，開始自有品牌裝瓶",
     "approx": false
    }
   ],
   "name": {
    "lead": "Casa Silva，就是「Silva 家」：",
    "parts": [
     {
      "c": "Casa",
      "r": "西班牙文「家」",
      "n": "家族老宅就在 Angostura 莊園，現在是 Casa Silva 精品旅館"
     },
     {
      "c": "Silva",
      "r": "父系姓氏",
      "n": "1968 年 Bouchon 家的 María Teresa Silva Bouchon 與 Mario Silva Cifuentes 結婚，Bouchon 家的酒業由 Silva 家延續"
     }
    ]
   },
   "place": [
    {
     "k": "谷",
     "t": "空加瓜谷在聖地牙哥南方，東靠安地斯山、西臨太平洋；家族在山側（Los Lingues、Angostura）與海側（Lolol、Paredones）都有葡萄園。"
    },
    {
     "k": "海",
     "t": "Paredones 距太平洋只有約 6 公里，用來種涼爽氣候的黑皮諾等品種（Cool Coast 系列）。"
    },
    {
     "k": "湖",
     "t": "最南的實驗園在智利南部湖區 Futrono–Lago Ranco，釀麗絲玲、白蘇維濃與氣泡酒。"
    }
   ],
   "craft": {
    "title": "從散裝酒到自家裝瓶",
    "points": [
     [
      "老藤",
      "Angostura 莊園保有約 1912 年種植的老葡萄園。"
     ],
     [
      "卡門內爾",
      "在 Los Lingues 葡萄園挑出多個微地塊分別釀造，2005 年做了第一次微釀，成為 Microterroir 卡門內爾。"
     ],
     [
      "轉型",
      "1997 年以前家族主要賣散裝酒，1997 年起改用 Casa Silva 品牌自己裝瓶。"
     ]
    ]
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Vi%C3%B1a_Casa_Silva_-_Vi%C3%B1edo_Angostura_Vineyard.jpg",
     "w": 2000,
     "t": "凱撒西瓦的 Angostura 葡萄園，1912 年種下的老藤，智利空加瓜谷",
     "by": "Psommaruga",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Vi%C3%B1a_Casa_Silva_-_Vi%C3%B1edo_Angostura_Vineyard.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Winery_Valle_Colchagua_Chile_-_panoramio_%281%29.jpg",
     "w": 2400,
     "t": "智利空加瓜谷的酒莊與葡萄園風景（非凱撒西瓦莊園）",
     "by": "Hiroki Ogawa",
     "lic": "CC BY 3.0",
     "licUrl": "https://creativecommons.org/licenses/by/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Winery_Valle_Colchagua_Chile_-_panoramio_(1).jpg"
    }
   ],
   "sources": [
    [
     "Casa Silva 官網：History",
     "https://www.casasilva.cl/en/our-vineyard/"
    ],
    [
     "Casa Silva 官網：Our Team",
     "https://www.casasilva.cl/en/our-team/"
    ],
    [
     "Averys：Casa Silva Cool Coast Pinot Noir（Paredones 距海 6 公里）",
     "https://www.averys.com/product/Casa-Silva-Cool-Coast-Pinot-Noir-2019/1672019"
    ],
    [
     "Vine Connections：Casa Silva Microterroir",
     "https://www.vineconnections.com/chilean-wine/casa-silva/microterroir/2019"
    ],
    [
     "Frommer's：Casa Silva",
     "https://www.frommers.com/destinations/colchagua-valley/attractions/casa-silva/"
    ]
   ]
  },
  "wakatsuru": {
   "tone": [
    "#2b1d14",
    "#f6ead6",
    "#d8b98a",
    "#c0702f"
   ],
   "dark": true,
   "city": "砺波市",
   "founded": "1862",
   "oneName": "若鶴酒造",
   "one": {
    "c": "蒸",
    "t": "戰時與戰後清酒產量銳減，若鶴靠蒸餾酒找到活路：1952 年取得威士忌製造執照，旗下三郎丸蒸留所自稱北陸最古老的威士忌蒸餾所。我們賣的 UMESKY，就是用這座蒸餾所的威士忌泡青梅。"
   },
   "hook": "文久二年在加賀藩許可下開始釀酒的富山酒藏，戰後靠威士忌撐過低谷；2016 年第五代回鄉，用眾籌把老蒸餾所救了回來。",
   "order": [
    "about",
    "timeline",
    "craft",
    "place",
    "name"
   ],
   "about": {
    "paras": [
     "若鶴酒造位在富山縣砺波市三郎丸，砺波平野上農家散落田間的「散居村」景觀就在四周。官網記載，「若鶴」這支酒誕生於文久 2 年（1862），最初是越中的豪農取得加賀藩的釀酒許可；明治 43 年（1910），初代稻垣小太郎承接酒造業，大正 7 年（1918）改組為株式會社。",
     "大正年間蓋起的「大正藏」由越後杜氏掌釀，後來又有南部杜氏的「昭和藏」，兩派在同一家酒造裡各據一藏、互相較勁。官網說，現任杜氏繼承了兩邊的技術，追求南部流的濃醇與越後流的淡麗之間的平衡。",
     "二戰期間米糧短缺、清酒銷路斷絕，戰後若鶴轉向蒸餾酒、合成酒與威士忌，1952 年取得威士忌製造執照。昭和 28 年（1953）5 月一場火災燒毀酒精工場大半設施，全體員工在短時間內讓工廠復工。1962 年，社長稻垣小太郎還在大正藏的一個房間裡創立了北陸可口可樂裝瓶公司。",
     "2016 年，第五代稻垣貴彥回到故鄉，發起三郎丸蒸留所的改修計畫，以眾籌向 463 人募得 3,825 萬 5,000 日圓，2017 年蒸餾所重新開放參觀。2019 年又與高岡的梵鐘廠老子製作所合作，以高岡銅器的鑄造技術做出鑄造蒸餾器「ZEMON」。2025 年 8 月，大正藏、昭和藏松庫與三郎丸蒸留所登錄為國家登錄有形文化財。"
    ],
    "profile": [
     [
      "所在地",
      "富山縣砺波市三郎丸 208"
     ],
     [
      "創業",
      "文久 2 年（1862）；1918 年設立株式會社"
     ],
     [
      "當主",
      "代表取締役社長兼 CEO 稻垣貴彥（2022 年 11 月就任 CEO）"
     ],
     [
      "杜氏",
      "田村幸作（2025 年 12 月就任）"
     ],
     [
      "水",
      "庄川伏流水"
     ],
     [
      "招牌",
      "清酒「若鶴」「苗加屋」「玄」；三郎丸蒸留所威士忌；UMESKY 等利口酒"
     ],
     [
      "銘柄",
      "若鶴"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1862,
     "e": "文久 2 年",
     "t": "越中豪農取得加賀藩釀酒許可，「若鶴」誕生",
     "approx": false
    },
    {
     "y": 1910,
     "e": "明治 43 年",
     "t": "初代稻垣小太郎承接酒造業",
     "approx": false
    },
    {
     "y": 1922,
     "e": "大正 11 年",
     "t": "新建清酒藏「大正藏」",
     "approx": false
    },
    {
     "y": 1952,
     "e": "昭和 27 年",
     "t": "取得威士忌製造執照，三郎丸開始釀威士忌",
     "approx": false
    },
    {
     "y": 1953,
     "e": "昭和 28 年",
     "t": "5 月 11 日深夜酒精工場失火，設施大半燒毀，短期內復工",
     "approx": false
    },
    {
     "y": 2017,
     "e": "平成 29 年",
     "t": "眾籌改修完成，三郎丸蒸留所重新開放",
     "approx": false
    },
    {
     "y": 2025,
     "e": "令和 7 年",
     "t": "大正藏、昭和藏松庫、三郎丸蒸留所登錄為國家登錄有形文化財",
     "approx": false
    }
   ],
   "name": {
    "lead": "官網沒有說明「若鶴」這個酒名的由來，倒是蒸餾所直接用了地名。",
    "parts": [
     {
      "c": "三郎丸",
      "r": "さぶろうまる",
      "n": "酒藏所在的砺波市三郎丸地區；2017 年改修後的蒸餾所以此為名。"
     },
     {
      "c": "UMESKY",
      "r": "ウメスキー",
      "n": "梅（ume）加 whisky 的組合字：用酒藏自釀的威士忌浸泡青梅做成的梅酒。"
     }
    ]
   },
   "place": [
    {
     "k": "水",
     "t": "仕込水是長時間在地底過濾的庄川伏流水。"
    },
    {
     "k": "地",
     "t": "砺波平野的散居村：一戶戶農家各自被田地與屋敷林圍繞，夏天稻浪、冬天積雪。"
    },
    {
     "k": "米",
     "t": "使用山田錦，以及富山產的雄山錦、五百萬石等酒造好適米。"
    }
   ],
   "craft": {
    "title": "清酒藏裡的威士忌",
    "points": [
     [
      "兩派杜氏",
      "曾由越後流與南部流杜氏各持一藏競釀，現任杜氏融合兩派做法。"
     ],
     [
      "泥煤",
      "三郎丸蒸留所以「The Ultimate Peat（ピートを極める）」為方針，延續曾祖父那一代就開始的煙燻風格威士忌。"
     ],
     [
      "ZEMON",
      "2019 年與高岡梵鐘廠老子製作所、富山縣工業技術中心共同開發，以高岡銅器技術鑄造的蒸餾器。"
     ],
     [
      "UMESKY",
      "每年 7 月把青梅浸入酒藏自己做的威士忌，慢慢引出梅香。"
     ]
    ],
    "quote": {
     "t": "在傳統之上疊加革新，從富山為日本威士忌的成熟出一分力。",
     "o": "伝統の上に革新を重ね、ジャパニーズウイスキーの成熟に富山から貢献していく。",
     "who": "稻垣貴彥，三郎丸蒸留所 Master Blender & Manager",
     "src": "三郎丸蒸留所官網"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Saburomaru_Distillery_08.jpg",
     "w": 4000,
     "t": "若鶴酒造的大正藏（富山縣砺波市三郎丸，2023 年）",
     "by": "Keeezawa",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Saburomaru_Distillery_08.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Wakatsuru_Sake_Brewing_Co.%2C_Ltd.jpg",
     "w": 1917,
     "t": "1935 年的若鶴酒造株式會社（北陸タイムス社刊載）",
     "by": "北陸タイムス社",
     "lic": "Public domain",
     "licUrl": "https://commons.wikimedia.org/wiki/File:Wakatsuru_Sake_Brewing_Co.,_Ltd.jpg",
     "page": "https://commons.wikimedia.org/wiki/File:Wakatsuru_Sake_Brewing_Co.,_Ltd.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/5/54/Saburomaru_Distillery_05.jpg",
     "w": 4000,
     "t": "三郎丸蒸留所製造棟",
     "by": "Keeezawa",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Saburomaru_Distillery_05.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/84/Saburomaru_Distillery_Potstill.jpg",
     "w": 4000,
     "t": "三郎丸蒸留所的壺式蒸餾器",
     "by": "Keeezawa",
     "lic": "CC BY 4.0",
     "licUrl": "https://creativecommons.org/licenses/by/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Saburomaru_Distillery_Potstill.jpg"
    }
   ],
   "sources": [
    [
     "若鶴酒造官網・會社情報（沿革）",
     "https://www.wakatsuru.co.jp/company/index.html"
    ],
    [
     "若鶴酒造官網・若鶴のあゆみ",
     "https://www.wakatsuru.co.jp/history/index.html"
    ],
    [
     "若鶴酒造官網・若鶴のこだわり",
     "https://www.wakatsuru.co.jp/prejudice/special.html"
    ],
    [
     "若鶴酒造官網・リキュール・焼酎（UMESKY）",
     "https://www.wakatsuru.co.jp/products/index.html"
    ],
    [
     "三郎丸蒸留所官網",
     "https://www.wakatsuru.co.jp/saburomaru/"
    ],
    [
     "サライ.jp：三郎丸蒸留所",
     "https://serai.jp/gourmet/1265277"
    ]
   ]
  },
  "watanabe-distillery": {
   "tone": [
    "#2b1f17",
    "#f5ecdc",
    "#cbb08a",
    "#c0703a"
   ],
   "dark": true,
   "city": "宮崎市田野町",
   "founded": "1914",
   "oneName": "渡邊酒造場",
   "one": {
    "c": "農",
    "t": "官網第一句寫「はじめは農（みのり）から」：原料地瓜從育苗、種植到收成都由家人與藏人自己來，種植期拉長到約 180 天。"
   },
   "hook": "創業者渡邊壽賀市年輕時遠赴美國學林業，1914 年回國在田野買下燒酎藏；五年後一場大火燒光酒藏，鄰居伸手相助，他在《火災見舞受帳》上親筆寫下「Don't forget」。",
   "order": [
    "about",
    "craft",
    "timeline",
    "place",
    "name"
   ],
   "about": {
    "paras": [
     "渡邊酒造場在宮崎市田野町，南邊是鰐塚山，町內幾乎全是田與畑。官網自我介紹得很直接：從原料地瓜的栽培，到蒸餾、裝瓶，全部由藏人自己完成。",
     "初代渡邊壽賀市 1878 年生於愛媛縣伊方村，年輕時赴美從事林業，回國後搬到林業興盛的宮崎田野村，買下當時待售的燒酎藏，1914 年（大正三年）創業。1919 年鄰家延燒，酒藏全毀，靠鄰居幫忙才重新開工。",
     "現在由曾孫、第四代的哥哥渡邊幸一朗（2014 年接任社長）與弟弟潤也一起守藏。官網寫著「常圧蒸留、一徹」：減壓蒸餾流行、清爽燒酎當道的年代，二代、三代也沒有改變做法。",
     "2025 年 3 月，酒藏取得烈酒（スピリッツ）製造執照，7 月起推出以自家燒酎浸漬副原料的「ヒダマ（火玉）」系列；我們店裡的 Hidama Green 就是以芋燒酎浸漬田野町茶葉的第二彈。"
    ],
    "profile": [
     [
      "所在地",
      "宮崎縣宮崎市田野町"
     ],
     [
      "創業",
      "大正三年（1914）"
     ],
     [
      "當主",
      "四代目 渡邊幸一朗（代表取締役社長）、弟 渡邊潤也"
     ],
     [
      "水",
      "藏內井戶汲取的鰐塚山系伏流水"
     ],
     [
      "招牌",
      "自家栽培地瓜、常壓蒸餾"
     ],
     [
      "銘柄",
      "旭萬年、旭万年星、麦麦 旭万年、ヒダマ（火玉）"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1914,
     "e": "大正 3 年",
     "t": "渡邊壽賀市自美國返日，於田野買下燒酎藏，創立「渡邊釀造」",
     "approx": false
    },
    {
     "y": 1919,
     "e": "大正 8 年",
     "t": "鄰家延燒，酒藏全毀；在鄰居協助下重新釀造",
     "approx": false
    },
    {
     "y": 1975,
     "e": "昭和 50 年",
     "t": "法人化，改名有限會社渡邊酒造場",
     "approx": false
    },
    {
     "y": 1982,
     "e": "昭和 57 年",
     "t": "三代渡邊友美擔任杜氏後首獲國稅局鑑評會優等賞，得獎原酒長期貯藏，33 年後的 2014 年以「百周年記念 大古酒」發售",
     "approx": false
    },
    {
     "y": 2014,
     "e": "平成 26 年",
     "t": "渡邊幸一朗就任四代目社長，同年迎來創業百周年",
     "approx": false
    },
    {
     "y": 2025,
     "e": "令和 7 年",
     "t": "取得烈酒製造執照，7 月起推出浸漬型烈酒「ヒダマ」",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒名取自長壽的祝語，新系列則借用田野町的地方傳說。",
    "parts": [
     {
      "c": "萬年",
      "r": "まんねん",
      "n": "取自日本諺語「鶴は千年、亀は万年」，源於中國《淮南子・說林訓》的「鶴壽千歲」，借長壽之意祝福。"
     },
     {
      "c": "旭萬年",
      "r": "あさひまんねん",
      "n": "酒藏的主銘柄，官網只說明「萬年」的由來。"
     },
     {
      "c": "火玉",
      "r": "ヒダマ",
      "n": "田野町自古傳說住著名為「火玉」的妖怪（もののけ），酒藏把它當成蒸餾酒造的守護神畫上酒標。"
     }
    ]
   },
   "place": [
    {
     "k": "山",
     "t": "鰐塚山橫跨宮崎市、日南市與三股町，是鰐塚山地的最高峰，田野町就在它的山腳。"
    },
    {
     "k": "水",
     "t": "釀造用水是酒藏自家井戶湧出的鰐塚山系伏流水。"
    },
    {
     "k": "風",
     "t": "冬天從鰐塚山吹下的冷風「鰐塚颪」，讓田野成為乾燥蘿蔔產量日本第一的地方；各處搭起的「大根櫓」是當地冬季風景。"
    },
    {
     "k": "鄉",
     "t": "初代與二代的故鄉在愛媛，酒藏至今也用愛媛產的裸麥「マンネンボシ」釀麥燒酎「旭万年星」。"
    }
   ],
   "craft": {
    "title": "從種芋到蒸餾，都在自己手上",
    "points": [
     [
      "芋",
      "自家栽培「黃金千貫」與「ダイチノユメ（大地之夢）」，種植約 180 天（一般約 100 天），農藥盡量不用"
     ],
     [
      "麴",
      "河內源一郎商店的河內菌白麴、黑麴"
     ],
     [
      "醪",
      "二次醪發酵約 10 天；攪拌用的櫂棒用附近自生的竹木自製，讓天然酵母進入醪中"
     ],
     [
      "蒸餾",
      "創業百年堅持常壓蒸餾"
     ],
     [
      "夏之萬年",
      "夏季限定 20 度，原料芋為自家種的ダイチノユメ，麴米用宮崎產「夏の笑み」"
     ]
    ],
    "quote": {
     "t": "我們追求的不是人人都說好的燒酎，而是就算一萬人裡只有一位，也能打從心底說好喝的酒。",
     "o": "目指しているものは、万人受けの良い焼酎ではなく、たとえ一万人にお一人だとしても心の底から旨いと言っていただけるようなお酒を造り続けることです。",
     "who": "渡邊幸一朗，四代目社長",
     "src": "渡邊酒造場官網「代表挨拶」"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/97/Wanitsukayama_from_Tano_Japan.jpg",
     "w": 1280,
     "t": "從田野町遠望鰐塚山（宮崎市）",
     "by": "Sanjo at Japanese Wikipedia",
     "lic": "Public domain",
     "licUrl": "https://commons.wikimedia.org/wiki/File:Wanitsukayama_from_Tano_Japan.jpg",
     "page": "https://commons.wikimedia.org/wiki/File:Wanitsukayama_from_Tano_Japan.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Daikon_Yagura_Tano_2023.jpg",
     "w": 4000,
     "t": "田野町冬季曬乾蘿蔔的「大根櫓」（2023 年 12 月）",
     "by": "Sanjo (ja.wikipedia)",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Daikon_Yagura_Tano_2023.jpg"
    }
   ],
   "sources": [
    [
     "渡邊酒造場官網：會社案內（歷史、沿革、代表挨拶）",
     "http://asahi-mannen.com/company/index.html"
    ],
    [
     "渡邊酒造場官網：原料栽培",
     "http://asahi-mannen.com/cultivation/index.html"
    ],
    [
     "渡邊酒造場官網：製造工程",
     "http://asahi-mannen.com/process/index.html"
    ],
    [
     "渡邊酒造場官網：商品案內（萬年的由來、夏のまんねん）",
     "http://asahi-mannen.com/product/index.html"
    ],
    [
     "菊屋酒販：watanabe Infusion Spirits「ヒダマ」",
     "https://kikuyashuhan.co.jp/product/watanabe-infusion-spirits%E3%80%80%E3%80%8C%E3%83%92%E3%83%80%E3%83%9E%E3%80%8D"
    ],
    [
     "SYNCHRO：渡邊酒造場 ヒダマ スピリッツ 包裝設計",
     "http://synchrodesign.net/work/1858/"
    ],
    [
     "SYNCHRO：渡邊酒造場 ヒダマスピリッツ グリーン",
     "http://synchrodesign.net/work/2166/"
    ],
    [
     "Nomunication：Watanabe Distillery: Farm to Bottle",
     "https://www.nomunication.jp/2022/02/02/watanabe-distillery-farm-to-bottle-potato-passion/"
    ]
   ]
  },
  "yanagita-shochu": {
   "tone": [
    "#f3e6cf",
    "#3b2416",
    "#8c5a3a",
    "#b5452f"
   ],
   "city": "都城市",
   "founded": "1902",
   "oneName": "柳田酒造",
   "one": {
    "c": "改",
    "t": "第五代柳田正原是富士全錄的工程師，藏裡只有一台減壓專用蒸餾機，他自己鑽孔、改管線、調壓力，赤鹿毛就是在改機過程中誕生的。"
   },
   "hook": "藏裡只有一台減壓專用的蒸餾機，工程師出身的第五代柳田正一邊改機一邊調壓力，某個壓力下忽然冒出獨特的香氣——那就是赤鹿毛。",
   "order": [
    "about",
    "craft",
    "timeline",
    "place",
    "name"
   ],
   "about": {
    "paras": [
     "柳田酒造在宮崎縣西南端的都城市，明治三十五年（1902）由柳田家開始釀燒酎，被介紹為都城市最古老的燒酎藏。都城盆地西北是霧島山，東邊是鰐塚山系，地下湧水豐富。",
     "第五代柳田正 1973 年生，是第四代的次男。他從東京農工大學研究所畢業後，在富士全錄當了四年工程師，2001 年回鄉接手家業，2010 年就任代表。因為常自己動手改造蒸餾機，被稱為「燒酎界的愛迪生」。",
     "赤鹿毛是他的出道作。據 dancyu 的訪談，他受大分「兼八」麥燒酎的衝擊，想做出超越它的麥燒酎；但藏裡只有減壓專用機，他一邊改造一邊細調釜內壓力，發現某個壓力下會出現個性鮮明的香氣。現在則把壓力調到醪約在 75℃ 沸騰。",
     "酒藏以麥燒酎為主，赤鹿毛之後還有青鹿毛，並把停產 35 年的芋燒酎「千本櫻」復刻回來；2007 年起也和契作農家一起復育幾近消失的在來種裸麥「ミヤザキハダカ」。"
    ],
    "profile": [
     [
      "所在地",
      "宮崎縣都城市早鈴町"
     ],
     [
      "創業",
      "明治三十五年（1902）"
     ],
     [
      "當主",
      "五代目 柳田正（代表取締役，2010 年就任）"
     ],
     [
      "水",
      "藏區中央代代相傳的井戶地下水"
     ],
     [
      "招牌",
      "自行改造的蒸餾機、以調壓蒸餾做出焙炒香的麥燒酎"
     ],
     [
      "銘柄",
      "赤鹿毛、青鹿毛、千本桜、駒"
     ]
    ]
   },
   "timeline": [
    {
     "y": 1902,
     "e": "明治 35 年",
     "t": "柳田家在都城開始釀造燒酎",
     "approx": false
    },
    {
     "y": 2001,
     "e": "平成 13 年",
     "t": "柳田正離開富士全錄的工程師工作，回鄉接手家業",
     "approx": false
    },
    {
     "y": 2005,
     "e": "平成 17 年前後",
     "t": "改造減壓蒸餾機、細調壓力，做出出道作「赤鹿毛」（訪談說約 20 年前）",
     "approx": true
    },
    {
     "y": 2007,
     "e": "平成 19 年",
     "t": "與契作農家復育在來種裸麥「ミヤザキハダカ」",
     "approx": false
    },
    {
     "y": 2010,
     "e": "平成 22 年",
     "t": "柳田正就任第五代代表取締役",
     "approx": false
    }
   ],
   "name": {
    "lead": "酒藏沒有公開說明赤鹿毛的命名理由；以下只寫查得到的字義與典故。",
    "parts": [
     {
      "c": "鹿毛",
      "r": "かげ",
      "n": "馬的毛色名：身體像鹿的褐色，鬃毛、尾巴與腿下段為黑色；依深淺另有「青鹿毛」「黑鹿毛」等。"
     },
     {
      "c": "赤鹿毛",
      "r": "あかかげ",
      "n": "柳田酒造的第一支自創麥燒酎，之後才有同樣以馬毛色命名的「青鹿毛」。"
     },
     {
      "c": "千本桜",
      "r": "せんぼんざくら",
      "n": "柳田酒造過去的主力芋燒酎銘柄，停產 35 年後復刻；名字連到明治初期在都城任地頭的三島通庸種下的櫻花。"
     }
    ]
   },
   "place": [
    {
     "k": "盆地",
     "t": "都城位在宮崎縣西南端，曾屬薩摩藩領地；西北有霧島山，東有鰐塚山系，地下湧水豐富。"
    },
    {
     "k": "水",
     "t": "釀造用水來自藏區中央代代相傳的井戶。"
    },
    {
     "k": "麥",
     "t": "2007 年起與契作農家復育昭和末年幾近消失的在來種裸麥「ミヤザキハダカ」。"
    }
   ],
   "craft": {
    "title": "工程師改出來的麥香",
    "points": [
     [
      "起點",
      "藏裡原本只有一台減壓專用蒸餾機"
     ],
     [
      "改機",
      "自己在蒸餾釜上鑽了四個進蒸汽孔，用切割、車牙的金屬管做接頭，改變蒸汽方向與壓力，讓醪在釜中翻轉、均勻受熱"
     ],
     [
      "調壓",
      "介於常壓與減壓之間，調到醪約 75℃ 沸騰，帶出像爆米花般的焙炒香"
     ],
     [
      "原料",
      "赤鹿毛使用九州產二條大麥（零售商標示）"
     ]
    ],
    "quote": {
     "t": "最重要的是，改機實在太好玩了。",
     "o": "何よりも、改造が楽しくてしょうがないんです。",
     "who": "柳田正，柳田酒造五代目",
     "src": "dancyu「焼酎の教室」（2025）"
    }
   },
   "photos": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/81/Miyakonojou_Basin.jpg",
     "w": 4608,
     "t": "空中俯瞰都城盆地（宮崎縣，2014 年 1 月）",
     "by": "Ray go",
     "lic": "CC BY-SA 3.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
     "page": "https://commons.wikimedia.org/wiki/File:Miyakonojou_Basin.jpg"
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/9/93/View_of_Mount_Kirishimayama_near_Miyakonojo_Station.jpg",
     "w": 4032,
     "t": "從都城站前遠望霧島山",
     "by": "そらみみ",
     "lic": "CC BY-SA 4.0",
     "licUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
     "page": "https://commons.wikimedia.org/wiki/File:View_of_Mount_Kirishimayama_near_Miyakonojo_Station.jpg"
    }
   ],
   "sources": [
    [
     "dancyu：柳田正さんが語る蒸留機の\"魔\"改造秘話（赤鹿毛）",
     "https://dancyu.jp/join/2025_00009918.html"
    ],
    [
     "dancyu：柳田正さんが蒸留機\"魔\"改造で導き出した麦焼酎「青鹿毛」",
     "https://dancyu.jp/join/2025_00009937.html"
    ],
    [
     "IMADEYA：赤鹿毛・千本桜│柳田酒造",
     "https://imadeya.co.jp/blogs/brewery/yanagida"
    ],
    [
     "兎と寅：赤鹿毛",
     "https://usatora.tokyo/akakage/"
    ],
    [
     "Skurnik：Yanagita Distillery",
     "https://www.skurnik.com/producer/yanagita-distillery/"
    ],
    [
     "JAL ontrip：都城最古の焼酎蔵「柳田酒造」",
     "https://ontrip.jal.co.jp/kyushu/17828306/p2"
    ],
    [
     "國稅廳 熊本國稅局：宮崎縣酒藏一覽（柳田酒造合名会社・赤鹿毛）",
     "https://www.nta.go.jp/about/organization/kumamoto/sake/sakagura/pdf/miyazaki/jp.pdf"
    ]
   ]
  }
 }
};
