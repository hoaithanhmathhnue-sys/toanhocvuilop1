(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={circle:{name:`hình tròn`,color:`#ffd166`,desc:`Đồ vật tròn xoe, không có cạnh nào nên là hình tròn.`},square:{name:`hình vuông`,color:`#9be0ff`,desc:`Đồ vật có 4 cạnh bằng nhau nên là hình vuông.`},triangle:{name:`hình tam giác`,color:`#a5f0b0`,desc:`Đồ vật có 3 cạnh nên là hình tam giác.`},rectangle:{name:`hình chữ nhật`,color:`#ffb3d1`,desc:`Đồ vật có 2 cạnh dài bằng nhau và 2 cạnh ngắn bằng nhau nên là hình chữ nhật.`}};function t(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#38bdf8" stroke="#0284c7" stroke-width="4"/><line x1="30" y1="5" x2="30" y2="55" stroke="#fff" stroke-width="3"/><line x1="5" y1="30" x2="55" y2="30" stroke="#fff" stroke-width="3"/></svg>`}function n(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="4" fill="#38bdf8" stroke="#0284c7" stroke-width="4"/><line x1="30" y1="6" x2="30" y2="54" stroke="#fff" stroke-width="3"/><line x1="6" y1="30" x2="54" y2="30" stroke="#fff" stroke-width="3"/></svg>`}function r(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#334155" stroke="#0f172a" stroke-width="3"/><circle cx="30" cy="30" r="11" fill="#cbd5e1"/><circle cx="30" cy="30" r="4" fill="#334155"/><line x1="30" y1="5" x2="30" y2="55" stroke="#94a3b8" stroke-width="2"/><line x1="5" y1="30" x2="55" y2="30" stroke="#94a3b8" stroke-width="2"/></svg>`}function i(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#fef08a" stroke="#ca8a04" stroke-width="4"/><circle cx="30" cy="30" r="3" fill="#000"/><line x1="30" y1="30" x2="30" y2="13" stroke="#000" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="30" x2="44" y2="30" stroke="#000" stroke-width="3" stroke-linecap="round"/></svg>`}function a(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="4"/><circle cx="30" cy="30" r="3" fill="#000"/><line x1="30" y1="30" x2="30" y2="13" stroke="#000" stroke-width="4" stroke-linecap="round"/><line x1="30" y1="30" x2="44" y2="30" stroke="#000" stroke-width="3" stroke-linecap="round"/></svg>`}function o(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/><circle cx="30" cy="30" r="17" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/></svg>`}function s(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="24" fill="#ec4899" stroke="#be185d" stroke-width="3"/><circle cx="23" cy="23" r="3" fill="#ffffff"/><circle cx="37" cy="23" r="3" fill="#ffffff"/><circle cx="23" cy="37" r="3" fill="#ffffff"/><circle cx="37" cy="37" r="3" fill="#ffffff"/></svg>`}function c(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="#ef4444" stroke="#b91c1c" stroke-width="3"/><rect x="12" y="25" width="36" height="10" rx="2" fill="#ffffff"/></svg>`}function l(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="6" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3"/><text x="30" y="38" font-size="28" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#ffffff">i</text></svg>`}function u(){return`<svg width="52" height="38" viewBox="0 0 60 40"><rect x="4" y="4" width="52" height="32" rx="4" fill="#f59e0b" stroke="#b45309" stroke-width="3"/><text x="30" y="26" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#ffffff">SALE</text></svg>`}function d(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="3"/><rect x="14" y="14" width="32" height="32" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/></svg>`}function ee(){return`<svg width="54" height="36" viewBox="0 0 60 40"><rect x="4" y="6" width="52" height="28" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="3"/><line x1="30" y1="6" x2="30" y2="34" stroke="#991b1b" stroke-width="2"/></svg>`}function te(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="4" fill="#0f172a"/><rect x="9" y="9" width="12" height="12" rx="2" fill="#ef4444"/><rect x="24" y="9" width="12" height="12" rx="2" fill="#3b82f6"/><rect x="39" y="9" width="12" height="12" rx="2" fill="#22c55e"/><rect x="9" y="24" width="12" height="12" rx="2" fill="#eab308"/><rect x="24" y="24" width="12" height="12" rx="2" fill="#ef4444"/><rect x="39" y="24" width="12" height="12" rx="2" fill="#3b82f6"/><rect x="9" y="39" width="12" height="12" rx="2" fill="#22c55e"/><rect x="24" y="39" width="12" height="12" rx="2" fill="#eab308"/><rect x="39" y="39" width="12" height="12" rx="2" fill="#ef4444"/></svg>`}function ne(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="6" y="6" width="48" height="48" rx="4" fill="#15803d" stroke="#166534" stroke-width="3"/><line x1="30" y1="6" x2="30" y2="54" stroke="#facc15" stroke-width="4"/><line x1="6" y1="30" x2="54" y2="30" stroke="#facc15" stroke-width="4"/></svg>`}function re(){return`<svg width="48" height="44" viewBox="0 0 60 50"><polygon points="30,4 4,46 56,46" fill="#f59e0b" stroke="#d97706" stroke-width="3"/><polygon points="30,4 30,46 56,46" fill="#d97706"/></svg>`}function ie(){return`<svg width="46" height="46" viewBox="0 0 60 60"><circle cx="30" cy="30" r="16" fill="#eab308" stroke="#ca8a04" stroke-width="2"/><g stroke="#eab308" stroke-width="4" stroke-linecap="round"><line x1="30" y1="4" x2="30" y2="9"/><line x1="30" y1="51" x2="30" y2="56"/><line x1="4" y1="30" x2="9" y2="30"/><line x1="51" y1="30" x2="56" y2="30"/><line x1="11.6" y1="11.6" x2="15.1" y2="15.1"/><line x1="44.9" y1="44.9" x2="48.4" y2="48.4"/><line x1="11.6" y1="48.4" x2="15.1" y2="44.9"/><line x1="44.9" y1="15.1" x2="48.4" y2="11.6"/></g></svg>`}function ae(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="6" fill="#f59e0b" stroke="#d97706" stroke-width="3"/><rect x="12" y="12" width="14" height="14" rx="2" fill="#b45309"/><rect x="34" y="12" width="14" height="14" rx="2" fill="#b45309"/><rect x="12" y="34" width="14" height="14" rx="2" fill="#b45309"/><rect x="34" y="34" width="14" height="14" rx="2" fill="#b45309"/></svg>`}function oe(){return`<svg width="46" height="46" viewBox="0 0 60 60"><rect x="5" y="5" width="50" height="50" rx="4" fill="#b45309" stroke="#78350f" stroke-width="3"/><rect x="12" y="12" width="36" height="36" fill="#38bdf8"/><circle cx="21" cy="21" r="4" fill="#fef08a"/><polygon points="12,48 26,30 36,42 42,34 48,48" fill="#22c55e"/></svg>`}function se(){return`<svg width="46" height="46" viewBox="0 0 60 60"><line x1="14" y1="6" x2="14" y2="54" stroke="#475569" stroke-width="4" stroke-linecap="round"/><polygon points="14,10 52,24 14,38" fill="#ef4444" stroke="#dc2626" stroke-width="2"/></svg>`}function ce(){return`<svg width="46" height="46" viewBox="0 0 60 60"><polygon points="8,52 8,12 48,52" fill="#fef08a" stroke="#ca8a04" stroke-width="3" stroke-linejoin="round"/><polygon points="16,46 16,28 34,46" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/><line x1="8" y1="52" x2="48" y2="52" stroke="#854d0e" stroke-width="2" stroke-dasharray="2,3"/><line x1="8" y1="12" x2="8" y2="52" stroke="#854d0e" stroke-width="2" stroke-dasharray="2,3"/></svg>`}function f(e,t,n=46){return`<svg width="${n}" height="${n}" viewBox="0 0 60 60"><polygon points="${e}" fill="${t}" stroke="${t}" stroke-width="2" stroke-linejoin="round"/></svg>`}var le=[{id:`tri-deu-do`,label:`Tam giác đều đỏ`,svg:()=>f(`30,4 4,56 56,56`,`#ef4444`,46),shape:`triangle`},{id:`tri-deu-xanh`,label:`Tam giác đều xanh`,svg:()=>f(`30,6 6,54 54,54`,`#3b82f6`,44),shape:`triangle`},{id:`tri-can-vang`,label:`Tam giác cân vàng`,svg:()=>f(`30,2 8,58 52,58`,`#f59e0b`,46),shape:`triangle`},{id:`tri-can-tim`,label:`Tam giác cân tím`,svg:()=>f(`30,4 10,56 50,56`,`#a855f7`,42),shape:`triangle`},{id:`tri-nhon-cam`,label:`Tam giác nhọn cam`,svg:()=>f(`30,2 18,58 42,58`,`#f97316`,40),shape:`triangle`},{id:`tri-nhon-hong`,label:`Tam giác nhọn hồng`,svg:()=>f(`30,3 20,55 40,55`,`#ec4899`,38),shape:`triangle`},{id:`tri-vuong-lc`,label:`Tam giác vuông xanh lá`,svg:()=>f(`4,56 4,4 56,56`,`#22c55e`,44),shape:`triangle`},{id:`tri-vuong-navy`,label:`Tam giác vuông xanh đậm`,svg:()=>f(`6,54 6,6 54,54`,`#1e40af`,42),shape:`triangle`}],ue={circle:[{id:`sun`,svgFn:ie,label:`Mặt trời`,isSVG:!0},{id:`moon`,emoji:`🌕`,label:`Mặt trăng`,isSVG:!1},{id:`wheel`,svgFn:r,label:`Bánh xe`,isSVG:!0},{id:`clock_round`,svgFn:i,label:`Đồng hồ`,isSVG:!0},{id:`ball`,emoji:`⚽`,label:`Quả bóng`,isSVG:!1},{id:`plate`,svgFn:o,label:`Cái đĩa`,isSVG:!0},{id:`circle_window`,svgFn:t,label:`Cửa sổ tròn`,isSVG:!0},{id:`traffic_sign`,svgFn:c,label:`Biển báo`,isSVG:!0},{id:`drum`,emoji:`🥁`,label:`Mặt trống`,isSVG:!1},{id:`button`,svgFn:s,label:`Cúc áo`,isSVG:!0},{id:`orange`,emoji:`🍊`,label:`Quả cam`,isSVG:!1},{id:`cookie`,emoji:`🍪`,label:`Bánh quy`,isSVG:!1}],triangle:[{id:`roof`,emoji:`🏠`,label:`Mái nhà`,isSVG:!1},{id:`mountain`,emoji:`⛰️`,label:`Ngọn núi`,isSVG:!1},{id:`pine_tree`,emoji:`🌲`,label:`Cây thông`,isSVG:!1},{id:`flag`,emoji:`🚩`,label:`Lá cờ`,isSVG:!1},{id:`warning_sign`,emoji:`⚠️`,label:`Biển cảnh báo`,isSVG:!1},{id:`pizza_slice`,emoji:`🍕`,label:`Miếng pizza`,isSVG:!1},{id:`tri_flag`,svgFn:se,label:`Cờ tam giác`,isSVG:!0},{id:`pyramid`,svgFn:re,label:`Kim tự tháp`,isSVG:!0},{id:`party_hat`,emoji:`🥳`,label:`Mũ chóp`,isSVG:!1},{id:`sail`,emoji:`⛵`,label:`Cánh buồm`,isSVG:!1},{id:`tri_ruler`,svgFn:ce,label:`Thước tam giác`,isSVG:!0}],square:[{id:`sq_window`,svgFn:n,label:`Cửa sổ vuông`,isSVG:!0},{id:`sq_tile`,svgFn:d,label:`Viên gạch vuông`,isSVG:!0},{id:`rubik`,svgFn:te,label:`Khối rubik`,isSVG:!0},{id:`waffle`,svgFn:ae,label:`Bánh waffle`,isSVG:!0},{id:`dice`,emoji:`🎲`,label:`Xúc xắc`,isSVG:!1},{id:`picture`,emoji:`🖼️`,label:`Bức tranh`,isSVG:!1},{id:`banh_chung`,svgFn:ne,label:`Bánh chưng`,isSVG:!0},{id:`photo_frame`,svgFn:oe,label:`Khung ảnh vuông`,isSVG:!0},{id:`sq_clock`,svgFn:a,label:`Đồng hồ vuông`,isSVG:!0},{id:`sign_sq`,svgFn:l,label:`Biển hiệu`,isSVG:!0}],rectangle:[{id:`door`,emoji:`🚪`,label:`Cánh cửa`,isSVG:!1},{id:`billboard`,svgFn:u,label:`Bảng hiệu`,isSVG:!0},{id:`book`,emoji:`📕`,label:`Quyển sách`,isSVG:!1},{id:`tv`,emoji:`📺`,label:`Màn hình TV`,isSVG:!1},{id:`computer`,emoji:`🖥️`,label:`Màn hình máy tính`,isSVG:!1},{id:`banknote`,emoji:`💵`,label:`Tờ tiền`,isSVG:!1},{id:`brick_rect`,svgFn:ee,label:`Viên gạch`,isSVG:!0},{id:`envelope`,emoji:`✉️`,label:`Bao thư`,isSVG:!1},{id:`rect_window`,emoji:`🪟`,label:`Cửa sổ`,isSVG:!1},{id:`smartphone`,emoji:`📱`,label:`Điện thoại`,isSVG:!1},{id:`ruler`,emoji:`📏`,label:`Thước kẻ`,isSVG:!1},{id:`road`,emoji:`🛣️`,label:`Con đường`,isSVG:!1}]},de={circle:[{t:`Vì nó tròn xoe, không có cạnh nào`,good:!0},{t:`Vì nó có 4 cạnh bằng nhau`,good:!1},{t:`Vì nó có 3 cạnh`,good:!1}],square:[{t:`Vì nó có 4 cạnh bằng nhau`,good:!0},{t:`Vì nó tròn, không có cạnh`,good:!1},{t:`Vì nó có 3 cạnh`,good:!1}],triangle:[{t:`Vì nó có 3 cạnh`,good:!0},{t:`Vì nó có 4 cạnh`,good:!1},{t:`Vì nó tròn xoe`,good:!1}],rectangle:[{t:`Vì nó có 2 cạnh dài và 2 cạnh ngắn`,good:!0},{t:`Vì nó chỉ có 3 cạnh`,good:!1},{t:`Vì nó tròn, không có cạnh`,good:!1}]};function p(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var m={round:1,target:`circle`,found:[],roundCfg:[],totalRounds:4};function fe(){return p([`circle`,`square`,`triangle`,`rectangle`]).map(e=>{let t=[];if(e===`triangle`){let e=p(ue.triangle).slice(0,2),n=p(le).slice(0,2);t=[...e,...n.map(e=>({id:e.id,label:e.label,svgFn:e.svg,isSVG:!0}))]}else{let n=ue[e];t=p(n).slice(0,4)}return{shape:e,targets:t}})}function pe(e){let t=e.shape,n=e.targets.map(e=>({...e,shape:t})),r=[`circle`,`square`,`triangle`,`rectangle`].filter(e=>e!==t),i=[];return r.forEach((e,t)=>{let n=t===0||t===1?3:2;p(ue[e]).slice(0,n).forEach(t=>i.push({...t,shape:e}))}),p([...n,...i])}function me(){m.round=1,m.roundCfg=fe(),m.totalRounds=m.roundCfg.length,he(1)}function he(t){let n=m.roundCfg[t-1];m.target=n.shape,m.found=[],Q(`g1pills`,m.totalRounds,t,[]);let r=document.getElementById(`g1area`),i=e[n.shape].name;r.innerHTML=`
    <div class="prompt-box">🌲 Hãy chạm vào tất cả <b>${i}</b> trong khu vườn!</div>
    <div class="forest-grid" id="g1forest"></div>
  `;let a=pe(n),o=document.getElementById(`g1forest`);a.forEach(e=>{let t=document.createElement(`div`);t.className=`obj-card`,t.id=`obj-`+e.id,t.innerHTML=e.isSVG&&e.svgFn?`<div class="icon-wrap">${e.svgFn()}</div><div class="lbl">${e.label}</div>`:`<div class="icon-wrap">${e.emoji}</div><div class="lbl">${e.label}</div>`,t.addEventListener(`click`,()=>ge(e,t,n)),o.appendChild(t)}),q(`Hãy nhìn thật kỹ và chạm vào tất cả các ${i} trong khu vườn nhé các dũng sĩ!`),Y(`navRow1`,{onBack:()=>{m.round>1&&(m.round--,he(m.round))},onNext:()=>{m.round<m.totalRounds&&(m.round++,he(m.round))},canBack:m.round>1,canNext:m.round<m.totalRounds})}function ge(t,n,r){m.found.includes(t.id)||(t.shape===m.target?(R(`correct`),m.found.push(t.id),n.classList.add(`found`),n.innerHTML+=`<div class="check-mark">✓</div>`,m.found.length===r.targets.length&&setTimeout(()=>_e(),600)):(R(`wrong`),n.classList.remove(`shake-it`),n.offsetWidth,n.classList.add(`shake-it`),setTimeout(()=>n.classList.remove(`shake-it`),500),q(`Con thử nhìn kỹ ${t.label} nhé: nó có mấy cạnh? Trông nó tròn hay thẳng? Hãy so sánh với ${e[m.target].name} – giống hay khác? Con chọn lại lần nữa xem nào!`)))}function _e(){R(`win`),q(`Con giỏi quá! Con đã tìm đủ các ${e[m.target].name}! Bây giờ Thần Kim Quy hỏi con nhé: Vì sao con biết đây là ${e[m.target].name}?`);let t=document.getElementById(`g1area`);t.innerHTML+=`
    <div class="prompt-box" style="margin-top:16px;">❓ Vì sao con biết đây là <b>${e[m.target].name}</b>?</div>
    <div class="reason-grid" id="g1reasons"></div>
  `;let n=document.getElementById(`g1reasons`);p(de[m.target]).forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>ve(t,e)),n.appendChild(t)})}function ve(t,n){n.good?(t.classList.add(`correct`),R(`correct`),document.querySelectorAll(`#g1reasons .reason-btn`).forEach(e=>{e.disabled=!0}),ye()):(t.classList.add(`wrong`),R(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),600),q(`Con thử nhìn kỹ hình này nhé: nó có mấy cạnh? Trông nó tròn hay thẳng? Hãy so sánh với ${e[m.target].name} con vừa tìm được – giống hay khác? Con chọn lại lần nữa xem nào!`))}function ye(){let t=e[m.target].desc;q(`Chính xác! ${t} Dũng sĩ giỏi quá!`,!0,()=>{setTimeout(()=>{m.round<m.totalRounds?(m.round++,he(m.round)):$(1,4,`Con đã tìm được tất cả các hình trong khu vườn hình học! Thần Rùa Kim Quy rất tự hào!`)},1500)})}var h={step:1,roundPart1:1,chalQ:0,done:[]};function be(e,t,n){let r=e/2,i=n||{front:`#ef4444`,back:`#a855f7`,top:`#3b82f6`,bottom:`#f97316`,right:`#facc15`,left:`#ec4899`};return`
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
  `}var g=null,_=null,v=null,y=null,b=null,Se=null,Ce=[{key:`front`,name:`Mặt trước`,color:`#ff5555`,hex:16733525,icon:`🌟`,colorName:`đỏ`},{key:`back`,name:`Mặt sau`,color:`#c084fc`,hex:12616956,icon:`🎈`,colorName:`tím`},{key:`top`,name:`Mặt trên`,color:`#60a5fa`,hex:6333946,icon:`☀️`,colorName:`xanh lam`},{key:`bottom`,name:`Mặt dưới`,color:`#fb923c`,hex:16486972,icon:`🍂`,colorName:`cam`},{key:`right`,name:`Mặt bên phải`,color:`#fde047`,hex:16638023,icon:`⭐`,colorName:`vàng`},{key:`left`,name:`Mặt bên trái`,color:`#4ade80`,hex:4906624,icon:`🍀`,colorName:`xanh lá`}],we=[{q:`Xoay mặt đỏ sang bên trái thì em sẽ nhìn thấy màu gì?`,ansIdx:4,hint:`Mặt đỏ ở phía trước. Con dùng chuột xoay khối sang trái xem mặt bên phải (vàng) sẽ chạy ra đâu nhé!`},{q:`Xoay mặt trái sang phải thì em thấy màu gì?`,ansIdx:1,hint:`Mặt trái là mặt màu xanh lá. Dũng sĩ hãy xoay khối 3D để xem mặt phía sau (tím) sẽ xuất hiện ở đâu nhé!`}];function Te(e){if(window.THREE&&window.THREE.OrbitControls){e();return}let t=e=>new Promise(t=>{if(document.querySelector(`script[src="${e}"]`)){t();return}let n=document.createElement(`script`);n.src=e,n.onload=t,document.head.appendChild(n)});t(`https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`).then(()=>t(`https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js`)).then(e)}function x(){Se&&=(cancelAnimationFrame(Se),null),b&&=(b.dispose(),null),v&&=(v.dispose(),v.domElement&&v.domElement.parentNode&&v.domElement.parentNode.removeChild(v.domElement),null),g=null,_=null,y=null}function Ee(e){x();let t=Math.min(e.clientWidth||320,320);g=new THREE.Scene,g.background=new THREE.Color(16777215),_=new THREE.PerspectiveCamera(50,t/280,.1,1e3),_.position.set(2.8,2.2,3.5),_.lookAt(0,0,0),v=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),v.setSize(t,280),v.setPixelRatio(window.devicePixelRatio),v.domElement.style.borderRadius=`16px`,v.domElement.style.boxShadow=`0 8px 24px rgba(0,0,0,0.2)`,v.domElement.style.cursor=`grab`,e.appendChild(v.domElement);let n=new THREE.AmbientLight(16777215,.8);g.add(n);let r=new THREE.DirectionalLight(16777215,.85);r.position.set(5,8,6),g.add(r);let i=new THREE.GridHelper(6,6,13751771,15067115);i.position.y=-1.05,g.add(i);let a=new THREE.BoxGeometry(2,2,2),o=Ce.map(e=>new THREE.MeshPhongMaterial({color:e.hex,transparent:!0,opacity:.95,shininess:100})),s=[o[4],o[5],o[2],o[3],o[0],o[1]];y=new THREE.Mesh(a,s),g.add(y);let c=new THREE.EdgesGeometry(a),l=new THREE.LineBasicMaterial({color:3355443,linewidth:2});y.add(new THREE.LineSegments(c,l)),b=new THREE.OrbitControls(_,v.domElement),b.enableDamping=!0,b.dampingFactor=.08,b.enableZoom=!0,b.enablePan=!1,b.enableRotate=!0;function u(){Se=requestAnimationFrame(u),b.update(),v.render(g,_)}u()}function De(){x(),h.step=1,h.roundPart1=1,h.chalQ=0,h.done=[],S(1)}function S(e){x(),h.step=e,Q(`g2pills`,4,e,h.done),e===1?Oe():e===2?je():e===3?Me():e===4&&Ne(0)}function Oe(){let e=document.getElementById(`g2area`),t=h.roundPart1%2==1;e.innerHTML=`
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
  `,document.getElementById(`b-left`).addEventListener(`click`,()=>ke(`left`,t?`cube`:`box`)),document.getElementById(`b-right`).addEventListener(`click`,()=>ke(`right`,t?`box`:`cube`)),q(`Hãy quan sát kỹ hai khối và bấm vào khối lập phương nhé! Khối lập phương có 6 mặt đều là hình vuông bằng nhau đó!`),Y(`navRow2`,{onBack:null,onNext:()=>S(2),canBack:!1,canNext:!0,nextLabel:`Sang Xoay khối 3D ➡`})}function ke(e,t){if(t===`cube`)R(`correct`),document.getElementById(`b-`+e)?.classList.add(`done`),document.querySelectorAll(`#g2stage .block3d`).forEach(e=>{e.style.pointerEvents=`none`}),Ae();else{R(`wrong`);let t=document.getElementById(`b-`+e);t?.classList.add(`wrongsel`),setTimeout(()=>t?.classList.remove(`wrongsel`),600),q(`Con thử nhìn kỹ khối này nhé: các mặt của nó là hình gì, có bằng nhau không? Hãy so sánh với khối lập phương 6 mặt vuông bằng nhau để chọn lại nhé!`)}}function Ae(){q(`Con chọn chính xác rồi! Giờ Thần Kim Quy hỏi: Khối lập phương có mấy mặt hình vuông?`);let e=document.getElementById(`g2ReasonArea`);e.innerHTML=`
    <div class="prompt-box" style="margin-top:14px">❓ Khối lập phương có mấy mặt hình vuông?</div>
    <div class="reason-grid" id="g2reasons"></div>
  `;let t=[{t:`Có 6 mặt hình vuông bằng nhau`,good:!0},{t:`Có 4 mặt hình vuông và 2 mặt chữ nhật`,good:!1},{t:`Chỉ có 3 mặt hình vuông`,good:!1}],n=document.getElementById(`g2reasons`);t.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.good?(t.classList.add(`correct`),R(`correct`),n.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),J(30),h.done.push(1),q(`Chính xác! Khối lập phương có 6 mặt hình vuông bằng nhau. Dũng sĩ rất xuất sắc!`,!0,()=>{setTimeout(()=>S(2),1200)})):(t.classList.add(`wrong`),R(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),600),q(`Chưa đúng rồi! Con nhớ lại xem: trên, dưới, trước, sau, trái, phải — tất cả có mấy mặt vuông bằng nhau?`))}),n.appendChild(t)})}function je(){let e=document.getElementById(`g2area`);e.innerHTML=`
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
  `,Te(()=>{let e=document.getElementById(`g2ThreeWrap`);e&&Ee(e)}),q(`Con hãy dùng chuột xoay khối lập phương 3D tự do để khám phá đủ 6 mặt với 6 màu sắc rực rỡ nhé!`),Y(`navRow2`,{onBack:()=>S(1),onNext:()=>S(3),canBack:!0,canNext:!0,nextLabel:`Mở bung các mặt ➡`})}function Me(){let e=document.getElementById(`g2area`);e.innerHTML=`
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
  `;let t=document.getElementById(`g2NetChoices`);t.querySelectorAll(`.num-choice`).forEach(e=>{e.addEventListener(`click`,()=>{Number(e.dataset.v)===6?(e.classList.add(`correct`),R(`correct`),J(40),t.querySelectorAll(`.num-choice`).forEach(e=>e.disabled=!0),document.getElementById(`g2NetFb`).innerHTML=`
          <div style="background:#d1fae5;border-radius:14px;padding:12px;font-weight:800;color:#065f46;text-align:center">
            ✅ Đúng rồi! Khối lập phương có đúng 6 mặt hình vuông bằng nhau!
          </div>
        `,q(`Chính xác! Khi mở bung ra, hình chữ thập có đúng 6 mặt hình vuông bằng nhau!`,!0,()=>{setTimeout(()=>S(4),1400)})):(e.classList.add(`wrong`),R(`wrong`),setTimeout(()=>e.classList.remove(`wrong`),500),q(`Chưa đúng rồi! Con đếm lại các ô vuông trên hình chữ thập bên trái xem có bao nhiêu ô nhé!`))})}),q(`Khối lập phương mở bung ra thành hình chữ thập. Con hãy đếm xem có tất cả bao nhiêu mặt vuông nhé!`),Y(`navRow2`,{onBack:()=>S(2),onNext:()=>S(4),canBack:!0,canNext:!0,nextLabel:`Thử thách xoay mặt ➡`})}function Ne(e){h.chalQ=e;let t=we[e],n=document.getElementById(`g2area`);n.innerHTML=`
    <div class="prompt-box">🎮 Thử thách 2.4 (Câu ${e+1}/2): <b>${t.q}</b></div>
    <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center;align-items:center;margin:12px 0">
      <div id="g2ThreeWrapChal" style="width:320px;height:270px;display:flex;justify-content:center;align-items:center"></div>
      <div style="flex:1 1 300px;max-width:380px">
        <div class="prompt-box" style="font-size:0.95rem">❓ Hãy chọn màu con nhìn thấy:</div>
        <div class="reason-grid" id="g2ChalChoices"></div>
        <div id="g2ChalFb" style="margin-top:10px"></div>
      </div>
    </div>
  `,Te(()=>{let e=document.getElementById(`g2ThreeWrapChal`);e&&Ee(e)});let r=t.ansIdx,i=[r,(r+1)%6,(r+3)%6].sort(()=>Math.random()-.5),a=document.getElementById(`g2ChalChoices`);i.forEach(n=>{let i=Ce[n],o=document.createElement(`button`);o.className=`reason-btn`,o.style.background=i.color,o.style.color=i.colorName===`vàng`?`#5b4a00`:`#fff`,o.style.borderColor=i.color,o.innerHTML=`${i.icon} Màu ${i.colorName}`,o.addEventListener(`click`,()=>{n===r?(o.style.outline=`4px solid #22c55e`,R(`correct`),J(30),a.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),document.getElementById(`g2ChalFb`).innerHTML=`<div style="background:#d1fae5;border-radius:12px;padding:10px;font-weight:700;color:#065f46;text-align:center">✅ Tuyệt vời! Chính xác! 🌟</div>`,q(`Chính xác! Con quan sát khối 3D rất tinh mắt!`,!0,()=>{setTimeout(()=>{e+1<we.length?Ne(e+1):(x(),$(2,4,`Con đã chinh phục trọn vẹn Phép màu hình khối! Thần Rùa Kim Quy rất khen ngợi con!`))},1200)})):(R(`wrong`),o.style.opacity=`0.35`,o.disabled=!0,q(`${t.hint} Con dùng chuột xoay khối thử xem nhé!`))}),a.appendChild(o)}),q(`${t.q} Dũng sĩ hãy thử dùng chuột xoay khối 3D để kiểm chứng rồi chọn đáp án nhé!`),Y(`navRow2`,{onBack:()=>S(3),onNext:null,canBack:!0,canNext:!1})}function Pe(e=38){return`<svg width="${e}" height="${e}" viewBox="0 0 60 60">
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
  </svg>`}var C={round:1,robot:[0,0],star:[2,2],steps:4,moved:0,cmd:[],levels:[],done:[]};function Fe(){return Ie([[[0,0],[2,2]],[[2,0],[0,2]],[[0,2],[2,0]],[[2,2],[0,0]],[[0,1],[2,1]],[[1,0],[1,2]],[[0,0],[2,0]],[[2,2],[0,2]],[[1,0],[2,2]],[[0,2],[2,1]],[[2,1],[0,0]],[[1,2],[1,0]]]).slice(0,3).map(([e,t])=>({robot:e,star:t,steps:Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])+1}))}function Ie(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Le(){C.round=1,C.levels=Fe(),C.done=[],w(1)}function w(e){let t=C.levels[e-1];C.robot=[...t.robot],C.star=[...t.star],C.steps=t.steps,C.moved=0,C.cmd=[],Q(`g3pills`,3,e,C.done);let n=document.getElementById(`g3area`);n.innerHTML=`
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
  `,document.getElementById(`dirUp`)?.addEventListener(`click`,()=>T(`up`)),document.getElementById(`dirDown`)?.addEventListener(`click`,()=>T(`down`)),document.getElementById(`dirLeft`)?.addEventListener(`click`,()=>T(`left`)),document.getElementById(`dirRight`)?.addEventListener(`click`,()=>T(`right`)),Re(),ze(t),Y(`navRow3`,{onBack:()=>{C.round>1&&(C.round--,w(C.round))},onNext:()=>{C.round<3&&(C.round++,w(C.round))},canBack:C.round>1,canNext:C.round<3})}function Re(){let e=document.getElementById(`g3grid`);if(e){e.innerHTML=``;for(let t=0;t<3;t++)for(let n=0;n<3;n++){let r=document.createElement(`div`);r.className=`cell`,t===C.robot[0]&&n===C.robot[1]?r.innerHTML=Pe(34):t===C.star[0]&&n===C.star[1]&&(r.className=`cell star-cell`,r.innerHTML=`⭐`),e.appendChild(r)}}}function ze(e){let t=e.star[0]-e.robot[0],n=e.star[1]-e.robot[1],r;r=t===0&&n===0?`giữa`:Math.abs(t)>Math.abs(n)?t>0?`dưới`:`trên`:Math.abs(n)>Math.abs(t)?n>0?`phải`:`trái`:t>0?`dưới`:`trên`;let i={trái:`⭐ Bên trái`,phải:`⭐ Bên phải`,trên:`⭐ Bên trên`,dưới:`⭐ Bên dưới`,giữa:`⭐ Ở giữa`},a=Ie([`trái`,`phải`,`trên`,`dưới`,`giữa`].filter(e=>e!==r)).slice(0,3),o=Ie([{t:i[r],g:!0},...a.map(e=>({t:i[e],g:!1}))]),s=document.getElementById(`g3express`);if(!s)return;s.innerHTML=`
    <div style="font-weight:800;font-size:1.05rem;color:#1e3a8a;margin-bottom:8px">
      ❓ Ngôi sao ⭐ đang nằm ở phía nào so với rô-bốt?
    </div>
    <div style="display:flex;flex-direction:column;gap:8px" id="g3q"></div>
  `;let c=document.getElementById(`g3q`);o.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.style.padding=`8px 12px`,t.style.fontSize=`0.95rem`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.g?(t.classList.add(`correct`),R(`correct`),c.querySelectorAll(`.reason-btn`).forEach(e=>{e.disabled=!0}),q(`Chính xác! Ngôi sao ở ${i[r].replace(`⭐ `,``).toLowerCase()} rô-bốt. Con giỏi quá! Bây giờ hãy điều khiển rô-bốt tới đó nhé!`)):(t.classList.add(`wrong`),R(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),600),q(`Con thử nhìn kỹ rô-bốt và ngôi sao nhé: ngôi sao đang ở phía nào so với rô-bốt? Hãy chọn lại lần nữa xem nào!`))}),c.appendChild(t)}),q(`Thần Kim Quy hỏi con nhé: Ngôi sao đang ở phía nào so với rô-bốt? Hãy trả lời rồi bấm mũi tên dẫn đường nhé!`)}function T(e){if(C.moved>=C.steps){q(`Con đã hết số bước rồi! Hãy bấm Chơi lại để thử lại nhé.`);return}R(`step`),C.cmd.push(e);let t=C.robot[0],n=C.robot[1];if(e===`up`?t--:e===`down`?t++:e===`left`?n--:e===`right`&&n++,t<0||t>2||n<0||n>2){q(`Rô-bốt đi ra ngoài lưới rồi! Hãy chọn hướng khác nhé.`),C.cmd.pop();return}C.robot=[t,n],C.moved++;let r=document.getElementById(`g3steps`);r&&(r.innerHTML=`Bước còn lại: <b>${C.steps-C.moved}</b>`),Re(),C.robot[0]===C.star[0]&&C.robot[1]===C.star[1]?Be():C.moved>=C.steps&&setTimeout(()=>{q(`Ôi, con đã hết bước mà chưa tới ngôi sao. Con thử bấm Chơi lại nhé!`);let e=document.getElementById(`g3express`);e&&(e.innerHTML+=`<div style="margin-top:10px;text-align:center"><button class="action-btn btn-orange" id="g3retry">🔄 Chơi lại</button></div>`,document.getElementById(`g3retry`)?.addEventListener(`click`,()=>w(C.round)))},600)}function Be(){R(`win`),C.done.push(C.round);let e={up:`Lên`,down:`Xuống`,left:`Trái`,right:`Phải`};q(`Chính xác! Rô-bốt đã đến ngôi sao theo đường đi: ${C.cmd.map(t=>e[t]).join(` → `)}. Dũng sĩ rất xuất sắc!`,!0,()=>{setTimeout(()=>{C.round<3?(C.round++,w(C.round)):$(3,3,`Con đã chỉ đường cho rô-bốt vượt qua mọi vị trí trên lưới! Thần Rùa Kim Quy rất tự hào!`)},1e3)})}var E={round:1,PX:20,padEnd:24,objLeft:120,items:[],done:[]},Ve=[{id:`banchai`,name:`Bàn chải`,cm:8},{id:`pencil`,name:`Cái bút chì`,cm:8},{id:`comb`,name:`Chiếc lược`,cm:9},{id:`eraser`,name:`Cục tẩy`,cm:4},{id:`lollipop`,name:`Cây kẹo mút`,cm:6},{id:`spoon`,name:`Cái muỗng`,cm:7},{id:`scissors`,name:`Cái kéo`,cm:10}];function He(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Ue(e){let t=``;return e.startsWith(`banchai`)?t=`items/banchai.png`:e.startsWith(`pencil`)?t=`items/pencil.png`:e.startsWith(`comb`)?t=`items/comb.png`:e.startsWith(`eraser`)?t=`items/eraser.png`:e.startsWith(`lollipop`)?t=`items/lollipop.png`:e.startsWith(`spoon`)?t=`items/spoon.png`:e.startsWith(`scissors`)&&(t=`items/scissors.png`),t?`<img src="${t}" alt="${e}" style="max-height:56px;width:100%;object-fit:contain">`:`<svg width="100%" height="36" viewBox="0 0 200 36"><rect x="0" y="4" width="200" height="28" rx="6" fill="#3b82f6"/></svg>`}function We(){E.round=1,E.done=[];let e=He(Ve.filter(e=>e.id!==`banchai`));E.items=[Ve[0],...e.slice(0,2)],Ge(1)}function Ge(e){let t=E.items[e-1];Q(`g4pills`,3,e,E.done);let n=document.getElementById(`g4area`);n.innerHTML=`
    <div class="prompt-box">📏 Thử thách 4.${e}: Kéo Thước Thần Kỳ để <b>vạch số 0</b> trùng với đầu <b>${t.name}</b> nhé!</div>
    <div class="measure-scene" id="mscene" style="height:210px"></div>
    <div class="align-msg" id="alignmsg"></div>
    <div id="g4predict" style="margin-top:10px"></div>
  `;let r=document.getElementById(`mscene`),i=t.cm*E.PX,a=document.createElement(`div`);a.className=`m-object`,a.style.left=E.objLeft+`px`,a.style.width=i+`px`,a.style.top=`20px`,a.innerHTML=Ue(t.id),r.appendChild(a);let o=document.createElement(`div`);o.className=`ruler ruler-modern`,o.id=`ruler`;let s=E.padEnd*2+15*E.PX;o.style.width=s+`px`;let c=``;for(let e=0;e<=15;e++){let t=E.padEnd+e*E.PX,n=e%5==0;c+=`<div class="tick" style="left:${t}px;height:${n?24:13}px;top:0;position:absolute;width:${n?3:2}px;background:#78350f"></div>`,c+=`<div class="rnum" style="left:${t}px;top:26px;font-size:14px">${e}</div>`}c+=`<div class="zero-badge" style="left:${E.padEnd}px">0</div>`,o.innerHTML=c,r.appendChild(o);let l=e===1?50:e===2?-40:70,u=E.objLeft-E.padEnd+l;o.style.left=Math.max(10,Math.min(360,u))+`px`,qe(o,t),Ke(t),Y(`navRow4`,{onBack:()=>{E.round>1&&(E.round--,Ge(E.round))},onNext:()=>{E.round<3&&(E.round++,Ge(E.round))},canBack:E.round>1,canNext:E.round<3})}function Ke(e){let t=document.getElementById(`g4predict`);if(!t)return;t.innerHTML=`
    <div class="prompt-box">❓ Con đoán <b>${e.name}</b> dài mấy xăng-ti-mét (cm)?</div>
    <div class="choice-pad" id="g4p"></div>
  `,q(`Hãy dùng chuột kéo thước để vạch số 0 trùng với đầu ${e.name}, và đoán xem ${e.name} dài mấy cm nhé!`);let n=e.cm,r=new Set([n]);for(;r.size<3;){let e=n+(Math.random()>.5?Math.ceil(Math.random()*3):-Math.ceil(Math.random()*3));e>0&&e<=15&&r.add(e)}let i=He([...r]),a=document.getElementById(`g4p`);i.forEach(t=>{let r=document.createElement(`button`);r.className=`num-choice`,r.textContent=t+` cm`,r.addEventListener(`click`,()=>{t===n?(r.classList.add(`correct`),R(`correct`),a.querySelectorAll(`.num-choice`).forEach(e=>{e.disabled=!0}),q(`Dự đoán rất hay! ${e.name} dài ${n} cm. Giờ con kéo thước để vạch 0 trùng khít đầu vật nhé!`)):(r.classList.add(`wrong`),R(`wrong`),setTimeout(()=>r.classList.remove(`wrong`),500),q(`Con thử ước lượng lại nhé: xem đuôi của ${e.name} chạm vào khoảng vạch mấy? Chọn lại lần nữa nào!`))}),a.appendChild(r)})}function qe(e,t){let n=document.getElementById(`mscene`),r=!1,i=0;e.addEventListener(`pointerdown`,t=>{r=!0,i=t.clientX-e.offsetLeft,e.setPointerCapture(t.pointerId),e.style.cursor=`grabbing`}),e.addEventListener(`pointermove`,t=>{if(!r)return;let a=t.clientX-i;a=Math.max(0,Math.min(n.clientWidth-e.clientWidth,a)),e.style.left=a+`px`}),e.addEventListener(`pointerup`,()=>{r=!1,e.style.cursor=`grab`,Je(e,t)}),e.addEventListener(`pointercancel`,()=>{r=!1,e.style.cursor=`grab`})}function Je(e,t){let n=e.offsetLeft+E.padEnd,r=Math.abs(n-E.objLeft),i=document.getElementById(`alignmsg`);r<=E.PX*.7?(i.textContent=``,R(`correct`),q(`Vạch số 0 đã trùng khít với đầu ${t.name} rồi! Giờ con nhìn xem đuôi ${t.name} chỉ vào vạch số mấy nhé!`),Ye(t)):(R(`wrong`),i.textContent=`⚠️ Vạch số 0 phải trùng với đầu ${t.name} nhé! Hãy kéo thước lại.`,q(`Vạch số 0 chưa trùng với đầu ${t.name} rồi. Con kéo thước dịch chuyển thêm một chút nhé!`))}function Ye(e){if(document.getElementById(`g4read`))return;document.getElementById(`g4area`).insertAdjacentHTML(`beforeend`,`
    <div class="prompt-box" id="g4read" style="margin-top:12px">❓ Con đọc được ${e.name} dài mấy xăng-ti-mét?</div>
    <div class="choice-pad" id="g4r"></div>
  `);let t=e.cm,n=new Set([t]);for(;n.size<3;){let e=t+(Math.random()>.5?Math.ceil(Math.random()*3):-Math.ceil(Math.random()*3));e>0&&e<=15&&n.add(e)}let r=He([...n]),i=document.getElementById(`g4r`);r.forEach(n=>{let r=document.createElement(`button`);r.className=`num-choice`,r.textContent=n+` cm`,r.addEventListener(`click`,()=>{n===t?(r.classList.add(`correct`),R(`correct`),i.querySelectorAll(`.num-choice`).forEach(e=>{e.disabled=!0}),Xe(e)):(r.classList.add(`wrong`),R(`wrong`),setTimeout(()=>r.classList.remove(`wrong`),500),q(`Con nhìn kỹ đuôi ${e.name} chạm vào vạch số mấy trên thước nhé! Hãy chọn lại nào!`))}),i.appendChild(r)})}function Xe(e){E.done.push(E.round),q(`Chính xác! Vạch số 0 trùng với một đầu, đầu kia chỉ vào vạch số ${e.cm} nên ${e.name} dài ${e.cm} cm. Dũng sĩ rất giỏi!`,!0,()=>{setTimeout(()=>{E.round<3?(E.round++,Ge(E.round)):$(4,3,`Con đã thực hành đo các đồ vật bằng thước cm thật chuẩn xác! Thần Rùa Kim Quy rất khen ngợi!`)},1200)})}var D={stage:1,hour:12,done:[]};function Ze(e,t=``){let n=e%12*30,r=50+Math.sin(n*Math.PI/180)*22,i=50-Math.cos(n*Math.PI/180)*22,a=``;for(let e=1;e<=12;e++){let t=e*30*Math.PI/180,n=50+33*Math.sin(t),r=50-33*Math.cos(t)+4.5;a+=`<text x="${n.toFixed(1)}" y="${r.toFixed(1)}" font-size="10.5" font-weight="800" fill="#6b21a8" text-anchor="middle">${e}</text>`}let o=``;for(let e=0;e<60;e++){let t=e*6*Math.PI/180,n=e%5==0,r=n?40:42,i=50+r*Math.sin(t),a=50-r*Math.cos(t),s=50+44*Math.sin(t),c=50-44*Math.cos(t);o+=`<line x1="${i.toFixed(1)}" y1="${a.toFixed(1)}" x2="${s.toFixed(1)}" y2="${c.toFixed(1)}" stroke="#a855f7" stroke-width="${n?1.6:.8}"/>`}return`<svg viewBox="0 0 100 100" width="230" style="filter:drop-shadow(0 6px 12px rgba(124,58,237,0.2))">
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
  </svg>`}function Qe(){D.stage=1,D.hour=12,D.done=[],O(1)}function O(e){D.stage=e,Q(`g5pills`,5,e,D.done),e===1?$e(6,`6 giờ sáng`,`Khoảng thời gian con vừa quay 6 giờ sáng con thường làm gì?`,[{t:`Thức dậy, tập thể dục và chuẩn bị đi học`,good:!0},{t:`Đi ngủ ban đêm`,good:!1},{t:`Ăn bữa cơm trưa`,good:!1}]):e===2?$e(11,`11 giờ trưa`,`Khoảng thời gian con vừa quay 11 giờ trưa con thường làm gì?`,[{t:`Ăn cơm trưa và nghỉ ngơi`,good:!0},{t:`Thức dậy đón bình minh`,good:!1},{t:`Chuẩn bị đi ngủ tối`,good:!1}]):e===3?$e(7,`19 giờ tối (7 giờ tối)`,`Khoảng thời gian con vừa quay 19 giờ tối con có biết ti vi phát sóng chương trình gì quen thuộc?`,[{t:`Chương trình Thời sự 19 giờ`,good:!0},{t:`Phim hoạt hình sáng sớm`,good:!1},{t:`Chương trình tập thể dục buổi sáng`,good:!1}]):e===4?tt(`Thứ Hai`,`ngày mai`,`#f59e0b`,`Thứ Ba`,[`Thứ Tư`,`Thứ Năm`]):e===5&&tt(`Thứ Tư`,`hôm qua`,`#ef4444`,`Thứ Ba`,[`Thứ Hai`,`Chủ Nhật`])}function $e(e,t,n,r){D.hour=12;let i=document.getElementById(`g5area`);i.innerHTML=`
    <div class="prompt-box">🕐 Hãy chỉnh cho Thần Kim Quy <b>${t}</b>! (Kim ngắn chỉ số ${e}, kim dài chỉ số 12)</div>
    <div class="clock-wrap" id="clockBox">${Ze(D.hour)}</div>
    <div class="clock-btns">
      <button class="action-btn btn-green" id="hourMinus">⏪ Bớt 1 giờ</button>
      <button class="action-btn btn-orange" id="hourPlus">+1 giờ ⏩</button>
      <button class="action-btn btn-blue" id="checkClock">✅ Xong! Kiểm tra</button>
    </div>
    <div id="g5ExpandArea" style="margin-top:14px"></div>
  `,document.getElementById(`hourMinus`)?.addEventListener(`click`,()=>{R(`click`),D.hour=(D.hour-2+12)%12+1,document.getElementById(`clockBox`).innerHTML=Ze(D.hour)}),document.getElementById(`hourPlus`)?.addEventListener(`click`,()=>{R(`click`),D.hour=D.hour%12+1,document.getElementById(`clockBox`).innerHTML=Ze(D.hour)}),document.getElementById(`checkClock`)?.addEventListener(`click`,()=>{D.hour===e?(R(`correct`),J(40),document.querySelectorAll(`.clock-btns button`).forEach(e=>e.disabled=!0),q(`Chính xác! Đồng hồ đã chỉ đúng ${t}! Giờ Thần Kim Quy có một câu hỏi mở rộng cho dũng sĩ nhé!`),et(n,r)):(R(`wrong`),q(`Con hãy nhìn kim ngắn nhé: hiện đang chỉ số ${D.hour}. Muốn đúng ${t}, kim ngắn phải chỉ số ${e}. Con bấm nút chỉnh lại xem nào!`))}),q(`Hãy bấm nút để xoay kim đồng hồ cho đúng ${t} nhé! Kim ngắn chỉ số ${e}, kim dài chỉ số 12.`),Y(`navRow5`,{onBack:()=>{D.stage>1&&O(D.stage-1)},onNext:()=>{D.stage<5&&O(D.stage+1)},canBack:D.stage>1,canNext:D.stage<5})}function et(e,t){let n=document.getElementById(`g5ExpandArea`);if(!n)return;n.innerHTML=`
    <div class="prompt-box" style="background:#fffbeb;border-color:#f59e0b;color:#78350f">
      ❓ <b>Câu hỏi mở rộng:</b> ${e}
    </div>
    <div class="reason-grid" id="g5ExpGrid" style="margin-top:10px"></div>
  `;let r=document.getElementById(`g5ExpGrid`);[...t].sort(()=>Math.random()-.5).forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.good?(t.classList.add(`correct`),R(`correct`),r.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),D.done.push(D.stage),q(`Chính xác! Con liên hệ thực tế rất tốt. Dũng sĩ xuất sắc lắm!`,!0,()=>{setTimeout(()=>O(D.stage+1),1200)})):(t.classList.add(`wrong`),R(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),500),q(`Chưa đúng rồi! Con nhớ lại thời gian biểu sinh hoạt hàng ngày xem nào!`))}),r.appendChild(t)})}function tt(e,t,n,r,i){let a=document.getElementById(`g5area`),o=[r,...i].sort(()=>Math.random()-.5);a.innerHTML=`
    <div class="prompt-box" style="font-size:1.2rem">
      📅 Hôm nay là <b>${e}</b>. Vậy <span style="color:${n};font-weight:800;text-decoration:underline">${t}</span> là thứ mấy?
    </div>
    <div class="choice-pad" id="g5DayPad" style="margin:20px 0"></div>
  `;let s=document.getElementById(`g5DayPad`);o.forEach(n=>{let i=document.createElement(`button`);i.className=`num-choice`,i.style.width=`auto`,i.style.padding=`10px 22px`,i.style.borderRadius=`var(--radius-xl)`,i.style.fontSize=`1.15rem`,i.textContent=n,i.addEventListener(`click`,()=>{n===r?(i.classList.add(`correct`),R(`correct`),J(30),s.querySelectorAll(`.num-choice`).forEach(e=>e.disabled=!0),D.done.push(D.stage),q(`Chính xác! Hôm nay là ${e} thì ${t} là ${r}. Con nắm rất vững thứ tự các ngày trong tuần!`,!0,()=>{setTimeout(()=>{D.stage<5?O(D.stage+1):$(5,3,`Con đã hiểu rõ xem giờ và các ngày trong tuần! Thần Rùa Kim Quy rất khen ngợi con!`)},1200)})):(i.classList.add(`wrong`),R(`wrong`),setTimeout(()=>i.classList.remove(`wrong`),500),q(`Con hãy nhớ lại thứ tự các ngày trong tuần nhé: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật. Hãy chọn lại xem nào!`))}),s.appendChild(i)}),q(`Hôm nay là ${e}. Con hãy đoán xem ${t} là thứ mấy nhé!`),Y(`navRow5`,{onBack:()=>{D.stage>1&&O(D.stage-1)},onNext:()=>{D.stage<5&&O(D.stage+1)},canBack:D.stage>1,canNext:D.stage<5})}var k={currentSample:`boat`,placedPieces:[],done:[]},A={boat:{name:`Con thuyền`,icon:`⛵`,desc:`Cánh buồm hình tam giác + thân thuyền hình chữ nhật`,svg:`<svg viewBox="0 0 160 140" width="120"><polygon points="75,10 75,90 15,90" fill="#3b82f6"/><rect x="15" y="94" width="60" height="30" rx="3" fill="#f59e0b"/><rect x="79" y="94" width="60" height="30" rx="3" fill="#ef4444"/></svg>`},house:{name:`Ngôi nhà`,icon:`🏠`,desc:`Mái nhà hình tam giác + tường nhà hình vuông / chữ nhật`,svg:`<svg viewBox="0 0 160 140" width="120"><polygon points="80,10 145,70 15,70" fill="#ef4444"/><rect x="25" y="74" width="110" height="55" rx="4" fill="#3b82f6"/><rect x="65" y="88" width="30" height="41" rx="2" fill="#fde047"/></svg>`},tree:{name:`Cây thông`,icon:`🌲`,desc:`Tán cây hình tam giác + thân cây & gốc cây hình chữ nhật`,svg:`<svg viewBox="0 0 160 140" width="120"><polygon points="80,10 135,70 25,70" fill="#22c55e"/><rect x="45" y="72" width="70" height="32" rx="3" fill="#16a34a"/><rect x="65" y="106" width="30" height="28" rx="2" fill="#92400e"/></svg>`}},nt=[{id:`tri_big`,name:`Tam giác xanh`,type:`tri`,pts:`0,70 90,70 45,0`,w:90,h:70,fill:`#3b82f6`},{id:`tri_green`,name:`Tam giác lá`,type:`tri`,pts:`0,60 80,60 40,0`,w:80,h:60,fill:`#22c55e`},{id:`tri_red`,name:`Tam giác đỏ`,type:`tri`,pts:`0,60 80,60 0,0`,w:80,h:60,fill:`#ef4444`},{id:`rect_orange`,name:`Chữ nhật cam`,type:`rect`,w:90,h:46,fill:`#f97316`},{id:`rect_red`,name:`Chữ nhật đỏ`,type:`rect`,w:80,h:42,fill:`#dc2626`},{id:`rect_brown`,name:`Chữ nhật nâu`,type:`rect`,w:42,h:60,fill:`#92400e`},{id:`sq_yellow`,name:`Hình vuông vàng`,type:`rect`,w:56,h:56,fill:`#facc15`}];function rt(){k.currentSample=`boat`,k.placedPieces=[],k.done=[],it()}function it(){Q(`g6pills`,3,1,k.done);let e=document.getElementById(`g6area`);e.innerHTML=`
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
            <button class="sample-tab-btn ${k.currentSample===`boat`?`active`:``}" data-s="boat">⛵ Thuyền buồm</button>
            <button class="sample-tab-btn ${k.currentSample===`house`?`active`:``}" data-s="house">🏠 Ngôi nhà</button>
            <button class="sample-tab-btn ${k.currentSample===`tree`?`active`:``}" data-s="tree">🌲 Cây thông</button>
          </div>
          <div class="sample-preview-box" id="samplePreview">
            ${A[k.currentSample].svg}
          </div>
          <div style="font-size:0.8rem;color:#64748b;text-align:center" id="sampleDesc">
            ${A[k.currentSample].desc}
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
  `,document.querySelectorAll(`.sample-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.sample-tab-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.s;k.currentSample=t,document.getElementById(`samplePreview`).innerHTML=A[t].svg,document.getElementById(`sampleDesc`).textContent=A[t].desc,R(`click`),q(`Con hãy quan sát mẫu ${A[t].name} và kéo các hình vào trang giấy trắng để sáng tạo theo nhé!`)})}),at(),document.getElementById(`btnClearPaper`)?.addEventListener(`click`,()=>{R(`click`),at(),q(`Đã dọn dẹp trang giấy trắng! Con thỏa sức sáng tạo ghép hình mới nhé!`)}),document.getElementById(`btnFinishCreative`)?.addEventListener(`click`,st),q(`Trang giấy trắng kì diệu đã sẵn sàng! Con hãy kéo thả các mảnh hình tam giác, hình vuông, chữ nhật để sáng tạo thành thuyền buồm, ngôi nhà hoặc cây thông nhé!`),Y(`navRow6`,{onBack:null,onNext:()=>st(),canBack:!1,canNext:!0,nextLabel:`Kiểm chứng kết quả ➡`})}function at(){let e=document.getElementById(`piecesTray`),t=document.getElementById(`paperCanvas`);!e||!t||(t.querySelectorAll(`.drag-shape`).forEach(e=>e.remove()),e.innerHTML=``,nt.forEach(n=>{let r=document.createElement(`div`);r.className=`drag-shape`,r.id=`p-`+n.id,r.style.width=n.w+`px`,r.style.height=n.h+`px`,r.style.cursor=`grab`,r.style.userSelect=`none`,r.style.touchAction=`none`,r.style.display=`inline-block`,r.style.position=`relative`,r.dataset.rotation=`0`,r.innerHTML=n.type===`tri`?`<svg width="${n.w}" height="${n.h}" viewBox="0 0 ${n.w} ${n.h}">
        <polygon points="${n.pts}" fill="${n.fill}" stroke="#fff" stroke-width="2"/>
      </svg>`:`<svg width="${n.w}" height="${n.h}" viewBox="0 0 ${n.w} ${n.h}">
        <rect width="${n.w}" height="${n.h}" rx="4" fill="${n.fill}" stroke="#fff" stroke-width="2"/>
      </svg>`,r.addEventListener(`click`,e=>{if(r.dataset.dragged===`true`)return;let t=(Number(r.dataset.rotation)+45)%360;r.dataset.rotation=t,r.style.transform=`rotate(${t}deg)`,R(`click`)}),ot(r,t),e.appendChild(r)}))}function ot(e,t){let n=!1,r=0,i=0,a=0,o=0,s=t=>{t.preventDefault(),n=!0,e.dataset.dragged=`false`;let s=t.touches?t.touches[0]:t,d=e.getBoundingClientRect();r=s.clientX-d.left,i=s.clientY-d.top,a=s.clientX,o=s.clientY,e.style.position=`fixed`,e.style.zIndex=`1000`,e.style.cursor=`grabbing`,c(s.clientX,s.clientY),document.addEventListener(`mousemove`,l),document.addEventListener(`touchmove`,l,{passive:!1}),document.addEventListener(`mouseup`,u),document.addEventListener(`touchend`,u)},c=(t,n)=>{e.style.left=t-r+`px`,e.style.top=n-i+`px`},l=t=>{if(!n)return;t.preventDefault();let r=t.touches?t.touches[0]:t;(Math.abs(r.clientX-a)>6||Math.abs(r.clientY-o)>6)&&(e.dataset.dragged=`true`),c(r.clientX,r.clientY)},u=a=>{if(!n)return;n=!1,e.style.cursor=`grab`,document.removeEventListener(`mousemove`,l),document.removeEventListener(`touchmove`,l),document.removeEventListener(`mouseup`,u),document.removeEventListener(`touchend`,u);let o=t.getBoundingClientRect(),s=a.changedTouches?a.changedTouches[0]:a;if(s.clientX>=o.left&&s.clientX<=o.right&&s.clientY>=o.top&&s.clientY<=o.bottom){R(`step`),t.appendChild(e),e.style.position=`absolute`,e.style.zIndex=`10`;let n=e.dataset.rotation||`0`,a=s.clientX-o.left-r,c=s.clientY-o.top-i;e.style.left=Math.max(0,Math.min(t.clientWidth-e.clientWidth,a))+`px`,e.style.top=Math.max(0,Math.min(t.clientHeight-e.clientHeight,c))+`px`,e.style.transform=`rotate(${n}deg)`}};e.addEventListener(`mousedown`,s),e.addEventListener(`touchstart`,s,{passive:!1})}function st(){if((document.getElementById(`paperCanvas`)?.querySelectorAll(`.drag-shape`).length||0)<2){q(`Dũng sĩ hãy kéo ít nhất 2 hoặc 3 mảnh hình vào trang giấy trắng để tạo thành tác phẩm trước khi hoàn thành nhé!`);return}R(`win`),J(60),k.done.push(1);let e=document.getElementById(`creativeFeedback`);if(e){e.innerHTML=`
      <div class="prompt-box" style="background:#ecfdf5;border-color:#10b981">
        <div style="font-weight:800;font-size:1.15rem;color:#065f46;margin-bottom:8px">
          🎉 Tác phẩm tuyệt đẹp! Giờ Thần Kim Quy hỏi con:
        </div>
        <div style="font-size:1.05rem;color:#1e293b;font-weight:700">
          ❓ Em đã dùng những hình học nào để sáng tạo nên bức tranh của mình?
        </div>
        <div class="reason-grid" id="creativeQOpts" style="margin-top:12px"></div>
      </div>
    `;let t=[{t:`Hình tam giác, hình chữ nhật và hình vuông`,good:!0},{t:`Chỉ dùng hình tròn tròn xoe`,good:!1},{t:`Không dùng hình học nào cả`,good:!1}],n=document.getElementById(`creativeQOpts`);t.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.good?(t.classList.add(`correct`),R(`correct`),J(50),n.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),q(`Chính xác! Con đã vận dụng rất khéo léo các hình tam giác, hình chữ nhật và hình vuông để tạo ra tác phẩm sáng tạo của riêng mình!`,!0,()=>{setTimeout(()=>{$(6,4,`Con đã hoàn thành bức tranh hình học sáng tạo xuất sắc! Thần Rùa Kim Quy rất tự hào!`)},1200)})):(t.classList.add(`wrong`),R(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),500),q(`Con hãy nhìn lại các mảnh hình trên trang giấy trắng nhé: đó là những hình gì có cạnh thẳng?`))}),n.appendChild(t)})}q(`Tác phẩm thật tuyệt vời! Thần Kim Quy hỏi con: Con đã dùng những hình học nào để ghép nên tác phẩm này?`)}var j={part:1,towerSlots:{},done:[]};function ct(){j.part=1,j.towerSlots={},j.done=[],M(1)}function M(e){j.part=e,Q(`g7pills`,4,e,j.done),e===1?lt():e===2?ut():e===3?pt():e===4&&Ot()}function lt(){let e=document.getElementById(`g7area`);e.innerHTML=`
    <div class="prompt-box" style="font-size:0.9rem;color:#64748b">🏆 Ôn tập nhanh · Câu 1/2</div>
    <div class="prompt-box" style="font-size:1.2rem">
      ❓ <b>Khối lập phương</b> có bao nhiêu mặt và các mặt là hình gì?
    </div>
    <div class="reason-grid" id="g7q1Grid" style="margin:20px 0"></div>
  `;let t=[{t:`Có 6 mặt đều là hình vuông bằng nhau`,good:!0},{t:`Có 4 mặt hình vuông và 2 mặt hình chữ nhật`,good:!1},{t:`Có 3 mặt hình tam giác`,good:!1}],n=document.getElementById(`g7q1Grid`);t.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.good?(t.classList.add(`correct`),R(`correct`),n.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),j.done.push(1),q(`Chính xác! Khối lập phương có 6 mặt đều là hình vuông bằng nhau!`,!0,()=>{setTimeout(()=>M(2),1e3)})):(t.classList.add(`wrong`),R(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),500),q(`Con nhớ lại đặc điểm khối lập phương nhé: 6 mặt đều là hình gì bằng nhau?`))}),n.appendChild(t)}),q(`Khởi động Chinh phục đỉnh cao! Khối lập phương có mấy mặt và các mặt là hình gì con nhỉ?`),Y(`navRow7`,{onBack:null,onNext:()=>M(2),canBack:!1,canNext:!0,nextLabel:`Sang Câu 2 ➡`})}function ut(){let e=document.getElementById(`g7area`);e.innerHTML=`
    <div class="prompt-box" style="font-size:0.9rem;color:#64748b">🏆 Ôn tập nhanh · Câu 2/2</div>
    <div class="prompt-box" style="font-size:1.2rem">
      ❓ Khi thực hành đo độ dài đồ vật bằng thước kẻ, <b>vạch nào</b> phải trùng với đầu đồ vật?
    </div>
    <div class="reason-grid" id="g7q2Grid" style="margin:20px 0"></div>
  `;let t=[{t:`Vạch số 0 trên thước kẻ`,good:!0},{t:`Vạch số 1 trên thước kẻ`,good:!1},{t:`Mép ngoài cùng của thước kẻ`,good:!1}],n=document.getElementById(`g7q2Grid`);t.forEach(e=>{let t=document.createElement(`button`);t.className=`reason-btn`,t.textContent=e.t,t.addEventListener(`click`,()=>{e.good?(t.classList.add(`correct`),R(`correct`),n.querySelectorAll(`.reason-btn`).forEach(e=>e.disabled=!0),j.done.push(2),q(`Rất chính xác! Luôn luôn đặt vạch số 0 trùng với một đầu đồ vật khi đo!`,!0,()=>{setTimeout(()=>M(3),1e3)})):(t.classList.add(`wrong`),R(`wrong`),setTimeout(()=>t.classList.remove(`wrong`),500),q(`Chưa đúng rồi! Khi đo cm, ta bắt đầu đếm từ vạch số mấy con nhỉ?`))}),n.appendChild(t)}),q(`Khi đo độ dài bằng thước, vạch số mấy phải trùng với một đầu của đồ vật?`),Y(`navRow7`,{onBack:()=>M(1),onNext:()=>M(3),canBack:!0,canNext:!0,nextLabel:`Sang Bài 1 (Xếp tháp gạch) ➡`})}var N={W:68,H:26,dX:20,dY:-12,baseX:42,baseY:168,layerColors:{1:`orange`,2:`gray`,3:`orange`,4:`gray`,5:`orange`}};function dt(e,t){let{W:n,H:r,dX:i,dY:a,baseX:o,baseY:s}=N,c=o+(5-e)*(n/2),l=s-(5-e)*r,u=c+(t-1)*n,d=l;return{bx:u,by:d,W:n,H:r,dX:i,dY:a,front:`${u},${d} ${u+n},${d} ${u+n},${d+r} ${u},${d+r}`,top:`${u},${d} ${u+i},${d+a} ${u+n+i},${d+a} ${u+n},${d}`,right:`${u+n},${d} ${u+n+i},${d+a} ${u+n+i},${d+r+a} ${u+n},${d+r}`}}function ft(e){let t=e===`orange`,n=t?`url(#gTopOr)`:`url(#gTopGr)`,r=t?`url(#gFrontOr)`:`url(#gFrontGr)`,i=t?`url(#gRightOr)`:`url(#gRightGr)`,a=t?`#c2410c`:`#334155`;return`
    <svg viewBox="0 0 74 34" class="brick-3d-thumb">
      <defs>
        <linearGradient id="gTopOr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffa057"/><stop offset="100%" stop-color="#ea580c"/>
        </linearGradient>
        <linearGradient id="gFrontOr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ea580c"/><stop offset="100%" stop-color="#b43a06"/>
        </linearGradient>
        <linearGradient id="gRightOr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c2410c"/><stop offset="100%" stop-color="#7c2402"/>
        </linearGradient>
        <linearGradient id="gTopGr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#64748b"/><stop offset="100%" stop-color="#475569"/>
        </linearGradient>
        <linearGradient id="gFrontGr" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3e4856"/><stop offset="100%" stop-color="#242c37"/>
        </linearGradient>
        <linearGradient id="gRightGr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#222933"/><stop offset="100%" stop-color="#11161d"/>
        </linearGradient>
      </defs>
      <!-- Top Face -->
      <polygon points="4,11 18,2 68,2 54,11" fill="${n}" stroke="${a}" stroke-width="0.8"/>
      <!-- Right Face -->
      <polygon points="54,11 68,2 68,20 54,29" fill="${i}" stroke="${a}" stroke-width="0.8"/>
      <!-- Front Face -->
      <polygon points="4,11 54,11 54,29 4,29" fill="${r}" stroke="${a}" stroke-width="0.8"/>
      <!-- Highlight line -->
      <line x1="4" y1="11" x2="54" y2="11" stroke="#fff" stroke-opacity="0.6" stroke-width="1.2"/>
    </svg>
  `}function pt(){let e=document.getElementById(`g7area`);j.towerSlots={};for(let e=1;e<=5;e++)for(let t=1;t<=e;t++)j.towerSlots[`${e}-${t}`]=null;let t=``;for(let e=5;e>=1;e--){let n=N.layerColors[e];for(let r=1;r<=e;r++){let{bx:i,by:a,W:o,H:s,front:c,top:l,right:u}=dt(e,r),d=`${e}-${r}`,ee=i+o/2,te=a+s/2+4;t+=`
        <g class="tower-slot-g" id="slot-g-${d}" data-layer="${e}" data-col="${r}" data-key="${d}" data-target="${n}">
          <!-- Top Face -->
          <polygon id="poly-top-${d}" points="${l}" class="slot-poly-top"
            fill="rgba(241, 245, 249, 0.45)" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
          <!-- Right Face -->
          <polygon id="poly-right-${d}" points="${u}" class="slot-poly-right"
            fill="rgba(203, 213, 225, 0.4)" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
          <!-- Front Face -->
          <polygon id="poly-front-${d}" points="${c}" class="slot-poly-front"
            fill="rgba(248, 250, 252, 0.65)" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,2"/>
          <!-- Highlight edge line -->
          <line id="line-hi-${d}" x1="${i}" y1="${a}" x2="${i+o}" y2="${a}"
            stroke="#ffffff" stroke-opacity="0" stroke-width="1.2"/>
          <!-- Text label (mờ khi chưa xếp) -->
          <text id="txt-${d}" x="${ee}" y="${te}" font-size="11" font-weight="900"
            font-family="sans-serif" text-anchor="middle" fill="#94a3b8" pointer-events="none">Tầng ${e}</text>
        </g>
      `}}e.innerHTML=`
    <div class="prompt-box">
      🧱 <b>Bài 1:</b> Cho các viên gạch màu nâu (cam) và xám, em hãy xếp thành hình toà tháp 5 tầng (lưu ý dùng hết số gạch để xếp).
    </div>

    <div class="tower-game-wrap">
      <!-- Toà tháp 5 tầng phối cảnh 3D xếp khít -->
      <div class="tower-build-zone">
        <div style="font-weight:800;font-size:0.95rem;color:#b45309;margin-bottom:8px;display:flex;align-items:center;gap:6px">
          🏰 <b>Toà tháp 5 tầng</b> <span>(Kéo gạch vào các tầng xếp khít)</span>
        </div>

        <div class="tower-svg-container" id="towerSvgWrap">
          <svg viewBox="0 0 460 215" id="towerSvg">
            <defs>
              <linearGradient id="gradTopOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffa55c"/><stop offset="100%" stop-color="#ea580c"/>
              </linearGradient>
              <linearGradient id="gradFrontOrange" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ea580c"/><stop offset="100%" stop-color="#b43a06"/>
              </linearGradient>
              <linearGradient id="gradRightOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#c2410c"/><stop offset="100%" stop-color="#7c2402"/>
              </linearGradient>
              <linearGradient id="gradTopGray" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#64748b"/><stop offset="100%" stop-color="#475569"/>
              </linearGradient>
              <linearGradient id="gradFrontGray" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#3e4856"/><stop offset="100%" stop-color="#242c37"/>
              </linearGradient>
              <linearGradient id="gradRightGray" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#222933"/><stop offset="100%" stop-color="#11161d"/>
              </linearGradient>
            </defs>
            ${t}
          </svg>
        </div>

        <div style="font-size:0.82rem;color:#64748b;margin-top:8px;font-weight:700">
          💡 <i>Mẹo: Con có thể bấm vào viên gạch đã xếp trên tháp để gỡ ra khay rời!</i>
        </div>
      </div>

      <!-- Khay gạch rời & Điền số -->
      <div class="brick-tray-zone">
        <div class="brick-palette">
          <div class="brick-palette-title">
            <span>🧱 <b>Kho gạch rời</b> (Kéo thả hoặc Bấm vào gạch):</span>
          </div>

          <!-- Nhóm 9 gạch cam -->
          <div class="brick-subgroup">
            <div class="brick-subgroup-lbl">
              <span style="font-size:1.1rem">🟧</span> Gạch màu cam (nâu) — Còn lại: <b id="remBrownCount" style="color:#ea580c">9</b>/9 viên
            </div>
            <div class="brick-3d-grid" id="trayBrownGrid"></div>
          </div>

          <!-- Nhóm 6 gạch xám -->
          <div class="brick-subgroup">
            <div class="brick-subgroup-lbl">
              <span style="font-size:1.1rem">⬛</span> Gạch màu xám — Còn lại: <b id="remGrayCount" style="color:#475569">6</b>/6 viên
            </div>
            <div class="brick-3d-grid" id="trayGrayGrid"></div>
          </div>

          <!-- Các nút thao tác -->
          <div class="brick-actions-row">
            <button class="action-btn btn-blue" id="btnAutoStack" style="padding:8px 16px;font-size:0.88rem;min-height:auto">
              ⚡ Xếp nhanh mẫu tháp
            </button>
            <button class="action-btn btn-orange" id="btnResetTower" style="padding:8px 16px;font-size:0.88rem;min-height:auto">
              🔄 Xếp lại từ đầu
            </button>
          </div>
        </div>

        <!-- Ô điền số theo chuẩn docx -->
        <div class="brick-inputs-box">
          <div style="margin-bottom:8px;font-size:1rem;color:#92400e">❓ <b>Điền số thích hợp vào ô trống:</b></div>
          <div style="line-height:2.1">
            Em đã dùng <input type="number" id="inputBrown" class="number-input-field" min="0" max="20" placeholder="?"> viên gạch màu nâu (cam)<br>
            và <input type="number" id="inputGray" class="number-input-field" min="0" max="20" placeholder="?"> viên gạch màu xám để xếp toà tháp.
          </div>
          <div style="margin-top:12px;text-align:center">
            <button class="action-btn btn-green" id="btnCheckTower" style="padding:10px 24px;font-size:1.05rem;min-height:auto">
              ✅ Kiểm tra kết quả
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="towerFeedback" style="margin-top:10px"></div>
  `,mt(),St(),document.getElementById(`btnAutoStack`)?.addEventListener(`click`,()=>{R(`step`),wt()}),document.getElementById(`btnResetTower`)?.addEventListener(`click`,()=>{R(`click`),Tt()}),document.getElementById(`btnCheckTower`)?.addEventListener(`click`,Dt),q(`Bài 1: Cho các viên gạch màu nâu và xám, em hãy kéo thả các viên gạch vào toà tháp 5 tầng và đếm xem đã dùng bao nhiêu viên gạch mỗi loại nhé!`),Y(`navRow7`,{onBack:()=>M(2),onNext:()=>M(4),canBack:!0,canNext:!0,nextLabel:`Sang Bài 2 (Đếm lâu đài) ➡`})}function mt(){let e=document.getElementById(`trayBrownGrid`),t=document.getElementById(`trayGrayGrid`);if(!(!e||!t)){e.innerHTML=``,t.innerHTML=``;for(let t=1;t<=9;t++){let n=document.createElement(`div`);n.className=`brick-3d-item`,n.id=`tray-item-brown-${t}`,n.dataset.color=`orange`,n.dataset.index=t,n.title=`Gạch cam số ${t} (Kéo hoặc Bấm để xếp)`,n.innerHTML=ft(`orange`),ht(n,`orange`),e.appendChild(n)}for(let e=1;e<=6;e++){let n=document.createElement(`div`);n.className=`brick-3d-item`,n.id=`tray-item-gray-${e}`,n.dataset.color=`gray`,n.dataset.index=e,n.title=`Gạch xám số ${e} (Kéo hoặc Bấm để xếp)`,n.innerHTML=ft(`gray`),ht(n,`gray`),t.appendChild(n)}P()}}function ht(e,t){let n=!1,r=!1,i=0,a=0,o=null,s=t=>{e.classList.contains(`is-used`)||(n=!0,r=!1,i=t.clientX,a=t.clientY,window.addEventListener(`pointermove`,c),window.addEventListener(`pointerup`,l),window.addEventListener(`pointercancel`,l))},c=s=>{if(!n)return;let c=s.clientX-i,l=s.clientY-a;!r&&Math.hypot(c,l)>6&&(r=!0,e.classList.add(`is-dragging`),o=document.createElement(`div`),o.className=`brick-drag-ghost`,o.innerHTML=ft(t),document.body.appendChild(o)),r&&o&&(o.style.left=s.clientX+`px`,o.style.top=s.clientY+`px`,gt(s.clientX,s.clientY,t))},l=i=>{if(n){if(n=!1,window.removeEventListener(`pointermove`,c),window.removeEventListener(`pointerup`,l),window.removeEventListener(`pointercancel`,l),e.classList.remove(`is-dragging`),r){o&&=(o.remove(),null);let n=vt(i.clientX,i.clientY,t);_t(),n&&(bt(n.dataset.key,t),e.classList.add(`is-used`),P(),R(`step`))}else{let n=yt(t);n&&(bt(n,t),e.classList.add(`is-used`),P(),R(`step`))}}};e.addEventListener(`pointerdown`,s)}function gt(e,t,n){_t();let r=vt(e,t,n);r&&r.classList.add(`hover-target`)}function _t(){document.querySelectorAll(`.tower-slot-g.hover-target`).forEach(e=>{e.classList.remove(`hover-target`)})}function vt(e,t,n){let r=document.elementsFromPoint(e,t);for(let e of r){let t=e.closest(`.tower-slot-g`);if(t){let e=t.dataset.key;if(!j.towerSlots[e]&&t.dataset.target===n)return t}}let i=document.getElementById(`towerSvg`);if(!i)return null;let a=i.getBoundingClientRect();if(e>=a.left-20&&e<=a.right+20&&t>=a.top-20&&t<=a.bottom+20){let r=null,i=70;return document.querySelectorAll(`.tower-slot-g[data-target="${n}"]`).forEach(n=>{let a=n.dataset.key;if(!j.towerSlots[a]){let a=n.getBoundingClientRect(),o=a.left+a.width/2,s=a.top+a.height/2,c=Math.hypot(e-o,t-s);c<i&&(i=c,r=n)}}),r}return null}function yt(e){for(let t=5;t>=1;t--)if(N.layerColors[t]===e)for(let e=1;e<=t;e++){let n=`${t}-${e}`;if(!j.towerSlots[n])return n}return null}function bt(e,t){j.towerSlots[e]=t;let n=document.getElementById(`slot-g-${e}`);if(!n)return;let r=t===`orange`,i=document.getElementById(`poly-top-${e}`),a=document.getElementById(`poly-right-${e}`),o=document.getElementById(`poly-front-${e}`),s=document.getElementById(`line-hi-${e}`),c=document.getElementById(`txt-${e}`);i&&(i.setAttribute(`fill`,r?`url(#gradTopOrange)`:`url(#gradTopGray)`),i.setAttribute(`stroke`,r?`#ea580c`:`#475569`),i.setAttribute(`stroke-width`,`0.8`),i.removeAttribute(`stroke-dasharray`)),a&&(a.setAttribute(`fill`,r?`url(#gradRightOrange)`:`url(#gradRightGray)`),a.setAttribute(`stroke`,r?`#9a3412`:`#1e293b`),a.setAttribute(`stroke-width`,`0.8`),a.removeAttribute(`stroke-dasharray`)),o&&(o.setAttribute(`fill`,r?`url(#gradFrontOrange)`:`url(#gradFrontGray)`),o.setAttribute(`stroke`,r?`#c2410c`:`#334155`),o.setAttribute(`stroke-width`,`0.8`),o.removeAttribute(`stroke-dasharray`)),s&&s.setAttribute(`stroke-opacity`,`0.6`),c&&(c.style.display=`none`),n.classList.add(`is-filled`,`just-snapped`),setTimeout(()=>n.classList.remove(`just-snapped`),400),Et()}function xt(e){let t=j.towerSlots[e];if(!t)return;j.towerSlots[e]=null;let n=document.getElementById(`slot-g-${e}`);if(!n)return;let[r]=e.split(`-`),i=document.getElementById(`poly-top-${e}`),a=document.getElementById(`poly-right-${e}`),o=document.getElementById(`poly-front-${e}`),s=document.getElementById(`line-hi-${e}`),c=document.getElementById(`txt-${e}`);i&&(i.setAttribute(`fill`,`rgba(241, 245, 249, 0.45)`),i.setAttribute(`stroke`,`#94a3b8`),i.setAttribute(`stroke-width`,`1`),i.setAttribute(`stroke-dasharray`,`3,2`)),a&&(a.setAttribute(`fill`,`rgba(203, 213, 225, 0.4)`),a.setAttribute(`stroke`,`#94a3b8`),a.setAttribute(`stroke-width`,`1`),a.setAttribute(`stroke-dasharray`,`3,2`)),o&&(o.setAttribute(`fill`,`rgba(248, 250, 252, 0.65)`),o.setAttribute(`stroke`,`#64748b`),o.setAttribute(`stroke-width`,`1.4`),o.setAttribute(`stroke-dasharray`,`4,2`)),s&&s.setAttribute(`stroke-opacity`,`0`),c&&(c.style.display=``,c.textContent=`Tầng ${r}`),n.classList.remove(`is-filled`),Ct(t),P(),R(`click`)}function St(){document.querySelectorAll(`.tower-slot-g`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.key;j.towerSlots[t]&&xt(t)})})}function Ct(e){let t=e===`orange`?`#trayBrownGrid .brick-3d-item.is-used`:`#trayGrayGrid .brick-3d-item.is-used`,n=document.querySelectorAll(t);n.length>0&&n[n.length-1].classList.remove(`is-used`)}function P(){let e=document.querySelectorAll(`#trayBrownGrid .brick-3d-item:not(.is-used)`).length,t=document.querySelectorAll(`#trayGrayGrid .brick-3d-item:not(.is-used)`).length,n=document.getElementById(`remBrownCount`),r=document.getElementById(`remGrayCount`);n&&(n.textContent=e),r&&(r.textContent=t)}function wt(){for(let e=1;e<=5;e++){let t=N.layerColors[e];for(let n=1;n<=e;n++)bt(`${e}-${n}`,t)}document.querySelectorAll(`.brick-3d-item`).forEach(e=>e.classList.add(`is-used`)),P(),q(`Toà tháp 5 tầng đã được xếp hoàn chỉnh khít rịt! Giờ con hãy đếm số viên gạch màu nâu (cam) và màu xám rồi điền vào ô trống nhé!`)}function Tt(){for(let e=1;e<=5;e++)for(let t=1;t<=e;t++)j.towerSlots[`${e}-${t}`]&&(j.towerSlots[`${e}-${t}`]=null,xt(`${e}-${t}`));document.querySelectorAll(`.brick-3d-item`).forEach(e=>e.classList.remove(`is-used`)),P(),q(`Đã dọn sạch toà tháp! Con hãy tự tay kéo thả các viên gạch vào từng tầng để hoàn thành toà tháp 5 tầng nhé!`)}function Et(){let e=0;for(let t in j.towerSlots)j.towerSlots[t]&&e++;e===15&&(R(`correct`),q(`Tuyệt vời! Con đã xếp đủ 5 tầng toà tháp với 15 viên gạch! Giờ hãy đếm số viên gạch màu nâu và màu xám rồi điền vào ô trống nhé!`))}function Dt(){let e=Number(document.getElementById(`inputBrown`)?.value),t=Number(document.getElementById(`inputGray`)?.value),n=document.getElementById(`towerFeedback`);if(e===9&&t===6)R(`correct`),J(50),j.done.push(3),n&&(n.innerHTML=`
        <div style="background:#d1fae5;border-radius:14px;padding:14px;font-weight:800;color:#065f46;text-align:center;box-shadow:0 4px 12px rgba(16,185,129,0.2)">
          ✅ Hoàn toàn chính xác! Em đã dùng 9 viên gạch màu nâu và 6 viên gạch màu xám để xếp toà tháp 5 tầng!
        </div>
      `),q(`Tuyệt đỉnh! Con đã đếm rất chính xác: 9 viên gạch nâu và 6 viên gạch xám, tổng cộng 15 viên gạch!`,!0,()=>{setTimeout(()=>M(4),1400)});else{R(`wrong`);let r=``;r=e!==9&&t!==6?`Con đếm lại cả hai màu nhé: Tầng 1, 3, 5 là gạch nâu (1 + 3 + 5 = 9), Tầng 2, 4 là gạch xám (2 + 4 = 6)!`:e===9?`Số gạch màu xám chưa đúng rồi. Tầng 2 có 2 viên, tầng 4 có 4 viên: 2 + 4 = mấy nhỉ?`:`Số gạch màu nâu chưa đúng rồi. Tầng 1 có 1 viên, tầng 3 có 3 viên, tầng 5 có 5 viên: 1 + 3 + 5 = mấy nhỉ?`,n&&(n.innerHTML=`<div style="background:#fee2e2;border-radius:14px;padding:12px;font-weight:700;color:#991b1b;text-align:center">❌ ${r}</div>`),q(r)}}function Ot(){let e=document.getElementById(`g7area`);e.innerHTML=`
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
  `,document.getElementById(`btnCheckCastle`)?.addEventListener(`click`,kt),q(`Bài 2: Con hãy quan sát thật kỹ bức tranh lâu đài kì diệu, đếm xem có bao nhiêu khối lập phương và khối hộp chữ nhật nhé!`),Y(`navRow7`,{onBack:()=>M(3),onNext:null,canBack:!0,canNext:!1})}function kt(){let e=Number(document.getElementById(`inputCube`)?.value),t=Number(document.getElementById(`inputBox`)?.value),n=document.getElementById(`castleFeedback`),r=e>=12&&e<=14,i=t>=4&&t<=6;if(r&&i)R(`win`),J(120),j.done.push(4),n&&(n.innerHTML=`
        <div style="background:#d1fae5;border-radius:14px;padding:16px;font-weight:800;color:#065f46;text-align:center;font-size:1.15rem">
          🎉 XUẤT SẮC! Dũng sĩ đã đếm rất chính xác: Có ${e} khối lập phương và ${t} khối hộp chữ nhật trong toà lâu đài!
        </div>
      `),q(`Xuất sắc vô cùng! Dũng sĩ đã vượt qua Thử thách cuối cùng: Chinh phục đỉnh cao! Cả 7 điều kì diệu của Vương quốc Toán học đã được mở ra!`,!0,()=>{setTimeout(()=>{$(7,5,`Chúc mừng dũng sĩ đã xuất sắc chinh phục toàn bộ 7 thử thách trong Vương quốc Toán học!`),setTimeout(()=>{en()},1500)},1200)});else{R(`wrong`);let e=``;e=!r&&!i?`Con đếm lại cả hai loại khối nhé: Toà lâu đài có khoảng 12 đến 13 khối lập phương vuông, và 4 đến 5 khối hộp chữ nhật!`:r?`Số khối hộp chữ nhật chưa đúng. Con đếm 2 khối cam nằm ngang ở chân đế và 2 khối đỏ dựng đứng ở cổng: khoảng 4-5 khối nhé!`:`Số khối lập phương chưa đúng. Con đếm các khối vuông ở tháp trái (3 khối), tháp phải (3-4 khối), cột giữa (6 khối): khoảng 12-13 khối nhé!`,n&&(n.innerHTML=`<div style="background:#fef3c7;border-radius:14px;padding:12px;font-weight:700;color:#92400e;text-align:center">💡 ${e}</div>`),q(e)}}var At=`toan1_kydieu_kimquy_state`,F={sound:!0,stars:{1:0,2:0,3:0,4:0,5:0,6:0,7:0}};function jt(){try{localStorage.setItem(At,JSON.stringify(F))}catch{}}function Mt(){try{let e=localStorage.getItem(At);if(e){let t=JSON.parse(e);Object.assign(F,t)}}catch{}}function Nt(){return Object.values(F.stars).reduce((e,t)=>e+t,0)}function Pt(e){return(F.stars[e]||0)>0}function Ft(){let e=document.getElementById(`totalStars`);e&&(e.textContent=Nt())}var I=null;function It(){if(!I)try{I=new(window.AudioContext||window.webkitAudioContext)}catch{}return I&&I.state===`suspended`&&I.resume(),I}window.addEventListener(`pointerdown`,()=>{I&&I.state===`suspended`&&I.resume(),!X&&F.sound&&!z&&B(`home`)},{once:!0});function L(e,t,n,r,i){let a=It();if(!a)return;let o=a.createOscillator(),s=a.createGain();o.type=n||`sine`,o.frequency.value=e;let c=a.currentTime+(r||0);s.gain.setValueAtTime(1e-4,c),s.gain.exponentialRampToValueAtTime(i||.2,c+.02),s.gain.exponentialRampToValueAtTime(1e-4,c+t),o.connect(s),s.connect(a.destination),o.start(c),o.stop(c+t)}function R(e){F.sound&&(e===`correct`?(L(523,.12,`triangle`),L(659,.12,`triangle`,.1),L(784,.18,`triangle`,.22),L(1046,.28,`triangle`,.38)):e===`wrong`?(L(200,.18,`sine`),L(160,.22,`sine`,.16)):e===`click`?L(600,.06,`square`,0,.06):e===`step`?L(400,.06,`square`,0,.08):e===`win`&&(L(523,.1,`triangle`),L(659,.1,`triangle`,.1),L(784,.1,`triangle`,.2),L(1046,.35,`triangle`,.3)))}var z=null,Lt=0,Rt={home:{tempo:240,notes:[{n:523.25,d:.15,type:`sine`},{n:659.25,d:.15,type:`sine`},{n:783.99,d:.15,type:`sine`},{n:880,d:.22,type:`sine`},{n:1046.5,d:.25,type:`sine`},{n:880,d:.15,type:`sine`},{n:783.99,d:.22,type:`sine`},{n:0,d:.12,type:`sine`}]},1:{tempo:280,notes:[{n:523.25,d:.18,type:`sine`},{n:659.25,d:.18,type:`sine`},{n:783.99,d:.18,type:`sine`},{n:1046.5,d:.28,type:`sine`},{n:880,d:.18,type:`sine`},{n:783.99,d:.18,type:`sine`},{n:659.25,d:.3,type:`sine`},{n:0,d:.15,type:`sine`}]},2:{tempo:320,notes:[{n:392,d:.2,type:`triangle`},{n:493.88,d:.2,type:`triangle`},{n:587.33,d:.2,type:`triangle`},{n:659.25,d:.3,type:`triangle`},{n:587.33,d:.2,type:`triangle`},{n:493.88,d:.2,type:`triangle`},{n:392,d:.35,type:`triangle`},{n:0,d:.15,type:`triangle`}]},3:{tempo:220,notes:[{n:440,d:.12,type:`square`},{n:0,d:.08,type:`square`},{n:554.37,d:.12,type:`square`},{n:0,d:.08,type:`square`},{n:659.25,d:.15,type:`square`},{n:880,d:.22,type:`square`},{n:659.25,d:.15,type:`square`},{n:0,d:.1,type:`square`}]},4:{tempo:300,notes:[{n:440,d:.18,type:`triangle`},{n:493.88,d:.18,type:`triangle`},{n:523.25,d:.18,type:`triangle`},{n:587.33,d:.25,type:`triangle`},{n:523.25,d:.18,type:`triangle`},{n:493.88,d:.18,type:`triangle`},{n:440,d:.3,type:`triangle`},{n:0,d:.15,type:`triangle`}]},5:{tempo:350,notes:[{n:523.25,d:.15,type:`sine`},{n:392,d:.15,type:`sine`},{n:659.25,d:.15,type:`sine`},{n:392,d:.15,type:`sine`},{n:783.99,d:.22,type:`sine`},{n:659.25,d:.18,type:`sine`},{n:523.25,d:.3,type:`sine`},{n:0,d:.15,type:`sine`}]},6:{tempo:360,notes:[{n:392,d:.22,type:`triangle`},{n:440,d:.22,type:`triangle`},{n:523.25,d:.22,type:`triangle`},{n:659.25,d:.32,type:`triangle`},{n:523.25,d:.22,type:`triangle`},{n:440,d:.22,type:`triangle`},{n:392,d:.4,type:`triangle`},{n:0,d:.2,type:`triangle`}]},7:{tempo:210,notes:[{n:523.25,d:.14,type:`triangle`},{n:659.25,d:.14,type:`triangle`},{n:783.99,d:.14,type:`triangle`},{n:1046.5,d:.22,type:`triangle`},{n:880,d:.14,type:`triangle`},{n:1046.5,d:.28,type:`triangle`},{n:1174.66,d:.35,type:`triangle`},{n:0,d:.12,type:`triangle`}]}};function B(e=`home`){if(V(),!F.sound)return;let t=It();if(!t)return;let n=Rt[e]||Rt.home;Lt=0,z=setInterval(()=>{if(!F.sound){V();return}let e=n.notes[Lt%n.notes.length];if(Lt++,e.n>0){let n=t.createOscillator(),r=t.createGain();n.type=e.type||`sine`,n.frequency.value=e.n;let i=t.currentTime,a=e.type===`square`?.012:.022;r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(a,i+.02),r.gain.exponentialRampToValueAtTime(1e-4,i+e.d),n.connect(r),r.connect(t.destination),n.start(i),n.stop(i+e.d)}},n.tempo)}function V(){z&&=(clearInterval(z),null)}var H=null,zt=null;function Bt(){if(!window.speechSynthesis)return;let e=speechSynthesis.getVoices();if(!e.length)return;let t=e.filter(e=>e.lang&&e.lang.toLowerCase().replace(`_`,`-`).startsWith(`vi`));zt=t.length>0?t.find(e=>{let t=e.name.toLowerCase();return[`hoaimy`,`linh`,`female`,`nữ`,`chi`,`mai`,`lan`,`google`].some(e=>t.includes(e))})||t[0]:null}`speechSynthesis`in window&&(Bt(),speechSynthesis.onvoiceschanged=Bt);function U(){if(H){try{H.pause(),H.currentTime=0}catch{}H=null}if(`speechSynthesis`in window)try{window.speechSynthesis.cancel()}catch{}}function W(e,t=null){if(U(),!F.sound){t&&setTimeout(t,500);return}let n=new Audio(e);H=n,n.onended=()=>{H=null,t&&t()},n.onerror=()=>{H=null,t&&t()};let r=n.play();r&&r.catch&&r.catch(()=>{H=null,t&&t()})}function Vt(e){if(!e)return[];let t=e.match(/[^.!?:]+[.!?:]*/g)||[e],n=[];for(let e of t)e=e.trim(),e&&n.push(e);return n.length?n:[e]}function Ht(e,t,n){let r=Vt(e),i=0;function a(){if(i>=r.length){H=null,t&&setTimeout(t,300);return}let e=r[i++],o=`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(e)}&tl=vi&client=tw-ob`,s=new Audio(o);H=s;let c=setTimeout(()=>{s===H&&(s.pause(),H=null,n())},4500);s.onended=()=>{clearTimeout(c),setTimeout(a,400)},s.onerror=()=>{clearTimeout(c),H=null,n()};let l=s.play();l&&l.catch&&l.catch(()=>{clearTimeout(c),H=null,n()})}a()}function Ut(e,t=null){let n=String(e).replace(/<[^>]*>/g,``).replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{200D}\u{FE0F}]/gu,``).trim();if(U(),!n){t&&t();return}let r=Math.max(2500,Math.ceil(n.length*90));if(!F.sound){t&&setTimeout(t,Math.min(r,3e3));return}Ht(n,t,()=>{if(`speechSynthesis`in window&&zt){try{window.speechSynthesis.cancel()}catch{}let e=new SpeechSynthesisUtterance(n);e.voice=zt,e.lang=`vi-VN`,e.rate=1,e.onend=()=>{t&&setTimeout(t,300)},e.onerror=()=>{t&&t()},window.speechSynthesis.speak(e)}else t&&setTimeout(t,Math.min(r,3500))})}var G=document.getElementById(`chatBubble`),K=document.getElementById(`chatText`);function q(e,t=!0,n=null){let r=String(e).replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{200D}\u{FE0F}]+$/gu,``).trim();K&&(K.textContent=r),G&&G.classList.add(`show`),t?Ut(r,n):n&&n()}function Wt(){G&&G.classList.remove(`show`)}document.getElementById(`chatReplay`)?.addEventListener(`click`,()=>{K&&Ut(K.textContent)}),document.getElementById(`soundToggle`)?.addEventListener(`click`,function(){F.sound=!F.sound,this.textContent=F.sound?`🔊`:`🔇`,jt(),F.sound?X&&B(X):(U(),V())});function J(e=80){let t=document.getElementById(`confetti`);if(!t)return;let n=[`#ff6b6b`,`#ffd166`,`#06d6a0`,`#118ab2`,`#c76bf0`,`#ff9f5a`,`#f472b6`,`#60a5fa`];for(let r=0;r<e;r++){let e=document.createElement(`div`);e.className=`cf`,e.style.left=Math.random()*100+`%`,e.style.background=n[Math.floor(Math.random()*n.length)],e.style.width=e.style.height=7+Math.random()*10+`px`,e.style.borderRadius=Math.random()>.5?`50%`:`3px`,e.style.animationDuration=1.5+Math.random()*1.5+`s`,e.style.animationDelay=Math.random()*.4+`s`,t.appendChild(e),setTimeout(()=>e.remove(),4e3)}}function Y(e,{onBack:t,onNext:n,canBack:r=!0,canNext:i=!0,nextLabel:a=`Tiếp tục ➡`,backLabel:o=`⬅ Quay lại`}){let s=document.getElementById(e);s&&(s.innerHTML=`
    <button class="nav-subbtn nav-btn-back" id="${e}-back" ${r?``:`disabled`}>${o}</button>
    <button class="nav-subbtn nav-btn-next" id="${e}-next" ${i?``:`disabled`}>${a}</button>
  `,r&&t&&document.getElementById(`${e}-back`)?.addEventListener(`click`,()=>{R(`click`),t()}),i&&n&&document.getElementById(`${e}-next`)?.addEventListener(`click`,()=>{R(`click`),n()}))}var X=null,Gt={1:me,2:De,3:Le,4:We,5:Qe,6:rt,7:ct};function Kt(e){document.querySelectorAll(`.screen`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(e);t&&t.classList.add(`active`),window.scrollTo({top:0,behavior:`smooth`})}function Z(){U(),X=null,Wt(),Kt(`screen-home`),Yt(),q(`Các dũng sĩ nhí muốn tiếp tục chinh phục thử thách nào tiếp theo?`),B(`home`)}function qt(e){U(),X=e,Kt(`screen-g`+e),Gt[e]&&Gt[e](),B(e)}function Q(e,t,n,r=[]){let i=document.getElementById(e);if(i){i.innerHTML=``;for(let e=1;e<=t;e++){let t=document.createElement(`div`);t.className=`pill`,t.textContent=e,r.indexOf(e)>=0&&(t.className+=` done`),e===n&&(t.className+=` now`),i.appendChild(t)}}}function $(e,t,n){F.stars[e]=(F.stars[e]||0)+t,jt(),Ft();let r=document.getElementById(`resultBox`),i=``;for(let e=0;e<t;e++)i+=`⭐`;r.innerHTML=`
    <div class="big-stars">${i}</div>
    <h2>🎉 Hoàn thành Thử thách ${e}! Tuyệt vời!</h2>
    <div class="result-msg">${n}</div>
    <div class="result-msg">Dũng sĩ nhận được <b>${t} sao ⭐</b> trong thử thách này!<br>Tổng số sao đã đạt: <b>${Nt()}</b></div>
    <div class="action-row">
      <button class="big-btn btn-green" id="resultHome">🏠 Về bản đồ</button>
      <button class="big-btn btn-orange" id="resultReplay">🔄 Chơi lại</button>
      ${e<7?`<button class="big-btn btn-purple" id="resultNext">▶ Thử thách tiếp (${e+1})</button>`:`<button class="big-btn btn-orange" id="resultOutro">🏆 Khám phá Lời kết Hồ Gươm</button>`}
    </div>
  `,Kt(`screen-result`),J(120),R(`win`),q(`Chúc mừng các dũng sĩ nhí! Thần Rùa Kim Quy rất tự hào về tinh thần trí tuệ và nỗ lực của con!`),V(),document.getElementById(`resultHome`)?.addEventListener(`click`,Z),document.getElementById(`resultReplay`)?.addEventListener(`click`,()=>qt(e));let a=document.getElementById(`resultNext`);a&&a.addEventListener(`click`,()=>qt(e+1));let o=document.getElementById(`resultOutro`);o&&o.addEventListener(`click`,en)}var Jt=[{n:1,ico:`🌲`,name:`1. Khu vườn hình học`,sub:`Hình tròn, vuông, tam giác, chữ nhật`,c:`gc-1`},{n:2,ico:`🧊`,name:`2. Phép màu hình khối`,sub:`Khối lập phương & hộp chữ nhật 3D`,c:`gc-2`},{n:3,ico:`🤖`,name:`3. Robot dẫn đường`,sub:`Trên, dưới, trái, phải, giữa`,c:`gc-3`},{n:4,ico:`📏`,name:`4. Trạm đo lường kì diệu`,sub:`Đo độ dài bằng xăng-ti-mét (cm)`,c:`gc-4`},{n:5,ico:`🕐`,name:`5. Cuộc dạo chơi đồng hồ`,sub:`Xem giờ & các ngày trong tuần`,c:`gc-5`},{n:6,ico:`🧩`,name:`6. Ghép mảnh phép màu`,sub:`Sáng tạo ghép hình trên giấy trắng`,c:`gc-7`},{n:7,ico:`🏆`,name:`7. Chinh phục đỉnh cao`,sub:`Xếp tháp gạch 5 tầng & đếm lâu đài`,c:`gc-8`}];function Yt(){let e=document.getElementById(`gameGrid`);e&&(e.innerHTML=``,Jt.forEach(t=>{let n=document.createElement(`div`);n.className=`game-card `+t.c;let r=``;if(Pt(t.n)){let e=Math.min(F.stars[t.n],5);for(let t=0;t<e;t++)r+=`⭐`}else r=`✨ Bắt đầu!`;n.innerHTML=`
      <div class="card-emoji">${t.ico}</div>
      <div class="card-name">${t.name}</div>
      <div class="card-desc">${t.sub}</div>
      <div class="card-stars">${r}</div>
    `,n.addEventListener(`click`,()=>{R(`click`),qt(t.n)}),e.appendChild(n)}))}var Xt=document.getElementById(`modalIntro`),Zt=document.getElementById(`modalOutro`);function Qt(){Xt&&Xt.classList.add(`show`),W(`/audio/intro.mp3`)}function $t(){Xt&&Xt.classList.remove(`show`),U()}function en(){Zt&&Zt.classList.add(`show`),J(100),W(`/audio/outro.mp3`)}function tn(){Zt&&Zt.classList.remove(`show`),U()}document.getElementById(`btnOpenIntro`)?.addEventListener(`click`,Qt),document.getElementById(`heroIntroBtn`)?.addEventListener(`click`,Qt),document.getElementById(`closeIntroBtn`)?.addEventListener(`click`,$t),document.getElementById(`playIntroAudioBtn`)?.addEventListener(`click`,()=>W(`/audio/intro.mp3`)),document.getElementById(`startJourneyBtn`)?.addEventListener(`click`,()=>{$t(),q(`Hành trình đã bắt đầu! Con hãy chọn một trong 7 thử thách kì diệu nhé!`)}),document.getElementById(`btnOpenOutro`)?.addEventListener(`click`,en),document.getElementById(`closeOutroBtn`)?.addEventListener(`click`,tn),document.getElementById(`playOutroAudioBtn`)?.addEventListener(`click`,()=>W(`/audio/outro.mp3`)),document.getElementById(`outroHomeBtn`)?.addEventListener(`click`,()=>{tn(),Z()}),document.getElementById(`brandHome`)?.addEventListener(`click`,Z);for(let e=1;e<=7;e++){document.getElementById(`backBtn`+e)?.addEventListener(`click`,Z);let t=document.getElementById(`guideBtn`+e);t&&t.addEventListener(`click`,()=>{R(`click`),W(`/audio/guide-g${e}.mp3`)})}document.getElementById(`backBtnResult`)?.addEventListener(`click`,Z),document.getElementById(`noteToggle`)?.addEventListener(`click`,()=>{document.getElementById(`notePanel`)?.classList.toggle(`show`)});function nn(){let e=document.getElementById(`particles`);if(!e)return;let t=[`#ffd166`,`#a855f7`,`#60a5fa`,`#4ade80`,`#f472b6`,`#fb923c`];for(let n=0;n<20;n++){let n=document.createElement(`div`);n.className=`particle`,n.style.left=Math.random()*100+`%`,n.style.width=n.style.height=4+Math.random()*8+`px`,n.style.background=t[Math.floor(Math.random()*t.length)],n.style.animationDuration=15+Math.random()*25+`s`,n.style.animationDelay=Math.random()*20+`s`,e.appendChild(n)}}Mt(),Yt(),Ft(),nn(),setTimeout(()=>{F.sound&&q(`Chào các dũng sĩ nhí! Thần Rùa Kim Quy đã sẵn sàng cùng con khám phá Vương quốc Toán học!`)},800);