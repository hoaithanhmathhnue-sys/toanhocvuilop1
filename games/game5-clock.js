/* ================================================================
   GAME 5: CUỘC DẠO CHƠI CỦA ĐỒNG HỒ
   - Mặt đồng hồ 12 số cân đối hoàn hảo (góc đều 30 độ)
   - 3 lượt quay kim chuẩn yêu cầu docx: 6h sáng, 11h trưa, 19h tối kèm câu hỏi mở rộng
   - Thứ trong tuần chữ thường, đổ màu nổi bật
   - Nút Quay lại & Tiếp tục
   ================================================================ */
import { setChat, snd, makePills, showResult, confetti, renderSubNav } from '../main.js';

let g5 = {
  stage: 1, // 1: 6h sáng | 2: 11h trưa | 3: 19h tối | 4: Thứ trong tuần 1 | 5: Thứ trong tuần 2
  hour: 12,
  done: []
};

/* Vẽ mặt đồng hồ cân đối tuyệt đối bằng công thức lượng giác */
function clockSVG(h, targetText = '') {
  // Góc kim giờ
  const ha = (h % 12) * 30;
  const hx = 50 + Math.sin(ha * Math.PI / 180) * 22;
  const hy = 50 - Math.cos(ha * Math.PI / 180) * 22;

  // 12 số xếp đều cân đối bán kính R = 32
  let numbersSVG = '';
  for (let num = 1; num <= 12; num++) {
    const angle = num * 30;
    const rad = angle * Math.PI / 180;
    const nx = 50 + 33 * Math.sin(rad);
    const ny = 50 - 33 * Math.cos(rad) + 4.5;
    numbersSVG += `<text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" font-size="10.5" font-weight="800" fill="#6b21a8" text-anchor="middle">${num}</text>`;
  }

  // 60 vạch chia phút
  let ticksSVG = '';
  for (let m = 0; m < 60; m++) {
    const rad = m * 6 * Math.PI / 180;
    const isFive = m % 5 === 0;
    const r1 = isFive ? 40 : 42;
    const r2 = 44;
    const x1 = 50 + r1 * Math.sin(rad);
    const y1 = 50 - r1 * Math.cos(rad);
    const x2 = 50 + r2 * Math.sin(rad);
    const y2 = 50 - r2 * Math.cos(rad);
    ticksSVG += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#a855f7" stroke-width="${isFive ? 1.6 : 0.8}"/>`;
  }

  return `<svg viewBox="0 0 100 100" width="230" style="filter:drop-shadow(0 6px 12px rgba(124,58,237,0.2))">
    <defs>
      <radialGradient id="clockFace" cx="50%" cy="50%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#f5f3ff"/></radialGradient>
    </defs>
    <circle cx="50" cy="50" r="46" fill="url(#clockFace)" stroke="#7c3aed" stroke-width="3.5"/>
    <circle cx="50" cy="50" r="42" fill="none" stroke="#e9d5ff" stroke-width="1"/>
    ${ticksSVG}
    ${numbersSVG}
    <!-- Kim giờ (ngắn) -->
    <line x1="50" y1="50" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="#1e1b4b" stroke-width="4.5" stroke-linecap="round"/>
    <!-- Kim phút (dài chỉ số 12) -->
    <line x1="50" y1="50" x2="50" y2="14" stroke="#dc2626" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="4.2" fill="#7c3aed" stroke="#fff" stroke-width="1"/>
    <text x="50" y="66" font-size="8.5" font-weight="800" fill="#9333ea" text-anchor="middle">${h} giờ đúng</text>
  </svg>`;
}

export function initG5() {
  g5.stage = 1;
  g5.hour = 12;
  g5.done = [];
  loadStage(1);
}

function loadStage(st) {
  g5.stage = st;
  makePills('g5pills', 5, st, g5.done);

  if (st === 1) loadClockTask(6, '6 giờ sáng', 'Khoảng thời gian con vừa quay 6 giờ sáng con thường làm gì?', [
    { t: 'Thức dậy, tập thể dục và chuẩn bị đi học', good: true },
    { t: 'Đi ngủ ban đêm', good: false },
    { t: 'Ăn bữa cơm trưa', good: false }
  ]);
  else if (st === 2) loadClockTask(11, '11 giờ trưa', 'Khoảng thời gian con vừa quay 11 giờ trưa con thường làm gì?', [
    { t: 'Ăn cơm trưa và nghỉ ngơi', good: true },
    { t: 'Thức dậy đón bình minh', good: false },
    { t: 'Chuẩn bị đi ngủ tối', good: false }
  ]);
  else if (st === 3) loadClockTask(7, '19 giờ tối (7 giờ tối)', 'Khoảng thời gian con vừa quay 19 giờ tối con có biết ti vi phát sóng chương trình gì quen thuộc?', [
    { t: 'Chương trình Thời sự 19 giờ', good: true },
    { t: 'Phim hoạt hình sáng sớm', good: false },
    { t: 'Chương trình tập thể dục buổi sáng', good: false }
  ]);
  else if (st === 4) loadDayQuestion('Thứ Hai', 'ngày mai', '#f59e0b', 'Thứ Ba', ['Thứ Tư', 'Thứ Năm']);
  else if (st === 5) loadDayQuestion('Thứ Tư', 'hôm qua', '#ef4444', 'Thứ Ba', ['Thứ Hai', 'Chủ Nhật']);
}

/* Kịch bản quay kim đồng hồ theo giờ yêu cầu */
function loadClockTask(targetHour, timeName, expandQuestion, expandOpts) {
  g5.hour = 12;
  const a = document.getElementById('g5area');

  a.innerHTML = `
    <div class="prompt-box">🕐 Hãy chỉnh cho Thần Kim Quy <b>${timeName}</b>! (Kim ngắn chỉ số ${targetHour}, kim dài chỉ số 12)</div>
    <div class="clock-wrap" id="clockBox">${clockSVG(g5.hour)}</div>
    <div class="clock-btns">
      <button class="action-btn btn-green" id="hourMinus">⏪ Bớt 1 giờ</button>
      <button class="action-btn btn-orange" id="hourPlus">+1 giờ ⏩</button>
      <button class="action-btn btn-blue" id="checkClock">✅ Xong! Kiểm tra</button>
    </div>
    <div id="g5ExpandArea" style="margin-top:14px"></div>
  `;

  document.getElementById('hourMinus')?.addEventListener('click', () => {
    snd('click');
    g5.hour = ((g5.hour - 2 + 12) % 12) + 1;
    document.getElementById('clockBox').innerHTML = clockSVG(g5.hour);
  });

  document.getElementById('hourPlus')?.addEventListener('click', () => {
    snd('click');
    g5.hour = (g5.hour % 12) + 1;
    document.getElementById('clockBox').innerHTML = clockSVG(g5.hour);
  });

  document.getElementById('checkClock')?.addEventListener('click', () => {
    if (g5.hour === targetHour) {
      snd('correct');
      confetti(40);
      document.querySelectorAll('.clock-btns button').forEach(b => b.disabled = true);
      setChat(`Chính xác! Đồng hồ đã chỉ đúng ${timeName}! Giờ Thần Kim Quy có một câu hỏi mở rộng cho dũng sĩ nhé!`);
      showExpandQuestion(expandQuestion, expandOpts);
    } else {
      snd('wrong');
      setChat(`Con hãy nhìn kim ngắn nhé: hiện đang chỉ số ${g5.hour}. Muốn đúng ${timeName}, kim ngắn phải chỉ số ${targetHour}. Con bấm nút chỉnh lại xem nào!`);
    }
  });

  setChat(`Hãy bấm nút để xoay kim đồng hồ cho đúng ${timeName} nhé! Kim ngắn chỉ số ${targetHour}, kim dài chỉ số 12.`);

  renderSubNav('navRow5', {
    onBack: () => { if (g5.stage > 1) loadStage(g5.stage - 1); },
    onNext: () => { if (g5.stage < 5) loadStage(g5.stage + 1); },
    canBack: g5.stage > 1,
    canNext: g5.stage < 5
  });
}

function showExpandQuestion(qText, opts) {
  const ea = document.getElementById('g5ExpandArea');
  if (!ea) return;

  ea.innerHTML = `
    <div class="prompt-box" style="background:#fffbeb;border-color:#f59e0b;color:#78350f">
      ❓ <b>Câu hỏi mở rộng:</b> ${qText}
    </div>
    <div class="reason-grid" id="g5ExpGrid" style="margin-top:10px"></div>
  `;

  const grid = document.getElementById('g5ExpGrid');
  const shuffled = [...opts].sort(() => Math.random() - 0.5);

  shuffled.forEach(o => {
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.textContent = o.t;
    b.addEventListener('click', () => {
      if (o.good) {
        b.classList.add('correct');
        snd('correct');
        grid.querySelectorAll('.reason-btn').forEach(x => x.disabled = true);
        g5.done.push(g5.stage);
        setChat(`Chính xác! Con liên hệ thực tế rất tốt. Dũng sĩ xuất sắc lắm!`, true, () => {
          setTimeout(() => loadStage(g5.stage + 1), 1200);
        });
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 500);
        setChat('Chưa đúng rồi! Con nhớ lại thời gian biểu sinh hoạt hàng ngày xem nào!');
      }
    });
    grid.appendChild(b);
  });
}

/* Kịch bản các ngày trong tuần: chữ thường, đổ màu nổi bật theo đúng docx */
function loadDayQuestion(today, keyword, keyColor, answer, wrongs) {
  const a = document.getElementById('g5area');
  const opts = [answer, ...wrongs].sort(() => Math.random() - 0.5);

  a.innerHTML = `
    <div class="prompt-box" style="font-size:1.2rem">
      📅 Hôm nay là <b>${today}</b>. Vậy <span style="color:${keyColor};font-weight:800;text-decoration:underline">${keyword}</span> là thứ mấy?
    </div>
    <div class="choice-pad" id="g5DayPad" style="margin:20px 0"></div>
  `;

  const pad = document.getElementById('g5DayPad');
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'num-choice';
    b.style.width = 'auto';
    b.style.padding = '10px 22px';
    b.style.borderRadius = 'var(--radius-xl)';
    b.style.fontSize = '1.15rem';
    b.textContent = o;
    b.addEventListener('click', () => {
      if (o === answer) {
        b.classList.add('correct');
        snd('correct');
        confetti(30);
        pad.querySelectorAll('.num-choice').forEach(x => x.disabled = true);
        g5.done.push(g5.stage);
        setChat(`Chính xác! Hôm nay là ${today} thì ${keyword} là ${answer}. Con nắm rất vững thứ tự các ngày trong tuần!`, true, () => {
          setTimeout(() => {
            if (g5.stage < 5) loadStage(g5.stage + 1);
            else showResult(5, 3, 'Con đã hiểu rõ xem giờ và các ngày trong tuần! Thần Rùa Kim Quy rất khen ngợi con!');
          }, 1200);
        });
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 500);
        setChat(`Con hãy nhớ lại thứ tự các ngày trong tuần nhé: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật. Hãy chọn lại xem nào!`);
      }
    });
    pad.appendChild(b);
  });

  setChat(`Hôm nay là ${today}. Con hãy đoán xem ${keyword} là thứ mấy nhé!`);

  renderSubNav('navRow5', {
    onBack: () => { if (g5.stage > 1) loadStage(g5.stage - 1); },
    onNext: () => { if (g5.stage < 5) loadStage(g5.stage + 1); },
    canBack: g5.stage > 1,
    canNext: g5.stage < 5
  });
}
