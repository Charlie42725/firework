import { Category, Product } from "./types";

export const categories: Category[] = [
  { id: "sparklers", name: "仙女棒手持煙火", slug: "sparklers", productCount: 22 },
  { id: "box-50", name: "50元以上盒裝煙火", slug: "box-50", productCount: 6 },
  { id: "box-100", name: "100元以上盒裝煙火", slug: "box-100", productCount: 6 },
  { id: "box-200", name: "200元以上盒裝煙火", slug: "box-200", productCount: 5 },
  { id: "box-300", name: "300元以上盒裝煙火", slug: "box-300", productCount: 4 },
  { id: "box-400", name: "400元以上盒裝煙火", slug: "box-400", productCount: 4 },
  { id: "daytime", name: "日間彩煙／雷／彩帶", slug: "daytime", productCount: 6 },
  { id: "pearl", name: "吐珠升空類煙火批發", slug: "pearl", productCount: 10 },
  { id: "rocket", name: "沖天炮／火箭類煙火", slug: "rocket", productCount: 6 },
  { id: "fountain", name: "花筒類煙火批發", slug: "fountain", productCount: 18 },
  { id: "spinning", name: "旋轉升空類煙火", slug: "spinning", productCount: 8 },
  { id: "ground", name: "甩炮地面類煙火批發", slug: "ground", productCount: 16 },
  { id: "temple", name: "廟會煙火批發專區", slug: "temple", productCount: 11 },
];

export const products: Product[] = [
  // ═══════════════════════════════════════
  // 仙女棒手持煙火（22 項真實商品）
  // ═══════════════════════════════════════
  { id: "sp-001", name: "彩色浪漫の星", categoryId: "sparklers", quantity: "8支", price: 96, image: "/仙女棒/彩色浪漫の星.jpg", slug: "colorful-romantic-star", description: "浪漫彩色火花，適合各種慶祝場合，火花絢麗持久。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-002", name: "彩色螢火蟲", categoryId: "sparklers", quantity: "12支", price: 106, image: "/仙女棒/彩色螢火蟲.jpg", slug: "colorful-firefly", description: "模擬螢火蟲般的閃爍光點，多色交替綻放。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-003", name: "大仙", categoryId: "sparklers", quantity: "10支", price: 64, image: "/仙女棒/大仙.jpg", slug: "big-fairy", description: "經典大型仙女棒，火花噴射時間長，視覺效果佳。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-004", name: "彩虹樂（紫光火焰）", categoryId: "sparklers", quantity: "6支", price: 130, image: "/仙女棒/彩虹樂(紫光火焰).jpg", slug: "rainbow-joy-purple", description: "獨特紫光火焰效果，彩虹色漸變，視覺震撼。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-005", name: "冷光瀑布（冷光火焰）", categoryId: "sparklers", quantity: "5支", price: 171, image: "/仙女棒/冷光瀑布(冷光火焰).jpg", slug: "cold-light-waterfall", description: "冷光火焰技術，瀑布般傾瀉而下的光芒效果。", notes: "請在空曠處使用，遠離易燃物品。冷光火焰溫度較低但仍需注意安全。" },
  { id: "sp-006", name: "紫荊花", categoryId: "sparklers", quantity: "12支", price: 114, image: "/仙女棒/紫荊花.jpg", slug: "bauhinia", description: "紫荊花造型火花綻放，色彩鮮艷持久。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-007", name: "007", categoryId: "sparklers", quantity: "6支", price: 245, image: "/仙女棒/007.jpg", slug: "double-o-seven", description: "高端仙女棒系列，火花效果華麗，持續時間長。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-008", name: "十變色", categoryId: "sparklers", quantity: "12支", price: 114, image: "/仙女棒/十變色.jpg", slug: "ten-color-change", description: "十種顏色依序變換，一支體驗多重色彩。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-009", name: "燦爛星河", categoryId: "sparklers", quantity: "5支", price: 197, image: "/仙女棒/燦爛星河.jpg", slug: "brilliant-galaxy", description: "星河般的璀璨火花，金銀交織效果。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-010", name: "幸運棒", categoryId: "sparklers", quantity: "12支", price: 166, image: "/仙女棒/幸運棒.jpg", slug: "lucky-stick", description: "幸運象徵，適合節慶祝福場合使用。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-011", name: "銀河瀑布", categoryId: "sparklers", quantity: "12支", price: 160, image: "/仙女棒/銀河瀑布.jpg", slug: "milky-way-waterfall", description: "銀白色火花如瀑布般流瀉，效果壯觀。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-012", name: "金波", categoryId: "sparklers", quantity: "8支", price: 190, image: "/仙女棒/金波.webp", slug: "golden-wave", description: "金色波浪狀火花噴射，華麗大氣。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-013", name: "泡泡龍", categoryId: "sparklers", quantity: "12支", price: 166, image: "/仙女棒/泡泡龍.jpg", slug: "bubble-dragon", description: "獨特泡泡狀火花效果，趣味十足。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-014", name: "小星星", categoryId: "sparklers", quantity: "1盒20支有10盒", price: 182, image: "/仙女棒/小星星.jpg", slug: "little-star", description: "經濟實惠的批發裝，每盒20支共10盒，適合大量採購。", notes: "請在空曠處使用，遠離易燃物品。大量儲存請注意防潮。" },
  { id: "sp-015", name: "五彩棒", categoryId: "sparklers", quantity: "24支", price: 93, image: "/仙女棒/五彩棒.jpg", slug: "five-color-stick", description: "五種色彩交替閃爍，量多價優。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-016", name: "心の棒", categoryId: "sparklers", quantity: "10支", price: 154, image: "/仙女棒/心の棒.webp", slug: "heart-stick", description: "心型造型設計，適合婚禮、告白等浪漫場合。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-017", name: "月光仙子", categoryId: "sparklers", quantity: "10支", price: 61, image: "/仙女棒/月光仙子.jpg", slug: "moonlight-fairy", description: "柔和月光色澤，優雅溫馨的火花效果。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-018", name: "OK棒", categoryId: "sparklers", quantity: "12支", price: 166, image: "/仙女棒/OK棒.jpg", slug: "ok-stick", description: "經典款仙女棒，穩定品質，多用途適用。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-019", name: "天子棒", categoryId: "sparklers", quantity: "6支", price: 182, image: "/仙女棒/天子棒.webp", slug: "emperor-stick", description: "頂級仙女棒，火花噴射高度與持續時間均為頂尖。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-020", name: "電光花-大仙女棒", categoryId: "sparklers", quantity: "10支", price: 56, image: "/仙女棒/電光花-大仙女棒.jpg", slug: "electric-sparkler-large", description: "經典電光花系列，大尺寸仙女棒，性價比高。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-021", name: "大如意棒", categoryId: "sparklers", quantity: "10支", price: 80, image: "/仙女棒/大如意棒.jpg", slug: "large-ruyi-stick", description: "如意吉祥造型，火花飽滿，節慶必備。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "sp-022", name: "小如意棒", categoryId: "sparklers", quantity: "20支/包，5小包", price: 112, image: "/仙女棒/小如意棒.jpg", slug: "small-ruyi-stick", description: "小巧如意棒，批發分裝方便，每包20支共5小包。", notes: "請在空曠處使用，遠離易燃物品。" },

  // ═══════════════════════════════════════
  // 50元以上盒裝煙火
  // ═══════════════════════════════════════
  { id: "b50-001", name: "迷你彩花盒裝 8發", categoryId: "box-50", quantity: "1盒", price: 50, image: "/products/placeholder.jpg", slug: "mini-colorbox-8", description: "小型盒裝煙火，8發連射彩色花朵效果。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b50-002", name: "歡樂小煙花 12發", categoryId: "box-50", quantity: "1盒", price: 55, image: "/products/placeholder.jpg", slug: "happy-mini-12", description: "歡樂氣氛必備，12發小型煙花連續綻放。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b50-003", name: "銀柳齊放盒裝 6發", categoryId: "box-50", quantity: "1盒", price: 60, image: "/products/placeholder.jpg", slug: "silver-willow-6", description: "銀柳效果，6發連射，火花如柳條飄散。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b50-004", name: "金花閃爍盒裝 10發", categoryId: "box-50", quantity: "1盒", price: 65, image: "/products/placeholder.jpg", slug: "gold-flash-10", description: "金色閃爍火花，10發連射效果華麗。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b50-005", name: "小蜜蜂旋轉煙火 4入", categoryId: "box-50", quantity: "4入", price: 70, image: "/products/placeholder.jpg", slug: "bee-spin-4", description: "小蜜蜂造型旋轉煙火，地面旋轉飛起。", notes: "請在空曠平坦處使用。" },
  { id: "b50-006", name: "彩虹噴泉盒裝 6發", categoryId: "box-50", quantity: "1盒", price: 75, image: "/products/placeholder.jpg", slug: "rainbow-fountain-6", description: "彩虹色噴泉效果，6發連射色彩繽紛。", notes: "請在空曠處使用，點燃後迅速遠離。" },

  // ═══════════════════════════════════════
  // 100元以上盒裝煙火
  // ═══════════════════════════════════════
  { id: "b100-001", name: "繽紛花園盒裝 16發", categoryId: "box-100", quantity: "1盒", price: 100, image: "/products/placeholder.jpg", slug: "colorful-garden-16", description: "16發繽紛花園效果，多色交替綻放。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b100-002", name: "金碧輝煌盒裝 20發", categoryId: "box-100", quantity: "1盒", price: 120, image: "/products/placeholder.jpg", slug: "golden-glory-20", description: "20發金色為主的華麗效果。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b100-003", name: "五彩繽紛盒裝 25發", categoryId: "box-100", quantity: "1盒", price: 130, image: "/products/placeholder.jpg", slug: "five-color-25", description: "25發五彩效果，色彩豐富。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b100-004", name: "喜慶連發盒裝 30發", categoryId: "box-100", quantity: "1盒", price: 150, image: "/products/placeholder.jpg", slug: "festive-30", description: "30發連射喜慶效果，適合節慶活動。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b100-005", name: "銀河之星盒裝 18發", categoryId: "box-100", quantity: "1盒", price: 140, image: "/products/placeholder.jpg", slug: "galaxy-star-18", description: "18發銀河星空效果，銀白火花閃爍。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b100-006", name: "花火大會盒裝 24發", categoryId: "box-100", quantity: "1盒", price: 160, image: "/products/placeholder.jpg", slug: "hanabi-24", description: "24發花火大會級效果，多層次綻放。", notes: "請在空曠處使用，點燃後迅速遠離。" },

  // ═══════════════════════════════════════
  // 200元以上盒裝煙火
  // ═══════════════════════════════════════
  { id: "b200-001", name: "璀璨星空盒裝 36發", categoryId: "box-200", quantity: "1盒", price: 200, image: "/products/placeholder.jpg", slug: "star-sky-36", description: "36發璀璨星空效果，大面積綻放。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b200-002", name: "龍鳳呈祥盒裝 48發", categoryId: "box-200", quantity: "1盒", price: 250, image: "/products/placeholder.jpg", slug: "dragon-phoenix-48", description: "48發龍鳳呈祥主題，婚慶活動首選。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b200-003", name: "歡天喜地盒裝 40發", categoryId: "box-200", quantity: "1盒", price: 230, image: "/products/placeholder.jpg", slug: "celebration-40", description: "40發歡天喜地效果，喜慶氣氛濃厚。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b200-004", name: "豪華煙火組合 50發", categoryId: "box-200", quantity: "1盒", price: 280, image: "/products/placeholder.jpg", slug: "deluxe-combo-50", description: "50發豪華組合，多種效果輪番呈現。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b200-005", name: "滿天星辰盒裝 42發", categoryId: "box-200", quantity: "1盒", price: 260, image: "/products/placeholder.jpg", slug: "starry-42", description: "42發滿天星辰效果，密集閃爍。", notes: "請在空曠處使用，點燃後迅速遠離。" },

  // ═══════════════════════════════════════
  // 300元以上盒裝煙火
  // ═══════════════════════════════════════
  { id: "b300-001", name: "皇家禮砲盒裝 60發", categoryId: "box-300", quantity: "1盒", price: 300, image: "/products/placeholder.jpg", slug: "royal-salute-60", description: "60發皇家禮砲級效果，氣勢磅礡。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b300-002", name: "金雕玉砌盒裝 72發", categoryId: "box-300", quantity: "1盒", price: 350, image: "/products/placeholder.jpg", slug: "golden-jade-72", description: "72發金雕玉砌效果，精緻華麗。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b300-003", name: "煙火狂歡夜 80發", categoryId: "box-300", quantity: "1盒", price: 380, image: "/products/placeholder.jpg", slug: "carnival-night-80", description: "80發狂歡夜主題，持續時間長。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b300-004", name: "盛世華章盒裝 66發", categoryId: "box-300", quantity: "1盒", price: 330, image: "/products/placeholder.jpg", slug: "prosperity-66", description: "66發盛世華章效果，層次豐富。", notes: "請在空曠處使用，點燃後迅速遠離。" },

  // ═══════════════════════════════════════
  // 400元以上盒裝煙火
  // ═══════════════════════════════════════
  { id: "b400-001", name: "頂級煙火大禮盒 100發", categoryId: "box-400", quantity: "1盒", price: 400, image: "/products/placeholder.jpg", slug: "premium-100", description: "100發頂級大禮盒，全場矚目焦點。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b400-002", name: "至尊煙火組合 120發", categoryId: "box-400", quantity: "1盒", price: 500, image: "/products/placeholder.jpg", slug: "supreme-120", description: "120發至尊組合，效果登峰造極。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "b400-003", name: "豪華禮盒煙火 150發", categoryId: "box-400", quantity: "1盒", price: 600, image: "/products/placeholder.jpg", slug: "luxury-150", description: "150發豪華禮盒，適合大型活動。", notes: "請在空曠處使用，點燃後迅速遠離。建議專業人員操作。" },
  { id: "b400-004", name: "旗艦煙火大禮包 200發", categoryId: "box-400", quantity: "1盒", price: 800, image: "/products/placeholder.jpg", slug: "flagship-200", description: "200發旗艦級大禮包，最高規格煙火體驗。", notes: "請在空曠處使用，點燃後迅速遠離。建議專業人員操作。" },

  // ═══════════════════════════════════════
  // 日間彩煙／雷／彩帶
  // ═══════════════════════════════════════
  { id: "dt-001", name: "日間彩煙筒 紅色（6入）", categoryId: "daytime", quantity: "6入", price: 180, image: "/products/placeholder.jpg", slug: "day-smoke-red-6", description: "日間使用紅色彩煙筒，煙霧濃密持久。", notes: "僅限戶外使用，注意風向。" },
  { id: "dt-002", name: "日間彩煙筒 藍色（6入）", categoryId: "daytime", quantity: "6入", price: 180, image: "/products/placeholder.jpg", slug: "day-smoke-blue-6", description: "日間使用藍色彩煙筒，煙霧濃密持久。", notes: "僅限戶外使用，注意風向。" },
  { id: "dt-003", name: "彩帶噴射砲（12入）", categoryId: "daytime", quantity: "12入", price: 240, image: "/products/placeholder.jpg", slug: "confetti-cannon-12", description: "彩帶噴射砲，適合開幕、慶典場合。", notes: "使用時請遠離人群，注意噴射方向。" },
  { id: "dt-004", name: "雷王響雷煙火（20入）", categoryId: "daytime", quantity: "20入", price: 150, image: "/products/placeholder.jpg", slug: "thunder-king-20", description: "響雷效果強烈，聲勢浩大。", notes: "噪音較大，請注意周圍環境。" },
  { id: "dt-005", name: "日間彩煙組合包", categoryId: "daytime", quantity: "1組", price: 350, image: "/products/placeholder.jpg", slug: "day-smoke-combo", description: "多色彩煙組合，一次採購齊全。", notes: "僅限戶外使用，注意風向。" },
  { id: "dt-006", name: "七彩煙霧彈（10入）", categoryId: "daytime", quantity: "10入", price: 200, image: "/products/placeholder.jpg", slug: "colorful-smoke-10", description: "七種顏色煙霧彈，適合活動佈景。", notes: "僅限戶外使用，注意風向。" },

  // ═══════════════════════════════════════
  // 吐珠升空類煙火批發（7 項真實商品）
  // ═══════════════════════════════════════
  { id: "pl-001", name: "2花-雙響炮", categoryId: "pearl", quantity: "1支", price: 107, image: "/吐珠升空類煙火批發/2花-雙響炮.jpg", slug: "double-flower-cannon", description: "雙響炮吐珠煙火，兩段式升空綻放效果。", notes: "請在空曠處使用，注意升空方向，遠離易燃物品。" },
  { id: "pl-002", name: "不吐不快（大吐珠炸花）", categoryId: "pearl", quantity: "10支", price: 502, image: "/吐珠升空類煙火批發/不吐不快(大吐珠炸花).jpg", slug: "big-pearl-blast", description: "大型吐珠炸花，10支裝，珠彈升空後炸開綻放，效果震撼。", notes: "請在空曠處使用，注意升空方向，建議專業人員操作。" },
  { id: "pl-003", name: "祥龍20發吐珠", categoryId: "pearl", quantity: "12支", price: 226, image: "/吐珠升空類煙火批發/祥龍20發吐珠.jpg", slug: "dragon-20-pearl", description: "祥龍系列，每支20發吐珠連射，12支批發裝。", notes: "請在空曠處使用，注意升空方向。" },
  { id: "pl-004", name: "双泡泡", categoryId: "pearl", quantity: "1支", price: 82, image: "/吐珠升空類煙火批發/双泡泡.jpg", slug: "double-bubble", description: "双泡泡吐珠煙火，獨特泡泡狀升空效果。", notes: "請在空曠處使用，注意升空方向。" },
  { id: "pl-005", name: "機器戰警二代", categoryId: "pearl", quantity: "1盒", price: 734, image: "/吐珠升空類煙火批發/機器戰警二代.jpg", slug: "robocop-v2", description: "機器戰警二代，高規格吐珠煙火，多發連射效果驚人。", notes: "請在空曠處使用，注意升空方向，建議專業人員操作。" },
  { id: "pl-006", name: "彩虹吐珠", categoryId: "pearl", quantity: "12支", price: 226, image: "/吐珠升空類煙火批發/彩虹吐珠.jpg", slug: "rainbow-pearl", description: "彩虹色吐珠煙火，12支批發裝，多色交替升空。", notes: "請在空曠處使用，注意升空方向。" },
  { id: "pl-007", name: "蘋果小高空", categoryId: "pearl", quantity: "1支", price: 82, image: "/吐珠升空類煙火批發/蘋果小高空.webp", slug: "apple-high-altitude", description: "蘋果造型小高空吐珠煙火，升空高度佳。", notes: "請在空曠處使用，注意升空方向。" },
  { id: "pl-008", name: "30公分全彩紙彩帶", categoryId: "pearl", quantity: "1入", price: 68, image: "/吐珠升空類煙火批發/30公分全彩紙彩帶.jpg", slug: "confetti-30cm", description: "30公分全彩紙彩帶，適合慶典開幕場合。", notes: "使用時注意噴射方向。" },
  { id: "pl-009", name: "80公分全彩紙彩帶", categoryId: "pearl", quantity: "10支", price: 1020, image: "/吐珠升空類煙火批發/80公分全彩紙彩帶.jpg", slug: "confetti-80cm", description: "80公分大型全彩紙彩帶，10支批發裝，效果壯觀。", notes: "使用時注意噴射方向，適合大型活動。" },
  { id: "pl-010", name: "煙火加長型噴槍", categoryId: "pearl", quantity: "1入", price: 1020, image: "/吐珠升空類煙火批發/煙火加長型噴槍.jpg", slug: "extended-spray-gun", description: "煙火專用加長型噴槍，安全點火工具。", notes: "請依照使用說明操作。" },

  // ═══════════════════════════════════════
  // 沖天炮／火箭類煙火（6 項真實商品）
  // ═══════════════════════════════════════
  { id: "rk-001", name: "風神火箭", categoryId: "rocket", quantity: "12支", price: 258, image: "/沖天炮／火箭類煙火/風神火箭.jpg", slug: "wind-god-rocket", description: "風神系列火箭煙火，升空高度高，火花效果壯觀。", notes: "請在空曠處使用，注意發射方向，遠離易燃物品。" },
  { id: "rk-002", name: "響叮噹（沖天炮）", categoryId: "rocket", quantity: "96支", price: 136, image: "/沖天炮／火箭類煙火/響叮噹(沖天炮).jpg", slug: "jingle-rocket", description: "經典響叮噹沖天炮，96支批發裝，聲響清脆。", notes: "請在空曠處使用，注意發射方向。" },
  { id: "rk-003", name: "極速大火箭", categoryId: "rocket", quantity: "6支", price: 258, image: "/沖天炮／火箭類煙火/極速大火箭.jpg", slug: "extreme-speed-rocket", description: "大型火箭煙火，極速升空，爆破效果強烈。", notes: "請在空曠處使用，注意發射方向，建議專業人員操作。" },
  { id: "rk-004", name: "沖仔", categoryId: "rocket", quantity: "96支", price: 153, image: "/沖天炮／火箭類煙火/沖仔(沖天炮).jpg", slug: "chong-zai-rocket", description: "經典沖仔沖天炮，96支大量批發裝，經濟實惠。", notes: "請在空曠處使用，注意發射方向。" },
  { id: "rk-005", name: "飛毛腿火箭", categoryId: "rocket", quantity: "12支", price: 258, image: "/沖天炮／火箭類煙火/飛毛腿火箭.jpg", slug: "scud-rocket", description: "飛毛腿系列火箭煙火，飛行軌跡長，視覺效果佳。", notes: "請在空曠處使用，注意發射方向，遠離易燃物品。" },
  { id: "rk-006", name: "霹靂笛音火箭二代", categoryId: "rocket", quantity: "96支", price: 340, image: "/沖天炮／火箭類煙火/霹靂笛音火箭二代.jpg", slug: "thunder-whistle-rocket-v2", description: "霹靂笛音火箭升級二代，升空時發出獨特笛音，效果震撼。", notes: "請在空曠處使用，注意發射方向。噪音較大，請注意周圍環境。" },

  // ═══════════════════════════════════════
  // 花筒類煙火批發（18 項真實商品）
  // ═══════════════════════════════════════
  { id: "ft-001", name: "小花筒", categoryId: "fountain", quantity: "24支", price: 264, image: "/花筒類煙火批發/小花筒.jpg", slug: "small-fountain", description: "經典小花筒，24支批發裝，噴花效果穩定。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-002", name: "歡樂派對（兩段式噴花）", categoryId: "fountain", quantity: "10支", price: 298, image: "/花筒類煙火批發/歡樂派對(兩段式噴花).jpg", slug: "party-two-stage", description: "兩段式噴花效果，適合派對慶典使用。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-003", name: "彩色勝利之花", categoryId: "fountain", quantity: "12小盒", price: 213, image: "/花筒類煙火批發/彩色勝利之花.jpg", slug: "victory-flower", description: "彩色勝利之花，12小盒裝，色彩鮮艷。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-004", name: "四季花筒", categoryId: "fountain", quantity: "24支", price: 264, image: "/花筒類煙火批發/四季花筒.jpg", slug: "four-season-fountain", description: "四季主題花筒，24支批發裝，四種色彩變化。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-005", name: "火樹銀花A", categoryId: "fountain", quantity: "12支", price: 298, image: "/花筒類煙火批發/火樹銀花A.jpg", slug: "silver-fire-tree-a", description: "火樹銀花系列，銀色火花如樹般綻放，效果華麗。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-006", name: "海浪", categoryId: "fountain", quantity: "6支", price: 275, image: "/花筒類煙火批發/海浪.jpg", slug: "ocean-wave", description: "海浪造型噴花效果，波浪狀火花起伏。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-007", name: "冷光噴泉3米高30秒長", categoryId: "fountain", quantity: "5支", price: 1000, image: "/花筒類煙火批發/冷光噴泉3米高30秒長.jpg", slug: "cold-fountain-3m", description: "冷光噴泉，噴射高度達3米，持續30秒，適合舞台活動。", notes: "冷光火焰溫度較低但仍需注意安全，請預留足夠距離。" },
  { id: "ft-008", name: "彩烽舞", categoryId: "fountain", quantity: "6支", price: 275, image: "/花筒類煙火批發/彩烽舞.jpg", slug: "color-beacon-dance", description: "彩色烽火舞動效果，多色交替噴射。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-009", name: "幸運花筒", categoryId: "fountain", quantity: "24支", price: 275, image: "/花筒類煙火批發/幸運花筒.jpg", slug: "lucky-fountain", description: "幸運花筒，24支批發裝，適合節慶祝福場合。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-010", name: "派大星", categoryId: "fountain", quantity: "16支", price: 162, image: "/花筒類煙火批發/派大星.jpg", slug: "patrick-star", description: "派大星造型花筒，16支裝，趣味十足。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-011", name: "浪漫噴泉", categoryId: "fountain", quantity: "6支", price: 275, image: "/花筒類煙火批發/浪漫噴泉.jpg", slug: "romantic-fountain", description: "浪漫噴泉效果，適合婚禮、告白場合。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-012", name: "閃亮亮小花筒", categoryId: "fountain", quantity: "24支", price: 281, image: "/花筒類煙火批發/閃亮亮小花筒.jpg", slug: "shiny-small-fountain", description: "閃亮亮小花筒，24支批發裝，火花閃爍耀眼。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-013", name: "萬花筒", categoryId: "fountain", quantity: "6支", price: 264, image: "/花筒類煙火批發/萬花筒.jpg", slug: "kaleidoscope", description: "萬花筒效果，多色火花旋轉綻放。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-014", name: "小宇宙", categoryId: "fountain", quantity: "24支", price: 275, image: "/花筒類煙火批發/小宇宙.jpg", slug: "little-universe", description: "小宇宙花筒，24支批發裝，火花效果如星空。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-015", name: "招財樹", categoryId: "fountain", quantity: "12支", price: 274, image: "/花筒類煙火批發/招財樹.jpg", slug: "money-tree", description: "招財樹造型花筒，金色火花噴射，吉祥如意。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-016", name: "炫酷小花筒", categoryId: "fountain", quantity: "24支", price: 264, image: "/花筒類煙火批發/炫酷小花筒.jpg", slug: "cool-small-fountain", description: "炫酷小花筒，24支批發裝，效果酷炫。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-017", name: "快樂噴泉", categoryId: "fountain", quantity: "6支", price: 289, image: "/花筒類煙火批發/快樂噴泉.jpg", slug: "happy-fountain", description: "快樂噴泉花筒，噴花效果歡快明亮。", notes: "請放置於平坦地面使用，遠離易燃物品。" },
  { id: "ft-018", name: "搖錢樹", categoryId: "fountain", quantity: "12支", price: 291, image: "/花筒類煙火批發/搖錢樹.jpg", slug: "fortune-tree", description: "搖錢樹花筒，金色為主的華麗噴花效果。", notes: "請放置於平坦地面使用，遠離易燃物品。" },

  // ═══════════════════════════════════════
  // 旋轉升空類煙火（8 項真實商品）
  // ═══════════════════════════════════════
  { id: "sn-001", name: "大彩蝶", categoryId: "spinning", quantity: "2盒，每盒6支共12支", price: 281, image: "/旋轉升空類煙火/大彩蝶.webp", slug: "big-color-butterfly", description: "大彩蝶旋轉升空煙火，旋轉後如蝴蝶般飛舞升空。", notes: "請在空曠平坦處使用，注意升空方向。" },
  { id: "sn-002", name: "兩段式彩色大水母", categoryId: "spinning", quantity: "2盒，每盒3隻共6隻", price: 247, image: "/旋轉升空類煙火/兩段式彩色大水母.jpg", slug: "two-stage-jellyfish", description: "兩段式彩色大水母，旋轉升空後展開如水母般的火花。", notes: "請在空曠平坦處使用，注意升空方向。" },
  { id: "sn-003", name: "彩蝶", categoryId: "spinning", quantity: "24支", price: 155, image: "/旋轉升空類煙火/彩蝶.jpg", slug: "color-butterfly", description: "彩蝶旋轉煙火，24支批發裝，輕巧旋轉升空。", notes: "請在空曠平坦處使用。" },
  { id: "sn-004", name: "花蝴蝶", categoryId: "spinning", quantity: "24支", price: 112, image: "/旋轉升空類煙火/花蝴蝶.jpg", slug: "flower-butterfly", description: "花蝴蝶旋轉煙火，24支批發裝，經濟實惠。", notes: "請在空曠平坦處使用。" },
  { id: "sn-005", name: "大蝶飛舞", categoryId: "spinning", quantity: "12支", price: 245, image: "/旋轉升空類煙火/大蝶飛舞.jpg", slug: "big-butterfly-dance", description: "大蝶飛舞，大型旋轉升空煙火，飛舞效果壯觀。", notes: "請在空曠平坦處使用，注意升空方向。" },
  { id: "sn-006", name: "太空飛碟", categoryId: "spinning", quantity: "24個", price: 277, image: "/旋轉升空類煙火/太空飛碟.jpg", slug: "ufo", description: "太空飛碟造型旋轉煙火，24個批發裝，旋轉飛起效果獨特。", notes: "請在空曠平坦處使用，注意周圍安全。" },
  { id: "sn-007", name: "魔幻水母", categoryId: "spinning", quantity: "6個", price: 201, image: "/旋轉升空類煙火/魔幻水母.jpg", slug: "magic-jellyfish", description: "魔幻水母旋轉煙火，升空後展開水母造型火花。", notes: "請在空曠平坦處使用，注意升空方向。" },
  { id: "sn-008", name: "筋斗雲", categoryId: "spinning", quantity: "24入", price: 211, image: "/旋轉升空類煙火/筋斗雲.jpg", slug: "somersault-cloud", description: "筋斗雲旋轉升空煙火，24入批發裝，翻轉升空效果。", notes: "請在空曠平坦處使用。" },

  // ═══════════════════════════════════════
  // 甩炮地面類煙火批發（16 項真實商品）
  // ═══════════════════════════════════════
  { id: "gd-001", name: "調皮果", categoryId: "ground", quantity: "24個", price: 155, image: "/甩炮地面類煙火批發/調皮果.jpg", slug: "naughty-fruit", description: "調皮果地面煙火，24個裝，點燃後地面跳動綻放。", notes: "請在空曠處使用，遠離易燃物品。" },
  { id: "gd-002", name: "彩色甩炮", categoryId: "ground", quantity: "24顆x12小盒", price: 136, image: "/甩炮地面類煙火批發/彩色甩炮.jpg", slug: "color-snap", description: "彩色甩炮，24顆x12小盒批發裝，摔擊即響。", notes: "請勿大量集中使用，遠離兒童。" },
  { id: "gd-003", name: "鼠太郎", categoryId: "ground", quantity: "8個", price: 129, image: "/甩炮地面類煙火批發/鼠太郎.jpg", slug: "mouse-taro", description: "鼠太郎地面煙火，點燃後在地面快速竄動。", notes: "請在空曠平坦處使用。" },
  { id: "gd-004", name: "霹靂陀螺", categoryId: "ground", quantity: "12個", price: 194, image: "/甩炮地面類煙火批發/霹靂陀螺.jpg", slug: "thunder-top", description: "霹靂陀螺地面旋轉煙火，12個裝，旋轉效果強烈。", notes: "請在空曠平坦處使用。" },
  { id: "gd-005", name: "蘋果霹靂珠", categoryId: "ground", quantity: "12小盒", price: 196, image: "/甩炮地面類煙火批發/蘋果霹靂珠.jpg", slug: "apple-thunder-pearl", description: "蘋果造型霹靂珠，12小盒裝，摔擊爆響。", notes: "請勿大量集中使用，遠離兒童。" },
  { id: "gd-006", name: "三響水鴛鴦", categoryId: "ground", quantity: "20小盒", price: 451, image: "/甩炮地面類煙火批發/三響水鴛鴦.jpg", slug: "triple-mandarin-duck", description: "三響水鴛鴦，20小盒批發裝，三段式連響效果。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "gd-007", name: "芭蕾舞", categoryId: "ground", quantity: "24個", price: 97, image: "/甩炮地面類煙火批發/芭蕾舞.jpg", slug: "ballet", description: "芭蕾舞地面旋轉煙火，24個裝，優雅旋轉效果。", notes: "請在空曠平坦處使用。" },
  { id: "gd-008", name: "水鴛鴦+", categoryId: "ground", quantity: "12小盒", price: 291, image: "/甩炮地面類煙火批發/水鴛鴦+.jpg", slug: "mandarin-duck-plus", description: "水鴛鴦升級版，12小盒批發裝，效果加強。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "gd-009", name: "連響珠2", categoryId: "ground", quantity: "12小盒", price: 196, image: "/甩炮地面類煙火批發/連響珠2.jpg", slug: "chain-pearl-2", description: "連響珠二代，12小盒裝，連續爆響效果。", notes: "請在空曠處使用。" },
  { id: "gd-010", name: "小蝌蚪甩炮", categoryId: "ground", quantity: "24顆x12小盒", price: 122, image: "/甩炮地面類煙火批發/小蝌蚪甩炮.jpg", slug: "tadpole-snap", description: "小蝌蚪甩炮，24顆x12小盒，摔擊即響，經濟實惠。", notes: "請勿大量集中使用，遠離兒童。" },
  { id: "gd-011", name: "蝌蚪大甩炮", categoryId: "ground", quantity: "15顆x12小盒", price: 139, image: "/甩炮地面類煙火批發/蝌蚪大甩炮.jpg", slug: "big-tadpole-snap", description: "蝌蚪大甩炮，加大版，15顆x12小盒，聲響更強。", notes: "請勿大量集中使用，遠離兒童。" },
  { id: "gd-012", name: "彩煙芭樂", categoryId: "ground", quantity: "6支", price: 355, image: "/甩炮地面類煙火批發/彩煙芭樂.jpg", slug: "color-smoke-guava", description: "彩煙芭樂，6支裝，點燃後釋放彩色煙霧。", notes: "僅限戶外使用，注意風向。" },
  { id: "gd-013", name: "便便慧星", categoryId: "ground", quantity: "8個", price: 213, image: "/甩炮地面類煙火批發/便便慧星.jpg", slug: "poop-comet", description: "便便慧星趣味地面煙火，8個裝，造型趣味。", notes: "請在空曠處使用。" },
  { id: "gd-014", name: "魔幻陀螺", categoryId: "ground", quantity: "12個", price: 211, image: "/甩炮地面類煙火批發/魔幻陀螺.jpg", slug: "magic-top", description: "魔幻陀螺地面旋轉煙火，12個裝，旋轉效果絢麗。", notes: "請在空曠平坦處使用。" },
  { id: "gd-015", name: "搗蛋", categoryId: "ground", quantity: "12支", price: 136, image: "/甩炮地面類煙火批發/搗蛋.jpg", slug: "mischief", description: "搗蛋地面煙火，12支裝，趣味十足。", notes: "請在空曠處使用。" },
  { id: "gd-016", name: "霹靂小丸子", categoryId: "ground", quantity: "12小盒", price: 196, image: "/甩炮地面類煙火批發/霹靂小丸子.jpg", slug: "thunder-maruko", description: "霹靂小丸子，12小盒批發裝，小巧爆響效果。", notes: "請勿大量集中使用，遠離兒童。" },

  // ═══════════════════════════════════════
  // 廟會煙火批發專區（11 項真實商品）
  // ═══════════════════════════════════════
  { id: "tp-001", name: "尺炮", categoryId: "temple", quantity: "1入", price: 117.3, image: "/廟會煙火批發專區/尺炮.jpg", slug: "ruler-cannon", description: "傳統尺炮，廟會遶境必備品項。", notes: "需專業人員施放，請事先申請相關許可。噪音極大。" },
  { id: "tp-002", name: "盒裝尺炮", categoryId: "temple", quantity: "1入", price: 170, image: "/廟會煙火批發專區/盒裝尺炮.jpg", slug: "boxed-ruler-cannon", description: "盒裝尺炮，方便儲存與運送。", notes: "需專業人員施放，請事先申請相關許可。噪音極大。" },
  { id: "tp-003", name: "20萬頭炮", categoryId: "temple", quantity: "1入", price: 119, image: "/廟會煙火批發專區/20萬頭炮.jpg", slug: "200k-firecracker", description: "20萬頭連環炮，廟會慶典基本款。", notes: "需專業人員施放，請事先申請相關許可。噪音極大。" },
  { id: "tp-004", name: "30萬頭炮", categoryId: "temple", quantity: "1入", price: 136, image: "/廟會煙火批發專區/30萬頭炮.jpg", slug: "300k-firecracker", description: "30萬頭連環炮，持續時間較長。", notes: "需專業人員施放，請事先申請相關許可。噪音極大。" },
  { id: "tp-005", name: "50萬頭炮", categoryId: "temple", quantity: "1入", price: 204, image: "/廟會煙火批發專區/50萬頭炮.jpg", slug: "500k-firecracker", description: "50萬頭連環炮，聲勢浩大，適合大型廟會。", notes: "需專業人員施放，請事先申請相關許可。噪音極大。" },
  { id: "tp-006", name: "100萬頭炮", categoryId: "temple", quantity: "1入", price: 408, image: "/廟會煙火批發專區/100萬頭炮.jpg", slug: "1m-firecracker", description: "100萬頭連環炮，最高規格，持續時間極長，氣勢驚人。", notes: "需專業人員施放，請事先申請相關許可。噪音極大，請預留安全距離。" },
  { id: "tp-007", name: "環保炮100公分", categoryId: "temple", quantity: "1入", price: 85, image: "/廟會煙火批發專區/環保炮100公分.jpg", slug: "eco-cannon-100cm", description: "環保炮100公分，低煙環保設計。", notes: "需專業人員施放，請事先申請相關許可。" },
  { id: "tp-008", name: "環保炮200公分", categoryId: "temple", quantity: "1入", price: 212.5, image: "/廟會煙火批發專區/環保炮200公分.jpg", slug: "eco-cannon-200cm", description: "環保炮200公分，低煙環保設計，適合中型場地。", notes: "需專業人員施放，請事先申請相關許可。" },
  { id: "tp-009", name: "環保炮300公分", categoryId: "temple", quantity: "1入", price: 255, image: "/廟會煙火批發專區/環保炮300公分.jpg", slug: "eco-cannon-300cm", description: "環保炮300公分，低煙環保設計。", notes: "需專業人員施放，請事先申請相關許可。" },
  { id: "tp-010", name: "環保炮500公分", categoryId: "temple", quantity: "1入", price: 425, image: "/廟會煙火批發專區/環保炮500公分.jpg", slug: "eco-cannon-500cm", description: "環保炮500公分，低煙環保設計，適合大型場地。", notes: "需專業人員施放，請事先申請相關許可。" },
  { id: "tp-011", name: "環保炮1000公分", categoryId: "temple", quantity: "1入", price: 544, image: "/廟會煙火批發專區/環保炮1000公分.jpg", slug: "eco-cannon-1000cm", description: "環保炮1000公分，最大規格環保炮，適合大型廟會慶典。", notes: "需專業人員施放，請事先申請相關許可。請預留足夠安全距離。" },
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
