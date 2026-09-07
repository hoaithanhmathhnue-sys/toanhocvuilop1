/* ================================================================
   GAME 2: PHÉP MÀU HÌNH KHỐI (Gộp Lâu đài hình khối + Khối lập phương thần kì)
   1. Phân biệt khối lập phương & khối hộp chữ nhật
   2. Xoay quan sát khối 3D Three.js
   3. Khai triển mở bung các mặt (Bố cục ngang 2 cột theo ảnh minh họa)
   ================================================================ */
import { setChat, snd, makePills, showResult, confetti, renderSubNav } from '../main.js';

let g2 = {
  step: 1, // 1: Phân biệt khối | 2: Xoay khối 3D | 3: Mở bung khối | 4: Thử thách xoay mặt
  roundPart1: 1,
  chalQ: 0,
  done: []
};

/* ============ CSS 3D BLOCKS (PHẦN 1) ============ */
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

/* ============ THREE.JS SETUP (PHẦN 2 & 4) ============ */
let threeScene = null, threeCamera = null, threeRenderer = null, cubeMesh = null, controls = null, animId = null;

const FACES = [
  { key: 'front',  name: 'Mặt trước',    color: '#ff5555', hex: 0xff5555, icon: '🌟', colorName: 'đỏ' },
  { key: 'back',   name: 'Mặt sau',      color: '#c084fc', hex: 0xc084fc, icon: '🎈', colorName: 'tím' },
  { key: 'top',    name: 'Mặt trên',     color: '#60a5fa', hex: 0x60a5fa, icon: '☀️', colorName: 'xanh lam' },
  { key: 'bottom', name: 'Mặt dưới',     color: '#fb923c', hex: 0xfb923c, icon: '🍂', colorName: 'cam' },
  { key: 'right',  name: 'Mặt bên phải', color: '#fde047', hex: 0xfde047, icon: '⭐', colorName: 'vàng' },
  { key: 'left',   name: 'Mặt bên trái', color: '#4ade80', hex: 0x4ade80, icon: '🍀', colorName: 'xanh lá' }
];

const CHALLENGE_QUESTIONS = [
  {
    q: 'Xoay mặt đỏ sang bên trái thì em sẽ nhìn thấy màu gì?',
    ansIdx: 4, // màu vàng
    hint: 'Mặt đỏ ở phía trước. Con dùng chuột xoay khối sang trái xem mặt bên phải (vàng) sẽ chạy ra đâu nhé!'
  },
  {
    q: 'Xoay mặt trái sang phải thì em thấy màu gì?',
    ansIdx: 1, // màu tím
    hint: 'Mặt trái là mặt màu xanh lá. Dũng sĩ hãy xoay khối 3D để xem mặt phía sau (tím) sẽ xuất hiện ở đâu nhé!'
  }
];

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

function createThreeCube(container) {
  destroyThree();
  const w = Math.min(container.clientWidth || 320, 320);
  const h = 280;

  threeScene = new THREE.Scene();
  threeScene.background = new THREE.Color(0xffffff);

  threeCamera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
  threeCamera.position.set(2.8, 2.2, 3.5);
  threeCamera.lookAt(0, 0, 0);

  threeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  threeRenderer.setSize(w, h);
  threeRenderer.setPixelRatio(window.devicePixelRatio);
  threeRenderer.domElement.style.borderRadius = '16px';
  threeRenderer.domElement.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
  threeRenderer.domElement.style.cursor = 'grab';
  container.appendChild(threeRenderer.domElement);

  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  threeScene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
  dirLight.position.set(5, 8, 6);
  threeScene.add(dirLight);

  const grid = new THREE.GridHelper(6, 6, 0xd1d5db, 0xe5e7eb);
  grid.position.y = -1.05;
  threeScene.add(grid);

  const size = 2;
  const geometry = new THREE.BoxGeometry(size, size, size);
  const materials = FACES.map(f =>
    new THREE.MeshPhongMaterial({ color: f.hex, transparent: true, opacity: 0.95, shininess: 100 })
  );
  const orderedMats = [materials[4], materials[5], materials[2], materials[3], materials[0], materials[1]];
  cubeMesh = new THREE.Mesh(geometry, orderedMats);
  threeScene.add(cubeMesh);

  const edges = new THREE.EdgesGeometry(geometry);
  const edgeMat = new THREE.LineBasicMaterial({ color: 0x333333, linewidth: 2 });
  cubeMesh.add(new THREE.LineSegments(edges, edgeMat));

  controls = new THREE.OrbitControls(threeCamera, threeRenderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enableZoom = true;
  controls.enablePan = false;
  controls.enableRotate = true;

  function animate() {
    animId = requestAnimationFrame(animate);
    controls.update();
    threeRenderer.render(threeScene, threeCamera);
  }
  animate();
}

/* ============ MAIN CONTROLLER ============ */
export function initG2() {
  destroyThree();
  g2.step = 1;
  g2.roundPart1 = 1;
  g2.chalQ = 0;
  g2.done = [];
  loadStep(1);
}

function loadStep(step) {
  destroyThree();
  g2.step = step;
  makePills('g2pills', 4, step, g2.done);

  if (step === 1) loadPart1();
  else if (step === 2) loadPart2();
  else if (step === 3) loadPart3Net();
  else if (step === 4) loadPart4Challenge(0);
}

/* ---------- BƯỚC 1: PHÂN BIỆT KHỐI LẬP PHƯƠNG & HỘP CHỮ NHẬT ---------- */
function loadPart1() {
  const a = document.getElementById('g2area');
  const cubeFirst = g2.roundPart1 % 2 === 1;

  a.innerHTML = `
    <div class="prompt-box">🧊 Thử thách 2.1: Hãy quan sát và chọn <b>khối lập phương</b>!</div>
    <div class="blocks-stage" id="g2stage">
      <div class="block3d" id="b-left" style="cursor:pointer">
        ${cubeFirst ? render3DCube(110, 'Khối A') : render3DBox(150, 90, 70, 'Khối A')}
      </div>
      <div class="block3d" id="b-right" style="cursor:pointer">
        ${cubeFirst ? render3DBox(150, 90, 70, 'Khối B') : render3DCube(110, 'Khối B')}
      </div>
    </div>
    <div id="g2ReasonArea"></div>
    <div class="note-sm">💡 Khối lập phương có 6 mặt đều là hình vuông bằng nhau</div>
  `;

  document.getElementById('b-left').addEventListener('click', () => pickBlock('left', cubeFirst ? 'cube' : 'box'));
  document.getElementById('b-right').addEventListener('click', () => pickBlock('right', cubeFirst ? 'box' : 'cube'));

  setChat('Hãy quan sát kỹ hai khối và bấm vào khối lập phương nhé! Khối lập phương có 6 mặt đều là hình vuông bằng nhau đó!');

  renderSubNav('navRow2', {
    onBack: null,
    onNext: () => loadStep(2),
    canBack: false,
    canNext: true,
    nextLabel: 'Sang Xoay khối 3D ➡'
  });
}

function pickBlock(side, type) {
  if (type === 'cube') {
    snd('correct');
    document.getElementById('b-' + side)?.classList.add('done');
    document.querySelectorAll('#g2stage .block3d').forEach(x => { x.style.pointerEvents = 'none'; });
    askBlockReason();
  } else {
    snd('wrong');
    const el = document.getElementById('b-' + side);
    el?.classList.add('wrongsel');
    setTimeout(() => el?.classList.remove('wrongsel'), 600);
    setChat('Con thử nhìn kỹ khối này nhé: các mặt của nó là hình gì, có bằng nhau không? Hãy so sánh với khối lập phương 6 mặt vuông bằng nhau để chọn lại nhé!');
  }
}

function askBlockReason() {
  setChat('Con chọn chính xác rồi! Giờ Thần Kim Quy hỏi: Khối lập phương có mấy mặt hình vuông?');
  const ra = document.getElementById('g2ReasonArea');
  ra.innerHTML = `
    <div class="prompt-box" style="margin-top:14px">❓ Khối lập phương có mấy mặt hình vuông?</div>
    <div class="reason-grid" id="g2reasons"></div>
  `;

  // SỬA LỖI LẶP CÂU 2 THEO DOCX: Khối lập phương có mấy mặt hình vuông? -> Trả lời: Có 6 mặt hình vuông bằng nhau
  const opts = [
    { t: 'Có 6 mặt hình vuông bằng nhau', good: true },
    { t: 'Có 4 mặt hình vuông và 2 mặt chữ nhật', good: false },
    { t: 'Chỉ có 3 mặt hình vuông', good: false }
  ];

  const rs = document.getElementById('g2reasons');
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.textContent = o.t;
    b.addEventListener('click', () => {
      if (o.good) {
        b.classList.add('correct');
        snd('correct');
        rs.querySelectorAll('.reason-btn').forEach(x => x.disabled = true);
        confetti(30);
        g2.done.push(1);
        setChat('Chính xác! Khối lập phương có 6 mặt hình vuông bằng nhau. Dũng sĩ rất xuất sắc!', true, () => {
          setTimeout(() => loadStep(2), 1200);
        });
      } else {
        b.classList.add('wrong');
        snd('wrong');
        setTimeout(() => b.classList.remove('wrong'), 600);
        setChat('Chưa đúng rồi! Con nhớ lại xem: trên, dưới, trước, sau, trái, phải — tất cả có mấy mặt vuông bằng nhau?');
      }
    });
    rs.appendChild(b);
  });
}

/* ---------- BƯỚC 2: XOAY KHỐI 3D TỰ DO ---------- */
function loadPart2() {
  const a = document.getElementById('g2area');
  a.innerHTML = `
    <div class="prompt-box">🧊 Thử thách 2.2: Con hãy dùng chuột/ngón tay xoay khối 3D để quan sát 6 mặt nhé!</div>
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;align-items:center;margin:14px 0">
      <div id="g2ThreeWrap" style="width:320px;height:280px;display:flex;justify-content:center;align-items:center"></div>
      <div style="flex:1 1 260px;max-width:360px">
        <div class="face-legend" style="margin-bottom:12px">
          ${FACES.map(f => `<span class="face-tag" style="background:${f.color}">${f.icon} ${f.colorName}</span>`).join('')}
        </div>
        <div class="prompt-box" style="font-size:0.95rem;background:#fef3c7;border-color:#f59e0b;color:#92400e">
          🖐️ <b>Cách thực hành:</b> Kéo chuột để xoay khối lập phương sang trái, sang phải, lên trên, xuống dưới!
        </div>
      </div>
    </div>
  `;

  loadThreeJS(() => {
    const w = document.getElementById('g2ThreeWrap');
    if (w) createThreeCube(w);
  });

  setChat('Con hãy dùng chuột xoay khối lập phương 3D tự do để khám phá đủ 6 mặt với 6 màu sắc rực rỡ nhé!');

  renderSubNav('navRow2', {
    onBack: () => loadStep(1),
    onNext: () => loadStep(3),
    canBack: true,
    canNext: true,
    nextLabel: 'Mở bung các mặt ➡'
  });
}

/* ---------- BƯỚC 3: MỞ BUNG CÁC MẶT (BỐ CỤC NGANG 2 CỘT THEO DOCX) ---------- */
function loadPart3Net() {
  const a = document.getElementById('g2area');
  a.innerHTML = `
    <div class="prompt-box">📦 Thử thách 2.3: Mở bung khối lập phương ra, con sẽ thấy 6 mặt đều là hình vuông!</div>
    <div class="cube-net-split">
      <!-- Cột trái: Khối mở bung -->
      <div class="cube-net-left">
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
      </div>
      <!-- Cột phải: Câu hỏi & các chữ đáp án xếp luôn bên cạnh -->
      <div class="cube-net-right">
        <div class="prompt-box" style="font-size:1.15rem;font-weight:800;color:#78350f">
          ❓ Khối lập phương có bao nhiêu mặt?
        </div>
        <div class="choice-pad" id="g2NetChoices" style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="num-choice" data-v="4" style="font-size:1.1rem;padding:12px 22px;border-radius:var(--radius-xl)">4 mặt</button>
          <button class="num-choice" data-v="8" style="font-size:1.1rem;padding:12px 22px;border-radius:var(--radius-xl)">8 mặt</button>
          <button class="num-choice" data-v="6" style="font-size:1.1rem;padding:12px 22px;border-radius:var(--radius-xl);background:#22c55e;color:#fff">6 mặt</button>
        </div>
        <div id="g2NetFb"></div>
      </div>
    </div>
  `;

  const pad = document.getElementById('g2NetChoices');
  pad.querySelectorAll('.num-choice').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = Number(btn.dataset.v);
      if (v === 6) {
        btn.classList.add('correct');
        snd('correct');
        confetti(40);
        pad.querySelectorAll('.num-choice').forEach(x => x.disabled = true);
        document.getElementById('g2NetFb').innerHTML = `
          <div style="background:#d1fae5;border-radius:14px;padding:12px;font-weight:800;color:#065f46;text-align:center">
            ✅ Đúng rồi! Khối lập phương có đúng 6 mặt hình vuông bằng nhau!
          </div>
        `;
        setChat('Chính xác! Khi mở bung ra, hình chữ thập có đúng 6 mặt hình vuông bằng nhau!', true, () => {
          setTimeout(() => loadStep(4), 1400);
        });
      } else {
        btn.classList.add('wrong');
        snd('wrong');
        setTimeout(() => btn.classList.remove('wrong'), 500);
        setChat('Chưa đúng rồi! Con đếm lại các ô vuông trên hình chữ thập bên trái xem có bao nhiêu ô nhé!');
      }
    });
  });

  setChat('Khối lập phương mở bung ra thành hình chữ thập. Con hãy đếm xem có tất cả bao nhiêu mặt vuông nhé!');

  renderSubNav('navRow2', {
    onBack: () => loadStep(2),
    onNext: () => loadStep(4),
    canBack: true,
    canNext: true,
    nextLabel: 'Thử thách xoay mặt ➡'
  });
}

/* ---------- BƯỚC 4: THỬ THÁCH XOAY MẶT KHỐI 3D ---------- */
function loadPart4Challenge(qi) {
  g2.chalQ = qi;
  const cQ = CHALLENGE_QUESTIONS[qi];
  const a = document.getElementById('g2area');

  a.innerHTML = `
    <div class="prompt-box">🎮 Thử thách 2.4 (Câu ${qi + 1}/2): <b>${cQ.q}</b></div>
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;align-items:center;margin:12px 0">
      <div id="g2ThreeWrapChal" style="width:320px;height:270px;display:flex;justify-content:center;align-items:center"></div>
      <div style="flex:1 1 300px;max-width:380px">
        <div class="prompt-box" style="font-size:0.95rem">❓ Hãy chọn màu con nhìn thấy:</div>
        <div class="reason-grid" id="g2ChalChoices"></div>
        <div id="g2ChalFb" style="margin-top:10px"></div>
      </div>
    </div>
  `;

  loadThreeJS(() => {
    const w = document.getElementById('g2ThreeWrapChal');
    if (w) createThreeCube(w);
  });

  const correctIdx = cQ.ansIdx;
  const opts = [correctIdx, (correctIdx + 1) % 6, (correctIdx + 3) % 6].sort(() => Math.random() - 0.5);

  const grid = document.getElementById('g2ChalChoices');
  opts.forEach(idx => {
    const f = FACES[idx];
    const b = document.createElement('button');
    b.className = 'reason-btn';
    b.style.background = f.color;
    b.style.color = f.colorName === 'vàng' ? '#5b4a00' : '#fff';
    b.style.borderColor = f.color;
    b.innerHTML = `${f.icon} Màu ${f.colorName}`;
    b.addEventListener('click', () => {
      if (idx === correctIdx) {
        b.style.outline = '4px solid #22c55e';
        snd('correct');
        confetti(30);
        grid.querySelectorAll('.reason-btn').forEach(x => x.disabled = true);
        document.getElementById('g2ChalFb').innerHTML = `<div style="background:#d1fae5;border-radius:12px;padding:10px;font-weight:700;color:#065f46;text-align:center">✅ Tuyệt vời! Chính xác! 🌟</div>`;
        setChat('Chính xác! Con quan sát khối 3D rất tinh mắt!', true, () => {
          setTimeout(() => {
            if (qi + 1 < CHALLENGE_QUESTIONS.length) {
              loadPart4Challenge(qi + 1);
            } else {
              destroyThree();
              showResult(2, 4, 'Con đã chinh phục trọn vẹn Phép màu hình khối! Thần Rùa Kim Quy rất khen ngợi con!');
            }
          }, 1200);
        });
      } else {
        snd('wrong');
        b.style.opacity = '0.35';
        b.disabled = true;
        setChat(`${cQ.hint} Con dùng chuột xoay khối thử xem nhé!`);
      }
    });
    grid.appendChild(b);
  });

  setChat(`${cQ.q} Dũng sĩ hãy thử dùng chuột xoay khối 3D để kiểm chứng rồi chọn đáp án nhé!`);

  renderSubNav('navRow2', {
    onBack: () => loadStep(3),
    onNext: null,
    canBack: true,
    canNext: false
  });
}
