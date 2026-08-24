/* ================================================================
   GAME 5: ĐỒNG HỒ PHIÊU LƯU
   Xem giờ đúng & các ngày trong tuần
   ================================================================ */
import { setChat, snd, makePills, showResult } from '../main.js';

let g5 = { phase: 'clock', hour: 12, target: 7, dayIdx: 0 };

function clockSVG(h) {
  const ha = (h % 12) * 30;
  const hx = 50 + Math.sin(ha * Math.PI / 180) * 22;
  const hy = 50 - Math.cos(ha * Math.PI / 180) * 22;
  return `<svg viewBox="0 0 100 100" width="220">
    <defs>
      <radialGradient id="clockBg" cx="50%" cy="50%"><stop offset="0%" stop-color="#fdf6ff"/><stop offset="100%" stop-color="#f0e8ff"/></radialGradient>
    </defs>
    <circle cx="50" cy="50" r="46" fill="url(#clockBg)" stroke="#7b3fa0" stroke-width="3"/>
    <circle cx="50" cy="50" r="42" fill="none" stroke="#e9d5ff" stroke-width="1"/>
    <g font-size="12" font-weight="bold" fill="#7b3fa0" text-anchor="middle">
      <text x="50" y="17">12</text><text x="83" y="54">3</text><text x="50" y="92">6</text><text x="17" y="54">9</text>
      <text x="67" y="25">1</text><text x="78" y="43">2</text><text x="78" y="65">4</text><text x="67" y="83">5</text>
      <text x="33" y="83">7</text><text x="22" y="65">8</text><text x="22" y="43">10</text><text x="33" y="25">11</text>
    </g>
    <line x1="50" y1="50" x2="${hx}" y2="${hy}" stroke="#333" stroke-width="5" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="50" y2="16" stroke="#e74c3c" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="4" fill="#333"/>
    <text x="50" y="40" font-size="10" fill="#aaa" text-anchor="middle">${h} giờ</text>
  </svg>`;
}

export function initG5() {
  g5.phase = 'clock';
  g5.hour = 12;
  loadClock();
}

function loadClock() {
  g5.phase = 'clock';
  g5.hour = 12;
  makePills('g5pills', 3, 1, []);

  const a = document.getElementById('g5area');
  a.innerHTML = `
    <div class="prompt-box">🕐 Hãy chỉnh đồng hồ chỉ đúng <b>7 GIỜ</b>! (Kim ngắn chỉ số 7, kim dài chỉ số 12)</div>
    <div class="clock-wrap" id="clockBox">${clockSVG(g5.hour)}</div>
    <div class="clock-btns">
      <button class="action-btn btn-green" id="hourMinus">⏪ Bớt 1 giờ</button>
      <button class="action-btn btn-orange" id="hourPlus">+1 giờ ⏩</button>
    </div>
    <div class="action-row">
      <button class="action-btn btn-blue" id="checkClock">✅ Xong! Kiểm tra</button>
    </div>
  `;

  document.getElementById('hourMinus').addEventListener('click', () => setHour(-1));
  document.getElementById('hourPlus').addEventListener('click', () => setHour(1));
  document.getElementById('checkClock').addEventListener('click', checkClock);

  setChat('Hãy bấm nút để xoay kim đồng hồ cho đúng 7 giờ con nhé! Kim ngắn chỉ số 7, kim dài chỉ số 12. 🕐');
}

function setHour(d) {
  snd('click');
  g5.hour = ((g5.hour - 1 + d + 12) % 12) + 1;
  document.getElementById('clockBox').innerHTML = clockSVG(g5.hour);
}

function checkClock() {
  if (g5.hour === g5.target) {
    snd('win');
    setChat('Chính xác! 7 giờ đúng: kim ngắn chỉ số 7, kim dài chỉ số 12. Thật tuyệt vời! 🎉');
    setTimeout(() => loadDays(), 2200);
  } else {
    snd('wrong');
    setChat('Chưa đúng con ạ. 7 giờ đúng nghĩa là kim ngắn chỉ số 7 và kim dài chỉ số 12. Con hãy chỉnh lại nhé! 🔄');
  }
}

function loadDays() {
  g5.phase = 'days';
  g5.dayIdx = 0;
  makePills('g5pills', 3, 2, []);
  loadDay(0);
}

function loadDay(i) {
  const a = document.getElementById('g5area');
  if (i === 0) {
    a.innerHTML = `
      <div class="prompt-box">📅 Hôm nay là <b>Thứ Ba</b>. Vậy NGÀY MAI là thứ mấy?</div>
      <div class="choice-pad" id="g5d"></div>
    `;
    makeDayOptions(['Thứ Tư', 'Thứ Năm', 'Thứ Hai'], 'Thứ Tư');
  } else {
    a.innerHTML = `
      <div class="prompt-box">📅 Hôm nay là <b>Thứ Ba</b>. Vậy HÔM QUA là thứ mấy?</div>
      <div class="choice-pad" id="g5d"></div>
    `;
    makeDayOptions(['Thứ Hai', 'Thứ Tư', 'Chủ Nhật'], 'Thứ Hai');
  }
  setChat(i === 0
    ? 'Hôm nay là Thứ Ba. Con hãy đoán xem NGÀY MAI là thứ mấy nhé! 📅'
    : 'Giỏi lắm! Bây giờ cô hỏi: HÔM QUA là thứ mấy? 📅');
}

function makeDayOptions(opts, correct) {
  opts.sort(() => Math.random() - 0.5);
  const pad = document.getElementById('g5d');
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'num-choice';
    b.style.width = 'auto';
    b.style.padding = '0 18px';
    b.style.borderRadius = '20px';
    b.textContent = o;
    b.addEventListener('click', () => {
      if (o === correct) {
        b.classList.add('correct');
        snd('correct');
        pad.querySelectorAll('.num-choice').forEach(x => { x.disabled = true; });
        dayVerify(correct);
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 500);
        setChat('Con nhớ lại xem, một tuần có: Hai, Ba, Tư, Năm, Sáu, Bảy, Chủ Nhật. Con thử lại nhé! 📅');
      }
    });
    pad.appendChild(b);
  });
}

function dayVerify(correct) {
  setChat(`Đúng rồi! ${correct} đấy con. Một tuần có 7 ngày: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật. Con nhớ thật giỏi! 🌈`);
  setTimeout(() => {
    if (g5.dayIdx === 0) {
      g5.dayIdx = 1;
      loadDay(1);
    } else {
      showResult(5, 3, 'Con đã biết xem giờ và các ngày trong tuần! Cô Cú vỗ tay khen con! 👏');
    }
  }, 2800);
}
