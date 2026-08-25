/* ================================================================
   GAME 1: KHU VƯỜN HÌNH HỌC
   Nhận dạng hình phẳng — Lưới 3x4 (12 ô) rõ ràng, không dính hình
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

const SHAPES = {
  circle: { name: 'hình tròn', color: '#ffd166', desc: 'Đồ vật tròn xoe, không có cạnh nào nên là hình tròn.' },
  square: { name: 'hình vuông', color: '#9be0ff', desc: 'Đồ vật có 4 cạnh bằng nhau nên là hình vuông.' },
  triangle: { name: 'hình tam giác', color: '#a5f0b0', desc: 'Đồ vật có 3 cạnh nên là hình tam giác.' },
  rectangle: { name: 'hình chữ nhật', color: '#ffb3d1', desc: 'Đồ vật có 2 cạnh dài bằng nhau và 2 cạnh ngắn bằng nhau nên là hình chữ nhật.' }
};

/* SVG tam giác đa dạng */
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

/* Danh sách đồ vật phân bổ 4 nhóm theo yêu cầu người dùng */
const OBJ_POOL = {
  circle: [
    { id: 'sun', emoji: '☀️', label: 'Mặt trời' },
    { id: 'moon', emoji: '🌕', label: 'Mặt trăng' },
    { id: 'wheel', emoji: '🛞', label: 'Bánh xe' },
    { id: 'clock', emoji: '⏰', label: 'Đồng hồ' },
    { id: 'ball', emoji: '⚽', label: 'Quả bóng' },
    { id: 'plate', emoji: '🍽️', label: 'Cái đĩa' },
    { id: 'circle_window', emoji: '🪟', label: 'Cửa sổ tròn' },
    { id: 'traffic_sign', emoji: '🚫', label: 'Biển báo tròn' },
    { id: 'drum', emoji: '🥁', label: 'Mặt trống' },
    { id: 'button', emoji: '🔘', label: 'Cúc áo' }
  ],
  triangle: [
    { id: 'roof', emoji: '🏠', label: 'Mái nhà' },
    { id: 'mountain', emoji: '⛰️', label: 'Ngọn núi' },
    { id: 'pine_tree', emoji: '🌲', label: 'Cây thông' },
    { id: 'flag', emoji: '🚩', label: 'Lá cờ tam giác' },
    { id: 'warning_sign', emoji: '⚠️', label: 'Biển cảnh báo' },
    { id: 'pizza_slice', emoji: '🍕', label: 'Miếng pizza' },
    { id: 'tent', emoji: '⛺', label: 'Lều trại' },
    { id: 'pyramid', emoji: '🛕', label: 'Kim tự tháp' },
    { id: 'cone_hat', emoji: '🥳', label: 'Mũ chóp' },
    { id: 'sail', emoji: '⛵', label: 'Cánh buồm' }
  ],
  square: [
    { id: 'sq_window', emoji: '🪟', label: 'Cửa sổ vuông' },
    { id: 'sq_tile', emoji: '🧱', label: 'Viên gạch vuông' },
    { id: 'rubik', emoji: '🧊', label: 'Khối rubik' },
    { id: 'sq_door_window', emoji: '⏹️', label: 'Ô cửa' },
    { id: 'picture', emoji: '🖼️', label: 'Bức tranh vuông' },
    { id: 'sign_sq', emoji: '🪧', label: 'Biển hiệu vuông' },
    { id: 'floor_tile', emoji: '🟫', label: 'Gạch lát nền' },
    { id: 'box', emoji: '📦', label: 'Chiếc hộp vuông' },
    { id: 'frame', emoji: '🖼️', label: 'Khung ảnh vuông' },
    { id: 'sq_clock', emoji: '⏹️', label: 'Đồng hồ vuông' }
  ],
  rectangle: [
    { id: 'door', emoji: '🚪', label: 'Cánh cửa' },
    { id: 'billboard', emoji: '🪧', label: 'Bảng hiệu' },
    { id: 'book', emoji: '📕', label: 'Quyển sách' },
    { id: 'tv', emoji: '📺', label: 'Màn hình TV' },
    { id: 'computer', emoji: '🖥️', label: 'Màn hình máy tính' },
    { id: 'desk', emoji: '🛋️', label: 'Bàn học' },
    { id: 'brick', emoji: '🧱', label: 'Viên gạch' },
    { id: 'sign_board', emoji: '🏷️', label: 'Tấm biển' },
    { id: 'rect_window', emoji: '🪟', label: 'Cửa sổ chữ nhật' },
    { id: 'road', emoji: '🛣️', label: 'Con đường' },
    { id: 'bridge', emoji: '🌉', label: 'Cây cầu' },
    { id: 'fence', emoji: '🪵', label: 'Hàng rào' }
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
        ...emojiTargets.map(t => ({ ...t, isSVG: false })),
        ...svgTargets.map(t => ({ id: t.id, label: t.label, svgFn: t.svg, isSVG: true }))
      ];
    } else {
      const pool = OBJ_POOL[shape];
      targets = shuffle(pool).slice(0, 4).map(t => ({ ...t, isSVG: false }));
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
    items.forEach(item => distractors.push({ ...item, shape: s, isSVG: false }));
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
  setChat(`Chính xác! ${desc} Con giỏi quá! Bây giờ hãy nói cho bạn nghe vì sao con chọn nhé!`, true, () => {
    setTimeout(() => {
      if (g1.round < g1.totalRounds) {
        g1.round++;
        loadRound(g1.round);
      } else {
        showResult(1, 4, 'Con đã tìm được tất cả các hình trong khu vườn! Cô Cú thông thái tự hào quá!');
      }
    }, 800);
  });
}
