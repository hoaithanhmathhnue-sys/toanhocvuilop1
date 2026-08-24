/* ================================================================
   GAME 2: LÂU ĐÀI KHỐI 3D
   Khối lập phương & hộp chữ nhật — xoay, quan sát, phân biệt
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

let g2 = { round: 1, target: 'cube', done: [] };

function cubeSVG(w, label) {
  const s = w * 0.5;
  return `<svg viewBox="0 0 ${4*s} ${3*s}" width="${w*1.6}">
    <polygon points="${2*s},0 ${4*s},${s} ${2*s},${2*s} 0,${s}" fill="#8fd6ff" stroke="#3b82c4" stroke-width="2"/>
    <polygon points="${s},${s} ${3*s},${s} ${3*s},${2.6*s} ${s},${2.6*s}" fill="#a3e0ff" stroke="#3b82c4" stroke-width="2"/>
    <polygon points="${s},${s} 0,${1.5*s} 0,${2.1*s} ${s},${2.6*s}" fill="#6fb9ee" stroke="#3b82c4" stroke-width="2"/>
    <text x="${2*s}" y="${1.5*s}" text-anchor="middle" font-size="${s*0.45}" font-weight="bold" fill="#14437a">${label}</text>
  </svg>`;
}

function boxSVG(w, label) {
  const s = w * 0.5;
  return `<svg viewBox="0 0 ${6*s} ${2.6*s}" width="${w*2.4}">
    <polygon points="${s},0 ${3*s},${s} ${5*s},${s} ${3*s},0" fill="#ffc46b" stroke="#b8791a" stroke-width="2"/>
    <polygon points="${3*s},${s} ${5*s},${s} ${5*s},${2*s} ${3*s},${2*s}" fill="#ffd999" stroke="#b8791a" stroke-width="2"/>
    <polygon points="${3*s},${s} ${3*s},${2*s} ${s},${2*s} ${s},${s}" fill="#ffb347" stroke="#b8791a" stroke-width="2"/>
    <polygon points="${s},${s} 0,${1.4*s} 0,${1.6*s} ${s},${2*s}" fill="#e89b3c" stroke="#b8791a" stroke-width="2"/>
    <text x="${3*s}" y="${1.4*s}" text-anchor="middle" font-size="${s*0.4}" font-weight="bold" fill="#7a4a0a">${label}</text>
  </svg>`;
}

export function initG2() {
  g2.round = 1;
  g2.done = [];
  loadRound(1);
}

function loadRound(r) {
  makePills('g2pills', 3, r, g2.done);

  let leftType, rightType;
  if (r === 1) { leftType = 'cube'; rightType = 'box'; }
  else if (r === 2) { leftType = 'box'; rightType = 'cube'; }
  else { leftType = 'cube'; rightType = 'box'; }

  g2.target = 'cube';

  const a = document.getElementById('g2area');
  a.innerHTML = `
    <div class="prompt-box">🏰 Hãy chọn <b>KHỐI LẬP PHƯƠNG</b> nhé con!</div>
    <div class="blocks-stage" id="g2stage">
      <div class="block3d" id="b-left"><div id="bl-svg"></div><div class="bname">Khối A</div></div>
      <div class="block3d" id="b-right"><div id="br-svg"></div><div class="bname">Khối B</div></div>
    </div>
  `;

  document.getElementById('bl-svg').innerHTML = leftType === 'cube' ? cubeSVG(100, 'Khối A') : boxSVG(100, 'Khối A');
  document.getElementById('br-svg').innerHTML = rightType === 'cube' ? cubeSVG(100, 'Khối B') : boxSVG(100, 'Khối B');

  document.getElementById('b-left').addEventListener('click', () => pick('left', leftType));
  document.getElementById('b-right').addEventListener('click', () => pick('right', rightType));

  setChat('Hãy quan sát hai khối và bấm vào KHỐI LẬP PHƯƠNG nhé! Khối lập phương có 6 mặt đều là hình vuông đó! 🧊');
}

function pick(side, type) {
  if (type === g2.target) {
    snd('correct');
    document.getElementById('b-' + side).classList.add('done');
    document.querySelectorAll('#g2stage .block3d').forEach(x => { x.style.pointerEvents = 'none'; });
    askReason();
  } else {
    snd('wrong');
    const el = document.getElementById('b-' + side);
    el.classList.add('wrongsel');
    setTimeout(() => el.classList.remove('wrongsel'), 600);
    setChat('Đó là khối hộp chữ nhật con ạ. Con thử nhìn kỹ xem: khối nào có 6 mặt đều là hình vuông nhỉ? 🤔');
  }
}

function askReason() {
  setChat('Con chọn đúng rồi! Giờ cô hỏi: Vì sao đó là KHỐI LẬP PHƯƠNG? 🤔');
  const a = document.getElementById('g2area');
  a.innerHTML += `
    <div class="prompt-box">❓ Vì sao đó là khối lập phương?</div>
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
    setChat('Chưa đúng con ạ. Khối lập phương có 6 mặt đều là hình vuông bằng nhau đó! Con chọn lại nhé. 💡');
  }
}

function verify() {
  setChat('Đúng rồi! Khối lập phương có 6 mặt đều là hình vuông. Khối hộp chữ nhật thì các mặt là hình chữ nhật. Cô cùng con đếm: 1, 2, 3, 4, 5, 6 — 6 mặt nhé! 🎉');
  setTimeout(() => {
    g2.done.push(g2.round);
    if (g2.round < 3) {
      g2.round++;
      loadRound(g2.round);
    } else {
      showResult(2, 3, 'Con đã phân biệt được khối lập phương và khối hộp chữ nhật! Cô Cú khen con giỏi!');
    }
  }, 3000);
}
