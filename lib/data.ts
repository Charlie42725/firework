import { Category, Product } from "./types";

export const categories: Category[] = [
  { id: "sparklers", name: "仙女棒手持煙火", slug: "sparklers", productCount: 8 },
  { id: "box-50", name: "50元以上盒裝煙火", slug: "box-50", productCount: 10 },
  { id: "box-100", name: "100元以上盒裝煙火", slug: "box-100", productCount: 12 },
  { id: "box-200", name: "200元以上盒裝煙火", slug: "box-200", productCount: 9 },
  { id: "box-300", name: "300元以上盒裝煙火", slug: "box-300", productCount: 7 },
  { id: "box-400", name: "400元以上盒裝煙火", slug: "box-400", productCount: 6 },
  { id: "daytime", name: "日間彩煙／雷／彩帶", slug: "daytime", productCount: 8 },
  { id: "pearl", name: "吐珠升空類煙火批發", slug: "pearl", productCount: 10 },
  { id: "rocket", name: "沖天炮／火箭類煙火", slug: "rocket", productCount: 9 },
  { id: "fountain", name: "花筒類煙火批發", slug: "fountain", productCount: 11 },
  { id: "spinning", name: "旋轉升空類煙火", slug: "spinning", productCount: 7 },
  { id: "ground", name: "甩炮地面類煙火批發", slug: "ground", productCount: 8 },
  { id: "temple", name: "廟會煙火批發專區", slug: "temple", productCount: 15 },
];

export const products: Product[] = [
  // 仙女棒手持煙火
  { id: "sp-001", name: "金色仙女棒 30cm（12入）", categoryId: "sparklers", price: 60, image: "/products/placeholder.jpg", slug: "gold-sparkler-30cm" },
  { id: "sp-002", name: "彩色仙女棒 45cm（10入）", categoryId: "sparklers", price: 80, image: "/products/placeholder.jpg", slug: "color-sparkler-45cm" },
  { id: "sp-003", name: "心形仙女棒（6入裝）", categoryId: "sparklers", price: 120, image: "/products/placeholder.jpg", slug: "heart-sparkler" },
  { id: "sp-004", name: "超長仙女棒 60cm（8入）", categoryId: "sparklers", price: 150, image: "/products/placeholder.jpg", slug: "long-sparkler-60cm" },
  { id: "sp-005", name: "星星造型仙女棒（6入）", categoryId: "sparklers", price: 100, image: "/products/placeholder.jpg", slug: "star-sparkler" },
  { id: "sp-006", name: "銀色閃光仙女棒 40cm", categoryId: "sparklers", price: 90, image: "/products/placeholder.jpg", slug: "silver-sparkler" },
  { id: "sp-007", name: "手持噴花仙女棒（冷焰火）", categoryId: "sparklers", price: 200, image: "/products/placeholder.jpg", slug: "cold-sparkler" },
  { id: "sp-008", name: "婚禮專用仙女棒（20入）", categoryId: "sparklers", price: 350, image: "/products/placeholder.jpg", slug: "wedding-sparkler" },

  // 50元以上盒裝煙火
  { id: "b50-001", name: "迷你彩花盒裝 8發", categoryId: "box-50", price: 50, image: "/products/placeholder.jpg", slug: "mini-colorbox-8" },
  { id: "b50-002", name: "歡樂小煙花 12發", categoryId: "box-50", price: 55, image: "/products/placeholder.jpg", slug: "happy-mini-12" },
  { id: "b50-003", name: "銀柳齊放盒裝 6發", categoryId: "box-50", price: 60, image: "/products/placeholder.jpg", slug: "silver-willow-6" },
  { id: "b50-004", name: "金花閃爍盒裝 10發", categoryId: "box-50", price: 65, image: "/products/placeholder.jpg", slug: "gold-flash-10" },
  { id: "b50-005", name: "小蜜蜂旋轉煙火 4入", categoryId: "box-50", price: 70, image: "/products/placeholder.jpg", slug: "bee-spin-4" },
  { id: "b50-006", name: "彩虹噴泉盒裝 6發", categoryId: "box-50", price: 75, image: "/products/placeholder.jpg", slug: "rainbow-fountain-6" },

  // 100元以上盒裝煙火
  { id: "b100-001", name: "繽紛花園盒裝 16發", categoryId: "box-100", price: 100, image: "/products/placeholder.jpg", slug: "colorful-garden-16" },
  { id: "b100-002", name: "金碧輝煌盒裝 20發", categoryId: "box-100", price: 120, image: "/products/placeholder.jpg", slug: "golden-glory-20" },
  { id: "b100-003", name: "五彩繽紛盒裝 25發", categoryId: "box-100", price: 130, image: "/products/placeholder.jpg", slug: "five-color-25" },
  { id: "b100-004", name: "喜慶連發盒裝 30發", categoryId: "box-100", price: 150, image: "/products/placeholder.jpg", slug: "festive-30" },
  { id: "b100-005", name: "銀河之星盒裝 18發", categoryId: "box-100", price: 140, image: "/products/placeholder.jpg", slug: "galaxy-star-18" },
  { id: "b100-006", name: "花火大會盒裝 24發", categoryId: "box-100", price: 160, image: "/products/placeholder.jpg", slug: "hanabi-24" },

  // 200元以上盒裝煙火
  { id: "b200-001", name: "璀璨星空盒裝 36發", categoryId: "box-200", price: 200, image: "/products/placeholder.jpg", slug: "star-sky-36" },
  { id: "b200-002", name: "龍鳳呈祥盒裝 48發", categoryId: "box-200", price: 250, image: "/products/placeholder.jpg", slug: "dragon-phoenix-48" },
  { id: "b200-003", name: "歡天喜地盒裝 40發", categoryId: "box-200", price: 230, image: "/products/placeholder.jpg", slug: "celebration-40" },
  { id: "b200-004", name: "豪華煙火組合 50發", categoryId: "box-200", price: 280, image: "/products/placeholder.jpg", slug: "deluxe-combo-50" },
  { id: "b200-005", name: "滿天星辰盒裝 42發", categoryId: "box-200", price: 260, image: "/products/placeholder.jpg", slug: "starry-42" },

  // 300元以上盒裝煙火
  { id: "b300-001", name: "皇家禮砲盒裝 60發", categoryId: "box-300", price: 300, image: "/products/placeholder.jpg", slug: "royal-salute-60" },
  { id: "b300-002", name: "金雕玉砌盒裝 72發", categoryId: "box-300", price: 350, image: "/products/placeholder.jpg", slug: "golden-jade-72" },
  { id: "b300-003", name: "煙火狂歡夜 80發", categoryId: "box-300", price: 380, image: "/products/placeholder.jpg", slug: "carnival-night-80" },
  { id: "b300-004", name: "盛世華章盒裝 66發", categoryId: "box-300", price: 330, image: "/products/placeholder.jpg", slug: "prosperity-66" },

  // 400元以上盒裝煙火
  { id: "b400-001", name: "頂級煙火大禮盒 100發", categoryId: "box-400", price: 400, image: "/products/placeholder.jpg", slug: "premium-100" },
  { id: "b400-002", name: "至尊煙火組合 120發", categoryId: "box-400", price: 500, image: "/products/placeholder.jpg", slug: "supreme-120" },
  { id: "b400-003", name: "豪華禮盒煙火 150發", categoryId: "box-400", price: 600, image: "/products/placeholder.jpg", slug: "luxury-150" },
  { id: "b400-004", name: "旗艦煙火大禮包 200發", categoryId: "box-400", price: 800, image: "/products/placeholder.jpg", slug: "flagship-200" },

  // 日間彩煙／雷／彩帶
  { id: "dt-001", name: "日間彩煙筒 紅色（6入）", categoryId: "daytime", price: 180, image: "/products/placeholder.jpg", slug: "day-smoke-red-6" },
  { id: "dt-002", name: "日間彩煙筒 藍色（6入）", categoryId: "daytime", price: 180, image: "/products/placeholder.jpg", slug: "day-smoke-blue-6" },
  { id: "dt-003", name: "彩帶噴射砲（12入）", categoryId: "daytime", price: 240, image: "/products/placeholder.jpg", slug: "confetti-cannon-12" },
  { id: "dt-004", name: "雷王響雷煙火（20入）", categoryId: "daytime", price: 150, image: "/products/placeholder.jpg", slug: "thunder-king-20" },
  { id: "dt-005", name: "日間彩煙組合包", categoryId: "daytime", price: 350, image: "/products/placeholder.jpg", slug: "day-smoke-combo" },
  { id: "dt-006", name: "七彩煙霧彈（10入）", categoryId: "daytime", price: 200, image: "/products/placeholder.jpg", slug: "colorful-smoke-10" },

  // 吐珠升空類煙火批發
  { id: "pl-001", name: "五連珠升空煙火", categoryId: "pearl", price: 120, image: "/products/placeholder.jpg", slug: "five-pearl" },
  { id: "pl-002", name: "十連珠大發煙火", categoryId: "pearl", price: 200, image: "/products/placeholder.jpg", slug: "ten-pearl" },
  { id: "pl-003", name: "金珠噴射筒（8入）", categoryId: "pearl", price: 160, image: "/products/placeholder.jpg", slug: "gold-pearl-8" },
  { id: "pl-004", name: "彩珠升空組合 25發", categoryId: "pearl", price: 280, image: "/products/placeholder.jpg", slug: "color-pearl-25" },
  { id: "pl-005", name: "銀珠連發煙火 15發", categoryId: "pearl", price: 220, image: "/products/placeholder.jpg", slug: "silver-pearl-15" },
  { id: "pl-006", name: "超級吐珠王 30發", categoryId: "pearl", price: 350, image: "/products/placeholder.jpg", slug: "super-pearl-king-30" },

  // 沖天炮／火箭類煙火
  { id: "rk-001", name: "經典沖天炮（50入）", categoryId: "rocket", price: 100, image: "/products/placeholder.jpg", slug: "classic-rocket-50" },
  { id: "rk-002", name: "雙響沖天炮（30入）", categoryId: "rocket", price: 120, image: "/products/placeholder.jpg", slug: "double-rocket-30" },
  { id: "rk-003", name: "大型火箭煙火（6入）", categoryId: "rocket", price: 300, image: "/products/placeholder.jpg", slug: "large-rocket-6" },
  { id: "rk-004", name: "五連發火箭筒", categoryId: "rocket", price: 250, image: "/products/placeholder.jpg", slug: "five-rocket-tube" },
  { id: "rk-005", name: "迷你沖天炮（100入）", categoryId: "rocket", price: 150, image: "/products/placeholder.jpg", slug: "mini-rocket-100" },

  // 花筒類煙火批發
  { id: "ft-001", name: "金色噴泉花筒 60秒", categoryId: "fountain", price: 80, image: "/products/placeholder.jpg", slug: "gold-fountain-60s" },
  { id: "ft-002", name: "七彩噴泉花筒 90秒", categoryId: "fountain", price: 120, image: "/products/placeholder.jpg", slug: "rainbow-fountain-90s" },
  { id: "ft-003", name: "銀瀑布花筒 120秒", categoryId: "fountain", price: 180, image: "/products/placeholder.jpg", slug: "silver-waterfall-120s" },
  { id: "ft-004", name: "大型花筒組合（3入）", categoryId: "fountain", price: 350, image: "/products/placeholder.jpg", slug: "large-fountain-combo" },
  { id: "ft-005", name: "迷你花筒（10入）", categoryId: "fountain", price: 200, image: "/products/placeholder.jpg", slug: "mini-fountain-10" },
  { id: "ft-006", name: "巨型花筒煙火 180秒", categoryId: "fountain", price: 500, image: "/products/placeholder.jpg", slug: "giant-fountain-180s" },

  // 旋轉升空類煙火
  { id: "sn-001", name: "旋轉蜂炮（12入）", categoryId: "spinning", price: 90, image: "/products/placeholder.jpg", slug: "spin-bee-12" },
  { id: "sn-002", name: "飛天轉盤煙火", categoryId: "spinning", price: 150, image: "/products/placeholder.jpg", slug: "flying-wheel" },
  { id: "sn-003", name: "陀螺升空煙火（6入）", categoryId: "spinning", price: 120, image: "/products/placeholder.jpg", slug: "gyro-launch-6" },
  { id: "sn-004", name: "旋風火輪（4入）", categoryId: "spinning", price: 200, image: "/products/placeholder.jpg", slug: "fire-wheel-4" },
  { id: "sn-005", name: "升空旋轉組合包", categoryId: "spinning", price: 280, image: "/products/placeholder.jpg", slug: "spin-combo" },

  // 甩炮地面類煙火批發
  { id: "gd-001", name: "摔炮（50盒裝）", categoryId: "ground", price: 100, image: "/products/placeholder.jpg", slug: "snap-50box" },
  { id: "gd-002", name: "拉炮彩帶（24入）", categoryId: "ground", price: 80, image: "/products/placeholder.jpg", slug: "pull-confetti-24" },
  { id: "gd-003", name: "地面旋轉煙火（20入）", categoryId: "ground", price: 60, image: "/products/placeholder.jpg", slug: "ground-spin-20" },
  { id: "gd-004", name: "蛇蛋煙火（30入）", categoryId: "ground", price: 50, image: "/products/placeholder.jpg", slug: "snake-egg-30" },
  { id: "gd-005", name: "地雷花煙火（12入）", categoryId: "ground", price: 150, image: "/products/placeholder.jpg", slug: "ground-mine-12" },
  { id: "gd-006", name: "跳跳炮（40入）", categoryId: "ground", price: 120, image: "/products/placeholder.jpg", slug: "jumping-cracker-40" },

  // 廟會煙火批發專區
  { id: "tp-001", name: "廟會專用大型煙火組", categoryId: "temple", price: 2000, image: "/products/placeholder.jpg", slug: "temple-large-combo" },
  { id: "tp-002", name: "廟會排炮 200發", categoryId: "temple", price: 1500, image: "/products/placeholder.jpg", slug: "temple-row-200" },
  { id: "tp-003", name: "神明遶境專用煙火", categoryId: "temple", price: 1800, image: "/products/placeholder.jpg", slug: "temple-parade" },
  { id: "tp-004", name: "廟會蜂炮組合", categoryId: "temple", price: 2500, image: "/products/placeholder.jpg", slug: "temple-bee-combo" },
  { id: "tp-005", name: "陣頭專用煙火套組", categoryId: "temple", price: 3000, image: "/products/placeholder.jpg", slug: "temple-troupe-set" },
  { id: "tp-006", name: "慶典大型花筒（10入）", categoryId: "temple", price: 3500, image: "/products/placeholder.jpg", slug: "festival-fountain-10" },
  { id: "tp-007", name: "廟會連珠炮 500發", categoryId: "temple", price: 4000, image: "/products/placeholder.jpg", slug: "temple-chain-500" },
  { id: "tp-008", name: "開光專用煙火禮盒", categoryId: "temple", price: 1200, image: "/products/placeholder.jpg", slug: "temple-blessing-gift" },
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((c) => c.id === categoryId);
}
