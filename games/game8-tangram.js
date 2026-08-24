/* ================================================================
   GAME 8: XẾP HÌNH TANGRAM (SVG-based)
   Kéo thả các mảnh hình vào khung mẫu — khít pixel-perfect
   ================================================================ */
import { setChat, snd, makePills, showResult, confetti } from '../main.js';

/* ============ PUZZLE DATA ============ */
const PUZZLES = [
  {
    name: 'Ngôi nhà', icon: '🏠', vw: 300, vh: 310,
    pieces: [
      { id:'roof', shape:'polygon', pts:'150,10 290,140 10,140', cx:150, cy:97, color:'#ef4444', label:'Mái nhà' },
      { id:'wl',   shape:'rect', x:10, y:140, w:140, h:85,      cx:80,  cy:182, color:'#3b82f6', label:'Tường trái' },
      { id:'wr',   shape:'rect', x:150, y:140, w:140, h:85,     cx:220, cy:182, color:'#f59e0b', label:'Tường phải' },
      { id:'fl',   shape:'rect', x:10, y:225, w:140, h:75,      cx:80,  cy:262, color:'#22c55e', label:'Sàn trái' },
      { id:'fr',   shape:'rect', x:150, y:225, w:140, h:75,     cx:220, cy:262, color:'#a855f7', label:'Sàn phải' },
    ]
  },
  {
    name: 'Con thuyền', icon: '⛵', vw: 300, vh: 260,
    pieces: [
      { id:'sail', shape:'polygon', pts:'140,10 140,170 20,170', cx:100, cy:117, color:'#3b82f6', label:'Cánh buồm' },
      { id:'hl',   shape:'rect', x:20, y:170, w:130, h:80,      cx:85,  cy:210, color:'#f59e0b', label:'Thân trái' },
      { id:'hr',   shape:'rect', x:150, y:170, w:130, h:80,     cx:215, cy:210, color:'#ef4444', label:'Thân phải' },
    ]
  },
  {
    name: 'Cây thông', icon: '🌲', vw: 260, vh: 300,
    pieces: [
      { id:'crown', shape:'polygon', pts:'130,10 230,150 30,150', cx:130, cy:103, color:'#22c55e', label:'Tán cây' },
      { id:'body',  shape:'rect', x:45, y:150, w:170, h:70,      cx:130, cy:185, color:'#16a34a', label:'Thân cây' },
      { id:'trunk', shape:'rect', x:85, y:220, w:90, h:70,       cx:130, cy:255, color:'#92400e', label:'Gốc cây' },
    ]
  }
];

let g8 = { round:0, placed:0, total:0, order:[], drag:null, cleanups:[] };

function shuffle(a) {
  const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b;
}

/* Tạo SVG element cho 1 piece */
function makeSvgEl(p, fill, stroke, sw, dash, opacity) {
  const ns = 'http://www.w3.org/2000/svg';
  let el;
  if (p.shape === 'polygon') {
    el = document.createElementNS(ns, 'polygon');
    el.setAttribute('points', p.pts);
  } else {
    el = document.createElementNS(ns, 'rect');
    el.setAttribute('x', p.x); el.setAttribute('y', p.y);
    el.setAttribute('width', p.w); el.setAttribute('height', p.h);
    el.setAttribute('rx', '6');
  }
  el.setAttribute('fill', fill);
  el.setAttribute('stroke', stroke);
  el.setAttribute('stroke-width', sw);
  if (dash) el.setAttribute('stroke-dasharray', dash);
  el.setAttribute('opacity', opacity);
  el.setAttribute('stroke-linejoin', 'round');
  return el;
}

/* Tạo mini-SVG preview cho mảnh kéo */
function previewSvg(p) {
  let vb, inner;
  if (p.shape === 'polygon') {
    const pts = p.pts.split(' ').map(s => { const [x,y]=s.split(',').map(Number); return {x,y}; });
    const x0 = Math.min(...pts.map(q=>q.x)), y0 = Math.min(...pts.map(q=>q.y));
    const x1 = Math.max(...pts.map(q=>q.x)), y1 = Math.max(...pts.map(q=>q.y));
    vb = `${x0-6} ${y0-6} ${x1-x0+12} ${y1-y0+12}`;
    inner = `<polygon points="${p.pts}" fill="${p.color}" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>`;
  } else {
    vb = `${p.x-4} ${p.y-4} ${p.w+8} ${p.h+8}`;
    inner = `<rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="6" fill="${p.color}" stroke="#fff" stroke-width="4"/>`;
  }
  return `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%">${inner}</svg>`;
}

export function initG8() {
  // Xóa event listeners cũ
  g8.cleanups.forEach(fn => fn());
  g8.cleanups = [];
  g8.round = 0;
  g8.order = shuffle([0,1,2]);
  loadPuzzle(0);
}

function loadPuzzle(idx) {
  // Cleanup cũ
  g8.cleanups.forEach(fn => fn());
  g8.cleanups = [];
  g8.round = idx;
  g8.placed = 0;
  g8.drag = null;
  const puz = PUZZLES[g8.order[idx]];
  g8.total = puz.pieces.length;
  makePills('g7pills', 3, idx+1, []);

  const area = document.getElementById('g7area');
  const shuffled = shuffle([...puz.pieces]);

  /* Build tray HTML */
  let trayHtml = '<div class="tray-title">🧩 Mảnh ghép</div>';
  shuffled.forEach(p => {
    trayHtml += `<div class="tg-piece" data-id="${p.id}">${previewSvg(p)}<span class="tg-lbl">${p.label}</span></div>`;
  });

  area.innerHTML = `
    <div class="prompt-box">🧩 Hãy kéo các mảnh hình vào đúng vị trí để ghép thành <b>${puz.name} ${puz.icon}</b>!</div>
    <div class="tg-layout">
      <div class="tg-board" id="g8board">
        <svg id="g8svg" viewBox="0 0 ${puz.vw} ${puz.vh}" preserveAspectRatio="xMidYMid meet"></svg>
      </div>
      <div class="tg-tray" id="g8tray">${trayHtml}</div>
    </div>
    <div id="g8feedback" style="margin-top:12px"></div>
  `;

  /* Build board SVG — slots */
  const svg = document.getElementById('g8svg');
  puz.pieces.forEach(p => {
    // Hint fill (very faint)
    const hint = makeSvgEl(p, p.color, 'none', 0, null, '0.1');
    hint.id = 'hint-'+p.id;
    svg.appendChild(hint);
    // Dashed border
    const border = makeSvgEl(p, 'none', p.color, 2.5, '8,5', '0.45');
    border.id = 'border-'+p.id;
    svg.appendChild(border);
    // Snapped fill (hidden)
    const done = makeSvgEl(p, p.color, '#fff', 2, null, '0.95');
    done.id = 'done-'+p.id;
    done.style.display = 'none';
    svg.appendChild(done);
  });

  /* Drag & Drop */
  const onMove = (e) => {
    if (!g8.drag) return;
    e.preventDefault();
    const t = e.touches ? e.touches[0] : e;
    g8.drag.el.style.left = (t.clientX - g8.drag.ox) + 'px';
    g8.drag.el.style.top  = (t.clientY - g8.drag.oy) + 'px';
  };

  const onEnd = (e) => {
    if (!g8.drag) return;
    const { el, piece } = g8.drag;
    el.classList.remove('tg-dragging');

    const t = e.changedTouches ? e.changedTouches[0] : e;
    const svgEl = document.getElementById('g8svg');
    const sr = svgEl.getBoundingClientRect();

    // Chuyển tọa độ screen → SVG
    const svgX = (t.clientX - sr.left) / sr.width * puz.vw;
    const svgY = (t.clientY - sr.top) / sr.height * puz.vh;
    const dist = Math.sqrt((svgX - piece.cx)**2 + (svgY - piece.cy)**2);

    if (dist < 55 && sr.left < t.clientX && t.clientX < sr.right) {
      // Snap!
      snd('correct');
      el.style.display = 'none';
      const h = document.getElementById('hint-'+piece.id);
      const b = document.getElementById('border-'+piece.id);
      const d = document.getElementById('done-'+piece.id);
      if (h) h.style.display = 'none';
      if (b) b.style.display = 'none';
      if (d) d.style.display = '';
      g8.placed++;
      if (g8.placed === g8.total) {
        setTimeout(() => puzzleComplete(), 600);
      } else {
        setChat(`Đúng rồi! Mảnh "${piece.label}" đã vào đúng chỗ! Còn ${g8.total - g8.placed} mảnh nữa!`);
      }
    } else {
      snd('wrong');
      el.style.position = '';
      el.style.left = '';
      el.style.top = '';
      el.style.zIndex = '';
      setChat('Chưa đúng vị trí! Con thử nhìn hình dạng và màu sắc rồi kéo vào chỗ phù hợp nhé!');
    }
    g8.drag = null;
  };

  document.addEventListener('mousemove', onMove);
  document.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('mouseup', onEnd);
  document.addEventListener('touchend', onEnd);
  g8.cleanups.push(() => {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchend', onEnd);
  });

  /* Attach drag start to each piece */
  document.querySelectorAll('.tg-piece').forEach(el => {
    const pid = el.dataset.id;
    const piece = puz.pieces.find(p => p.id === pid);
    const start = (e) => {
      e.preventDefault();
      const t = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect();
      g8.drag = { el, piece, ox: t.clientX - r.left, oy: t.clientY - r.top };
      el.classList.add('tg-dragging');
      el.style.position = 'fixed';
      el.style.zIndex = '1000';
      el.style.left = (t.clientX - g8.drag.ox) + 'px';
      el.style.top  = (t.clientY - g8.drag.oy) + 'px';
    };
    el.addEventListener('mousedown', start);
    el.addEventListener('touchstart', start, { passive: false });
  });

  setChat(`Đây là hình ${puz.name}! Con hãy kéo từng mảnh hình vào đúng vị trí nhé!`);
}

function puzzleComplete() {
  snd('win');
  confetti(60);
  const puz = PUZZLES[g8.order[g8.round]];

  setChat(`Tuyệt vời! Con đã ghép xong ${puz.name}! Con giỏi quá!`, true, () => {
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
              if (g8.round < 2) loadPuzzle(g8.round + 1);
              else showResult(7, 4, 'Con đã ghép xong tất cả các hình! Cô Cú thông thái rất tự hào!');
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
