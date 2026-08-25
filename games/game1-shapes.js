/* ================================================================
   GAME 1: KHU VƯỜN HÌNH HỌC
   Nhận dạng hình phẳng — Lưới 3x4 (12 ô) rõ ràng, hình ảnh chuẩn xác, nhãn gọn gàng
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

const SHAPES = {
  circle: { name: 'hình tròn', color: '#ffd166', desc: 'Đồ vật tròn xoe, không có cạnh nào nên là hình tròn.' },
  square: { name: 'hình vuông', color: '#9be0ff', desc: 'Đồ vật có 4 cạnh bằng nhau nên là hình vuông.' },
  triangle: { name: 'hình tam giác', color: '#a5f0b0', desc: 'Đồ vật có 3 cạnh nên là hình tam giác.' },
  rectangle: { name: 'hình chữ nhật', color: '#ffb3d1', desc: 'Đồ vật có 2 cạnh dài bằng nhau và 2 cạnh ngắn bằng nhau nên là hình chữ nhật.' }
};

/* SVG đồ vật minh họa chuẩn hình dạng */
function svgCircleWindow() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#38bdf8" stroke="#0284c7" stroke-width="4"/><line x1="30" y1="5" x2="30" y2="55" stroke="#fff" stroke-width="3"/><line x1="5" y1="30" x2="55" y2="30" stroke="#fff" stroke-width="3"/></svg>`;
}
function svgSquareWindow() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="4" fill="#38bdf8" stroke="#0284c7" stroke-width="4"/><line x1="30" y1="6" x2="30" y2="54" stroke="#fff" stroke-width="3"/><line x1="6" y1="30" x2="54" y2="30" stroke="#fff" stroke-width="3"/></svg>`;
}
function svgWheel() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#334155" stroke="#0f172a" stroke-width="3"/><circle cx="30" cy="30" r="11" fill="#cbd5e1"/><circle cx="30" cy="30" r="4" fill="#334155"/><line x1="30" y1="5" x2="30" y2="55" stroke="#94a3b8" stroke-width="2"/><line x1="5" y1="30" x2="55" y2="30" stroke="#94a3b8" stroke-width="2"/></svg>`;
}
function svgRoundClock() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#fef08a" stroke="#ca8a04" stroke-width="4"/><circle cx="30" cy="30" r="3" fill="#000"/><line x1="30" y1="30" x2="30" y2="13" stroke="#000" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="30" x2="44" y2="30" stroke="#000" stroke-width="3" stroke-linecap="round"/></svg>`;
}
function svgSquareClock() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="4"/><circle cx="30" cy="30" r="3" fill="#000"/><line x1="30" y1="30" x2="30" y2="13" stroke="#000" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="30" x2="44" y2="30" stroke="#000" stroke-width="3" stroke-linecap="round"/></svg>`;
}
function svgPlate() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/><circle cx="30" cy="30" r="17" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/></svg>`;
}
function svgButtonCircle() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="24" fill="#ec4899" stroke="#be185d" stroke-width="3"/><circle cx="23" cy="23" r="3" fill="#ffffff"/><circle cx="37" cy="23" r="3" fill="#ffffff"/><circle cx="23" cy="37" r="3" fill="#ffffff"/><circle cx="37" cy="37" r="3" fill="#ffffff"/></svg>`;
}
function svgRoundSign() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#ef4444" stroke="#b91c1c" stroke-width="3"/><rect x="12" y="25" width="36" height="10" rx="2" fill="#ffffff"/></svg>`;
}
function svgSquareSign() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="6" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3"/><text x="30" y="38" font-size="28" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#ffffff">i</text></svg>`;
}
function svgRectSign() {
  return `<svg width="52" height="38" viewBox="0 0 60 40"><rect x="4" y="4" width="52" height="32" rx="4" fill="#f59e0b" stroke="#b45309" stroke-width="3"/><text x="30" y="26" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#ffffff">SALE</text></svg>`;
}
function svgSquareBrick() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="3"/><rect x="14" y="14" width="32" height="32" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/></svg>`;
}
function svgRectBrick() {
  return `<svg width="54" height="36" viewBox="0 0 60 40"><rect x="4" y="6" width="52" height="28" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="3"/><line x1="30" y1="6" x2="30" y2="34" stroke="#991b1b" stroke-width="2"/></svg>`;
}
function svgRubik() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="4" fill="#0f172a"/><rect x="9" y="9" width="12" height="12" rx="2" fill="#ef4444"/><rect x="24" y="9" width="12" height="12" rx="2" fill="#3b82f6"/><rect x="39" y="9" width="12" height="12" rx="2" fill="#22c55e"/><rect x="9" y="24" width="12" height="12" rx="2" fill="#eab308"/><rect x="24" y="24" width="12" height="12" rx="2" fill="#ef4444"/><rect x="39" y="24" width="12" height="12" rx="2" fill="#3b82f6"/><rect x="9" y="39" width="12" height="12" rx="2" fill="#22c55e"/><rect x="24" y="39" width="12" height="12" rx="2" fill="#eab308"/><rect x="39" y="39" width="12" height="12" rx="2" fill="#ef4444"/></svg>`;
}
function svgBanhChung() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="4" fill="#15803d" stroke="#166534" stroke-width="3"/><line x1="30" y1="6" x2="30" y2="54" stroke="#facc15" stroke-width="4"/><line x1="6" y1="30" x2="54" y2="30" stroke="#facc15" stroke-width="4"/></svg>`;
}
function svgPyramid() {
  return `<svg width="48" height="44" viewBox="0 0 60 50"><polygon points="30,4 4,46 56,46" fill="#f59e0b" stroke="#d97706" stroke-width="3"/><polygon points="30,4 30,46 56,46" fill="#d97706"/></svg>`;
}
function svgSun() {
  return `<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="16" fill="#eab308" stroke="#ca8a04" stroke-width="2"/><g stroke="#eab308" stroke-width="4" stroke-linecap="round"><line x1="30" y1="4" x2="30" y2="9"/><line x1="30" y1="51" x2="30" y2="56"/><line x1="4" y1="30" x2="9" y2="30"/><line x1="51" y1="30" x2="56" y2="30"/><line x1="11.6" y1="11.6" x2="15.1" y2="15.1"/><line x1="44.9" y1="44.9" x2="48.4" y2="48.4"/><line x1="11.6" y1="48.4" x2="15.1" y2="44.9"/><line x1="44.9" y1="15.1" x2="48.4" y2="11.6"/></g></svg>`;
}
function triSVG(points, color, size = 46) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 60 60"><polygon points="${points}" fill="${color}" stroke="${color}" stroke-width="2" stroke-linejoin="round"/></svg>`;
}

const TRI_VARIANTS = [
  { id: 'tri-deu-do',    label: 'Tam giác đều đỏ',    svg: () => triSVG('30,4 4,56 56,56', '#ef4444', 46), shape: 'triangle' },
  { id: 'tri-deu-xanh',  label: 'Tam giác đều xanh',  svg: () => triSVG('30,6 6,54 54,54', '#3b82f6', 44), shape: 'triangle' },
  { id: 'tri-can-vang',  label: 'Tam giác cân vàng',   svg: () => triSVG('30,2 8,58 52,58', '#f59e0b', 46), shape: 'triangle' },
  { id: 'tri-can-tim',   label: 'Tam giác cân tím',    svg: () => triSVG('30,4 10,56 50,56', '#a855f7', 42), shape: 'triangle' },
  { id: 'tri-nhon-cam',  label: 'Tam giác nhọn cam',   svg: () => triSVG('30,2 18,58 42,58', '#f97316', 40), shape: 'triangle' },
  { id: 'tri-nhon-hong', label: 'Tam giác nhọn hồng',  svg: () => triSVG('30,3 20,55 40,55', '#ec4899', 38), shape: 'triangle' },
  { id: 'tri-vuong-lc',  label: 'Tam giác vuông xanh lá', svg: () => triSVG('4,56 4,4 56,56', '#22c55e', 44), shape: 'triangle' },
  { id: 'tri-vuong-navy',label: 'Tam giác vuông xanh đậm', svg: () => triSVG('6,54 6,6 54,54', '#1e40af', 42), shape: 'triangle' },
];

/* Danh sách đồ vật phân bổ 4 nhóm với tên gọi tự nhiên, không bị lặp chữ hình */
const OBJ_POOL = {
  circle: [
    { id: 'sun', svgFn: svgSun, label: 'Mặt trời', isSVG: true },
    { id: 'moon', emoji: '🌕', label: 'Mặt trăng', isSVG: false },
    { id: 'wheel', svgFn: svgWheel, label: 'Bánh xe', isSVG: true },
    { id: 'clock_round', svgFn: svgRoundClock, label: 'Đồng hồ', isSVG: true },
    { id: 'ball', emoji: '⚽', label: 'Quả bóng', isSVG: false },
    { id: 'plate', svgFn: svgPlate, label: 'Cái đĩa', isSVG: true },
    { id: 'circle_window', svgFn: svgCircleWindow, label: 'Cửa sổ tròn', isSVG: true },
    { id: 'traffic_sign', svgFn: svgRoundSign, label: 'Biển báo', isSVG: true },
    { id: 'drum', emoji: '🥁', label: 'Mặt trống', isSVG: false },
    { id: 'button', svgFn: svgButtonCircle, label: 'Cúc áo', isSVG: true },
    { id: 'orange', emoji: '🍊', label: 'Quả cam', isSVG: false },
    { id: 'cookie', emoji: '🍪', label: 'Bánh quy', isSVG: false }
  ],
  triangle: [
    { id: 'roof', emoji: '🏠', label: 'Mái nhà', isSVG: false },
    { id: 'mountain', emoji: '⛰️', label: 'Ngọn núi', isSVG: false },
    { id: 'pine_tree', emoji: '🌲', label: 'Cây thông', isSVG: false },
    { id: 'flag', emoji: '🚩', label: 'Lá cờ', isSVG: false },
    { id: 'warning_sign', emoji: '⚠️', label: 'Biển cảnh báo', isSVG: false },
    { id: 'pizza_slice', emoji: '🍕', label: 'Miếng pizza', isSVG: false },
    { id: 'tent', emoji: '⛺', label: 'Lều trại', isSVG: false },
    { id: 'pyramid', svgFn: svgPyramid, label: 'Kim tự tháp', isSVG: true },
    { id: 'party_hat', emoji: '🥳', label: 'Mũ chóp', isSVG: false },
    { id: 'sail', emoji: '⛵', label: 'Cánh buồm', isSVG: false },
    { id: 'watermelon_slice', emoji: '🍉', label: 'Miếng dưa hấu', isSVG: false }
  ],
  square: [
    { id: 'sq_window', svgFn: svgSquareWindow, label: 'Cửa sổ vuông', isSVG: true },
    { id: 'sq_tile', svgFn: svgSquareBrick, label: 'Viên gạch vuông', isSVG: true },
    { id: 'rubik', svgFn: svgRubik, label: 'Khối rubik', isSVG: true },
    { id: 'gift_box', emoji: '🎁', label: 'Hộp quà', isSVG: false },
    { id: 'dice', emoji: '🎲', label: 'Xúc xắc', isSVG: false },
    { id: 'picture', emoji: '🖼️', label: 'Bức tranh', isSVG: false },
    { id: 'banh_chung', svgFn: svgBanhChung, label: 'Bánh chưng', isSVG: true },
    { id: 'sandwich', emoji: '🥪', label: 'Bánh sandwich', isSVG: false },
    { id: 'sq_clock', svgFn: svgSquareClock, label: 'Đồng hồ vuông', isSVG: true },
    { id: 'sign_sq', svgFn: svgSquareSign, label: 'Biển hiệu', isSVG: true }
  ],
  rectangle: [
    { id: 'door', emoji: '🚪', label: 'Cánh cửa', isSVG: false },
    { id: 'billboard', svgFn: svgRectSign, label: 'Bảng hiệu', isSVG: true },
    { id: 'book', emoji: '📕', label: 'Quyển sách', isSVG: false },
    { id: 'tv', emoji: '📺', label: 'Màn hình TV', isSVG: false },
    { id: 'computer', emoji: '🖥️', label: 'Màn hình máy tính', isSVG: false },
    { id: 'banknote', emoji: '💵', label: 'Tờ tiền', isSVG: false },
    { id: 'brick_rect', svgFn: svgRectBrick, label: 'Viên gạch', isSVG: true },
    { id: 'envelope', emoji: '✉️', label: 'Bao thư', isSVG: false },
    { id: 'rect_window', emoji: '🪟', label: 'Cửa sổ', isSVG: false },
    { id: 'smartphone', emoji: '📱', label: 'Điện thoại', isSVG: false },
    { id: 'ruler', emoji: '📏', label: 'Thước kẻ', isSVG: false },
    { id: 'road', emoji: '🛣️', label: 'Con đường', isSVG: false }
  ]
};

const REASONS = {
  circle: [
    { t: 'Vì nó tròn xoe, không có cạnh nào', good: true },
    { t: 'Vì nó có 4 cạnh bằng nhau', good: false },
    { t: 'Vì nó có 3 cạnh', good: false }
  ],
  square: [
    { t: 'Vì nó có 4 cạnh bằng nhau', good: true },
    { t: 'Vì nó tròn, không có cạnh', good: false },
    { t: 'Vì nó có 3 cạnh', good: false }
  ],
  triangle: [
    { t: 'Vì nó có 3 cạnh', good: true },
    { t: 'Vì nó có 4 cạnh', good: false },
    { t: 'Vì nó tròn xoe', good: false }
  ],
  rectangle: [
    { t: 'Vì nó có 2 cạnh dài và 2 cạnh ngắn', good: true },
    { t: 'Vì nó chỉ có 3 cạnh', good: false },
    { t: 'Vì nó tròn, không có cạnh', good: false }
  ]
};

function shuffle(a) { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

let g1 = { round: 1, target: 'circle', found: [], roundCfg: [], totalRounds: 4 };

function buildRounds() {
  const order = shuffle(['circle', 'square', 'triangle', 'rectangle']);
  return order.map(shape => {
    let targets = [];
    if (shape === 'triangle') {
      const emojiTargets = shuffle(OBJ_POOL.triangle).slice(0, 2);
      const svgTargets = shuffle(TRI_VARIANTS).slice(0, 2);
      targets = [
        ...emojiTargets,
        ...svgTargets.map(t => ({ id: t.id, label: t.label, svgFn: t.svg, isSVG: true }))
      ];
    } else {
      const pool = OBJ_POOL[shape];
      targets = shuffle(pool).slice(0, 4);
    }
    return { shape, targets };
  });
}

function buildGridObjects(cfg) {
  const targetShape = cfg.shape;
  const targets = cfg.targets.map(t => ({ ...t, shape: targetShape }));

  // Chọn 8 distractors từ 3 hình còn lại (3 + 3 + 2 = 8 món)
  const otherShapes = ['circle', 'square', 'triangle', 'rectangle'].filter(s => s !== targetShape);
  let distractors = [];

  otherShapes.forEach((s, idx) => {
    const count = idx === 0 ? 3 : (idx === 1 ? 3 : 2);
    const items = shuffle(OBJ_POOL[s]).slice(0, count);
    items.forEach(item => distractors.push({ ...item, shape: s }));
  });

  // Tổng cộng 4 mục tiêu + 8 gây nhiễu = 12 ô (Lưới 3x4)
  const all12 = shuffle([...targets, ...distractors]);
  return all12;
}

export function initG1() {
  g1.round = 1;
  g1.roundCfg = buildRounds();
  g1.totalRounds = g1.roundCfg.length;
  loadRound(1);
}

function loadRound(r) {
  const cfg = g1.roundCfg[r - 1];
  g1.target = cfg.shape;
  g1.found = [];
  makePills('g1pills', g1.totalRounds, r, []);

  const a = document.getElementById('g1area');
  const shapeName = SHAPES[cfg.shape].name;
  a.innerHTML = `
    <div class="prompt-box">🌲 Hãy chạm vào tất cả <b>${shapeName}</b> trong khu vườn!</div>
    <div class="forest-grid" id="g1forest"></div>
  `;

  const gridObjs = buildGridObjects(cfg);
  const forest = document.getElementById('g1forest');

  gridObjs.forEach(o => {
    const d = document.createElement('div');
    d.className = 'obj-card';
    d.id = 'obj-' + o.id;

    if (o.isSVG && o.svgFn) {
      d.innerHTML = `<div class="icon-wrap">${o.svgFn()}</div><div class="lbl">${o.label}</div>`;
    } else {
      d.innerHTML = `<div class="icon-wrap">${o.emoji}</div><div class="lbl">${o.label}</div>`;
    }
    d.addEventListener('click', () => handleClick(o, d, cfg));
    forest.appendChild(d);
  });

  setChat(`Hãy nhìn thật kỹ và chạm vào tất cả các ${shapeName} trong khu vườn nhé con!`);
}

function handleClick(obj, el, cfg) {
  if (g1.found.includes(obj.id)) return;

  if (obj.shape === g1.target) {
    snd('correct');
    g1.found.push(obj.id);
    el.classList.add('found');
    el.innerHTML += '<div class="check-mark">✓</div>';

    if (g1.found.length === cfg.targets.length) {
      setTimeout(() => allFound(), 600);
    }
  } else {
    snd('wrong');
    el.classList.remove('shake-it');
    void el.offsetWidth;
    el.classList.add('shake-it');
    setTimeout(() => el.classList.remove('shake-it'), 500);
    setChat(`Con thử nhìn kỹ ${obj.label} nhé: nó có mấy cạnh? Trông nó tròn hay thẳng? Hãy so sánh với ${SHAPES[g1.target].name} – giống hay khác? Con chọn lại lần nữa xem nào!`);
  }
}

function allFound() {
  snd('win');
  setChat(`Con giỏi quá! Con đã tìm đủ các ${SHAPES[g1.target].name}! Bây giờ cô hỏi con nhé: Vì sao con biết đây là ${SHAPES[g1.target].name}?`);

  const a = document.getElementById('g1area');
  a.innerHTML += `
    <div class="prompt-box" style="margin-top:16px;">❓ Vì sao con biết đây là <b>${SHAPES[g1.target].name}</b>?</div>
    <div class="reason-grid" id="g1reasons"></div>
  `;

  const rs = document.getElementById('g1reasons');
  const shuffled = shuffle(REASONS[g1.target]);
  shuffled.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.textContent = opt.t;
    b.addEventListener('click', () => handleReason(b, opt));
    rs.appendChild(b);
  });
}

function handleReason(btn, opt) {
  if (opt.good) {
    btn.classList.add('correct');
    snd('correct');
    document.querySelectorAll('#g1reasons .reason-btn').forEach(x => { x.disabled = true; });
    verify();
  } else {
    btn.classList.add('wrong');
    snd('wrong');
    setTimeout(() => btn.classList.remove('wrong'), 600);
    setChat(`Con thử nhìn kỹ hình này nhé: nó có mấy cạnh? Trông nó tròn hay thẳng? Hãy so sánh với ${SHAPES[g1.target].name} con vừa tìm được – giống hay khác? Con sửa lại lần nữa xem nào!`);
  }
}

function verify() {
  const desc = SHAPES[g1.target].desc;
  setChat(`Chính xác! ${desc} Con giỏi quá!`, true, () => {
    setTimeout(() => {
      if (g1.round < g1.totalRounds) {
        g1.round++;
        loadRound(g1.round);
      } else {
        showResult(1, 4, 'Con đã tìm được tất cả các hình trong khu vườn! Cô Cú thông thái tự hào quá!');
      }
    }, 1500);
  });
}
