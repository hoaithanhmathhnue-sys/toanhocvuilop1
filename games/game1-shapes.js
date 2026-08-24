/* ================================================================
   GAME 1: KHU VƯỜN HÌNH HỌC
   Nhận dạng hình phẳng — ngẫu nhiên hóa mỗi lần chơi
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

const SHAPES = {
  circle: { name: 'hình tròn', color: '#ffd166', desc: 'Hình tròn tròn xoe, không có góc nào cả.' },
  square: { name: 'hình vuông', color: '#9be0ff', desc: 'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.' },
  triangle: { name: 'hình tam giác', color: '#a5f0b0', desc: 'Hình tam giác có 3 cạnh và 3 đỉnh.' },
  rectangle: { name: 'hình chữ nhật', color: '#ffb3d1', desc: 'Hình chữ nhật có 2 cạnh dài bằng nhau và 2 cạnh ngắn bằng nhau.' }
};

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
    { t: 'Vì nó tròn xoe, không có góc', good: true },
    { t: 'Vì nó có 4 cạnh bằng nhau', good: false },
    { t: 'Vì nó có 3 đỉnh', good: false }
  ],
  square: [
    { t: 'Vì nó có 4 cạnh bằng nhau và 4 góc vuông', good: true },
    { t: 'Vì nó tròn, không có góc', good: false },
    { t: 'Vì nó có 3 cạnh', good: false }
  ],
  triangle: [
    { t: 'Vì nó có 3 cạnh và 3 đỉnh', good: true },
    { t: 'Vì nó có 4 cạnh', good: false },
    { t: 'Vì nó tròn xoe', good: false }
  ],
  rectangle: [
    { t: 'Vì nó có 2 cạnh dài và 2 cạnh ngắn', good: true },
    { t: 'Vì nó có 3 đỉnh', good: false },
    { t: 'Vì nó tròn, không góc', good: false }
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
    const pool = OBJ_POOL[shape];
    const chosen = shuffle(pool).slice(0, 3);
    return { shape, targets: chosen };
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
      extra.forEach(e => allObjs.push({ ...e, shape }));
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
    d.innerHTML = `<span style="font-size:44px">${o.emoji}</span><span class="lbl">${o.label}</span>`;
    d.addEventListener('click', () => handleClick(o, d, cfg));
    forest.appendChild(d);
  });

  setChat(`Hãy nhìn thật kỹ và chạm vào tất cả các ${shapeName} trong khu vườn nhé con! 🖐️`);
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
    setChat(`Ồ, vật đó là ${SHAPES[obj.shape].name} mà. Con thử nhìn kỹ xem, ${SHAPES[g1.target].name} trông thế nào nhé? 👀`);
  }
}

function allFound() {
  snd('win');
  setChat(`Con giỏi quá! Con đã tìm đủ các ${SHAPES[g1.target].name}! Bây giờ cô hỏi con nhé: Vì sao con biết đây là ${SHAPES[g1.target].name}? 🤔`);

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
    setChat(`Hmm, chưa đúng đâu con! ${SHAPES[g1.target].desc} Con chọn lại xem nào? 💡`);
  }
}

function verify() {
  const desc = SHAPES[g1.target].desc;
  setChat(`Chính xác! ${desc} Con làm rất tốt! ✨`);
  setTimeout(() => {
    if (g1.round < g1.totalRounds) {
      g1.round++;
      loadRound(g1.round);
    } else {
      showResult(1, 4, 'Con đã tìm được tất cả các hình trong khu vườn! Cô Cú tự hào quá!');
    }
  }, 2200);
}
