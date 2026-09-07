/* ================================================================
   GAME 7: CHINH PHỤC ĐỈNH CAO (Đổi tên từ Siêu thử thách)
   - Thu gọn ôn tập thành 2 câu nhanh
   - Bài 1: Xếp tháp 5 tầng từ các khối hộp chữ nhật rời màu nâu và xám
           Điền số thích hợp: 9 viên gạch nâu và 6 viên gạch xám
   - Bài 2: Đếm khối trên toà lâu đài kì diệu (khối lập phương, khối hộp chữ nhật)
   - Nút Quay lại & Tiếp tục
   ================================================================ */
import { setChat, snd, makePills, showResult, confetti, openOutroModal, renderSubNav } from '../main.js';

let g7 = {
  part: 1, // 1: Ôn tập 1 | 2: Ôn tập 2 | 3: Bài 1 xếp tháp | 4: Bài 2 đếm lâu đài
  towerSlots: {}, // slotId -> color
  done: []
};

export function initG7() {
  g7.part = 1;
  g7.towerSlots = {};
  g7.done = [];
  loadPart(1);
}

function loadPart(p) {
  g7.part = p;
  makePills('g7pills', 4, p, g7.done);

  if (p === 1) loadReviewQ1();
  else if (p === 2) loadReviewQ2();
  else if (p === 3) loadTowerTask();
  else if (p === 4) loadCastleTask();
}

/* ---------- PHẦN 1: ÔN TẬP CÂU 1 ---------- */
function loadReviewQ1() {
  const a = document.getElementById('g7area');
  a.innerHTML = `
    <div class="prompt-box" style="font-size:0.9rem;color:#64748b">🏆 Ôn tập nhanh · Câu 1/2</div>
    <div class="prompt-box" style="font-size:1.2rem">
      ❓ <b>Khối lập phương</b> có bao nhiêu mặt và các mặt là hình gì?
    </div>
    <div class="reason-grid" id="g7q1Grid" style="margin:20px 0"></div>
  `;

  const opts = [
    { t: 'Có 6 mặt đều là hình vuông bằng nhau', good: true },
    { t: 'Có 4 mặt hình vuông và 2 mặt hình chữ nhật', good: false },
    { t: 'Có 3 mặt hình tam giác', good: false }
  ];

  const grid = document.getElementById('g7q1Grid');
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.textContent = o.t;
    b.addEventListener('click', () => {
      if (o.good) {
        b.classList.add('correct');
        snd('correct');
        grid.querySelectorAll('.reason-btn').forEach(x => x.disabled = true);
        g7.done.push(1);
        setChat('Chính xác! Khối lập phương có 6 mặt đều là hình vuông bằng nhau!', true, () => {
          setTimeout(() => loadPart(2), 1000);
        });
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 500);
        setChat('Con nhớ lại đặc điểm khối lập phương nhé: 6 mặt đều là hình gì bằng nhau?');
      }
    });
    grid.appendChild(b);
  });

  setChat('Khởi động Chinh phục đỉnh cao! Khối lập phương có mấy mặt và các mặt là hình gì con nhỉ?');

  renderSubNav('navRow7', {
    onBack: null,
    onNext: () => loadPart(2),
    canBack: false,
    canNext: true,
    nextLabel: 'Sang Câu 2 ➡'
  });
}

/* ---------- PHẦN 2: ÔN TẬP CÂU 2 ---------- */
function loadReviewQ2() {
  const a = document.getElementById('g7area');
  a.innerHTML = `
    <div class="prompt-box" style="font-size:0.9rem;color:#64748b">🏆 Ôn tập nhanh · Câu 2/2</div>
    <div class="prompt-box" style="font-size:1.2rem">
      ❓ Khi thực hành đo độ dài đồ vật bằng thước kẻ, <b>vạch nào</b> phải trùng với đầu đồ vật?
    </div>
    <div class="reason-grid" id="g7q2Grid" style="margin:20px 0"></div>
  `;

  const opts = [
    { t: 'Vạch số 0 trên thước kẻ', good: true },
    { t: 'Vạch số 1 trên thước kẻ', good: false },
    { t: 'Mép ngoài cùng của thước kẻ', good: false }
  ];

  const grid = document.getElementById('g7q2Grid');
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.textContent = o.t;
    b.addEventListener('click', () => {
      if (o.good) {
        b.classList.add('correct');
        snd('correct');
        grid.querySelectorAll('.reason-btn').forEach(x => x.disabled = true);
        g7.done.push(2);
        setChat('Rất chính xác! Luôn luôn đặt vạch số 0 trùng với một đầu đồ vật khi đo!', true, () => {
          setTimeout(() => loadPart(3), 1000);
        });
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 500);
        setChat('Chưa đúng rồi! Khi đo cm, ta bắt đầu đếm từ vạch số mấy con nhỉ?');
      }
    });
    grid.appendChild(b);
  });

  setChat('Khi đo độ dài bằng thước, vạch số mấy phải trùng với một đầu của đồ vật?');

  renderSubNav('navRow7', {
    onBack: () => loadPart(1),
    onNext: () => loadPart(3),
    canBack: true,
    canNext: true,
    nextLabel: 'Sang Bài 1 (Xếp tháp gạch) ➡'
  });
}

/* ---------- PHẦN 3: BÀI 1 — XẾP THÁP GẠCH 5 TẦNG & ĐIỀN SỐ ---------- */
const TOWER_CFG = {
  W: 68,
  H: 26,
  dX: 20,
  dY: -12,
  baseX: 42,
  baseY: 168,
  layerColors: { 1: 'orange', 2: 'gray', 3: 'orange', 4: 'gray', 5: 'orange' }
};

function getSlotCoords(layer, col) {
  const { W, H, dX, dY, baseX, baseY } = TOWER_CFG;
  const offsetX = baseX + (5 - layer) * (W / 2);
  const offsetY = baseY - (5 - layer) * H;
  const bx = offsetX + (col - 1) * W;
  const by = offsetY;
  return {
    bx, by, W, H, dX, dY,
    front: `${bx},${by} ${bx + W},${by} ${bx + W},${by + H} ${bx},${by + H}`,
    top: `${bx},${by} ${bx + dX},${by + dY} ${bx + W + dX},${by + dY} ${bx + W},${by}`,
    right: `${bx + W},${by} ${bx + W + dX},${by + dY} ${bx + W + dX},${by + H + dY} ${bx + W},${by + H}`
  };
}

function getMiniBrickSVG(color) {
  const isOrange = color === 'orange';
  const topFill = isOrange ? 'url(#gTopOr)' : 'url(#gTopGr)';
  const frontFill = isOrange ? 'url(#gFrontOr)' : 'url(#gFrontGr)';
  const rightFill = isOrange ? 'url(#gRightOr)' : 'url(#gRightGr)';
  const stroke = isOrange ? '#c2410c' : '#334155';

  return `
    <svg viewBox="0 0 74 34" class="brick-3d-thumb">
      <defs>
        <linearGradient id="gTopOr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffa057"/><stop offset="100%" stop-color="#ea580c"/>
        </linearGradient>
        <linearGradient id="gFrontOr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ea580c"/><stop offset="100%" stop-color="#b43a06"/>
        </linearGradient>
        <linearGradient id="gRightOr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c2410c"/><stop offset="100%" stop-color="#7c2402"/>
        </linearGradient>
        <linearGradient id="gTopGr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#64748b"/><stop offset="100%" stop-color="#475569"/>
        </linearGradient>
        <linearGradient id="gFrontGr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3e4856"/><stop offset="100%" stop-color="#242c37"/>
        </linearGradient>
        <linearGradient id="gRightGr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#222933"/><stop offset="100%" stop-color="#11161d"/>
        </linearGradient>
      </defs>
      <!-- Top Face -->
      <polygon points="4,11 18,2 68,2 54,11" fill="${topFill}" stroke="${stroke}" stroke-width="0.8"/>
      <!-- Right Face -->
      <polygon points="54,11 68,2 68,20 54,29" fill="${rightFill}" stroke="${stroke}" stroke-width="0.8"/>
      <!-- Front Face -->
      <polygon points="4,11 54,11 54,29 4,29" fill="${frontFill}" stroke="${stroke}" stroke-width="0.8"/>
      <!-- Highlight line -->
      <line x1="4" y1="11" x2="54" y2="11" stroke="#fff" stroke-opacity="0.6" stroke-width="1.2"/>
    </svg>
  `;
}

function loadTowerTask() {
  const a = document.getElementById('g7area');

  // Khởi tạo trạng thái 15 slot
  g7.towerSlots = {};
  for (let l = 1; l <= 5; l++) {
    for (let c = 1; c <= l; c++) {
      g7.towerSlots[`${l}-${c}`] = null; // null hoặc 'orange' | 'gray'
    }
  }

  // Xây dựng SVG toà tháp 5 tầng (Layer 5 ở đáy vẽ trước, Layer 1 ở đỉnh vẽ sau)
  let slotsSVG = '';
  for (let layer = 5; layer >= 1; layer--) {
    const targetColor = TOWER_CFG.layerColors[layer];
    for (let col = 1; col <= layer; col++) {
      const { bx, by, W, H, front, top, right } = getSlotCoords(layer, col);
      const slotKey = `${layer}-${col}`;
      const cx = bx + W / 2;
      const cy = by + H / 2 + 4;

      slotsSVG += `
        <g class="tower-slot-g" id="slot-g-${slotKey}" data-layer="${layer}" data-col="${col}" data-key="${slotKey}" data-target="${targetColor}">
          <!-- Top Face -->
          <polygon id="poly-top-${slotKey}" points="${top}" class="slot-poly-top"
            fill="rgba(241, 245, 249, 0.45)" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
          <!-- Right Face -->
          <polygon id="poly-right-${slotKey}" points="${right}" class="slot-poly-right"
            fill="rgba(203, 213, 225, 0.4)" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
          <!-- Front Face -->
          <polygon id="poly-front-${slotKey}" points="${front}" class="slot-poly-front"
            fill="rgba(248, 250, 252, 0.65)" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,2"/>
          <!-- Highlight edge line -->
          <line id="line-hi-${slotKey}" x1="${bx}" y1="${by}" x2="${bx + W}" y2="${by}"
            stroke="#ffffff" stroke-opacity="0" stroke-width="1.2"/>
          <!-- Text label (mờ khi chưa xếp) -->
          <text id="txt-${slotKey}" x="${cx}" y="${cy}" font-size="11" font-weight="900"
            font-family="sans-serif" text-anchor="middle" fill="#94a3b8" pointer-events="none">Tầng ${layer}</text>
        </g>
      `;
    }
  }

  a.innerHTML = `
    <div class="prompt-box">
      🧱 <b>Bài 1:</b> Cho các viên gạch màu nâu (cam) và xám, em hãy xếp thành hình toà tháp 5 tầng (lưu ý dùng hết số gạch để xếp).
    </div>

    <div class="tower-game-wrap">
      <!-- Toà tháp 5 tầng phối cảnh 3D xếp khít -->
      <div class="tower-build-zone">
        <div style="font-weight:800;font-size:0.95rem;color:#b45309;margin-bottom:8px;display:flex;align-items:center;gap:6px">
          🏰 <b>Toà tháp 5 tầng</b> <span>(Kéo gạch vào các tầng xếp khít)</span>
        </div>

        <div class="tower-svg-container" id="towerSvgWrap">
          <svg viewBox="0 0 460 215" id="towerSvg">
            <defs>
              <linearGradient id="gradTopOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffa55c"/><stop offset="100%" stop-color="#ea580c"/>
              </linearGradient>
              <linearGradient id="gradFrontOrange" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ea580c"/><stop offset="100%" stop-color="#b43a06"/>
              </linearGradient>
              <linearGradient id="gradRightOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#c2410c"/><stop offset="100%" stop-color="#7c2402"/>
              </linearGradient>
              <linearGradient id="gradTopGray" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#64748b"/><stop offset="100%" stop-color="#475569"/>
              </linearGradient>
              <linearGradient id="gradFrontGray" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#3e4856"/><stop offset="100%" stop-color="#242c37"/>
              </linearGradient>
              <linearGradient id="gradRightGray" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#222933"/><stop offset="100%" stop-color="#11161d"/>
              </linearGradient>
            </defs>
            ${slotsSVG}
          </svg>
        </div>

        <div style="font-size:0.82rem;color:#64748b;margin-top:8px;font-weight:700">
          💡 <i>Mẹo: Con có thể bấm vào viên gạch đã xếp trên tháp để gỡ ra khay rời!</i>
        </div>
      </div>

      <!-- Khay gạch rời & Điền số -->
      <div class="brick-tray-zone">
        <div class="brick-palette">
          <div class="brick-palette-title">
            <span>🧱 <b>Kho gạch rời</b> (Kéo thả hoặc Bấm vào gạch):</span>
          </div>

          <!-- Nhóm 9 gạch cam -->
          <div class="brick-subgroup">
            <div class="brick-subgroup-lbl">
              <span style="font-size:1.1rem">🟧</span> Gạch màu cam (nâu) — Còn lại: <b id="remBrownCount" style="color:#ea580c">9</b>/9 viên
            </div>
            <div class="brick-3d-grid" id="trayBrownGrid"></div>
          </div>

          <!-- Nhóm 6 gạch xám -->
          <div class="brick-subgroup">
            <div class="brick-subgroup-lbl">
              <span style="font-size:1.1rem">⬛</span> Gạch màu xám — Còn lại: <b id="remGrayCount" style="color:#475569">6</b>/6 viên
            </div>
            <div class="brick-3d-grid" id="trayGrayGrid"></div>
          </div>

          <!-- Các nút thao tác -->
          <div class="brick-actions-row">
            <button class="action-btn btn-blue" id="btnAutoStack" style="padding:8px 16px;font-size:0.88rem;min-height:auto">
              ⚡ Xếp nhanh mẫu tháp
            </button>
            <button class="action-btn btn-orange" id="btnResetTower" style="padding:8px 16px;font-size:0.88rem;min-height:auto">
              🔄 Xếp lại từ đầu
            </button>
          </div>
        </div>

        <!-- Ô điền số theo chuẩn docx -->
        <div class="brick-inputs-box">
          <div style="margin-bottom:8px;font-size:1rem;color:#92400e">❓ <b>Điền số thích hợp vào ô trống:</b></div>
          <div style="line-height:2.1">
            Em đã dùng <input type="number" id="inputBrown" class="number-input-field" min="0" max="20" placeholder="?"> viên gạch màu nâu (cam)<br>
            và <input type="number" id="inputGray" class="number-input-field" min="0" max="20" placeholder="?"> viên gạch màu xám để xếp toà tháp.
          </div>
          <div style="margin-top:12px;text-align:center">
            <button class="action-btn btn-green" id="btnCheckTower" style="padding:10px 24px;font-size:1.05rem;min-height:auto">
              ✅ Kiểm tra kết quả
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="towerFeedback" style="margin-top:10px"></div>
  `;

  // Sinh 9 viên gạch cam và 6 viên gạch xám trong khay
  buildTrayBricks();

  // Đăng ký tương tác click vào các ô tháp để gỡ ra (Undo)
  setupTowerSlotClickHandlers();

  // Nút xếp nhanh mẫu tháp
  document.getElementById('btnAutoStack')?.addEventListener('click', () => {
    snd('step');
    autoStackTower();
  });

  // Nút xếp lại từ đầu
  document.getElementById('btnResetTower')?.addEventListener('click', () => {
    snd('click');
    resetTower();
  });

  // Kiểm tra đáp án điền số (9 viên nâu và 6 viên xám)
  document.getElementById('btnCheckTower')?.addEventListener('click', checkTowerAnswer);

  setChat('Bài 1: Cho các viên gạch màu nâu và xám, em hãy kéo thả các viên gạch vào toà tháp 5 tầng và đếm xem đã dùng bao nhiêu viên gạch mỗi loại nhé!');

  renderSubNav('navRow7', {
    onBack: () => loadPart(2),
    onNext: () => loadPart(4),
    canBack: true,
    canNext: true,
    nextLabel: 'Sang Bài 2 (Đếm lâu đài) ➡'
  });
}

function buildTrayBricks() {
  const brownWrap = document.getElementById('trayBrownGrid');
  const grayWrap = document.getElementById('trayGrayGrid');
  if (!brownWrap || !grayWrap) return;

  brownWrap.innerHTML = '';
  grayWrap.innerHTML = '';

  // 9 viên cam
  for (let i = 1; i <= 9; i++) {
    const item = document.createElement('div');
    item.className = 'brick-3d-item';
    item.id = `tray-item-brown-${i}`;
    item.dataset.color = 'orange';
    item.dataset.index = i;
    item.title = `Gạch cam số ${i} (Kéo hoặc Bấm để xếp)`;
    item.innerHTML = getMiniBrickSVG('orange');

    makeBrickDraggable(item, 'orange');
    brownWrap.appendChild(item);
  }

  // 6 viên xám
  for (let i = 1; i <= 6; i++) {
    const item = document.createElement('div');
    item.className = 'brick-3d-item';
    item.id = `tray-item-gray-${i}`;
    item.dataset.color = 'gray';
    item.dataset.index = i;
    item.title = `Gạch xám số ${i} (Kéo hoặc Bấm để xếp)`;
    item.innerHTML = getMiniBrickSVG('gray');

    makeBrickDraggable(item, 'gray');
    grayWrap.appendChild(item);
  }

  updateTrayCounters();
}

function makeBrickDraggable(item, color) {
  let isPointerDown = false;
  let hasDragged = false;
  let startX = 0, startY = 0;
  let ghostEl = null;

  const onPointerDown = (e) => {
    if (item.classList.contains('is-used')) return;
    isPointerDown = true;
    hasDragged = false;
    startX = e.clientX;
    startY = e.clientY;

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  const onPointerMove = (e) => {
    if (!isPointerDown) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (!hasDragged && Math.hypot(dx, dy) > 6) {
      hasDragged = true;
      item.classList.add('is-dragging');

      // Tạo Ghost Element di chuyển theo con trỏ
      ghostEl = document.createElement('div');
      ghostEl.className = 'brick-drag-ghost';
      ghostEl.innerHTML = getMiniBrickSVG(color);
      document.body.appendChild(ghostEl);
    }

    if (hasDragged && ghostEl) {
      ghostEl.style.left = e.clientX + 'px';
      ghostEl.style.top = e.clientY + 'px';

      // Tìm slot hợp lệ gần nhất
      highlightClosestSlot(e.clientX, e.clientY, color);
    }
  };

  const onPointerUp = (e) => {
    if (!isPointerDown) return;
    isPointerDown = false;

    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);

    item.classList.remove('is-dragging');

    if (hasDragged) {
      if (ghostEl) {
        ghostEl.remove();
        ghostEl = null;
      }

      // Kiểm tra xem có thả trúng slot hợp lệ không
      const targetSlot = getSlotAtPoint(e.clientX, e.clientY, color);
      clearSlotHighlights();

      if (targetSlot) {
        fillSpecificSlot(targetSlot.dataset.key, color);
        item.classList.add('is-used');
        updateTrayCounters();
        snd('step');
      }
    } else {
      // Nhấp nhẹ (Click / Tap): xếp nhanh vào slot trống đầu tiên phù hợp
      const slotKey = findFirstEmptySlot(color);
      if (slotKey) {
        fillSpecificSlot(slotKey, color);
        item.classList.add('is-used');
        updateTrayCounters();
        snd('step');
      }
    }
  };

  item.addEventListener('pointerdown', onPointerDown);
}

function highlightClosestSlot(cx, cy, color) {
  clearSlotHighlights();
  const slot = getSlotAtPoint(cx, cy, color);
  if (slot) {
    slot.classList.add('hover-target');
  }
}

function clearSlotHighlights() {
  document.querySelectorAll('.tower-slot-g.hover-target').forEach(el => {
    el.classList.remove('hover-target');
  });
}

function getSlotAtPoint(cx, cy, color) {
  const elements = document.elementsFromPoint(cx, cy);
  for (let el of elements) {
    const slotG = el.closest('.tower-slot-g');
    if (slotG) {
      const key = slotG.dataset.key;
      // Chỉ chấp nhận nếu slot còn trống và khớp màu tầng mục tiêu
      if (!g7.towerSlots[key] && slotG.dataset.target === color) {
        return slotG;
      }
    }
  }

  // Thuật toán dự phòng khoảng cách (hỗ trợ kéo gần vào khung tháp)
  const svg = document.getElementById('towerSvg');
  if (!svg) return null;
  const svgRect = svg.getBoundingClientRect();
  if (
    cx >= svgRect.left - 20 && cx <= svgRect.right + 20 &&
    cy >= svgRect.top - 20 && cy <= svgRect.bottom + 20
  ) {
    let closest = null;
    let minDist = 70; // Bán kính nhận diện pixel

    document.querySelectorAll(`.tower-slot-g[data-target="${color}"]`).forEach(slotG => {
      const key = slotG.dataset.key;
      if (!g7.towerSlots[key]) {
        const rect = slotG.getBoundingClientRect();
        const slotCenterX = rect.left + rect.width / 2;
        const slotCenterY = rect.top + rect.height / 2;
        const dist = Math.hypot(cx - slotCenterX, cy - slotCenterY);
        if (dist < minDist) {
          minDist = dist;
          closest = slotG;
        }
      }
    });

    return closest;
  }

  return null;
}

function findFirstEmptySlot(color) {
  // Tìm từ tầng 5 lên tầng 1 hoặc theo đúng màu tầng
  for (let l = 5; l >= 1; l--) {
    if (TOWER_CFG.layerColors[l] === color) {
      for (let c = 1; c <= l; c++) {
        const key = `${l}-${c}`;
        if (!g7.towerSlots[key]) return key;
      }
    }
  }
  return null;
}

function fillSpecificSlot(slotKey, color) {
  g7.towerSlots[slotKey] = color;

  const slotG = document.getElementById(`slot-g-${slotKey}`);
  if (!slotG) return;

  const isOrange = color === 'orange';
  const topPoly = document.getElementById(`poly-top-${slotKey}`);
  const rightPoly = document.getElementById(`poly-right-${slotKey}`);
  const frontPoly = document.getElementById(`poly-front-${slotKey}`);
  const lineHi = document.getElementById(`line-hi-${slotKey}`);
  const txt = document.getElementById(`txt-${slotKey}`);

  if (topPoly) {
    topPoly.setAttribute('fill', isOrange ? 'url(#gradTopOrange)' : 'url(#gradTopGray)');
    topPoly.setAttribute('stroke', isOrange ? '#ea580c' : '#475569');
    topPoly.setAttribute('stroke-width', '0.8');
    topPoly.removeAttribute('stroke-dasharray');
  }

  if (rightPoly) {
    rightPoly.setAttribute('fill', isOrange ? 'url(#gradRightOrange)' : 'url(#gradRightGray)');
    rightPoly.setAttribute('stroke', isOrange ? '#9a3412' : '#1e293b');
    rightPoly.setAttribute('stroke-width', '0.8');
    rightPoly.removeAttribute('stroke-dasharray');
  }

  if (frontPoly) {
    frontPoly.setAttribute('fill', isOrange ? 'url(#gradFrontOrange)' : 'url(#gradFrontGray)');
    frontPoly.setAttribute('stroke', isOrange ? '#c2410c' : '#334155');
    frontPoly.setAttribute('stroke-width', '0.8');
    frontPoly.removeAttribute('stroke-dasharray');
  }

  if (lineHi) {
    lineHi.setAttribute('stroke-opacity', '0.6');
  }

  if (txt) {
    txt.style.display = 'none';
  }

  slotG.classList.add('is-filled', 'just-snapped');
  setTimeout(() => slotG.classList.remove('just-snapped'), 400);

  checkTowerProgress();
}

function clearSlot(slotKey) {
  const prevColor = g7.towerSlots[slotKey];
  if (!prevColor) return;

  g7.towerSlots[slotKey] = null;
  const slotG = document.getElementById(`slot-g-${slotKey}`);
  if (!slotG) return;

  const [layer] = slotKey.split('-');
  const topPoly = document.getElementById(`poly-top-${slotKey}`);
  const rightPoly = document.getElementById(`poly-right-${slotKey}`);
  const frontPoly = document.getElementById(`poly-front-${slotKey}`);
  const lineHi = document.getElementById(`line-hi-${slotKey}`);
  const txt = document.getElementById(`txt-${slotKey}`);

  if (topPoly) {
    topPoly.setAttribute('fill', 'rgba(241, 245, 249, 0.45)');
    topPoly.setAttribute('stroke', '#94a3b8');
    topPoly.setAttribute('stroke-width', '1');
    topPoly.setAttribute('stroke-dasharray', '3,2');
  }

  if (rightPoly) {
    rightPoly.setAttribute('fill', 'rgba(203, 213, 225, 0.4)');
    rightPoly.setAttribute('stroke', '#94a3b8');
    rightPoly.setAttribute('stroke-width', '1');
    rightPoly.setAttribute('stroke-dasharray', '3,2');
  }

  if (frontPoly) {
    frontPoly.setAttribute('fill', 'rgba(248, 250, 252, 0.65)');
    frontPoly.setAttribute('stroke', '#64748b');
    frontPoly.setAttribute('stroke-width', '1.4');
    frontPoly.setAttribute('stroke-dasharray', '4,2');
  }

  if (lineHi) {
    lineHi.setAttribute('stroke-opacity', '0');
  }

  if (txt) {
    txt.style.display = '';
    txt.textContent = `Tầng ${layer}`;
  }

  slotG.classList.remove('is-filled');

  // Khôi phục lại 1 viên trong khay
  unuseOneTrayBrick(prevColor);
  updateTrayCounters();
  snd('click');
}

function setupTowerSlotClickHandlers() {
  document.querySelectorAll('.tower-slot-g').forEach(slotG => {
    slotG.addEventListener('click', () => {
      const key = slotG.dataset.key;
      if (g7.towerSlots[key]) {
        clearSlot(key);
      }
    });
  });
}

function unuseOneTrayBrick(color) {
  const selector = color === 'orange'
    ? '#trayBrownGrid .brick-3d-item.is-used'
    : '#trayGrayGrid .brick-3d-item.is-used';
  const usedItems = document.querySelectorAll(selector);
  if (usedItems.length > 0) {
    // Phục hồi viên cuối cùng
    const lastItem = usedItems[usedItems.length - 1];
    lastItem.classList.remove('is-used');
  }
}

function updateTrayCounters() {
  const brownRem = document.querySelectorAll('#trayBrownGrid .brick-3d-item:not(.is-used)').length;
  const grayRem = document.querySelectorAll('#trayGrayGrid .brick-3d-item:not(.is-used)').length;

  const lblBrown = document.getElementById('remBrownCount');
  const lblGray = document.getElementById('remGrayCount');
  if (lblBrown) lblBrown.textContent = brownRem;
  if (lblGray) lblGray.textContent = grayRem;
}

function autoStackTower() {
  // Lấp đầy toàn bộ 15 ô theo đúng thứ tự màu
  for (let l = 1; l <= 5; l++) {
    const color = TOWER_CFG.layerColors[l];
    for (let c = 1; c <= l; c++) {
      fillSpecificSlot(`${l}-${c}`, color);
    }
  }

  // Đánh dấu toàn bộ khay là đã dùng
  document.querySelectorAll('.brick-3d-item').forEach(el => el.classList.add('is-used'));
  updateTrayCounters();

  setChat('Toà tháp 5 tầng đã được xếp hoàn chỉnh khít rịt! Giờ con hãy đếm số viên gạch màu nâu (cam) và màu xám rồi điền vào ô trống nhé!');
}

function resetTower() {
  for (let l = 1; l <= 5; l++) {
    for (let c = 1; c <= l; c++) {
      if (g7.towerSlots[`${l}-${c}`]) {
        g7.towerSlots[`${l}-${c}`] = null;
        clearSlot(`${l}-${c}`);
      }
    }
  }
  document.querySelectorAll('.brick-3d-item').forEach(el => el.classList.remove('is-used'));
  updateTrayCounters();
  setChat('Đã dọn sạch toà tháp! Con hãy tự tay kéo thả các viên gạch vào từng tầng để hoàn thành toà tháp 5 tầng nhé!');
}

function checkTowerProgress() {
  let filledCount = 0;
  for (let key in g7.towerSlots) {
    if (g7.towerSlots[key]) filledCount++;
  }

  if (filledCount === 15) {
    snd('correct');
    setChat('Tuyệt vời! Con đã xếp đủ 5 tầng toà tháp với 15 viên gạch! Giờ hãy đếm số viên gạch màu nâu và màu xám rồi điền vào ô trống nhé!');
  }
}

function checkTowerAnswer() {
  const bVal = Number(document.getElementById('inputBrown')?.value);
  const gVal = Number(document.getElementById('inputGray')?.value);
  const fb = document.getElementById('towerFeedback');

  if (bVal === 9 && gVal === 6) {
    snd('correct');
    confetti(50);
    g7.done.push(3);
    if (fb) {
      fb.innerHTML = `
        <div style="background:#d1fae5;border-radius:14px;padding:14px;font-weight:800;color:#065f46;text-align:center;box-shadow:0 4px 12px rgba(16,185,129,0.2)">
          ✅ Hoàn toàn chính xác! Em đã dùng 9 viên gạch màu nâu và 6 viên gạch màu xám để xếp toà tháp 5 tầng!
        </div>
      `;
    }
    setChat('Tuyệt đỉnh! Con đã đếm rất chính xác: 9 viên gạch nâu và 6 viên gạch xám, tổng cộng 15 viên gạch!', true, () => {
      setTimeout(() => loadPart(4), 1400);
    });
  } else {
    snd('wrong');
    let hint = '';
    if (bVal !== 9 && gVal !== 6) hint = 'Con đếm lại cả hai màu nhé: Tầng 1, 3, 5 là gạch nâu (1 + 3 + 5 = 9), Tầng 2, 4 là gạch xám (2 + 4 = 6)!';
    else if (bVal !== 9) hint = 'Số gạch màu nâu chưa đúng rồi. Tầng 1 có 1 viên, tầng 3 có 3 viên, tầng 5 có 5 viên: 1 + 3 + 5 = mấy nhỉ?';
    else hint = 'Số gạch màu xám chưa đúng rồi. Tầng 2 có 2 viên, tầng 4 có 4 viên: 2 + 4 = mấy nhỉ?';

    if (fb) {
      fb.innerHTML = `<div style="background:#fee2e2;border-radius:14px;padding:12px;font-weight:700;color:#991b1b;text-align:center">❌ ${hint}</div>`;
    }
    setChat(hint);
  }
}

/* ---------- PHẦN 4: BÀI 2 — ĐẾM KHỐI TOÀ LÂU ĐÀI & KẾT THÚC HỒ GƯƠM ---------- */
function loadCastleTask() {
  const a = document.getElementById('g7area');

  a.innerHTML = `
    <div class="prompt-box">
      🏰 <b>Bài 2:</b> Quan sát bức tranh toà lâu đài kì diệu và đếm số lượng các khối hình:
    </div>

    <div class="castle-inspect-wrap">
      <!-- Ảnh toà lâu đài đồ chơi chuẩn docx -->
      <div class="castle-img-card">
        <img src="/assets/castle-blocks.jpg" alt="Toà lâu đài đồ chơi hình khối">
      </div>

      <!-- Khung trả lời câu hỏi -->
      <div class="castle-quiz-card">
        <div class="brick-inputs-box" style="font-size:1.1rem">
          <div style="margin-bottom:12px;color:#1e3a8a;font-size:1.2rem">🏰 <b>Toà lâu đài có:</b></div>
          <div style="margin-bottom:14px">
            Có: <input type="number" id="inputCube" class="number-input-field" min="0" max="30" placeholder="?"> <b>khối lập phương</b>.
          </div>
          <div style="margin-bottom:16px">
            Có: <input type="number" id="inputBox" class="number-input-field" min="0" max="30" placeholder="?"> <b>khối hộp chữ nhật</b>.
          </div>
          <div style="text-align:center">
            <button class="action-btn btn-green" id="btnCheckCastle" style="padding:10px 24px;font-size:1.05rem">
              ✅ Kiểm tra & Hoàn thành
            </button>
          </div>
        </div>
        <div class="note-sm" style="background:#eff6ff;padding:10px;border-radius:10px;border:1px solid #bfdbfe;color:#1e40af">
          💡 <b>Gợi ý của Thần Kim Quy:</b><br>
          - Khối lập phương là các khối vuông ở các tháp 2 bên và cột giữa.<br>
          - Khối hộp chữ nhật là các khối cam nằm ngang ở chân và trụ cổng đứng màu đỏ.
        </div>
      </div>
    </div>
    <div id="castleFeedback" style="margin-top:12px"></div>
  `;

  document.getElementById('btnCheckCastle')?.addEventListener('click', checkCastleAnswer);

  setChat('Bài 2: Con hãy quan sát thật kỹ bức tranh lâu đài kì diệu, đếm xem có bao nhiêu khối lập phương và khối hộp chữ nhật nhé!');

  renderSubNav('navRow7', {
    onBack: () => loadPart(3),
    onNext: null,
    canBack: true,
    canNext: false
  });
}

function checkCastleAnswer() {
  const cubeVal = Number(document.getElementById('inputCube')?.value);
  const boxVal = Number(document.getElementById('inputBox')?.value);
  const fb = document.getElementById('castleFeedback');

  // Khối lập phương: 12 đến 14 khối đều được chấp nhận linh hoạt cho học sinh lớp 1
  // Khối hộp chữ nhật: 4 đến 5 khối (2 cam nằm ngang + 2 đỏ dựng đứng ở cổng + 1 xanh ngang)
  const isCubeGood = (cubeVal >= 12 && cubeVal <= 14);
  const isBoxGood = (boxVal >= 4 && boxVal <= 6);

  if (isCubeGood && isBoxGood) {
    snd('win');
    confetti(120);
    g7.done.push(4);

    if (fb) {
      fb.innerHTML = `
        <div style="background:#d1fae5;border-radius:14px;padding:16px;font-weight:800;color:#065f46;text-align:center;font-size:1.15rem">
          🎉 XUẤT SẮC! Dũng sĩ đã đếm rất chính xác: Có ${cubeVal} khối lập phương và ${boxVal} khối hộp chữ nhật trong toà lâu đài!
        </div>
      `;
    }

    setChat('Xuất sắc vô cùng! Dũng sĩ đã vượt qua Thử thách cuối cùng: Chinh phục đỉnh cao! Cả 7 điều kì diệu của Vương quốc Toán học đã được mở ra!', true, () => {
      setTimeout(() => {
        showResult(7, 5, 'Chúc mừng dũng sĩ đã xuất sắc chinh phục toàn bộ 7 thử thách trong Vương quốc Toán học!');
        // Tự động mở Slide Kết Thúc Hồ Gươm sau 1.5 giây
        setTimeout(() => {
          openOutroModal();
        }, 1500);
      }, 1200);
    });
  } else {
    snd('wrong');
    let msg = '';
    if (!isCubeGood && !isBoxGood) {
      msg = 'Con đếm lại cả hai loại khối nhé: Toà lâu đài có khoảng 12 đến 13 khối lập phương vuông, và 4 đến 5 khối hộp chữ nhật!';
    } else if (!isCubeGood) {
      msg = 'Số khối lập phương chưa đúng. Con đếm các khối vuông ở tháp trái (3 khối), tháp phải (3-4 khối), cột giữa (6 khối): khoảng 12-13 khối nhé!';
    } else {
      msg = 'Số khối hộp chữ nhật chưa đúng. Con đếm 2 khối cam nằm ngang ở chân đế và 2 khối đỏ dựng đứng ở cổng: khoảng 4-5 khối nhé!';
    }

    if (fb) {
      fb.innerHTML = `<div style="background:#fef3c7;border-radius:14px;padding:12px;font-weight:700;color:#92400e;text-align:center">💡 ${msg}</div>`;
    }
    setChat(msg);
  }
}
