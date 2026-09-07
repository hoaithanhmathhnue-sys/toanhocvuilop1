/* ================================================================
   GAME 3: ROBOT DẪN ĐƯỜNG
   Bố cục ngang toàn bộ: Ô lưới 3x3, cụm nút mũi tên, câu hỏi vị trí
   trên cùng 1 hàng ngang, không phải cuộn màn hình lên xuống
   ================================================================ */
import { setChat, snd, makePills, showResult, renderSubNav } from '../main.js';

function robotSVG(size = 38) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 60 60">
    <line x1="30" y1="2" x2="30" y2="12" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="3" r="4" fill="#fbbf24"/>
    <rect x="12" y="12" width="36" height="28" rx="10" fill="#60a5fa"/>
    <rect x="14" y="14" width="32" height="24" rx="8" fill="#93c5fd"/>
    <ellipse cx="22" cy="24" rx="6" ry="7" fill="#fff"/>
    <ellipse cx="38" cy="24" rx="6" ry="7" fill="#fff"/>
    <circle cx="23" cy="25" r="3.5" fill="#1e3a5f"/>
    <circle cx="39" cy="25" r="3.5" fill="#1e3a5f"/>
    <circle cx="24.5" cy="23.5" r="1.2" fill="#fff"/>
    <circle cx="40.5" cy="23.5" r="1.2" fill="#fff"/>
    <ellipse cx="14" cy="30" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
    <ellipse cx="46" cy="30" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
    <path d="M23 33 Q30 40 37 33" stroke="#1e3a5f" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <rect x="18" y="42" width="24" height="12" rx="4" fill="#60a5fa"/>
    <rect x="24" y="44" width="4" height="4" rx="1" fill="#fbbf24"/>
    <rect x="32" y="44" width="4" height="4" rx="1" fill="#34d399"/>
    <rect x="6" y="44" width="10" height="5" rx="3" fill="#93c5fd"/>
    <rect x="44" y="44" width="10" height="5" rx="3" fill="#93c5fd"/>
    <rect x="20" y="54" width="8" height="5" rx="2" fill="#3b82f6"/>
    <rect x="32" y="54" width="8" height="5" rx="2" fill="#3b82f6"/>
  </svg>`;
}

let g3 = { round: 1, robot: [0, 0], star: [2, 2], steps: 4, moved: 0, cmd: [], levels: [], done: [] };

function genLevels() {
  const combos = [
    [[0, 0], [2, 2]], [[2, 0], [0, 2]], [[0, 2], [2, 0]], [[2, 2], [0, 0]],
    [[0, 1], [2, 1]], [[1, 0], [1, 2]], [[0, 0], [2, 0]], [[2, 2], [0, 2]],
    [[1, 0], [2, 2]], [[0, 2], [2, 1]], [[2, 1], [0, 0]], [[1, 2], [1, 0]]
  ];
  const picked = shuffle(combos).slice(0, 3);
  return picked.map(([r, s]) => {
    const dist = Math.abs(r[0] - s[0]) + Math.abs(r[1] - s[1]);
    return { robot: r, star: s, steps: dist + 1 };
  });
}

function shuffle(a) { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

export function initG3() {
  g3.round = 1;
  g3.levels = genLevels();
  g3.done = [];
  loadRound(1);
}

function loadRound(r) {
  const L = g3.levels[r - 1];
  g3.robot = [...L.robot];
  g3.star = [...L.star];
  g3.steps = L.steps;
  g3.moved = 0;
  g3.cmd = [];
  makePills('g3pills', 3, r, g3.done);

  const a = document.getElementById('g3area');
  a.innerHTML = `
    <!-- BỐ CỤC XẾP NGANG TOÀN BỘ THEO DOCX VÀ ẢNH MINH HỌA -->
    <div class="robot-landscape">
      <!-- Cột 1: Bảng ô lưới 3x3 -->
      <div class="robot-col-grid">
        <div id="g3grid" class="grid3"></div>
      </div>

      <!-- Cột 2: Cụm phím mũi tên & số bước -->
      <div class="robot-col-controls">
        <div class="steps-info" id="g3steps" style="margin:0 0 6px 0">Bước còn lại: <b>${L.steps}</b></div>
        <div class="dir-btns" style="margin:0">
          <div></div>
          <button class="dir-btn" id="dirUp">⬆</button>
          <div></div>
          <button class="dir-btn" id="dirLeft">⬅</button>
          <button class="dir-btn" id="dirDown">⬇</button>
          <button class="dir-btn" id="dirRight">➡</button>
        </div>
        <div class="note-sm" style="margin-top:6px">⬆ Lên · ⬇ Xuống · ⬅ Trái · ➡ Phải</div>
      </div>

      <!-- Cột 3: Câu hỏi vị trí tương đối -->
      <div class="robot-col-question" id="g3express"></div>
    </div>
  `;

  document.getElementById('dirUp')?.addEventListener('click', () => move('up'));
  document.getElementById('dirDown')?.addEventListener('click', () => move('down'));
  document.getElementById('dirLeft')?.addEventListener('click', () => move('left'));
  document.getElementById('dirRight')?.addEventListener('click', () => move('right'));

  render();
  askExpression(L);

  renderSubNav('navRow3', {
    onBack: () => { if (g3.round > 1) { g3.round--; loadRound(g3.round); } },
    onNext: () => { if (g3.round < 3) { g3.round++; loadRound(g3.round); } },
    canBack: g3.round > 1,
    canNext: g3.round < 3
  });
}

function render() {
  const grid = document.getElementById('g3grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const c = document.createElement('div');
      c.className = 'cell';
      if (i === g3.robot[0] && j === g3.robot[1]) {
        c.innerHTML = robotSVG(34);
      } else if (i === g3.star[0] && j === g3.star[1]) {
        c.className = 'cell star-cell';
        c.innerHTML = '⭐';
      }
      grid.appendChild(c);
    }
  }
}

function askExpression(L) {
  const relRow = L.star[0] - L.robot[0];
  const relCol = L.star[1] - L.robot[1];

  let answer;
  if (relRow === 0 && relCol === 0) {
    answer = 'giữa';
  } else if (Math.abs(relRow) > Math.abs(relCol)) {
    answer = relRow > 0 ? 'dưới' : 'trên';
  } else if (Math.abs(relCol) > Math.abs(relRow)) {
    answer = relCol > 0 ? 'phải' : 'trái';
  } else {
    answer = relRow > 0 ? 'dưới' : 'trên';
  }

  const labelMap = {
    'trái': '⭐ Bên trái',
    'phải': '⭐ Bên phải',
    'trên': '⭐ Bên trên',
    'dưới': '⭐ Bên dưới',
    'giữa': '⭐ Ở giữa'
  };

  const allDirs = ['trái', 'phải', 'trên', 'dưới', 'giữa'];
  const wrongs = shuffle(allDirs.filter(d => d !== answer)).slice(0, 3);
  const opts = shuffle([
    { t: labelMap[answer], g: true },
    ...wrongs.map(d => ({ t: labelMap[d], g: false }))
  ]);

  const ex = document.getElementById('g3express');
  if (!ex) return;
  ex.innerHTML = `
    <div style="font-weight:800;font-size:1.05rem;color:#1e3a8a;margin-bottom:8px">
      ❓ Ngôi sao ⭐ đang nằm ở phía nào so với rô-bốt?
    </div>
    <div style="display:flex;flex-direction:column;gap:8px" id="g3q"></div>
  `;

  const rs = document.getElementById('g3q');
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.style.padding = '8px 12px';
    b.style.fontSize = '0.95rem';
    b.textContent = o.t;
    b.addEventListener('click', () => {
      if (o.g) {
        b.classList.add('correct');
        snd('correct');
        rs.querySelectorAll('.reason-btn').forEach(x => { x.disabled = true; });
        setChat(`Chính xác! Ngôi sao ở ${labelMap[answer].replace('⭐ ', '').toLowerCase()} rô-bốt. Con giỏi quá! Bây giờ hãy điều khiển rô-bốt tới đó nhé!`);
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 600);
        setChat('Con thử nhìn kỹ rô-bốt và ngôi sao nhé: ngôi sao đang ở phía nào so với rô-bốt? Hãy chọn lại lần nữa xem nào!');
      }
    });
    rs.appendChild(b);
  });

  setChat('Thần Kim Quy hỏi con nhé: Ngôi sao đang ở phía nào so với rô-bốt? Hãy trả lời rồi bấm mũi tên dẫn đường nhé!');
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
    setChat('Rô-bốt đi ra ngoài lưới rồi! Hãy chọn hướng khác nhé.');
    g3.cmd.pop();
    return;
  }

  g3.robot = [r, c];
  g3.moved++;
  const stEl = document.getElementById('g3steps');
  if (stEl) stEl.innerHTML = `Bước còn lại: <b>${g3.steps - g3.moved}</b>`;
  render();

  if (g3.robot[0] === g3.star[0] && g3.robot[1] === g3.star[1]) {
    win();
  } else if (g3.moved >= g3.steps) {
    setTimeout(() => {
      setChat('Ôi, con đã hết bước mà chưa tới ngôi sao. Con thử bấm Chơi lại nhé!');
      const ex = document.getElementById('g3express');
      if (ex) {
        ex.innerHTML += `<div style="margin-top:10px;text-align:center"><button class="action-btn btn-orange" id="g3retry">🔄 Chơi lại</button></div>`;
        document.getElementById('g3retry')?.addEventListener('click', () => loadRound(g3.round));
      }
    }, 600);
  }
}

function win() {
  snd('win');
  g3.done.push(g3.round);
  const cmdNames = { up: 'Lên', down: 'Xuống', left: 'Trái', right: 'Phải' };
  const chain = g3.cmd.map(c => cmdNames[c]).join(' → ');
  setChat(`Chính xác! Rô-bốt đã đến ngôi sao theo đường đi: ${chain}. Dũng sĩ rất xuất sắc!`, true, () => {
    setTimeout(() => {
      if (g3.round < 3) {
        g3.round++;
        loadRound(g3.round);
      } else {
        showResult(3, 3, 'Con đã chỉ đường cho rô-bốt vượt qua mọi vị trí trên lưới! Thần Rùa Kim Quy rất tự hào!');
      }
    }, 1000);
  });
}
