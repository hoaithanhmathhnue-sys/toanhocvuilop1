/* ================================================================
   GAME 4: PHÒNG ĐO LƯỜNG
   Đo độ dài — Bàn chải to nằm ngang (vòng 1 trùng vạch 0, vòng 2-3 đặt lệch)
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

let g4 = { round: 1, PX: 24, objLeft: 70, items: [] };

/* Pool đồ vật — Bàn chải 8cm chuẩn ở bài 1 */
const ITEM_POOL = [
  { id: 'banchai', name: 'Bàn chải', cm: 8, color: '#3b82f6' },
  { id: 'pencil', name: 'Cái bút chì', cm: 10, color: '#f59e0b' },
  { id: 'comb', name: 'Chiếc lược', cm: 9, color: '#ec4899' },
  { id: 'pencil2', name: 'Bút chì ngắn', cm: 6, color: '#22c55e' },
  { id: 'banchai2', name: 'Bàn chải lớn', cm: 11, color: '#a855f7' }
];

function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

/* Tạo hình SVG nằm ngang to, rõ nét cho từng đồ vật */
function getObjectSVG(id, width) {
  if (id.startsWith('banchai')) {
    return `<svg width="${width}" height="52" viewBox="0 0 200 52" preserveAspectRatio="none" style="display:block; overflow:visible;">
      <!-- Thân bàn chải -->
      <path d="M 8,26 C 8,14 30,16 110,18 C 145,19 170,16 185,16 C 194,16 197,34 185,34 C 170,34 145,31 110,32 C 30,34 8,38 8,26 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5"/>
      <!-- Chi tiết đệm tay cầm -->
      <rect x="45" y="22" width="35" height="8" rx="4" fill="#93c5fd"/>
      <circle cx="95" cy="26" r="3.5" fill="#ffffff"/>
      <circle cx="107" cy="26" r="3.5" fill="#ffffff"/>
      <!-- Đầu bàn chải -->
      <path d="M 170,16 L 195,16 C 198,16 200,18 200,26 C 200,34 198,36 195,36 L 170,36 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Lông bàn chải (quay lên trên) -->
      <g stroke="#0284c7" stroke-width="3.5" stroke-linecap="round">
        <line x1="172" y1="16" x2="172" y2="2"/>
        <line x1="176" y1="16" x2="176" y2="2"/>
        <line x1="180" y1="16" x2="180" y2="2"/>
        <line x1="184" y1="16" x2="184" y2="2"/>
        <line x1="188" y1="16" x2="188" y2="2"/>
        <line x1="192" y1="16" x2="192" y2="2"/>
        <line x1="196" y1="16" x2="196" y2="2"/>
      </g>
    </svg>`;
  } else if (id.startsWith('pencil')) {
    return `<svg width="${width}" height="44" viewBox="0 0 200 44" preserveAspectRatio="none" style="display:block; overflow:visible;">
      <!-- Cục tẩy -->
      <rect x="0" y="8" width="24" height="28" rx="4" fill="#f472b6" stroke="#db2777" stroke-width="2"/>
      <!-- Đai kim loại -->
      <rect x="24" y="8" width="16" height="28" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
      <!-- Thân bút chì -->
      <rect x="40" y="8" width="125" height="28" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
      <line x1="40" y1="17" x2="165" y2="17" stroke="#f59e0b" stroke-width="2"/>
      <line x1="40" y1="27" x2="165" y2="27" stroke="#b45309" stroke-width="2"/>
      <!-- Đầu gỗ chuốt -->
      <polygon points="165,8 194,22 165,36" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
      <!-- Ngòi chì -->
      <polygon points="184,17 194,22 184,27" fill="#1e293b"/>
    </svg>`;
  } else if (id.startsWith('comb')) {
    return `<svg width="${width}" height="46" viewBox="0 0 200 46" preserveAspectRatio="none" style="display:block; overflow:visible;">
      <!-- Sống lược -->
      <path d="M 5,6 Q 100,0 195,6 C 198,6 200,10 200,16 L 200,22 L 0,22 L 0,16 C 0,10 2,6 5,6 Z" fill="#ec4899" stroke="#be185d" stroke-width="2"/>
      <!-- Răng lược -->
      <g stroke="#ec4899" stroke-width="3.5" stroke-linecap="square">
        ${Array.from({length: 24}).map((_, i) => `<line x1="${8 + i * 8}" y1="22" x2="${8 + i * 8}" y2="42"/>`).join('')}
      </g>
    </svg>`;
  }
  return `<svg width="${width}" height="44" viewBox="0 0 200 44" preserveAspectRatio="none" style="display:block;">
    <rect x="0" y="6" width="200" height="32" rx="8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3"/>
  </svg>`;
}

export function initG4() {
  g4.round = 1;
  // Vòng 1 luôn là Bàn chải 8cm, các vòng sau ngẫu nhiên đồ vật khác
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

  // Tạo vật thể đo (Không có khung màu xanh bao quanh)
  const obj = document.createElement('div');
  obj.className = 'm-object';
  obj.style.left = g4.objLeft + 'px';
  obj.style.width = len + 'px';
  obj.innerHTML = getObjectSVG(it.id, len);
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
