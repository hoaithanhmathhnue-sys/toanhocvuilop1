/* ================================================================
   GAME 6: KHỐI LẬP PHƯƠNG THẦN KỲ (Bài 15)
   Three.js 3D cube — xoay chuột, 6 mặt màu, đếm mặt, khai triển
   Theo hướng dẫn SKILL-MINH HOA-BAI-TAP + SKILL-MO-PHONG
   Pattern: Trải nghiệm → Biểu đạt → Kiểm chứng
   ================================================================ */
import { setChat, snd, makePills, showResult, confetti } from '../main.js';

/* ============ FACE DATA ============ */
const FACES = [
  { key: 'front',  name: 'Mặt trước',     color: '#ff5555', hex: 0xff5555, icon: '🌟', colorName: 'đỏ' },
  { key: 'back',   name: 'Mặt sau',       color: '#c084fc', hex: 0xc084fc, icon: '🎈', colorName: 'tím' },
  { key: 'top',    name: 'Mặt trên',      color: '#60a5fa', hex: 0x60a5fa, icon: '☀️', colorName: 'xanh' },
  { key: 'bottom', name: 'Mặt dưới',      color: '#fb923c', hex: 0xfb923c, icon: '🍂', colorName: 'cam' },
  { key: 'right',  name: 'Mặt bên phải',  color: '#fde047', hex: 0xfde047, icon: '⭐', colorName: 'vàng' },
  { key: 'left',   name: 'Mặt bên trái',  color: '#4ade80', hex: 0x4ade80, icon: '🍀', colorName: 'xanh lá' }
];

let phase = 'explore'; // explore | net | challenge
let chalRound = 0, chalQ = 0, attempts = 0, earnedStars = {};
let threeScene = null, threeCamera = null, threeRenderer = null, cubeMesh = null, controls = null;
let animId = null;

const ROUNDS = [
  { label: 'SANG PHẢI 1 lần', qs: ['Mặt trước bây giờ là màu gì?', 'Mặt bên phải bây giờ là màu gì?', 'Mặt trên vẫn là màu gì?'] },
  { label: 'LÊN 1 lần', qs: ['Mặt trước bây giờ là màu gì?', 'Mặt trên bây giờ là màu gì?', 'Mặt bên phải vẫn là màu gì?'] },
  { label: 'SANG TRÁI 1 lần', qs: ['Mặt trước bây giờ là màu gì?', 'Mặt bên trái bây giờ là màu gì?', 'Mặt trên vẫn là màu gì?'] },
  { label: 'XUỐNG 1 lần', qs: ['Mặt trước bây giờ là màu gì?', 'Mặt dưới bây giờ là màu gì?', 'Mặt bên phải vẫn là màu gì?'] }
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

  // Face labels (sprites)
  const labelData = [
    { text: '🌟', pos: [0, 0, 1.08] },   // front
    { text: '🎈', pos: [0, 0, -1.08] },  // back
    { text: '☀️', pos: [0, 1.08, 0] },   // top
    { text: '🍂', pos: [0, -1.08, 0] },  // bottom
    { text: '⭐', pos: [1.08, 0, 0] },   // right
    { text: '🍀', pos: [-1.08, 0, 0] }   // left
  ];
  labelData.forEach(l => {
    const sprite = createSpriteLabel(l.text);
    sprite.position.set(...l.pos);
    cubeMesh.add(sprite);
  });

  // OrbitControls
  controls = new THREE.OrbitControls(threeCamera, threeRenderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enableZoom = true;
  controls.minDistance = 3;
  controls.maxDistance = 10;
  controls.enablePan = false;
  controls.autoRotate = false;
  controls.autoRotateSpeed = 2;

  // Animate
  function animate() {
    animId = requestAnimationFrame(animate);
    controls.update();
    threeRenderer.render(threeScene, threeCamera);
  }
  animate();

  // Enable auto-rotate for explore mode
  if (phase === 'explore') {
    controls.autoRotate = true;
  }
}

function createSpriteLabel(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 128; canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.font = '64px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 64, 64);
  const texture = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(0.6, 0.6, 0.6);
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
          <div class="info-item6">🔁 Mặt vàng ⭐ ↔ Mặt hồng 🌸</div>
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

  setChat('Chào con! Đây là khối lập phương 3D! Con hãy dùng chuột kéo để xoay khối, dùng cuộn chuột để zoom. Quan sát 6 mặt với 6 màu khác nhau nhé!');
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
        <div class="net-sq" style="background:#3b82f6">☀️<br><small>Trên</small></div>
        <div class="net-empty"></div>
        <div class="net-empty"></div>
      </div>
      <div class="net-row">
        <div class="net-sq" style="background:#ec4899">🌸<br><small>Trái</small></div>
        <div class="net-sq" style="background:#ef4444">🌟<br><small>Trước</small></div>
        <div class="net-sq" style="background:#facc15;color:#5b4a00">⭐<br><small>Phải</small></div>
        <div class="net-sq" style="background:#a855f7">🎈<br><small>Sau</small></div>
      </div>
      <div class="net-row">
        <div class="net-empty"></div>
        <div class="net-sq" style="background:#f97316">🍂<br><small>Dưới</small></div>
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
  chalRound = 0;
  earnedStars = {};
  loadChalRound(0);
}

function loadChalRound(ri) {
  chalRound = ri; chalQ = 0; attempts = 0;
  makePills('g6pills', 4, ri + 1, Object.keys(earnedStars).map(Number));

  const r = ROUNDS[ri];
  const a = document.getElementById('g6area');
  a.innerHTML = `
    <div class="prompt-box">🎮 Thử thách ${ri + 1}/4: Con xoay khối trong đầu nhé — Nếu quay <b>${r.label}</b> thì...</div>
    <div class="g6-layout">
      <div class="g6-center">
        <div id="g6threeContainer" style="width:100%;min-height:260px;display:flex;justify-content:center;align-items:center"></div>
        <div class="note-sm">👆 Ban đầu: Trước=đỏ🌟, Trên=xanh☀️, Phải=vàng⭐, Trái=xanh lá🍀</div>
      </div>
      <div class="g6-controls">
        <div class="info-card6" style="background:linear-gradient(135deg,#fef3c7,#fde68a)">
          <div class="info-title6" style="color:#92400e">🧠 Hãy tưởng tượng!</div>
          <div style="font-size:0.9rem;color:#78350f;font-weight:600">
            Nếu quay <b>${r.label}</b>:<br>
            Mặt nào sẽ ra trước?<br>
            Mặt nào vẫn giữ nguyên?
          </div>
        </div>
        <div id="g6chalQArea" style="margin-top:12px"></div>
      </div>
    </div>
  `;

  // Show static cube (initial position, no rotate)
  loadThreeJS(() => {
    const container = document.getElementById('g6threeContainer');
    if (container) {
      createThreeCube(container);
      if (controls) {
        controls.autoRotate = false;
        controls.enableRotate = true;
      }
    }
  });

  setTimeout(() => askChalQ(ri, 0), 800);
}

function askChalQ(ri, qi) {
  chalQ = qi; attempts = 0;
  const r = ROUNDS[ri];

  // Determine correct answers based on rotation
  const answers = getRotationAnswers(ri);
  const correctColor = answers[qi];

  const qArea = document.getElementById('g6chalQArea');
  const qText = r.qs[qi];

  // Build 4 color choices
  const allColors = FACES.map(f => f.colorName);
  let opts = [correctColor];
  const wrongs = shuffle(allColors.filter(c => c !== correctColor));
  opts.push(wrongs[0], wrongs[1]);
  opts = shuffle(opts);

  qArea.innerHTML = `
    <div class="prompt-box" style="font-size:0.95rem">❓ Câu ${qi+1}/3: ${qText}</div>
    <div class="reason-grid" id="g6choices"></div>
    <div id="g6chalFb" style="margin-top:8px"></div>
  `;

  const grid = document.getElementById('g6choices');
  opts.forEach(c => {
    const fData = FACES.find(f => f.colorName === c);
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.style.background = fData.color;
    b.style.color = c === 'vàng' ? '#5b4a00' : '#fff';
    b.style.borderColor = fData.color;
    b.style.minWidth = '100px';
    b.style.textAlign = 'center';
    b.innerHTML = `${fData.icon} Màu ${c}`;
    b.addEventListener('click', () => handleChalAnswer(c, correctColor, qi, b));
    grid.appendChild(b);
  });

  setChat(`${qText} Con nghĩ kỹ rồi chọn nhé!`);
}

function getRotationAnswers(ri) {
  // Returns [front, second-face, third-face] after one rotation
  // Initial: front=đỏ, back=tím, top=xanh, bottom=cam, right=vàng, left=xanh lá
  //
  // SANG PHẢI (Y+90°): front←left, right←front, back←right, left←back
  //   → front=xanh lá, right=đỏ, top=xanh (không đổi)
  //
  // LÊN (X-90°): front←bottom, top←front, back←top, bottom←back
  //   → front=cam, top=đỏ, right=vàng (không đổi)
  //
  // SANG TRÁI (Y-90°): front←right, left←front, back←left, right←back
  //   → front=vàng, left=đỏ, top=xanh (không đổi)
  //
  // XUỐNG (X+90°): front←top, bottom←front, back←bottom, top←back
  //   → front=xanh, bottom=đỏ, right=vàng (không đổi)
  switch(ri) {
    case 0: return ['xanh lá', 'đỏ', 'xanh'];   // SANG PHẢI
    case 1: return ['cam', 'đỏ', 'vàng'];        // LÊN
    case 2: return ['vàng', 'đỏ', 'xanh'];       // SANG TRÁI
    case 3: return ['xanh', 'đỏ', 'vàng'];       // XUỐNG
    default: return ['đỏ', 'xanh', 'vàng'];
  }
}

function handleChalAnswer(chosen, correct, qi, btn) {
  const allBtns = document.querySelectorAll('#g6choices .reason-btn');
  const fb = document.getElementById('g6chalFb');

  if (chosen === correct) {
    earnedStars[`${chalRound}-${qi}`] = true;
    btn.style.outline = '4px solid #22c55e';
    snd('correct');
    confetti(30);
    allBtns.forEach(x => x.disabled = true);
    fb.innerHTML = `<div style="background:#d1fae5;border-radius:14px;padding:12px;font-weight:700;color:#065f46;text-align:center">✅ Chính xác! Giỏi lắm! 🌟</div>`;
    setChat('Chính xác! Mặt tiếp theo xuất hiện đúng như con tưởng tượng. Con giỏi quá! Bây giờ hãy nói cho bạn nghe vì sao con chọn màu này nhé!', true, () => {
      setTimeout(() => nextChalStep(), 800);
    });
  } else {
    attempts++;
    snd('wrong');
    btn.style.opacity = '0.3';
    btn.disabled = true;
    if (attempts >= 2) {
      allBtns.forEach(x => x.disabled = true);
      const correctFace = FACES.find(f => f.colorName === correct);
      fb.innerHTML = `<div style="background:#fef3c7;border-radius:14px;padding:12px;font-weight:700;color:#92400e;text-align:center">💡 Đáp án: ${correctFace.icon} Màu ${correct}</div>`;
      setChat(`Đáp án đúng là màu ${correct}. Con thử quan sát kỹ lại vị trí 6 mặt của khối lập phương nhé!`, true, () => {
        setTimeout(() => nextChalStep(), 800);
      });
    } else {
      setChat('Con thử nhìn kỹ khối này nhé: khi xoay theo hướng đó thì mặt nào sẽ xuất hiện ở phía trước? Hãy so sánh các màu và thử chọn lại lần nữa xem nào!');
    }
  }
}

function nextChalStep() {
  chalQ++;
  if (chalQ < 3) {
    askChalQ(chalRound, chalQ);
  } else if (chalRound + 1 < 4) {
    loadChalRound(chalRound + 1);
  } else {
    destroyThree();
    const stars = Object.keys(earnedStars).length;
    showResult(6, Math.min(4, Math.ceil(stars / 3)), 'Con đã hoàn thành Thử thách Khối Lập Phương! Cô Cú thông thái tự hào lắm! 🏆');
  }
}
