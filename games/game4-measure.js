/* ================================================================
   GAME 4: TRẠM ĐO LƯỜNG KÌ DIỆU
   Đo độ dài bằng xăng-ti-mét (cm)
   - Thước kẻ vẽ thừa 2 đầu, vạch số 0 và 15 lùi vào bên trong
   - Co kích thước thước và bàn chải bé lại, tạo khoảng trống 2 bên thoải mái
   - Thêm nút Quay lại & Tiếp tục
   ================================================================ */
import { setChat, snd, makePills, showResult, renderSubNav } from '../main.js';

let g4 = {
  round: 1,
  PX: 20, // Co nhỏ tỉ lệ để có khoảng trống 2 bên thoải mái kéo
  padEnd: 24, // Phần thừa ra ở 2 đầu thước kẻ
  objLeft: 120, // Đặt đồ vật lùi vào giữa một khoảng
  items: [],
  done: []
};

const ITEM_POOL = [
  { id: 'banchai', name: 'Bàn chải', cm: 8 },
  { id: 'pencil', name: 'Cái bút chì', cm: 8 },
  { id: 'comb', name: 'Chiếc lược', cm: 9 },
  { id: 'eraser', name: 'Cục tẩy', cm: 4 },
  { id: 'lollipop', name: 'Cây kẹo mút', cm: 6 },
  { id: 'spoon', name: 'Cái muỗng', cm: 7 },
  { id: 'scissors', name: 'Cái kéo', cm: 10 }
];

function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function getObjectHTML(id) {
  let src = '';
  if (id.startsWith('banchai')) src = 'items/banchai.png';
  else if (id.startsWith('pencil')) src = 'items/pencil.png';
  else if (id.startsWith('comb')) src = 'items/comb.png';
  else if (id.startsWith('eraser')) src = 'items/eraser.png';
  else if (id.startsWith('lollipop')) src = 'items/lollipop.png';
  else if (id.startsWith('spoon')) src = 'items/spoon.png';
  else if (id.startsWith('scissors')) src = 'items/scissors.png';

  if (src) {
    return `<img src="${src}" alt="${id}" style="max-height:56px;width:100%;object-fit:contain">`;
  }
  return `<svg width="100%" height="36" viewBox="0 0 200 36"><rect x="0" y="4" width="200" height="28" rx="6" fill="#3b82f6"/></svg>`;
}

export function initG4() {
  g4.round = 1;
  g4.done = [];
  const otherItems = shuffle(ITEM_POOL.filter(x => x.id !== 'banchai'));
  g4.items = [ITEM_POOL[0], ...otherItems.slice(0, 2)];
  loadRound(1);
}

function loadRound(r) {
  const it = g4.items[r - 1];
  makePills('g4pills', 3, r, g4.done);

  const a = document.getElementById('g4area');
  a.innerHTML = `
    <div class="prompt-box">📏 Thử thách 4.${r}: Kéo Thước Thần Kỳ để <b>vạch số 0</b> trùng với đầu <b>${it.name}</b> nhé!</div>
    <div class="measure-scene" id="mscene" style="height:210px"></div>
    <div class="align-msg" id="alignmsg"></div>
    <div id="g4predict" style="margin-top:10px"></div>
  `;

  const scene = document.getElementById('mscene');
  const len = it.cm * g4.PX;

  // Đồ vật đo (co nhỏ lại vừa vặn)
  const obj = document.createElement('div');
  obj.className = 'm-object';
  obj.style.left = g4.objLeft + 'px';
  obj.style.width = len + 'px';
  obj.style.top = '20px';
  obj.innerHTML = getObjectHTML(it.id);
  scene.appendChild(obj);

  // THƯỚC KẺ HIỆN ĐẠI: VẼ THỪA 2 ĐẦU, VẠCH 0 VÀ 15 LÙI VÀO TRONG
  const ruler = document.createElement('div');
  ruler.className = 'ruler ruler-modern';
  ruler.id = 'ruler';

  const totalWidth = g4.padEnd * 2 + 15 * g4.PX;
  ruler.style.width = totalWidth + 'px';

  let ticks = '';
  for (let i = 0; i <= 15; i++) {
    const tx = g4.padEnd + i * g4.PX;
    const isMajor = i % 5 === 0;
    const h = isMajor ? 24 : 13;
    // Vạch chia độ dài
    ticks += `<div class="tick" style="left:${tx}px;height:${h}px;top:0;position:absolute;width:${isMajor ? 3 : 2}px;background:#78350f"></div>`;
    // Chữ số trên thước
    ticks += `<div class="rnum" style="left:${tx}px;top:26px;font-size:14px">${i}</div>`;
  }
  // Huy hiệu chỉ vạch 0 nổi bật
  ticks += `<div class="zero-badge" style="left:${g4.padEnd}px">0</div>`;
  ruler.innerHTML = ticks;
  scene.appendChild(ruler);

  // Đặt vị trí ban đầu lệch một chút để học sinh kéo thước
  let startOffset = (r === 1) ? 50 : (r === 2 ? -40 : 70);
  let initLeft = g4.objLeft - g4.padEnd + startOffset;
  ruler.style.left = Math.max(10, Math.min(360, initLeft)) + 'px';

  makeDraggable(ruler, it);
  predict(it);

  renderSubNav('navRow4', {
    onBack: () => { if (g4.round > 1) { g4.round--; loadRound(g4.round); } },
    onNext: () => { if (g4.round < 3) { g4.round++; loadRound(g4.round); } },
    canBack: g4.round > 1,
    canNext: g4.round < 3
  });
}

function predict(it) {
  const a = document.getElementById('g4predict');
  if (!a) return;
  a.innerHTML = `
    <div class="prompt-box">❓ Con đoán <b>${it.name}</b> dài mấy xăng-ti-mét (cm)?</div>
    <div class="choice-pad" id="g4p"></div>
  `;

  setChat(`Hãy dùng chuột kéo thước để vạch số 0 trùng với đầu ${it.name}, và đoán xem ${it.name} dài mấy cm nhé!`);

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
        setChat(`Dự đoán rất hay! ${it.name} dài ${correct} cm. Giờ con kéo thước để vạch 0 trùng khít đầu vật nhé!`);
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 500);
        setChat(`Con thử ước lượng lại nhé: xem đuôi của ${it.name} chạm vào khoảng vạch mấy? Chọn lại lần nữa nào!`);
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
    x = Math.max(0, Math.min(scene.clientWidth - ruler.clientWidth, x));
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
  // Vạch 0 nằm ở ruler.offsetLeft + g4.padEnd
  const zeroPos = ruler.offsetLeft + g4.padEnd;
  const diff = Math.abs(zeroPos - g4.objLeft);
  const msg = document.getElementById('alignmsg');

  if (diff <= g4.PX * 0.7) {
    msg.textContent = '';
    snd('correct');
    setChat(`Vạch số 0 đã trùng khít với đầu ${it.name} rồi! Giờ con nhìn xem đuôi ${it.name} chỉ vào vạch số mấy nhé!`);
    readResult(it);
  } else {
    snd('wrong');
    msg.textContent = `⚠️ Vạch số 0 phải trùng với đầu ${it.name} nhé! Hãy kéo thước lại.`;
    setChat(`Vạch số 0 chưa trùng với đầu ${it.name} rồi. Con kéo thước dịch chuyển thêm một chút nhé!`);
  }
}

function readResult(it) {
  if (document.getElementById('g4read')) return;

  const a = document.getElementById('g4area');
  a.insertAdjacentHTML('beforeend', `
    <div class="prompt-box" id="g4read" style="margin-top:12px">❓ Con đọc được ${it.name} dài mấy xăng-ti-mét?</div>
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
        setChat(`Con nhìn kỹ đuôi ${it.name} chạm vào vạch số mấy trên thước nhé! Hãy chọn lại nào!`);
      }
    });
    pad.appendChild(b);
  });
}

function verify(it) {
  g4.done.push(g4.round);
  setChat(`Chính xác! Vạch số 0 trùng với một đầu, đầu kia chỉ vào vạch số ${it.cm} nên ${it.name} dài ${it.cm} cm. Dũng sĩ rất giỏi!`, true, () => {
    setTimeout(() => {
      if (g4.round < 3) {
        g4.round++;
        loadRound(g4.round);
      } else {
        showResult(4, 3, 'Con đã thực hành đo các đồ vật bằng thước cm thật chuẩn xác! Thần Rùa Kim Quy rất khen ngợi!');
      }
    }, 1200);
  });
}
