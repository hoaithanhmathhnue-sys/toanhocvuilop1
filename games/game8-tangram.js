/* ================================================================
   GAME 8: XẾP HÌNH TANGRAM
   Kéo thả các mảnh hình vào khung mẫu
   Rèn luyện nhận dạng hình phẳng & tư duy không gian
   ================================================================ */
import { setChat, snd, makePills, showResult, confetti } from '../main.js';

/* ============ PUZZLE DATA ============ */
const PUZZLES = [
  {
    name: 'Ngôi nhà',
    icon: '🏠',
    // Target outline (SVG path)
    outline: 'M150,30 L270,120 L270,270 L30,270 L30,120 Z',
    outW: 300, outH: 300,
    pieces: [
      { id: 'p1', shape: 'polygon', points: '0,0 120,0 60,-50', color: '#ef4444', label: 'Mái nhà', tx: 90, ty: 80, sx: 20, sy: 320 },
      { id: 'p2', shape: 'rect', w: 120, h: 75, color: '#3b82f6', label: 'Tường trái', tx: 30, ty: 120, sx: 180, sy: 320 },
      { id: 'p3', shape: 'rect', w: 120, h: 75, color: '#f59e0b', label: 'Tường phải', tx: 150, ty: 120, sx: 40, sy: 410 },
      { id: 'p4', shape: 'rect', w: 120, h: 75, color: '#22c55e', label: 'Sàn trái', tx: 30, ty: 195, sx: 200, sy: 410 },
      { id: 'p5', shape: 'rect', w: 120, h: 75, color: '#a855f7', label: 'Sàn phải', tx: 150, ty: 195, sx: 110, sy: 490 },
    ]
  },
  {
    name: 'Con thuyền',
    icon: '⛵',
    outline: 'M30,180 L150,30 L150,180 L270,180 L220,270 L80,270 Z',
    outW: 300, outH: 300,
    pieces: [
      { id: 'p1', shape: 'polygon', points: '0,150 120,0 120,150', color: '#3b82f6', label: 'Cánh buồm', tx: 30, ty: 30, sx: 20, sy: 320 },
      { id: 'p2', shape: 'rect', w: 120, h: 90, color: '#f59e0b', label: 'Thân thuyền trái', tx: 30, ty: 180, sx: 180, sy: 320 },
      { id: 'p3', shape: 'rect', w: 120, h: 90, color: '#ef4444', label: 'Thân thuyền phải', tx: 150, ty: 180, sx: 40, sy: 420 },
      { id: 'p4', shape: 'polygon', points: '0,0 50,90 -50,90', color: '#22c55e', label: 'Mũi thuyền', tx: 100, ty: 180, sx: 220, sy: 420 },
    ]
  },
  {
    name: 'Cây thông',
    icon: '🌲',
    outline: 'M150,20 L250,140 L200,140 L270,260 L30,260 L100,140 L50,140 Z',
    outW: 300, outH: 280,
    pieces: [
      { id: 'p1', shape: 'polygon', points: '0,-60 100,60 -100,60', color: '#22c55e', label: 'Ngọn cây', tx: 150, ty: 80, sx: 20, sy: 310 },
      { id: 'p2', shape: 'polygon', points: '0,-60 120,60 -120,60', color: '#16a34a', label: 'Thân cây trên', tx: 150, ty: 200, sx: 180, sy: 310 },
      { id: 'p3', shape: 'rect', w: 50, h: 60, color: '#92400e', label: 'Gốc cây', tx: 125, ty: 200, sx: 100, sy: 410 },
    ]
  }
];

let g8 = { round: 0, placed: 0, totalPieces: 0, puzzleOrder: [] };

function shuffle(a) { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

export function initG8() {
  g8.round = 0;
  g8.puzzleOrder = shuffle([0, 1, 2]);
  loadPuzzle(0);
}

function loadPuzzle(idx) {
  g8.round = idx;
  g8.placed = 0;
  const puz = PUZZLES[g8.puzzleOrder[idx]];
  g8.totalPieces = puz.pieces.length;
  makePills('g8pills', 3, idx + 1, []);

  const a = document.getElementById('g8area');
  a.innerHTML = `
    <div class="prompt-box">🧩 Hãy kéo các mảnh hình vào đúng vị trí để ghép thành <b>${puz.name} ${puz.icon}</b>!</div>
    <div class="tangram-container" id="g8container">
      <div class="tangram-board" id="g8board">
        <svg class="tangram-outline" viewBox="0 0 ${puz.outW} ${puz.outH}" preserveAspectRatio="xMidYMid meet">
          <path d="${puz.outline}" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="8,4"/>
        </svg>
        <div class="tangram-slots" id="g8slots"></div>
      </div>
      <div class="tangram-pieces" id="g8pieces"></div>
    </div>
    <div id="g8feedback" style="margin-top:12px"></div>
  `;

  const board = document.getElementById('g8board');
  const slotsEl = document.getElementById('g8slots');
  const piecesEl = document.getElementById('g8pieces');

  // Tạo các slot (vị trí đích)
  puz.pieces.forEach(p => {
    const slot = document.createElement('div');
    slot.className = 'tangram-slot';
    slot.dataset.id = p.id;
    slot.style.left = p.tx + 'px';
    slot.style.top = p.ty + 'px';
    if (p.shape === 'rect') {
      slot.style.width = p.w + 'px';
      slot.style.height = p.h + 'px';
      slot.style.borderRadius = '6px';
    } else {
      slot.style.width = '0';
      slot.style.height = '0';
    }
    slot.style.border = `2px dashed ${p.color}40`;
    slot.style.background = `${p.color}10`;
    slotsEl.appendChild(slot);
  });

  // Tạo các mảnh kéo thả
  const shuffledPieces = shuffle([...puz.pieces]);
  shuffledPieces.forEach((p, i) => {
    const piece = document.createElement('div');
    piece.className = 'tangram-piece';
    piece.dataset.id = p.id;
    piece.draggable = true;
    piece.style.background = p.color;
    piece.style.color = '#fff';
    piece.style.left = (10 + (i % 3) * 110) + 'px';
    piece.style.top = (10 + Math.floor(i / 3) * 80) + 'px';

    if (p.shape === 'rect') {
      piece.style.width = Math.min(p.w, 100) + 'px';
      piece.style.height = Math.min(p.h, 60) + 'px';
      piece.style.borderRadius = '8px';
    } else {
      piece.style.width = '80px';
      piece.style.height = '60px';
      piece.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
      piece.style.borderRadius = '0';
    }

    piece.innerHTML = `<span style="font-size:0.7rem;font-weight:700;text-shadow:0 1px 2px rgba(0,0,0,0.3)">${p.label}</span>`;

    // Touch & mouse drag
    let startX, startY, origLeft, origTop;

    const onStart = (e) => {
      e.preventDefault();
      piece.classList.add('dragging');
      const rect = piece.getBoundingClientRect();
      const touch = e.touches ? e.touches[0] : e;
      startX = touch.clientX - rect.left;
      startY = touch.clientY - rect.top;
      origLeft = piece.offsetLeft;
      origTop = piece.offsetTop;

      // Move to board coordinate system
      const boardRect = board.getBoundingClientRect();
      piece.style.position = 'fixed';
      piece.style.left = (touch.clientX - startX) + 'px';
      piece.style.top = (touch.clientY - startY) + 'px';
      piece.style.zIndex = '100';
    };

    const onMove = (e) => {
      if (!piece.classList.contains('dragging')) return;
      e.preventDefault();
      const touch = e.touches ? e.touches[0] : e;
      piece.style.left = (touch.clientX - startX) + 'px';
      piece.style.top = (touch.clientY - startY) + 'px';
    };

    const onEnd = (e) => {
      if (!piece.classList.contains('dragging')) return;
      piece.classList.remove('dragging');
      piece.style.zIndex = '';

      // Kiểm tra xem có drop vào đúng slot không
      const pieceRect = piece.getBoundingClientRect();
      const pieceCX = pieceRect.left + pieceRect.width / 2;
      const pieceCY = pieceRect.top + pieceRect.height / 2;

      const targetSlot = document.querySelector(`.tangram-slot[data-id="${p.id}"]`);
      if (targetSlot) {
        const slotRect = targetSlot.getBoundingClientRect();
        const slotCX = slotRect.left + slotRect.width / 2;
        const slotCY = slotRect.top + slotRect.height / 2;
        const dist = Math.sqrt((pieceCX - slotCX) ** 2 + (pieceCY - slotCY) ** 2);

        if (dist < 60) {
          // Snap!
          snd('correct');
          piece.classList.add('snapped');
          piece.style.position = 'absolute';
          piece.style.left = targetSlot.style.left;
          piece.style.top = targetSlot.style.top;
          if (p.shape === 'rect') {
            piece.style.width = p.w + 'px';
            piece.style.height = p.h + 'px';
          }
          piece.style.pointerEvents = 'none';
          piece.style.opacity = '0.95';
          piece.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
          targetSlot.style.borderColor = 'transparent';

          // Move piece into board
          board.appendChild(piece);

          g8.placed++;
          if (g8.placed === g8.totalPieces) {
            setTimeout(() => puzzleComplete(), 600);
          } else {
            setChat(`Đúng rồi! Mảnh "${p.label}" đã vào đúng chỗ! Còn ${g8.totalPieces - g8.placed} mảnh nữa, con tiếp tục nhé!`);
          }
          return;
        }
      }

      // Không đúng — trả về vị trí ban đầu
      snd('wrong');
      piece.style.position = 'relative';
      piece.style.left = '';
      piece.style.top = '';
      setChat('Chưa đúng vị trí! Con thử nhìn hình dạng và màu sắc của mảnh này rồi kéo vào chỗ phù hợp nhé!');
    };

    piece.addEventListener('mousedown', onStart);
    piece.addEventListener('touchstart', onStart, { passive: false });
    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchend', onEnd);

    piecesEl.appendChild(piece);
  });

  setChat(`Đây là hình ${puz.name}! Con hãy kéo từng mảnh hình vào đúng vị trí để ghép thành ${puz.name} nhé!`);
}

function puzzleComplete() {
  snd('win');
  confetti(60);
  const puz = PUZZLES[g8.puzzleOrder[g8.round]];

  setChat(`Tuyệt vời! Con đã ghép xong ${puz.name}! Con giỏi quá!`, true, () => {
    // Hỏi lý do
    const fb = document.getElementById('g8feedback');
    fb.innerHTML = `
      <div class="prompt-box">❓ Con đã dùng những hình gì để ghép ${puz.name}?</div>
      <div class="reason-grid" id="g8reasons"></div>
    `;

    const opts = shuffle([
      { t: 'Hình tam giác và hình chữ nhật', good: true },
      { t: 'Chỉ có hình tròn', good: false },
      { t: 'Không có hình nào cả', good: false }
    ]);

    const rs = document.getElementById('g8reasons');
    opts.forEach(o => {
      const b = document.createElement('button');
      b.className = 'reason-btn';
      b.textContent = o.t;
      b.addEventListener('click', () => {
        if (o.good) {
          b.classList.add('correct');
          snd('correct');
          rs.querySelectorAll('.reason-btn').forEach(x => { x.disabled = true; });
          setChat(`Chính xác! Con đã dùng các hình tam giác và hình chữ nhật để ghép thành ${puz.name}. Con giỏi quá!`, true, () => {
            setTimeout(() => {
              if (g8.round < 2) {
                loadPuzzle(g8.round + 1);
              } else {
                showResult(8, 4, 'Con đã ghép xong tất cả các hình! Cô Cú thông thái rất tự hào!');
              }
            }, 800);
          });
        } else {
          b.classList.add('wrong');
          snd('wrong');
          setTimeout(() => b.classList.remove('wrong'), 600);
          setChat('Con thử nhìn lại các mảnh ghép nhé: chúng có hình dạng gì? Tròn hay thẳng cạnh? Hãy chọn lại lần nữa xem nào!');
        }
      });
      rs.appendChild(b);
    });
  });
}
