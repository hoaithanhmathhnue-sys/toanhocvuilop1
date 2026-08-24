/* ================================================================
   GAME 7: THỬ THÁCH TỔNG HỢP
   Quiz ngẫu nhiên từ tất cả chủ đề — ôn tập tổng hợp
   ================================================================ */
import { setChat, snd, makePills, showResult, confetti } from '../main.js';

const QUESTIONS = [
  // === Hình phẳng ===
  { cat: '🌲 Hình học', q: 'Hình nào có 3 cạnh và 3 đỉnh?', opts: ['Hình tam giác', 'Hình vuông', 'Hình tròn'], ans: 0, explain: 'Hình tam giác có 3 cạnh và 3 đỉnh!' },
  { cat: '🌲 Hình học', q: 'Hình nào KHÔNG có góc?', opts: ['Hình tròn', 'Hình vuông', 'Hình chữ nhật'], ans: 0, explain: 'Hình tròn tròn xoe, không có góc nào cả!' },
  { cat: '🌲 Hình học', q: 'Hình vuông có mấy cạnh bằng nhau?', opts: ['4 cạnh', '3 cạnh', '2 cạnh'], ans: 0, explain: 'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông!' },
  { cat: '🌲 Hình học', q: 'Hình chữ nhật có bao nhiêu góc vuông?', opts: ['4 góc', '3 góc', '2 góc'], ans: 0, explain: 'Hình chữ nhật có 4 góc vuông!' },
  { cat: '🌲 Hình học', q: 'Mặt trời giống hình gì nhất?', opts: ['Hình tròn', 'Hình vuông', 'Hình tam giác'], ans: 0, explain: 'Mặt trời tròn xoe nên giống hình tròn!' },
  { cat: '🌲 Hình học', q: 'Cửa sổ lớp học thường giống hình gì?', opts: ['Hình vuông', 'Hình tròn', 'Hình tam giác'], ans: 0, explain: 'Cửa sổ lớp học thường là hình vuông hoặc chữ nhật!' },
  { cat: '🌲 Hình học', q: 'Mái nhà giống hình gì?', opts: ['Hình tam giác', 'Hình tròn', 'Hình chữ nhật'], ans: 0, explain: 'Mái nhà có dạng tam giác!' },
  { cat: '🌲 Hình học', q: 'Hình chữ nhật khác hình vuông ở điểm nào?', opts: ['2 cạnh dài 2 cạnh ngắn', 'Có 3 cạnh', 'Không có góc'], ans: 0, explain: 'Hình chữ nhật có 2 cạnh dài và 2 cạnh ngắn!' },
  // === Khối 3D ===
  { cat: '🧊 Khối 3D', q: 'Khối lập phương có mấy mặt?', opts: ['6 mặt', '4 mặt', '8 mặt'], ans: 0, explain: 'Khối lập phương có 6 mặt, tất cả đều là hình vuông!' },
  { cat: '🧊 Khối 3D', q: 'Các mặt của khối lập phương đều là hình gì?', opts: ['Hình vuông', 'Hình tròn', 'Hình tam giác'], ans: 0, explain: 'Khối lập phương có 6 mặt đều là hình vuông bằng nhau!' },
  { cat: '🧊 Khối 3D', q: 'Khối hộp chữ nhật khác khối lập phương ở điểm nào?', opts: ['Các mặt là hình chữ nhật, không bằng nhau', 'Có 4 mặt', 'Không có đỉnh'], ans: 0, explain: 'Khối hộp chữ nhật có các mặt là hình chữ nhật, kích thước khác nhau!' },
  { cat: '🧊 Khối 3D', q: 'Khối lập phương có mấy đỉnh?', opts: ['8 đỉnh', '6 đỉnh', '4 đỉnh'], ans: 0, explain: 'Khối lập phương có 8 đỉnh!' },
  { cat: '🧊 Khối 3D', q: 'Khối lập phương có mấy cạnh?', opts: ['12 cạnh', '8 cạnh', '6 cạnh'], ans: 0, explain: 'Khối lập phương có 12 cạnh bằng nhau!' },
  { cat: '🧊 Khối 3D', q: 'Viên xúc xắc giống khối gì?', opts: ['Khối lập phương', 'Khối hộp chữ nhật', 'Hình cầu'], ans: 0, explain: 'Viên xúc xắc là khối lập phương vì 6 mặt đều là hình vuông!' },
  // === Vị trí ===
  { cat: '🤖 Vị trí', q: 'Nếu rô-bốt đang ở góc trên bên trái, nó cần đi hướng nào để sang phải?', opts: ['Sang phải ➡', 'Lên trên ⬆', 'Xuống dưới ⬇'], ans: 0, explain: 'Để sang phải, rô-bốt phải đi theo hướng ➡!' },
  { cat: '🤖 Vị trí', q: 'Con mèo đứng TRÊN bàn. Vậy con mèo ở vị trí nào so với bàn?', opts: ['Ở trên', 'Ở dưới', 'Ở giữa'], ans: 0, explain: 'Con mèo đứng trên bàn nghĩa là nó ở vị trí phía trên!' },
  { cat: '🤖 Vị trí', q: 'Con cá bơi DƯỚI nước. Con cá ở vị trí nào so với mặt nước?', opts: ['Ở dưới', 'Ở trên', 'Bên phải'], ans: 0, explain: 'Con cá bơi dưới nước nghĩa là nó ở bên dưới mặt nước!' },
  { cat: '🤖 Vị trí', q: 'Bạn An ngồi GIỮA Bình và Chi. An ở vị trí nào?', opts: ['Ở giữa', 'Bên trái', 'Bên phải'], ans: 0, explain: 'An ngồi giữa nghĩa là An ở vị trí chính giữa hai bạn!' },
  { cat: '🤖 Vị trí', q: 'Muốn đi từ tầng 1 lên tầng 2, con phải đi hướng nào?', opts: ['Lên trên ⬆', 'Sang phải ➡', 'Xuống dưới ⬇'], ans: 0, explain: 'Tầng 2 ở trên tầng 1, nên con phải đi lên!' },
  // === Đo lường ===
  { cat: '📏 Đo lường', q: 'Khi đo bằng thước, vạch nào phải trùng với đầu vật?', opts: ['Vạch số 0', 'Vạch số 5', 'Vạch cuối cùng'], ans: 0, explain: 'Khi đo, ta luôn đặt vạch số 0 trùng với đầu vật cần đo!' },
  { cat: '📏 Đo lường', q: 'Cây bút dài 7 cm. Số 7 ta đọc ở đâu?', opts: ['Ở vạch cuối trùng đuôi bút', 'Ở vạch giữa thước', 'Ở vạch số 0'], ans: 0, explain: 'Ta đọc số ở vạch cuối cùng mà đuôi bút trùng vào!' },
  { cat: '📏 Đo lường', q: 'Đơn vị đo độ dài nhỏ nhất con học là gì?', opts: ['Xăng-ti-mét (cm)', 'Ki-lô-mét (km)', 'Mét (m)'], ans: 0, explain: 'Lớp 1 con học đơn vị cm - xăng-ti-mét!' },
  { cat: '📏 Đo lường', q: 'Vật nào dài hơn: bút chì hay cục tẩy?', opts: ['Bút chì', 'Cục tẩy', 'Bằng nhau'], ans: 0, explain: 'Bút chì thường dài hơn cục tẩy!' },
  // === Đồng hồ & ngày ===
  { cat: '🕐 Đồng hồ', q: '3 giờ đúng: kim ngắn chỉ số mấy?', opts: ['Số 3', 'Số 12', 'Số 6'], ans: 0, explain: '3 giờ đúng: kim ngắn chỉ số 3, kim dài chỉ số 12!' },
  { cat: '🕐 Đồng hồ', q: 'Sau Thứ Sáu là thứ mấy?', opts: ['Thứ Bảy', 'Thứ Tư', 'Chủ Nhật'], ans: 0, explain: 'Sau Thứ Sáu là Thứ Bảy!' },
  { cat: '🕐 Đồng hồ', q: 'Một tuần có bao nhiêu ngày?', opts: ['7 ngày', '5 ngày', '10 ngày'], ans: 0, explain: 'Một tuần có 7 ngày: Hai, Ba, Tư, Năm, Sáu, Bảy, Chủ Nhật!' },
  { cat: '🕐 Đồng hồ', q: '6 giờ đúng: kim ngắn chỉ số mấy?', opts: ['Số 6', 'Số 12', 'Số 3'], ans: 0, explain: '6 giờ đúng: kim ngắn chỉ số 6, kim dài chỉ số 12!' },
  { cat: '🕐 Đồng hồ', q: 'Kim nào NGẮN hơn trên đồng hồ?', opts: ['Kim giờ', 'Kim phút', 'Bằng nhau'], ans: 0, explain: 'Kim giờ (kim ngắn) luôn ngắn hơn kim phút (kim dài)!' },
  { cat: '🕐 Đồng hồ', q: 'Ngày đầu tiên trong tuần là?', opts: ['Thứ Hai', 'Chủ Nhật', 'Thứ Ba'], ans: 0, explain: 'Tuần bắt đầu từ Thứ Hai!' },
  { cat: '🕐 Đồng hồ', q: '12 giờ trưa: kim ngắn chỉ số mấy?', opts: ['Số 12', 'Số 6', 'Số 1'], ans: 0, explain: '12 giờ: kim ngắn chỉ số 12, kim dài cũng chỉ số 12!' },
];

let g7 = { qIdx: 0, score: 0, questions: [], total: 5 };

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function initG7() {
  g7.questions = shuffle(QUESTIONS).slice(0, g7.total);
  g7.qIdx = 0;
  g7.score = 0;
  loadQuestion(0);
}

function loadQuestion(idx) {
  const qData = g7.questions[idx];
  makePills('g7pills', g7.total, idx + 1, []);

  const a = document.getElementById('g7area');
  const origCorrect = qData.opts[qData.ans];
  const shuffledOpts = shuffle(qData.opts);

  a.innerHTML = `
    <div class="prompt-box" style="font-size:0.85rem;color:#888;font-weight:600;margin-bottom:4px;border:none;background:none;padding:4px">${qData.cat} · Câu ${idx + 1}/${g7.total}</div>
    <div class="prompt-box">❓ ${qData.q}</div>
    <div class="reason-grid" id="g7opts"></div>
    <div id="g7feedback" style="margin-top:12px"></div>
  `;

  const optGrid = document.getElementById('g7opts');
  shuffledOpts.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.style.minWidth = '200px';
    b.style.textAlign = 'center';
    b.textContent = opt;
    b.addEventListener('click', () => handleAnswer(b, opt, origCorrect, qData));
    optGrid.appendChild(b);
  });

  setChat(`Câu ${idx + 1}: ${qData.q} Con hãy chọn đáp án nhé! 🤔`);
}

function handleAnswer(btn, chosen, correct, qData) {
  const allBtns = document.querySelectorAll('#g7opts .reason-btn');

  if (chosen === correct) {
    btn.classList.add('correct');
    snd('correct');
    g7.score++;
    allBtns.forEach(x => { x.disabled = true; });
    confetti(40);

    const fb = document.getElementById('g7feedback');
    fb.innerHTML = `<div style="background:#d1fae5;border-radius:16px;padding:14px;font-weight:700;color:#065f46;text-align:center">✅ Chính xác! ${qData.explain}</div>`;
    setChat(`Đúng rồi con! ${qData.explain} 🌟`);
  } else {
    btn.classList.add('wrong');
    snd('wrong');
    allBtns.forEach(x => { x.disabled = true; });
    allBtns.forEach(x => { if (x.textContent === correct) x.classList.add('correct'); });

    const fb = document.getElementById('g7feedback');
    fb.innerHTML = `<div style="background:#fef3c7;border-radius:16px;padding:14px;font-weight:700;color:#92400e;text-align:center">💡 Đáp án đúng là: ${correct}. ${qData.explain}</div>`;
    setChat(`Chưa đúng con ạ. Đáp án đúng là "${correct}". ${qData.explain} Không sao, con cố gắng câu tiếp nhé! 💪`);
  }

  setTimeout(() => {
    if (g7.qIdx + 1 < g7.total) {
      g7.qIdx++;
      loadQuestion(g7.qIdx);
    } else {
      finishChallenge();
    }
  }, 2800);
}

function finishChallenge() {
  const stars = Math.min(5, g7.score);
  const msgs = [
    'Con cố gắng thêm nhé! Cô Cú Thông Thái tin con sẽ làm được! 💪',
    'Tốt lắm! Con đã cố gắng rồi! 👍',
    'Khá giỏi đó con! Cô Cú Thông Thái khen! 🌟',
    'Xuất sắc! Con trả lời rất tốt! 🎉',
    'Hoàn hảo! Con đúng hết tất cả! Cô Cú Thông Thái tự hào lắm! 🏆',
    'Siêu giỏi! Con là ngôi sao sáng nhất! 🌟🏆'
  ];

  showResult(7, stars, `Con trả lời đúng ${g7.score}/${g7.total} câu! ${msgs[Math.min(g7.score, 5)]}`);
}
