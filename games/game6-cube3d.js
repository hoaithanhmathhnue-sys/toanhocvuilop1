/* ================================================================
   GAME 6: KHỐI LẬP PHƯƠNG THẦN KỲ (Bài 15)
   Three.js 3D cube — xoay chuột tự do, 6 mặt màu, đếm mặt, khai triển
   Theo hướng dẫn SKILL-MINH HOA-BAI-TAP + SKILL-MO-PHONG
   Pattern: Trải nghiệm → Biểu đạt → Kiểm chứng
   ================================================================ */
import { setChat, snd, makePills, showResult, confetti } from '../main.js';

/* ============ FACE DATA ============ */
const FACES = [
  { key: 'front',  name: 'Mặt trước',     color: '#ff5555', hex: 0xff5555, icon: '🌟', colorName: 'đỏ' },
  { key: 'back',   name: 'Mặt sau',       color: '#c084fc', hex: 0xc084fc, icon: '🎈', colorName: 'tím' },
  { key: 'top',    name: 'Mặt trên',      color: '#60a5fa', hex: 0x60a5fa, icon: '☀️', colorName: 'xanh lam' },
  { key: 'bottom', name: 'Mặt dưới',      color: '#fb923c', hex: 0xfb923c, icon: '🍂', colorName: 'cam' },
  { key: 'right',  name: 'Mặt bên phải',  color: '#fde047', hex: 0xfde047, icon: '⭐', colorName: 'vàng' },
  { key: 'left',   name: 'Mặt bên trái',  color: '#4ade80', hex: 0x4ade80, icon: '🍀', colorName: 'xanh lá' }
];

let phase = 'explore'; // explore | net | challenge
let chalQ = 0, attempts = 0, earnedStars = {};
let threeScene = null, threeCamera = null, threeRenderer = null, cubeMesh = null, controls = null;
let animId = null;

const CHALLENGE_QUESTIONS = [
  {
    q: 'Xoay mặt đỏ sang bên trái thì em sẽ nhìn thấy màu gì?',
    ansIdx: 4, // màu vàng
    hint: 'Mặt đỏ ở phía trước. Con dùng chuột xoay khối sang trái xem mặt bên phải (vàng) sẽ chạy ra đâu nhé!'
  },
  {
    q: 'Xoay mặt trái sang phải thì em thấy màu gì?',
    ansIdx: 1, // màu tím
    hint: 'Mặt trái là mặt màu xanh lá. Con hãy dùng chuột xoay khối 3D để xem mặt phía sau (tím) sẽ xuất hiện ở đâu nhé!'
  },
  {
    q: 'Xoay mặt màu vàng xuống thì em thấy màu gì?',
    ansIdx: 2, // màu xanh lam
    hint: 'Mặt vàng ở bên phải. Con dùng chuột xoay mặt vàng xuống dưới xem mặt màu xanh lam ở trên chạy ra đâu nhé!'
  },
  {
    q: 'Xoay mặt màu xanh lá cây lên thì em thấy màu gì?',
    ansIdx: 3, // màu cam
    hint: 'Mặt xanh lá cây ở bên trái. Con dùng chuột xoay mặt xanh lá cây lên trên xem mặt màu cam ở dưới hiện ra nhé!'
  }
];

function shuffle(a) { const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; }

/* ============ THREE.JS CUBE ============ */
function createThreeCube(container) {
  // Cleanup
  destroyThree();

  const w = Math.min(container.clientWidth, 360);
  const h = Math.min(w, 320);

  // Scene
  threeScene = new THREE.Scene();
  threeScene.background = new THREE.Color(0xffffff);

  // Camera
  threeCamera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
  threeCamera.position.set(2.8, 2.2, 3.5);
  threeCamera.lookAt(0, 0, 0);

  // Renderer
  threeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  threeRenderer.setSize(w, h);
  threeRenderer.setPixelRatio(window.devicePixelRatio);
  threeRenderer.domElement.style.borderRadius = '20px';
  threeRenderer.domElement.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)';
  threeRenderer.domElement.style.cursor = 'grab';
  container.appendChild(threeRenderer.domElement);

  // Lighting — tối ưu cho nền trắng
  const ambient = new THREE.AmbientLight(0xffffff, 0.75);
  threeScene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
  dirLight.position.set(5, 8, 6);
  threeScene.add(dirLight);
  const pointLight = new THREE.PointLight(0xffd166, 0.3, 20);
  pointLight.position.set(-3, 3, 4);
  threeScene.add(pointLight);

  // Grid — phù hợp nền trắng
  const grid = new THREE.GridHelper(6, 6, 0xd1d5db, 0xe5e7eb);
  grid.position.y = -1.05;
  threeScene.add(grid);

  // Cube — 6 faces, each a different material
  const size = 2;
  const geometry = new THREE.BoxGeometry(size, size, size);
  const materials = FACES.map(f =>
    new THREE.MeshPhongMaterial({
      color: f.hex,
      transparent: true,
      opacity: 0.95,
      shininess: 120,
      specular: 0x444444
    })
  );
  // Three.js box face order: +X(right), -X(left), +Y(top), -Y(bottom), +Z(front), -Z(back)
  // Reorder materials: right=4, left=5, top=2, bottom=3, front=0, back=1
  const orderedMats = [materials[4], materials[5], materials[2], materials[3], materials[0], materials[1]];
  cubeMesh = new THREE.Mesh(geometry, orderedMats);
  threeScene.add(cubeMesh);

  // Edge wireframe
  const edges = new THREE.EdgesGeometry(geometry);
  const edgeMat = new THREE.LineBasicMaterial({ color: 0x333333, linewidth: 2 });
  const wireframe = new THREE.LineSegments(edges, edgeMat);
  cubeMesh.add(wireframe);

  // Face labels (sprites) — icon + tên mặt
  const labelData = [
    { text: '🌟', name: 'TRƯỚC', pos: [0, 0, 1.08] },
    { text: '🎈', name: 'SAU',   pos: [0, 0, -1.08] },
    { text: '☀️', name: 'TRÊN',  pos: [0, 1.08, 0] },
    { text: '🍂', name: 'DƯỚI', pos: [0, -1.08, 0] },
    { text: '⭐', name: 'PHẢI', pos: [1.08, 0, 0] },
    { text: '🍀', name: 'TRÁI', pos: [-1.08, 0, 0] }
  ];
  labelData.forEach(l => {
    const sprite = createSpriteLabel(l.text, l.name);
    sprite.position.set(...l.pos);
    cubeMesh.add(sprite);
  });

  // OrbitControls — Luôn cho phép xoay tự do để học sinh quan sát!
  controls = new THREE.OrbitControls(threeCamera, threeRenderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enableZoom = true;
  controls.minDistance = 3;
  controls.maxDistance = 10;
  controls.enablePan = false;
  controls.enableRotate = true; // Cho phép xoay tự do
  controls.autoRotate = false;
  controls.autoRotateSpeed = 2;

  // Animate
  function animate() {
    animId = requestAnimationFrame(animate);
    controls.update();
    threeRenderer.render(threeScene, threeCamera);
  }
  animate();

  if (phase === 'explore') {
    controls.autoRotate = true;
  }
}

function createSpriteLabel(icon, name) {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  // Icon
  ctx.font = '80px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(icon, 128, name ? 90 : 128);
  // Face name text
  if (name) {
    ctx.font = 'bold 42px sans-serif';
    ctx.fillStyle = '#333';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 6;
    ctx.strokeText(name, 128, 185);
    ctx.fillText(name, 128, 185);
  }
  const texture = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(0.9, 0.9, 0.9);
  return sprite;
}

function destroyThree() {
  if (animId) { cancelAnimationFrame(animId); animId = null; }
  if (controls) { controls.dispose(); controls = null; }
  if (threeRenderer) {
    threeRenderer.dispose();
    if (threeRenderer.domElement && threeRenderer.domElement.parentNode) {
      threeRenderer.domElement.parentNode.removeChild(threeRenderer.domElement);
    }
    threeRenderer = null;
  }
  threeScene = null; threeCamera = null; cubeMesh = null;
}

/* ============ INIT ============ */
export function initG6() {
  phase = 'explore';
  earnedStars = {};
  loadExplore();
}

/* ============ EXPLORE PHASE ============ */
function loadExplore() {
  phase = 'explore';
  makePills('g6pills', 3, 1, []);

  const a = document.getElementById('g6area');
  a.innerHTML = `
    <div class="prompt-box">🧊 Đây là <b>Khối Lập Phương</b>! Con hãy dùng chuột/ngón tay xoay khối và quan sát 6 mặt nhé!</div>
    <div class="g6-layout">
      <div class="g6-center">
        <div id="g6threeContainer" style="width:100%;min-height:280px;display:flex;justify-content:center;align-items:center"></div>
        <div class="face-legend">
          ${FACES.map(f => `<span class="face-tag" style="background:${f.color}">${f.icon} ${f.colorName}</span>`).join('')}
        </div>
      </div>
      <div class="g6-controls">
        <div class="info-card6">
          <div class="info-title6">📋 Đặc điểm Khối Lập Phương</div>
          <div class="info-item6">🔢 <b>6</b> mặt — đều là hình vuông bằng nhau</div>
          <div class="info-item6">🔁 Mặt đỏ 🌟 ↔ Mặt tím 🎈</div>
          <div class="info-item6">🔁 Mặt xanh ☀️ ↔ Mặt cam 🍂</div>
          <div class="info-item6">🔁 Mặt vàng ⭐ ↔ Mặt xanh lá 🍀</div>
        </div>
        <div class="action-row" style="flex-direction:column;gap:8px;margin-top:12px">
          <button class="action-btn btn-green" id="g6net" style="width:100%">📦 Mở khối – khai triển</button>
          <button class="action-btn btn-pink" id="g6challenge" style="width:100%">🎮 Thử thách Cô Cú thông thái</button>
        </div>
      </div>
    </div>
  `;

  // Load Three.js from CDN then init
  loadThreeJS(() => {
    const container = document.getElementById('g6threeContainer');
    if (container) createThreeCube(container);
  });

  document.getElementById('g6net').addEventListener('click', loadNet);
  document.getElementById('g6challenge').addEventListener('click', startChallenge);

  setChat('Chào con! Đây là khối lập phương 3D! Con hãy dùng chuột kéo để xoay khối tự do, dùng cuộn chuột để zoom. Quan sát 6 mặt với 6 màu khác nhau nhé!');
}

/* ============ LOAD THREE.JS CDN ============ */
function loadThreeJS(cb) {
  if (window.THREE && window.THREE.OrbitControls) { cb(); return; }

  const loadScript = (src) => new Promise(resolve => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = resolve;
    document.head.appendChild(s);
  });

  loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js')
    .then(() => loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js'))
    .then(cb);
}

/* ============ NET (KHAI TRIỂN) ============ */
function loadNet() {
  destroyThree();
  phase = 'net';
  makePills('g6pills', 3, 2, [1]);

  const a = document.getElementById('g6area');
  a.innerHTML = `
    <div class="prompt-box">📦 Mở khối lập phương ra, con sẽ thấy <b>6 mặt đều là hình vuông</b>!</div>
    <div class="net-cross">
      <div class="net-row">
        <div class="net-empty"></div>
        <div class="net-sq" style="background:#60a5fa">☀️<br><small>Trên</small></div>
        <div class="net-empty"></div>
        <div class="net-empty"></div>
      </div>
      <div class="net-row">
        <div class="net-sq" style="background:#4ade80;color:#052e16">🍀<br><small>Trái</small></div>
        <div class="net-sq" style="background:#ff5555">🌟<br><small>Trước</small></div>
        <div class="net-sq" style="background:#fde047;color:#5b4a00">⭐<br><small>Phải</small></div>
        <div class="net-sq" style="background:#c084fc">🎈<br><small>Sau</small></div>
      </div>
      <div class="net-row">
        <div class="net-empty"></div>
        <div class="net-sq" style="background:#fb923c">🍂<br><small>Dưới</small></div>
        <div class="net-empty"></div>
        <div class="net-empty"></div>
      </div>
    </div>
    <div class="prompt-box" style="margin-top:16px">❓ Khối lập phương có bao nhiêu mặt?</div>
    <div class="choice-pad" id="g6netQ"></div>
    <div id="g6netFb" style="margin-top:8px"></div>
  `;

  const pad = document.getElementById('g6netQ');
  shuffle([4, 6, 8]).forEach(v => {
    const b = document.createElement('button');
    b.className = 'num-choice';
    b.textContent = v + ' mặt';
    b.addEventListener('click', () => {
      if (v === 6) {
        b.classList.add('correct');
        snd('correct');
        pad.querySelectorAll('.num-choice').forEach(x => x.disabled = true);
        document.getElementById('g6netFb').innerHTML = `<div style="background:#d1fae5;border-radius:16px;padding:14px;font-weight:700;color:#065f46;text-align:center">✅ Đúng! 6 mặt đều là hình vuông bằng nhau!</div>`;
        setChat('Chính xác! Khối lập phương có 6 mặt. Tất cả 6 mặt đều là hình vuông bằng nhau!');
        setTimeout(() => {
          const a2 = document.getElementById('g6area');
          a2.innerHTML += `<div class="action-row"><button class="action-btn btn-purple" id="g6backExplore">🧊 Xoay khối 3D</button><button class="action-btn btn-pink" id="g6toChal">🎮 Thử thách</button></div>`;
          document.getElementById('g6backExplore').addEventListener('click', loadExplore);
          document.getElementById('g6toChal').addEventListener('click', startChallenge);
        }, 1500);
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 500);
        setChat('Chưa đúng! Con đếm lại: trước, sau, trên, dưới, trái, phải — đó là mấy mặt nhỉ?');
      }
    });
    pad.appendChild(b);
  });

  setChat('Mở khối ra, con thấy hình chữ thập với 6 ô vuông. Mỗi ô là một mặt. Con đếm xem có bao nhiêu mặt nhé!');
}

/* ============ CHALLENGE ============ */
function startChallenge() {
  destroyThree();
  phase = 'challenge';
  chalQ = 0;
  earnedStars = {};
  loadChalQ(0);
}

function loadChalQ(qi) {
  chalQ = qi;
  attempts = 0;
  makePills('g6pills', 4, qi + 1, Object.keys(earnedStars).map(Number));

  const cQ = CHALLENGE_QUESTIONS[qi];
  const a = document.getElementById('g6area');
  a.innerHTML = `
    <div class="prompt-box">🎮 Thử thách ${qi + 1}/4: <b>${cQ.q}</b></div>
    <div class="g6-layout">
      <div class="g6-center">
        <div id="g6threeContainer" style="width:100%;min-height:270px;display:flex;justify-content:center;align-items:center"></div>
        <div class="note-sm">🖐️ Con hãy kéo chuột để xoay khối 3D tự do và kiểm tra nhé!</div>
      </div>
      <div class="g6-controls">
        <div class="info-card6" style="background:linear-gradient(135deg,#fef3c7,#fde68a)">
          <div class="info-title6" style="color:#92400e">💡 Hướng dẫn xoay khối</div>
          <div style="font-size:0.9rem;color:#78350f;font-weight:600">
            Dùng chuột/ngón tay xoay khối 3D theo câu hỏi để tìm mặt xuất hiện nhé!
          </div>
        </div>
        <div id="g6chalQArea" style="margin-top:12px"></div>
      </div>
    </div>
  `;

  // Init Three.js 3D cube with free rotation enabled
  loadThreeJS(() => {
    const container = document.getElementById('g6threeContainer');
    if (container) {
      createThreeCube(container);
      if (controls) {
        controls.autoRotate = false;
        controls.enableRotate = true; // Cho phép xoay tự do
      }
    }
  });

  // Prepare 4 choices: 1 correct + 3 random wrong options
  const correctIdx = cQ.ansIdx;
  const allIdx = [0, 1, 2, 3, 4, 5];
  const wrongIdxs = shuffle(allIdx.filter(i => i !== correctIdx));
  const opts = shuffle([correctIdx, wrongIdxs[0], wrongIdxs[1], wrongIdxs[2]]);

  const qArea = document.getElementById('g6chalQArea');
  qArea.innerHTML = `
    <div class="prompt-box" style="font-size:0.95rem">❓ Hãy chọn màu con nhìn thấy:</div>
    <div class="reason-grid" id="g6choices"></div>
    <div id="g6chalFb" style="margin-top:8px"></div>
  `;

  const grid = document.getElementById('g6choices');
  opts.forEach(idx => {
    const f = FACES[idx];
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.style.background = f.color;
    b.style.color = f.colorName === 'vàng' ? '#5b4a00' : '#fff';
    b.style.borderColor = f.color;
    b.style.minWidth = '110px';
    b.style.textAlign = 'center';
    b.innerHTML = `${f.icon} Màu ${f.colorName}`;
    b.addEventListener('click', () => handleChalAnswer(idx, correctIdx, qi, b));
    grid.appendChild(b);
  });

  setChat(`${cQ.q} Con hãy thử xoay khối 3D để kiểm tra rồi chọn đáp án nhé!`);
}

function handleChalAnswer(chosenIdx, correctIdx, qi, btn) {
  const allBtns = document.querySelectorAll('#g6choices .reason-btn');
  const fb = document.getElementById('g6chalFb');
  const correctFace = FACES[correctIdx];
  const cQ = CHALLENGE_QUESTIONS[qi];

  if (chosenIdx === correctIdx) {
    earnedStars[qi] = true;
    btn.style.outline = '4px solid #22c55e';
    snd('correct');
    confetti(30);
    allBtns.forEach(x => x.disabled = true);
    fb.innerHTML = `<div style="background:#d1fae5;border-radius:14px;padding:12px;font-weight:700;color:#065f46;text-align:center">✅ Chính xác! Giỏi lắm! 🌟</div>`;
    setChat('Chính xác! Con quan sát khối 3D rất tốt. Giỏi lắm!', true, () => {
      setTimeout(() => {
        if (qi + 1 < CHALLENGE_QUESTIONS.length) {
          loadChalQ(qi + 1);
        } else {
          destroyThree();
          showResult(6, 4, 'Con đã hoàn thành xuất sắc Thử thách Khối Lập Phương! Cô Cú thông thái rất tự hào! 🏆');
        }
      }, 1200);
    });
  } else {
    attempts++;
    snd('wrong');
    btn.style.opacity = '0.3';
    btn.disabled = true;
    if (attempts >= 2) {
      allBtns.forEach(x => x.disabled = true);
      fb.innerHTML = `<div style="background:#fef3c7;border-radius:14px;padding:12px;font-weight:700;color:#92400e;text-align:center">💡 Đáp án đúng: ${correctFace.icon} Màu ${correctFace.colorName}</div>`;
      setChat(`Đáp án đúng là màu ${correctFace.colorName}. Con tiếp tục thử thách tiếp theo nhé!`, true, () => {
        setTimeout(() => {
          if (qi + 1 < CHALLENGE_QUESTIONS.length) {
            loadChalQ(qi + 1);
          } else {
            destroyThree();
            const stars = Object.keys(earnedStars).length;
            showResult(6, Math.max(1, stars), 'Con đã hoàn thành Thử thách Khối Lập Phương! 🏆');
          }
        }, 1500);
      });
    } else {
      setChat(`${cQ.hint} Hãy thử chọn lại lần nữa xem nào!`);
    }
  }
}
