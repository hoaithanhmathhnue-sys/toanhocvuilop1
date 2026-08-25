/* ================================================================
   GAME 4: PHÒNG ĐO LƯỜNG
   Đo độ dài — Bộ đồ vật PNG phong phú (Bàn chải, Bút chì, Chiếc lược, Cục tẩy, Kẹo mút, Cái muỗng, Cái kéo)
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

let g4 = { round: 1, PX: 24, objLeft: 70, items: [] };

/* Pool đồ vật phong phú — Bàn chải 8cm chuẩn ở vòng 1 */
const ITEM_POOL = [
  { id: 'banchai', name: 'Bàn chải', cm: 8 },
  { id: 'pencil', name: 'Cái bút chì', cm: 10 },
  { id: 'comb', name: 'Chiếc lược', cm: 9 },
  { id: 'eraser', name: 'Cục tẩy', cm: 4 },
  { id: 'lollipop', name: 'Cây kẹo mút', cm: 6 },
  { id: 'spoon', name: 'Cái muỗng', cm: 7 },
  { id: 'scissors', name: 'Cái kéo', cm: 11 }
];

function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

/* Hiển thị đồ vật bằng tệp ảnh PNG sinh động, nền trong suốt */
function getObjectHTML(id, width) {
  let src = '';
  if (id.startsWith('banchai')) {
    src = 'items/banchai.png';
  } else if (id.startsWith('pencil')) {
    src = 'items/pencil.png';
  } else if (id.startsWith('comb')) {
    src = 'items/comb.png';
  } else if (id.startsWith('eraser')) {
    src = 'items/eraser.png';
  } else if (id.startsWith('lollipop')) {
    src = 'items/lollipop.png';
  } else if (id.startsWith('spoon')) {
    src = 'items/spoon.png';
  } else if (id.startsWith('scissors')) {
    src = 'items/scissors.png';
  }

  if (src) {
    return `<img src="${src}" alt="${id}" style="width:${width}px; height:50px; object-fit:fill; display:block; filter:drop-shadow(0 4px 6px rgba(0,0,0,0.18)); user-select:none; -webkit-user-drag:none; pointer-events:none;">`;
  }

  // Fallback SVG nếu không tìm thấy tệp ảnh
  return `<svg width="${width}" height="44" viewBox="0 0 200 44" preserveAspectRatio="none" style="display:block;">
    <rect x="0" y="6" width="200" height="32" rx="8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3"/>
  </svg>`;
}

export function initG4() {
  g4.round = 1;
  // Vòng 1 luôn là Bàn chải 8cm, các vòng 2 & 3 chọn ngẫu nhiên các đồ vật khác
  const otherItems = shuffle(ITEM_POOL.filter(x => x.id !== 'banchai'));
  g4.items = [ITEM_POOL[0], ...otherItems.slice(0, 2)];
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

  // Tạo vật thể đo bằng ảnh PNG (Không có khung màu xanh bao quanh)
  const obj = document.createElement('div');
  obj.className = 'm-object';
  obj.style.left = g4.objLeft + 'px';
  obj.style.width = len + 'px';
  obj.innerHTML = getObjectHTML(it.id, len);
  scene.appendChild(obj);

  // Tạo thước kẻ
  const ruler = document.createElement('div');
  ruler.className = 'ruler';
  ruler.id = 'ruler';
  const rw = 15 * g4.PX;
  ruler.style.width = rw + 'px';

  let ticks = '';
  for (let i = 0; i <= 15; i++) {
    const tx = i * g4.PX;
    const isMajor = i % 5 === 0;
    const h = isMajor ? 26 : 14;
    // Vạch sát mép trên thước kẻ
    ticks += `<div class="tick" style="left:${tx}px;height:${h}px;top:0;position:absolute;width:${isMajor ? 3 : 2}px;background:#78350f"></div>`;
    // Số trên thước cỡ to, rõ ràng
    ticks += `<div class="rnum" style="left:${tx}px">${i}</div>`;
  }
  ticks += '<div class="zero-badge">0</div>';
  ruler.innerHTML = ticks;
  scene.appendChild(ruler);

  // Vòng 1: Đặt thước chuẩn vạch 0 để học sinh quan sát mẫu Bàn chải dài 8cm
  // Vòng 2 & 3: Đặt thước lệch vạch 0 để học sinh thực hành kéo thước
  let startX = g4.objLeft;
  if (r > 1) {
    const offset = (r % 2 === 0) ? 65 : -45;
    startX = g4.objLeft + offset;
  }
  ruler.style.left = Math.max(10, Math.min(480, startX)) + 'px';

  makeDraggable(ruler, it);
  predict(it);
}

function predict(it) {
  const a = document.getElementById('g4predict');
  a.innerHTML = `
    <div class="prompt-box">❓ Con đoán <b>${it.name}</b> dài mấy xăng-ti-mét (cm)?</div>
    <div class="choice-pad" id="g4p"></div>
  `;

  if (g4.round === 1) {
    setChat(`Con hãy quan sát ${it.name}! Đầu ${it.name} đã ở vạch số 0. Con đoán ${it.name} dài mấy xăng-ti-mét nào?`);
  } else {
    setChat(`Đo ${it.name} bằng Thước Thần Kỳ! Kéo thước để căn vạch số 0 trùng với đầu ${it.name} nhé!`);
  }

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
        setChat(`Dự đoán hay đấy! ${it.name} dài ${correct} cm. Bây giờ con hãy kéo thước để kiểm chứng nhé!`);
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 500);
        setChat(`Con thử nhìn kỹ đồ vật này nhé: xem đuôi của nó chạm vạch mấy? Hãy chọn lại lần nữa nào!`);
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
    setChat(`Vạch số 0 đã trùng với đầu ${it.name} rồi! Bây giờ con đọc kết quả nhé!`);
    readResult(it);
  } else {
    snd('wrong');
    msg.textContent = `⚠️ Vạch số 0 phải trùng với đầu ${it.name} nhé! Hãy kéo thước lại.`;
    setChat(`Con thử nhìn kỹ thước nhé: Vạch số 0 đã trùng với đầu ${it.name} chưa? Hãy kéo thước lại xem nào!`);
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
        setChat(`Con thử nhìn kỹ đuôi ${it.name} trên thước nhé: nó chỉ vào vạch số mấy? Hãy so sánh các con số và thử lại xem nào!`);
      }
    });
    pad.appendChild(b);
  });
}

function verify(it) {
  setChat(`Chính xác! Vạch số 0 trùng với một đầu, đầu kia chỉ vạch số ${it.cm} nên ${it.name} dài ${it.cm} cm. Con giỏi quá! Bây giờ hãy nói cho bạn nghe cách con đo nhé!`, true, () => {
    setTimeout(() => {
      if (g4.round < 3) {
        g4.round++;
        loadRound(g4.round);
      } else {
        showResult(4, 3, 'Con đã dùng Thước Thần Kỳ đo được 3 đồ vật thật chính xác! Tuyệt vời!');
      }
    }, 800);
  });
}
