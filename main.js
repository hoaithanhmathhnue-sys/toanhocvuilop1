/* ================================================================
   SỰ KÌ DIỆU CỦA VƯƠNG QUỐC TOÁN HỌC — LỚP 1
   Main Application Engine — Thần Rùa Kim Quy (AI Mentor)
   ================================================================ */
import './style.css';
import { initG1 } from './games/game1-shapes.js';
import { initG2 } from './games/game2-cube.js';
import { initG3 } from './games/game3-robot.js';
import { initG4 } from './games/game4-measure.js';
import { initG5 } from './games/game5-clock.js';
import { initG6 } from './games/game8-tangram.js';
import { initG7 } from './games/game7-cube3d.js';

/* ============ STATE & STORAGE ============ */
const STORAGE_KEY = 'toan1_kydieu_kimquy_state';
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
  const el = document.getElementById('totalStars');
  if (el) el.textContent = totalStars();
}

/* ============ AUDIO & BGM (WebAudio API) ============ */
let actx = null;
function audioCtx() {
  if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { /* */ } }
  if (actx && actx.state === 'suspended') actx.resume();
  return actx;
}

window.addEventListener('pointerdown', () => {
  if (actx && actx.state === 'suspended') actx.resume();
  if (!currentGame && state.sound && !bgmInterval) {
    startBGM('home');
  }
}, { once: true });

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

/* ------------ NHẠC NỀN (BACKGROUND MUSIC - WEBAUDIO SYNTH) ------------ */
let bgmInterval = null;
let bgmStep = 0;

const BGM_PATTERNS = {
  home: { // Màn hình chính — tươi vui, hoàng tráng
    tempo: 240,
    notes: [
      { n: 523.25, d: 0.15, type: 'sine' }, { n: 659.25, d: 0.15, type: 'sine' },
      { n: 783.99, d: 0.15, type: 'sine' }, { n: 880.00, d: 0.22, type: 'sine' },
      { n: 1046.50, d: 0.25, type: 'sine' }, { n: 880.00, d: 0.15, type: 'sine' },
      { n: 783.99, d: 0.22, type: 'sine' }, { n: 0, d: 0.12, type: 'sine' }
    ]
  },
  1: { // Game 1: Khu vườn hình học
    tempo: 280,
    notes: [
      { n: 523.25, d: 0.18, type: 'sine' }, { n: 659.25, d: 0.18, type: 'sine' },
      { n: 783.99, d: 0.18, type: 'sine' }, { n: 1046.50, d: 0.28, type: 'sine' },
      { n: 880.00, d: 0.18, type: 'sine' }, { n: 783.99, d: 0.18, type: 'sine' },
      { n: 659.25, d: 0.3, type: 'sine' }, { n: 0, d: 0.15, type: 'sine' }
    ]
  },
  2: { // Game 2: Phép màu hình khối
    tempo: 320,
    notes: [
      { n: 392.00, d: 0.2, type: 'triangle' }, { n: 493.88, d: 0.2, type: 'triangle' },
      { n: 587.33, d: 0.2, type: 'triangle' }, { n: 659.25, d: 0.3, type: 'triangle' },
      { n: 587.33, d: 0.2, type: 'triangle' }, { n: 493.88, d: 0.2, type: 'triangle' },
      { n: 392.00, d: 0.35, type: 'triangle' }, { n: 0, d: 0.15, type: 'triangle' }
    ]
  },
  3: { // Game 3: Robot dẫn đường
    tempo: 220,
    notes: [
      { n: 440.00, d: 0.12, type: 'square' }, { n: 0, d: 0.08, type: 'square' },
      { n: 554.37, d: 0.12, type: 'square' }, { n: 0, d: 0.08, type: 'square' },
      { n: 659.25, d: 0.15, type: 'square' }, { n: 880.00, d: 0.22, type: 'square' },
      { n: 659.25, d: 0.15, type: 'square' }, { n: 0, d: 0.1, type: 'square' }
    ]
  },
  4: { // Game 4: Trạm đo lường kì diệu
    tempo: 300,
    notes: [
      { n: 440.00, d: 0.18, type: 'triangle' }, { n: 493.88, d: 0.18, type: 'triangle' },
      { n: 523.25, d: 0.18, type: 'triangle' }, { n: 587.33, d: 0.25, type: 'triangle' },
      { n: 523.25, d: 0.18, type: 'triangle' }, { n: 493.88, d: 0.18, type: 'triangle' },
      { n: 440.00, d: 0.3, type: 'triangle' }, { n: 0, d: 0.15, type: 'triangle' }
    ]
  },
  5: { // Game 5: Cuộc dạo chơi đồng hồ
    tempo: 350,
    notes: [
      { n: 523.25, d: 0.15, type: 'sine' }, { n: 392.00, d: 0.15, type: 'sine' },
      { n: 659.25, d: 0.15, type: 'sine' }, { n: 392.00, d: 0.15, type: 'sine' },
      { n: 783.99, d: 0.22, type: 'sine' }, { n: 659.25, d: 0.18, type: 'sine' },
      { n: 523.25, d: 0.3, type: 'sine' }, { n: 0, d: 0.15, type: 'sine' }
    ]
  },
  6: { // Game 6: Ghép mảnh phép màu
    tempo: 360,
    notes: [
      { n: 392.00, d: 0.22, type: 'triangle' }, { n: 440.00, d: 0.22, type: 'triangle' },
      { n: 523.25, d: 0.22, type: 'triangle' }, { n: 659.25, d: 0.32, type: 'triangle' },
      { n: 523.25, d: 0.22, type: 'triangle' }, { n: 440.00, d: 0.22, type: 'triangle' },
      { n: 392.00, d: 0.4, type: 'triangle' }, { n: 0, d: 0.2, type: 'triangle' }
    ]
  },
  7: { // Game 7: Chinh phục đỉnh cao
    tempo: 210,
    notes: [
      { n: 523.25, d: 0.14, type: 'triangle' }, { n: 659.25, d: 0.14, type: 'triangle' },
      { n: 783.99, d: 0.14, type: 'triangle' }, { n: 1046.50, d: 0.22, type: 'triangle' },
      { n: 880.00, d: 0.14, type: 'triangle' }, { n: 1046.50, d: 0.28, type: 'triangle' },
      { n: 1174.66, d: 0.35, type: 'triangle' }, { n: 0, d: 0.12, type: 'triangle' }
    ]
  }
};

export function startBGM(trackId = 'home') {
  stopBGM();
  if (!state.sound) return;

  const c = audioCtx();
  if (!c) return;

  const track = BGM_PATTERNS[trackId] || BGM_PATTERNS.home;
  bgmStep = 0;

  bgmInterval = setInterval(() => {
    if (!state.sound) {
      stopBGM();
      return;
    }
    const note = track.notes[bgmStep % track.notes.length];
    bgmStep++;

    if (note.n > 0) {
      const o = c.createOscillator();
      const g = c.createGain();

      o.type = note.type || 'sine';
      o.frequency.value = note.n;

      const t = c.currentTime;
      const vol = (note.type === 'square') ? 0.012 : 0.022;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + note.d);

      o.connect(g);
      g.connect(c.destination);

      o.start(t);
      o.stop(t + note.d);
    }
  }, track.tempo);
}

export function stopBGM() {
  if (bgmInterval) {
    clearInterval(bgmInterval);
    bgmInterval = null;
  }
}

/* ============ AUDIO & VOICE PLAYBACK ENGINE ============ */
let currentAudio = null;
let viVoice = null;

function loadVoices() {
  if (!window.speechSynthesis) return;
  const vs = speechSynthesis.getVoices();
  if (!vs.length) return;

  const viVoices = vs.filter(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith('vi'));
  if (viVoices.length > 0) {
    // Ưu tiên giọng nữ truyền cảm
    const female = viVoices.find(v => {
      const n = v.name.toLowerCase();
      return ['hoaimy', 'linh', 'female', 'nữ', 'chi', 'mai', 'lan', 'google'].some(kw => n.includes(kw));
    });
    viVoice = female || viVoices[0];
  } else {
    viVoice = null;
  }
}

if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

export function stopSpeech() {
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {}
    currentAudio = null;
  }
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
}

/* Phát trực tiếp tệp âm thanh MP3 thu âm (chuẩn studio tiếng Việt) */
export function playAudioFile(url, onEnd = null) {
  stopSpeech();
  if (!state.sound) {
    if (onEnd) setTimeout(onEnd, 500);
    return;
  }

  const audio = new Audio(url);
  currentAudio = audio;

  audio.onended = () => {
    currentAudio = null;
    if (onEnd) onEnd();
  };
  audio.onerror = () => {
    currentAudio = null;
    if (onEnd) onEnd();
  };

  const p = audio.play();
  if (p && p.catch) {
    p.catch(() => {
      currentAudio = null;
      if (onEnd) onEnd();
    });
  }
}

function splitTextChunks(text) {
  if (!text) return [];
  const sentences = text.match(/[^.!?:]+[.!?:]*/g) || [text];
  const res = [];
  for (let s of sentences) {
    s = s.trim();
    if (s) res.push(s);
  }
  return res.length ? res : [text];
}

function playGoogleTTS(cleanText, onEnd, onError) {
  const chunks = splitTextChunks(cleanText);
  let idx = 0;

  function playNextChunk() {
    if (idx >= chunks.length) {
      currentAudio = null;
      if (onEnd) setTimeout(onEnd, 300);
      return;
    }
    const chunk = chunks[idx++];
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(chunk)}&tl=vi&client=tw-ob`;
    const audio = new Audio(url);
    currentAudio = audio;

    let timer = setTimeout(() => {
      if (audio === currentAudio) {
        audio.pause();
        currentAudio = null;
        onError();
      }
    }, 4500);

    audio.onended = () => {
      clearTimeout(timer);
      setTimeout(playNextChunk, 400);
    };

    audio.onerror = () => {
      clearTimeout(timer);
      currentAudio = null;
      onError();
    };

    const promise = audio.play();
    if (promise && promise.catch) {
      promise.catch(() => {
        clearTimeout(timer);
        currentAudio = null;
        onError();
      });
    }
  }

  playNextChunk();
}

/* SỬA LỖI PHÁT ÂM TIẾNG ANH: Nếu không có voice tiếng Việt chuẩn thì KHÔNG ĐỌC BẰNG GIỌNG ANH */
export function speak(text, onEnd = null) {
  const cleanText = String(text)
    .replace(/<[^>]*>/g, '')
    .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{200D}\u{FE0F}]/gu, '')
    .trim();

  stopSpeech();

  if (!cleanText) {
    if (onEnd) onEnd();
    return;
  }

  const estimatedMs = Math.max(2500, Math.ceil(cleanText.length * 90));

  if (!state.sound) {
    if (onEnd) setTimeout(onEnd, Math.min(estimatedMs, 3000));
    return;
  }

  // Thử Google TTS tiếng Việt trước
  playGoogleTTS(cleanText, onEnd, () => {
    // Fallback: WebSpeech chỉ dùng khi CÓ VOICE TIẾNG VIỆT
    if ('speechSynthesis' in window && viVoice) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
      const u = new SpeechSynthesisUtterance(cleanText);
      u.voice = viVoice;
      u.lang = 'vi-VN';
      u.rate = 1.0;
      u.onend = () => { if (onEnd) setTimeout(onEnd, 300); };
      u.onerror = () => { if (onEnd) onEnd(); };
      window.speechSynthesis.speak(u);
    } else {
      // TUYỆT ĐỐI KHÔNG DÙNG GIỌNG ANH ĐỂ ĐỌC TIẾNG VIỆT
      // Kết thúc êm đẹp sau thời gian đọc ước lượng
      if (onEnd) setTimeout(onEnd, Math.min(estimatedMs, 3500));
    }
  });
}

/* ============ CHAT BUBBLE ============ */
const chatBubble = document.getElementById('chatBubble');
const chatTextEl = document.getElementById('chatText');

export function setChat(txt, doSpeak = true, onEnd = null) {
  const cleanText = String(txt)
    .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{200D}\u{FE0F}]+$/gu, '')
    .trim();
  if (chatTextEl) chatTextEl.textContent = cleanText;
  if (chatBubble) chatBubble.classList.add('show');

  if (doSpeak) {
    speak(cleanText, onEnd);
  } else if (onEnd) {
    onEnd();
  }
}

export function hideChat() {
  if (chatBubble) chatBubble.classList.remove('show');
}

document.getElementById('chatReplay')?.addEventListener('click', () => {
  if (chatTextEl) speak(chatTextEl.textContent);
});

/* ============ SOUND TOGGLE ============ */
document.getElementById('soundToggle')?.addEventListener('click', function () {
  state.sound = !state.sound;
  this.textContent = state.sound ? '🔊' : '🔇';
  saveState();
  if (!state.sound) {
    stopSpeech();
    stopBGM();
  } else if (currentGame) {
    startBGM(currentGame);
  }
});

/* ============ CONFETTI ============ */
export function confetti(n = 80) {
  const box = document.getElementById('confetti');
  if (!box) return;
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

/* ============ SUB-NAV HELPER (Nút Quay lại & Tiếp tục) ============ */
export function renderSubNav(containerId, { onBack, onNext, canBack = true, canNext = true, nextLabel = 'Tiếp tục ➡', backLabel = '⬅ Quay lại' }) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = `
    <button class="nav-subbtn nav-btn-back" id="${containerId}-back" ${!canBack ? 'disabled' : ''}>${backLabel}</button>
    <button class="nav-subbtn nav-btn-next" id="${containerId}-next" ${!canNext ? 'disabled' : ''}>${nextLabel}</button>
  `;

  if (canBack && onBack) {
    document.getElementById(`${containerId}-back`)?.addEventListener('click', () => {
      snd('click');
      onBack();
    });
  }
  if (canNext && onNext) {
    document.getElementById(`${containerId}-next`)?.addEventListener('click', () => {
      snd('click');
      onNext();
    });
  }
}

/* ============ SCREEN NAVIGATION ============ */
let currentGame = null;
const gameInits = {
  1: initG1,
  2: initG2,
  3: initG3,
  4: initG4,
  5: initG5,
  6: initG6,
  7: initG7
};

export function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function goHome() {
  stopSpeech();
  currentGame = null;
  hideChat();
  showScreen('screen-home');
  renderCards();
  setChat('Các dũng sĩ nhí muốn tiếp tục chinh phục thử thách nào tiếp theo?');
  startBGM('home');
}

export function startGame(n) {
  stopSpeech();
  currentGame = n;
  showScreen('screen-g' + n);
  if (gameInits[n]) gameInits[n]();
  startBGM(n);
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
    <h2>🎉 Hoàn thành Thử thách ${gid}! Tuyệt vời!</h2>
    <div class="result-msg">${message}</div>
    <div class="result-msg">Dũng sĩ nhận được <b>${stars} sao ⭐</b> trong thử thách này!<br>Tổng số sao đã đạt: <b>${totalStars()}</b></div>
    <div class="action-row">
      <button class="big-btn btn-green" id="resultHome">🏠 Về bản đồ</button>
      <button class="big-btn btn-orange" id="resultReplay">🔄 Chơi lại</button>
      ${gid < 7 ? `<button class="big-btn btn-purple" id="resultNext">▶ Thử thách tiếp (${gid + 1})</button>` : `<button class="big-btn btn-orange" id="resultOutro">🏆 Khám phá Lời kết Hồ Gươm</button>`}
    </div>
  `;
  showScreen('screen-result');
  confetti(120);
  snd('win');
  setChat(`Chúc mừng các dũng sĩ nhí! Thần Rùa Kim Quy rất tự hào về tinh thần trí tuệ và nỗ lực của con!`);
  stopBGM();

  document.getElementById('resultHome')?.addEventListener('click', goHome);
  document.getElementById('resultReplay')?.addEventListener('click', () => startGame(gid));
  const nextBtn = document.getElementById('resultNext');
  if (nextBtn) nextBtn.addEventListener('click', () => startGame(gid + 1));
  const outroBtn = document.getElementById('resultOutro');
  if (outroBtn) outroBtn.addEventListener('click', openOutroModal);
}

/* ============ 7 GAME METADATA (KHỚP BẢN ĐỒ) ============ */
const GAME_META = [
  { n: 1, ico: '🌲', name: '1. Khu vườn hình học', sub: 'Hình tròn, vuông, tam giác, chữ nhật', c: 'gc-1' },
  { n: 2, ico: '🧊', name: '2. Phép màu hình khối', sub: 'Khối lập phương & hộp chữ nhật 3D', c: 'gc-2' },
  { n: 3, ico: '🤖', name: '3. Robot dẫn đường', sub: 'Trên, dưới, trái, phải, giữa', c: 'gc-3' },
  { n: 4, ico: '📏', name: '4. Trạm đo lường kì diệu', sub: 'Đo độ dài bằng xăng-ti-mét (cm)', c: 'gc-4' },
  { n: 5, ico: '🕐', name: '5. Cuộc dạo chơi đồng hồ', sub: 'Xem giờ & các ngày trong tuần', c: 'gc-5' },
  { n: 6, ico: '🧩', name: '6. Ghép mảnh phép màu', sub: 'Sáng tạo ghép hình trên giấy trắng', c: 'gc-7' },
  { n: 7, ico: '🏆', name: '7. Chinh phục đỉnh cao', sub: 'Xếp tháp gạch 5 tầng & đếm lâu đài', c: 'gc-8' },
];

function renderCards() {
  const g = document.getElementById('gameGrid');
  if (!g) return;
  g.innerHTML = '';
  GAME_META.forEach((m) => {
    const d = document.createElement('div');
    d.className = 'game-card ' + m.c;

    let starsText = '';
    if (completed(m.n)) {
      const s = Math.min(state.stars[m.n], 5);
      for (let i = 0; i < s; i++) starsText += '⭐';
    } else {
      starsText = '✨ Bắt đầu!';
    }

    d.innerHTML = `
      <div class="card-emoji">${m.ico}</div>
      <div class="card-name">${m.name}</div>
      <div class="card-desc">${m.sub}</div>
      <div class="card-stars">${starsText}</div>
    `;
    d.addEventListener('click', () => {
      snd('click');
      startGame(m.n);
    });
    g.appendChild(d);
  });
}

/* ============ MODAL MỞ ĐẦU & KẾT THÚC ============ */
const modalIntro = document.getElementById('modalIntro');
const modalOutro = document.getElementById('modalOutro');

export function openIntroModal() {
  if (modalIntro) modalIntro.classList.add('show');
  playAudioFile('/audio/intro.mp3');
}

export function closeIntroModal() {
  if (modalIntro) modalIntro.classList.remove('show');
  stopSpeech();
}

export function openOutroModal() {
  if (modalOutro) modalOutro.classList.add('show');
  confetti(100);
  playAudioFile('/audio/outro.mp3');
}

export function closeOutroModal() {
  if (modalOutro) modalOutro.classList.remove('show');
  stopSpeech();
}

// Gắn sự kiện modal mở đầu
document.getElementById('btnOpenIntro')?.addEventListener('click', openIntroModal);
document.getElementById('heroIntroBtn')?.addEventListener('click', openIntroModal);
document.getElementById('closeIntroBtn')?.addEventListener('click', closeIntroModal);
document.getElementById('playIntroAudioBtn')?.addEventListener('click', () => playAudioFile('/audio/intro.mp3'));
document.getElementById('startJourneyBtn')?.addEventListener('click', () => {
  closeIntroModal();
  setChat('Hành trình đã bắt đầu! Con hãy chọn một trong 7 thử thách kì diệu nhé!');
});

// Gắn sự kiện modal kết thúc
document.getElementById('btnOpenOutro')?.addEventListener('click', openOutroModal);
document.getElementById('closeOutroBtn')?.addEventListener('click', closeOutroModal);
document.getElementById('playOutroAudioBtn')?.addEventListener('click', () => playAudioFile('/audio/outro.mp3'));
document.getElementById('outroHomeBtn')?.addEventListener('click', () => {
  closeOutroModal();
  goHome();
});

// Quay về trang chủ từ Brand
document.getElementById('brandHome')?.addEventListener('click', goHome);

// Nút quay lại từ các Game screen
for (let i = 1; i <= 7; i++) {
  document.getElementById('backBtn' + i)?.addEventListener('click', goHome);
  // Gắn sự kiện Gợi ý cách chơi
  const guideBtn = document.getElementById('guideBtn' + i);
  if (guideBtn) {
    guideBtn.addEventListener('click', () => {
      snd('click');
      playAudioFile(`/audio/guide-g${i}.mp3`);
    });
  }
}
document.getElementById('backBtnResult')?.addEventListener('click', goHome);

/* ============ NOTE TOGGLE ============ */
document.getElementById('noteToggle')?.addEventListener('click', () => {
  document.getElementById('notePanel')?.classList.toggle('show');
});

/* ============ FLOATING PARTICLES ============ */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
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

// Chào mừng khi mở ứng dụng
setTimeout(() => {
  if (state.sound) {
    setChat('Chào các dũng sĩ nhí! Thần Rùa Kim Quy đã sẵn sàng cùng con khám phá Vương quốc Toán học!');
  }
}, 800);
