/* ================================================================
   GAME 3: ROBOT DẪN ĐƯỜNG
   Ngẫu nhiên hóa vị trí robot & ngôi sao mỗi lần chơi
   Robot SVG dễ thương, câu hỏi không in hoa nhấn mạnh
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

/* SVG Robot ngộ nghĩnh — phù hợp học sinh lớp 1 */
function robotSVG(size = 40) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 60 60">
    <!-- Ăng-ten -->
    <line x1="30" y1="2" x2="30" y2="12" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="3" r="4" fill="#fbbf24"/>
    <!-- Đầu -->
    <rect x="12" y="12" width="36" height="28" rx="10" fill="#60a5fa"/>
    <rect x="14" y="14" width="32" height="24" rx="8" fill="#93c5fd"/>
    <!-- Mắt -->
    <ellipse cx="22" cy="24" rx="6" ry="7" fill="#fff"/>
    <ellipse cx="38" cy="24" rx="6" ry="7" fill="#fff"/>
    <circle cx="23" cy="25" r="3.5" fill="#1e3a5f"/>
    <circle cx="39" cy="25" r="3.5" fill="#1e3a5f"/>
    <circle cx="24.5" cy="23.5" r="1.2" fill="#fff"/>
    <circle cx="40.5" cy="23.5" r="1.2" fill="#fff"/>
    <!-- Má hồng -->
    <ellipse cx="14" cy="30" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
    <ellipse cx="46" cy="30" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
    <!-- Miệng cười -->
    <path d="M23 33 Q30 40 37 33" stroke="#1e3a5f" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <!-- Thân -->
    <rect x="18" y="42" width="24" height="12" rx="4" fill="#60a5fa"/>
    <rect x="24" y="44" width="4" height="4" rx="1" fill="#fbbf24"/>
    <rect x="32" y="44" width="4" height="4" rx="1" fill="#34d399"/>
    <!-- Tay -->
    <rect x="6" y="44" width="10" height="5" rx="3" fill="#93c5fd"/>
    <rect x="44" y="44" width="10" height="5" rx="3" fill="#93c5fd"/>
    <!-- Chân -->
    <rect x="20" y="54" width="8" height="5" rx="2" fill="#3b82f6"/>
    <rect x="32" y="54" width="8" height="5" rx="2" fill="#3b82f6"/>
  </svg>`;
}

let g3 = { round: 1, robot: [0, 0], star: [2, 2], steps: 4, moved: 0, cmd: [], levels: [] };

/* Pool vị trí lớn — random 3 level mỗi lần chơi */
function genLevels() {
  const combos = [
    [[0, 0], [2, 2]], [[2, 0], [0, 2]], [[0, 2], [2, 0]], [[2, 2], [0, 0]],
    [[0, 1], [2, 1]], [[1, 0], [1, 2]], [[0, 0], [2, 0]], [[2, 2], [0, 2]],
    [[1, 0], [2, 2]], [[0, 2], [2, 1]], [[2, 1], [0, 0]], [[1, 2], [1, 0]],
    [[0, 0], [1, 2]], [[2, 0], [1, 2]], [[1, 1], [0, 0]], [[1, 1], [2, 2]]
  ];
  const picked = shuffle(combos).slice(0, 3);
  return picked.map(([r, s]) => {
    const dist = Math.abs(r[0] - s[0]) + Math.abs(r[1] - s[1]);
    return { robot: r, star: s, steps: dist + 1 + Math.floor(Math.random() * 2) };
  });
}

function shuffle(a) { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

export function initG3() {
  g3.round = 1;
  g3.levels = genLevels();
  loadRound(1);
}

function loadRound(r) {
  const L = g3.levels[r - 1];
  g3.robot = [...L.robot];
  g3.star = [...L.star];
  g3.steps = L.steps;
  g3.moved = 0;
  g3.cmd = [];
  makePills('g3pills', 3, r, []);

  const a = document.getElementById('g3area');
  a.innerHTML = `
    <div class="prompt-box">${robotSVG(28)} Hãy điều khiển rô-bốt tới ngôi sao ⭐! (tối đa ${L.steps} bước)</div>
    <div id="g3grid" class="grid3"></div>
    <div class="steps-info" id="g3steps">Bước còn lại: <b>${L.steps}</b></div>
    <div class="dir-btns">
      <div></div>
      <button class="dir-btn" id="dirUp">⬆</button>
      <div></div>
      <button class="dir-btn" id="dirLeft">⬅</button>
      <button class="dir-btn" id="dirDown">⬇</button>
      <button class="dir-btn" id="dirRight">➡</button>
    </div>
    <div class="note-sm">⬆ Lên · ⬇ Xuống · ⬅ Trái · ➡ Phải</div>
    <div id="g3express"></div>
  `;

  document.getElementById('dirUp').addEventListener('click', () => move('up'));
  document.getElementById('dirDown').addEventListener('click', () => move('down'));
  document.getElementById('dirLeft').addEventListener('click', () => move('left'));
  document.getElementById('dirRight').addEventListener('click', () => move('right'));

  render();
  askExpression(L);
}

function render() {
  const grid = document.getElementById('g3grid');
  grid.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const c = document.createElement('div');
      c.className = 'cell';
      if (i === g3.robot[0] && j === g3.robot[1]) {
        c.innerHTML = robotSVG(36);
      } else if (i === g3.star[0] && j === g3.star[1]) {
        c.className = 'cell star-cell';
        c.innerHTML = '⭐';
      }
      grid.appendChild(c);
    }
  }
}

function askExpression(L) {
  const relCol = L.star[1] - L.robot[1];
  const q2 = relCol < 0 ? 'trái' : (relCol > 0 ? 'phải' : 'giữa');

  const ex = document.getElementById('g3express');
  ex.innerHTML = `
    <div class="prompt-box" style="margin-top:12px">❓ Ngôi sao ⭐ đang nằm ở phía nào so với rô-bốt?</div>
    <div class="reason-grid" id="g3q"></div>
  `;

  const opts = [
    { t: '⭐ Bên trái', g: q2 === 'trái' },
    { t: '⭐ Bên phải', g: q2 === 'phải' },
    { t: '⭐ Ở giữa', g: q2 === 'giữa' }
  ];

  const rs = document.getElementById('g3q');
  shuffle(opts).forEach(o => {
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.textContent = o.t;
    b.addEventListener('click', () => {
      if (o.g) {
        b.classList.add('correct');
        snd('correct');
        rs.querySelectorAll('.reason-btn').forEach(x => { x.disabled = true; });
        setChat(`Chính xác! Ngôi sao ở bên ${q2} của rô-bốt. Con giỏi quá! Bây giờ hãy điều khiển rô-bốt tới đó và nói cho bạn nghe nhé!`);
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 600);
        setChat('Con thử nhìn kỹ rô-bốt và ngôi sao nhé: Ngôi sao đang ở phía nào so với rô-bốt? Hãy so sánh bên trái, bên phải và ở giữa – Con chọn lại lần nữa xem nào!');
      }
    });
    rs.appendChild(b);
  });

  setChat('Trước khi điều khiển, Cô Cú thông thái hỏi con nhé: Ngôi sao đang ở phía nào so với rô-bốt?');
}

function move(dir) {
  if (g3.moved >= g3.steps) {
    setChat('Con đã hết số bước rồi! Hãy bấm Chơi lại để thử lại nhé.');
    return;
  }

  snd('step');
  g3.cmd.push(dir);
  let r = g3.robot[0], c = g3.robot[1];
  if (dir === 'up') r--;
  else if (dir === 'down') r++;
  else if (dir === 'left') c--;
  else if (dir === 'right') c++;

  if (r < 0 || r > 2 || c < 0 || c > 2) {
    setChat('Rô-bốt đi ra ngoài rồi! Hãy chọn hướng khác nhé.');
    g3.cmd.pop();
    return;
  }

  g3.robot = [r, c];
  g3.moved++;
  document.getElementById('g3steps').innerHTML = `Bước còn lại: <b>${g3.steps - g3.moved}</b>`;
  render();

  if (g3.robot[0] === g3.star[0] && g3.robot[1] === g3.star[1]) {
    win();
  } else if (g3.moved >= g3.steps) {
    setTimeout(() => {
      setChat('Ôi, con đã hết bước mà chưa tới ngôi sao. Con thử bấm Chơi lại nhé!');
      const a = document.getElementById('g3area');
      a.innerHTML += `<div class="action-row"><button class="action-btn btn-orange" id="g3retry">🔄 Chơi lại</button></div>`;
      document.getElementById('g3retry').addEventListener('click', () => loadRound(g3.round));
    }, 600);
  }
}

function win() {
  snd('win');
  const cmdNames = { up: 'Lên', down: 'Xuống', left: 'Trái', right: 'Phải' };
  const chain = g3.cmd.map(c => cmdNames[c]).join(' → ');
  setChat(`Chính xác! Rô-bốt đã đến ngôi sao theo chuỗi đường đi: ${chain}. Con giỏi quá! Bây giờ hãy nói cho bạn nghe vì sao con chọn các bước đi này nhé!`, true, () => {
    setTimeout(() => {
      if (g3.round < 3) {
        g3.round++;
        loadRound(g3.round);
      } else {
        showResult(3, 3, 'Con đã chỉ đường cho rô-bốt đến đúng ngôi sao! Cô Cú thông thái rất tự hào!');
      }
    }, 800);
  });
}
