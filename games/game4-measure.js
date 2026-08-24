/* ================================================================
   GAME 4: PHÒNG ĐO LƯỜNG
   Đo độ dài — pool đồ vật lớn, random 3 mỗi lần chơi
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

let g4 = { round: 1, PX: 22, objLeft: 70, items: [] };

/* Pool đồ vật lớn — random chọn 3 */
const ITEM_POOL = [
  { name: 'Cái bút chì', cm: 8, emoji: '✏️', color: '#f5b301' },
  { name: 'Cục tẩy', cm: 4, emoji: '🧽', color: '#ff9f5a' },
  { name: 'Bàn chải', cm: 11, emoji: '🪥', color: '#5b9cf5' },
  { name: 'Chiếc lược', cm: 9, emoji: '💇', color: '#ec4899' },
  { name: 'Cây kẹo mút', cm: 6, emoji: '🍭', color: '#a855f7' },
  { name: 'Cây thước', cm: 12, emoji: '📏', color: '#22c55e' },
  { name: 'Cái muỗng', cm: 7, emoji: '🥄', color: '#64748b' },
  { name: 'Lá cờ', cm: 5, emoji: '🏳️', color: '#3b82f6' },
  { name: 'Chiếc đũa', cm: 10, emoji: '🥢', color: '#b45309' },
  { name: 'Cái kéo', cm: 13, emoji: '✂️', color: '#dc2626' },
  { name: 'Dây buộc tóc', cm: 3, emoji: '🎀', color: '#f472b6' }
];

function shuffle(a) { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

export function initG4() {
  g4.round = 1;
  g4.items = shuffle(ITEM_POOL).slice(0, 3);
  loadRound(1);
}

function loadRound(r) {
  const it = g4.items[r - 1];
  makePills('g4pills', 3, r, []);

  const a = document.getElementById('g4area');
  a.innerHTML = `
    <div class="prompt-box">📏 Đo <b>${it.name}</b> bằng Thước Thần Kỳ! Kéo thước để căn vạch số 0 trùng với đầu ${it.name}.</div>
    <div class="measure-scene" id="mscene"></div>
    <div class="align-msg" id="alignmsg"></div>
    <div id="g4predict" style="margin-top:12px"></div>
  `;

  const scene = document.getElementById('mscene');
  const len = it.cm * g4.PX;

  const obj = document.createElement('div');
  obj.className = 'm-object';
  obj.style.left = g4.objLeft + 'px';
  obj.style.width = len + 'px';
  obj.style.background = it.color;
  obj.innerHTML = `<span style="font-size:26px">${it.emoji}</span>`;
  scene.appendChild(obj);

  const ruler = document.createElement('div');
  ruler.className = 'ruler';
  ruler.id = 'ruler';
  const rw = 15 * g4.PX;
  ruler.style.width = rw + 'px';

  let ticks = '';
  for (let i = 0; i <= 15; i++) {
    const tx = i * g4.PX;
    ticks += `<div class="tick" style="left:${tx}px;height:${i % 5 === 0 ? 22 : 12}px;position:absolute;bottom:6px;width:2px;background:#8a6d1a"></div>`;
    ticks += `<div class="rnum" style="left:${tx}px">${i}</div>`;
  }
  ticks += '<div class="zero-badge" style="left:0">0</div>';
  ruler.innerHTML = ticks;
  scene.appendChild(ruler);

  const startX = g4.objLeft + Math.round(Math.random() * 100 - 50);
  ruler.style.left = Math.max(10, Math.min(500, startX)) + 'px';

  makeDraggable(ruler, it);
  predict(it);
}

function predict(it) {
  const a = document.getElementById('g4predict');
  a.innerHTML = `
    <div class="prompt-box">❓ Con đoán <b>${it.name}</b> dài mấy xăng-ti-mét (cm)?</div>
    <div class="choice-pad" id="g4p"></div>
  `;

  const correct = it.cm;
  let opts = new Set([correct]);
  while (opts.size < 3) {
    const diff = Math.random() > 0.5 ? Math.ceil(Math.random() * 3) : -Math.ceil(Math.random() * 3);
    const v = correct + diff;
    if (v > 0 && v <= 15) opts.add(v);
  }
  const shuffled = shuffle([...opts]);

  const pad = document.getElementById('g4p');
  shuffled.forEach(v => {
    const b = document.createElement('button');
    b.className = 'num-choice';
    b.textContent = v + ' cm';
    b.addEventListener('click', () => {
      if (v === correct) {
        b.classList.add('correct');
        snd('correct');
        pad.querySelectorAll('.num-choice').forEach(x => { x.disabled = true; });
        setChat(`Dự đoán hay đấy! ${it.name} dài ${correct} cm. Bây giờ con hãy kéo thước để kiểm chứng nhé! 📏`);
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 500);
        setChat('Con hãy kéo thước ra và đo thử xem sao nhé! Cô tin con sẽ tìm ra! 💪');
      }
    });
    pad.appendChild(b);
  });
}

function makeDraggable(ruler, it) {
  const scene = document.getElementById('mscene');
  let dragging = false, off = 0;

  ruler.addEventListener('pointerdown', e => {
    dragging = true;
    off = e.clientX - ruler.offsetLeft;
    ruler.setPointerCapture(e.pointerId);
    ruler.style.cursor = 'grabbing';
  });
  ruler.addEventListener('pointermove', e => {
    if (!dragging) return;
    let x = e.clientX - off;
    x = Math.max(2, Math.min(scene.clientWidth - ruler.clientWidth - 2, x));
    ruler.style.left = x + 'px';
  });
  ruler.addEventListener('pointerup', () => {
    dragging = false;
    ruler.style.cursor = 'grab';
    checkAlign(ruler, it);
  });
  ruler.addEventListener('pointercancel', () => { dragging = false; ruler.style.cursor = 'grab'; });
}

function checkAlign(ruler, it) {
  const diff = Math.abs(ruler.offsetLeft - g4.objLeft);
  const msg = document.getElementById('alignmsg');

  if (diff <= g4.PX * 0.6) {
    msg.textContent = '';
    setChat(`Vạch số 0 đã trùng với đầu ${it.name} rồi! Bây giờ con đọc kết quả nhé! 📖`);
    readResult(it);
  } else {
    snd('wrong');
    msg.textContent = `⚠️ Vạch số 0 phải trùng với đầu ${it.name} nhé! Hãy kéo thước lại.`;
  }
}

function readResult(it) {
  if (document.getElementById('g4read')) return;

  const a = document.getElementById('g4area');
  a.insertAdjacentHTML('beforeend', `
    <div class="prompt-box" id="g4read">❓ ${it.name} dài mấy xăng-ti-mét?</div>
    <div class="choice-pad" id="g4r"></div>
  `);

  const correct = it.cm;
  let opts = new Set([correct]);
  while (opts.size < 3) {
    const diff = Math.random() > 0.5 ? Math.ceil(Math.random() * 3) : -Math.ceil(Math.random() * 3);
    const v = correct + diff;
    if (v > 0 && v <= 15) opts.add(v);
  }
  const shuffled = shuffle([...opts]);

  const pad = document.getElementById('g4r');
  shuffled.forEach(v => {
    const b = document.createElement('button');
    b.className = 'num-choice';
    b.textContent = v + ' cm';
    b.addEventListener('click', () => {
      if (v === correct) {
        b.classList.add('correct');
        snd('correct');
        pad.querySelectorAll('.num-choice').forEach(x => { x.disabled = true; });
        verify(it);
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 500);
        setChat(`Con nhìn kỹ vạch cuối của ${it.name} trên thước xem, nó chỉ vào số mấy nhỉ? 🔍`);
      }
    });
    pad.appendChild(b);
  });
}

function verify(it) {
  setChat(`Chính xác! ${it.name} dài ${it.cm} cm. Con thật giỏi! 📏✨`);
  setTimeout(() => {
    if (g4.round < 3) {
      g4.round++;
      loadRound(g4.round);
    } else {
      showResult(4, 3, 'Con đã dùng Thước Thần Kỳ đo được 3 đồ vật thật chính xác! Tuyệt vời!');
    }
  }, 3000);
}
