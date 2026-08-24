/* ================================================================
   TOÁN HỌC KỲ DIỆU — LỚP 1
   Main Application Engine
   ================================================================ */
import './style.css';
import { initG1 } from './games/game1-shapes.js';
import { initG2 } from './games/game2-cube.js';
import { initG3 } from './games/game3-robot.js';
import { initG4 } from './games/game4-measure.js';
import { initG5 } from './games/game5-clock.js';
import { initG6 } from './games/game6-challenge.js';
import { initG7 } from './games/game7-cube3d.js';

/* ============ STATE & STORAGE ============ */
const STORAGE_KEY = 'toan1_kydieu_state';
export const state = {
  sound: true,
  stars: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 }
};

export function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
}

function loadState() {
  try {
    const d = localStorage.getItem(STORAGE_KEY);
    if (d) {
      const parsed = JSON.parse(d);
      Object.assign(state, parsed);
    }
  } catch (e) { /* ignore */ }
}

export function totalStars() {
  return Object.values(state.stars).reduce((a, b) => a + b, 0);
}

export function completed(n) {
  return (state.stars[n] || 0) > 0;
}

export function refreshStars() {
  document.getElementById('totalStars').textContent = totalStars();
}

/* ============ AUDIO (WebAudio API) ============ */
let actx = null;
function audioCtx() {
  if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { /* */ } }
  if (actx && actx.state === 'suspended') actx.resume();
  return actx;
}

function tone(freq, dur, type, when, vol) {
  const c = audioCtx();
  if (!c) return;
  const o = c.createOscillator(), g = c.createGain();
  o.type = type || 'sine'; o.frequency.value = freq;
  const t = c.currentTime + (when || 0);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol || 0.2, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(c.destination);
  o.start(t); o.stop(t + dur);
}

export function snd(type) {
  if (!state.sound) return;
  if (type === 'correct') {
    tone(523, 0.12, 'triangle'); tone(659, 0.12, 'triangle', 0.1);
    tone(784, 0.18, 'triangle', 0.22); tone(1046, 0.28, 'triangle', 0.38);
  } else if (type === 'wrong') {
    tone(200, 0.18, 'sine'); tone(160, 0.22, 'sine', 0.16);
  } else if (type === 'click') {
    tone(600, 0.06, 'square', 0, 0.06);
  } else if (type === 'step') {
    tone(400, 0.06, 'square', 0, 0.08);
  } else if (type === 'win') {
    tone(523, 0.1, 'triangle'); tone(659, 0.1, 'triangle', 0.1);
    tone(784, 0.1, 'triangle', 0.2); tone(1046, 0.35, 'triangle', 0.3);
  }
}

/* ============ SPEECH SYNTHESIS (giọng NỮ) ============ */
let viVoice = null;
function loadVoices() {
  const vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  const viVoices = vs.filter(v => v.lang && v.lang.toLowerCase().startsWith('vi'));
  // Ưu tiên giọng nữ: tìm theo keyword
  const femaleKeywords = ['female', 'hoaimy', 'linh', 'woman', 'nữ', 'girl', 'chi'];
  const femaleVoice = viVoices.find(v =>
    femaleKeywords.some(kw => v.name.toLowerCase().includes(kw))
  );
  // Nếu không tìm thấy giọng nữ rõ ràng, chọn giọng Google (thường là nữ)
  const googleVoice = viVoices.find(v => v.name.toLowerCase().includes('google'));
  viVoice = femaleVoice || googleVoice || viVoices[0] || null;
}
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }

export function speak(text) {
  if (!state.sound || !('speechSynthesis' in window)) return;
  try { window.speechSynthesis.cancel(); } catch (e) { /* */ }
  const u = new SpeechSynthesisUtterance(String(text).replace(/<[^>]*>/g, ''));
  u.lang = 'vi-VN'; u.rate = 1.25; u.pitch = 1.4; // rate nhanh hơn để theo kịp thao tác
  if (viVoice) u.voice = viVoice;
  window.speechSynthesis.speak(u);
}

/* ============ CHAT BUBBLE ============ */
const chatBubble = document.getElementById('chatBubble');
const chatTextEl = document.getElementById('chatText');

export function setChat(txt, doSpeak = true) {
  chatTextEl.textContent = txt;
  chatBubble.classList.add('show');
  if (doSpeak) speak(txt);
}

export function hideChat() {
  chatBubble.classList.remove('show');
}

document.getElementById('chatReplay').addEventListener('click', () => {
  speak(chatTextEl.textContent);
});

/* ============ SOUND TOGGLE ============ */
document.getElementById('soundToggle').addEventListener('click', function () {
  state.sound = !state.sound;
  this.textContent = state.sound ? '🔊' : '🔇';
  saveState();
  if (!state.sound && 'speechSynthesis' in window) {
    try { speechSynthesis.cancel(); } catch (e) { /* */ }
  }
});

/* ============ CONFETTI ============ */
export function confetti(n = 80) {
  const box = document.getElementById('confetti');
  const colors = ['#ff6b6b', '#ffd166', '#06d6a0', '#118ab2', '#c76bf0', '#ff9f5a', '#f472b6', '#60a5fa'];
  for (let i = 0; i < n; i++) {
    const d = document.createElement('div');
    d.className = 'cf';
    d.style.left = (Math.random() * 100) + '%';
    d.style.background = colors[Math.floor(Math.random() * colors.length)];
    d.style.width = d.style.height = (7 + Math.random() * 10) + 'px';
    d.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    d.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
    d.style.animationDelay = (Math.random() * 0.4) + 's';
    box.appendChild(d);
    setTimeout(() => d.remove(), 4000);
  }
}

/* ============ SCREEN NAVIGATION ============ */
let currentGame = null;
const gameInits = { 1: initG1, 2: initG2, 3: initG3, 4: initG4, 5: initG5, 6: initG6, 7: initG7 };

export function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

export function goHome() {
  currentGame = null;
  hideChat();
  showScreen('screen-home');
  renderCards();
  speak('Con muốn chơi trò nào nữa nào?');
}

export function startGame(n) {
  currentGame = n;
  showScreen('screen-g' + n);
  if (gameInits[n]) gameInits[n]();
}

/* ============ ROUND PILLS ============ */
export function makePills(elId, total, current, doneArr = []) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = '';
  for (let i = 1; i <= total; i++) {
    const p = document.createElement('div');
    p.className = 'pill';
    p.textContent = i;
    if (doneArr.indexOf(i) >= 0) p.className += ' done';
    if (i === current) p.className += ' now';
    el.appendChild(p);
  }
}

/* ============ RESULT SCREEN ============ */
export function showResult(gid, stars, message) {
  state.stars[gid] = (state.stars[gid] || 0) + stars;
  saveState();
  refreshStars();

  const box = document.getElementById('resultBox');
  let starsHtml = '';
  for (let i = 0; i < stars; i++) starsHtml += '⭐';

  box.innerHTML = `
    <div class="big-stars">${starsHtml}</div>
    <h2>🎉 Hoàn thành! Tuyệt vời!</h2>
    <div class="result-msg">${message}</div>
    <div class="result-msg">Con kiếm được <b>${stars} sao ⭐</b> trong trò này!<br>Tổng sao: <b>${totalStars()}</b></div>
    <div class="action-row">
      <button class="big-btn btn-green" id="resultHome">🏠 Về nhà</button>
      <button class="big-btn btn-orange" id="resultReplay">🔄 Chơi lại</button>
      ${gid < 7 ? `<button class="big-btn btn-purple" id="resultNext">▶ Trò tiếp</button>` : ''}
    </div>
  `;
  showScreen('screen-result');
  confetti(120);
  snd('win');
  setChat('Chúc mừng con! Con đã hoàn thành tuyệt vời! Cô rất tự hào về con! 🌟');

  document.getElementById('resultHome').addEventListener('click', goHome);
  document.getElementById('resultReplay').addEventListener('click', () => startGame(gid));
  const nextBtn = document.getElementById('resultNext');
  if (nextBtn) nextBtn.addEventListener('click', () => startGame(gid + 1));
}

/* ============ GAME CARDS (HOME) ============ */
const GAME_META = [
  { n: 1, ico: '🌲', name: 'Khu Vườn Hình Học', sub: 'Hình tròn, vuông, tam giác, chữ nhật', c: 'gc-1', max: 4 },
  { n: 2, ico: '🧊', name: 'Lâu Đài Khối 3D', sub: 'Khối lập phương & hộp chữ nhật', c: 'gc-2', max: 3 },
  { n: 3, ico: '🤖', name: 'Robot Dẫn Đường', sub: 'Trên, dưới, trái, phải, giữa', c: 'gc-3', max: 3 },
  { n: 4, ico: '📏', name: 'Phòng Đo Lường', sub: 'Đo độ dài bằng xăng-ti-mét', c: 'gc-4', max: 3 },
  { n: 5, ico: '🕐', name: 'Đồng Hồ Phiêu Lưu', sub: 'Xem giờ & các ngày trong tuần', c: 'gc-5', max: 3 },
  { n: 6, ico: '🎯', name: 'Khối Lập Phương Thần Kỳ', sub: 'Xoay khối 3D, đoán mặt, khai triển', c: 'gc-6', max: 4 },
  { n: 7, ico: '🏆', name: 'Thử Thách Tổng Hợp', sub: 'Ôn tập tất cả nội dung', c: 'gc-7', max: 5 },
];

function renderCards() {
  const g = document.getElementById('gameGrid');
  g.innerHTML = '';
  GAME_META.forEach((m, idx) => {
    const locked = false; // Mở khóa tất cả
    const d = document.createElement('div');
    d.className = 'game-card ' + m.c + (locked ? ' locked' : '');

    let starsText = '';
    if (completed(m.n)) {
      const s = Math.min(state.stars[m.n], 5);
      for (let i = 0; i < s; i++) starsText += '⭐';
    } else {
      starsText = locked ? '🔒 Chưa mở' : '✨ Bắt đầu!';
    }

    d.innerHTML = `
      <div class="lock-icon">${locked ? '🔒' : ''}</div>
      <div class="card-emoji">${m.ico}</div>
      <div class="card-name">${m.name}</div>
      <div class="card-desc">${m.sub}</div>
      <div class="card-stars">${starsText}</div>
    `;
    d.addEventListener('click', () => {
      if (!locked) {
        snd('click');
        startGame(m.n);
      } else {
        setChat(`Con cần hoàn thành trò "${GAME_META[idx - 1].name}" trước để mở khóa trò này nhé! 💪`);
      }
    });
    g.appendChild(d);
  });
}

/* ============ BACK BUTTONS ============ */
for (let i = 1; i <= 7; i++) {
  const btn = document.getElementById('backBtn' + i);
  if (btn) btn.addEventListener('click', goHome);
}
const backResult = document.getElementById('backBtnResult');
if (backResult) backResult.addEventListener('click', goHome);

/* ============ NOTE TOGGLE ============ */
document.getElementById('noteToggle').addEventListener('click', () => {
  document.getElementById('notePanel').classList.toggle('show');
});

/* ============ FLOATING PARTICLES ============ */
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#ffd166', '#a855f7', '#60a5fa', '#4ade80', '#f472b6', '#fb923c'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = (Math.random() * 100) + '%';
    p.style.width = p.style.height = (4 + Math.random() * 8) + 'px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = (15 + Math.random() * 25) + 's';
    p.style.animationDelay = (Math.random() * 20) + 's';
    container.appendChild(p);
  }
}

/* ============ INIT ============ */
loadState();
renderCards();
refreshStars();
createParticles();

// Greet on load
setTimeout(() => {
  if (state.sound && 'speechSynthesis' in window) {
    speak('Chào con! Con muốn chơi trò gì hôm nay?');
  }
}, 800);
