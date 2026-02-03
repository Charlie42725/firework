import { Category, Product } from "./types";

export const categories: Category[] = [
  { id: "sparklers", name: "仙女棒手持煙火", slug: "sparklers", productCount: 22 },
  { id: "box-50", name: "50元以上盒裝煙火", slug: "box-50", productCount: 6 },
  { id: "box-100", name: "100元以上盒裝煙火", slug: "box-100", productCount: 6 },
  { id: "box-200", name: "200元以上盒裝煙火", slug: "box-200", productCount: 5 },
  { id: "box-300", name: "300元以上盒裝煙火", slug: "box-300", productCount: 4 },
  { id: "box-400", name: "400元以上盒裝煙火", slug: "box-400", productCount: 4 },
  { id: "daytime", name: "日間彩煙／雷／彩帶", slug: "daytime", productCount: 6 },
  { id: "pearl", name: "吐珠升空類煙火批發", slug: "pearl", productCount: 6 },
  { id: "rocket", name: "沖天炮／火箭類煙火", slug: "rocket", productCount: 5 },
  { id: "fountain", name: "花筒類煙火批發", slug: "fountain", productCount: 6 },
  { id: "spinning", name: "旋轉升空類煙火", slug: "spinning", productCount: 5 },
  { id: "ground", name: "甩炮地面類煙火批發", slug: "ground", productCount: 6 },
  { id: "temple", name: "廟會煙火批發專區", slug: "temple", productCount: 8 },
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
  // 吐珠升空類煙火批發
  // ═══════════════════════════════════════
  { id: "pl-001", name: "五連珠升空煙火", categoryId: "pearl", quantity: "1組", price: 120, image: "/products/placeholder.jpg", slug: "five-pearl", description: "五顆珠彈連續升空綻放。", notes: "請在空曠處使用，注意升空方向。" },
  { id: "pl-002", name: "十連珠大發煙火", categoryId: "pearl", quantity: "1組", price: 200, image: "/products/placeholder.jpg", slug: "ten-pearl", description: "十顆珠彈連續升空，效果壯觀。", notes: "請在空曠處使用，注意升空方向。" },
  { id: "pl-003", name: "金珠噴射筒（8入）", categoryId: "pearl", quantity: "8入", price: 160, image: "/products/placeholder.jpg", slug: "gold-pearl-8", description: "金色珠彈噴射效果，8入裝。", notes: "請在空曠處使用，注意升空方向。" },
  { id: "pl-004", name: "彩珠升空組合 25發", categoryId: "pearl", quantity: "1組", price: 280, image: "/products/placeholder.jpg", slug: "color-pearl-25", description: "25發彩色珠彈升空組合。", notes: "請在空曠處使用，注意升空方向。" },
  { id: "pl-005", name: "銀珠連發煙火 15發", categoryId: "pearl", quantity: "1組", price: 220, image: "/products/placeholder.jpg", slug: "silver-pearl-15", description: "15發銀色珠彈連續發射。", notes: "請在空曠處使用，注意升空方向。" },
  { id: "pl-006", name: "超級吐珠王 30發", categoryId: "pearl", quantity: "1組", price: 350, image: "/products/placeholder.jpg", slug: "super-pearl-king-30", description: "30發大型吐珠煙火，效果驚人。", notes: "請在空曠處使用，注意升空方向。建議專業人員操作。" },

  // ═══════════════════════════════════════
  // 沖天炮／火箭類煙火
  // ═══════════════════════════════════════
  { id: "rk-001", name: "經典沖天炮（50入）", categoryId: "rocket", quantity: "50入", price: 100, image: "/products/placeholder.jpg", slug: "classic-rocket-50", description: "經典款沖天炮，50入批發裝。", notes: "請在空曠處使用，注意發射方向。" },
  { id: "rk-002", name: "雙響沖天炮（30入）", categoryId: "rocket", quantity: "30入", price: 120, image: "/products/placeholder.jpg", slug: "double-rocket-30", description: "雙響效果沖天炮，升空後再次爆炸。", notes: "請在空曠處使用，注意發射方向。" },
  { id: "rk-003", name: "大型火箭煙火（6入）", categoryId: "rocket", quantity: "6入", price: 300, image: "/products/placeholder.jpg", slug: "large-rocket-6", description: "大型火箭煙火，升空高度高，效果壯觀。", notes: "請在空曠處使用，建議專業人員操作。" },
  { id: "rk-004", name: "五連發火箭筒", categoryId: "rocket", quantity: "1組", price: 250, image: "/products/placeholder.jpg", slug: "five-rocket-tube", description: "五連發火箭筒，連續升空效果。", notes: "請在空曠處使用，固定好發射架後點燃。" },
  { id: "rk-005", name: "迷你沖天炮（100入）", categoryId: "rocket", quantity: "100入", price: 150, image: "/products/placeholder.jpg", slug: "mini-rocket-100", description: "迷你沖天炮大量裝，適合批量採購。", notes: "請在空曠處使用，注意發射方向。" },

  // ═══════════════════════════════════════
  // 花筒類煙火批發
  // ═══════════════════════════════════════
  { id: "ft-001", name: "金色噴泉花筒 60秒", categoryId: "fountain", quantity: "1支", price: 80, image: "/products/placeholder.jpg", slug: "gold-fountain-60s", description: "金色噴泉效果，持續約60秒。", notes: "請放置於平坦地面使用。" },
  { id: "ft-002", name: "七彩噴泉花筒 90秒", categoryId: "fountain", quantity: "1支", price: 120, image: "/products/placeholder.jpg", slug: "rainbow-fountain-90s", description: "七彩噴泉效果，持續約90秒。", notes: "請放置於平坦地面使用。" },
  { id: "ft-003", name: "銀瀑布花筒 120秒", categoryId: "fountain", quantity: "1支", price: 180, image: "/products/placeholder.jpg", slug: "silver-waterfall-120s", description: "銀色瀑布效果，持續約120秒，視覺震撼。", notes: "請放置於平坦地面使用。" },
  { id: "ft-004", name: "大型花筒組合（3入）", categoryId: "fountain", quantity: "3入", price: 350, image: "/products/placeholder.jpg", slug: "large-fountain-combo", description: "三支大型花筒組合，效果組合豐富。", notes: "請放置於平坦地面使用，預留足夠安全距離。" },
  { id: "ft-005", name: "迷你花筒（10入）", categoryId: "fountain", quantity: "10入", price: 200, image: "/products/placeholder.jpg", slug: "mini-fountain-10", description: "迷你花筒10入裝，適合小型活動。", notes: "請放置於平坦地面使用。" },
  { id: "ft-006", name: "巨型花筒煙火 180秒", categoryId: "fountain", quantity: "1支", price: 500, image: "/products/placeholder.jpg", slug: "giant-fountain-180s", description: "巨型花筒，持續約180秒，高度可達數公尺。", notes: "請放置於平坦地面使用，預留足夠安全距離。建議專業人員操作。" },

  // ═══════════════════════════════════════
  // 旋轉升空類煙火
  // ═══════════════════════════════════════
  { id: "sn-001", name: "旋轉蜂炮（12入）", categoryId: "spinning", quantity: "12入", price: 90, image: "/products/placeholder.jpg", slug: "spin-bee-12", description: "旋轉蜂炮，地面旋轉後升空。", notes: "請在空曠平坦處使用。" },
  { id: "sn-002", name: "飛天轉盤煙火", categoryId: "spinning", quantity: "1組", price: 150, image: "/products/placeholder.jpg", slug: "flying-wheel", description: "轉盤式旋轉煙火，旋轉飛天效果。", notes: "請在空曠處使用，注意周圍安全。" },
  { id: "sn-003", name: "陀螺升空煙火（6入）", categoryId: "spinning", quantity: "6入", price: 120, image: "/products/placeholder.jpg", slug: "gyro-launch-6", description: "陀螺旋轉後升空綻放。", notes: "請在空曠平坦處使用。" },
  { id: "sn-004", name: "旋風火輪（4入）", categoryId: "spinning", quantity: "4入", price: 200, image: "/products/placeholder.jpg", slug: "fire-wheel-4", description: "火輪旋轉效果，視覺衝擊強烈。", notes: "請在空曠處使用，需固定於支架上。" },
  { id: "sn-005", name: "升空旋轉組合包", categoryId: "spinning", quantity: "1組", price: 280, image: "/products/placeholder.jpg", slug: "spin-combo", description: "多種旋轉升空煙火組合。", notes: "請在空曠處使用，注意周圍安全。" },

  // ═══════════════════════════════════════
  // 甩炮地面類煙火批發
  // ═══════════════════════════════════════
  { id: "gd-001", name: "摔炮（50盒裝）", categoryId: "ground", quantity: "50盒", price: 100, image: "/products/placeholder.jpg", slug: "snap-50box", description: "經典摔炮，50盒批發裝。", notes: "請勿大量集中引爆，遠離兒童。" },
  { id: "gd-002", name: "拉炮彩帶（24入）", categoryId: "ground", quantity: "24入", price: 80, image: "/products/placeholder.jpg", slug: "pull-confetti-24", description: "拉炮彩帶，適合派對慶典。", notes: "使用時注意噴射方向。" },
  { id: "gd-003", name: "地面旋轉煙火（20入）", categoryId: "ground", quantity: "20入", price: 60, image: "/products/placeholder.jpg", slug: "ground-spin-20", description: "地面旋轉效果煙火，20入裝。", notes: "請在平坦地面使用。" },
  { id: "gd-004", name: "蛇蛋煙火（30入）", categoryId: "ground", quantity: "30入", price: 50, image: "/products/placeholder.jpg", slug: "snake-egg-30", description: "蛇蛋煙火，點燃後膨脹變形。", notes: "會留下殘留物，請注意清理。" },
  { id: "gd-005", name: "地雷花煙火（12入）", categoryId: "ground", quantity: "12入", price: 150, image: "/products/placeholder.jpg", slug: "ground-mine-12", description: "地雷花效果，地面爆開後噴射火花。", notes: "請在空曠處使用，點燃後迅速遠離。" },
  { id: "gd-006", name: "跳跳炮（40入）", categoryId: "ground", quantity: "40入", price: 120, image: "/products/placeholder.jpg", slug: "jumping-cracker-40", description: "跳跳炮，點燃後在地面跳動發出聲響。", notes: "請在空曠處使用。" },

  // ═══════════════════════════════════════
  // 廟會煙火批發專區
  // ═══════════════════════════════════════
  { id: "tp-001", name: "廟會專用大型煙火組", categoryId: "temple", quantity: "1組", price: 2000, image: "/products/placeholder.jpg", slug: "temple-large-combo", description: "廟會專用大型煙火組合，含多種煙火效果。", notes: "需專業人員施放，請事先申請相關許可。" },
  { id: "tp-002", name: "廟會排炮 200發", categoryId: "temple", quantity: "1組", price: 1500, image: "/products/placeholder.jpg", slug: "temple-row-200", description: "200發排炮，連續密集發射，氣勢驚人。", notes: "需專業人員施放，請事先申請相關許可。" },
  { id: "tp-003", name: "神明遶境專用煙火", categoryId: "temple", quantity: "1組", price: 1800, image: "/products/placeholder.jpg", slug: "temple-parade", description: "神明遶境專用煙火套組，含各式必備品項。", notes: "需專業人員施放，請事先申請相關許可。" },
  { id: "tp-004", name: "廟會蜂炮組合", categoryId: "temple", quantity: "1組", price: 2500, image: "/products/placeholder.jpg", slug: "temple-bee-combo", description: "廟會蜂炮組合，多層蜂炮架設計。", notes: "需專業人員施放，參與者請穿戴護具。" },
  { id: "tp-005", name: "陣頭專用煙火套組", categoryId: "temple", quantity: "1組", price: 3000, image: "/products/placeholder.jpg", slug: "temple-troupe-set", description: "陣頭表演專用煙火套組，搭配陣頭演出。", notes: "需專業人員施放，請事先申請相關許可。" },
  { id: "tp-006", name: "慶典大型花筒（10入）", categoryId: "temple", quantity: "10入", price: 3500, image: "/products/placeholder.jpg", slug: "festival-fountain-10", description: "大型慶典用花筒，10入組合，效果壯觀持久。", notes: "需專業人員施放，請預留足夠安全距離。" },
  { id: "tp-007", name: "廟會連珠炮 500發", categoryId: "temple", quantity: "1組", price: 4000, image: "/products/placeholder.jpg", slug: "temple-chain-500", description: "500發連珠炮，持續時間長，聲勢浩大。", notes: "需專業人員施放，請事先申請相關許可。噪音極大。" },
  { id: "tp-008", name: "開光專用煙火禮盒", categoryId: "temple", quantity: "1組", price: 1200, image: "/products/placeholder.jpg", slug: "temple-blessing-gift", description: "開光儀式專用煙火禮盒，含精選吉祥煙火組合。", notes: "需專業人員施放，請事先申請相關許可。" },
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
