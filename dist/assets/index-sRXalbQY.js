(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={circle:{name:`hình tròn`,color:`#ffd166`,desc:`Hình tròn tròn xoe, không có góc nào cả.`},square:{name:`hình vuông`,color:`#9be0ff`,desc:`Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.`},triangle:{name:`hình tam giác`,color:`#a5f0b0`,desc:`Hình tam giác có 3 cạnh và 3 đỉnh.`},rectangle:{name:`hình chữ nhật`,color:`#ffb3d1`,desc:`Hình chữ nhật có 4 cạnh, 2 cạnh dài bằng nhau và 2 cạnh ngắn bằng nhau.`}},t=[{id:`sun`,shape:`circle`,emoji:`🌞`,label:`Mặt trời`,x:14,y:8},{id:`ball`,shape:`circle`,emoji:`⚽`,label:`Quả bóng`,x:72,y:52},{id:`moon`,shape:`circle`,emoji:`🌕`,label:`Trăng tròn`,x:82,y:8},{id:`window`,shape:`square`,emoji:`🟦`,label:`Cửa sổ`,x:58,y:30},{id:`gift`,shape:`square`,emoji:`🎁`,label:`Hộp quà`,x:44,y:58},{id:`tree`,shape:`triangle`,emoji:`🌲`,label:`Cây thông`,x:26,y:36},{id:`roof`,shape:`triangle`,emoji:`🔺`,label:`Mái nhà`,x:50,y:14},{id:`sign`,shape:`rectangle`,emoji:`🪧`,label:`Bảng hiệu`,x:64,y:8},{id:`door`,shape:`rectangle`,emoji:`🚪`,label:`Cửa ra vào`,x:36,y:50}],n={circle:[{t:`Vì nó tròn xoe, không có góc`,good:!0},{t:`Vì nó có 4 cạnh bằng nhau`,good:!1},{t:`Vì nó có 3 đỉnh`,good:!1}],square:[{t:`Vì nó có 4 cạnh bằng nhau và 4 góc vuông`,good:!0},{t:`Vì nó tròn, không có góc`,good:!1},{t:`Vì nó có 3 cạnh`,good:!1}],triangle:[{t:`Vì nó có 3 cạnh và 3 đỉnh`,good:!0},{t:`Vì nó có 4 cạnh`,good:!1},{t:`Vì nó tròn xoe`,good:!1}],rectangle:[{t:`Vì nó có 2 cạnh dài và 2 cạnh ngắn`,good:!0},{t:`Vì nó có 3 đỉnh`,good:!1},{t:`Vì nó tròn, không góc`,good:!1}]},r={round:1,target:`circle`,found:[],roundCfg:[],totalRounds:4};function i(){return[`circle`,`square`,`triangle`,`rectangle`].map(e=>({shape:e,objects:t.filter(t=>t.shape===e).slice(0,3)}))}function a(){r.round=1,r.roundCfg=i(),r.totalRounds=r.roundCfg.length,o(1)}function o(n){let i=r.roundCfg[n-1];r.target=i.shape,r.found=[],Z(`g1pills`,r.totalRounds,n,[]);let a=document.getElementById(`g1area`),o=e[i.shape].name;a.innerHTML=`
    <div class="prompt-box">🌲 Hãy chạm vào tất cả <b>${o}</b> trong khu vườn!</div>
    <div class="forest" id="g1forest"></div>
  `;let c=document.getElementById(`g1forest`);c.innerHTML=`
    <div style="position:absolute;top:5%;left:5%;font-size:2rem;opacity:0.3">🌿</div>
    <div style="position:absolute;top:70%;left:85%;font-size:2.5rem;opacity:0.3">🌻</div>
    <div style="position:absolute;top:80%;left:15%;font-size:2rem;opacity:0.3">🍄</div>
    <div style="position:absolute;top:15%;right:5%;font-size:1.8rem;opacity:0.3">☁️</div>
  `,t.forEach(e=>{let t=document.createElement(`div`);t.className=`obj`,t.id=`obj-`+e.id,t.style.left=e.x+`%`,t.style.top=e.y+`%`,t.innerHTML=`<span style="font-size:44px">${e.emoji}</span><span class="lbl">${e.label}</span>`,t.addEventListener(`click`,()=>s(e,t)),c.appendChild(t)}),K(`Hãy nhìn thật kỹ và chạm vào tất cả các ${o} trong khu vườn nhé con! 🖐️`)}function s(t,n){r.found.includes(t.id)||(t.shape===r.target?(H(`correct`),r.found.push(t.id),n.classList.add(`found`),n.innerHTML+=`<div class="check-mark">✓</div>`,r.found.length===r.roundCfg[r.round-1].objects.length&&setTimeout(()=>c(),700)):(H(`wrong`),n.classList.remove(`shake-it`),n.offsetWidth,n.classList.add(`shake-it`),setTimeout(()=>n.classList.remove(`shake-it`),500),K(`Ồ, vật đó là ${e[t.shape].name} mà. Con thử nhìn kỹ xem, ${e[r.target].name} trông thế nào nhé? 👀`)))}function c(){H(`win`),K(`Con giỏi quá! Con đã tìm đủ các ${e[r.target].name}! Bây giờ cô hỏi con nhé: Vì sao con biết đây là ${e[r.target].name}? 🤔`);let t=document.getElementById(`g1area`);t.innerHTML+=`
    <div class="prompt-box">❓ Vì sao con biết đây là <b>${e[r.target].name}</b>?</div>
    <div class="reason-grid" id="g1reasons"></div>
  `;let i=document.getElementById(`g1reasons`);[...n[r.target]].sort(()=>Math.random()-.5).forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>l(t,e)),i.appendChild(t)})}function l(t,n){n.good?(t.classList.add(`correct`),H(`correct`),document.querySelectorAll(`#g1reasons .reason-btn`).forEach(e=>{e.disabled=!0}),u()):(t.classList.add(`wrong`),H(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),600),K(`Hmm, chưa đúng đâu con! ${e[r.target].desc} Con chọn lại xem nào? 💡`))}function u(){let t=e[r.target].desc;K(`Chính xác! ${t} Con làm rất tốt! ✨`),setTimeout(()=>{r.round<r.totalRounds?(r.round++,o(r.round)):Q(1,4,`Con đã tìm được tất cả các hình trong khu vườn! Cô Cú tự hào quá!`)},2200)}var d={round:1,done:[]};function f(e,t,n){let r=e/2,i=n||{front:`#ef4444`,back:`#a855f7`,top:`#3b82f6`,bottom:`#f97316`,right:`#facc15`,left:`#ec4899`};return`
    <div style="perspective:600px;width:${e+40}px;height:${e+40}px;margin:0 auto">
      <div class="cube3d" style="width:${e}px;height:${e}px;transform-style:preserve-3d;transform:rotateX(-20deg) rotateY(30deg);margin:${r/2}px auto;position:relative">
        <div class="cube-face" style="transform:translateZ(${r}px);background:${i.front};width:${e}px;height:${e}px">
          <span>🌟</span><small>Trước</small>
        </div>
        <div class="cube-face" style="transform:rotateY(180deg) translateZ(${r}px);background:${i.back};width:${e}px;height:${e}px">
          <span>🎈</span><small>Sau</small>
        </div>
        <div class="cube-face" style="transform:rotateX(90deg) translateZ(${r}px);background:${i.top};width:${e}px;height:${e}px">
          <span>☀️</span><small>Trên</small>
        </div>
        <div class="cube-face" style="transform:rotateX(-90deg) translateZ(${r}px);background:${i.bottom};width:${e}px;height:${e}px">
          <span>🍂</span><small>Dưới</small>
        </div>
        <div class="cube-face" style="transform:rotateY(90deg) translateZ(${r}px);background:${i.right};width:${e}px;height:${e}px">
          <span>⭐</span><small>Phải</small>
        </div>
        <div class="cube-face" style="transform:rotateY(-90deg) translateZ(${r}px);background:${i.left};width:${e}px;height:${e}px">
          <span>🌸</span><small>Trái</small>
        </div>
      </div>
      <div style="text-align:center;font-weight:800;color:#6d4a00;margin-top:8px;font-size:1.1rem">${t}</div>
    </div>
  `}function ee(e,t,n,r){let i=e/2,a=t/2,o=n/2;return`
    <div style="perspective:600px;width:${e+60}px;height:${t+60}px;margin:0 auto">
      <div class="cube3d" style="width:${e}px;height:${t}px;transform-style:preserve-3d;transform:rotateX(-20deg) rotateY(30deg);margin:${a/2}px auto;position:relative">
        <div class="cube-face box-face" style="transform:translateZ(${o}px);width:${e}px;height:${t}px;background:#ffc46b">
          <span>📦</span><small>Trước</small>
        </div>
        <div class="cube-face box-face" style="transform:rotateY(180deg) translateZ(${o}px);width:${e}px;height:${t}px;background:#e89b3c">
          <span>📦</span><small>Sau</small>
        </div>
        <div class="cube-face box-face" style="transform:rotateX(90deg) translateZ(${a}px);width:${e}px;height:${n}px;background:#ffd999;margin-top:${(t-n)/2}px">
          <span>📦</span><small>Trên</small>
        </div>
        <div class="cube-face box-face" style="transform:rotateX(-90deg) translateZ(${a}px);width:${e}px;height:${n}px;background:#d4860a;margin-top:${(t-n)/2}px">
          <small>Dưới</small>
        </div>
        <div class="cube-face box-face" style="transform:rotateY(90deg) translateZ(${i}px);width:${n}px;height:${t}px;background:#ffb347;margin-left:${(e-n)/2}px">
          <small>Phải</small>
        </div>
        <div class="cube-face box-face" style="transform:rotateY(-90deg) translateZ(${i}px);width:${n}px;height:${t}px;background:#e09530;margin-left:${(e-n)/2}px">
          <small>Trái</small>
        </div>
      </div>
      <div style="text-align:center;font-weight:800;color:#6d4a00;margin-top:8px;font-size:1.1rem">${r}</div>
    </div>
  `}function te(){d.round=1,d.done=[],p(1)}function p(e){Z(`g2pills`,3,e,d.done);let t=document.getElementById(`g2area`),n=e%2==1;t.innerHTML=`
    <div class="prompt-box">🧊 Hãy chọn <b>KHỐI LẬP PHƯƠNG</b> nhé con! (Khối có 6 mặt đều là hình vuông)</div>
    <div class="blocks-stage" id="g2stage">
      <div class="block3d" id="b-left" style="cursor:pointer">
        ${n?f(110,`Khối A`):ee(150,90,70,`Khối A`)}
      </div>
      <div class="block3d" id="b-right" style="cursor:pointer">
        ${n?ee(150,90,70,`Khối B`):f(110,`Khối B`)}
      </div>
    </div>
    <div class="note-sm">💡 Khối lập phương: 6 mặt đều là hình vuông bằng nhau</div>
  `,document.getElementById(`b-left`).addEventListener(`click`,()=>ne(`left`,n?`cube`:`box`)),document.getElementById(`b-right`).addEventListener(`click`,()=>ne(`right`,n?`box`:`cube`)),K(`Hãy quan sát kỹ hai khối và bấm vào KHỐI LẬP PHƯƠNG nhé! Khối lập phương có 6 mặt đều là hình vuông bằng nhau đó! 🧊`)}function ne(e,t){if(t===`cube`)H(`correct`),document.getElementById(`b-`+e).classList.add(`done`),document.querySelectorAll(`#g2stage .block3d`).forEach(e=>{e.style.pointerEvents=`none`}),re();else{H(`wrong`);let t=document.getElementById(`b-`+e);t.classList.add(`wrongsel`),setTimeout(()=>t.classList.remove(`wrongsel`),600),K(`Đó là khối hộp chữ nhật con ạ — các mặt của nó là hình chữ nhật, không bằng nhau. Con nhìn kỹ lại nhé! 🤔`)}}function re(){K(`Con chọn đúng rồi! Giờ cô hỏi: Vì sao đó là KHỐI LẬP PHƯƠNG? 🤔`);let e=document.getElementById(`g2area`);e.innerHTML+=`
    <div class="prompt-box" style="margin-top:16px">❓ Vì sao đó là khối lập phương?</div>
    <div class="reason-grid" id="g2reasons"></div>
  `;let t=[{t:`Vì 6 mặt đều là hình vuông bằng nhau`,good:!0},{t:`Vì các mặt là hình chữ nhật dài ngắn khác nhau`,good:!1},{t:`Vì nó có 3 đỉnh`,good:!1}].sort(()=>Math.random()-.5),n=document.getElementById(`g2reasons`);t.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>ie(t,e)),n.appendChild(t)})}function ie(e,t){t.good?(e.classList.add(`correct`),H(`correct`),document.querySelectorAll(`#g2reasons .reason-btn`).forEach(e=>{e.disabled=!0}),ae()):(e.classList.add(`wrong`),H(`wrong`),setTimeout(()=>e.classList.remove(`wrong`),600),K(`Chưa đúng con ạ. Khối lập phương có 6 mặt đều là hình vuông bằng nhau đó! Con chọn lại nhé. 💡`))}function ae(){K(`Đúng rồi! Khối lập phương có 6 mặt đều là hình vuông bằng nhau. Khối hộp chữ nhật thì các mặt là hình chữ nhật, không bằng nhau. Cô cùng con đếm: 1, 2, 3, 4, 5, 6 — 6 mặt nhé! 🎉`),setTimeout(()=>{d.done.push(d.round),d.round<3?(d.round++,p(d.round)):Q(2,3,`Con đã phân biệt được khối lập phương và khối hộp chữ nhật! Cô Cú khen con giỏi!`)},3e3)}var m={round:1,robot:[0,0],star:[2,2],steps:4,moved:0,cmd:[]},oe=[{robot:[0,0],star:[2,2],steps:4,desc:`góc trên bên trái`},{robot:[2,0],star:[0,2],steps:4,desc:`góc dưới bên trái`},{robot:[1,2],star:[1,0],steps:4,desc:`giữa bên phải`}];function se(){m.round=1,h(1)}function h(e){let t=oe[e-1];m.robot=[...t.robot],m.star=[...t.star],m.steps=t.steps,m.moved=0,m.cmd=[],Z(`g3pills`,3,e,[]);let n=document.getElementById(`g3area`);n.innerHTML=`
    <div class="prompt-box">🤖 Hãy điều khiển rô-bốt tới ngôi sao ⭐! (tối đa ${t.steps} bước)</div>
    <div id="g3grid" class="grid3"></div>
    <div class="steps-info" id="g3steps">Bước còn lại: <b>${t.steps}</b></div>
    <div class="dir-btns">
      <div></div>
      <button class="dir-btn" id="dirUp">⬆</button>
      <div></div>
      <button class="dir-btn" id="dirLeft">⬅</button>
      <button class="dir-btn" id="dirDown">⬇</button>
      <button class="dir-btn" id="dirRight">➡</button>
    </div>
    <div class="note-sm">⬆ Lên · ⬇ Xuống · ⬅ Trái · ➡ Phải</div>
    <div id="g3express"></div>
  `,document.getElementById(`dirUp`).addEventListener(`click`,()=>g(`up`)),document.getElementById(`dirDown`).addEventListener(`click`,()=>g(`down`)),document.getElementById(`dirLeft`).addEventListener(`click`,()=>g(`left`)),document.getElementById(`dirRight`).addEventListener(`click`,()=>g(`right`)),ce(),le(t)}function ce(){let e=document.getElementById(`g3grid`);e.innerHTML=``;for(let t=0;t<3;t++)for(let n=0;n<3;n++){let r=document.createElement(`div`);r.className=`cell`,t===m.robot[0]&&n===m.robot[1]?r.innerHTML=`🤖`:t===m.star[0]&&n===m.star[1]&&(r.className=`cell star-cell`,r.innerHTML=`⭐`),e.appendChild(r)}}function le(e){e.star[0]-e.robot[0];let t=e.star[1]-e.robot[1],n=t<0?`TRÁI`:t>0?`PHẢI`:`GIỮA`,r=document.getElementById(`g3express`);r.innerHTML=`
    <div class="prompt-box" style="margin-top:12px">❓ Ngôi sao ⭐ đang nằm ở phía nào so với rô-bốt?</div>
    <div class="reason-grid" id="g3q"></div>
  `;let i=[{t:`⭐ Bên TRÁI`,g:n===`TRÁI`},{t:`⭐ Bên PHẢI`,g:n===`PHẢI`},{t:`⭐ Ở GIỮA`,g:n===`GIỮA`}],a=document.getElementById(`g3q`);i.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.g?(t.classList.add(`correct`),H(`correct`),a.querySelectorAll(`.reason-btn`).forEach(e=>{e.disabled=!0}),K(`Đúng rồi! Ngôi sao ở bên ${n} của rô-bốt. Bây giờ con hãy điều khiển rô-bốt tới đó nhé! 🚀`)):(t.classList.add(`wrong`),H(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),600),K(`Con nhìn kỹ lại xem, ngôi sao đang ở bên nào so với rô-bốt nhỉ? 👀`))}),a.appendChild(t)}),K(`Trước khi điều khiển, cô hỏi con nhé: Ngôi sao đang ở phía nào so với rô-bốt? Con hãy nhìn thật kỹ! 🧭`)}function g(e){if(m.moved>=m.steps){K(`Con đã hết số bước rồi! Hãy bấm Chơi lại để thử lại nhé. 💪`);return}H(`step`),m.cmd.push(e);let t=m.robot[0],n=m.robot[1];if(e===`up`?t--:e===`down`?t++:e===`left`?n--:e===`right`&&n++,t<0||t>2||n<0||n>2){K(`Rô-bốt đi ra ngoài rồi! Hãy chọn hướng khác nhé. 🚧`),m.cmd.pop();return}m.robot=[t,n],m.moved++,document.getElementById(`g3steps`).innerHTML=`Bước còn lại: <b>${m.steps-m.moved}</b>`,ce(),m.robot[0]===m.star[0]&&m.robot[1]===m.star[1]?ue():m.moved>=m.steps&&setTimeout(()=>{K(`Ôi, con đã hết bước mà chưa tới ngôi sao. Con thử bấm Chơi lại nhé! 🧠`);let e=document.getElementById(`g3area`);e.innerHTML+=`<div class="action-row"><button class="action-btn btn-orange" id="g3retry">🔄 Chơi lại</button></div>`,document.getElementById(`g3retry`).addEventListener(`click`,()=>h(m.round))},600)}function ue(){H(`win`);let e={up:`Lên`,down:`Xuống`,left:`Trái`,right:`Phải`};K(`Hoan hô! Rô-bốt đã đến ngôi sao! 🎉 Con đã dùng: ${m.cmd.map(t=>e[t]).join(` → `)}! Thật tài giỏi! 🌟`),setTimeout(()=>{m.round<3?(m.round++,h(m.round)):Q(3,3,`Con đã chỉ đường cho rô-bốt đến đúng ngôi sao! Cô Cú rất tự hào!`)},3e3)}var _={round:1,PX:22,objLeft:70},de=[{name:`Cái bút chì`,cm:8,emoji:`✏️`,color:`#f5b301`},{name:`Cục tẩy`,cm:4,emoji:`🧽`,color:`#ff9f5a`},{name:`Bàn chải`,cm:11,emoji:`🪥`,color:`#5b9cf5`}];function fe(){_.round=1,v(1)}function v(e){let t=de[e-1];Z(`g4pills`,3,e,[]);let n=document.getElementById(`g4area`);n.innerHTML=`
    <div class="prompt-box">📏 Đo <b>${t.name}</b> bằng Thước Thần Kỳ! Kéo thước để căn vạch số 0 trùng với đầu ${t.name}.</div>
    <div class="measure-scene" id="mscene"></div>
    <div class="align-msg" id="alignmsg"></div>
    <div id="g4predict" style="margin-top:12px"></div>
  `;let r=document.getElementById(`mscene`),i=t.cm*_.PX,a=document.createElement(`div`);a.className=`m-object`,a.style.left=_.objLeft+`px`,a.style.width=i+`px`,a.style.background=t.color,a.innerHTML=`<span style="font-size:26px">${t.emoji}</span>`,r.appendChild(a);let o=document.createElement(`div`);o.className=`ruler`,o.id=`ruler`;let s=15*_.PX;o.style.width=s+`px`;let c=``;for(let e=0;e<=15;e++){let t=e*_.PX;c+=`<div class="tick" style="left:${t}px;height:${e%5==0?22:12}px;position:absolute;bottom:6px;width:2px;background:#8a6d1a"></div>`,c+=`<div class="rnum" style="left:${t}px">${e}</div>`}c+=`<div class="zero-badge" style="left:0">0</div>`,o.innerHTML=c,r.appendChild(o);let l=_.objLeft+Math.round(Math.random()*80-40);o.style.left=Math.max(10,Math.min(500,l))+`px`,me(o,t),pe(t)}function pe(e){let t=document.getElementById(`g4predict`);t.innerHTML=`
    <div class="prompt-box">❓ Con đoán <b>${e.name}</b> dài mấy xăng-ti-mét (cm)?</div>
    <div class="choice-pad" id="g4p"></div>
  `;let n=e.cm,r=[n,n+(n===11?1:3),n-(n===4?1:2)];for(r=[...new Set(r)].filter(e=>e>0);r.length<3;){let e=n+r.length;e>0&&!r.includes(e)&&r.push(e)}r.sort(()=>Math.random()-.5);let i=document.getElementById(`g4p`);r.forEach(t=>{let r=document.createElement(`button`);r.className=`num-choice`,r.textContent=t+` cm`,r.addEventListener(`click`,()=>{t===n?(r.classList.add(`correct`),H(`correct`),i.querySelectorAll(`.num-choice`).forEach(e=>{e.disabled=!0}),K(`Dự đoán hay đấy! ${e.name} dài ${n} cm. Bây giờ con hãy kéo thước để kiểm chứng nhé! 📏`)):(r.classList.add(`wrong`),H(`wrong`),setTimeout(()=>r.classList.remove(`wrong`),500),K(`Con hãy kéo thước ra và đo thử xem sao nhé! Cô tin con sẽ tìm ra! 💪`))}),i.appendChild(r)})}function me(e,t){let n=document.getElementById(`mscene`),r=!1,i=0;e.addEventListener(`pointerdown`,t=>{r=!0,i=t.clientX-e.offsetLeft,e.setPointerCapture(t.pointerId),e.style.cursor=`grabbing`}),e.addEventListener(`pointermove`,t=>{if(!r)return;let a=t.clientX-i;a=Math.max(2,Math.min(n.clientWidth-e.clientWidth-2,a)),e.style.left=a+`px`}),e.addEventListener(`pointerup`,()=>{r=!1,e.style.cursor=`grab`,he(e,t)}),e.addEventListener(`pointercancel`,()=>{r=!1,e.style.cursor=`grab`})}function he(e,t){let n=Math.abs(e.offsetLeft-_.objLeft),r=document.getElementById(`alignmsg`);n<=_.PX*.6?(r.textContent=``,K(`Vạch số 0 đã trùng với đầu ${t.name} rồi! Bây giờ con đọc kết quả nhé! 📖`),ge(t)):(H(`wrong`),r.textContent=`⚠️ Vạch số 0 phải trùng với đầu ${t.name} nhé! Hãy kéo thước lại.`)}function ge(e){if(document.getElementById(`g4read`))return;document.getElementById(`g4area`).insertAdjacentHTML(`beforeend`,`
    <div class="prompt-box" id="g4read">❓ ${e.name} dài mấy xăng-ti-mét?</div>
    <div class="choice-pad" id="g4r"></div>
  `);let t=e.cm,n=[t,t+(t===11?1:2),t-(t===4?1:3)];for(n=[...new Set(n)].filter(e=>e>0);n.length<3;){let e=t+n.length;e>0&&!n.includes(e)&&n.push(e)}n.sort(()=>Math.random()-.5);let r=document.getElementById(`g4r`);n.forEach(n=>{let i=document.createElement(`button`);i.className=`num-choice`,i.textContent=n+` cm`,i.addEventListener(`click`,()=>{n===t?(i.classList.add(`correct`),H(`correct`),r.querySelectorAll(`.num-choice`).forEach(e=>{e.disabled=!0}),_e(e)):(i.classList.add(`wrong`),H(`wrong`),setTimeout(()=>i.classList.remove(`wrong`),500),K(`Con nhìn kỹ vạch cuối của ${e.name} trên thước xem, nó chỉ vào số mấy nhỉ? 🔍`))}),r.appendChild(i)})}function _e(e){K(`Chính xác! ${e.name} dài ${e.cm} cm. Cô cùng con đếm vạch nhé: vạch cuối cùng chỉ số ${e.cm}. Con thật giỏi! 📏✨`),setTimeout(()=>{_.round<3?(_.round++,v(_.round)):Q(4,3,`Con đã dùng Thước Thần Kỳ đo được 3 đồ vật thật chính xác! Tuyệt vời!`)},3e3)}var y={phase:`clock`,hour:12,target:7,dayIdx:0};function ve(e){let t=e%12*30;return`<svg viewBox="0 0 100 100" width="220">
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
    <line x1="50" y1="50" x2="${50+Math.sin(t*Math.PI/180)*22}" y2="${50-Math.cos(t*Math.PI/180)*22}" stroke="#333" stroke-width="5" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="50" y2="16" stroke="#e74c3c" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="4" fill="#333"/>
    <text x="50" y="40" font-size="10" fill="#aaa" text-anchor="middle">${e} giờ</text>
  </svg>`}function ye(){y.phase=`clock`,y.hour=12,be()}function be(){y.phase=`clock`,y.hour=12,Z(`g5pills`,3,1,[]);let e=document.getElementById(`g5area`);e.innerHTML=`
    <div class="prompt-box">🕐 Hãy chỉnh đồng hồ chỉ đúng <b>7 GIỜ</b>! (Kim ngắn chỉ số 7, kim dài chỉ số 12)</div>
    <div class="clock-wrap" id="clockBox">${ve(y.hour)}</div>
    <div class="clock-btns">
      <button class="action-btn btn-green" id="hourMinus">⏪ Bớt 1 giờ</button>
      <button class="action-btn btn-orange" id="hourPlus">+1 giờ ⏩</button>
    </div>
    <div class="action-row">
      <button class="action-btn btn-blue" id="checkClock">✅ Xong! Kiểm tra</button>
    </div>
  `,document.getElementById(`hourMinus`).addEventListener(`click`,()=>xe(-1)),document.getElementById(`hourPlus`).addEventListener(`click`,()=>xe(1)),document.getElementById(`checkClock`).addEventListener(`click`,Se),K(`Hãy bấm nút để xoay kim đồng hồ cho đúng 7 giờ con nhé! Kim ngắn chỉ số 7, kim dài chỉ số 12. 🕐`)}function xe(e){H(`click`),y.hour=(y.hour-1+e+12)%12+1,document.getElementById(`clockBox`).innerHTML=ve(y.hour)}function Se(){y.hour===y.target?(H(`win`),K(`Chính xác! 7 giờ đúng: kim ngắn chỉ số 7, kim dài chỉ số 12. Thật tuyệt vời! 🎉`),setTimeout(()=>Ce(),2200)):(H(`wrong`),K(`Chưa đúng con ạ. 7 giờ đúng nghĩa là kim ngắn chỉ số 7 và kim dài chỉ số 12. Con hãy chỉnh lại nhé! 🔄`))}function Ce(){y.phase=`days`,y.dayIdx=0,Z(`g5pills`,3,2,[]),we(0)}function we(e){let t=document.getElementById(`g5area`);e===0?(t.innerHTML=`
      <div class="prompt-box">📅 Hôm nay là <b>Thứ Ba</b>. Vậy NGÀY MAI là thứ mấy?</div>
      <div class="choice-pad" id="g5d"></div>
    `,Te([`Thứ Tư`,`Thứ Năm`,`Thứ Hai`],`Thứ Tư`)):(t.innerHTML=`
      <div class="prompt-box">📅 Hôm nay là <b>Thứ Ba</b>. Vậy HÔM QUA là thứ mấy?</div>
      <div class="choice-pad" id="g5d"></div>
    `,Te([`Thứ Hai`,`Thứ Tư`,`Chủ Nhật`],`Thứ Hai`)),K(e===0?`Hôm nay là Thứ Ba. Con hãy đoán xem NGÀY MAI là thứ mấy nhé! 📅`:`Giỏi lắm! Bây giờ cô hỏi: HÔM QUA là thứ mấy? 📅`)}function Te(e,t){e.sort(()=>Math.random()-.5);let n=document.getElementById(`g5d`);e.forEach(e=>{let r=document.createElement(`button`);r.className=`num-choice`,r.style.width=`auto`,r.style.padding=`0 18px`,r.style.borderRadius=`20px`,r.textContent=e,r.addEventListener(`click`,()=>{e===t?(r.classList.add(`correct`),H(`correct`),n.querySelectorAll(`.num-choice`).forEach(e=>{e.disabled=!0}),Ee(t)):(r.classList.add(`wrong`),H(`wrong`),setTimeout(()=>r.classList.remove(`wrong`),500),K(`Con nhớ lại xem, một tuần có: Hai, Ba, Tư, Năm, Sáu, Bảy, Chủ Nhật. Con thử lại nhé! 📅`))}),n.appendChild(r)})}function Ee(e){K(`Đúng rồi! ${e} đấy con. Một tuần có 7 ngày: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật. Con nhớ thật giỏi! 🌈`),setTimeout(()=>{y.dayIdx===0?(y.dayIdx=1,we(1)):Q(5,3,`Con đã biết xem giờ và các ngày trong tuần! Cô Cú vỗ tay khen con! 👏`)},2800)}var b={front:{name:`Mặt trước`,colorName:`màu đỏ`,icon:`🌟`,color:`#ef4444`,n:[0,0,1]},back:{name:`Mặt sau`,colorName:`màu tím`,icon:`🎈`,color:`#a855f7`,n:[0,0,-1]},top:{name:`Mặt trên`,colorName:`màu xanh`,icon:`☀️`,color:`#3b82f6`,n:[0,1,0]},bottom:{name:`Mặt dưới`,colorName:`màu cam`,icon:`🍂`,color:`#f97316`,n:[0,-1,0]},right:{name:`Mặt bên phải`,colorName:`màu vàng`,icon:`⭐`,color:`#facc15`,n:[1,0,0]},left:{name:`Mặt bên trái`,colorName:`màu hồng`,icon:`🌸`,color:`#ec4899`,n:[-1,0,0]}},x=[{axis:`right`,need:1,label:`SANG PHẢI 1 lần`,explain:{front:`Quay sang phải → mặt vàng ⭐ ra trước!`,top:`Quay ngang → mặt trên vẫn là xanh ☀️!`,right:`Quay phải → mặt tím 🎈 sang phải!`}},{axis:`up`,need:1,label:`LÊN 1 lần`,explain:{front:`Quay lên → mặt xanh ☀️ ra trước!`,top:`Quay lên → mặt tím 🎈 lên trên!`,right:`Mặt vàng ⭐ vẫn ở phải!`}},{axis:`left`,need:1,label:`SANG TRÁI 1 lần`,explain:{front:`Quay trái → mặt hồng 🌸 ra trước!`,top:`Mặt xanh ☀️ vẫn trên!`,right:`Mặt đỏ 🌟 sang phải!`}},{axis:`down`,need:1,label:`XUỐNG 1 lần`,explain:{front:`Quay xuống → mặt cam 🍂 ra trước!`,top:`Mặt đỏ 🌟 lên trên!`,right:`Mặt vàng ⭐ vẫn phải!`}}],S=0,C=0,w=`explore`,T=0,E=0,D=0,O=0,k={};function De(e,t){let n=e*Math.PI/180,r=t*Math.PI/180,i=Math.cos(n),a=Math.sin(n),o=Math.cos(r),s=Math.sin(r),c=[[1,0,0],[0,i,-a],[0,a,i]],l=[[o,0,s],[0,1,0],[-s,0,o]],u=[];for(let e=0;e<3;e++){u[e]=[];for(let t=0;t<3;t++){let n=0;for(let r=0;r<3;r++)n+=c[e][r]*l[r][t];u[e][t]=n}}return u}function Oe(e,t){return[e[0][0]*t[0]+e[0][1]*t[1]+e[0][2]*t[2],e[1][0]*t[0]+e[1][1]*t[1]+e[1][2]*t[2],e[2][0]*t[0]+e[2][1]*t[1]+e[2][2]*t[2]]}function ke(){let e=De(S,C),t={front:null,top:null,right:null},n=-2,r=-2,i=-2;for(let a in b){let o=Oe(e,b[a].n);o[2]>n&&(n=o[2],t.front=a),o[1]>r&&(r=o[1],t.top=a),o[0]>i&&(i=o[0],t.right=a)}return t}function A(){let e=document.getElementById(`g6cube`);e&&(e.style.transform=`rotateX(${S}deg) rotateY(${C}deg)`),Ae()}function Ae(){let e=ke();[[`seeFront6`,e.front],[`seeTop6`,e.top],[`seeRight6`,e.right]].forEach(([e,t])=>{let n=document.getElementById(e);if(!n||!t)return;let r=b[t];n.style.background=r.color,n.style.color=t===`right`?`#5b4a00`:`#fff`,n.innerHTML=`<div style="font-size:0.7rem">${r.name}</div><div style="font-size:1rem;margin-top:2px">${r.icon} ${r.colorName}</div>`})}function je(){S=0,C=0,w=`explore`,k={},Me()}function Me(){w=`explore`,Z(`g6pills`,3,1,[]);let e=document.getElementById(`g6area`);e.innerHTML=`
    <div class="prompt-box">🧊 Đây là Khối Lập Phương! Con hãy xoay khối và quan sát 6 mặt nhé!</div>
    <div class="g6-layout">
      <div class="g6-center">
        <div class="cube-scene" id="g6scene">
          <div class="cube3d-interactive" id="g6cube">
            <div class="cube-face cf-front">🌟<br><small>Trước</small></div>
            <div class="cube-face cf-back">🎈<br><small>Sau</small></div>
            <div class="cube-face cf-top">☀️<br><small>Trên</small></div>
            <div class="cube-face cf-bottom">🍂<br><small>Dưới</small></div>
            <div class="cube-face cf-right">⭐<br><small>Phải</small></div>
            <div class="cube-face cf-left">🌸<br><small>Trái</small></div>
          </div>
        </div>
        <div class="see-table">
          <div style="text-align:center;font-weight:800;color:var(--purple-700);margin-bottom:8px">👀 Con nhìn thấy gì?</div>
          <div class="see-grid6">
            <div class="see-cell6" id="seeFront6"></div>
            <div class="see-cell6" id="seeTop6"></div>
            <div class="see-cell6" id="seeRight6"></div>
          </div>
        </div>
      </div>
      <div class="g6-controls">
        <div class="arrow-grid6">
          <button class="rot-btn6 rb-up" id="g6up">⬆️<br><small>Lên</small></button>
          <button class="rot-btn6 rb-down" id="g6down">⬇️<br><small>Xuống</small></button>
          <button class="rot-btn6 rb-left" id="g6left">⬅️<br><small>Trái</small></button>
          <button class="rot-btn6 rb-right" id="g6right">➡️<br><small>Phải</small></button>
        </div>
        <div class="action-row" style="flex-direction:column;gap:8px;margin-top:12px">
          <button class="action-btn btn-amber" id="g6reset" style="width:100%">🔀 Về ban đầu</button>
          <button class="action-btn btn-green" id="g6net" style="width:100%">📦 Mở khối – khai triển</button>
          <button class="action-btn btn-pink" id="g6challenge" style="width:100%">🎮 Thử thách Cô Cú</button>
        </div>
      </div>
    </div>
  `,document.getElementById(`g6up`).addEventListener(`click`,()=>j(`up`)),document.getElementById(`g6down`).addEventListener(`click`,()=>j(`down`)),document.getElementById(`g6left`).addEventListener(`click`,()=>j(`left`)),document.getElementById(`g6right`).addEventListener(`click`,()=>j(`right`)),document.getElementById(`g6reset`).addEventListener(`click`,()=>{S=0,C=0,A(),H(`click`)}),document.getElementById(`g6net`).addEventListener(`click`,Pe),document.getElementById(`g6challenge`).addEventListener(`click`,Fe),Ne(),A(),K(`Chào con! Đây là khối lập phương có 6 mặt đều là hình vuông. Con hãy bấm các nút hoặc kéo khối để xoay và quan sát nhé! 🧊`)}function Ne(){let e=document.getElementById(`g6scene`);if(!e)return;let t=!1,n=0,r=0,i=0,a=0;e.addEventListener(`pointerdown`,o=>{t=!0,n=o.clientX,r=o.clientY,i=S,a=C,e.setPointerCapture(o.pointerId)}),e.addEventListener(`pointermove`,e=>{t&&(C=a+(e.clientX-n)*.5,S=i-(e.clientY-r)*.5,A())}),[`pointerup`,`pointercancel`].forEach(n=>e.addEventListener(n,()=>{t=!1}))}function j(e){if(H(`click`),e===`up`?S-=90:e===`down`?S+=90:e===`left`?C-=90:e===`right`&&(C+=90),A(),w===`challenge`){let t=x[T];e===t.axis&&(D++,D>=t.need&&setTimeout(()=>Le(),600))}}function Pe(){w=`net`,Z(`g6pills`,3,2,[1]);let e=document.getElementById(`g6area`);e.innerHTML=`
    <div class="prompt-box">📦 Mở khối lập phương ra, con thấy 6 mặt đều là hình vuông!</div>
    <div class="net-grid6">
      <div class="net-cell6 nc-back" style="background:#a855f7">🎈<br><small>Sau</small></div>
      <div class="net-cell6 nc-top" style="background:#3b82f6">☀️<br><small>Trên</small></div>
      <div class="net-cell6 nc-left" style="background:#ec4899">🌸<br><small>Trái</small></div>
      <div class="net-cell6 nc-front" style="background:#ef4444">🌟<br><small>Trước</small></div>
      <div class="net-cell6 nc-right" style="background:#facc15;color:#5b4a00">⭐<br><small>Phải</small></div>
      <div class="net-cell6 nc-bottom" style="background:#f97316">🍂<br><small>Dưới</small></div>
    </div>
    <div class="note-sm" style="margin:12px 0">💡 Mặt đỏ 🌟 luôn đối diện mặt tím 🎈. Mặt xanh ☀️ đối diện mặt cam 🍂!</div>
    <div class="action-row">
      <button class="action-btn btn-purple" id="g6foldBack">📦 Gấp lại khối</button>
    </div>
  `,document.getElementById(`g6foldBack`).addEventListener(`click`,()=>{S=0,C=0,Me()}),K(`Mở khối ra, con thấy 6 mặt đều là hình vuông đúng không? Mặt đỏ 🌟 luôn đối diện mặt tím 🎈 nhé! 📦`)}function Fe(){w=`challenge`,T=0,k={},S=0,C=0,Ie(0)}function Ie(e){T=e,E=0,D=0,O=0,S=0,C=0,Z(`g6pills`,4,e+1,[]);let t=x[e],n=document.getElementById(`g6area`);n.innerHTML=`
    <div class="prompt-box">🎮 Thử thách ${e+1}/4: Hãy quay khối <b>${t.label}</b>!</div>
    <div class="g6-layout">
      <div class="g6-center">
        <div class="cube-scene" id="g6scene">
          <div class="cube3d-interactive" id="g6cube">
            <div class="cube-face cf-front">🌟<br><small>Trước</small></div>
            <div class="cube-face cf-back">🎈<br><small>Sau</small></div>
            <div class="cube-face cf-top">☀️<br><small>Trên</small></div>
            <div class="cube-face cf-bottom">🍂<br><small>Dưới</small></div>
            <div class="cube-face cf-right">⭐<br><small>Phải</small></div>
            <div class="cube-face cf-left">🌸<br><small>Trái</small></div>
          </div>
        </div>
      </div>
      <div class="g6-controls">
        <div class="arrow-grid6">
          <button class="rot-btn6 rb-up ${t.axis===`up`?`rb-highlight`:``}" id="g6up" ${t.axis===`up`?``:`disabled`}>⬆️<br><small>Lên</small></button>
          <button class="rot-btn6 rb-down ${t.axis===`down`?`rb-highlight`:``}" id="g6down" ${t.axis===`down`?``:`disabled`}>⬇️<br><small>Xuống</small></button>
          <button class="rot-btn6 rb-left ${t.axis===`left`?`rb-highlight`:``}" id="g6left" ${t.axis===`left`?``:`disabled`}>⬅️<br><small>Trái</small></button>
          <button class="rot-btn6 rb-right ${t.axis===`right`?`rb-highlight`:``}" id="g6right" ${t.axis===`right`?``:`disabled`}>➡️<br><small>Phải</small></button>
        </div>
      </div>
    </div>
    <div id="g6chalQ"></div>
  `,document.getElementById(`g6up`).addEventListener(`click`,()=>j(`up`)),document.getElementById(`g6down`).addEventListener(`click`,()=>j(`down`)),document.getElementById(`g6left`).addEventListener(`click`,()=>j(`left`)),document.getElementById(`g6right`).addEventListener(`click`,()=>j(`right`)),A(),K(`Khối A: mặt trước đỏ, mặt trên xanh, mặt phải vàng. Con hãy quay khối ${t.label}! 🧊`)}function Le(){O=0;let e=[`front`,`top`,`right`][E],t=ke(),n=b[t[e]].colorName,r=e===`front`?`Mặt TRƯỚC bây giờ màu gì?`:e===`top`?`Mặt TRÊN bây giờ màu gì?`:`Mặt BÊN PHẢI bây giờ màu gì?`;[`g6up`,`g6down`,`g6left`,`g6right`].forEach(e=>{let t=document.getElementById(e);t&&(t.disabled=!0)});let i=document.getElementById(`g6chalQ`),a=[b[t.front].colorName,b[t.top].colorName,b[t.right].colorName],o=ze([...new Set(a)]);i.innerHTML=`
    <div class="prompt-box" style="margin-top:12px">❓ ${r}</div>
    <div class="reason-grid" id="g6choices"></div>
    <div id="g6fb" style="margin-top:8px"></div>
  `;let s=document.getElementById(`g6choices`);o.forEach(t=>{let r=Object.keys(b).find(e=>b[e].colorName===t),i=b[r],a=document.createElement(`button`);a.className=`reason-btn`,a.style.background=i.color,a.style.color=r===`right`?`#5b4a00`:`#fff`,a.style.borderColor=i.color,a.style.minWidth=`120px`,a.style.textAlign=`center`,a.innerHTML=`${i.icon} ${N(t)}`,a.addEventListener(`click`,()=>Re(t,n,e,a)),s.appendChild(a)}),K(`Cô Cú hỏi: ${r} Con hãy chọn màu con nghĩ nhé! 🤔`)}function Re(e,t,n,r){let i=document.querySelectorAll(`#g6choices .reason-btn`),a=document.getElementById(`g6fb`);if(e===t){let e=`${T}-${E}`;k[e]||(k[e]=!0),r.style.outline=`4px solid #22c55e`,H(`correct`),q(30),i.forEach(e=>{e.disabled=!0});let t=x[T].explain[n];a.innerHTML=`<div style="background:#d1fae5;border-radius:14px;padding:12px;font-weight:700;color:#065f46;text-align:center">✅ ${t}</div>`,K(`Hoan hô! Đúng rồi! ${t} 🌟`),setTimeout(M,2500)}else O++,H(`wrong`),r.style.opacity=`0.4`,r.disabled=!0,O>2?(i.forEach(e=>{e.disabled=!0}),a.innerHTML=`<div style="background:#fef3c7;border-radius:14px;padding:12px;font-weight:700;color:#92400e;text-align:center">💡 Đáp án: ${N(t)}</div>`,K(`Đáp án đúng là ${N(t)}. Không sao, câu tiếp nhé! 💪`),setTimeout(M,2500)):K(`Chưa đúng rồi! Con nhìn kỹ khối xem mặt nào đang hướng về phía con nhé! 👀`)}function M(){if(E++,E<3)Le();else if(T+1<4)Ie(T+1);else{let e=Object.keys(k).length;Q(6,Math.min(4,Math.ceil(e/3)),`Con đã hoàn thành Thử thách Khối Lập Phương! Cô Cú tự hào lắm! 🏆`)}}function N(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ze(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}var Be=[{cat:`🌲 Hình học`,q:`Hình nào có 3 cạnh và 3 đỉnh?`,opts:[`Hình tam giác`,`Hình vuông`,`Hình tròn`],ans:0,explain:`Hình tam giác có 3 cạnh và 3 đỉnh!`},{cat:`🌲 Hình học`,q:`Hình nào KHÔNG có góc?`,opts:[`Hình tròn`,`Hình vuông`,`Hình chữ nhật`],ans:0,explain:`Hình tròn tròn xoe, không có góc nào cả!`},{cat:`🌲 Hình học`,q:`Hình vuông có mấy cạnh bằng nhau?`,opts:[`4 cạnh`,`3 cạnh`,`2 cạnh`],ans:0,explain:`Hình vuông có 4 cạnh bằng nhau và 4 góc vuông!`},{cat:`🧊 Khối 3D`,q:`Khối lập phương có mấy mặt?`,opts:[`6 mặt`,`4 mặt`,`8 mặt`],ans:0,explain:`Khối lập phương có 6 mặt, tất cả đều là hình vuông!`},{cat:`🧊 Khối 3D`,q:`Các mặt của khối lập phương đều là hình gì?`,opts:[`Hình vuông`,`Hình tròn`,`Hình tam giác`],ans:0,explain:`Khối lập phương có 6 mặt đều là hình vuông bằng nhau!`},{cat:`🧊 Khối 3D`,q:`Khối hộp chữ nhật khác khối lập phương ở điểm nào?`,opts:[`Các mặt là hình chữ nhật, không bằng nhau`,`Có 4 mặt`,`Không có đỉnh`],ans:0,explain:`Khối hộp chữ nhật có các mặt là hình chữ nhật, kích thước khác nhau!`},{cat:`🤖 Vị trí`,q:`Nếu rô-bốt đang ở góc trên bên trái, nó cần đi hướng nào để sang phải?`,opts:[`Sang phải ➡`,`Lên trên ⬆`,`Xuống dưới ⬇`],ans:0,explain:`Để sang phải, rô-bốt phải đi theo hướng ➡!`},{cat:`🤖 Vị trí`,q:`Con mèo đứng TRÊN bàn. Vậy con mèo ở vị trí nào so với bàn?`,opts:[`Ở trên`,`Ở dưới`,`Ở giữa`],ans:0,explain:`Con mèo đứng trên bàn nghĩa là nó ở vị trí phía trên!`},{cat:`📏 Đo lường`,q:`Khi đo bằng thước, vạch nào phải trùng với đầu vật?`,opts:[`Vạch số 0`,`Vạch số 5`,`Vạch cuối cùng`],ans:0,explain:`Khi đo, ta luôn đặt vạch số 0 trùng với đầu vật cần đo!`},{cat:`📏 Đo lường`,q:`Cây bút dài 7 cm. Số 7 ta đọc ở đâu?`,opts:[`Ở vạch cuối trùng đuôi bút`,`Ở vạch giữa thước`,`Ở vạch số 0`],ans:0,explain:`Ta đọc số ở vạch cuối cùng mà đuôi bút trùng vào, đó chính là 7 cm!`},{cat:`🕐 Đồng hồ`,q:`3 giờ đúng: kim ngắn chỉ số mấy?`,opts:[`Số 3`,`Số 12`,`Số 6`],ans:0,explain:`3 giờ đúng: kim ngắn chỉ số 3, kim dài chỉ số 12!`},{cat:`🕐 Đồng hồ`,q:`Sau Thứ Sáu là thứ mấy?`,opts:[`Thứ Bảy`,`Thứ Tư`,`Chủ Nhật`],ans:0,explain:`Sau Thứ Sáu là Thứ Bảy! Rồi sau đó là Chủ Nhật.`},{cat:`🕐 Đồng hồ`,q:`Một tuần có bao nhiêu ngày?`,opts:[`7 ngày`,`5 ngày`,`10 ngày`],ans:0,explain:`Một tuần có 7 ngày: Hai, Ba, Tư, Năm, Sáu, Bảy, Chủ Nhật!`}],P={qIdx:0,score:0,questions:[],total:5};function F(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Ve(){P.questions=F(Be).slice(0,P.total),P.qIdx=0,P.score=0,I(0)}function I(e){let t=P.questions[e];Z(`g7pills`,P.total,e+1,[]);let n=document.getElementById(`g7area`),r=t.opts[t.ans],i=F(t.opts);n.innerHTML=`
    <div class="prompt-box" style="font-size:0.85rem;color:#888;font-weight:600;margin-bottom:4px;border:none;background:none;padding:4px">${t.cat} · Câu ${e+1}/${P.total}</div>
    <div class="prompt-box">❓ ${t.q}</div>
    <div class="reason-grid" id="g7opts"></div>
    <div id="g7feedback" style="margin-top:12px"></div>
  `;let a=document.getElementById(`g7opts`);i.forEach(e=>{let n=document.createElement(`button`);n.className=`reason-btn`,n.style.minWidth=`200px`,n.style.textAlign=`center`,n.textContent=e,n.addEventListener(`click`,()=>He(n,e,r,t)),a.appendChild(n)}),K(`Câu ${e+1}: ${t.q} Con hãy chọn đáp án nhé! 🤔`)}function He(e,t,n,r){let i=document.querySelectorAll(`#g7opts .reason-btn`);if(t===n){e.classList.add(`correct`),H(`correct`),P.score++,i.forEach(e=>{e.disabled=!0}),q(40);let t=document.getElementById(`g7feedback`);t.innerHTML=`<div style="background:#d1fae5;border-radius:16px;padding:14px;font-weight:700;color:#065f46;text-align:center">✅ Chính xác! ${r.explain}</div>`,K(`Đúng rồi con! ${r.explain} 🌟`)}else{e.classList.add(`wrong`),H(`wrong`),i.forEach(e=>{e.disabled=!0}),i.forEach(e=>{e.textContent===n&&e.classList.add(`correct`)});let t=document.getElementById(`g7feedback`);t.innerHTML=`<div style="background:#fef3c7;border-radius:16px;padding:14px;font-weight:700;color:#92400e;text-align:center">💡 Đáp án đúng là: ${n}. ${r.explain}</div>`,K(`Chưa đúng con ạ. Đáp án đúng là "${n}". ${r.explain} Không sao, con cố gắng câu tiếp nhé! 💪`)}setTimeout(()=>{P.qIdx+1<P.total?(P.qIdx++,I(P.qIdx)):Ue()},2800)}function Ue(){Q(7,Math.min(5,P.score),`Con trả lời đúng ${P.score}/${P.total} câu! ${[`Con cố gắng thêm nhé! Cô Cú tin con sẽ làm được! 💪`,`Tốt lắm! Con đã cố gắng rồi! 👍`,`Khá giỏi đó con! Cô Cú khen! 🌟`,`Xuất sắc! Con trả lời rất tốt! 🎉`,`Hoàn hảo! Con đúng hết tất cả! Cô Cú tự hào lắm! 🏆`,`Siêu giỏi! Con là ngôi sao sáng nhất! 🌟🏆`][Math.min(P.score,5)]}`)}var L=`toan1_kydieu_state`,R={sound:!0,stars:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}};function z(){try{localStorage.setItem(L,JSON.stringify(R))}catch{}}function We(){try{let e=localStorage.getItem(L);if(e){let t=JSON.parse(e);Object.assign(R,t)}}catch{}}function Ge(){return Object.values(R.stars).reduce((e,t)=>e+t,0)}function Ke(e){return(R.stars[e]||0)>0}function qe(){document.getElementById(`totalStars`).textContent=Ge()}var B=null;function Je(){if(!B)try{B=new(window.AudioContext||window.webkitAudioContext)}catch{}return B&&B.state===`suspended`&&B.resume(),B}function V(e,t,n,r,i){let a=Je();if(!a)return;let o=a.createOscillator(),s=a.createGain();o.type=n||`sine`,o.frequency.value=e;let c=a.currentTime+(r||0);s.gain.setValueAtTime(1e-4,c),s.gain.exponentialRampToValueAtTime(i||.2,c+.02),s.gain.exponentialRampToValueAtTime(1e-4,c+t),o.connect(s),s.connect(a.destination),o.start(c),o.stop(c+t)}function H(e){R.sound&&(e===`correct`?(V(523,.12,`triangle`),V(659,.12,`triangle`,.1),V(784,.18,`triangle`,.22),V(1046,.28,`triangle`,.38)):e===`wrong`?(V(200,.18,`sine`),V(160,.22,`sine`,.16)):e===`click`?V(600,.06,`square`,0,.06):e===`step`?V(400,.06,`square`,0,.08):e===`win`&&(V(523,.1,`triangle`),V(659,.1,`triangle`,.1),V(784,.1,`triangle`,.2),V(1046,.35,`triangle`,.3)))}var U=null;function Ye(){let e=(window.speechSynthesis?speechSynthesis.getVoices():[]).filter(e=>e.lang&&e.lang.toLowerCase().startsWith(`vi`)),t=[`female`,`hoaimy`,`linh`,`woman`,`nữ`,`girl`,`chi`],n=e.find(e=>t.some(t=>e.name.toLowerCase().includes(t))),r=e.find(e=>e.name.toLowerCase().includes(`google`));U=n||r||e[0]||null}`speechSynthesis`in window&&(Ye(),speechSynthesis.onvoiceschanged=Ye);function W(e){if(!R.sound||!(`speechSynthesis`in window))return;try{window.speechSynthesis.cancel()}catch{}let t=new SpeechSynthesisUtterance(String(e).replace(/<[^>]*>/g,``));t.lang=`vi-VN`,t.rate=.92,t.pitch=1.4,U&&(t.voice=U),window.speechSynthesis.speak(t)}var Xe=document.getElementById(`chatBubble`),G=document.getElementById(`chatText`);function K(e,t=!0){G.textContent=e,Xe.classList.add(`show`),t&&W(e)}function Ze(){Xe.classList.remove(`show`)}document.getElementById(`chatReplay`).addEventListener(`click`,()=>{W(G.textContent)}),document.getElementById(`soundToggle`).addEventListener(`click`,function(){if(R.sound=!R.sound,this.textContent=R.sound?`🔊`:`🔇`,z(),!R.sound&&`speechSynthesis`in window)try{speechSynthesis.cancel()}catch{}});function q(e=80){let t=document.getElementById(`confetti`),n=[`#ff6b6b`,`#ffd166`,`#06d6a0`,`#118ab2`,`#c76bf0`,`#ff9f5a`,`#f472b6`,`#60a5fa`];for(let r=0;r<e;r++){let e=document.createElement(`div`);e.className=`cf`,e.style.left=Math.random()*100+`%`,e.style.background=n[Math.floor(Math.random()*n.length)],e.style.width=e.style.height=7+Math.random()*10+`px`,e.style.borderRadius=Math.random()>.5?`50%`:`3px`,e.style.animationDuration=1.5+Math.random()*1.5+`s`,e.style.animationDelay=Math.random()*.4+`s`,t.appendChild(e),setTimeout(()=>e.remove(),4e3)}}var Qe={1:a,2:te,3:se,4:fe,5:ye,6:je,7:Ve};function J(e){document.querySelectorAll(`.screen`).forEach(e=>e.classList.remove(`active`)),document.getElementById(e).classList.add(`active`)}function Y(){Ze(),J(`screen-home`),$e(),W(`Con muốn chơi trò nào nữa nào?`)}function X(e){J(`screen-g`+e),Qe[e]&&Qe[e]()}function Z(e,t,n,r=[]){let i=document.getElementById(e);if(i){i.innerHTML=``;for(let e=1;e<=t;e++){let t=document.createElement(`div`);t.className=`pill`,t.textContent=e,r.indexOf(e)>=0&&(t.className+=` done`),e===n&&(t.className+=` now`),i.appendChild(t)}}}function Q(e,t,n){R.stars[e]=(R.stars[e]||0)+t,z(),qe();let r=document.getElementById(`resultBox`),i=``;for(let e=0;e<t;e++)i+=`⭐`;r.innerHTML=`
    <div class="big-stars">${i}</div>
    <h2>🎉 Hoàn thành! Tuyệt vời!</h2>
    <div class="result-msg">${n}</div>
    <div class="result-msg">Con kiếm được <b>${t} sao ⭐</b> trong trò này!<br>Tổng sao: <b>${Ge()}</b></div>
    <div class="action-row">
      <button class="big-btn btn-green" id="resultHome">🏠 Về nhà</button>
      <button class="big-btn btn-orange" id="resultReplay">🔄 Chơi lại</button>
      ${e<7?`<button class="big-btn btn-purple" id="resultNext">▶ Trò tiếp</button>`:``}
    </div>
  `,J(`screen-result`),q(120),H(`win`),K(`Chúc mừng con! Con đã hoàn thành tuyệt vời! Cô rất tự hào về con! 🌟`),document.getElementById(`resultHome`).addEventListener(`click`,Y),document.getElementById(`resultReplay`).addEventListener(`click`,()=>X(e));let a=document.getElementById(`resultNext`);a&&a.addEventListener(`click`,()=>X(e+1))}var $=[{n:1,ico:`🌲`,name:`Khu Vườn Hình Học`,sub:`Hình tròn, vuông, tam giác, chữ nhật`,c:`gc-1`,max:4},{n:2,ico:`🧊`,name:`Lâu Đài Khối 3D`,sub:`Khối lập phương & hộp chữ nhật`,c:`gc-2`,max:3},{n:3,ico:`🤖`,name:`Robot Dẫn Đường`,sub:`Trên, dưới, trái, phải, giữa`,c:`gc-3`,max:3},{n:4,ico:`📏`,name:`Phòng Đo Lường`,sub:`Đo độ dài bằng xăng-ti-mét`,c:`gc-4`,max:3},{n:5,ico:`🕐`,name:`Đồng Hồ Phiêu Lưu`,sub:`Xem giờ & các ngày trong tuần`,c:`gc-5`,max:3},{n:6,ico:`🎯`,name:`Khối Lập Phương Thần Kỳ`,sub:`Xoay khối 3D, đoán mặt, khai triển`,c:`gc-6`,max:4},{n:7,ico:`🏆`,name:`Thử Thách Tổng Hợp`,sub:`Ôn tập tất cả nội dung`,c:`gc-7`,max:5}];function $e(){let e=document.getElementById(`gameGrid`);e.innerHTML=``,$.forEach((t,n)=>{let r=n>0&&!Ke($[n-1].n),i=document.createElement(`div`);i.className=`game-card `+t.c+(r?` locked`:``);let a=``;if(Ke(t.n)){let e=Math.min(R.stars[t.n],5);for(let t=0;t<e;t++)a+=`⭐`}else a=r?`🔒 Chưa mở`:`✨ Bắt đầu!`;i.innerHTML=`
      <div class="lock-icon">${r?`🔒`:``}</div>
      <div class="card-emoji">${t.ico}</div>
      <div class="card-name">${t.name}</div>
      <div class="card-desc">${t.sub}</div>
      <div class="card-stars">${a}</div>
    `,i.addEventListener(`click`,()=>{r?K(`Con cần hoàn thành trò "${$[n-1].name}" trước để mở khóa trò này nhé! 💪`):(H(`click`),X(t.n))}),e.appendChild(i)})}for(let e=1;e<=7;e++){let t=document.getElementById(`backBtn`+e);t&&t.addEventListener(`click`,Y)}var et=document.getElementById(`backBtnResult`);et&&et.addEventListener(`click`,Y),document.getElementById(`noteToggle`).addEventListener(`click`,()=>{document.getElementById(`notePanel`).classList.toggle(`show`)});function tt(){let e=document.getElementById(`particles`),t=[`#ffd166`,`#a855f7`,`#60a5fa`,`#4ade80`,`#f472b6`,`#fb923c`];for(let n=0;n<20;n++){let n=document.createElement(`div`);n.className=`particle`,n.style.left=Math.random()*100+`%`,n.style.width=n.style.height=4+Math.random()*8+`px`,n.style.background=t[Math.floor(Math.random()*t.length)],n.style.animationDuration=15+Math.random()*25+`s`,n.style.animationDelay=Math.random()*20+`s`,e.appendChild(n)}}We(),$e(),qe(),tt(),setTimeout(()=>{R.sound&&`speechSynthesis`in window&&W(`Chào con! Con muốn chơi trò gì hôm nay?`)},800);