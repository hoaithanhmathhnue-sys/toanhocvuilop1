/* ================================================================
   GAME 1: KHU VƯỜN HÌNH HỌC
   Nhận dạng hình phẳng: tròn, vuông, tam giác, chữ nhật
   Pattern: Trải nghiệm → Biểu đạt → Kiểm chứng
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

const SHAPES = {
  circle: { name: 'hình tròn', color: '#ffd166', desc: 'Hình tròn tròn xoe, không có góc nào cả.' },
  square: { name: 'hình vuông', color: '#9be0ff', desc: 'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.' },
  triangle: { name: 'hình tam giác', color: '#a5f0b0', desc: 'Hình tam giác có 3 cạnh và 3 đỉnh.' },
  rectangle: { name: 'hình chữ nhật', color: '#ffb3d1', desc: 'Hình chữ nhật có 4 cạnh, 2 cạnh dài bằng nhau và 2 cạnh ngắn bằng nhau.' }
};

const OBJECTS = [
  { id: 'sun', shape: 'circle', emoji: '🌞', label: 'Mặt trời', x: 14, y: 8 },
  { id: 'ball', shape: 'circle', emoji: '⚽', label: 'Quả bóng', x: 72, y: 52 },
  { id: 'moon', shape: 'circle', emoji: '🌙', label: 'Trăng', x: 82, y: 8 },
  { id: 'window', shape: 'square', emoji: '🪟', label: 'Cửa sổ', x: 58, y: 30 },
  { id: 'gift', shape: 'square', emoji: '🎁', label: 'Hộp quà', x: 44, y: 58 },
  { id: 'tree', shape: 'triangle', emoji: '🌲', label: 'Cây thông', x: 26, y: 36 },
  { id: 'roof', shape: 'triangle', emoji: '🔺', label: 'Mái nhà', x: 50, y: 14 },
  { id: 'sign', shape: 'rectangle', emoji: '🪧', label: 'Bảng hiệu', x: 64, y: 8 },
  { id: 'door', shape: 'rectangle', emoji: '🚪', label: 'Cửa ra vào', x: 36, y: 50 }
];

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

let g1 = { round: 1, target: 'circle', found: [], roundCfg: [], totalRounds: 4 };

function buildRounds() {
  const order = ['circle', 'square', 'triangle', 'rectangle'];
  return order.map(shape => ({
    shape,
    objects: OBJECTS.filter(o => o.shape === shape).slice(0, 3)
  }));
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
    <div class="forest" id="g1forest"></div>
  `;

  const forest = document.getElementById('g1forest');
  // Add decorative background elements
  forest.innerHTML = `
    <div style="position:absolute;top:5%;left:5%;font-size:2rem;opacity:0.3">🌿</div>
    <div style="position:absolute;top:70%;left:85%;font-size:2.5rem;opacity:0.3">🌻</div>
    <div style="position:absolute;top:80%;left:15%;font-size:2rem;opacity:0.3">🍄</div>
    <div style="position:absolute;top:15%;right:5%;font-size:1.8rem;opacity:0.3">☁️</div>
  `;

  OBJECTS.forEach(o => {
    const d = document.createElement('div');
    d.className = 'obj';
    d.id = 'obj-' + o.id;
    d.style.left = o.x + '%';
    d.style.top = o.y + '%';
    d.innerHTML = `<span style="font-size:44px">${o.emoji}</span><span class="lbl">${o.label}</span>`;
    d.addEventListener('click', () => handleClick(o, d));
    forest.appendChild(d);
  });

  setChat(`Hãy nhìn thật kỹ và chạm vào tất cả các ${shapeName} trong khu vườn nhé con! 🖐️`);
}

function handleClick(obj, el) {
  if (g1.found.includes(obj.id)) return;

  if (obj.shape === g1.target) {
    snd('correct');
    g1.found.push(obj.id);
    el.classList.add('found');
    el.innerHTML += '<div class="check-mark">✓</div>';

    if (g1.found.length === g1.roundCfg[g1.round - 1].objects.length) {
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
  const shuffled = [...REASONS[g1.target]].sort(() => Math.random() - 0.5);
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
