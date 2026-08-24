/* ================================================================
   GAME 3: ROBOT DẪN ĐƯỜNG
   Điều khiển robot trên lưới 3×3 — vị trí, định hướng không gian
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

let g3 = { round: 1, robot: [0, 0], star: [2, 2], steps: 4, moved: 0, cmd: [] };

const LEVELS = [
  { robot: [0, 0], star: [2, 2], steps: 4, desc: 'góc trên bên trái' },
  { robot: [2, 0], star: [0, 2], steps: 4, desc: 'góc dưới bên trái' },
  { robot: [1, 2], star: [1, 0], steps: 4, desc: 'giữa bên phải' }
];

export function initG3() {
  g3.round = 1;
  loadRound(1);
}

function loadRound(r) {
  const L = LEVELS[r - 1];
  g3.robot = [...L.robot];
  g3.star = [...L.star];
  g3.steps = L.steps;
  g3.moved = 0;
  g3.cmd = [];
  makePills('g3pills', 3, r, []);

  const a = document.getElementById('g3area');
  a.innerHTML = `
    <div class="prompt-box">🤖 Hãy điều khiển rô-bốt tới ngôi sao ⭐! (tối đa ${L.steps} bước)</div>
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
        c.innerHTML = '🤖';
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
  const q2 = relCol < 0 ? 'TRÁI' : (relCol > 0 ? 'PHẢI' : 'GIỮA');

  const ex = document.getElementById('g3express');
  ex.innerHTML = `
    <div class="prompt-box" style="margin-top:12px">❓ Ngôi sao ⭐ đang nằm ở phía nào so với rô-bốt?</div>
    <div class="reason-grid" id="g3q"></div>
  `;

  const opts = [
    { t: '⭐ Bên TRÁI', g: q2 === 'TRÁI' },
    { t: '⭐ Bên PHẢI', g: q2 === 'PHẢI' },
    { t: '⭐ Ở GIỮA', g: q2 === 'GIỮA' }
  ];

  const rs = document.getElementById('g3q');
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.textContent = o.t;
    b.addEventListener('click', () => {
      if (o.g) {
        b.classList.add('correct');
        snd('correct');
        rs.querySelectorAll('.reason-btn').forEach(x => { x.disabled = true; });
        setChat(`Đúng rồi! Ngôi sao ở bên ${q2} của rô-bốt. Bây giờ con hãy điều khiển rô-bốt tới đó nhé! 🚀`);
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 600);
        setChat('Con nhìn kỹ lại xem, ngôi sao đang ở bên nào so với rô-bốt nhỉ? 👀');
      }
    });
    rs.appendChild(b);
  });

  setChat(`Trước khi điều khiển, cô hỏi con nhé: Ngôi sao đang ở phía nào so với rô-bốt? Con hãy nhìn thật kỹ! 🧭`);
}

function move(dir) {
  if (g3.moved >= g3.steps) {
    setChat('Con đã hết số bước rồi! Hãy bấm Chơi lại để thử lại nhé. 💪');
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
    setChat('Rô-bốt đi ra ngoài rồi! Hãy chọn hướng khác nhé. 🚧');
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
      setChat('Ôi, con đã hết bước mà chưa tới ngôi sao. Con thử bấm Chơi lại nhé! 🧠');
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
  setChat(`Hoan hô! Rô-bốt đã đến ngôi sao! 🎉 Con đã dùng: ${chain}! Thật tài giỏi! 🌟`);

  setTimeout(() => {
    if (g3.round < 3) {
      g3.round++;
      loadRound(g3.round);
    } else {
      showResult(3, 3, 'Con đã chỉ đường cho rô-bốt đến đúng ngôi sao! Cô Cú rất tự hào!');
    }
  }, 3000);
}
