import { Category, Product } from "./types";

export const categories: Category[] = [
  { id: "sparklers", name: "仙女棒手持煙火", slug: "sparklers", productCount: 20 },
  { id: "box-50", name: "50元以上盒裝煙火", slug: "box-50", productCount: 25 },
  { id: "box-100", name: "100元以上盒裝煙火", slug: "box-100", productCount: 12 },
  { id: "box-200", name: "200元以上盒裝煙火", slug: "box-200", productCount: 25 },
  { id: "box-300", name: "300元以上盒裝煙火", slug: "box-300", productCount: 30 },
  { id: "box-400", name: "400元以上盒裝煙火", slug: "box-400", productCount: 30 },
  { id: "daytime", name: "日間彩煙／雷／彩帶", slug: "daytime", productCount: 16 },
  { id: "pearl", name: "吐珠升空類煙火批發", slug: "pearl", productCount: 7 },
  { id: "rocket", name: "沖天炮／火箭類煙火", slug: "rocket", productCount: 5 },
  { id: "fountain", name: "花筒類煙火批發", slug: "fountain", productCount: 18 },
  { id: "spinning", name: "旋轉升空類煙火", slug: "spinning", productCount: 8 },
  { id: "ground", name: "甩炮地面類煙火批發", slug: "ground", productCount: 16 },
  { id: "temple", name: "廟會煙火批發專區", slug: "temple", productCount: 9 },
];

export const products: Product[] = [
  // ═══════════════════════════════════════
  // 仙女棒手持煙火（22 項真實商品）
  // ═══════════════════════════════════════
  { id: "sp-001", name: "彩色浪漫の星", categoryId: "sparklers", quantity: "8支", price: 96, image: "/仙女棒/彩色浪漫の星.jpg", slug: "colorful-romantic-star", description: "浪漫彩色火花，適合各種慶祝場合，火花絢麗持久。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/rzZuTPyAIEI" },
  { id: "sp-002", name: "彩色螢火蟲", categoryId: "sparklers", quantity: "12支", price: 106, image: "/仙女棒/彩色螢火蟲.jpg", slug: "colorful-firefly", description: "模擬螢火蟲般的閃爍光點，多色交替綻放。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/sZAb4NZGldg" },
  { id: "sp-003", name: "大仙", categoryId: "sparklers", quantity: "10支", price: 64, image: "/仙女棒/大仙.jpg", slug: "big-fairy", description: "經典大型仙女棒，火花噴射時間長，視覺效果佳。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/CooMB2Lmf9A" },
  { id: "sp-004", name: "彩虹樂（紫光火焰）", categoryId: "sparklers", quantity: "6支", price: 130, image: "/仙女棒/彩虹樂(紫光火焰).jpg", slug: "rainbow-joy-purple", description: "獨特紫光火焰效果，彩虹色漸變，視覺震撼。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/kXSciVWrU5c" },
  { id: "sp-005", name: "冷光瀑布（冷光火焰）", categoryId: "sparklers", quantity: "5支", price: 171, image: "/仙女棒/冷光瀑布(冷光火焰).jpg", slug: "cold-light-waterfall", description: "冷光火焰技術，瀑布般傾瀉而下的光芒效果。", notes: "請在空曠處使用，遠離易燃物品。冷光火焰溫度較低但仍需注意安全。", videoUrl: "https://youtu.be/64funx4nxKI" },
  { id: "sp-006", name: "紫荊花", categoryId: "sparklers", quantity: "12支", price: 114, image: "/仙女棒/紫荊花.jpg", slug: "bauhinia", description: "紫荊花造型火花綻放，色彩鮮艷持久。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/8FHk041aKXk" },
  { id: "sp-008", name: "十變色", categoryId: "sparklers", quantity: "12支", price: 114, image: "/仙女棒/十變色.jpg", slug: "ten-color-change", description: "十種顏色依序變換，一支體驗多重色彩。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/8Lo6q71UMdc" },
  { id: "sp-009", name: "燦爛星河", categoryId: "sparklers", quantity: "5支", price: 197, image: "/仙女棒/燦爛星河.jpg", slug: "brilliant-galaxy", description: "星河般的璀璨火花，金銀交織效果。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/mhe0I8cG2W8" },
  { id: "sp-010", name: "幸運棒", categoryId: "sparklers", quantity: "12支", price: 166, image: "/仙女棒/幸運棒.jpg", slug: "lucky-stick", description: "幸運象徵，適合節慶祝福場合使用。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/wUKV0DBEkP8" },
  { id: "sp-011", name: "銀河瀑布", categoryId: "sparklers", quantity: "12支", price: 160, image: "/仙女棒/銀河瀑布.jpg", slug: "milky-way-waterfall", description: "銀白色火花如瀑布般流瀉，效果壯觀。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/NQIq2eZMs0k" },
  { id: "sp-012", name: "金波", categoryId: "sparklers", quantity: "8支", price: 190, image: "/仙女棒/金波.webp", slug: "golden-wave", description: "金色波浪狀火花噴射，華麗大氣。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/fww7VI2lSe0" },
  { id: "sp-014", name: "小星星", categoryId: "sparklers", quantity: "1盒20支有10盒", price: 182, image: "/仙女棒/小星星.jpg", slug: "little-star", description: "經濟實惠的批發裝，每盒20支共10盒，適合大量採購。", notes: "請在空曠處使用，遠離易燃物品。大量儲存請注意防潮。", videoUrl: "https://youtu.be/G4lhEYYdvTQ" },
  { id: "sp-015", name: "五彩棒", categoryId: "sparklers", quantity: "24支", price: 93, image: "/仙女棒/五彩棒.jpg", slug: "five-color-stick", description: "五種色彩交替閃爍，量多價優。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/Xf17DCM7nLc" },
  { id: "sp-016", name: "心の棒", categoryId: "sparklers", quantity: "10支", price: 154, image: "/仙女棒/心の棒.webp", slug: "heart-stick", description: "心型造型設計，適合婚禮、告白等浪漫場合。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/UrvefYEzma4" },
  { id: "sp-017", name: "月光仙子", categoryId: "sparklers", quantity: "10支", price: 61, image: "/仙女棒/月光仙子.jpg", slug: "moonlight-fairy", description: "柔和月光色澤，優雅溫馨的火花效果。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/yYaYpItlfNU" },
  { id: "sp-018", name: "OK棒", categoryId: "sparklers", quantity: "12支", price: 166, image: "/仙女棒/OK棒.jpg", slug: "ok-stick", description: "經典款仙女棒，穩定品質，多用途適用。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/fJX1MKkAHSU" },
  { id: "sp-019", name: "天子棒", categoryId: "sparklers", quantity: "6支", price: 182, image: "/仙女棒/天子棒.webp", slug: "emperor-stick", description: "頂級仙女棒，火花噴射高度與持續時間均為頂尖。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/leFxgfo0Pr4" },
  { id: "sp-020", name: "電光花-大仙女棒", categoryId: "sparklers", quantity: "10支", price: 56, image: "/仙女棒/電光花-大仙女棒.jpg", slug: "electric-sparkler-large", description: "經典電光花系列，大尺寸仙女棒，性價比高。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/_CNdRN8QxsA" },
  { id: "sp-021", name: "大如意棒", categoryId: "sparklers", quantity: "10支", price: 80, image: "/仙女棒/大如意棒.jpg", slug: "large-ruyi-stick", description: "如意吉祥造型，火花飽滿，節慶必備。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/PLmwZO5wUe8" },
  { id: "sp-022", name: "小如意棒", categoryId: "sparklers", quantity: "20支/包，5小包", price: 112, image: "/仙女棒/小如意棒.jpg", slug: "small-ruyi-stick", description: "小巧如意棒，批發分裝方便，每包20支共5小包。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/afvDPUW597U" },

  // ═══════════════════════════════════════
  // 50元以上盒裝煙火（33 項）
  // ═══════════════════════════════════════
  { id: "b50-001", name: "25發蜂炮", categoryId: "box-50", quantity: "25發", price: 39, image: "/50元以上盒裝煙火/25發蜂炮.webp", slug: "25-shot-beehive", videoUrl: "https://youtu.be/gUoIIvHdwzo" },
  { id: "b50-002", name: "叫小賀", categoryId: "box-50", quantity: "9發", price: 107, image: "/50元以上盒裝煙火/叫小賀.webp", slug: "jiao-xiao-he", videoUrl: "https://youtu.be/yGKwxd5wfFE" },
  { id: "b50-003", name: "鼎盛", categoryId: "box-50", quantity: "9發", price: 107, image: "/50元以上盒裝煙火/鼎盛.webp", slug: "ding-sheng", videoUrl: "https://youtu.be/V4WQFPae-CE" },
  { id: "b50-005", name: "有夠旺", categoryId: "box-50", quantity: "9發", price: 107, image: "/50元以上盒裝煙火/有夠旺.jpg", slug: "you-gou-wang", videoUrl: "https://youtu.be/7z52JnKpRwg" },
  { id: "b50-007", name: "海豚妹", categoryId: "box-50", quantity: "9發", price: 107, image: "/50元以上盒裝煙火/海豚妹.jpg", slug: "dolphin-girl", videoUrl: "https://youtu.be/QivZN5-709A" },
  { id: "b50-008", name: "鬥陣", categoryId: "box-50", quantity: "9發", price: 107, image: "/50元以上盒裝煙火/鬥陣.jpg", slug: "dou-zhen", videoUrl: "https://youtu.be/rq2nIQNcjyY" },
  { id: "b50-009", name: "繁花", categoryId: "box-50", quantity: "12發", price: 116, image: "/50元以上盒裝煙火/繁花webp.webp", slug: "fan-hua", videoUrl: "https://youtu.be/0jtcVoP6xjM" },
  { id: "b50-010", name: "三龍", categoryId: "box-50", quantity: "12發", price: 116, image: "/50元以上盒裝煙火/三龍.webp", slug: "san-long", videoUrl: "https://youtu.be/ffktALWIROc" },
  { id: "b50-011", name: "勇士", categoryId: "box-50", quantity: "12發", price: 116, image: "/50元以上盒裝煙火/勇士.webp", slug: "yong-shi", videoUrl: "https://youtu.be/iTTyseP8jqg" },
  { id: "b50-013", name: "心動", categoryId: "box-50", quantity: "12發", price: 116, image: "/50元以上盒裝煙火/心動.webp", slug: "xin-dong", videoUrl: "https://youtu.be/d_MlnxHKruc" },
  { id: "b50-015", name: "日月爭輝", categoryId: "box-50", quantity: "12發", price: 116, image: "/50元以上盒裝煙火/日月爭輝.jpg", slug: "sun-moon-glory", videoUrl: "https://youtu.be/QyxSVWy8Sic" },
  { id: "b50-016", name: "真正順", categoryId: "box-50", quantity: "12發", price: 116, image: "/50元以上盒裝煙火/真正順.jpg", slug: "zhen-zheng-shun", videoUrl: "https://youtu.be/XChW1tJSbDY" },
  { id: "b50-017", name: "星晴", categoryId: "box-50", quantity: "12發", price: 116, image: "/50元以上盒裝煙火/星晴.webp", slug: "xing-qing", videoUrl: "https://youtu.be/QpmHSabHKoM" },
  { id: "b50-018", name: "刮目相看", categoryId: "box-50", quantity: "12發", price: 116, image: "/50元以上盒裝煙火/刮目相看.jpg", slug: "gua-mu-xiang-kan", videoUrl: "https://youtu.be/tINQQ0Vu70U" },
  { id: "b50-019", name: "興旺", categoryId: "box-50", quantity: "12發", price: 116, image: "/50元以上盒裝煙火/興旺webp.webp", slug: "xing-wang", videoUrl: "https://youtu.be/4ShkrUTmVpw" },
  { id: "b50-023", name: "姑娘", categoryId: "box-50", quantity: "16發", price: 146, image: "/50元以上盒裝煙火/姑娘.jpg", slug: "gu-niang", videoUrl: "https://youtu.be/7MhEY95MKS8" },
  { id: "b50-025", name: "造花工廠", categoryId: "box-50", quantity: "16發", price: 146, image: "/50元以上盒裝煙火/造花工廠.webp", slug: "flower-factory", videoUrl: "https://youtu.be/5vtzruiEE0I" },
  { id: "b50-026", name: "嘉年華", categoryId: "box-50", quantity: "16發", price: 146, image: "/50元以上盒裝煙火/嘉年華.jpg", slug: "carnival", videoUrl: "https://youtu.be/CaR7QFKjOls" },
  { id: "b50-027", name: "空美100發", categoryId: "box-50", quantity: "100發", price: 153, image: "/50元以上盒裝煙火/空美100發.webp", slug: "kong-mei-100", videoUrl: "https://youtu.be/aed_5j9MUZw" },
  { id: "b50-028", name: "夜舞", categoryId: "box-50", quantity: "20發", price: 162, image: "/100元以上盒裝煙火/夜舞.webp", slug: "ye-wu", videoUrl: "https://youtu.be/sXWiZ1JgHcw" },
  { id: "b50-029", name: "達美樂", categoryId: "box-50", quantity: "20發", price: 161.5, image: "/100元以上盒裝煙火/達美樂.webp", slug: "da-mei-le", videoUrl: "https://youtu.be/AQaDK-NkDso" },
  { id: "b50-030", name: "花火情緣", categoryId: "box-50", quantity: "20發", price: 162, image: "/100元以上盒裝煙火/花火情緣.webp", slug: "hanabi-romance", videoUrl: "https://youtu.be/sm57HwtwU8A" },
  { id: "b50-031", name: "火麒麟", categoryId: "box-50", quantity: "20發", price: 162, image: "/100元以上盒裝煙火/火麒麟.webp", slug: "fire-qilin", videoUrl: "https://youtu.be/LMqx_IRbs6c" },
  { id: "b50-032", name: "金紅", categoryId: "box-50", quantity: "20發", price: 161.5, image: "/100元以上盒裝煙火/金紅.jpg", slug: "jin-hong", videoUrl: "https://youtu.be/oMnFcpSea6k" },
  { id: "b50-033", name: "幸福", categoryId: "box-50", quantity: "20發", price: 162, image: "/100元以上盒裝煙火/幸福.webp", slug: "xing-fu", videoUrl: "https://youtu.be/Dda1WxFKkkM" },

  // ═══════════════════════════════════════
  // 100元以上盒裝煙火（12 項）
  // ═══════════════════════════════════════
  { id: "b100-001", name: "100發蜂炮", categoryId: "box-100", quantity: "100發", price: 170, image: "/100元以上盒裝煙火/100發蜂炮.jpg", slug: "100-shot-beehive", videoUrl: "https://youtu.be/_dFfQAwr030" },
  { id: "b100-002", name: "獅子王", categoryId: "box-100", quantity: "20發", price: 194, image: "/100元以上盒裝煙火/獅子王.webp", slug: "lion-king", videoUrl: "https://youtu.be/qyE_kDegrys" },
  { id: "b100-003", name: "獅子王-錦冠花", categoryId: "box-100", quantity: "20發", price: 245, image: "/100元以上盒裝煙火/獅子王-錦冠花.webp", slug: "lion-king-crown", videoUrl: "https://youtu.be/362E5zkfOg8" },
  { id: "b100-004", name: "火之傳說", categoryId: "box-100", quantity: "16發", price: 275.4, image: "/100元以上盒裝煙火/火之傳說.jpg", slug: "legend-of-fire", videoUrl: "https://youtu.be/MH5Fg8N5eg0" },
  { id: "b100-005", name: "天馬行空", categoryId: "box-100", quantity: "12發", price: 275, image: "/100元以上盒裝煙火/天馬行空.jpg", slug: "pegasus", videoUrl: "https://youtu.be/q0-suSOyelA" },
  { id: "b100-006", name: "喜相逢", categoryId: "box-100", quantity: "24發", price: 275, image: "/100元以上盒裝煙火/喜相逢.webp", slug: "xi-xiang-feng", videoUrl: "https://youtu.be/VNJm1Wf9_9s" },
  { id: "b100-007", name: "520", categoryId: "box-100", quantity: "15發", price: 282, image: "/100元以上盒裝煙火/520煙火.jpg", slug: "520-firework", videoUrl: "https://youtu.be/iyOEiSpTxk4" },
  { id: "b100-008", name: "大富豪", categoryId: "box-100", quantity: "20發", price: 289, image: "/100元以上盒裝煙火/大富豪.jpg", slug: "tycoon", videoUrl: "https://youtu.be/OWGoCjTUqdk" },
  { id: "b100-009", name: "夢想家", categoryId: "box-100", quantity: "20發", price: 289, image: "/100元以上盒裝煙火/夢想家.jpg", slug: "dreamer" },
  { id: "b100-010", name: "摩天輪", categoryId: "box-100", quantity: "20發", price: 289, image: "/100元以上盒裝煙火/摩天輪.jpg", slug: "ferris-wheel", videoUrl: "https://youtu.be/l9kpf0adQIc" },
  { id: "b100-011", name: "煙花物語", categoryId: "box-100", quantity: "21發", price: 290.7, image: "/100元以上盒裝煙火/煙花物語.webp", slug: "firework-story", videoUrl: "https://youtu.be/zOaS1sDncSM" },
  { id: "b100-012", name: "一代佳人", categoryId: "box-100", quantity: "26發", price: 291, image: "/100元以上盒裝煙火/一代佳人.webp", slug: "beauty-generation", videoUrl: "https://youtu.be/C5ma2E4X_fU" },

  // ═══════════════════════════════════════
  // 200元以上盒裝煙火（31 項）
  // ═══════════════════════════════════════
  { id: "b200-001", name: "200發蜂炮", categoryId: "box-200", quantity: "200發", price: 340, image: "/200元以上盒裝煙火/200發蜂炮.jpg", slug: "200-shot-beehive", videoUrl: "https://youtu.be/rcwekIlv86k" },
  { id: "b200-003", name: "風華再現", categoryId: "box-200", quantity: "20發", price: 340, image: "/200元以上盒裝煙火/風華再現.jpg", slug: "elegance-reborn", videoUrl: "https://youtu.be/vGRBYgNeJPQ" },
  { id: "b200-004", name: "金燦燦", categoryId: "box-200", quantity: "25發", price: 355.3, image: "/200元以上盒裝煙火/金燦燦.webp", slug: "golden-shine", videoUrl: "https://youtu.be/_BzAIu8gbmc" },
  { id: "b200-005", name: "雷霆萬鈞", categoryId: "box-200", quantity: "20發", price: 355, image: "/200元以上盒裝煙火/雷霆萬鈞.jpg", slug: "thunderbolt", videoUrl: "https://youtu.be/SuxCfpwKuqM" },
  { id: "b200-006", name: "千里傳音", categoryId: "box-200", quantity: "16發", price: 355, image: "/200元以上盒裝煙火/千里傳音.jpg", slug: "thousand-miles", videoUrl: "https://youtu.be/gj5ddSuRbhk" },
  { id: "b200-008", name: "嚦咕嚦咕", categoryId: "box-200", quantity: "16發", price: 358.7, image: "/200元以上盒裝煙火/嚦咕嚦咕.jpg", slug: "li-gu-li-gu", videoUrl: "https://youtu.be/OYNXS3CVJxE" },
  { id: "b200-009", name: "金樂神", categoryId: "box-200", quantity: "25發", price: 366, image: "/200元以上盒裝煙火/金樂神.jpg", slug: "golden-god", videoUrl: "https://youtu.be/h71rczIb3BM" },
  { id: "b200-010", name: "金威風", categoryId: "box-200", quantity: "18發", price: 384.2, image: "/200元以上盒裝煙火/金威風.jpg", slug: "golden-majesty", videoUrl: "https://youtu.be/I7oCpNgNpks" },
  { id: "b200-013", name: "浪漫花園-A", categoryId: "box-200", quantity: "25發", price: 405, image: "/200元以上盒裝煙火/浪漫花園-A.jpg", slug: "romantic-garden-a", videoUrl: "https://youtu.be/3Nf_plK-j5I" },
  { id: "b200-014", name: "大富翁", categoryId: "box-200", quantity: "25發", price: 408, image: "/200元以上盒裝煙火/大富翁.jpg", slug: "monopoly", videoUrl: "https://youtu.be/DJpy6z8BrOc" },
  { id: "b200-015", name: "大亂鬥", categoryId: "box-200", quantity: "40發", price: 437, image: "/200元以上盒裝煙火/大亂鬥.jpg", slug: "big-brawl", videoUrl: "https://youtu.be/xD86BrM3nqA" },
  { id: "b200-016", name: "花火妖姬", categoryId: "box-200", quantity: "42發", price: 437, image: "/200元以上盒裝煙火/花火妖姬.jpg", slug: "firework-enchantress", videoUrl: "https://youtu.be/Vb14X6FZ454" },
  { id: "b200-018", name: "夢幻星河", categoryId: "box-200", quantity: "25發", price: 483, image: "/200元以上盒裝煙火/夢幻星河.webp", slug: "fantasy-galaxy", videoUrl: "https://youtu.be/WHmD_9o4lPU" },
  { id: "b200-020", name: "牡丹花-D", categoryId: "box-200", quantity: "16發", price: 485, image: "/300元以上盒裝煙火/牡丹花-D.jpg", slug: "peony-d", videoUrl: "https://youtu.be/0zMvtvHKCIs" },
  { id: "b200-021", name: "扇舞-1", categoryId: "box-200", quantity: "16發", price: 485, image: "/300元以上盒裝煙火/扇舞-1.jpg", slug: "fan-dance-1", videoUrl: "https://youtu.be/xwJf-syfR1g" },
  { id: "b200-022", name: "牡丹花-C", categoryId: "box-200", quantity: "16發", price: 485, image: "/300元以上盒裝煙火/牡丹花-C.jpg", slug: "peony-c", videoUrl: "https://youtu.be/gvQP8z7PN7g" },
  { id: "b200-023", name: "扇舞-2", categoryId: "box-200", quantity: "16發", price: 485, image: "/300元以上盒裝煙火/扇舞-2.jpg", slug: "fan-dance-2", videoUrl: "https://youtu.be/q_c1oc_FhA0" },
  { id: "b200-024", name: "夏之祭-1", categoryId: "box-200", quantity: "16發", price: 485, image: "/300元以上盒裝煙火/夏之祭-1.jpg", slug: "summer-fest-1", videoUrl: "https://youtu.be/BFVrcEi80dw" },
  { id: "b200-025", name: "扇舞-3", categoryId: "box-200", quantity: "16發", price: 485, image: "/300元以上盒裝煙火/扇舞-3.jpg", slug: "fan-dance-3", videoUrl: "https://youtu.be/Nmopd6IKr40" },
  { id: "b200-026", name: "夏之祭-3", categoryId: "box-200", quantity: "16發", price: 485, image: "/300元以上盒裝煙火/夏之祭-3.jpg", slug: "summer-fest-3", videoUrl: "https://youtu.be/gwwdmbRHG48" },
  { id: "b200-027", name: "扇舞-4", categoryId: "box-200", quantity: "16發", price: 485, image: "/300元以上盒裝煙火/扇舞-4.jpg", slug: "fan-dance-4", videoUrl: "https://youtu.be/AJNjaQXqlOc" },
  { id: "b200-028", name: "黃金鑽", categoryId: "box-200", quantity: "16發", price: 484.5, image: "/300元以上盒裝煙火/黃金鑽.jpg", slug: "golden-diamond", videoUrl: "https://youtu.be/Z04poOx1QQo" },
  { id: "b200-029", name: "斗轉星移", categoryId: "box-200", quantity: "16發", price: 485, image: "/300元以上盒裝煙火/斗轉星移.webp", slug: "star-shift", videoUrl: "https://youtu.be/ii4DrAWpO2Y" },
  { id: "b200-030", name: "黃金鑽-1", categoryId: "box-200", quantity: "15發", price: 495, image: "/300元以上盒裝煙火/黃金鑽-1.jpg", slug: "golden-diamond-1", videoUrl: "https://youtu.be/b21RyTqW9Fo" },
  { id: "b200-031", name: "彩烽", categoryId: "box-200", quantity: "49發", price: 502, image: "/300元以上盒裝煙火/彩蜂.jpg", slug: "color-beacon", videoUrl: "https://youtu.be/Y4fzrYyJNKg" },

  // ═══════════════════════════════════════
  // 300元以上盒裝煙火（35 項）
  // ═══════════════════════════════════════
  { id: "b300-001", name: "恭迎聖駕", categoryId: "box-300", quantity: "30發", price: 515, image: "/300元以上盒裝煙火/恭迎聖駕.jpg", slug: "welcome-royal", videoUrl: "https://youtu.be/4c-wZb3qE5I" },
  { id: "b300-002", name: "秋之韻-1", categoryId: "box-300", quantity: "16發", price: 517, image: "/300元以上盒裝煙火/秋之韻-1.jpg", slug: "autumn-rhyme-1", videoUrl: "https://youtu.be/b8ZFQRpCgBk" },
  { id: "b300-003", name: "秋之韻-2", categoryId: "box-300", quantity: "16發", price: 517, image: "/300元以上盒裝煙火/秋之韻-2.jpg", slug: "autumn-rhyme-2", videoUrl: "https://youtu.be/ADvOpCcO94Q" },
  { id: "b300-005", name: "秋之韻-4", categoryId: "box-300", quantity: "16發", price: 516.8, image: "/300元以上盒裝煙火/秋之韻-4.jpg", slug: "autumn-rhyme-4", videoUrl: "https://youtu.be/_Yeiq36pFAE" },
  { id: "b300-006", name: "牡丹花-B", categoryId: "box-300", quantity: "16發", price: 517, image: "/300元以上盒裝煙火/牡丹花-B.jpg", slug: "peony-b", videoUrl: "https://youtu.be/8J9YuK5ZMqo" },
  { id: "b300-007", name: "牡丹花-A", categoryId: "box-300", quantity: "16發", price: 516.8, image: "/300元以上盒裝煙火/牡丹花-A.jpg", slug: "peony-a", videoUrl: "https://youtu.be/BoLC47JaCpc" },
  { id: "b300-008", name: "馬戲團", categoryId: "box-300", quantity: "30發", price: 534, image: "/300元以上盒裝煙火/馬戲團.jpg", slug: "circus", videoUrl: "https://youtu.be/3yHDW9s0x7o" },
  { id: "b300-009", name: "大牌", categoryId: "box-300", quantity: "63發", price: 534, image: "/300元以上盒裝煙火/大牌.jpg", slug: "big-brand", videoUrl: "https://youtu.be/vhswLIjhYq8" },
  { id: "b300-010", name: "水舞間", categoryId: "box-300", quantity: "12發", price: 537, image: "/300元以上盒裝煙火/水舞間.jpg", slug: "water-dance", videoUrl: "https://youtu.be/PSG_s129hz8" },
  { id: "b300-011", name: "炫麗", categoryId: "box-300", quantity: "12發", price: 539, image: "/300元以上盒裝煙火/炫麗.jpg", slug: "dazzling", videoUrl: "https://youtu.be/sm4kGQo_DiY" },
  { id: "b300-012", name: "冬之戀", categoryId: "box-300", quantity: "18發", price: 581, image: "/300元以上盒裝煙火/冬之戀.jpg", slug: "winter-love", videoUrl: "https://youtu.be/GPxemhKW4RY" },
  { id: "b300-013", name: "舞動奇跡", categoryId: "box-300", quantity: "33發", price: 581, image: "/300元以上盒裝煙火/舞動奇跡.jpg", slug: "dance-miracle", videoUrl: "https://youtu.be/gHgQcHSEk-0" },
  { id: "b300-014", name: "如虎添翼-D", categoryId: "box-300", quantity: "25發", price: 598.4, image: "/300元以上盒裝煙火/如虎添翼-D.webp", slug: "tiger-wings-d", videoUrl: "https://youtu.be/Ng12yAd_JMA" },
  { id: "b300-015", name: "如虎添翼", categoryId: "box-300", quantity: "25發", price: 598, image: "/300元以上盒裝煙火/如虎添翼.webp", slug: "tiger-wings", videoUrl: "https://youtu.be/fpLvut8q2i8" },
  { id: "b300-016", name: "狼叫-炸花", categoryId: "box-300", quantity: "12發", price: 598, image: "/300元以上盒裝煙火/狼叫-炸花.jpg", slug: "wolf-howl-blast", videoUrl: "https://youtu.be/AE0kIOfo_30" },
  { id: "b300-017", name: "追風-3", categoryId: "box-300", quantity: "16發", price: 614, image: "/300元以上盒裝煙火/追風-3.jpg", slug: "wind-chaser-3", videoUrl: "https://youtu.be/tx5GhgPDYk0" },
  { id: "b300-018", name: "追風-2", categoryId: "box-300", quantity: "16發", price: 614, image: "/300元以上盒裝煙火/追風-2.jpg", slug: "wind-chaser-2", videoUrl: "https://youtu.be/uNxeQ5cQSro" },
  { id: "b300-019", name: "摘星夢", categoryId: "box-300", quantity: "18發", price: 614, image: "/300元以上盒裝煙火/摘星夢.webp", slug: "star-picker", videoUrl: "https://youtu.be/61hbyYS54Vk" },
  { id: "b300-021", name: "追風-1", categoryId: "box-300", quantity: "16發", price: 614, image: "/300元以上盒裝煙火/追風-1.webp", slug: "wind-chaser-1", videoUrl: "https://youtu.be/-MEUQ1c9V2Q" },
  { id: "b300-022", name: "火焰之舞-4", categoryId: "box-300", quantity: "10發", price: 613.7, image: "/300元以上盒裝煙火/火焰之舞-4.jpg", slug: "flame-dance-4", videoUrl: "https://youtu.be/f2GCmTVmIWw" },
  { id: "b300-023", name: "火焰之舞-1", categoryId: "box-300", quantity: "10發", price: 614, image: "/300元以上盒裝煙火/火焰之舞-1.jpg", slug: "flame-dance-1", videoUrl: "https://youtu.be/V8aSe8rHi2M" },
  { id: "b300-024", name: "追風-4", categoryId: "box-300", quantity: "16發", price: 613.7, image: "/300元以上盒裝煙火/追風-4.jpg", slug: "wind-chaser-4", videoUrl: "https://youtu.be/B_yzjZULxrQ" },
  { id: "b300-026", name: "超級巨星", categoryId: "box-300", quantity: "20發", price: 615, image: "/300元以上盒裝煙火/超級巨星.webp", slug: "superstar", videoUrl: "https://youtu.be/R2lBMZMfLZM" },
  { id: "b300-027", name: "焰火大師-0", categoryId: "box-300", quantity: "20發", price: 615, image: "/300元以上盒裝煙火/焰火大師-0.webp", slug: "firework-master-0", videoUrl: "https://youtu.be/NnYtEtkasTI" },
  { id: "b300-028", name: "大滿貫", categoryId: "box-300", quantity: "23發", price: 638, image: "/400元以上盒裝煙火/大滿貫.webp", slug: "grand-slam", videoUrl: "https://youtu.be/r6LZaP4uboI" },
  { id: "b300-029", name: "天王-1", categoryId: "box-300", quantity: "10發", price: 646, image: "/400元以上盒裝煙火/天王-1.jpg", slug: "heavenly-king-1", videoUrl: "https://youtu.be/FtC_HmOTsoc" },
  { id: "b300-030", name: "天王-2", categoryId: "box-300", quantity: "10發", price: 646, image: "/400元以上盒裝煙火/天王-2.jpg", slug: "heavenly-king-2", videoUrl: "https://youtu.be/DTNH-qwCLbY" },
  { id: "b300-031", name: "火焰之舞-3", categoryId: "box-300", quantity: "10發", price: 648, image: "/400元以上盒裝煙火/火焰之舞-3.jpg", slug: "flame-dance-3", videoUrl: "https://youtu.be/aeQx0K1zghE" },
  { id: "b300-032", name: "火焰之舞-2", categoryId: "box-300", quantity: "10發", price: 648, image: "/400元以上盒裝煙火/火焰之舞-2.jpg", slug: "flame-dance-2", videoUrl: "https://youtu.be/8ggyXOYqCNs" },
  { id: "b300-034", name: "眉飛色舞C", categoryId: "box-300", quantity: "20發", price: 663, image: "/400元以上盒裝煙火/眉飛色舞C.jpg", slug: "eyebrow-dance-c", videoUrl: "https://youtu.be/hzy5QhPEtEk" },

  // ═══════════════════════════════════════
  // 400元以上盒裝煙火（32 項）
  // ═══════════════════════════════════════
  { id: "b400-001", name: "天女散花-D", categoryId: "box-400", quantity: "30發", price: 683, image: "/400元以上盒裝煙火/天女散花-D.webp", slug: "celestial-flowers-d", videoUrl: "https://youtu.be/jpa83qPkzw8" },
  { id: "b400-002", name: "天女散花", categoryId: "box-400", quantity: "30發", price: 683, image: "/400元以上盒裝煙火/天女散花.webp", slug: "celestial-flowers", videoUrl: "https://youtu.be/2lCOWIxRjiw" },
  { id: "b400-004", name: "五花八門", categoryId: "box-400", quantity: "28發", price: 685, image: "/400元以上盒裝煙火/五花八門.webp", slug: "variety-show", videoUrl: "https://youtu.be/YfCtBLr2mTw" },
  { id: "b400-005", name: "冠中冠-1", categoryId: "box-400", quantity: "10發", price: 726, image: "/400元以上盒裝煙火/冠中冠-1.jpg", slug: "crown-of-crowns-1", videoUrl: "https://youtu.be/vcYlzC-q_58" },
  { id: "b400-006", name: "大無敵", categoryId: "box-400", quantity: "12發", price: 726, image: "/400元以上盒裝煙火/大無敵.jpg", slug: "invincible", videoUrl: "https://youtu.be/BJ9U0-Nwk7A" },
  { id: "b400-007", name: "王炸-1", categoryId: "box-400", quantity: "12發", price: 728, image: "/400元以上盒裝煙火/王炸-1.jpg", slug: "king-bomb-1", videoUrl: "https://youtu.be/0fs23kS6ssk" },
  { id: "b400-008", name: "世紀花園-D", categoryId: "box-400", quantity: "25發", price: 728, image: "/400元以上盒裝煙火/世紀花園-D.jpg", slug: "century-garden-d", videoUrl: "https://youtu.be/Z3Xj59tJciI" },
  { id: "b400-009", name: "世紀花園-C", categoryId: "box-400", quantity: "25發", price: 728, image: "/400元以上盒裝煙火/世紀花園-C.jpg", slug: "century-garden-c", videoUrl: "https://youtu.be/iyZJ0cmCFRs" },
  { id: "b400-010", name: "王炸-5", categoryId: "box-400", quantity: "12發", price: 728, image: "/400元以上盒裝煙火/王炸-5.jpg", slug: "king-bomb-5", videoUrl: "https://youtu.be/rEccOdBgtPg" },
  { id: "b400-011", name: "王炸-2", categoryId: "box-400", quantity: "12發", price: 728, image: "/400元以上盒裝煙火/王炸-2.jpg", slug: "king-bomb-2", videoUrl: "https://youtu.be/EFVvvuzshHQ" },
  { id: "b400-012", name: "世紀花園-B", categoryId: "box-400", quantity: "25發", price: 728, image: "/400元以上盒裝煙火/世紀花園-B.jpg", slug: "century-garden-b", videoUrl: "https://youtu.be/1GLQIT7Bqdc" },
  { id: "b400-013", name: "世紀花園-A", categoryId: "box-400", quantity: "25發", price: 728, image: "/400元以上盒裝煙火/世紀花園-A.jpg", slug: "century-garden-a", videoUrl: "https://youtu.be/3Nf_plK-j5I" },
  { id: "b400-014", name: "夜明珠", categoryId: "box-400", quantity: "30發", price: 727.6, image: "/400元以上盒裝煙火/夜明珠.jpg", slug: "night-pearl", videoUrl: "https://youtu.be/Q6oV3-HW7KE" },
  { id: "b400-015", name: "迎賓禮炮-1", categoryId: "box-400", quantity: "16發", price: 750, image: "/400元以上盒裝煙火/迎賓禮炮-1.jpg", slug: "welcome-salute-1", videoUrl: "https://youtu.be/EOQi6N6BlmY" },
  { id: "b400-016", name: "迎賓禮炮-3", categoryId: "box-400", quantity: "16發", price: 750, image: "/400元以上盒裝煙火/迎賓禮炮-3.jpg", slug: "welcome-salute-3", videoUrl: "https://youtu.be/DpwzberJyYA" },
  { id: "b400-017", name: "八面玲瓏-B", categoryId: "box-400", quantity: "10發", price: 775, image: "/400元以上盒裝煙火/八面玲瓏-B.jpg", slug: "octagon-b", videoUrl: "https://youtu.be/Ua8cOdZeYSk" },
  { id: "b400-018", name: "櫻花亂舞", categoryId: "box-400", quantity: "54發", price: 775, image: "/400元以上盒裝煙火/櫻花亂舞.jpg", slug: "cherry-blossom-dance", videoUrl: "https://youtu.be/19nICAOX9jA" },
  { id: "b400-019", name: "海派甜心", categoryId: "box-400", quantity: "50發", price: 799, image: "/400元以上盒裝煙火/海派甜心.jpg", slug: "shanghai-sweetheart", videoUrl: "https://youtu.be/t47pgMY0pBg" },
  { id: "b400-020", name: "空中瀑布", categoryId: "box-400", quantity: "16發", price: 808, image: "/400元以上盒裝煙火/空中瀑布.jpg", slug: "sky-waterfall", videoUrl: "https://youtu.be/cyWY1kbATlY" },
  { id: "b400-021", name: "快樂時空-D", categoryId: "box-400", quantity: "12發", price: 833, image: "/400元以上盒裝煙火/快樂時空-D.webp", slug: "happy-time-d", videoUrl: "https://youtu.be/wQGK0j2xgkY" },
  { id: "b400-022", name: "快樂時空-A", categoryId: "box-400", quantity: "12發", price: 833, image: "/400元以上盒裝煙火/快樂時空-A.webp", slug: "happy-time-a", videoUrl: "https://youtu.be/rs1lxLveXYQ" },
  { id: "b400-023", name: "天后", categoryId: "box-400", quantity: "12發", price: 840, image: "/400元以上盒裝煙火/天后.jpg", slug: "queen", videoUrl: "https://youtu.be/FjsixHin_ds" },
  { id: "b400-024", name: "歡樂頌", categoryId: "box-400", quantity: "20發", price: 887, image: "/400元以上盒裝煙火/歡樂頌.jpg", slug: "ode-to-joy", videoUrl: "https://youtu.be/Dh_CoPZgT10" },
  { id: "b400-025", name: "春之歌", categoryId: "box-400", quantity: "45發", price: 889, image: "/400元以上盒裝煙火/春之歌.webp", slug: "spring-song", videoUrl: "https://youtu.be/HtOCte4baps" },
  { id: "b400-026", name: "皇家盛焰15號", categoryId: "box-400", quantity: "15發", price: 1000, image: "/400元以上盒裝煙火/皇家盛焰15號.jpg", slug: "royal-flame-15", videoUrl: "https://youtu.be/7j0SFPxkL4E" },
  { id: "b400-027", name: "皇家盛焰21號", categoryId: "box-400", quantity: "15發", price: 1000, image: "/400元以上盒裝煙火/皇家盛焰21號.jpg", slug: "royal-flame-21", videoUrl: "https://youtu.be/f_8M84seEhc" },
  { id: "b400-028", name: "皇家盛焰4號", categoryId: "box-400", quantity: "15發", price: 1000, image: "/400元以上盒裝煙火/皇家盛焰4號.jpg", slug: "royal-flame-4", videoUrl: "https://youtu.be/54cWbNldNhM" },
  { id: "b400-029", name: "皇家盛焰18號", categoryId: "box-400", quantity: "15發", price: 1000, image: "/400元以上盒裝煙火/皇家盛焰18號.jpg", slug: "royal-flame-18", videoUrl: "https://youtu.be/u9a2LEeaJTs" },
  { id: "b400-031", name: "皇家盛焰3號", categoryId: "box-400", quantity: "15發", price: 1000, image: "/400元以上盒裝煙火/皇家盛焰3號煙火.jpg", slug: "royal-flame-3", videoUrl: "https://youtu.be/hh485wBf-zY" },
  { id: "b400-032", name: "大將之風二代-8", categoryId: "box-400", quantity: "12發", price: 1166, image: "/400元以上盒裝煙火/大將之風二代-8.jpg", slug: "general-style-v2-8", videoUrl: "https://youtu.be/jk_RMSEb15k" },

  // ═══════════════════════════════════════
  // 日間彩煙／雷／彩帶（16 項）
  // ═══════════════════════════════════════
  { id: "dt-001", name: "尺炮", categoryId: "daytime", quantity: "1入", price: 69, image: "/日間彩煙／雷／彩帶/尺炮.jpg", slug: "dt-ruler-cannon" },
  { id: "dt-002", name: "100發蜂炮", categoryId: "daytime", quantity: "1入", price: 100, image: "/日間彩煙／雷／彩帶/100發蜂炮.jpg", slug: "dt-100-beehive" },
  { id: "dt-003", name: "藍寶石1號 亮上雷", categoryId: "daytime", quantity: "1入", price: 220, image: "/日間彩煙／雷／彩帶/藍寶石1號 齊上雷.jpg", slug: "sapphire-1-thunder" },
  { id: "dt-004", name: "25發蜂炮", categoryId: "daytime", quantity: "1入", price: 30, image: "/日間彩煙／雷／彩帶/25發蜂炮.webp", slug: "dt-25-beehive" },
  { id: "dt-005", name: "保庇系列－80公分金彩紙彩帶", categoryId: "daytime", quantity: "1入", price: 600, image: "/日間彩煙／雷／彩帶/保庇系列-80公分全彩紙彩帶(10支).jpg", slug: "bao-bi-80cm-confetti" },
  { id: "dt-006", name: "藍寶石2號 點射雷", categoryId: "daytime", quantity: "1入", price: 220, image: "/日間彩煙／雷／彩帶/藍寶石2號 點射雷.jpg", slug: "sapphire-2-thunder" },
  { id: "dt-007", name: "狼煙聲上藍彩煙雷", categoryId: "daytime", quantity: "1入", price: 210, image: "/日間彩煙／雷／彩帶/狼煙齊上藍彩煙雷.jpg", slug: "wolf-smoke-blue" },
  { id: "dt-008", name: "狼煙聲上紅彩煙雷", categoryId: "daytime", quantity: "1入", price: 210, image: "/日間彩煙／雷／彩帶/狼煙齊上紅彩煙雷.jpg", slug: "wolf-smoke-red" },
  { id: "dt-009", name: "狼煙聲上紫彩煙雷", categoryId: "daytime", quantity: "1入", price: 210, image: "/日間彩煙／雷／彩帶/狼煙齊上紫彩煙雷.jpg", slug: "wolf-smoke-purple" },
  { id: "dt-010", name: "四雷", categoryId: "daytime", quantity: "1入", price: 75, image: "/日間彩煙／雷／彩帶/四雷.webp", slug: "four-thunder" },
  { id: "dt-011", name: "七彩霓虹", categoryId: "daytime", quantity: "1入", price: 80, image: "/日間彩煙／雷／彩帶/七彩霓虹.jpg", slug: "rainbow-neon" },
  { id: "dt-012", name: "200發蜂炮", categoryId: "daytime", quantity: "1入", price: 200, image: "/日間彩煙／雷／彩帶/200發蜂炮.jpg", slug: "dt-200-beehive" },
  { id: "dt-013", name: "彩煙扇形 紫色調色盤", categoryId: "daytime", quantity: "1入", price: 420, image: "/日間彩煙／雷／彩帶/彩煙扇形 紫色調色盤.webp", slug: "smoke-fan-purple" },
  { id: "dt-014", name: "狼煙5色一組（5盒）", categoryId: "daytime", quantity: "5盒", price: 1050, image: "/日間彩煙／雷／彩帶/狼煙5色一組(5盒).jpg", slug: "wolf-smoke-5-color-set" },
  { id: "dt-015", name: "彩煙扇形 藍色調色盤", categoryId: "daytime", quantity: "1入", price: 420, image: "/日間彩煙／雷／彩帶/彩煙扇形 藍色調色盤.webp", slug: "smoke-fan-blue" },
  { id: "dt-016", name: "彩煙扇形 綠色調色盤", categoryId: "daytime", quantity: "1入", price: 420, image: "/日間彩煙／雷／彩帶/彩煙扇形 綠色調色盤.webp", slug: "smoke-fan-green" },

  // ═══════════════════════════════════════
  // 吐珠升空類煙火批發（7 項真實商品）
  // ═══════════════════════════════════════
  { id: "pl-001", name: "2花-雙響炮", categoryId: "pearl", quantity: "1支", price: 107, image: "/吐珠升空類煙火批發/2花-雙響炮.jpg", slug: "double-flower-cannon", description: "雙響炮吐珠煙火，兩段式升空綻放效果。", notes: "請在空曠處使用，注意升空方向，遠離易燃物品。", videoUrl: "https://youtu.be/xO3jZ3qa9nU" },
  { id: "pl-002", name: "不吐不快（大吐珠炸花）", categoryId: "pearl", quantity: "10支", price: 502, image: "/吐珠升空類煙火批發/不吐不快(大吐珠炸花).jpg", slug: "big-pearl-blast", description: "大型吐珠炸花，10支裝，珠彈升空後炸開綻放，效果震撼。", notes: "請在空曠處使用，注意升空方向，建議專業人員操作。", videoUrl: "https://youtu.be/Zh4te1mWiJ4" },
  { id: "pl-003", name: "祥龍20發吐珠", categoryId: "pearl", quantity: "12支", price: 226, image: "/吐珠升空類煙火批發/祥龍20發吐珠.jpg", slug: "dragon-20-pearl", description: "祥龍系列，每支20發吐珠連射，12支批發裝。", notes: "請在空曠處使用，注意升空方向。", videoUrl: "https://youtu.be/6DWW8NmUdYA" },
  { id: "pl-004", name: "双泡泡", categoryId: "pearl", quantity: "1支", price: 82, image: "/吐珠升空類煙火批發/双泡泡.jpg", slug: "double-bubble", description: "双泡泡吐珠煙火，獨特泡泡狀升空效果。", notes: "請在空曠處使用，注意升空方向。", videoUrl: "https://youtu.be/Hg4Iget3zKE" },
  { id: "pl-005", name: "機器戰警二代", categoryId: "pearl", quantity: "1盒", price: 734, image: "/吐珠升空類煙火批發/機器戰警二代.jpg", slug: "robocop-v2", description: "機器戰警二代，高規格吐珠煙火，多發連射效果驚人。", notes: "請在空曠處使用，注意升空方向，建議專業人員操作。", videoUrl: "https://youtu.be/7yknz6wyXpA" },
  { id: "pl-006", name: "彩虹吐珠", categoryId: "pearl", quantity: "12支", price: 226, image: "/吐珠升空類煙火批發/彩虹吐珠.jpg", slug: "rainbow-pearl", description: "彩虹色吐珠煙火，12支批發裝，多色交替升空。", notes: "請在空曠處使用，注意升空方向。", videoUrl: "https://youtu.be/gCXpoqJNbwY" },
  { id: "pl-007", name: "蘋果小高空", categoryId: "pearl", quantity: "1支", price: 82, image: "/吐珠升空類煙火批發/蘋果小高空.webp", slug: "apple-high-altitude", description: "蘋果造型小高空吐珠煙火，升空高度佳。", notes: "請在空曠處使用，注意升空方向。", videoUrl: "https://youtu.be/7UxuvtUGk9M" },

  // ═══════════════════════════════════════
  // 沖天炮／火箭類煙火（6 項真實商品）
  // ═══════════════════════════════════════
  { id: "rk-001", name: "風神火箭", categoryId: "rocket", quantity: "12支", price: 258, image: "/沖天炮／火箭類煙火/風神火箭.jpg", slug: "wind-god-rocket", description: "風神系列火箭煙火，升空高度高，火花效果壯觀。", notes: "請在空曠處使用，注意發射方向，遠離易燃物品。", videoUrl: "https://youtu.be/XoO7DtN5iNU" },
  { id: "rk-003", name: "極速大火箭", categoryId: "rocket", quantity: "6支", price: 258, image: "/沖天炮／火箭類煙火/極速大火箭.jpg", slug: "extreme-speed-rocket", description: "大型火箭煙火，極速升空，爆破效果強烈。", notes: "請在空曠處使用，注意發射方向，建議專業人員操作。", videoUrl: "https://youtu.be/ScHnX9mg9K8" },
  { id: "rk-004", name: "沖仔", categoryId: "rocket", quantity: "96支", price: 153, image: "/沖天炮／火箭類煙火/沖仔(沖天炮).jpg", slug: "chong-zai-rocket", description: "經典沖仔沖天炮，96支大量批發裝，經濟實惠。", notes: "請在空曠處使用，注意發射方向。", videoUrl: "https://youtube.com/shorts/XDpffK8_UC8" },
  { id: "rk-005", name: "飛毛腿火箭", categoryId: "rocket", quantity: "12支", price: 258, image: "/沖天炮／火箭類煙火/飛毛腿火箭.jpg", slug: "scud-rocket", description: "飛毛腿系列火箭煙火，飛行軌跡長，視覺效果佳。", notes: "請在空曠處使用，注意發射方向，遠離易燃物品。", videoUrl: "https://youtu.be/Jm9myw5q7Qo" },
  { id: "rk-006", name: "霹靂笛音火箭二代", categoryId: "rocket", quantity: "96支", price: 340, image: "/沖天炮／火箭類煙火/霹靂笛音火箭二代.jpg", slug: "thunder-whistle-rocket-v2", description: "霹靂笛音火箭升級二代，升空時發出獨特笛音，效果震撼。", notes: "請在空曠處使用，注意發射方向。噪音較大，請注意周圍環境。", videoUrl: "https://youtu.be/E94SD559myI" },

  // ═══════════════════════════════════════
  // 花筒類煙火批發（18 項真實商品）
  // ═══════════════════════════════════════
  { id: "ft-001", name: "小花筒", categoryId: "fountain", quantity: "24支", price: 264, image: "/花筒類煙火批發/小花筒.jpg", slug: "small-fountain", description: "經典小花筒，24支批發裝，噴花效果穩定。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/O31iNs8N3ug" },
  { id: "ft-002", name: "歡樂派對（兩段式噴花）", categoryId: "fountain", quantity: "10支", price: 298, image: "/花筒類煙火批發/歡樂派對(兩段式噴花).jpg", slug: "party-two-stage", description: "兩段式噴花效果，適合派對慶典使用。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/BVICdkTQ-VI" },
  { id: "ft-003", name: "彩色勝利之花", categoryId: "fountain", quantity: "12小盒", price: 213, image: "/花筒類煙火批發/彩色勝利之花.webp", slug: "victory-flower", description: "彩色勝利之花，12小盒裝，色彩鮮艷。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/7DkUdHx2SDs" },
  { id: "ft-004", name: "四季花筒", categoryId: "fountain", quantity: "24支", price: 264, image: "/花筒類煙火批發/四季花筒.jpg", slug: "four-season-fountain", description: "四季主題花筒，24支批發裝，四種色彩變化。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/SkinuEl-4qk" },
  { id: "ft-005", name: "火樹銀花A", categoryId: "fountain", quantity: "12支", price: 298, image: "/花筒類煙火批發/火樹銀花A.jpg", slug: "silver-fire-tree-a", description: "火樹銀花系列，銀色火花如樹般綻放，效果華麗。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/fTVDv9UJ_10" },
  { id: "ft-006", name: "海浪", categoryId: "fountain", quantity: "6支", price: 275, image: "/花筒類煙火批發/海浪.jpg", slug: "ocean-wave", description: "海浪造型噴花效果，波浪狀火花起伏。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/rFf5mxgc0Fw" },
  { id: "ft-007", name: "冷光噴泉3米高30秒長", categoryId: "fountain", quantity: "5支", price: 1000, image: "/花筒類煙火批發/冷光噴泉煙火高效型3米30秒.jpg", slug: "cold-fountain-3m", description: "冷光噴泉，噴射高度達3米，持續30秒，適合舞台活動。", notes: "冷光火焰溫度較低但仍需注意安全，請預留足夠距離。", videoUrl: "https://youtu.be/vbLD6qzTiaU" },
  { id: "ft-008", name: "彩烽舞", categoryId: "fountain", quantity: "6支", price: 275, image: "/花筒類煙火批發/彩烽舞.jpg", slug: "color-beacon-dance", description: "彩色烽火舞動效果，多色交替噴射。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-009", name: "幸運花筒", categoryId: "fountain", quantity: "24支", price: 275, image: "/花筒類煙火批發/幸運花筒.jpg", slug: "lucky-fountain", description: "幸運花筒，24支批發裝，適合節慶祝福場合。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/4ZgG-iY_kJc" },
  { id: "ft-010", name: "派大星", categoryId: "fountain", quantity: "16支", price: 162, image: "/花筒類煙火批發/派大星.jpg", slug: "patrick-star", description: "派大星造型花筒，16支裝，趣味十足。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/Txi4PICbz0g" },
  { id: "ft-011", name: "浪漫噴泉", categoryId: "fountain", quantity: "6支", price: 275, image: "/花筒類煙火批發/浪漫噴泉.jpg", slug: "romantic-fountain", description: "浪漫噴泉效果，適合婚禮、告白場合。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/CaUZ6qidKds" },
  { id: "ft-012", name: "閃亮亮小花筒", categoryId: "fountain", quantity: "24支", price: 281, image: "/花筒類煙火批發/閃亮亮小花筒.jpg", slug: "shiny-small-fountain", description: "閃亮亮小花筒，24支批發裝，火花閃爍耀眼。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/_LeQZhmxc6Q" },
  { id: "ft-013", name: "萬花筒", categoryId: "fountain", quantity: "6支", price: 264, image: "/花筒類煙火批發/萬花筒.jpg", slug: "kaleidoscope", description: "萬花筒效果，多色火花旋轉綻放。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/NPo1vzOOo78" },
  { id: "ft-014", name: "小宇宙", categoryId: "fountain", quantity: "24支", price: 275, image: "/花筒類煙火批發/小宇宙.jpg", slug: "little-universe", description: "小宇宙花筒，24支批發裝，火花效果如星空。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/uIvsNiqBzn0" },
  { id: "ft-015", name: "招財樹", categoryId: "fountain", quantity: "12支", price: 274, image: "/花筒類煙火批發/招財樹.jpg", slug: "money-tree", description: "招財樹造型花筒，金色火花噴射，吉祥如意。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/488_Jzh9Aao" },
  { id: "ft-016", name: "炫酷小花筒", categoryId: "fountain", quantity: "24支", price: 264, image: "/花筒類煙火批發/炫酷小花筒.jpg", slug: "cool-small-fountain", description: "炫酷小花筒，24支批發裝，效果酷炫。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/BBsPKjEdhmA" },
  { id: "ft-017", name: "快樂噴泉", categoryId: "fountain", quantity: "6支", price: 289, image: "/花筒類煙火批發/快樂噴泉.webp", slug: "happy-fountain", description: "快樂噴泉花筒，噴花效果歡快明亮。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/J5LERFDiQo0" },
  { id: "ft-018", name: "搖錢樹", categoryId: "fountain", quantity: "12支", price: 291, image: "/花筒類煙火批發/搖錢樹12支.jpg", slug: "fortune-tree", description: "搖錢樹花筒，金色為主的華麗噴花效果。", notes: "請放置於平坦地面使用，遠離易燃物品。", videoUrl: "https://youtu.be/lTz9dgGzO1c" },

  // ═══════════════════════════════════════
  // 旋轉升空類煙火（8 項真實商品）
  // ═══════════════════════════════════════
  { id: "sn-001", name: "大彩蝶", categoryId: "spinning", quantity: "2盒，每盒6支共12支", price: 281, image: "/旋轉升空類煙火/大彩蝶.webp", slug: "big-color-butterfly", description: "大彩蝶旋轉升空煙火，旋轉後如蝴蝶般飛舞升空。", notes: "請在空曠平坦處使用，注意升空方向。", videoUrl: "https://youtu.be/kEfKtWCyEXQ" },
  { id: "sn-002", name: "兩段式彩色大水母", categoryId: "spinning", quantity: "2盒，每盒3隻共6隻", price: 247, image: "/旋轉升空類煙火/兩段式彩色大水母.jpg", slug: "two-stage-jellyfish", description: "兩段式彩色大水母，旋轉升空後展開如水母般的火花。", notes: "請在空曠平坦處使用，注意升空方向。", videoUrl: "https://youtu.be/zJIAiQMdEto" },
  { id: "sn-003", name: "彩蝶", categoryId: "spinning", quantity: "24支", price: 155, image: "/旋轉升空類煙火/彩蝶.jpg", slug: "color-butterfly", description: "彩蝶旋轉煙火，24支批發裝，輕巧旋轉升空。", notes: "請在空曠平坦處使用。", videoUrl: "https://youtu.be/U8_p4YEHprI" },
  { id: "sn-004", name: "花蝴蝶", categoryId: "spinning", quantity: "24支", price: 112, image: "/旋轉升空類煙火/花蝴蝶.jpg", slug: "flower-butterfly", description: "花蝴蝶旋轉煙火，24支批發裝，經濟實惠。", notes: "請在空曠平坦處使用。", videoUrl: "https://youtu.be/2nDRxbDRDG4" },
  { id: "sn-005", name: "大蝶飛舞", categoryId: "spinning", quantity: "12支", price: 245, image: "/旋轉升空類煙火/大蝶飛舞.jpg", slug: "big-butterfly-dance", description: "大蝶飛舞，大型旋轉升空煙火，飛舞效果壯觀。", notes: "請在空曠平坦處使用，注意升空方向。", videoUrl: "https://youtu.be/28pM9kcuaqU" },
  { id: "sn-006", name: "太空飛碟", categoryId: "spinning", quantity: "24個", price: 277, image: "/旋轉升空類煙火/太空飛碟.jpg", slug: "ufo", description: "太空飛碟造型旋轉煙火，24個批發裝，旋轉飛起效果獨特。", notes: "請在空曠平坦處使用，注意周圍安全。", videoUrl: "https://youtu.be/xkck6STc1o8" },
  { id: "sn-007", name: "魔幻水母", categoryId: "spinning", quantity: "6個", price: 201, image: "/旋轉升空類煙火/魔幻水母.jpg", slug: "magic-jellyfish", description: "魔幻水母旋轉煙火，升空後展開水母造型火花。", notes: "請在空曠平坦處使用，注意升空方向。", videoUrl: "https://youtu.be/-4ow156Qigg" },
  { id: "sn-008", name: "筋斗雲", categoryId: "spinning", quantity: "24入", price: 211, image: "/旋轉升空類煙火/筋斗雲.jpg", slug: "somersault-cloud", description: "筋斗雲旋轉升空煙火，24入批發裝，翻轉升空效果。", notes: "請在空曠平坦處使用。", videoUrl: "https://youtu.be/uEukKHMNxsg" },

  // ═══════════════════════════════════════
  // 甩炮地面類煙火批發（16 項真實商品）
  // ═══════════════════════════════════════
  { id: "gd-001", name: "調皮果", categoryId: "ground", quantity: "24個", price: 155, image: "/甩炮地面類煙火批發/調皮果.jpg", slug: "naughty-fruit", description: "調皮果地面煙火，24個裝，點燃後地面跳動綻放。", notes: "請在空曠處使用，遠離易燃物品。", videoUrl: "https://youtu.be/TQeOhtl2zGw" },
  { id: "gd-002", name: "彩色甩炮", categoryId: "ground", quantity: "24顆x12小盒", price: 136, image: "/甩炮地面類煙火批發/彩色甩炮.jpg", slug: "color-snap", description: "彩色甩炮，24顆x12小盒批發裝，摔擊即響。", notes: "請勿大量集中使用，遠離兒童。", videoUrl: "https://youtu.be/jUOPsxfub-Q" },
  { id: "gd-003", name: "鼠太郎", categoryId: "ground", quantity: "8個", price: 129, image: "/甩炮地面類煙火批發/鼠太郎.webp", slug: "mouse-taro", description: "鼠太郎地面煙火，點燃後在地面快速竄動。", notes: "請在空曠平坦處使用。", videoUrl: "https://youtu.be/-YYcjZ_eQZ0" },
  { id: "gd-004", name: "霹靂陀螺", categoryId: "ground", quantity: "12個", price: 194, image: "/甩炮地面類煙火批發/霹靂陀螺.jpg", slug: "thunder-top", description: "霹靂陀螺地面旋轉煙火，12個裝，旋轉效果強烈。", notes: "請在空曠平坦處使用。", videoUrl: "https://youtu.be/opYxnz7llR0" },
  { id: "gd-005", name: "蘋果霹靂珠", categoryId: "ground", quantity: "12小盒", price: 196, image: "/甩炮地面類煙火批發/蘋果霹靂珠.webp", slug: "apple-thunder-pearl", description: "蘋果造型霹靂珠，12小盒裝，摔擊爆響。", notes: "請勿大量集中使用，遠離兒童。", videoUrl: "https://youtu.be/aHHwMTeYFP8" },
  { id: "gd-006", name: "三響水鴛鴦", categoryId: "ground", quantity: "20小盒", price: 451, image: "/甩炮地面類煙火批發/三響水鴛鴦jpg.jpg", slug: "triple-mandarin-duck", description: "三響水鴛鴦，20小盒批發裝，三段式連響效果。", notes: "請在空曠處使用，點燃後迅速遠離。", videoUrl: "https://youtu.be/ci3Ir8CAPPo" },
  { id: "gd-007", name: "芭蕾舞", categoryId: "ground", quantity: "24個", price: 97, image: "/甩炮地面類煙火批發/芭蕾舞.jpg", slug: "ballet", description: "芭蕾舞地面旋轉煙火，24個裝，優雅旋轉效果。", notes: "請在空曠平坦處使用。", videoUrl: "https://youtu.be/ULOKvAh1C7M" },
  { id: "gd-008", name: "水鴛鴦+", categoryId: "ground", quantity: "12小盒", price: 291, image: "/甩炮地面類煙火批發/水鴛鴦+.webp", slug: "mandarin-duck-plus", description: "水鴛鴦升級版，12小盒批發裝，效果加強。", notes: "請在空曠處使用，點燃後迅速遠離。", videoUrl: "https://youtu.be/cwC-a6XnYCo" },
  { id: "gd-009", name: "連響珠2", categoryId: "ground", quantity: "12小盒", price: 196, image: "/甩炮地面類煙火批發/連響珠2.jpg", slug: "chain-pearl-2", description: "連響珠二代，12小盒裝，連續爆響效果。", notes: "請在空曠處使用。", videoUrl: "https://youtu.be/3VnU1UTfxY8" },
  { id: "gd-010", name: "小蝌蚪甩炮", categoryId: "ground", quantity: "24顆x12小盒", price: 122, image: "/甩炮地面類煙火批發/小蝌蚪甩炮.webp", slug: "tadpole-snap", description: "小蝌蚪甩炮，24顆x12小盒，摔擊即響，經濟實惠。", notes: "請勿大量集中使用，遠離兒童。", videoUrl: "https://youtu.be/WpDm7KCZIvE" },
  { id: "gd-011", name: "蝌蚪大甩炮", categoryId: "ground", quantity: "15顆x12小盒", price: 139, image: "/甩炮地面類煙火批發/蝌蚪大甩炮.webp", slug: "big-tadpole-snap", description: "蝌蚪大甩炮，加大版，15顆x12小盒，聲響更強。", notes: "請勿大量集中使用，遠離兒童。", videoUrl: "https://youtu.be/eBnpbt2_d1w" },
  { id: "gd-012", name: "彩煙芭樂", categoryId: "ground", quantity: "6支", price: 355, image: "/甩炮地面類煙火批發/彩煙芭樂.webp", slug: "color-smoke-guava", description: "彩煙芭樂，6支裝，點燃後釋放彩色煙霧。", notes: "僅限戶外使用，注意風向。" },
  { id: "gd-013", name: "便便慧星", categoryId: "ground", quantity: "8個", price: 213, image: "/甩炮地面類煙火批發/便便慧星.webp", slug: "poop-comet", description: "便便慧星趣味地面煙火，8個裝，造型趣味。", notes: "請在空曠處使用。", videoUrl: "https://youtu.be/oTNx9LkhpYY" },
  { id: "gd-014", name: "魔幻陀螺", categoryId: "ground", quantity: "12個", price: 211, image: "/甩炮地面類煙火批發/魔幻陀螺.jpg", slug: "magic-top", description: "魔幻陀螺地面旋轉煙火，12個裝，旋轉效果絢麗。", notes: "請在空曠平坦處使用。", videoUrl: "https://youtu.be/xMvczs076l0" },
  { id: "gd-015", name: "搗蛋", categoryId: "ground", quantity: "12支", price: 136, image: "/甩炮地面類煙火批發/搗蛋.jpg", slug: "mischief", description: "搗蛋地面煙火，12支裝，趣味十足。", notes: "請在空曠處使用。", videoUrl: "https://youtu.be/Nadh5U4iaqg" },
  { id: "gd-016", name: "霹靂小丸子", categoryId: "ground", quantity: "12小盒", price: 196, image: "/甩炮地面類煙火批發/霹靂小丸子.jpg", slug: "thunder-maruko", description: "霹靂小丸子，12小盒批發裝，小巧爆響效果。", notes: "請勿大量集中使用，遠離兒童。", videoUrl: "https://youtu.be/kEfKtWCyEXQ" },

  // ═══════════════════════════════════════
  // 廟會煙火批發專區（11 項真實商品）
  // ═══════════════════════════════════════
  { id: "tp-001", name: "尺炮", categoryId: "temple", quantity: "1入", price: 117.3, image: "/廟會煙火批發專區/尺炮.jpg", slug: "ruler-cannon", description: "傳統尺炮，廟會遶境必備品項。", notes: "需專業人員施放，請事先申請相關許可。噪音極大。", videoUrl: "https://youtu.be/2y6zljqwRVY" },
  { id: "tp-003", name: "20萬頭炮", categoryId: "temple", quantity: "1入", price: 119, image: "/廟會煙火批發專區/20萬頭炮.jpg", slug: "200k-firecracker", description: "20萬頭連環炮，廟會慶典基本款。", notes: "需專業人員施放，請事先申請相關許可。噪音極大。", videoUrl: "https://youtu.be/HvPJYNpv2k0" },
  { id: "tp-005", name: "50萬頭炮", categoryId: "temple", quantity: "1入", price: 204, image: "/廟會煙火批發專區/50萬頭炮.jpg", slug: "500k-firecracker", description: "50萬頭連環炮，聲勢浩大，適合大型廟會。", notes: "需專業人員施放，請事先申請相關許可。噪音極大。", videoUrl: "https://youtu.be/5gHZhe__Fa0" },
  { id: "tp-006", name: "100萬頭炮", categoryId: "temple", quantity: "1入", price: 408, image: "/廟會煙火批發專區/100萬頭炮.jpg", slug: "1m-firecracker", description: "100萬頭連環炮，最高規格，持續時間極長，氣勢驚人。", notes: "需專業人員施放，請事先申請相關許可。噪音極大，請預留安全距離。", videoUrl: "https://youtu.be/bReMFSrB-rk" },
  { id: "tp-007", name: "環保炮100公分", categoryId: "temple", quantity: "1入", price: 85, image: "/廟會煙火批發專區/環保炮100公分.jpg", slug: "eco-cannon-100cm", description: "環保炮100公分，低煙環保設計。", notes: "需專業人員施放，請事先申請相關許可。", videoUrl: "https://youtu.be/9uMpYTTW_uE" },
  { id: "tp-008", name: "環保炮200公分", categoryId: "temple", quantity: "1入", price: 212.5, image: "/廟會煙火批發專區/環保炮200公分.jpg", slug: "eco-cannon-200cm", description: "環保炮200公分，低煙環保設計，適合中型場地。", notes: "需專業人員施放，請事先申請相關許可。", videoUrl: "https://youtu.be/9uMpYTTW_uE" },
  { id: "tp-009", name: "環保炮300公分", categoryId: "temple", quantity: "1入", price: 255, image: "/廟會煙火批發專區/環保炮300公分.jpg", slug: "eco-cannon-300cm", description: "環保炮300公分，低煙環保設計。", notes: "需專業人員施放，請事先申請相關許可。", videoUrl: "https://youtu.be/9uMpYTTW_uE" },
  { id: "tp-010", name: "環保炮500公分", categoryId: "temple", quantity: "1入", price: 425, image: "/廟會煙火批發專區/環保炮500公分.jpg", slug: "eco-cannon-500cm", description: "環保炮500公分，低煙環保設計，適合大型場地。", notes: "需專業人員施放，請事先申請相關許可。", videoUrl: "https://youtu.be/9uMpYTTW_uE" },
  { id: "tp-011", name: "環保炮1000公分", categoryId: "temple", quantity: "1入", price: 544, image: "/廟會煙火批發專區/環保炮1000公分.jpg", slug: "eco-cannon-1000cm", description: "環保炮1000公分，最大規格環保炮，適合大型廟會慶典。", notes: "需專業人員施放，請事先申請相關許可。請預留足夠安全距離。", videoUrl: "https://youtu.be/cQ_l74kqvzE" },
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((c) => c.id === categoryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
