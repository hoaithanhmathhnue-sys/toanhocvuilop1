/* ================================================================
   GAME 6: GHÉP MẢNH PHÉP MÀU (Nâng cấp từ Tangram)
   - Bỏ bóng mờ nét đứt, trang giấy trắng sáng tạo
   - Cho học sinh thỏa sức sáng tạo xếp hình: Thuyền buồm, Ngôi nhà, Cây thông...
   - Kéo thả tự do, xoay hình, mẫu gợi ý sinh động
   - Nút Quay lại & Tiếp tục
   ================================================================ */
import { setChat, snd, makePills, showResult, confetti, renderSubNav } from '../main.js';

let g6 = {
  currentSample: 'boat', // 'boat' | 'house' | 'tree'
  placedPieces: [],
  done: []
};

const SAMPLES = {
  boat: {
    name: 'Con thuyền',
    icon: '⛵',
    desc: 'Cánh buồm hình tam giác + thân thuyền hình chữ nhật',
    svg: `<svg viewBox="0 0 160 140" width="120"><polygon points="75,10 75,90 15,90" fill="#3b82f6"/><rect x="15" y="94" width="60" height="30" rx="3" fill="#f59e0b"/><rect x="79" y="94" width="60" height="30" rx="3" fill="#ef4444"/></svg>`
  },
  house: {
    name: 'Ngôi nhà',
    icon: '🏠',
    desc: 'Mái nhà hình tam giác + tường nhà hình vuông / chữ nhật',
    svg: `<svg viewBox="0 0 160 140" width="120"><polygon points="80,10 145,70 15,70" fill="#ef4444"/><rect x="25" y="74" width="110" height="55" rx="4" fill="#3b82f6"/><rect x="65" y="88" width="30" height="41" rx="2" fill="#fde047"/></svg>`
  },
  tree: {
    name: 'Cây thông',
    icon: '🌲',
    desc: 'Tán cây hình tam giác + thân cây & gốc cây hình chữ nhật',
    svg: `<svg viewBox="0 0 160 140" width="120"><polygon points="80,10 135,70 25,70" fill="#22c55e"/><rect x="45" y="72" width="70" height="32" rx="3" fill="#16a34a"/><rect x="65" y="106" width="30" height="28" rx="2" fill="#92400e"/></svg>`
  }
};

const PIECES_DEF = [
  { id: 'tri_big', name: 'Tam giác xanh', type: 'tri', pts: '0,70 90,70 45,0', w: 90, h: 70, fill: '#3b82f6' },
  { id: 'tri_green', name: 'Tam giác lá', type: 'tri', pts: '0,60 80,60 40,0', w: 80, h: 60, fill: '#22c55e' },
  { id: 'tri_red', name: 'Tam giác đỏ', type: 'tri', pts: '0,60 80,60 0,0', w: 80, h: 60, fill: '#ef4444' },
  { id: 'rect_orange', name: 'Chữ nhật cam', type: 'rect', w: 90, h: 46, fill: '#f97316' },
  { id: 'rect_red', name: 'Chữ nhật đỏ', type: 'rect', w: 80, h: 42, fill: '#dc2626' },
  { id: 'rect_brown', name: 'Chữ nhật nâu', type: 'rect', w: 42, h: 60, fill: '#92400e' },
  { id: 'sq_yellow', name: 'Hình vuông vàng', type: 'rect', w: 56, h: 56, fill: '#facc15' }
];

export function initG6() {
  g6.currentSample = 'boat';
  g6.placedPieces = [];
  g6.done = [];
  loadCreativeStage();
}

export { initG6 as initG8 };

function loadCreativeStage() {
  makePills('g6pills', 3, 1, g6.done);

  const a = document.getElementById('g6area');
  a.innerHTML = `
    <div class="prompt-box">
      🧩 Thử thách 6: <b>Ghép mảnh phép màu</b> — Em hãy thỏa sức sáng tạo xếp các hình đã cho thành <b>con thuyền, ngôi nhà, cây thông</b> trên trang giấy trắng nhé!
    </div>

    <div class="creative-canvas-area">
      <!-- Trang giấy trắng sáng tạo -->
      <div class="creative-paper" id="paperCanvas">
        <div style="position:absolute;top:10px;left:14px;color:#cbd5e1;font-weight:800;font-size:0.9rem;pointer-events:none">
          📄 Trang giấy trắng sáng tạo (Kéo các mảnh hình vào đây)
        </div>
      </div>

      <!-- Thanh công cụ & Khay mảnh ghép -->
      <div class="creative-sidebar">
        <!-- Khung gợi ý mẫu -->
        <div class="sample-picker">
          <div style="font-weight:800;font-size:0.85rem;color:#475569">💡 Mẫu hình gợi ý (Bấm để xem mẫu):</div>
          <div class="sample-tabs">
            <button class="sample-tab-btn ${g6.currentSample === 'boat' ? 'active' : ''}" data-s="boat">⛵ Thuyền buồm</button>
            <button class="sample-tab-btn ${g6.currentSample === 'house' ? 'active' : ''}" data-s="house">🏠 Ngôi nhà</button>
            <button class="sample-tab-btn ${g6.currentSample === 'tree' ? 'active' : ''}" data-s="tree">🌲 Cây thông</button>
          </div>
          <div class="sample-preview-box" id="samplePreview">
            ${SAMPLES[g6.currentSample].svg}
          </div>
          <div style="font-size:0.8rem;color:#64748b;text-align:center" id="sampleDesc">
            ${SAMPLES[g6.currentSample].desc}
          </div>
        </div>

        <!-- Khay chứa mảnh hình -->
        <div class="brick-palette" style="padding:10px">
          <div style="font-weight:800;font-size:0.85rem;color:#1e293b;margin-bottom:8px">
            🎨 Mảnh ghép hình học (Kéo thả & Bấm để xoay):
          </div>
          <div id="piecesTray" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;min-height:90px"></div>
        </div>

        <!-- Các nút chức năng -->
        <div style="display:flex;gap:8px;justify-content:center">
          <button class="action-btn btn-green" id="btnFinishCreative" style="padding:10px 16px;font-size:0.95rem">
            ✨ Xong tác phẩm!
          </button>
          <button class="action-btn btn-orange" id="btnClearPaper" style="padding:10px 14px;font-size:0.95rem">
            🧹 Làm lại
          </button>
        </div>
      </div>
    </div>

    <div id="creativeFeedback" style="margin-top:14px"></div>
  `;

  // Chuyển tab mẫu
  document.querySelectorAll('.sample-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sample-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sKey = btn.dataset.s;
      g6.currentSample = sKey;
      document.getElementById('samplePreview').innerHTML = SAMPLES[sKey].svg;
      document.getElementById('sampleDesc').textContent = SAMPLES[sKey].desc;
      snd('click');
      setChat(`Con hãy quan sát mẫu ${SAMPLES[sKey].name} và kéo các hình vào trang giấy trắng để sáng tạo theo nhé!`);
    });
  });

  // Tạo các mảnh hình trong khay
  setupPiecesTray();

  // Nút xóa làm lại
  document.getElementById('btnClearPaper')?.addEventListener('click', () => {
    snd('click');
    setupPiecesTray();
    setChat('Đã dọn dẹp trang giấy trắng! Con thỏa sức sáng tạo ghép hình mới nhé!');
  });

  // Nút hoàn thành
  document.getElementById('btnFinishCreative')?.addEventListener('click', finishCreation);

  setChat('Trang giấy trắng kì diệu đã sẵn sàng! Con hãy kéo thả các mảnh hình tam giác, hình vuông, chữ nhật để sáng tạo thành thuyền buồm, ngôi nhà hoặc cây thông nhé!');

  renderSubNav('navRow6', {
    onBack: null,
    onNext: () => finishCreation(),
    canBack: false,
    canNext: true,
    nextLabel: 'Kiểm chứng kết quả ➡'
  });
}

function setupPiecesTray() {
  const tray = document.getElementById('piecesTray');
  const paper = document.getElementById('paperCanvas');
  if (!tray || !paper) return;

  // Xóa các mảnh cũ trên trang giấy
  paper.querySelectorAll('.drag-shape').forEach(el => el.remove());
  tray.innerHTML = '';

  PIECES_DEF.forEach(p => {
    const el = document.createElement('div');
    el.className = 'drag-shape';
    el.id = 'p-' + p.id;
    el.style.width = p.w + 'px';
    el.style.height = p.h + 'px';
    el.style.cursor = 'grab';
    el.style.userSelect = 'none';
    el.style.touchAction = 'none';
    el.style.display = 'inline-block';
    el.style.position = 'relative';
    el.dataset.rotation = '0';

    if (p.type === 'tri') {
      el.innerHTML = `<svg width="${p.w}" height="${p.h}" viewBox="0 0 ${p.w} ${p.h}">
        <polygon points="${p.pts}" fill="${p.fill}" stroke="#fff" stroke-width="2"/>
      </svg>`;
    } else {
      el.innerHTML = `<svg width="${p.w}" height="${p.h}" viewBox="0 0 ${p.w} ${p.h}">
        <rect width="${p.w}" height="${p.h}" rx="4" fill="${p.fill}" stroke="#fff" stroke-width="2"/>
      </svg>`;
    }

    // Bấm vào để xoay 45 độ
    el.addEventListener('click', (e) => {
      if (el.dataset.dragged === 'true') return;
      let rot = (Number(el.dataset.rotation) + 45) % 360;
      el.dataset.rotation = rot;
      el.style.transform = `rotate(${rot}deg)`;
      snd('click');
    });

    makeDraggableFree(el, paper);
    tray.appendChild(el);
  });
}

function makeDraggableFree(el, paper) {
  let dragging = false, ox = 0, oy = 0, startX = 0, startY = 0;

  const onDown = (e) => {
    e.preventDefault();
    dragging = true;
    el.dataset.dragged = 'false';
    const t = e.touches ? e.touches[0] : e;
    const r = el.getBoundingClientRect();
    ox = t.clientX - r.left;
    oy = t.clientY - r.top;
    startX = t.clientX;
    startY = t.clientY;

    el.style.position = 'fixed';
    el.style.zIndex = '1000';
    el.style.cursor = 'grabbing';
    moveAt(t.clientX, t.clientY);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchend', onUp);
  };

  const moveAt = (cx, cy) => {
    el.style.left = (cx - ox) + 'px';
    el.style.top = (cy - oy) + 'px';
  };

  const onMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const t = e.touches ? e.touches[0] : e;
    if (Math.abs(t.clientX - startX) > 6 || Math.abs(t.clientY - startY) > 6) {
      el.dataset.dragged = 'true';
    }
    moveAt(t.clientX, t.clientY);
  };

  const onUp = (e) => {
    if (!dragging) return;
    dragging = false;
    el.style.cursor = 'grab';

    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('mouseup', onUp);
    document.removeEventListener('touchend', onUp);

    const pr = paper.getBoundingClientRect();
    const t = e.changedTouches ? e.changedTouches[0] : e;

    // Nếu thả vào trong vùng giấy trắng
    if (t.clientX >= pr.left && t.clientX <= pr.right && t.clientY >= pr.top && t.clientY <= pr.bottom) {
      snd('step');
      paper.appendChild(el);
      el.style.position = 'absolute';
      el.style.zIndex = '10';
      const rot = el.dataset.rotation || '0';
      const leftInPaper = t.clientX - pr.left - ox;
      const topInPaper = t.clientY - pr.top - oy;
      el.style.left = Math.max(0, Math.min(paper.clientWidth - el.clientWidth, leftInPaper)) + 'px';
      el.style.top = Math.max(0, Math.min(paper.clientHeight - el.clientHeight, topInPaper)) + 'px';
      el.style.transform = `rotate(${rot}deg)`;
    }
  };

  el.addEventListener('mousedown', onDown);
  el.addEventListener('touchstart', onDown, { passive: false });
}

function finishCreation() {
  const paper = document.getElementById('paperCanvas');
  const countInPaper = paper?.querySelectorAll('.drag-shape').length || 0;

  if (countInPaper < 2) {
    setChat('Dũng sĩ hãy kéo ít nhất 2 hoặc 3 mảnh hình vào trang giấy trắng để tạo thành tác phẩm trước khi hoàn thành nhé!');
    return;
  }

  snd('win');
  confetti(60);
  g6.done.push(1);

  const fb = document.getElementById('creativeFeedback');
  if (fb) {
    fb.innerHTML = `
      <div class="prompt-box" style="background:#ecfdf5;border-color:#10b981">
        <div style="font-weight:800;font-size:1.15rem;color:#065f46;margin-bottom:8px">
          🎉 Tác phẩm tuyệt đẹp! Giờ Thần Kim Quy hỏi con:
        </div>
        <div style="font-size:1.05rem;color:#1e293b;font-weight:700">
          ❓ Em đã dùng những hình học nào để sáng tạo nên bức tranh của mình?
        </div>
        <div class="reason-grid" id="creativeQOpts" style="margin-top:12px"></div>
      </div>
    `;

    const qOpts = [
      { t: 'Hình tam giác, hình chữ nhật và hình vuông', good: true },
      { t: 'Chỉ dùng hình tròn tròn xoe', good: false },
      { t: 'Không dùng hình học nào cả', good: false }
    ];

    const qg = document.getElementById('creativeQOpts');
    qOpts.forEach(o => {
      const b = document.createElement('button');
      b.className = 'reason-btn';
      b.textContent = o.t;
      b.addEventListener('click', () => {
        if (o.good) {
          b.classList.add('correct');
          snd('correct');
          confetti(50);
          qg.querySelectorAll('.reason-btn').forEach(x => x.disabled = true);
          setChat('Chính xác! Con đã vận dụng rất khéo léo các hình tam giác, hình chữ nhật và hình vuông để tạo ra tác phẩm sáng tạo của riêng mình!', true, () => {
            setTimeout(() => {
              showResult(6, 4, 'Con đã hoàn thành bức tranh hình học sáng tạo xuất sắc! Thần Rùa Kim Quy rất tự hào!');
            }, 1200);
          });
        } else {
          b.classList.add('wrong');
          snd('wrong');
          setTimeout(() => b.classList.remove('wrong'), 500);
          setChat('Con hãy nhìn lại các mảnh hình trên trang giấy trắng nhé: đó là những hình gì có cạnh thẳng?');
        }
      });
      qg.appendChild(b);
    });
  }

  setChat('Tác phẩm thật tuyệt vời! Thần Kim Quy hỏi con: Con đã dùng những hình học nào để ghép nên tác phẩm này?');
}
