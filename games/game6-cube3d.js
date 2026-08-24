/* ================================================================
   GAME 6: KHỐI LẬP PHƯƠNG THẦN KỲ (Bài 15)
   Xoay khối 3D CSS, đoán mặt, khai triển hình, thử thách
   Pattern: Trải nghiệm → Biểu đạt → Kiểm chứng
   ================================================================ */
import { setChat, snd, makePills, showResult, confetti } from '../main.js';

/* ============ FACE DATA ============ */
const FACES = {
  front: { name: 'Mặt trước', colorName: 'màu đỏ', icon: '🌟', color: '#ef4444', n: [0, 0, 1] },
  back: { name: 'Mặt sau', colorName: 'màu tím', icon: '🎈', color: '#a855f7', n: [0, 0, -1] },
  top: { name: 'Mặt trên', colorName: 'màu xanh', icon: '☀️', color: '#3b82f6', n: [0, 1, 0] },
  bottom: { name: 'Mặt dưới', colorName: 'màu cam', icon: '🍂', color: '#f97316', n: [0, -1, 0] },
  right: { name: 'Mặt bên phải', colorName: 'màu vàng', icon: '⭐', color: '#facc15', n: [1, 0, 0] },
  left: { name: 'Mặt bên trái', colorName: 'màu hồng', icon: '🌸', color: '#ec4899', n: [-1, 0, 0] }
};

const ROUNDS = [
  { axis: 'right', need: 1, label: 'SANG PHẢI 1 lần',
    explain: { front: 'Quay sang phải → mặt vàng ⭐ ra trước!', top: 'Quay ngang → mặt trên vẫn là xanh ☀️!', right: 'Quay phải → mặt tím 🎈 sang phải!' }},
  { axis: 'up', need: 1, label: 'LÊN 1 lần',
    explain: { front: 'Quay lên → mặt xanh ☀️ ra trước!', top: 'Quay lên → mặt tím 🎈 lên trên!', right: 'Mặt vàng ⭐ vẫn ở phải!' }},
  { axis: 'left', need: 1, label: 'SANG TRÁI 1 lần',
    explain: { front: 'Quay trái → mặt hồng 🌸 ra trước!', top: 'Mặt xanh ☀️ vẫn trên!', right: 'Mặt đỏ 🌟 sang phải!' }},
  { axis: 'down', need: 1, label: 'XUỐNG 1 lần',
    explain: { front: 'Quay xuống → mặt cam 🍂 ra trước!', top: 'Mặt đỏ 🌟 lên trên!', right: 'Mặt vàng ⭐ vẫn phải!' }}
];

let rx = 0, ry = 0;
let phase = 'explore'; // explore | net | challenge
let chalRound = 0, chalQ = 0, chalRotCount = 0, attempts = 0, earnedStars = {};

/* ============ ROTATION MATH ============ */
function rotMatrix(rxd, ryd) {
  const a = rxd * Math.PI / 180, b = ryd * Math.PI / 180;
  const cx = Math.cos(a), sx = Math.sin(a), cy = Math.cos(b), sy = Math.sin(b);
  const Rx = [[1, 0, 0], [0, cx, -sx], [0, sx, cx]];
  const Ry = [[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]];
  const R = [];
  for (let i = 0; i < 3; i++) { R[i] = []; for (let j = 0; j < 3; j++) { let s = 0; for (let k = 0; k < 3; k++) s += Rx[i][k] * Ry[k][j]; R[i][j] = s; } }
  return R;
}
function rotVec(R, v) { return [R[0][0]*v[0]+R[0][1]*v[1]+R[0][2]*v[2], R[1][0]*v[0]+R[1][1]*v[1]+R[1][2]*v[2], R[2][0]*v[0]+R[2][1]*v[1]+R[2][2]*v[2]]; }

function getCurrentFaces() {
  const R = rotMatrix(rx, ry);
  const res = { front: null, top: null, right: null };
  let bz = -2, by = -2, bx = -2;
  for (const k in FACES) {
    const w = rotVec(R, FACES[k].n);
    if (w[2] > bz) { bz = w[2]; res.front = k; }
    if (w[1] > by) { by = w[1]; res.top = k; }
    if (w[0] > bx) { bx = w[0]; res.right = k; }
  }
  return res;
}

function updateCubeTransform() {
  const cube = document.getElementById('g6cube');
  if (cube) cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  updateSeeTable();
}

function updateSeeTable() {
  const cf = getCurrentFaces();
  const ids = [['seeFront6', cf.front], ['seeTop6', cf.top], ['seeRight6', cf.right]];
  ids.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el || !key) return;
    const f = FACES[key];
    el.style.background = f.color;
    el.style.color = key === 'right' ? '#5b4a00' : '#fff';
    el.innerHTML = `<div style="font-size:0.7rem">${f.name}</div><div style="font-size:1rem;margin-top:2px">${f.icon} ${f.colorName}</div>`;
  });
}

/* ============ INIT ============ */
export function initG6() {
  rx = 0; ry = 0;
  phase = 'explore';
  earnedStars = {};
  loadExplore();
}

/* ============ EXPLORE PHASE ============ */
function loadExplore() {
  phase = 'explore';
  makePills('g6pills', 3, 1, []);

  const a = document.getElementById('g6area');
  a.innerHTML = `
    <div class="prompt-box">🧊 Đây là Khối Lập Phương! Con hãy xoay khối và quan sát 6 mặt nhé!</div>
    <div class="g6-layout">
      <div class="g6-center">
        <div class="cube-scene" id="g6scene">
          <div class="cube3d-interactive" id="g6cube">
            <div class="cube-face cf-front">🌟<br><small>Trước</small></div>
            <div class="cube-face cf-back">🎈<br><small>Sau</small></div>
            <div class="cube-face cf-top">☀️<br><small>Trên</small></div>
            <div class="cube-face cf-bottom">🍂<br><small>Dưới</small></div>
            <div class="cube-face cf-right">⭐<br><small>Phải</small></div>
            <div class="cube-face cf-left">🌸<br><small>Trái</small></div>
          </div>
        </div>
        <div class="see-table">
          <div style="text-align:center;font-weight:800;color:var(--purple-700);margin-bottom:8px">👀 Con nhìn thấy gì?</div>
          <div class="see-grid6">
            <div class="see-cell6" id="seeFront6"></div>
            <div class="see-cell6" id="seeTop6"></div>
            <div class="see-cell6" id="seeRight6"></div>
          </div>
        </div>
      </div>
      <div class="g6-controls">
        <div class="arrow-grid6">
          <button class="rot-btn6 rb-up" id="g6up">⬆️<br><small>Lên</small></button>
          <button class="rot-btn6 rb-down" id="g6down">⬇️<br><small>Xuống</small></button>
          <button class="rot-btn6 rb-left" id="g6left">⬅️<br><small>Trái</small></button>
          <button class="rot-btn6 rb-right" id="g6right">➡️<br><small>Phải</small></button>
        </div>
        <div class="action-row" style="flex-direction:column;gap:8px;margin-top:12px">
          <button class="action-btn btn-amber" id="g6reset" style="width:100%">🔀 Về ban đầu</button>
          <button class="action-btn btn-green" id="g6net" style="width:100%">📦 Mở khối – khai triển</button>
          <button class="action-btn btn-pink" id="g6challenge" style="width:100%">🎮 Thử thách Cô Cú</button>
        </div>
      </div>
    </div>
  `;

  // Button events
  document.getElementById('g6up').addEventListener('click', () => doRotate('up'));
  document.getElementById('g6down').addEventListener('click', () => doRotate('down'));
  document.getElementById('g6left').addEventListener('click', () => doRotate('left'));
  document.getElementById('g6right').addEventListener('click', () => doRotate('right'));
  document.getElementById('g6reset').addEventListener('click', () => { rx = 0; ry = 0; updateCubeTransform(); snd('click'); });
  document.getElementById('g6net').addEventListener('click', loadNet);
  document.getElementById('g6challenge').addEventListener('click', startChallenge);

  // Drag support
  setupDrag();
  updateCubeTransform();
  setChat('Chào con! Đây là khối lập phương có 6 mặt đều là hình vuông. Con hãy bấm các nút hoặc kéo khối để xoay và quan sát nhé! 🧊');
}

function setupDrag() {
  const scene = document.getElementById('g6scene');
  if (!scene) return;
  let dragging = false, sx = 0, sy = 0, srx = 0, sry = 0;
  scene.addEventListener('pointerdown', e => {
    dragging = true; sx = e.clientX; sy = e.clientY; srx = rx; sry = ry;
    scene.setPointerCapture(e.pointerId);
  });
  scene.addEventListener('pointermove', e => {
    if (!dragging) return;
    ry = sry + (e.clientX - sx) * 0.5;
    rx = srx - (e.clientY - sy) * 0.5;
    updateCubeTransform();
  });
  ['pointerup', 'pointercancel'].forEach(ev => scene.addEventListener(ev, () => { dragging = false; }));
}

function doRotate(axis) {
  snd('click');
  if (axis === 'up') rx -= 90;
  else if (axis === 'down') rx += 90;
  else if (axis === 'left') ry -= 90;
  else if (axis === 'right') ry += 90;
  updateCubeTransform();

  // Challenge mode tracking
  if (phase === 'challenge') {
    const r = ROUNDS[chalRound];
    if (axis === r.axis) {
      chalRotCount++;
      if (chalRotCount >= r.need) {
        setTimeout(() => askChalQ(), 600);
      }
    }
  }
}

/* ============ NET (KHAI TRIỂN) ============ */
function loadNet() {
  phase = 'net';
  makePills('g6pills', 3, 2, [1]);

  const a = document.getElementById('g6area');
  a.innerHTML = `
    <div class="prompt-box">📦 Mở khối lập phương ra, con thấy 6 mặt đều là hình vuông!</div>
    <div class="net-grid6">
      <div class="net-cell6 nc-back" style="background:#a855f7">🎈<br><small>Sau</small></div>
      <div class="net-cell6 nc-top" style="background:#3b82f6">☀️<br><small>Trên</small></div>
      <div class="net-cell6 nc-left" style="background:#ec4899">🌸<br><small>Trái</small></div>
      <div class="net-cell6 nc-front" style="background:#ef4444">🌟<br><small>Trước</small></div>
      <div class="net-cell6 nc-right" style="background:#facc15;color:#5b4a00">⭐<br><small>Phải</small></div>
      <div class="net-cell6 nc-bottom" style="background:#f97316">🍂<br><small>Dưới</small></div>
    </div>
    <div class="note-sm" style="margin:12px 0">💡 Mặt đỏ 🌟 luôn đối diện mặt tím 🎈. Mặt xanh ☀️ đối diện mặt cam 🍂!</div>
    <div class="action-row">
      <button class="action-btn btn-purple" id="g6foldBack">📦 Gấp lại khối</button>
    </div>
  `;

  document.getElementById('g6foldBack').addEventListener('click', () => { rx = 0; ry = 0; loadExplore(); });
  setChat('Mở khối ra, con thấy 6 mặt đều là hình vuông đúng không? Mặt đỏ 🌟 luôn đối diện mặt tím 🎈 nhé! 📦');
}

/* ============ CHALLENGE ============ */
function startChallenge() {
  phase = 'challenge';
  chalRound = 0;
  earnedStars = {};
  rx = 0; ry = 0;
  loadChalRound(0);
}

function loadChalRound(ri) {
  chalRound = ri; chalQ = 0; chalRotCount = 0; attempts = 0;
  rx = 0; ry = 0;
  makePills('g6pills', 4, ri + 1, []);

  const r = ROUNDS[ri];
  const a = document.getElementById('g6area');
  a.innerHTML = `
    <div class="prompt-box">🎮 Thử thách ${ri + 1}/4: Hãy quay khối <b>${r.label}</b>!</div>
    <div class="g6-layout">
      <div class="g6-center">
        <div class="cube-scene" id="g6scene">
          <div class="cube3d-interactive" id="g6cube">
            <div class="cube-face cf-front">🌟<br><small>Trước</small></div>
            <div class="cube-face cf-back">🎈<br><small>Sau</small></div>
            <div class="cube-face cf-top">☀️<br><small>Trên</small></div>
            <div class="cube-face cf-bottom">🍂<br><small>Dưới</small></div>
            <div class="cube-face cf-right">⭐<br><small>Phải</small></div>
            <div class="cube-face cf-left">🌸<br><small>Trái</small></div>
          </div>
        </div>
      </div>
      <div class="g6-controls">
        <div class="arrow-grid6">
          <button class="rot-btn6 rb-up ${r.axis === 'up' ? 'rb-highlight' : ''}" id="g6up" ${r.axis !== 'up' ? 'disabled' : ''}>⬆️<br><small>Lên</small></button>
          <button class="rot-btn6 rb-down ${r.axis === 'down' ? 'rb-highlight' : ''}" id="g6down" ${r.axis !== 'down' ? 'disabled' : ''}>⬇️<br><small>Xuống</small></button>
          <button class="rot-btn6 rb-left ${r.axis === 'left' ? 'rb-highlight' : ''}" id="g6left" ${r.axis !== 'left' ? 'disabled' : ''}>⬅️<br><small>Trái</small></button>
          <button class="rot-btn6 rb-right ${r.axis === 'right' ? 'rb-highlight' : ''}" id="g6right" ${r.axis !== 'right' ? 'disabled' : ''}>➡️<br><small>Phải</small></button>
        </div>
      </div>
    </div>
    <div id="g6chalQ"></div>
  `;

  document.getElementById('g6up').addEventListener('click', () => doRotate('up'));
  document.getElementById('g6down').addEventListener('click', () => doRotate('down'));
  document.getElementById('g6left').addEventListener('click', () => doRotate('left'));
  document.getElementById('g6right').addEventListener('click', () => doRotate('right'));
  updateCubeTransform();
  setChat(`Khối A: mặt trước đỏ, mặt trên xanh, mặt phải vàng. Con hãy quay khối ${r.label}! 🧊`);
}

function askChalQ() {
  attempts = 0;
  const QKEYS = ['front', 'top', 'right'];
  const target = QKEYS[chalQ];
  const cf = getCurrentFaces();
  const correctKey = cf[target];
  const correctColor = FACES[correctKey].colorName;

  const qText = target === 'front' ? 'Mặt TRƯỚC bây giờ màu gì?'
    : target === 'top' ? 'Mặt TRÊN bây giờ màu gì?'
    : 'Mặt BÊN PHẢI bây giờ màu gì?';

  // Disable rotation buttons
  ['g6up', 'g6down', 'g6left', 'g6right'].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.disabled = true;
  });

  const qArea = document.getElementById('g6chalQ');
  // Build 3 color choices from visible faces
  const cols = [FACES[cf.front].colorName, FACES[cf.top].colorName, FACES[cf.right].colorName];
  const shuffled = shuffle([...new Set(cols)]);

  qArea.innerHTML = `
    <div class="prompt-box" style="margin-top:12px">❓ ${qText}</div>
    <div class="reason-grid" id="g6choices"></div>
    <div id="g6fb" style="margin-top:8px"></div>
  `;

  const grid = document.getElementById('g6choices');
  shuffled.forEach(c => {
    const fKey = Object.keys(FACES).find(k => FACES[k].colorName === c);
    const f = FACES[fKey];
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.style.background = f.color;
    b.style.color = fKey === 'right' ? '#5b4a00' : '#fff';
    b.style.borderColor = f.color;
    b.style.minWidth = '120px';
    b.style.textAlign = 'center';
    b.innerHTML = `${f.icon} ${cap(c)}`;
    b.addEventListener('click', () => handleChalAnswer(c, correctColor, target, b));
    grid.appendChild(b);
  });

  setChat(`Cô Cú hỏi: ${qText} Con hãy chọn màu con nghĩ nhé! 🤔`);
}

function handleChalAnswer(chosen, correct, target, btn) {
  const allBtns = document.querySelectorAll('#g6choices .reason-btn');
  const fb = document.getElementById('g6fb');

  if (chosen === correct) {
    const starKey = `${chalRound}-${chalQ}`;
    if (!earnedStars[starKey]) { earnedStars[starKey] = true; }
    btn.style.outline = '4px solid #22c55e';
    snd('correct');
    confetti(30);
    allBtns.forEach(x => { x.disabled = true; });
    const expl = ROUNDS[chalRound].explain[target];
    fb.innerHTML = `<div style="background:#d1fae5;border-radius:14px;padding:12px;font-weight:700;color:#065f46;text-align:center">✅ ${expl}</div>`;
    setChat(`Hoan hô! Đúng rồi! ${expl} 🌟`);
    setTimeout(nextChalStep, 2500);
  } else {
    attempts++;
    snd('wrong');
    btn.style.opacity = '0.4';
    btn.disabled = true;
    if (attempts > 2) {
      allBtns.forEach(x => { x.disabled = true; });
      fb.innerHTML = `<div style="background:#fef3c7;border-radius:14px;padding:12px;font-weight:700;color:#92400e;text-align:center">💡 Đáp án: ${cap(correct)}</div>`;
      setChat(`Đáp án đúng là ${cap(correct)}. Không sao, câu tiếp nhé! 💪`);
      setTimeout(nextChalStep, 2500);
    } else {
      setChat('Chưa đúng rồi! Con nhìn kỹ khối xem mặt nào đang hướng về phía con nhé! 👀');
    }
  }
}

function nextChalStep() {
  chalQ++;
  if (chalQ < 3) {
    askChalQ();
  } else if (chalRound + 1 < 4) {
    loadChalRound(chalRound + 1);
  } else {
    const stars = Object.keys(earnedStars).length;
    showResult(6, Math.min(4, Math.ceil(stars / 3)), 'Con đã hoàn thành Thử thách Khối Lập Phương! Cô Cú tự hào lắm! 🏆');
  }
}

/* ============ UTILS ============ */
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
