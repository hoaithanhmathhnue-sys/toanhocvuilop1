/* ================================================================
   GAME 1: KHU VƯỜN HÌNH HỌC
   Nhận dạng hình phẳng — ngẫu nhiên hóa mỗi lần chơi
   Thêm tam giác SVG đa dạng (cân, đều, nhọn, vuông)
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

const SHAPES = {
  circle: { name: 'hình tròn', color: '#ffd166', desc: 'Đồ vật tròn xoe, không có cạnh nào nên là hình tròn.' },
  square: { name: 'hình vuông', color: '#9be0ff', desc: 'Đồ vật có 4 cạnh bằng nhau nên là hình vuông.' },
  triangle: { name: 'hình tam giác', color: '#a5f0b0', desc: 'Đồ vật có 3 cạnh nên là hình tam giác.' },
  rectangle: { name: 'hình chữ nhật', color: '#ffb3d1', desc: 'Đồ vật có 2 cạnh dài bằng nhau và 2 cạnh ngắn bằng nhau nên là hình chữ nhật.' }
};

/* SVG tam giác đa dạng */
function triSVG(points, color, size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 60 60"><polygon points="${points}" fill="${color}" stroke="${color}" stroke-width="2" stroke-linejoin="round"/></svg>`;
}

const TRI_VARIANTS = [
  { id: 'tri-deu-do',    label: 'Tam giác đều đỏ',    svg: () => triSVG('30,4 4,56 56,56', '#ef4444', 52), shape: 'triangle' },
  { id: 'tri-deu-xanh',  label: 'Tam giác đều xanh',  svg: () => triSVG('30,6 6,54 54,54', '#3b82f6', 44), shape: 'triangle' },
  { id: 'tri-can-vang',  label: 'Tam giác cân vàng',   svg: () => triSVG('30,2 8,58 52,58', '#f59e0b', 48), shape: 'triangle' },
  { id: 'tri-can-tim',   label: 'Tam giác cân tím',    svg: () => triSVG('30,4 10,56 50,56', '#a855f7', 40), shape: 'triangle' },
  { id: 'tri-nhon-cam',  label: 'Tam giác nhọn cam',   svg: () => triSVG('30,2 18,58 42,58', '#f97316', 38), shape: 'triangle' },
  { id: 'tri-nhon-hong', label: 'Tam giác nhọn hồng',  svg: () => triSVG('30,3 20,55 40,55', '#ec4899', 34), shape: 'triangle' },
  { id: 'tri-vuong-lc',  label: 'Tam giác vuông xanh lá', svg: () => triSVG('4,56 4,4 56,56', '#22c55e', 46), shape: 'triangle' },
  { id: 'tri-vuong-navy',label: 'Tam giác vuông xanh đậm', svg: () => triSVG('6,54 6,6 54,54', '#1e40af', 42), shape: 'triangle' },
  { id: 'tri-to-do',     label: 'Tam giác to đỏ',      svg: () => triSVG('30,2 2,58 58,58', '#dc2626', 56), shape: 'triangle' },
  { id: 'tri-nho-xanh',  label: 'Tam giác nhỏ xanh',   svg: () => triSVG('30,10 14,50 46,50', '#06b6d4', 32), shape: 'triangle' },
];

/* Pool đồ vật lớn — random chọn mỗi lần */
const OBJ_POOL = {
  circle: [
    { id: 'sun', emoji: '🌞', label: 'Mặt trời' },
    { id: 'ball', emoji: '⚽', label: 'Quả bóng' },
    { id: 'moon', emoji: '🌕', label: 'Trăng tròn' },
    { id: 'cookie', emoji: '🍪', label: 'Bánh quy' },
    { id: 'clock', emoji: '🕐', label: 'Đồng hồ' },
    { id: 'coin', emoji: '💿', label: 'Đĩa CD' },
    { id: 'pizza', emoji: '🍕', label: 'Pizza' },
    { id: 'watermelon', emoji: '🍉', label: 'Dưa hấu' }
  ],
  square: [
    { id: 'window', emoji: '🟦', label: 'Cửa sổ' },
    { id: 'gift', emoji: '🎁', label: 'Hộp quà' },
    { id: 'dice', emoji: '🎲', label: 'Xúc xắc' },
    { id: 'tv', emoji: '📺', label: 'Ti vi' },
    { id: 'frame', emoji: '🖼️', label: 'Khung ảnh' },
    { id: 'napkin', emoji: '🧻', label: 'Khăn vuông' },
    { id: 'waffle', emoji: '🧇', label: 'Bánh kẹp' }
  ],
  triangle: [
    { id: 'tree', emoji: '🌲', label: 'Cây thông' },
    { id: 'roof', emoji: '🔺', label: 'Mái nhà' },
    { id: 'tent', emoji: '⛺', label: 'Cái lều' },
    { id: 'pizza2', emoji: '🍕', label: 'Miếng pizza' },
    { id: 'warn', emoji: '⚠️', label: 'Biển cảnh báo' },
    { id: 'mountain', emoji: '⛰️', label: 'Ngọn núi' },
    { id: 'sail', emoji: '⛵', label: 'Cánh buồm' }
  ],
  rectangle: [
    { id: 'sign', emoji: '🪧', label: 'Bảng hiệu' },
    { id: 'door', emoji: '🚪', label: 'Cửa ra vào' },
    { id: 'book', emoji: '📕', label: 'Quyển sách' },
    { id: 'phone', emoji: '📱', label: 'Điện thoại' },
    { id: 'flag', emoji: '🏳️', label: 'Lá cờ' },
    { id: 'ticket', emoji: '🎫', label: 'Vé xe' },
    { id: 'ruler', emoji: '📏', label: 'Cây thước' }
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

/* Sinh vị trí ngẫu nhiên không chồng nhau */
function randomPositions(count) {
  const positions = [];
  const used = [];
  for (let i = 0; i < count; i++) {
    let x, y, tries = 0;
    do {
      x = 8 + Math.random() * 78;
      y = 8 + Math.random() * 65;
      tries++;
    } while (tries < 50 && used.some(p => Math.abs(p.x - x) < 14 && Math.abs(p.y - y) < 18));
    used.push({ x, y });
    positions.push({ x: Math.round(x), y: Math.round(y) });
  }
  return positions;
}

let g1 = { round: 1, target: 'circle', found: [], roundCfg: [], totalRounds: 4, objects: [] };

function buildRounds() {
  const order = shuffle(['circle', 'square', 'triangle', 'rectangle']);
  return order.map(shape => {
    if (shape === 'triangle') {
      // Vòng tam giác: mix emoji + SVG tam giác đa dạng
      const emojiTargets = shuffle(OBJ_POOL.triangle).slice(0, 2);
      const svgTargets = shuffle(TRI_VARIANTS).slice(0, 3);
      const targets = [
        ...emojiTargets.map(t => ({ ...t, isSVG: false })),
        ...svgTargets.map(t => ({ id: t.id, label: t.label, svgFn: t.svg, isSVG: true }))
      ];
      return { shape, targets };
    }
    const pool = OBJ_POOL[shape];
    const chosen = shuffle(pool).slice(0, 3);
    return { shape, targets: chosen.map(t => ({ ...t, isSVG: false })) };
  });
}

function buildObjects(roundCfg) {
  const allObjs = [];
  const allShapes = ['circle', 'square', 'triangle', 'rectangle'];

  roundCfg.forEach(rc => {
    rc.targets.forEach(t => {
      allObjs.push({ ...t, shape: rc.shape });
    });
  });

  // Thêm distractor từ hình khác
  allShapes.forEach(shape => {
    const existing = allObjs.filter(o => o.shape === shape).length;
    if (existing < 2) {
      const extra = shuffle(OBJ_POOL[shape]).slice(0, 2 - existing);
      extra.forEach(e => allObjs.push({ ...e, shape, isSVG: false }));
    }
  });

  const positions = randomPositions(allObjs.length);
  return allObjs.map((o, i) => ({ ...o, x: positions[i].x, y: positions[i].y }));
}

export function initG1() {
  g1.round = 1;
  g1.roundCfg = buildRounds();
  g1.totalRounds = g1.roundCfg.length;
  g1.objects = buildObjects(g1.roundCfg);
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
    <div class="forest" id="g1forest"></div>
  `;

  const forest = document.getElementById('g1forest');
  const decos = ['🌿', '🌻', '🍄', '☁️', '🦋', '🐞', '🌼'];
  for (let i = 0; i < 4; i++) {
    const d = document.createElement('div');
    d.style.cssText = `position:absolute;top:${10 + Math.random()*70}%;left:${5 + Math.random()*85}%;font-size:${1.5+Math.random()}rem;opacity:0.3`;
    d.textContent = decos[Math.floor(Math.random() * decos.length)];
    forest.appendChild(d);
  }

  g1.objects.forEach(o => {
    const d = document.createElement('div');
    d.className = 'obj';
    d.id = 'obj-' + o.id;
    d.style.left = o.x + '%';
    d.style.top = o.y + '%';

    if (o.isSVG && o.svgFn) {
      // SVG tam giác đa dạng
      d.innerHTML = `<span style="display:inline-block">${o.svgFn()}</span><span class="lbl">${o.label}</span>`;
    } else {
      d.innerHTML = `<span style="font-size:44px">${o.emoji}</span><span class="lbl">${o.label}</span>`;
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
      setTimeout(() => allFound(), 700);
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
    <div class="prompt-box">❓ Vì sao con biết đây là <b>${SHAPES[g1.target].name}</b>?</div>
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
