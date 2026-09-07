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
function loadTowerTask() {
  const a = document.getElementById('g7area');

  a.innerHTML = `
    <div class="prompt-box">
      🧱 <b>Bài 1:</b> Cho các viên gạch màu nâu và xám, em hãy xếp thành hình toà tháp 5 tầng (lưu ý dùng hết số gạch để xếp).
    </div>

    <div class="tower-game-wrap">
      <!-- Toà tháp 5 tầng -->
      <div class="tower-build-zone">
        <div style="font-weight:800;font-size:0.9rem;color:#b45309;margin-bottom:6px">
          🏰 Toà tháp 5 tầng (Kéo gạch vào các tầng)
        </div>

        <!-- Tầng 1: 1 ô (nâu) -->
        <div class="tower-layer" data-layer="1">
          <div class="tower-slot" id="slot-1-1" data-slot="1-1">1</div>
        </div>

        <!-- Tầng 2: 2 ô (xám) -->
        <div class="tower-layer" data-layer="2">
          <div class="tower-slot" id="slot-2-1" data-slot="2-1">2</div>
          <div class="tower-slot" id="slot-2-2" data-slot="2-2">2</div>
        </div>

        <!-- Tầng 3: 3 ô (nâu) -->
        <div class="tower-layer" data-layer="3">
          <div class="tower-slot" id="slot-3-1" data-slot="3-1">3</div>
          <div class="tower-slot" id="slot-3-2" data-slot="3-2">3</div>
          <div class="tower-slot" id="slot-3-3" data-slot="3-3">3</div>
        </div>

        <!-- Tầng 4: 4 ô (xám) -->
        <div class="tower-layer" data-layer="4">
          <div class="tower-slot" id="slot-4-1" data-slot="4-1">4</div>
          <div class="tower-slot" id="slot-4-2" data-slot="4-2">4</div>
          <div class="tower-slot" id="slot-4-3" data-slot="4-3">4</div>
          <div class="tower-slot" id="slot-4-4" data-slot="4-4">4</div>
        </div>

        <!-- Tầng 5: 5 ô (nâu) -->
        <div class="tower-layer" data-layer="5">
          <div class="tower-slot" id="slot-5-1" data-slot="5-1">5</div>
          <div class="tower-slot" id="slot-5-2" data-slot="5-2">5</div>
          <div class="tower-slot" id="slot-5-3" data-slot="5-3">5</div>
          <div class="tower-slot" id="slot-5-4" data-slot="5-4">5</div>
          <div class="tower-slot" id="slot-5-5" data-slot="5-5">5</div>
        </div>
      </div>

      <!-- Khay gạch rời & Điền số -->
      <div class="brick-tray-zone">
        <div class="brick-palette">
          <div style="font-weight:800;font-size:0.85rem;color:#334155;margin-bottom:8px">
            🧱 Kho gạch rời (Bấm hoặc Kéo để xếp vào tháp):
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-bottom:8px" id="brownBricksWrap">
            <!-- 9 viên nâu -->
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center" id="grayBricksWrap">
            <!-- 6 viên xám -->
          </div>
          <div style="text-align:center;margin-top:8px">
            <button class="action-btn btn-blue" id="btnAutoStack" style="padding:6px 14px;font-size:0.85rem">
              ⚡ Xếp nhanh mẫu tháp
            </button>
          </div>
        </div>

        <!-- Ô điền số theo đúng docx -->
        <div class="brick-inputs-box">
          <div style="margin-bottom:8px">❓ Điền số thích hợp vào ô trống:</div>
          <div style="line-height:2">
            Em đã dùng <input type="number" id="inputBrown" class="number-input-field" min="0" max="20" placeholder="?"> viên gạch màu nâu<br>
            và <input type="number" id="inputGray" class="number-input-field" min="0" max="20" placeholder="?"> viên gạch màu xám để xếp toà tháp.
          </div>
          <div style="margin-top:12px;text-align:center">
            <button class="action-btn btn-green" id="btnCheckTower" style="padding:8px 20px;font-size:1rem">
              ✅ Kiểm tra kết quả
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="towerFeedback" style="margin-top:10px"></div>
  `;

  // Sinh 9 viên gạch nâu và 6 viên gạch xám
  const brownWrap = document.getElementById('brownBricksWrap');
  const grayWrap = document.getElementById('grayBricksWrap');

  for (let i = 1; i <= 9; i++) {
    const img = document.createElement('img');
    img.src = '/assets/brick-brown.jpg';
    img.className = 'brick-item';
    img.id = 'brick-brown-' + i;
    img.title = 'Gạch nâu ' + i;
    img.dataset.color = 'brown';
    img.addEventListener('click', () => fillFirstAvailableSlot('brown', img));
    brownWrap?.appendChild(img);
  }

  for (let i = 1; i <= 6; i++) {
    const img = document.createElement('img');
    img.src = '/assets/brick-gray.jpg';
    img.className = 'brick-item';
    img.id = 'brick-gray-' + i;
    img.title = 'Gạch xám ' + i;
    img.dataset.color = 'gray';
    img.addEventListener('click', () => fillFirstAvailableSlot('gray', img));
    grayWrap?.appendChild(img);
  }

  // Nút xếp nhanh mẫu tháp
  document.getElementById('btnAutoStack')?.addEventListener('click', () => {
    snd('step');
    autoStackTower();
  });

  // Kiểm tra đáp án điền số (9 viên nâu và 6 viên xám)
  document.getElementById('btnCheckTower')?.addEventListener('click', checkTowerAnswer);

  setChat('Bài 1: Cho các viên gạch màu nâu và xám, em hãy xếp thành hình toà tháp 5 tầng và đếm xem đã dùng bao nhiêu viên gạch mỗi loại nhé!');

  renderSubNav('navRow7', {
    onBack: () => loadPart(2),
    onNext: () => loadPart(4),
    canBack: true,
    canNext: true,
    nextLabel: 'Sang Bài 2 (Đếm lâu đài) ➡'
  });
}

function fillFirstAvailableSlot(color, brickEl) {
  // Tìm slot trống theo thứ tự tầng: Tầng 1 (nâu), Tầng 2 (xám), Tầng 3 (nâu), Tầng 4 (xám), Tầng 5 (nâu)
  const layerTargetColor = { 1: 'brown', 2: 'gray', 3: 'brown', 4: 'gray', 5: 'brown' };

  // Tìm slot ưu tiên khớp màu
  const slots = document.querySelectorAll('.tower-slot:not(.filled)');
  let chosen = null;
  for (let s of slots) {
    const layer = s.closest('.tower-layer')?.dataset.layer;
    if (layerTargetColor[layer] === color) {
      chosen = s;
      break;
    }
  }
  if (!chosen && slots.length > 0) chosen = slots[0];

  if (chosen) {
    snd('step');
    chosen.classList.add('filled');
    chosen.style.padding = '0';
    chosen.innerHTML = `<img src="${brickEl.src}" style="width:100%;height:100%;object-fit:cover;border-radius:4px">`;
    brickEl.style.opacity = '0.2';
    brickEl.style.pointerEvents = 'none';

    // Đếm số lượng đã xếp
    checkTowerProgress();
  }
}

function autoStackTower() {
  const layerColors = {
    1: ['brown'],
    2: ['gray', 'gray'],
    3: ['brown', 'brown', 'brown'],
    4: ['gray', 'gray', 'gray', 'gray'],
    5: ['brown', 'brown', 'brown', 'brown', 'brown']
  };

  for (let l = 1; l <= 5; l++) {
    const colors = layerColors[l];
    colors.forEach((c, idx) => {
      const slot = document.getElementById(`slot-${l}-${idx + 1}`);
      if (slot) {
        slot.classList.add('filled');
        slot.style.padding = '0';
        slot.innerHTML = `<img src="/assets/brick-${c}.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:4px">`;
      }
    });
  }

  document.querySelectorAll('.brick-item').forEach(b => {
    b.style.opacity = '0.2';
    b.style.pointerEvents = 'none';
  });

  setChat('Toà tháp 5 tầng đã được xếp hoàn thành! Giờ con hãy đếm số viên gạch màu nâu và màu xám rồi điền vào ô trống nhé!');
}

function checkTowerProgress() {
  const filled = document.querySelectorAll('.tower-slot.filled').length;
  if (filled === 15) {
    snd('correct');
    setChat('Tuyệt vời! Con đã xếp đủ 5 tầng toà tháp với 15 viên gạch! Giờ hãy đếm số viên gạch nâu và xám rồi điền vào ô trống nhé!');
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
        <div style="background:#d1fae5;border-radius:14px;padding:14px;font-weight:800;color:#065f46;text-align:center">
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
    if (bVal !== 9 && gVal !== 6) hint = 'Con đếm lại cả hai màu nhé: Tầng 1, 3, 5 là gạch nâu (1 + 3 + 5), Tầng 2, 4 là gạch xám (2 + 4)!';
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
