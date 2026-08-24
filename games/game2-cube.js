/* ================================================================
   GAME 2: LÂU ĐÀI KHỐI 3D
   Khối lập phương & hộp chữ nhật — CSS 3D thật sự
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

let g2 = { round: 1, done: [] };

// CSS 3D cube (6 mặt vuông bằng nhau)
function render3DCube(size, label, colors) {
  const h = size / 2;
  const c = colors || { front: '#ef4444', back: '#a855f7', top: '#3b82f6', bottom: '#f97316', right: '#facc15', left: '#ec4899' };
  return `
    <div style="perspective:600px;width:${size+40}px;height:${size+40}px;margin:0 auto">
      <div class="cube3d" style="width:${size}px;height:${size}px;transform-style:preserve-3d;transform:rotateX(-20deg) rotateY(30deg);margin:${h/2}px auto;position:relative">
        <div class="cube-face" style="transform:translateZ(${h}px);background:${c.front};width:${size}px;height:${size}px">
          <span>🌟</span><small>Trước</small>
        </div>
        <div class="cube-face" style="transform:rotateY(180deg) translateZ(${h}px);background:${c.back};width:${size}px;height:${size}px">
          <span>🎈</span><small>Sau</small>
        </div>
        <div class="cube-face" style="transform:rotateX(90deg) translateZ(${h}px);background:${c.top};width:${size}px;height:${size}px">
          <span>☀️</span><small>Trên</small>
        </div>
        <div class="cube-face" style="transform:rotateX(-90deg) translateZ(${h}px);background:${c.bottom};width:${size}px;height:${size}px">
          <span>🍂</span><small>Dưới</small>
        </div>
        <div class="cube-face" style="transform:rotateY(90deg) translateZ(${h}px);background:${c.right};width:${size}px;height:${size}px">
          <span>⭐</span><small>Phải</small>
        </div>
        <div class="cube-face" style="transform:rotateY(-90deg) translateZ(${h}px);background:${c.left};width:${size}px;height:${size}px">
          <span>🌸</span><small>Trái</small>
        </div>
      </div>
      <div style="text-align:center;font-weight:800;color:#6d4a00;margin-top:8px;font-size:1.1rem">${label}</div>
    </div>
  `;
}

// CSS 3D hộp chữ nhật (dài hơn, mặt chữ nhật)
function render3DBox(sizeW, sizeH, sizeD, label) {
  const hw = sizeW / 2, hh = sizeH / 2, hd = sizeD / 2;
  return `
    <div style="perspective:600px;width:${sizeW+60}px;height:${sizeH+60}px;margin:0 auto">
      <div class="cube3d" style="width:${sizeW}px;height:${sizeH}px;transform-style:preserve-3d;transform:rotateX(-20deg) rotateY(30deg);margin:${hh/2}px auto;position:relative">
        <div class="cube-face box-face" style="transform:translateZ(${hd}px);width:${sizeW}px;height:${sizeH}px;background:#ffc46b">
          <span>📦</span><small>Trước</small>
        </div>
        <div class="cube-face box-face" style="transform:rotateY(180deg) translateZ(${hd}px);width:${sizeW}px;height:${sizeH}px;background:#e89b3c">
          <span>📦</span><small>Sau</small>
        </div>
        <div class="cube-face box-face" style="transform:rotateX(90deg) translateZ(${hh}px);width:${sizeW}px;height:${sizeD}px;background:#ffd999;margin-top:${(sizeH-sizeD)/2}px">
          <span>📦</span><small>Trên</small>
        </div>
        <div class="cube-face box-face" style="transform:rotateX(-90deg) translateZ(${hh}px);width:${sizeW}px;height:${sizeD}px;background:#d4860a;margin-top:${(sizeH-sizeD)/2}px">
          <small>Dưới</small>
        </div>
        <div class="cube-face box-face" style="transform:rotateY(90deg) translateZ(${hw}px);width:${sizeD}px;height:${sizeH}px;background:#ffb347;margin-left:${(sizeW-sizeD)/2}px">
          <small>Phải</small>
        </div>
        <div class="cube-face box-face" style="transform:rotateY(-90deg) translateZ(${hw}px);width:${sizeD}px;height:${sizeH}px;background:#e09530;margin-left:${(sizeW-sizeD)/2}px">
          <small>Trái</small>
        </div>
      </div>
      <div style="text-align:center;font-weight:800;color:#6d4a00;margin-top:8px;font-size:1.1rem">${label}</div>
    </div>
  `;
}

export function initG2() {
  g2.round = 1;
  g2.done = [];
  loadRound(1);
}

function loadRound(r) {
  makePills('g2pills', 3, r, g2.done);

  const a = document.getElementById('g2area');

  // Alternate left/right positions
  const cubeFirst = r % 2 === 1;

  a.innerHTML = `
    <div class="prompt-box">🧊 Hãy chọn <b>KHỐI LẬP PHƯƠNG</b> nhé con! (Khối có 6 mặt đều là hình vuông)</div>
    <div class="blocks-stage" id="g2stage">
      <div class="block3d" id="b-left" style="cursor:pointer">
        ${cubeFirst ? render3DCube(110, 'Khối A') : render3DBox(150, 90, 70, 'Khối A')}
      </div>
      <div class="block3d" id="b-right" style="cursor:pointer">
        ${cubeFirst ? render3DBox(150, 90, 70, 'Khối B') : render3DCube(110, 'Khối B')}
      </div>
    </div>
    <div class="note-sm">💡 Khối lập phương: 6 mặt đều là hình vuông bằng nhau</div>
  `;

  document.getElementById('b-left').addEventListener('click', () => pick('left', cubeFirst ? 'cube' : 'box'));
  document.getElementById('b-right').addEventListener('click', () => pick('right', cubeFirst ? 'box' : 'cube'));

  setChat('Hãy quan sát kỹ hai khối và bấm vào KHỐI LẬP PHƯƠNG nhé! Khối lập phương có 6 mặt đều là hình vuông bằng nhau đó! 🧊');
}

function pick(side, type) {
  if (type === 'cube') {
    snd('correct');
    document.getElementById('b-' + side).classList.add('done');
    document.querySelectorAll('#g2stage .block3d').forEach(x => { x.style.pointerEvents = 'none'; });
    askReason();
  } else {
    snd('wrong');
    const el = document.getElementById('b-' + side);
    el.classList.add('wrongsel');
    setTimeout(() => el.classList.remove('wrongsel'), 600);
    setChat('Con thử nhìn kỹ khối này nhé: các mặt của nó là hình gì, có bằng nhau không? Hãy so sánh với khối lập phương 6 mặt vuông bằng nhau – giống hay khác? Con chọn lại lần nữa xem nào! 💡');
  }
}

function askReason() {
  setChat('Con chọn đúng rồi! Giờ Cô Cú Thông Thái hỏi: Vì sao đó là KHỐI LẬP PHƯƠNG? 🤔');
  const a = document.getElementById('g2area');
  a.innerHTML += `
    <div class="prompt-box" style="margin-top:16px">❓ Vì sao đó là khối lập phương?</div>
    <div class="reason-grid" id="g2reasons"></div>
  `;

  const opts = [
    { t: 'Vì 6 mặt đều là hình vuông bằng nhau', good: true },
    { t: 'Vì các mặt là hình chữ nhật dài ngắn khác nhau', good: false },
    { t: 'Vì nó có 3 đỉnh', good: false }
  ].sort(() => Math.random() - 0.5);

  const rs = document.getElementById('g2reasons');
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.textContent = o.t;
    b.addEventListener('click', () => handleReason(b, o));
    rs.appendChild(b);
  });
}

function handleReason(btn, opt) {
  if (opt.good) {
    btn.classList.add('correct');
    snd('correct');
    document.querySelectorAll('#g2reasons .reason-btn').forEach(x => { x.disabled = true; });
    verify();
  } else {
    btn.classList.add('wrong');
    snd('wrong');
    setTimeout(() => btn.classList.remove('wrong'), 600);
    setChat('Con thử nhìn kỹ khối lập phương nhé: các mặt của nó có bằng nhau không? Hãy so sánh các đáp án và sửa lại lần nữa xem nào! 💡');
  }
}

function verify() {
  setChat('Chính xác! Khối lập phương có 6 mặt đều là hình vuông bằng nhau. Con giỏi quá! Bây giờ hãy nói cho bạn nghe vì sao con chọn nhé! ✨');
  setTimeout(() => {
    g2.done.push(g2.round);
    if (g2.round < 3) {
      g2.round++;
      loadRound(g2.round);
    } else {
      showResult(2, 3, 'Con đã phân biệt được khối lập phương và khối hộp chữ nhật! Cô Cú Thông Thái khen con giỏi!');
    }
  }, 3000);
}
