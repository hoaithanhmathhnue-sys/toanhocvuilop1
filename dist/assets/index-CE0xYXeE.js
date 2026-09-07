(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={circle:{name:`hình tròn`,color:`#ffd166`,desc:`Đồ vật tròn xoe, không có cạnh nào nên là hình tròn.`},square:{name:`hình vuông`,color:`#9be0ff`,desc:`Đồ vật có 4 cạnh bằng nhau nên là hình vuông.`},triangle:{name:`hình tam giác`,color:`#a5f0b0`,desc:`Đồ vật có 3 cạnh nên là hình tam giác.`},rectangle:{name:`hình chữ nhật`,color:`#ffb3d1`,desc:`Đồ vật có 2 cạnh dài bằng nhau và 2 cạnh ngắn bằng nhau nên là hình chữ nhật.`}};function t(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#38bdf8" stroke="#0284c7" stroke-width="4"/><line x1="30" y1="5" x2="30" y2="55" stroke="#fff" stroke-width="3"/><line x1="5" y1="30" x2="55" y2="30" stroke="#fff" stroke-width="3"/></svg>`}function n(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="4" fill="#38bdf8" stroke="#0284c7" stroke-width="4"/><line x1="30" y1="6" x2="30" y2="54" stroke="#fff" stroke-width="3"/><line x1="6" y1="30" x2="54" y2="30" stroke="#fff" stroke-width="3"/></svg>`}function r(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#334155" stroke="#0f172a" stroke-width="3"/><circle cx="30" cy="30" r="11" fill="#cbd5e1"/><circle cx="30" cy="30" r="4" fill="#334155"/><line x1="30" y1="5" x2="30" y2="55" stroke="#94a3b8" stroke-width="2"/><line x1="5" y1="30" x2="55" y2="30" stroke="#94a3b8" stroke-width="2"/></svg>`}function i(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#fef08a" stroke="#ca8a04" stroke-width="4"/><circle cx="30" cy="30" r="3" fill="#000"/><line x1="30" y1="30" x2="30" y2="13" stroke="#000" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="30" x2="44" y2="30" stroke="#000" stroke-width="3" stroke-linecap="round"/></svg>`}function a(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="4"/><circle cx="30" cy="30" r="3" fill="#000"/><line x1="30" y1="30" x2="30" y2="13" stroke="#000" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="30" x2="44" y2="30" stroke="#000" stroke-width="3" stroke-linecap="round"/></svg>`}function o(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/><circle cx="30" cy="30" r="17" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/></svg>`}function s(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="24" fill="#ec4899" stroke="#be185d" stroke-width="3"/><circle cx="23" cy="23" r="3" fill="#ffffff"/><circle cx="37" cy="23" r="3" fill="#ffffff"/><circle cx="23" cy="37" r="3" fill="#ffffff"/><circle cx="37" cy="37" r="3" fill="#ffffff"/></svg>`}function c(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#ef4444" stroke="#b91c1c" stroke-width="3"/><rect x="12" y="25" width="36" height="10" rx="2" fill="#ffffff"/></svg>`}function l(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="6" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3"/><text x="30" y="38" font-size="28" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#ffffff">i</text></svg>`}function u(){return`<svg width="52" height="38" viewBox="0 0 60 40"><rect x="4" y="4" width="52" height="32" rx="4" fill="#f59e0b" stroke="#b45309" stroke-width="3"/><text x="30" y="26" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#ffffff">SALE</text></svg>`}function ee(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="3"/><rect x="14" y="14" width="32" height="32" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/></svg>`}function te(){return`<svg width="54" height="36" viewBox="0 0 60 40"><rect x="4" y="6" width="52" height="28" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="3"/><line x1="30" y1="6" x2="30" y2="34" stroke="#991b1b" stroke-width="2"/></svg>`}function ne(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="4" fill="#0f172a"/><rect x="9" y="9" width="12" height="12" rx="2" fill="#ef4444"/><rect x="24" y="9" width="12" height="12" rx="2" fill="#3b82f6"/><rect x="39" y="9" width="12" height="12" rx="2" fill="#22c55e"/><rect x="9" y="24" width="12" height="12" rx="2" fill="#eab308"/><rect x="24" y="24" width="12" height="12" rx="2" fill="#ef4444"/><rect x="39" y="24" width="12" height="12" rx="2" fill="#3b82f6"/><rect x="9" y="39" width="12" height="12" rx="2" fill="#22c55e"/><rect x="24" y="39" width="12" height="12" rx="2" fill="#eab308"/><rect x="39" y="39" width="12" height="12" rx="2" fill="#ef4444"/></svg>`}function re(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="4" fill="#15803d" stroke="#166534" stroke-width="3"/><line x1="30" y1="6" x2="30" y2="54" stroke="#facc15" stroke-width="4"/><line x1="6" y1="30" x2="54" y2="30" stroke="#facc15" stroke-width="4"/></svg>`}function ie(){return`<svg width="48" height="44" viewBox="0 0 60 50"><polygon points="30,4 4,46 56,46" fill="#f59e0b" stroke="#d97706" stroke-width="3"/><polygon points="30,4 30,46 56,46" fill="#d97706"/></svg>`}function ae(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="16" fill="#eab308" stroke="#ca8a04" stroke-width="2"/><g stroke="#eab308" stroke-width="4" stroke-linecap="round"><line x1="30" y1="4" x2="30" y2="9"/><line x1="30" y1="51" x2="30" y2="56"/><line x1="4" y1="30" x2="9" y2="30"/><line x1="51" y1="30" x2="56" y2="30"/><line x1="11.6" y1="11.6" x2="15.1" y2="15.1"/><line x1="44.9" y1="44.9" x2="48.4" y2="48.4"/><line x1="11.6" y1="48.4" x2="15.1" y2="44.9"/><line x1="44.9" y1="15.1" x2="48.4" y2="11.6"/></g></svg>`}function oe(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="6" fill="#f59e0b" stroke="#d97706" stroke-width="3"/><rect x="12" y="12" width="14" height="14" rx="2" fill="#b45309"/><rect x="34" y="12" width="14" height="14" rx="2" fill="#b45309"/><rect x="12" y="34" width="14" height="14" rx="2" fill="#b45309"/><rect x="34" y="34" width="14" height="14" rx="2" fill="#b45309"/></svg>`}function se(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="4" fill="#b45309" stroke="#78350f" stroke-width="3"/><rect x="12" y="12" width="36" height="36" fill="#38bdf8"/><circle cx="21" cy="21" r="4" fill="#fef08a"/><polygon points="12,48 26,30 36,42 42,34 48,48" fill="#22c55e"/></svg>`}function ce(){return`<svg width="46" height="46" viewBox="0 0 60 60"><line x1="14" y1="6" x2="14" y2="54" stroke="#475569" stroke-width="4" stroke-linecap="round"/><polygon points="14,10 52,24 14,38" fill="#ef4444" stroke="#dc2626" stroke-width="2"/></svg>`}function le(){return`<svg width="46" height="46" viewBox="0 0 60 60"><polygon points="8,52 8,12 48,52" fill="#fef08a" stroke="#ca8a04" stroke-width="3" stroke-linejoin="round"/><polygon points="16,46 16,28 34,46" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/><line x1="8" y1="52" x2="48" y2="52" stroke="#854d0e" stroke-width="2" stroke-dasharray="2,3"/><line x1="8" y1="12" x2="8" y2="52" stroke="#854d0e" stroke-width="2" stroke-dasharray="2,3"/></svg>`}function d(e,t,n=46){return`<svg width="${n}" height="${n}" viewBox="0 0 60 60"><polygon points="${e}" fill="${t}" stroke="${t}" stroke-width="2" stroke-linejoin="round"/></svg>`}var ue=[{id:`tri-deu-do`,label:`Tam giác đều đỏ`,svg:()=>d(`30,4 4,56 56,56`,`#ef4444`,46),shape:`triangle`},{id:`tri-deu-xanh`,label:`Tam giác đều xanh`,svg:()=>d(`30,6 6,54 54,54`,`#3b82f6`,44),shape:`triangle`},{id:`tri-can-vang`,label:`Tam giác cân vàng`,svg:()=>d(`30,2 8,58 52,58`,`#f59e0b`,46),shape:`triangle`},{id:`tri-can-tim`,label:`Tam giác cân tím`,svg:()=>d(`30,4 10,56 50,56`,`#a855f7`,42),shape:`triangle`},{id:`tri-nhon-cam`,label:`Tam giác nhọn cam`,svg:()=>d(`30,2 18,58 42,58`,`#f97316`,40),shape:`triangle`},{id:`tri-nhon-hong`,label:`Tam giác nhọn hồng`,svg:()=>d(`30,3 20,55 40,55`,`#ec4899`,38),shape:`triangle`},{id:`tri-vuong-lc`,label:`Tam giác vuông xanh lá`,svg:()=>d(`4,56 4,4 56,56`,`#22c55e`,44),shape:`triangle`},{id:`tri-vuong-navy`,label:`Tam giác vuông xanh đậm`,svg:()=>d(`6,54 6,6 54,54`,`#1e40af`,42),shape:`triangle`}],de={circle:[{id:`sun`,svgFn:ae,label:`Mặt trời`,isSVG:!0},{id:`moon`,emoji:`🌕`,label:`Mặt trăng`,isSVG:!1},{id:`wheel`,svgFn:r,label:`Bánh xe`,isSVG:!0},{id:`clock_round`,svgFn:i,label:`Đồng hồ`,isSVG:!0},{id:`ball`,emoji:`⚽`,label:`Quả bóng`,isSVG:!1},{id:`plate`,svgFn:o,label:`Cái đĩa`,isSVG:!0},{id:`circle_window`,svgFn:t,label:`Cửa sổ tròn`,isSVG:!0},{id:`traffic_sign`,svgFn:c,label:`Biển báo`,isSVG:!0},{id:`drum`,emoji:`🥁`,label:`Mặt trống`,isSVG:!1},{id:`button`,svgFn:s,label:`Cúc áo`,isSVG:!0},{id:`orange`,emoji:`🍊`,label:`Quả cam`,isSVG:!1},{id:`cookie`,emoji:`🍪`,label:`Bánh quy`,isSVG:!1}],triangle:[{id:`roof`,emoji:`🏠`,label:`Mái nhà`,isSVG:!1},{id:`mountain`,emoji:`⛰️`,label:`Ngọn núi`,isSVG:!1},{id:`pine_tree`,emoji:`🌲`,label:`Cây thông`,isSVG:!1},{id:`flag`,emoji:`🚩`,label:`Lá cờ`,isSVG:!1},{id:`warning_sign`,emoji:`⚠️`,label:`Biển cảnh báo`,isSVG:!1},{id:`pizza_slice`,emoji:`🍕`,label:`Miếng pizza`,isSVG:!1},{id:`tri_flag`,svgFn:ce,label:`Cờ tam giác`,isSVG:!0},{id:`pyramid`,svgFn:ie,label:`Kim tự tháp`,isSVG:!0},{id:`party_hat`,emoji:`🥳`,label:`Mũ chóp`,isSVG:!1},{id:`sail`,emoji:`⛵`,label:`Cánh buồm`,isSVG:!1},{id:`tri_ruler`,svgFn:le,label:`Thước tam giác`,isSVG:!0}],square:[{id:`sq_window`,svgFn:n,label:`Cửa sổ vuông`,isSVG:!0},{id:`sq_tile`,svgFn:ee,label:`Viên gạch vuông`,isSVG:!0},{id:`rubik`,svgFn:ne,label:`Khối rubik`,isSVG:!0},{id:`waffle`,svgFn:oe,label:`Bánh waffle`,isSVG:!0},{id:`dice`,emoji:`🎲`,label:`Xúc xắc`,isSVG:!1},{id:`picture`,emoji:`🖼️`,label:`Bức tranh`,isSVG:!1},{id:`banh_chung`,svgFn:re,label:`Bánh chưng`,isSVG:!0},{id:`photo_frame`,svgFn:se,label:`Khung ảnh vuông`,isSVG:!0},{id:`sq_clock`,svgFn:a,label:`Đồng hồ vuông`,isSVG:!0},{id:`sign_sq`,svgFn:l,label:`Biển hiệu`,isSVG:!0}],rectangle:[{id:`door`,emoji:`🚪`,label:`Cánh cửa`,isSVG:!1},{id:`billboard`,svgFn:u,label:`Bảng hiệu`,isSVG:!0},{id:`book`,emoji:`📕`,label:`Quyển sách`,isSVG:!1},{id:`tv`,emoji:`📺`,label:`Màn hình TV`,isSVG:!1},{id:`computer`,emoji:`🖥️`,label:`Màn hình máy tính`,isSVG:!1},{id:`banknote`,emoji:`💵`,label:`Tờ tiền`,isSVG:!1},{id:`brick_rect`,svgFn:te,label:`Viên gạch`,isSVG:!0},{id:`envelope`,emoji:`✉️`,label:`Bao thư`,isSVG:!1},{id:`rect_window`,emoji:`🪟`,label:`Cửa sổ`,isSVG:!1},{id:`smartphone`,emoji:`📱`,label:`Điện thoại`,isSVG:!1},{id:`ruler`,emoji:`📏`,label:`Thước kẻ`,isSVG:!1},{id:`road`,emoji:`🛣️`,label:`Con đường`,isSVG:!1}]},fe={circle:[{t:`Vì nó tròn xoe, không có cạnh nào`,good:!0},{t:`Vì nó có 4 cạnh bằng nhau`,good:!1},{t:`Vì nó có 3 cạnh`,good:!1}],square:[{t:`Vì nó có 4 cạnh bằng nhau`,good:!0},{t:`Vì nó tròn, không có cạnh`,good:!1},{t:`Vì nó có 3 cạnh`,good:!1}],triangle:[{t:`Vì nó có 3 cạnh`,good:!0},{t:`Vì nó có 4 cạnh`,good:!1},{t:`Vì nó tròn xoe`,good:!1}],rectangle:[{t:`Vì nó có 2 cạnh dài và 2 cạnh ngắn`,good:!0},{t:`Vì nó chỉ có 3 cạnh`,good:!1},{t:`Vì nó tròn, không có cạnh`,good:!1}]};function f(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var p={round:1,target:`circle`,found:[],roundCfg:[],totalRounds:4};function pe(){return f([`circle`,`square`,`triangle`,`rectangle`]).map(e=>{let t=[];if(e===`triangle`){let e=f(de.triangle).slice(0,2),n=f(ue).slice(0,2);t=[...e,...n.map(e=>({id:e.id,label:e.label,svgFn:e.svg,isSVG:!0}))]}else{let n=de[e];t=f(n).slice(0,4)}return{shape:e,targets:t}})}function me(e){let t=e.shape,n=e.targets.map(e=>({...e,shape:t})),r=[`circle`,`square`,`triangle`,`rectangle`].filter(e=>e!==t),i=[];return r.forEach((e,t)=>{let n=t===0||t===1?3:2;f(de[e]).slice(0,n).forEach(t=>i.push({...t,shape:e}))}),f([...n,...i])}function he(){p.round=1,p.roundCfg=pe(),p.totalRounds=p.roundCfg.length,m(1)}function m(t){let n=p.roundCfg[t-1];p.target=n.shape,p.found=[],Z(`g1pills`,p.totalRounds,t,[]);let r=document.getElementById(`g1area`),i=e[n.shape].name;r.innerHTML=`
    <div class="prompt-box">🌲 Hãy chạm vào tất cả <b>${i}</b> trong khu vườn!</div>
    <div class="forest-grid" id="g1forest"></div>
  `;let a=me(n),o=document.getElementById(`g1forest`);a.forEach(e=>{let t=document.createElement(`div`);t.className=`obj-card`,t.id=`obj-`+e.id,t.innerHTML=e.isSVG&&e.svgFn?`<div class="icon-wrap">${e.svgFn()}</div><div class="lbl">${e.label}</div>`:`<div class="icon-wrap">${e.emoji}</div><div class="lbl">${e.label}</div>`,t.addEventListener(`click`,()=>ge(e,t,n)),o.appendChild(t)}),K(`Hãy nhìn thật kỹ và chạm vào tất cả các ${i} trong khu vườn nhé các dũng sĩ!`),J(`navRow1`,{onBack:()=>{p.round>1&&(p.round--,m(p.round))},onNext:()=>{p.round<p.totalRounds&&(p.round++,m(p.round))},canBack:p.round>1,canNext:p.round<p.totalRounds})}function ge(t,n,r){p.found.includes(t.id)||(t.shape===p.target?(L(`correct`),p.found.push(t.id),n.classList.add(`found`),n.innerHTML+=`<div class="check-mark">✓</div>`,p.found.length===r.targets.length&&setTimeout(()=>_e(),600)):(L(`wrong`),n.classList.remove(`shake-it`),n.offsetWidth,n.classList.add(`shake-it`),setTimeout(()=>n.classList.remove(`shake-it`),500),K(`Con thử nhìn kỹ ${t.label} nhé: nó có mấy cạnh? Trông nó tròn hay thẳng? Hãy so sánh với ${e[p.target].name} – giống hay khác? Con chọn lại lần nữa xem nào!`)))}function _e(){L(`win`),K(`Con giỏi quá! Con đã tìm đủ các ${e[p.target].name}! Bây giờ Thần Kim Quy hỏi con nhé: Vì sao con biết đây là ${e[p.target].name}?`);let t=document.getElementById(`g1area`);t.innerHTML+=`
    <div class="prompt-box" style="margin-top:16px;">❓ Vì sao con biết đây là <b>${e[p.target].name}</b>?</div>
    <div class="reason-grid" id="g1reasons"></div>
  `;let n=document.getElementById(`g1reasons`);f(fe[p.target]).forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>ve(t,e)),n.appendChild(t)})}function ve(t,n){n.good?(t.classList.add(`correct`),L(`correct`),document.querySelectorAll(`#g1reasons .reason-btn`).forEach(e=>{e.disabled=!0}),ye()):(t.classList.add(`wrong`),L(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),600),K(`Con thử nhìn kỹ hình này nhé: nó có mấy cạnh? Trông nó tròn hay thẳng? Hãy so sánh với ${e[p.target].name} con vừa tìm được – giống hay khác? Con chọn lại lần nữa xem nào!`))}function ye(){let t=e[p.target].desc;K(`Chính xác! ${t} Dũng sĩ giỏi quá!`,!0,()=>{setTimeout(()=>{p.round<p.totalRounds?(p.round++,m(p.round)):Q(1,4,`Con đã tìm được tất cả các hình trong khu vườn hình học! Thần Rùa Kim Quy rất tự hào!`)},1500)})}var h={step:1,roundPart1:1,chalQ:0,done:[]};function be(e,t,n){let r=e/2,i=n||{front:`#ef4444`,back:`#a855f7`,top:`#3b82f6`,bottom:`#f97316`,right:`#facc15`,left:`#ec4899`};return`
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
  `}function xe(e,t,n,r){let i=e/2,a=t/2,o=n/2;return`
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
  `}var g=null,_=null,v=null,y=null,b=null,Se=null,Ce=[{key:`front`,name:`Mặt trước`,color:`#ff5555`,hex:16733525,icon:`🌟`,colorName:`đỏ`},{key:`back`,name:`Mặt sau`,color:`#c084fc`,hex:12616956,icon:`🎈`,colorName:`tím`},{key:`top`,name:`Mặt trên`,color:`#60a5fa`,hex:6333946,icon:`☀️`,colorName:`xanh lam`},{key:`bottom`,name:`Mặt dưới`,color:`#fb923c`,hex:16486972,icon:`🍂`,colorName:`cam`},{key:`right`,name:`Mặt bên phải`,color:`#fde047`,hex:16638023,icon:`⭐`,colorName:`vàng`},{key:`left`,name:`Mặt bên trái`,color:`#4ade80`,hex:4906624,icon:`🍀`,colorName:`xanh lá`}],we=[{q:`Xoay mặt đỏ sang bên trái thì em sẽ nhìn thấy màu gì?`,ansIdx:4,hint:`Mặt đỏ ở phía trước. Con dùng chuột xoay khối sang trái xem mặt bên phải (vàng) sẽ chạy ra đâu nhé!`},{q:`Xoay mặt trái sang phải thì em thấy màu gì?`,ansIdx:1,hint:`Mặt trái là mặt màu xanh lá. Dũng sĩ hãy xoay khối 3D để xem mặt phía sau (tím) sẽ xuất hiện ở đâu nhé!`}];function Te(e){if(window.THREE&&window.THREE.OrbitControls){e();return}let t=e=>new Promise(t=>{if(document.querySelector(`script[src="${e}"]`)){t();return}let n=document.createElement(`script`);n.src=e,n.onload=t,document.head.appendChild(n)});t(`https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`).then(()=>t(`https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js`)).then(e)}function x(){Se&&=(cancelAnimationFrame(Se),null),b&&=(b.dispose(),null),v&&=(v.dispose(),v.domElement&&v.domElement.parentNode&&v.domElement.parentNode.removeChild(v.domElement),null),g=null,_=null,y=null}function Ee(e){x();let t=Math.min(e.clientWidth||320,320);g=new THREE.Scene,g.background=new THREE.Color(16777215),_=new THREE.PerspectiveCamera(50,t/280,.1,1e3),_.position.set(2.8,2.2,3.5),_.lookAt(0,0,0),v=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),v.setSize(t,280),v.setPixelRatio(window.devicePixelRatio),v.domElement.style.borderRadius=`16px`,v.domElement.style.boxShadow=`0 8px 24px rgba(0,0,0,0.2)`,v.domElement.style.cursor=`grab`,e.appendChild(v.domElement);let n=new THREE.AmbientLight(16777215,.8);g.add(n);let r=new THREE.DirectionalLight(16777215,.85);r.position.set(5,8,6),g.add(r);let i=new THREE.GridHelper(6,6,13751771,15067115);i.position.y=-1.05,g.add(i);let a=new THREE.BoxGeometry(2,2,2),o=Ce.map(e=>new THREE.MeshPhongMaterial({color:e.hex,transparent:!0,opacity:.95,shininess:100})),s=[o[4],o[5],o[2],o[3],o[0],o[1]];y=new THREE.Mesh(a,s),g.add(y);let c=new THREE.EdgesGeometry(a),l=new THREE.LineBasicMaterial({color:3355443,linewidth:2});y.add(new THREE.LineSegments(c,l)),b=new THREE.OrbitControls(_,v.domElement),b.enableDamping=!0,b.dampingFactor=.08,b.enableZoom=!0,b.enablePan=!1,b.enableRotate=!0;function u(){Se=requestAnimationFrame(u),b.update(),v.render(g,_)}u()}function De(){x(),h.step=1,h.roundPart1=1,h.chalQ=0,h.done=[],S(1)}function S(e){x(),h.step=e,Z(`g2pills`,4,e,h.done),e===1?Oe():e===2?je():e===3?Me():e===4&&Ne(0)}function Oe(){let e=document.getElementById(`g2area`),t=h.roundPart1%2==1;e.innerHTML=`
    <div class="prompt-box">🧊 Thử thách 2.1: Hãy quan sát và chọn <b>khối lập phương</b>!</div>
    <div class="blocks-stage" id="g2stage">
      <div class="block3d" id="b-left" style="cursor:pointer">
        ${t?be(110,`Khối A`):xe(150,90,70,`Khối A`)}
      </div>
      <div class="block3d" id="b-right" style="cursor:pointer">
        ${t?xe(150,90,70,`Khối B`):be(110,`Khối B`)}
      </div>
    </div>
    <div id="g2ReasonArea"></div>
    <div class="note-sm">💡 Khối lập phương có 6 mặt đều là hình vuông bằng nhau</div>
  `,document.getElementById(`b-left`).addEventListener(`click`,()=>ke(`left`,t?`cube`:`box`)),document.getElementById(`b-right`).addEventListener(`click`,()=>ke(`right`,t?`box`:`cube`)),K(`Hãy quan sát kỹ hai khối và bấm vào khối lập phương nhé! Khối lập phương có 6 mặt đều là hình vuông bằng nhau đó!`),J(`navRow2`,{onBack:null,onNext:()=>S(2),canBack:!1,canNext:!0,nextLabel:`Sang Xoay khối 3D ➡`})}function ke(e,t){if(t===`cube`)L(`correct`),document.getElementById(`b-`+e)?.classList.add(`done`),document.querySelectorAll(`#g2stage .block3d`).forEach(e=>{e.style.pointerEvents=`none`}),Ae();else{L(`wrong`);let t=document.getElementById(`b-`+e);t?.classList.add(`wrongsel`),setTimeout(()=>t?.classList.remove(`wrongsel`),600),K(`Con thử nhìn kỹ khối này nhé: các mặt của nó là hình gì, có bằng nhau không? Hãy so sánh với khối lập phương 6 mặt vuông bằng nhau để chọn lại nhé!`)}}function Ae(){K(`Con chọn chính xác rồi! Giờ Thần Kim Quy hỏi: Khối lập phương có mấy mặt hình vuông?`);let e=document.getElementById(`g2ReasonArea`);e.innerHTML=`
    <div class="prompt-box" style="margin-top:14px">❓ Khối lập phương có mấy mặt hình vuông?</div>
    <div class="reason-grid" id="g2reasons"></div>
  `;let t=[{t:`Có 6 mặt hình vuông bằng nhau`,good:!0},{t:`Có 4 mặt hình vuông và 2 mặt chữ nhật`,good:!1},{t:`Chỉ có 3 mặt hình vuông`,good:!1}],n=document.getElementById(`g2reasons`);t.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.good?(t.classList.add(`correct`),L(`correct`),n.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),q(30),h.done.push(1),K(`Chính xác! Khối lập phương có 6 mặt hình vuông bằng nhau. Dũng sĩ rất xuất sắc!`,!0,()=>{setTimeout(()=>S(2),1200)})):(t.classList.add(`wrong`),L(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),600),K(`Chưa đúng rồi! Con nhớ lại xem: trên, dưới, trước, sau, trái, phải — tất cả có mấy mặt vuông bằng nhau?`))}),n.appendChild(t)})}function je(){let e=document.getElementById(`g2area`);e.innerHTML=`
    <div class="prompt-box">🧊 Thử thách 2.2: Con hãy dùng chuột/ngón tay xoay khối 3D để quan sát 6 mặt nhé!</div>
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;align-items:center;margin:14px 0">
      <div id="g2ThreeWrap" style="width:320px;height:280px;display:flex;justify-content:center;align-items:center"></div>
      <div style="flex:1 1 260px;max-width:360px">
        <div class="face-legend" style="margin-bottom:12px">
          ${Ce.map(e=>`<span class="face-tag" style="background:${e.color}">${e.icon} ${e.colorName}</span>`).join(``)}
        </div>
        <div class="prompt-box" style="font-size:0.95rem;background:#fef3c7;border-color:#f59e0b;color:#92400e">
          🖐️ <b>Cách thực hành:</b> Kéo chuột để xoay khối lập phương sang trái, sang phải, lên trên, xuống dưới!
        </div>
      </div>
    </div>
  `,Te(()=>{let e=document.getElementById(`g2ThreeWrap`);e&&Ee(e)}),K(`Con hãy dùng chuột xoay khối lập phương 3D tự do để khám phá đủ 6 mặt với 6 màu sắc rực rỡ nhé!`),J(`navRow2`,{onBack:()=>S(1),onNext:()=>S(3),canBack:!0,canNext:!0,nextLabel:`Mở bung các mặt ➡`})}function Me(){let e=document.getElementById(`g2area`);e.innerHTML=`
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
  `;let t=document.getElementById(`g2NetChoices`);t.querySelectorAll(`.num-choice`).forEach(e=>{e.addEventListener(`click`,()=>{Number(e.dataset.v)===6?(e.classList.add(`correct`),L(`correct`),q(40),t.querySelectorAll(`.num-choice`).forEach(e=>e.disabled=!0),document.getElementById(`g2NetFb`).innerHTML=`
          <div style="background:#d1fae5;border-radius:14px;padding:12px;font-weight:800;color:#065f46;text-align:center">
            ✅ Đúng rồi! Khối lập phương có đúng 6 mặt hình vuông bằng nhau!
          </div>
        `,K(`Chính xác! Khi mở bung ra, hình chữ thập có đúng 6 mặt hình vuông bằng nhau!`,!0,()=>{setTimeout(()=>S(4),1400)})):(e.classList.add(`wrong`),L(`wrong`),setTimeout(()=>e.classList.remove(`wrong`),500),K(`Chưa đúng rồi! Con đếm lại các ô vuông trên hình chữ thập bên trái xem có bao nhiêu ô nhé!`))})}),K(`Khối lập phương mở bung ra thành hình chữ thập. Con hãy đếm xem có tất cả bao nhiêu mặt vuông nhé!`),J(`navRow2`,{onBack:()=>S(2),onNext:()=>S(4),canBack:!0,canNext:!0,nextLabel:`Thử thách xoay mặt ➡`})}function Ne(e){h.chalQ=e;let t=we[e],n=document.getElementById(`g2area`);n.innerHTML=`
    <div class="prompt-box">🎮 Thử thách 2.4 (Câu ${e+1}/2): <b>${t.q}</b></div>
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;align-items:center;margin:12px 0">
      <div id="g2ThreeWrapChal" style="width:320px;height:270px;display:flex;justify-content:center;align-items:center"></div>
      <div style="flex:1 1 300px;max-width:380px">
        <div class="prompt-box" style="font-size:0.95rem">❓ Hãy chọn màu con nhìn thấy:</div>
        <div class="reason-grid" id="g2ChalChoices"></div>
        <div id="g2ChalFb" style="margin-top:10px"></div>
      </div>
    </div>
  `,Te(()=>{let e=document.getElementById(`g2ThreeWrapChal`);e&&Ee(e)});let r=t.ansIdx,i=[r,(r+1)%6,(r+3)%6].sort(()=>Math.random()-.5),a=document.getElementById(`g2ChalChoices`);i.forEach(n=>{let i=Ce[n],o=document.createElement(`button`);o.className=`reason-btn`,o.style.background=i.color,o.style.color=i.colorName===`vàng`?`#5b4a00`:`#fff`,o.style.borderColor=i.color,o.innerHTML=`${i.icon} Màu ${i.colorName}`,o.addEventListener(`click`,()=>{n===r?(o.style.outline=`4px solid #22c55e`,L(`correct`),q(30),a.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),document.getElementById(`g2ChalFb`).innerHTML=`<div style="background:#d1fae5;border-radius:12px;padding:10px;font-weight:700;color:#065f46;text-align:center">✅ Tuyệt vời! Chính xác! 🌟</div>`,K(`Chính xác! Con quan sát khối 3D rất tinh mắt!`,!0,()=>{setTimeout(()=>{e+1<we.length?Ne(e+1):(x(),Q(2,4,`Con đã chinh phục trọn vẹn Phép màu hình khối! Thần Rùa Kim Quy rất khen ngợi con!`))},1200)})):(L(`wrong`),o.style.opacity=`0.35`,o.disabled=!0,K(`${t.hint} Con dùng chuột xoay khối thử xem nhé!`))}),a.appendChild(o)}),K(`${t.q} Dũng sĩ hãy thử dùng chuột xoay khối 3D để kiểm chứng rồi chọn đáp án nhé!`),J(`navRow2`,{onBack:()=>S(3),onNext:null,canBack:!0,canNext:!1})}function Pe(e=38){return`<svg width="${e}" height="${e}" viewBox="0 0 60 60">
    <line x1="30" y1="2" x2="30" y2="12" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/>
    <circle cx="30" cy="3" r="4" fill="#fbbf24"/>
    <rect x="12" y="12" width="36" height="28" rx="10" fill="#60a5fa"/>
    <rect x="14" y="14" width="32" height="24" rx="8" fill="#93c5fd"/>
    <ellipse cx="22" cy="24" rx="6" ry="7" fill="#fff"/>
    <ellipse cx="38" cy="24" rx="6" ry="7" fill="#fff"/>
    <circle cx="23" cy="25" r="3.5" fill="#1e3a5f"/>
    <circle cx="39" cy="25" r="3.5" fill="#1e3a5f"/>
    <circle cx="24.5" cy="23.5" r="1.2" fill="#fff"/>
    <circle cx="40.5" cy="23.5" r="1.2" fill="#fff"/>
    <ellipse cx="14" cy="30" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
    <ellipse cx="46" cy="30" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
    <path d="M23 33 Q30 40 37 33" stroke="#1e3a5f" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <rect x="18" y="42" width="24" height="12" rx="4" fill="#60a5fa"/>
    <rect x="24" y="44" width="4" height="4" rx="1" fill="#fbbf24"/>
    <rect x="32" y="44" width="4" height="4" rx="1" fill="#34d399"/>
    <rect x="6" y="44" width="10" height="5" rx="3" fill="#93c5fd"/>
    <rect x="44" y="44" width="10" height="5" rx="3" fill="#93c5fd"/>
    <rect x="20" y="54" width="8" height="5" rx="2" fill="#3b82f6"/>
    <rect x="32" y="54" width="8" height="5" rx="2" fill="#3b82f6"/>
  </svg>`}var C={round:1,robot:[0,0],star:[2,2],steps:4,moved:0,cmd:[],levels:[],done:[]};function Fe(){return Ie([[[0,0],[2,2]],[[2,0],[0,2]],[[0,2],[2,0]],[[2,2],[0,0]],[[0,1],[2,1]],[[1,0],[1,2]],[[0,0],[2,0]],[[2,2],[0,2]],[[1,0],[2,2]],[[0,2],[2,1]],[[2,1],[0,0]],[[1,2],[1,0]]]).slice(0,3).map(([e,t])=>({robot:e,star:t,steps:Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])+1}))}function Ie(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Le(){C.round=1,C.levels=Fe(),C.done=[],w(1)}function w(e){let t=C.levels[e-1];C.robot=[...t.robot],C.star=[...t.star],C.steps=t.steps,C.moved=0,C.cmd=[],Z(`g3pills`,3,e,C.done);let n=document.getElementById(`g3area`);n.innerHTML=`
    <!-- BỐ CỤC XẾP NGANG TOÀN BỘ THEO DOCX VÀ ẢNH MINH HỌA -->
    <div class="robot-landscape">
      <!-- Cột 1: Bảng ô lưới 3x3 -->
      <div class="robot-col-grid">
        <div id="g3grid" class="grid3"></div>
      </div>

      <!-- Cột 2: Cụm phím mũi tên & số bước -->
      <div class="robot-col-controls">
        <div class="steps-info" id="g3steps" style="margin:0 0 6px 0">Bước còn lại: <b>${t.steps}</b></div>
        <div class="dir-btns" style="margin:0">
          <div></div>
          <button class="dir-btn" id="dirUp">⬆</button>
          <div></div>
          <button class="dir-btn" id="dirLeft">⬅</button>
          <button class="dir-btn" id="dirDown">⬇</button>
          <button class="dir-btn" id="dirRight">➡</button>
        </div>
        <div class="note-sm" style="margin-top:6px">⬆ Lên · ⬇ Xuống · ⬅ Trái · ➡ Phải</div>
      </div>

      <!-- Cột 3: Câu hỏi vị trí tương đối -->
      <div class="robot-col-question" id="g3express"></div>
    </div>
  `,document.getElementById(`dirUp`)?.addEventListener(`click`,()=>T(`up`)),document.getElementById(`dirDown`)?.addEventListener(`click`,()=>T(`down`)),document.getElementById(`dirLeft`)?.addEventListener(`click`,()=>T(`left`)),document.getElementById(`dirRight`)?.addEventListener(`click`,()=>T(`right`)),Re(),ze(t),J(`navRow3`,{onBack:()=>{C.round>1&&(C.round--,w(C.round))},onNext:()=>{C.round<3&&(C.round++,w(C.round))},canBack:C.round>1,canNext:C.round<3})}function Re(){let e=document.getElementById(`g3grid`);if(e){e.innerHTML=``;for(let t=0;t<3;t++)for(let n=0;n<3;n++){let r=document.createElement(`div`);r.className=`cell`,t===C.robot[0]&&n===C.robot[1]?r.innerHTML=Pe(34):t===C.star[0]&&n===C.star[1]&&(r.className=`cell star-cell`,r.innerHTML=`⭐`),e.appendChild(r)}}}function ze(e){let t=e.star[0]-e.robot[0],n=e.star[1]-e.robot[1],r;r=t===0&&n===0?`giữa`:Math.abs(t)>Math.abs(n)?t>0?`dưới`:`trên`:Math.abs(n)>Math.abs(t)?n>0?`phải`:`trái`:t>0?`dưới`:`trên`;let i={trái:`⭐ Bên trái`,phải:`⭐ Bên phải`,trên:`⭐ Bên trên`,dưới:`⭐ Bên dưới`,giữa:`⭐ Ở giữa`},a=Ie([`trái`,`phải`,`trên`,`dưới`,`giữa`].filter(e=>e!==r)).slice(0,3),o=Ie([{t:i[r],g:!0},...a.map(e=>({t:i[e],g:!1}))]),s=document.getElementById(`g3express`);if(!s)return;s.innerHTML=`
    <div style="font-weight:800;font-size:1.05rem;color:#1e3a8a;margin-bottom:8px">
      ❓ Ngôi sao ⭐ đang nằm ở phía nào so với rô-bốt?
    </div>
    <div style="display:flex;flex-direction:column;gap:8px" id="g3q"></div>
  `;let c=document.getElementById(`g3q`);o.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.style.padding=`8px 12px`,t.style.fontSize=`0.95rem`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.g?(t.classList.add(`correct`),L(`correct`),c.querySelectorAll(`.reason-btn`).forEach(e=>{e.disabled=!0}),K(`Chính xác! Ngôi sao ở ${i[r].replace(`⭐ `,``).toLowerCase()} rô-bốt. Con giỏi quá! Bây giờ hãy điều khiển rô-bốt tới đó nhé!`)):(t.classList.add(`wrong`),L(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),600),K(`Con thử nhìn kỹ rô-bốt và ngôi sao nhé: ngôi sao đang ở phía nào so với rô-bốt? Hãy chọn lại lần nữa xem nào!`))}),c.appendChild(t)}),K(`Thần Kim Quy hỏi con nhé: Ngôi sao đang ở phía nào so với rô-bốt? Hãy trả lời rồi bấm mũi tên dẫn đường nhé!`)}function T(e){if(C.moved>=C.steps){K(`Con đã hết số bước rồi! Hãy bấm Chơi lại để thử lại nhé.`);return}L(`step`),C.cmd.push(e);let t=C.robot[0],n=C.robot[1];if(e===`up`?t--:e===`down`?t++:e===`left`?n--:e===`right`&&n++,t<0||t>2||n<0||n>2){K(`Rô-bốt đi ra ngoài lưới rồi! Hãy chọn hướng khác nhé.`),C.cmd.pop();return}C.robot=[t,n],C.moved++;let r=document.getElementById(`g3steps`);r&&(r.innerHTML=`Bước còn lại: <b>${C.steps-C.moved}</b>`),Re(),C.robot[0]===C.star[0]&&C.robot[1]===C.star[1]?Be():C.moved>=C.steps&&setTimeout(()=>{K(`Ôi, con đã hết bước mà chưa tới ngôi sao. Con thử bấm Chơi lại nhé!`);let e=document.getElementById(`g3express`);e&&(e.innerHTML+=`<div style="margin-top:10px;text-align:center"><button class="action-btn btn-orange" id="g3retry">🔄 Chơi lại</button></div>`,document.getElementById(`g3retry`)?.addEventListener(`click`,()=>w(C.round)))},600)}function Be(){L(`win`),C.done.push(C.round);let e={up:`Lên`,down:`Xuống`,left:`Trái`,right:`Phải`};K(`Chính xác! Rô-bốt đã đến ngôi sao theo đường đi: ${C.cmd.map(t=>e[t]).join(` → `)}. Dũng sĩ rất xuất sắc!`,!0,()=>{setTimeout(()=>{C.round<3?(C.round++,w(C.round)):Q(3,3,`Con đã chỉ đường cho rô-bốt vượt qua mọi vị trí trên lưới! Thần Rùa Kim Quy rất tự hào!`)},1e3)})}var E={round:1,PX:20,padEnd:24,objLeft:120,items:[],done:[]},Ve=[{id:`banchai`,name:`Bàn chải`,cm:8},{id:`pencil`,name:`Cái bút chì`,cm:8},{id:`comb`,name:`Chiếc lược`,cm:9},{id:`eraser`,name:`Cục tẩy`,cm:4},{id:`lollipop`,name:`Cây kẹo mút`,cm:6},{id:`spoon`,name:`Cái muỗng`,cm:7},{id:`scissors`,name:`Cái kéo`,cm:10}];function He(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Ue(e){let t=``;return e.startsWith(`banchai`)?t=`items/banchai.png`:e.startsWith(`pencil`)?t=`items/pencil.png`:e.startsWith(`comb`)?t=`items/comb.png`:e.startsWith(`eraser`)?t=`items/eraser.png`:e.startsWith(`lollipop`)?t=`items/lollipop.png`:e.startsWith(`spoon`)?t=`items/spoon.png`:e.startsWith(`scissors`)&&(t=`items/scissors.png`),t?`<img src="${t}" alt="${e}" style="max-height:56px;width:100%;object-fit:contain">`:`<svg width="100%" height="36" viewBox="0 0 200 36"><rect x="0" y="4" width="200" height="28" rx="6" fill="#3b82f6"/></svg>`}function We(){E.round=1,E.done=[];let e=He(Ve.filter(e=>e.id!==`banchai`));E.items=[Ve[0],...e.slice(0,2)],D(1)}function D(e){let t=E.items[e-1];Z(`g4pills`,3,e,E.done);let n=document.getElementById(`g4area`);n.innerHTML=`
    <div class="prompt-box">📏 Thử thách 4.${e}: Kéo Thước Thần Kỳ để <b>vạch số 0</b> trùng với đầu <b>${t.name}</b> nhé!</div>
    <div class="measure-scene" id="mscene" style="height:210px"></div>
    <div class="align-msg" id="alignmsg"></div>
    <div id="g4predict" style="margin-top:10px"></div>
  `;let r=document.getElementById(`mscene`),i=t.cm*E.PX,a=document.createElement(`div`);a.className=`m-object`,a.style.left=E.objLeft+`px`,a.style.width=i+`px`,a.style.top=`20px`,a.innerHTML=Ue(t.id),r.appendChild(a);let o=document.createElement(`div`);o.className=`ruler ruler-modern`,o.id=`ruler`;let s=E.padEnd*2+15*E.PX;o.style.width=s+`px`;let c=``;for(let e=0;e<=15;e++){let t=E.padEnd+e*E.PX,n=e%5==0;c+=`<div class="tick" style="left:${t}px;height:${n?24:13}px;top:0;position:absolute;width:${n?3:2}px;background:#78350f"></div>`,c+=`<div class="rnum" style="left:${t}px;top:26px;font-size:14px">${e}</div>`}c+=`<div class="zero-badge" style="left:${E.padEnd}px">0</div>`,o.innerHTML=c,r.appendChild(o);let l=e===1?50:e===2?-40:70,u=E.objLeft-E.padEnd+l;o.style.left=Math.max(10,Math.min(360,u))+`px`,Ke(o,t),Ge(t),J(`navRow4`,{onBack:()=>{E.round>1&&(E.round--,D(E.round))},onNext:()=>{E.round<3&&(E.round++,D(E.round))},canBack:E.round>1,canNext:E.round<3})}function Ge(e){let t=document.getElementById(`g4predict`);if(!t)return;t.innerHTML=`
    <div class="prompt-box">❓ Con đoán <b>${e.name}</b> dài mấy xăng-ti-mét (cm)?</div>
    <div class="choice-pad" id="g4p"></div>
  `,K(`Hãy dùng chuột kéo thước để vạch số 0 trùng với đầu ${e.name}, và đoán xem ${e.name} dài mấy cm nhé!`);let n=e.cm,r=new Set([n]);for(;r.size<3;){let e=n+(Math.random()>.5?Math.ceil(Math.random()*3):-Math.ceil(Math.random()*3));e>0&&e<=15&&r.add(e)}let i=He([...r]),a=document.getElementById(`g4p`);i.forEach(t=>{let r=document.createElement(`button`);r.className=`num-choice`,r.textContent=t+` cm`,r.addEventListener(`click`,()=>{t===n?(r.classList.add(`correct`),L(`correct`),a.querySelectorAll(`.num-choice`).forEach(e=>{e.disabled=!0}),K(`Dự đoán rất hay! ${e.name} dài ${n} cm. Giờ con kéo thước để vạch 0 trùng khít đầu vật nhé!`)):(r.classList.add(`wrong`),L(`wrong`),setTimeout(()=>r.classList.remove(`wrong`),500),K(`Con thử ước lượng lại nhé: xem đuôi của ${e.name} chạm vào khoảng vạch mấy? Chọn lại lần nữa nào!`))}),a.appendChild(r)})}function Ke(e,t){let n=document.getElementById(`mscene`),r=!1,i=0;e.addEventListener(`pointerdown`,t=>{r=!0,i=t.clientX-e.offsetLeft,e.setPointerCapture(t.pointerId),e.style.cursor=`grabbing`}),e.addEventListener(`pointermove`,t=>{if(!r)return;let a=t.clientX-i;a=Math.max(0,Math.min(n.clientWidth-e.clientWidth,a)),e.style.left=a+`px`}),e.addEventListener(`pointerup`,()=>{r=!1,e.style.cursor=`grab`,qe(e,t)}),e.addEventListener(`pointercancel`,()=>{r=!1,e.style.cursor=`grab`})}function qe(e,t){let n=e.offsetLeft+E.padEnd,r=Math.abs(n-E.objLeft),i=document.getElementById(`alignmsg`);r<=E.PX*.7?(i.textContent=``,L(`correct`),K(`Vạch số 0 đã trùng khít với đầu ${t.name} rồi! Giờ con nhìn xem đuôi ${t.name} chỉ vào vạch số mấy nhé!`),Je(t)):(L(`wrong`),i.textContent=`⚠️ Vạch số 0 phải trùng với đầu ${t.name} nhé! Hãy kéo thước lại.`,K(`Vạch số 0 chưa trùng với đầu ${t.name} rồi. Con kéo thước dịch chuyển thêm một chút nhé!`))}function Je(e){if(document.getElementById(`g4read`))return;document.getElementById(`g4area`).insertAdjacentHTML(`beforeend`,`
    <div class="prompt-box" id="g4read" style="margin-top:12px">❓ Con đọc được ${e.name} dài mấy xăng-ti-mét?</div>
    <div class="choice-pad" id="g4r"></div>
  `);let t=e.cm,n=new Set([t]);for(;n.size<3;){let e=t+(Math.random()>.5?Math.ceil(Math.random()*3):-Math.ceil(Math.random()*3));e>0&&e<=15&&n.add(e)}let r=He([...n]),i=document.getElementById(`g4r`);r.forEach(n=>{let r=document.createElement(`button`);r.className=`num-choice`,r.textContent=n+` cm`,r.addEventListener(`click`,()=>{n===t?(r.classList.add(`correct`),L(`correct`),i.querySelectorAll(`.num-choice`).forEach(e=>{e.disabled=!0}),Ye(e)):(r.classList.add(`wrong`),L(`wrong`),setTimeout(()=>r.classList.remove(`wrong`),500),K(`Con nhìn kỹ đuôi ${e.name} chạm vào vạch số mấy trên thước nhé! Hãy chọn lại nào!`))}),i.appendChild(r)})}function Ye(e){E.done.push(E.round),K(`Chính xác! Vạch số 0 trùng với một đầu, đầu kia chỉ vào vạch số ${e.cm} nên ${e.name} dài ${e.cm} cm. Dũng sĩ rất giỏi!`,!0,()=>{setTimeout(()=>{E.round<3?(E.round++,D(E.round)):Q(4,3,`Con đã thực hành đo các đồ vật bằng thước cm thật chuẩn xác! Thần Rùa Kim Quy rất khen ngợi!`)},1200)})}var O={stage:1,hour:12,done:[]};function Xe(e,t=``){let n=e%12*30,r=50+Math.sin(n*Math.PI/180)*22,i=50-Math.cos(n*Math.PI/180)*22,a=``;for(let e=1;e<=12;e++){let t=e*30*Math.PI/180,n=50+33*Math.sin(t),r=50-33*Math.cos(t)+4.5;a+=`<text x="${n.toFixed(1)}" y="${r.toFixed(1)}" font-size="10.5" font-weight="800" fill="#6b21a8" text-anchor="middle">${e}</text>`}let o=``;for(let e=0;e<60;e++){let t=e*6*Math.PI/180,n=e%5==0,r=n?40:42,i=50+r*Math.sin(t),a=50-r*Math.cos(t),s=50+44*Math.sin(t),c=50-44*Math.cos(t);o+=`<line x1="${i.toFixed(1)}" y1="${a.toFixed(1)}" x2="${s.toFixed(1)}" y2="${c.toFixed(1)}" stroke="#a855f7" stroke-width="${n?1.6:.8}"/>`}return`<svg viewBox="0 0 100 100" width="230" style="filter:drop-shadow(0 6px 12px rgba(124,58,237,0.2))">
    <defs>
      <radialGradient id="clockFace" cx="50%" cy="50%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#f5f3ff"/></radialGradient>
    </defs>
    <circle cx="50" cy="50" r="46" fill="url(#clockFace)" stroke="#7c3aed" stroke-width="3.5"/>
    <circle cx="50" cy="50" r="42" fill="none" stroke="#e9d5ff" stroke-width="1"/>
    ${o}
    ${a}
    <!-- Kim giờ (ngắn) -->
    <line x1="50" y1="50" x2="${r.toFixed(1)}" y2="${i.toFixed(1)}" stroke="#1e1b4b" stroke-width="4.5" stroke-linecap="round"/>
    <!-- Kim phút (dài chỉ số 12) -->
    <line x1="50" y1="50" x2="50" y2="14" stroke="#dc2626" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="4.2" fill="#7c3aed" stroke="#fff" stroke-width="1"/>
    <text x="50" y="66" font-size="8.5" font-weight="800" fill="#9333ea" text-anchor="middle">${e} giờ đúng</text>
  </svg>`}function Ze(){O.stage=1,O.hour=12,O.done=[],k(1)}function k(e){O.stage=e,Z(`g5pills`,5,e,O.done),e===1?Qe(6,`6 giờ sáng`,`Khoảng thời gian con vừa quay 6 giờ sáng con thường làm gì?`,[{t:`Thức dậy, tập thể dục và chuẩn bị đi học`,good:!0},{t:`Đi ngủ ban đêm`,good:!1},{t:`Ăn bữa cơm trưa`,good:!1}]):e===2?Qe(11,`11 giờ trưa`,`Khoảng thời gian con vừa quay 11 giờ trưa con thường làm gì?`,[{t:`Ăn cơm trưa và nghỉ ngơi`,good:!0},{t:`Thức dậy đón bình minh`,good:!1},{t:`Chuẩn bị đi ngủ tối`,good:!1}]):e===3?Qe(7,`19 giờ tối (7 giờ tối)`,`Khoảng thời gian con vừa quay 19 giờ tối con có biết ti vi phát sóng chương trình gì quen thuộc?`,[{t:`Chương trình Thời sự 19 giờ`,good:!0},{t:`Phim hoạt hình sáng sớm`,good:!1},{t:`Chương trình tập thể dục buổi sáng`,good:!1}]):e===4?et(`Thứ Hai`,`ngày mai`,`#f59e0b`,`Thứ Ba`,[`Thứ Tư`,`Thứ Năm`]):e===5&&et(`Thứ Tư`,`hôm qua`,`#ef4444`,`Thứ Ba`,[`Thứ Hai`,`Chủ Nhật`])}function Qe(e,t,n,r){O.hour=12;let i=document.getElementById(`g5area`);i.innerHTML=`
    <div class="prompt-box">🕐 Hãy chỉnh cho Thần Kim Quy <b>${t}</b>! (Kim ngắn chỉ số ${e}, kim dài chỉ số 12)</div>
    <div class="clock-wrap" id="clockBox">${Xe(O.hour)}</div>
    <div class="clock-btns">
      <button class="action-btn btn-green" id="hourMinus">⏪ Bớt 1 giờ</button>
      <button class="action-btn btn-orange" id="hourPlus">+1 giờ ⏩</button>
      <button class="action-btn btn-blue" id="checkClock">✅ Xong! Kiểm tra</button>
    </div>
    <div id="g5ExpandArea" style="margin-top:14px"></div>
  `,document.getElementById(`hourMinus`)?.addEventListener(`click`,()=>{L(`click`),O.hour=(O.hour-2+12)%12+1,document.getElementById(`clockBox`).innerHTML=Xe(O.hour)}),document.getElementById(`hourPlus`)?.addEventListener(`click`,()=>{L(`click`),O.hour=O.hour%12+1,document.getElementById(`clockBox`).innerHTML=Xe(O.hour)}),document.getElementById(`checkClock`)?.addEventListener(`click`,()=>{O.hour===e?(L(`correct`),q(40),document.querySelectorAll(`.clock-btns button`).forEach(e=>e.disabled=!0),K(`Chính xác! Đồng hồ đã chỉ đúng ${t}! Giờ Thần Kim Quy có một câu hỏi mở rộng cho dũng sĩ nhé!`),$e(n,r)):(L(`wrong`),K(`Con hãy nhìn kim ngắn nhé: hiện đang chỉ số ${O.hour}. Muốn đúng ${t}, kim ngắn phải chỉ số ${e}. Con bấm nút chỉnh lại xem nào!`))}),K(`Hãy bấm nút để xoay kim đồng hồ cho đúng ${t} nhé! Kim ngắn chỉ số ${e}, kim dài chỉ số 12.`),J(`navRow5`,{onBack:()=>{O.stage>1&&k(O.stage-1)},onNext:()=>{O.stage<5&&k(O.stage+1)},canBack:O.stage>1,canNext:O.stage<5})}function $e(e,t){let n=document.getElementById(`g5ExpandArea`);if(!n)return;n.innerHTML=`
    <div class="prompt-box" style="background:#fffbeb;border-color:#f59e0b;color:#78350f">
      ❓ <b>Câu hỏi mở rộng:</b> ${e}
    </div>
    <div class="reason-grid" id="g5ExpGrid" style="margin-top:10px"></div>
  `;let r=document.getElementById(`g5ExpGrid`);[...t].sort(()=>Math.random()-.5).forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.good?(t.classList.add(`correct`),L(`correct`),r.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),O.done.push(O.stage),K(`Chính xác! Con liên hệ thực tế rất tốt. Dũng sĩ xuất sắc lắm!`,!0,()=>{setTimeout(()=>k(O.stage+1),1200)})):(t.classList.add(`wrong`),L(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),500),K(`Chưa đúng rồi! Con nhớ lại thời gian biểu sinh hoạt hàng ngày xem nào!`))}),r.appendChild(t)})}function et(e,t,n,r,i){let a=document.getElementById(`g5area`),o=[r,...i].sort(()=>Math.random()-.5);a.innerHTML=`
    <div class="prompt-box" style="font-size:1.2rem">
      📅 Hôm nay là <b>${e}</b>. Vậy <span style="color:${n};font-weight:800;text-decoration:underline">${t}</span> là thứ mấy?
    </div>
    <div class="choice-pad" id="g5DayPad" style="margin:20px 0"></div>
  `;let s=document.getElementById(`g5DayPad`);o.forEach(n=>{let i=document.createElement(`button`);i.className=`num-choice`,i.style.width=`auto`,i.style.padding=`10px 22px`,i.style.borderRadius=`var(--radius-xl)`,i.style.fontSize=`1.15rem`,i.textContent=n,i.addEventListener(`click`,()=>{n===r?(i.classList.add(`correct`),L(`correct`),q(30),s.querySelectorAll(`.num-choice`).forEach(e=>e.disabled=!0),O.done.push(O.stage),K(`Chính xác! Hôm nay là ${e} thì ${t} là ${r}. Con nắm rất vững thứ tự các ngày trong tuần!`,!0,()=>{setTimeout(()=>{O.stage<5?k(O.stage+1):Q(5,3,`Con đã hiểu rõ xem giờ và các ngày trong tuần! Thần Rùa Kim Quy rất khen ngợi con!`)},1200)})):(i.classList.add(`wrong`),L(`wrong`),setTimeout(()=>i.classList.remove(`wrong`),500),K(`Con hãy nhớ lại thứ tự các ngày trong tuần nhé: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật. Hãy chọn lại xem nào!`))}),s.appendChild(i)}),K(`Hôm nay là ${e}. Con hãy đoán xem ${t} là thứ mấy nhé!`),J(`navRow5`,{onBack:()=>{O.stage>1&&k(O.stage-1)},onNext:()=>{O.stage<5&&k(O.stage+1)},canBack:O.stage>1,canNext:O.stage<5})}var A={currentSample:`boat`,placedPieces:[],done:[]},j={boat:{name:`Con thuyền`,icon:`⛵`,desc:`Cánh buồm hình tam giác + thân thuyền hình chữ nhật`,svg:`<svg viewBox="0 0 160 140" width="120"><polygon points="75,10 75,90 15,90" fill="#3b82f6"/><rect x="15" y="94" width="60" height="30" rx="3" fill="#f59e0b"/><rect x="79" y="94" width="60" height="30" rx="3" fill="#ef4444"/></svg>`},house:{name:`Ngôi nhà`,icon:`🏠`,desc:`Mái nhà hình tam giác + tường nhà hình vuông / chữ nhật`,svg:`<svg viewBox="0 0 160 140" width="120"><polygon points="80,10 145,70 15,70" fill="#ef4444"/><rect x="25" y="74" width="110" height="55" rx="4" fill="#3b82f6"/><rect x="65" y="88" width="30" height="41" rx="2" fill="#fde047"/></svg>`},tree:{name:`Cây thông`,icon:`🌲`,desc:`Tán cây hình tam giác + thân cây & gốc cây hình chữ nhật`,svg:`<svg viewBox="0 0 160 140" width="120"><polygon points="80,10 135,70 25,70" fill="#22c55e"/><rect x="45" y="72" width="70" height="32" rx="3" fill="#16a34a"/><rect x="65" y="106" width="30" height="28" rx="2" fill="#92400e"/></svg>`}},tt=[{id:`tri_big`,name:`Tam giác xanh`,type:`tri`,pts:`0,70 90,70 45,0`,w:90,h:70,fill:`#3b82f6`},{id:`tri_green`,name:`Tam giác lá`,type:`tri`,pts:`0,60 80,60 40,0`,w:80,h:60,fill:`#22c55e`},{id:`tri_red`,name:`Tam giác đỏ`,type:`tri`,pts:`0,60 80,60 0,0`,w:80,h:60,fill:`#ef4444`},{id:`rect_orange`,name:`Chữ nhật cam`,type:`rect`,w:90,h:46,fill:`#f97316`},{id:`rect_red`,name:`Chữ nhật đỏ`,type:`rect`,w:80,h:42,fill:`#dc2626`},{id:`rect_brown`,name:`Chữ nhật nâu`,type:`rect`,w:42,h:60,fill:`#92400e`},{id:`sq_yellow`,name:`Hình vuông vàng`,type:`rect`,w:56,h:56,fill:`#facc15`}];function nt(){A.currentSample=`boat`,A.placedPieces=[],A.done=[],rt()}function rt(){Z(`g6pills`,3,1,A.done);let e=document.getElementById(`g6area`);e.innerHTML=`
    <div class="prompt-box">
      🧩 Thử thách 6: <b>Ghép mảnh phép màu</b> — Em hãy thỏa sức sáng tạo xếp các hình đã cho thành <b>con thuyền, ngôi nhà, cây thông</b> trên trang giấy trắng nhé!
    </div>

    <div class="creative-canvas-area">
      <!-- Trang giấy trắng sáng tạo -->
      <div class="creative-paper" id="paperCanvas">
        <div style="position:absolute;top:10px;left:14px;color:#cbd5e1;font-weight:800;font-size:0.9rem;pointer-events:none">
          📄 Trang giấy trắng sáng tạo (Kéo các mảnh hình vào đây)
        </div>
      </div>

      <!-- Thanh công cụ & Khay mảnh ghép -->
      <div class="creative-sidebar">
        <!-- Khung gợi ý mẫu -->
        <div class="sample-picker">
          <div style="font-weight:800;font-size:0.85rem;color:#475569">💡 Mẫu hình gợi ý (Bấm để xem mẫu):</div>
          <div class="sample-tabs">
            <button class="sample-tab-btn ${A.currentSample===`boat`?`active`:``}" data-s="boat">⛵ Thuyền buồm</button>
            <button class="sample-tab-btn ${A.currentSample===`house`?`active`:``}" data-s="house">🏠 Ngôi nhà</button>
            <button class="sample-tab-btn ${A.currentSample===`tree`?`active`:``}" data-s="tree">🌲 Cây thông</button>
          </div>
          <div class="sample-preview-box" id="samplePreview">
            ${j[A.currentSample].svg}
          </div>
          <div style="font-size:0.8rem;color:#64748b;text-align:center" id="sampleDesc">
            ${j[A.currentSample].desc}
          </div>
        </div>

        <!-- Khay chứa mảnh hình -->
        <div class="brick-palette" style="padding:10px">
          <div style="font-weight:800;font-size:0.85rem;color:#1e293b;margin-bottom:8px">
            🎨 Mảnh ghép hình học (Kéo thả & Bấm để xoay):
          </div>
          <div id="piecesTray" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;min-height:90px"></div>
        </div>

        <!-- Các nút chức năng -->
        <div style="display:flex;gap:8px;justify-content:center">
          <button class="action-btn btn-green" id="btnFinishCreative" style="padding:10px 16px;font-size:0.95rem">
            ✨ Xong tác phẩm!
          </button>
          <button class="action-btn btn-orange" id="btnClearPaper" style="padding:10px 14px;font-size:0.95rem">
            🧹 Làm lại
          </button>
        </div>
      </div>
    </div>

    <div id="creativeFeedback" style="margin-top:14px"></div>
  `,document.querySelectorAll(`.sample-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.sample-tab-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.s;A.currentSample=t,document.getElementById(`samplePreview`).innerHTML=j[t].svg,document.getElementById(`sampleDesc`).textContent=j[t].desc,L(`click`),K(`Con hãy quan sát mẫu ${j[t].name} và kéo các hình vào trang giấy trắng để sáng tạo theo nhé!`)})}),it(),document.getElementById(`btnClearPaper`)?.addEventListener(`click`,()=>{L(`click`),it(),K(`Đã dọn dẹp trang giấy trắng! Con thỏa sức sáng tạo ghép hình mới nhé!`)}),document.getElementById(`btnFinishCreative`)?.addEventListener(`click`,ot),K(`Trang giấy trắng kì diệu đã sẵn sàng! Con hãy kéo thả các mảnh hình tam giác, hình vuông, chữ nhật để sáng tạo thành thuyền buồm, ngôi nhà hoặc cây thông nhé!`),J(`navRow6`,{onBack:null,onNext:()=>ot(),canBack:!1,canNext:!0,nextLabel:`Kiểm chứng kết quả ➡`})}function it(){let e=document.getElementById(`piecesTray`),t=document.getElementById(`paperCanvas`);!e||!t||(t.querySelectorAll(`.drag-shape`).forEach(e=>e.remove()),e.innerHTML=``,tt.forEach(n=>{let r=document.createElement(`div`);r.className=`drag-shape`,r.id=`p-`+n.id,r.style.width=n.w+`px`,r.style.height=n.h+`px`,r.style.cursor=`grab`,r.style.userSelect=`none`,r.style.touchAction=`none`,r.style.display=`inline-block`,r.style.position=`relative`,r.dataset.rotation=`0`,r.innerHTML=n.type===`tri`?`<svg width="${n.w}" height="${n.h}" viewBox="0 0 ${n.w} ${n.h}">
        <polygon points="${n.pts}" fill="${n.fill}" stroke="#fff" stroke-width="2"/>
      </svg>`:`<svg width="${n.w}" height="${n.h}" viewBox="0 0 ${n.w} ${n.h}">
        <rect width="${n.w}" height="${n.h}" rx="4" fill="${n.fill}" stroke="#fff" stroke-width="2"/>
      </svg>`,r.addEventListener(`click`,e=>{if(r.dataset.dragged===`true`)return;let t=(Number(r.dataset.rotation)+45)%360;r.dataset.rotation=t,r.style.transform=`rotate(${t}deg)`,L(`click`)}),at(r,t),e.appendChild(r)}))}function at(e,t){let n=!1,r=0,i=0,a=0,o=0,s=t=>{t.preventDefault(),n=!0,e.dataset.dragged=`false`;let s=t.touches?t.touches[0]:t,ee=e.getBoundingClientRect();r=s.clientX-ee.left,i=s.clientY-ee.top,a=s.clientX,o=s.clientY,e.style.position=`fixed`,e.style.zIndex=`1000`,e.style.cursor=`grabbing`,c(s.clientX,s.clientY),document.addEventListener(`mousemove`,l),document.addEventListener(`touchmove`,l,{passive:!1}),document.addEventListener(`mouseup`,u),document.addEventListener(`touchend`,u)},c=(t,n)=>{e.style.left=t-r+`px`,e.style.top=n-i+`px`},l=t=>{if(!n)return;t.preventDefault();let r=t.touches?t.touches[0]:t;(Math.abs(r.clientX-a)>6||Math.abs(r.clientY-o)>6)&&(e.dataset.dragged=`true`),c(r.clientX,r.clientY)},u=a=>{if(!n)return;n=!1,e.style.cursor=`grab`,document.removeEventListener(`mousemove`,l),document.removeEventListener(`touchmove`,l),document.removeEventListener(`mouseup`,u),document.removeEventListener(`touchend`,u);let o=t.getBoundingClientRect(),s=a.changedTouches?a.changedTouches[0]:a;if(s.clientX>=o.left&&s.clientX<=o.right&&s.clientY>=o.top&&s.clientY<=o.bottom){L(`step`),t.appendChild(e),e.style.position=`absolute`,e.style.zIndex=`10`;let n=e.dataset.rotation||`0`,a=s.clientX-o.left-r,c=s.clientY-o.top-i;e.style.left=Math.max(0,Math.min(t.clientWidth-e.clientWidth,a))+`px`,e.style.top=Math.max(0,Math.min(t.clientHeight-e.clientHeight,c))+`px`,e.style.transform=`rotate(${n}deg)`}};e.addEventListener(`mousedown`,s),e.addEventListener(`touchstart`,s,{passive:!1})}function ot(){if((document.getElementById(`paperCanvas`)?.querySelectorAll(`.drag-shape`).length||0)<2){K(`Dũng sĩ hãy kéo ít nhất 2 hoặc 3 mảnh hình vào trang giấy trắng để tạo thành tác phẩm trước khi hoàn thành nhé!`);return}L(`win`),q(60),A.done.push(1);let e=document.getElementById(`creativeFeedback`);if(e){e.innerHTML=`
      <div class="prompt-box" style="background:#ecfdf5;border-color:#10b981">
        <div style="font-weight:800;font-size:1.15rem;color:#065f46;margin-bottom:8px">
          🎉 Tác phẩm tuyệt đẹp! Giờ Thần Kim Quy hỏi con:
        </div>
        <div style="font-size:1.05rem;color:#1e293b;font-weight:700">
          ❓ Em đã dùng những hình học nào để sáng tạo nên bức tranh của mình?
        </div>
        <div class="reason-grid" id="creativeQOpts" style="margin-top:12px"></div>
      </div>
    `;let t=[{t:`Hình tam giác, hình chữ nhật và hình vuông`,good:!0},{t:`Chỉ dùng hình tròn tròn xoe`,good:!1},{t:`Không dùng hình học nào cả`,good:!1}],n=document.getElementById(`creativeQOpts`);t.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.good?(t.classList.add(`correct`),L(`correct`),q(50),n.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),K(`Chính xác! Con đã vận dụng rất khéo léo các hình tam giác, hình chữ nhật và hình vuông để tạo ra tác phẩm sáng tạo của riêng mình!`,!0,()=>{setTimeout(()=>{Q(6,4,`Con đã hoàn thành bức tranh hình học sáng tạo xuất sắc! Thần Rùa Kim Quy rất tự hào!`)},1200)})):(t.classList.add(`wrong`),L(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),500),K(`Con hãy nhìn lại các mảnh hình trên trang giấy trắng nhé: đó là những hình gì có cạnh thẳng?`))}),n.appendChild(t)})}K(`Tác phẩm thật tuyệt vời! Thần Kim Quy hỏi con: Con đã dùng những hình học nào để ghép nên tác phẩm này?`)}var M={part:1,towerSlots:{},done:[]};function st(){M.part=1,M.towerSlots={},M.done=[],N(1)}function N(e){M.part=e,Z(`g7pills`,4,e,M.done),e===1?ct():e===2?lt():e===3?ut():e===4&&ht()}function ct(){let e=document.getElementById(`g7area`);e.innerHTML=`
    <div class="prompt-box" style="font-size:0.9rem;color:#64748b">🏆 Ôn tập nhanh · Câu 1/2</div>
    <div class="prompt-box" style="font-size:1.2rem">
      ❓ <b>Khối lập phương</b> có bao nhiêu mặt và các mặt là hình gì?
    </div>
    <div class="reason-grid" id="g7q1Grid" style="margin:20px 0"></div>
  `;let t=[{t:`Có 6 mặt đều là hình vuông bằng nhau`,good:!0},{t:`Có 4 mặt hình vuông và 2 mặt hình chữ nhật`,good:!1},{t:`Có 3 mặt hình tam giác`,good:!1}],n=document.getElementById(`g7q1Grid`);t.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.good?(t.classList.add(`correct`),L(`correct`),n.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),M.done.push(1),K(`Chính xác! Khối lập phương có 6 mặt đều là hình vuông bằng nhau!`,!0,()=>{setTimeout(()=>N(2),1e3)})):(t.classList.add(`wrong`),L(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),500),K(`Con nhớ lại đặc điểm khối lập phương nhé: 6 mặt đều là hình gì bằng nhau?`))}),n.appendChild(t)}),K(`Khởi động Chinh phục đỉnh cao! Khối lập phương có mấy mặt và các mặt là hình gì con nhỉ?`),J(`navRow7`,{onBack:null,onNext:()=>N(2),canBack:!1,canNext:!0,nextLabel:`Sang Câu 2 ➡`})}function lt(){let e=document.getElementById(`g7area`);e.innerHTML=`
    <div class="prompt-box" style="font-size:0.9rem;color:#64748b">🏆 Ôn tập nhanh · Câu 2/2</div>
    <div class="prompt-box" style="font-size:1.2rem">
      ❓ Khi thực hành đo độ dài đồ vật bằng thước kẻ, <b>vạch nào</b> phải trùng với đầu đồ vật?
    </div>
    <div class="reason-grid" id="g7q2Grid" style="margin:20px 0"></div>
  `;let t=[{t:`Vạch số 0 trên thước kẻ`,good:!0},{t:`Vạch số 1 trên thước kẻ`,good:!1},{t:`Mép ngoài cùng của thước kẻ`,good:!1}],n=document.getElementById(`g7q2Grid`);t.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.good?(t.classList.add(`correct`),L(`correct`),n.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),M.done.push(2),K(`Rất chính xác! Luôn luôn đặt vạch số 0 trùng với một đầu đồ vật khi đo!`,!0,()=>{setTimeout(()=>N(3),1e3)})):(t.classList.add(`wrong`),L(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),500),K(`Chưa đúng rồi! Khi đo cm, ta bắt đầu đếm từ vạch số mấy con nhỉ?`))}),n.appendChild(t)}),K(`Khi đo độ dài bằng thước, vạch số mấy phải trùng với một đầu của đồ vật?`),J(`navRow7`,{onBack:()=>N(1),onNext:()=>N(3),canBack:!0,canNext:!0,nextLabel:`Sang Bài 1 (Xếp tháp gạch) ➡`})}function ut(){let e=document.getElementById(`g7area`);e.innerHTML=`
    <div class="prompt-box">
      🧱 <b>Bài 1:</b> Cho các viên gạch màu nâu và xám, em hãy xếp thành hình toà tháp 5 tầng (lưu ý dùng hết số gạch để xếp).
    </div>

    <div class="tower-game-wrap">
      <!-- Toà tháp 5 tầng -->
      <div class="tower-build-zone">
        <div style="font-weight:800;font-size:0.9rem;color:#b45309;margin-bottom:6px">
          🏰 Toà tháp 5 tầng (Kéo gạch vào các tầng)
        </div>

        <!-- Tầng 1: 1 ô (nâu) -->
        <div class="tower-layer" data-layer="1">
          <div class="tower-slot" id="slot-1-1" data-slot="1-1">1</div>
        </div>

        <!-- Tầng 2: 2 ô (xám) -->
        <div class="tower-layer" data-layer="2">
          <div class="tower-slot" id="slot-2-1" data-slot="2-1">2</div>
          <div class="tower-slot" id="slot-2-2" data-slot="2-2">2</div>
        </div>

        <!-- Tầng 3: 3 ô (nâu) -->
        <div class="tower-layer" data-layer="3">
          <div class="tower-slot" id="slot-3-1" data-slot="3-1">3</div>
          <div class="tower-slot" id="slot-3-2" data-slot="3-2">3</div>
          <div class="tower-slot" id="slot-3-3" data-slot="3-3">3</div>
        </div>

        <!-- Tầng 4: 4 ô (xám) -->
        <div class="tower-layer" data-layer="4">
          <div class="tower-slot" id="slot-4-1" data-slot="4-1">4</div>
          <div class="tower-slot" id="slot-4-2" data-slot="4-2">4</div>
          <div class="tower-slot" id="slot-4-3" data-slot="4-3">4</div>
          <div class="tower-slot" id="slot-4-4" data-slot="4-4">4</div>
        </div>

        <!-- Tầng 5: 5 ô (nâu) -->
        <div class="tower-layer" data-layer="5">
          <div class="tower-slot" id="slot-5-1" data-slot="5-1">5</div>
          <div class="tower-slot" id="slot-5-2" data-slot="5-2">5</div>
          <div class="tower-slot" id="slot-5-3" data-slot="5-3">5</div>
          <div class="tower-slot" id="slot-5-4" data-slot="5-4">5</div>
          <div class="tower-slot" id="slot-5-5" data-slot="5-5">5</div>
        </div>
      </div>

      <!-- Khay gạch rời & Điền số -->
      <div class="brick-tray-zone">
        <div class="brick-palette">
          <div style="font-weight:800;font-size:0.85rem;color:#334155;margin-bottom:8px">
            🧱 Kho gạch rời (Bấm hoặc Kéo để xếp vào tháp):
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-bottom:8px" id="brownBricksWrap">
            <!-- 9 viên nâu -->
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center" id="grayBricksWrap">
            <!-- 6 viên xám -->
          </div>
          <div style="text-align:center;margin-top:8px">
            <button class="action-btn btn-blue" id="btnAutoStack" style="padding:6px 14px;font-size:0.85rem">
              ⚡ Xếp nhanh mẫu tháp
            </button>
          </div>
        </div>

        <!-- Ô điền số theo đúng docx -->
        <div class="brick-inputs-box">
          <div style="margin-bottom:8px">❓ Điền số thích hợp vào ô trống:</div>
          <div style="line-height:2">
            Em đã dùng <input type="number" id="inputBrown" class="number-input-field" min="0" max="20" placeholder="?"> viên gạch màu nâu<br>
            và <input type="number" id="inputGray" class="number-input-field" min="0" max="20" placeholder="?"> viên gạch màu xám để xếp toà tháp.
          </div>
          <div style="margin-top:12px;text-align:center">
            <button class="action-btn btn-green" id="btnCheckTower" style="padding:8px 20px;font-size:1rem">
              ✅ Kiểm tra kết quả
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="towerFeedback" style="margin-top:10px"></div>
  `;let t=document.getElementById(`brownBricksWrap`),n=document.getElementById(`grayBricksWrap`);for(let e=1;e<=9;e++){let n=document.createElement(`img`);n.src=`/assets/brick-brown.jpg`,n.className=`brick-item`,n.id=`brick-brown-`+e,n.title=`Gạch nâu `+e,n.dataset.color=`brown`,n.addEventListener(`click`,()=>dt(`brown`,n)),t?.appendChild(n)}for(let e=1;e<=6;e++){let t=document.createElement(`img`);t.src=`/assets/brick-gray.jpg`,t.className=`brick-item`,t.id=`brick-gray-`+e,t.title=`Gạch xám `+e,t.dataset.color=`gray`,t.addEventListener(`click`,()=>dt(`gray`,t)),n?.appendChild(t)}document.getElementById(`btnAutoStack`)?.addEventListener(`click`,()=>{L(`step`),ft()}),document.getElementById(`btnCheckTower`)?.addEventListener(`click`,mt),K(`Bài 1: Cho các viên gạch màu nâu và xám, em hãy xếp thành hình toà tháp 5 tầng và đếm xem đã dùng bao nhiêu viên gạch mỗi loại nhé!`),J(`navRow7`,{onBack:()=>N(2),onNext:()=>N(4),canBack:!0,canNext:!0,nextLabel:`Sang Bài 2 (Đếm lâu đài) ➡`})}function dt(e,t){let n={1:`brown`,2:`gray`,3:`brown`,4:`gray`,5:`brown`},r=document.querySelectorAll(`.tower-slot:not(.filled)`),i=null;for(let t of r)if(n[t.closest(`.tower-layer`)?.dataset.layer]===e){i=t;break}!i&&r.length>0&&(i=r[0]),i&&(L(`step`),i.classList.add(`filled`),i.style.padding=`0`,i.innerHTML=`<img src="${t.src}" style="width:100%;height:100%;object-fit:cover;border-radius:4px">`,t.style.opacity=`0.2`,t.style.pointerEvents=`none`,pt())}function ft(){let e={1:[`brown`],2:[`gray`,`gray`],3:[`brown`,`brown`,`brown`],4:[`gray`,`gray`,`gray`,`gray`],5:[`brown`,`brown`,`brown`,`brown`,`brown`]};for(let t=1;t<=5;t++)e[t].forEach((e,n)=>{let r=document.getElementById(`slot-${t}-${n+1}`);r&&(r.classList.add(`filled`),r.style.padding=`0`,r.innerHTML=`<img src="/assets/brick-${e}.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:4px">`)});document.querySelectorAll(`.brick-item`).forEach(e=>{e.style.opacity=`0.2`,e.style.pointerEvents=`none`}),K(`Toà tháp 5 tầng đã được xếp hoàn thành! Giờ con hãy đếm số viên gạch màu nâu và màu xám rồi điền vào ô trống nhé!`)}function pt(){document.querySelectorAll(`.tower-slot.filled`).length===15&&(L(`correct`),K(`Tuyệt vời! Con đã xếp đủ 5 tầng toà tháp với 15 viên gạch! Giờ hãy đếm số viên gạch nâu và xám rồi điền vào ô trống nhé!`))}function mt(){let e=Number(document.getElementById(`inputBrown`)?.value),t=Number(document.getElementById(`inputGray`)?.value),n=document.getElementById(`towerFeedback`);if(e===9&&t===6)L(`correct`),q(50),M.done.push(3),n&&(n.innerHTML=`
        <div style="background:#d1fae5;border-radius:14px;padding:14px;font-weight:800;color:#065f46;text-align:center">
          ✅ Hoàn toàn chính xác! Em đã dùng 9 viên gạch màu nâu và 6 viên gạch màu xám để xếp toà tháp 5 tầng!
        </div>
      `),K(`Tuyệt đỉnh! Con đã đếm rất chính xác: 9 viên gạch nâu và 6 viên gạch xám, tổng cộng 15 viên gạch!`,!0,()=>{setTimeout(()=>N(4),1400)});else{L(`wrong`);let r=``;r=e!==9&&t!==6?`Con đếm lại cả hai màu nhé: Tầng 1, 3, 5 là gạch nâu (1 + 3 + 5), Tầng 2, 4 là gạch xám (2 + 4)!`:e===9?`Số gạch màu xám chưa đúng rồi. Tầng 2 có 2 viên, tầng 4 có 4 viên: 2 + 4 = mấy nhỉ?`:`Số gạch màu nâu chưa đúng rồi. Tầng 1 có 1 viên, tầng 3 có 3 viên, tầng 5 có 5 viên: 1 + 3 + 5 = mấy nhỉ?`,n&&(n.innerHTML=`<div style="background:#fee2e2;border-radius:14px;padding:12px;font-weight:700;color:#991b1b;text-align:center">❌ ${r}</div>`),K(r)}}function ht(){let e=document.getElementById(`g7area`);e.innerHTML=`
    <div class="prompt-box">
      🏰 <b>Bài 2:</b> Quan sát bức tranh toà lâu đài kì diệu và đếm số lượng các khối hình:
    </div>

    <div class="castle-inspect-wrap">
      <!-- Ảnh toà lâu đài đồ chơi chuẩn docx -->
      <div class="castle-img-card">
        <img src="/assets/castle-blocks.jpg" alt="Toà lâu đài đồ chơi hình khối">
      </div>

      <!-- Khung trả lời câu hỏi -->
      <div class="castle-quiz-card">
        <div class="brick-inputs-box" style="font-size:1.1rem">
          <div style="margin-bottom:12px;color:#1e3a8a;font-size:1.2rem">🏰 <b>Toà lâu đài có:</b></div>
          <div style="margin-bottom:14px">
            Có: <input type="number" id="inputCube" class="number-input-field" min="0" max="30" placeholder="?"> <b>khối lập phương</b>.
          </div>
          <div style="margin-bottom:16px">
            Có: <input type="number" id="inputBox" class="number-input-field" min="0" max="30" placeholder="?"> <b>khối hộp chữ nhật</b>.
          </div>
          <div style="text-align:center">
            <button class="action-btn btn-green" id="btnCheckCastle" style="padding:10px 24px;font-size:1.05rem">
              ✅ Kiểm tra & Hoàn thành
            </button>
          </div>
        </div>
        <div class="note-sm" style="background:#eff6ff;padding:10px;border-radius:10px;border:1px solid #bfdbfe;color:#1e40af">
          💡 <b>Gợi ý của Thần Kim Quy:</b><br>
          - Khối lập phương là các khối vuông ở các tháp 2 bên và cột giữa.<br>
          - Khối hộp chữ nhật là các khối cam nằm ngang ở chân và trụ cổng đứng màu đỏ.
        </div>
      </div>
    </div>
    <div id="castleFeedback" style="margin-top:12px"></div>
  `,document.getElementById(`btnCheckCastle`)?.addEventListener(`click`,gt),K(`Bài 2: Con hãy quan sát thật kỹ bức tranh lâu đài kì diệu, đếm xem có bao nhiêu khối lập phương và khối hộp chữ nhật nhé!`),J(`navRow7`,{onBack:()=>N(3),onNext:null,canBack:!0,canNext:!1})}function gt(){let e=Number(document.getElementById(`inputCube`)?.value),t=Number(document.getElementById(`inputBox`)?.value),n=document.getElementById(`castleFeedback`),r=e>=12&&e<=14,i=t>=4&&t<=6;if(r&&i)L(`win`),q(120),M.done.push(4),n&&(n.innerHTML=`
        <div style="background:#d1fae5;border-radius:14px;padding:16px;font-weight:800;color:#065f46;text-align:center;font-size:1.15rem">
          🎉 XUẤT SẮC! Dũng sĩ đã đếm rất chính xác: Có ${e} khối lập phương và ${t} khối hộp chữ nhật trong toà lâu đài!
        </div>
      `),K(`Xuất sắc vô cùng! Dũng sĩ đã vượt qua Thử thách cuối cùng: Chinh phục đỉnh cao! Cả 7 điều kì diệu của Vương quốc Toán học đã được mở ra!`,!0,()=>{setTimeout(()=>{Q(7,5,`Chúc mừng dũng sĩ đã xuất sắc chinh phục toàn bộ 7 thử thách trong Vương quốc Toán học!`),setTimeout(()=>{Bt()},1500)},1200)});else{L(`wrong`);let e=``;e=!r&&!i?`Con đếm lại cả hai loại khối nhé: Toà lâu đài có khoảng 12 đến 13 khối lập phương vuông, và 4 đến 5 khối hộp chữ nhật!`:r?`Số khối hộp chữ nhật chưa đúng. Con đếm 2 khối cam nằm ngang ở chân đế và 2 khối đỏ dựng đứng ở cổng: khoảng 4-5 khối nhé!`:`Số khối lập phương chưa đúng. Con đếm các khối vuông ở tháp trái (3 khối), tháp phải (3-4 khối), cột giữa (6 khối): khoảng 12-13 khối nhé!`,n&&(n.innerHTML=`<div style="background:#fef3c7;border-radius:14px;padding:12px;font-weight:700;color:#92400e;text-align:center">💡 ${e}</div>`),K(e)}}var _t=`toan1_kydieu_kimquy_state`,P={sound:!0,stars:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}};function vt(){try{localStorage.setItem(_t,JSON.stringify(P))}catch{}}function yt(){try{let e=localStorage.getItem(_t);if(e){let t=JSON.parse(e);Object.assign(P,t)}}catch{}}function bt(){return Object.values(P.stars).reduce((e,t)=>e+t,0)}function xt(e){return(P.stars[e]||0)>0}function St(){let e=document.getElementById(`totalStars`);e&&(e.textContent=bt())}var F=null;function Ct(){if(!F)try{F=new(window.AudioContext||window.webkitAudioContext)}catch{}return F&&F.state===`suspended`&&F.resume(),F}window.addEventListener(`pointerdown`,()=>{F&&F.state===`suspended`&&F.resume(),!Y&&P.sound&&!R&&z(`home`)},{once:!0});function I(e,t,n,r,i){let a=Ct();if(!a)return;let o=a.createOscillator(),s=a.createGain();o.type=n||`sine`,o.frequency.value=e;let c=a.currentTime+(r||0);s.gain.setValueAtTime(1e-4,c),s.gain.exponentialRampToValueAtTime(i||.2,c+.02),s.gain.exponentialRampToValueAtTime(1e-4,c+t),o.connect(s),s.connect(a.destination),o.start(c),o.stop(c+t)}function L(e){P.sound&&(e===`correct`?(I(523,.12,`triangle`),I(659,.12,`triangle`,.1),I(784,.18,`triangle`,.22),I(1046,.28,`triangle`,.38)):e===`wrong`?(I(200,.18,`sine`),I(160,.22,`sine`,.16)):e===`click`?I(600,.06,`square`,0,.06):e===`step`?I(400,.06,`square`,0,.08):e===`win`&&(I(523,.1,`triangle`),I(659,.1,`triangle`,.1),I(784,.1,`triangle`,.2),I(1046,.35,`triangle`,.3)))}var R=null,wt=0,Tt={home:{tempo:240,notes:[{n:523.25,d:.15,type:`sine`},{n:659.25,d:.15,type:`sine`},{n:783.99,d:.15,type:`sine`},{n:880,d:.22,type:`sine`},{n:1046.5,d:.25,type:`sine`},{n:880,d:.15,type:`sine`},{n:783.99,d:.22,type:`sine`},{n:0,d:.12,type:`sine`}]},1:{tempo:280,notes:[{n:523.25,d:.18,type:`sine`},{n:659.25,d:.18,type:`sine`},{n:783.99,d:.18,type:`sine`},{n:1046.5,d:.28,type:`sine`},{n:880,d:.18,type:`sine`},{n:783.99,d:.18,type:`sine`},{n:659.25,d:.3,type:`sine`},{n:0,d:.15,type:`sine`}]},2:{tempo:320,notes:[{n:392,d:.2,type:`triangle`},{n:493.88,d:.2,type:`triangle`},{n:587.33,d:.2,type:`triangle`},{n:659.25,d:.3,type:`triangle`},{n:587.33,d:.2,type:`triangle`},{n:493.88,d:.2,type:`triangle`},{n:392,d:.35,type:`triangle`},{n:0,d:.15,type:`triangle`}]},3:{tempo:220,notes:[{n:440,d:.12,type:`square`},{n:0,d:.08,type:`square`},{n:554.37,d:.12,type:`square`},{n:0,d:.08,type:`square`},{n:659.25,d:.15,type:`square`},{n:880,d:.22,type:`square`},{n:659.25,d:.15,type:`square`},{n:0,d:.1,type:`square`}]},4:{tempo:300,notes:[{n:440,d:.18,type:`triangle`},{n:493.88,d:.18,type:`triangle`},{n:523.25,d:.18,type:`triangle`},{n:587.33,d:.25,type:`triangle`},{n:523.25,d:.18,type:`triangle`},{n:493.88,d:.18,type:`triangle`},{n:440,d:.3,type:`triangle`},{n:0,d:.15,type:`triangle`}]},5:{tempo:350,notes:[{n:523.25,d:.15,type:`sine`},{n:392,d:.15,type:`sine`},{n:659.25,d:.15,type:`sine`},{n:392,d:.15,type:`sine`},{n:783.99,d:.22,type:`sine`},{n:659.25,d:.18,type:`sine`},{n:523.25,d:.3,type:`sine`},{n:0,d:.15,type:`sine`}]},6:{tempo:360,notes:[{n:392,d:.22,type:`triangle`},{n:440,d:.22,type:`triangle`},{n:523.25,d:.22,type:`triangle`},{n:659.25,d:.32,type:`triangle`},{n:523.25,d:.22,type:`triangle`},{n:440,d:.22,type:`triangle`},{n:392,d:.4,type:`triangle`},{n:0,d:.2,type:`triangle`}]},7:{tempo:210,notes:[{n:523.25,d:.14,type:`triangle`},{n:659.25,d:.14,type:`triangle`},{n:783.99,d:.14,type:`triangle`},{n:1046.5,d:.22,type:`triangle`},{n:880,d:.14,type:`triangle`},{n:1046.5,d:.28,type:`triangle`},{n:1174.66,d:.35,type:`triangle`},{n:0,d:.12,type:`triangle`}]}};function z(e=`home`){if(B(),!P.sound)return;let t=Ct();if(!t)return;let n=Tt[e]||Tt.home;wt=0,R=setInterval(()=>{if(!P.sound){B();return}let e=n.notes[wt%n.notes.length];if(wt++,e.n>0){let n=t.createOscillator(),r=t.createGain();n.type=e.type||`sine`,n.frequency.value=e.n;let i=t.currentTime,a=e.type===`square`?.012:.022;r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(a,i+.02),r.gain.exponentialRampToValueAtTime(1e-4,i+e.d),n.connect(r),r.connect(t.destination),n.start(i),n.stop(i+e.d)}},n.tempo)}function B(){R&&=(clearInterval(R),null)}var V=null,Et=null;function Dt(){if(!window.speechSynthesis)return;let e=speechSynthesis.getVoices();if(!e.length)return;let t=e.filter(e=>e.lang&&e.lang.toLowerCase().replace(`_`,`-`).startsWith(`vi`));Et=t.length>0?t.find(e=>{let t=e.name.toLowerCase();return[`hoaimy`,`linh`,`female`,`nữ`,`chi`,`mai`,`lan`,`google`].some(e=>t.includes(e))})||t[0]:null}`speechSynthesis`in window&&(Dt(),speechSynthesis.onvoiceschanged=Dt);function H(){if(V){try{V.pause(),V.currentTime=0}catch{}V=null}if(`speechSynthesis`in window)try{window.speechSynthesis.cancel()}catch{}}function U(e,t=null){if(H(),!P.sound){t&&setTimeout(t,500);return}let n=new Audio(e);V=n,n.onended=()=>{V=null,t&&t()},n.onerror=()=>{V=null,t&&t()};let r=n.play();r&&r.catch&&r.catch(()=>{V=null,t&&t()})}function Ot(e){if(!e)return[];let t=e.match(/[^.!?:]+[.!?:]*/g)||[e],n=[];for(let e of t)e=e.trim(),e&&n.push(e);return n.length?n:[e]}function kt(e,t,n){let r=Ot(e),i=0;function a(){if(i>=r.length){V=null,t&&setTimeout(t,300);return}let e=r[i++],o=`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(e)}&tl=vi&client=tw-ob`,s=new Audio(o);V=s;let c=setTimeout(()=>{s===V&&(s.pause(),V=null,n())},4500);s.onended=()=>{clearTimeout(c),setTimeout(a,400)},s.onerror=()=>{clearTimeout(c),V=null,n()};let l=s.play();l&&l.catch&&l.catch(()=>{clearTimeout(c),V=null,n()})}a()}function At(e,t=null){let n=String(e).replace(/<[^>]*>/g,``).replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{200D}\u{FE0F}]/gu,``).trim();if(H(),!n){t&&t();return}let r=Math.max(2500,Math.ceil(n.length*90));if(!P.sound){t&&setTimeout(t,Math.min(r,3e3));return}kt(n,t,()=>{if(`speechSynthesis`in window&&Et){try{window.speechSynthesis.cancel()}catch{}let e=new SpeechSynthesisUtterance(n);e.voice=Et,e.lang=`vi-VN`,e.rate=1,e.onend=()=>{t&&setTimeout(t,300)},e.onerror=()=>{t&&t()},window.speechSynthesis.speak(e)}else t&&setTimeout(t,Math.min(r,3500))})}var W=document.getElementById(`chatBubble`),G=document.getElementById(`chatText`);function K(e,t=!0,n=null){let r=String(e).replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{200D}\u{FE0F}]+$/gu,``).trim();G&&(G.textContent=r),W&&W.classList.add(`show`),t?At(r,n):n&&n()}function jt(){W&&W.classList.remove(`show`)}document.getElementById(`chatReplay`)?.addEventListener(`click`,()=>{G&&At(G.textContent)}),document.getElementById(`soundToggle`)?.addEventListener(`click`,function(){P.sound=!P.sound,this.textContent=P.sound?`🔊`:`🔇`,vt(),P.sound?Y&&z(Y):(H(),B())});function q(e=80){let t=document.getElementById(`confetti`);if(!t)return;let n=[`#ff6b6b`,`#ffd166`,`#06d6a0`,`#118ab2`,`#c76bf0`,`#ff9f5a`,`#f472b6`,`#60a5fa`];for(let r=0;r<e;r++){let e=document.createElement(`div`);e.className=`cf`,e.style.left=Math.random()*100+`%`,e.style.background=n[Math.floor(Math.random()*n.length)],e.style.width=e.style.height=7+Math.random()*10+`px`,e.style.borderRadius=Math.random()>.5?`50%`:`3px`,e.style.animationDuration=1.5+Math.random()*1.5+`s`,e.style.animationDelay=Math.random()*.4+`s`,t.appendChild(e),setTimeout(()=>e.remove(),4e3)}}function J(e,{onBack:t,onNext:n,canBack:r=!0,canNext:i=!0,nextLabel:a=`Tiếp tục ➡`,backLabel:o=`⬅ Quay lại`}){let s=document.getElementById(e);s&&(s.innerHTML=`
    <button class="nav-subbtn nav-btn-back" id="${e}-back" ${r?``:`disabled`}>${o}</button>
    <button class="nav-subbtn nav-btn-next" id="${e}-next" ${i?``:`disabled`}>${a}</button>
  `,r&&t&&document.getElementById(`${e}-back`)?.addEventListener(`click`,()=>{L(`click`),t()}),i&&n&&document.getElementById(`${e}-next`)?.addEventListener(`click`,()=>{L(`click`),n()}))}var Y=null,Mt={1:he,2:De,3:Le,4:We,5:Ze,6:nt,7:st};function Nt(e){document.querySelectorAll(`.screen`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(e);t&&t.classList.add(`active`),window.scrollTo({top:0,behavior:`smooth`})}function X(){H(),Y=null,jt(),Nt(`screen-home`),It(),K(`Các dũng sĩ nhí muốn tiếp tục chinh phục thử thách nào tiếp theo?`),z(`home`)}function Pt(e){H(),Y=e,Nt(`screen-g`+e),Mt[e]&&Mt[e](),z(e)}function Z(e,t,n,r=[]){let i=document.getElementById(e);if(i){i.innerHTML=``;for(let e=1;e<=t;e++){let t=document.createElement(`div`);t.className=`pill`,t.textContent=e,r.indexOf(e)>=0&&(t.className+=` done`),e===n&&(t.className+=` now`),i.appendChild(t)}}}function Q(e,t,n){P.stars[e]=(P.stars[e]||0)+t,vt(),St();let r=document.getElementById(`resultBox`),i=``;for(let e=0;e<t;e++)i+=`⭐`;r.innerHTML=`
    <div class="big-stars">${i}</div>
    <h2>🎉 Hoàn thành Thử thách ${e}! Tuyệt vời!</h2>
    <div class="result-msg">${n}</div>
    <div class="result-msg">Dũng sĩ nhận được <b>${t} sao ⭐</b> trong thử thách này!<br>Tổng số sao đã đạt: <b>${bt()}</b></div>
    <div class="action-row">
      <button class="big-btn btn-green" id="resultHome">🏠 Về bản đồ</button>
      <button class="big-btn btn-orange" id="resultReplay">🔄 Chơi lại</button>
      ${e<7?`<button class="big-btn btn-purple" id="resultNext">▶ Thử thách tiếp (${e+1})</button>`:`<button class="big-btn btn-orange" id="resultOutro">🏆 Khám phá Lời kết Hồ Gươm</button>`}
    </div>
  `,Nt(`screen-result`),q(120),L(`win`),K(`Chúc mừng các dũng sĩ nhí! Thần Rùa Kim Quy rất tự hào về tinh thần trí tuệ và nỗ lực của con!`),B(),document.getElementById(`resultHome`)?.addEventListener(`click`,X),document.getElementById(`resultReplay`)?.addEventListener(`click`,()=>Pt(e));let a=document.getElementById(`resultNext`);a&&a.addEventListener(`click`,()=>Pt(e+1));let o=document.getElementById(`resultOutro`);o&&o.addEventListener(`click`,Bt)}var Ft=[{n:1,ico:`🌲`,name:`1. Khu vườn hình học`,sub:`Hình tròn, vuông, tam giác, chữ nhật`,c:`gc-1`},{n:2,ico:`🧊`,name:`2. Phép màu hình khối`,sub:`Khối lập phương & hộp chữ nhật 3D`,c:`gc-2`},{n:3,ico:`🤖`,name:`3. Robot dẫn đường`,sub:`Trên, dưới, trái, phải, giữa`,c:`gc-3`},{n:4,ico:`📏`,name:`4. Trạm đo lường kì diệu`,sub:`Đo độ dài bằng xăng-ti-mét (cm)`,c:`gc-4`},{n:5,ico:`🕐`,name:`5. Cuộc dạo chơi đồng hồ`,sub:`Xem giờ & các ngày trong tuần`,c:`gc-5`},{n:6,ico:`🧩`,name:`6. Ghép mảnh phép màu`,sub:`Sáng tạo ghép hình trên giấy trắng`,c:`gc-7`},{n:7,ico:`🏆`,name:`7. Chinh phục đỉnh cao`,sub:`Xếp tháp gạch 5 tầng & đếm lâu đài`,c:`gc-8`}];function It(){let e=document.getElementById(`gameGrid`);e&&(e.innerHTML=``,Ft.forEach(t=>{let n=document.createElement(`div`);n.className=`game-card `+t.c;let r=``;if(xt(t.n)){let e=Math.min(P.stars[t.n],5);for(let t=0;t<e;t++)r+=`⭐`}else r=`✨ Bắt đầu!`;n.innerHTML=`
      <div class="card-emoji">${t.ico}</div>
      <div class="card-name">${t.name}</div>
      <div class="card-desc">${t.sub}</div>
      <div class="card-stars">${r}</div>
    `,n.addEventListener(`click`,()=>{L(`click`),Pt(t.n)}),e.appendChild(n)}))}var Lt=document.getElementById(`modalIntro`),$=document.getElementById(`modalOutro`);function Rt(){Lt&&Lt.classList.add(`show`),U(`/audio/intro.mp3`)}function zt(){Lt&&Lt.classList.remove(`show`),H()}function Bt(){$&&$.classList.add(`show`),q(100),U(`/audio/outro.mp3`)}function Vt(){$&&$.classList.remove(`show`),H()}document.getElementById(`btnOpenIntro`)?.addEventListener(`click`,Rt),document.getElementById(`heroIntroBtn`)?.addEventListener(`click`,Rt),document.getElementById(`closeIntroBtn`)?.addEventListener(`click`,zt),document.getElementById(`playIntroAudioBtn`)?.addEventListener(`click`,()=>U(`/audio/intro.mp3`)),document.getElementById(`startJourneyBtn`)?.addEventListener(`click`,()=>{zt(),K(`Hành trình đã bắt đầu! Con hãy chọn một trong 7 thử thách kì diệu nhé!`)}),document.getElementById(`btnOpenOutro`)?.addEventListener(`click`,Bt),document.getElementById(`closeOutroBtn`)?.addEventListener(`click`,Vt),document.getElementById(`playOutroAudioBtn`)?.addEventListener(`click`,()=>U(`/audio/outro.mp3`)),document.getElementById(`outroHomeBtn`)?.addEventListener(`click`,()=>{Vt(),X()}),document.getElementById(`brandHome`)?.addEventListener(`click`,X);for(let e=1;e<=7;e++){document.getElementById(`backBtn`+e)?.addEventListener(`click`,X);let t=document.getElementById(`guideBtn`+e);t&&t.addEventListener(`click`,()=>{L(`click`),U(`/audio/guide-g${e}.mp3`)})}document.getElementById(`backBtnResult`)?.addEventListener(`click`,X),document.getElementById(`noteToggle`)?.addEventListener(`click`,()=>{document.getElementById(`notePanel`)?.classList.toggle(`show`)});function Ht(){let e=document.getElementById(`particles`);if(!e)return;let t=[`#ffd166`,`#a855f7`,`#60a5fa`,`#4ade80`,`#f472b6`,`#fb923c`];for(let n=0;n<20;n++){let n=document.createElement(`div`);n.className=`particle`,n.style.left=Math.random()*100+`%`,n.style.width=n.style.height=4+Math.random()*8+`px`,n.style.background=t[Math.floor(Math.random()*t.length)],n.style.animationDuration=15+Math.random()*25+`s`,n.style.animationDelay=Math.random()*20+`s`,e.appendChild(n)}}yt(),It(),St(),Ht(),setTimeout(()=>{P.sound&&K(`Chào các dũng sĩ nhí! Thần Rùa Kim Quy đã sẵn sàng cùng con khám phá Vương quốc Toán học!`)},800);