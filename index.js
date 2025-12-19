import{S as c,a as E,N as k,P as S,A as j,R as P}from"./assets/vendor-BPMsKYsD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const A="https://paw-hut.b.goit.study";async function B(){return(await fetch(`${A}/api/categories`)).json()}async function O({page:e,limit:t}){const i=new URLSearchParams({page:e,limit:t}),s=await fetch(`${A}/api/animals?${i}`);if(!s.ok)throw new Error("API error");return s.json()}function _(e){return`
        <li>
        <button class="filter-btn active" data-category="">
            Всі
        </button>
        </li>
        ${e.map(({name:t})=>`
            <li>
            <button class="filter-btn" data-category="${t}">
                ${t}
            </button>
            </li>
        `).join("")}
    `}function I(e=[]){return e.map(t=>{const i=t.categories.map(s=>`<span class="pet-tag">${s.name}</span>`).join("");return`
            <li class="pet-card" data-id="${t._id}">
            <img src="${t.image}" alt="${t.name}">

            <p class="pet-type">${t.species}</p>

            <h3 class="pet-name">${t.name}</h3>

            <div class="pet-tags">
                ${i}
            </div>

            <p class="pet-meta">
                ${t.age} · ${t.gender}
            </p>

            <p class="pet-desc">
                ${t.shortDescription}
            </p>

            <button class="pet-btn" data-animal-id="${t._id}">
                Дізнатись більше
            </button>
            </li>
        `}).join("")}const H="https://paw-hut.b.goit.study/api",u=document.querySelector(".js-order-backdrop"),N=document.querySelector(".js-order-close"),v=document.querySelector(".js-order-form");let b=null;function T(e){b=e,u.classList.add("is-open"),document.body.classList.add("modal-open")}function y(){u.classList.remove("is-open"),document.body.classList.remove("modal-open"),b=null,v.classList.remove("was-submitted")}N.addEventListener("click",y);u.addEventListener("click",e=>{e.target===u&&y()});document.addEventListener("keydown",e=>{e.key==="Escape"&&u.classList.contains("is-open")&&y()});v.addEventListener("submit",async e=>{e.preventDefault(),v.classList.add("was-submitted");const{name:t,phone:i,comment:s}=e.target.elements,r={name:t.value.trim(),phone:i.value.trim(),comment:s.value.trim(),animalId:b};if(!r.animalId){c.fire({icon:"error",title:"Помилка",text:"Не вибрано тварину."});return}if(!r.name){c.fire({icon:"error",title:"Помилка",text:"Вкажіть ім'я."});return}if(!r.phone){c.fire({icon:"error",title:"Помилка",text:"Вкажіть номер телефону."});return}try{if(!(await fetch(`${H}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("API error");c.fire({icon:"success",title:"Заявку надіслано",text:"Очікуйте на дзвінок 😊"}),e.target.reset(),y()}catch{c.fire({icon:"error",title:"Помилка",text:"Не вдалося відправити заявку. Спробуйте ще раз."})}});const g=document.querySelector("[data-modal-backdrop]"),q=document.querySelector("[data-modal-content]");document.querySelector("[data-modal-close]");let M=null;function R(e){M=e,q.innerHTML=U(e),g.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",x)}function L(){g.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",x)}function x(e){e.key==="Escape"&&L()}g.addEventListener("click",e=>{e.target===g&&L()});function U(e){return`
    <div class="modal-body">
      <img src="${e.image}" alt="${e.name}" class="modal-img"/>

      <div class="modal-info">
        <p class="modal-category">${e.species}</p>
        <h2 class="modal-name">${e.name}</h2>
        <p class="modal-meta">${e.age} · ${e.gender}</p>

        <h3>Опис:</h3>
        <p>${e.description}</p>

        <h3>Здоровʼя:</h3>
        <p>${e.healthStatus}</p>

        <h3>Поведінка:</h3>
        <p>${e.behavior}</p>

        <button class="adopt-btn" data-adopt>
          Взяти додому
        </button>
      </div>
    </div>
  `}q.addEventListener("click",e=>{if(e.target.closest("[data-modal-close]")){L();return}e.target.closest("[data-adopt]")&&(L(),T(M._id))});function F(){new E(".about-swiper",{modules:[k,S],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev",disabledClass:"is-disabled"},pagination:{el:".about-pagination",clickable:!0}})}function D(){new j(".faq",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",openMultiple:!1})}const Z="https://paw-hut.b.goit.study/api";async function G(){try{const e=await fetch(`${Z}/feedbacks`);if(!e.ok)throw new Error(`Помилка: ${e.status}`);return await e.json()}catch(e){throw console.error("Помилка отримання відгуків:",e),e}}const V="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.0709%203.61234C11.4146%202.79588%2012.5854%202.79589%2012.9291%203.61235L14.9579%208.43123C15.1029%208.77543%2015.4306%209.01061%2015.8067%209.0404L21.0727%209.45748C21.9649%209.52814%2022.3267%2010.6281%2021.6469%2011.2034L17.6348%2014.5987C17.3482%2014.8412%2017.223%2015.2218%2017.3106%2015.5843L18.5363%2020.661C18.744%2021.5211%2017.7969%2022.201%2017.033%2021.7401L12.5245%2019.0196C12.2025%2018.8252%2011.7975%2018.8252%2011.4755%2019.0196L6.96699%2021.7401C6.20311%2022.201%205.25596%2021.5211%205.46363%2020.661L6.68942%2015.5843C6.77698%2015.2218%206.65182%2014.8412%206.36526%2014.5987L2.35306%2011.2034C1.67328%2010.6281%202.03507%209.52814%202.92729%209.45748L8.19336%209.0404C8.5695%209.01061%208.89716%208.77543%209.04207%208.43123L11.0709%203.61234Z'%20fill='%2302060A'/%3e%3c/svg%3e",J="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.0078%204.00098L14.0361%208.81934C14.328%209.51225%2014.9837%209.97813%2015.7275%2010.0371L20.9854%2010.4531L16.9893%2013.835H16.9883C16.4157%2014.3197%2016.1618%2015.086%2016.3389%2015.8193L17.5615%2020.8848C17.5599%2020.8857%2017.5589%2020.8872%2017.5576%2020.8877C17.5559%2020.8869%2017.5532%2020.8858%2017.5498%2020.8838L13.041%2018.1631C12.4014%2017.7772%2011.5986%2017.7772%2010.959%2018.1631L6.4502%2020.8838C6.44677%2020.8858%206.4441%2020.8869%206.44238%2020.8877C6.44085%2020.8871%206.43936%2020.8859%206.4375%2020.8848L7.66113%2015.8193C7.8271%2015.1321%207.61431%2014.416%207.11523%2013.9297L7.01172%2013.835L3.01367%2010.4531L8.27246%2010.0371C9.01627%209.97814%209.67205%209.51246%209.96387%208.81934L11.9912%204.00098C11.9936%204.00054%2011.9966%204%2012%204C12.003%204%2012.0056%204.00062%2012.0078%204.00098Z'%20stroke='%2302060A'%20stroke-width='2'/%3e%3c/svg%3e",K="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.5312%203.80664C11.7032%203.39816%2012.2968%203.39816%2012.4688%203.80664L14.4971%208.625C14.7155%209.14358%2015.2076%209.49471%2015.7676%209.53906L21.0332%209.95605C21.4909%209.99232%2021.6545%2010.5412%2021.3242%2010.8213L17.3115%2014.2168C16.8819%2014.5804%2016.6919%2015.1542%2016.8242%2015.7021L18.0508%2020.7783C18.1502%2021.1902%2017.6892%2021.5518%2017.291%2021.3115H17.29L12.7832%2018.5918C12.3023%2018.3016%2011.6977%2018.3016%2011.2168%2018.5918L6.70898%2021.3115C6.31078%2021.5518%205.84983%2021.1902%205.94922%2020.7783L7.17578%2015.7021C7.30809%2015.1543%207.11814%2014.5805%206.68848%2014.2168L2.67578%2010.8213C2.34544%2010.5412%202.5091%209.99231%202.9668%209.95605L8.23242%209.53906C8.79243%209.49471%209.28456%209.14369%209.50293%208.625L11.5312%203.80664Z'%20fill='url(%23paint0_linear_8242_16266)'%20stroke='%2302060A'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_8242_16266'%20x1='2'%20y1='12.3716'%20x2='22'%20y2='12.3716'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'/%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";async function z(){try{const e=await G();Q(e.feedbacks),new E(".swiper-stories",{modules:[k,S],pagination:{el:document.querySelector(".stories-controls .swiper-pagination"),dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}catch(e){c.fire({position:"top-end",icon:"error",title:`Помилка отримання відгуків: ${e}`,showConfirmButton:!1,timer:1500})}}function Q(e){const t=document.querySelector(".swiper-stories .swiper-wrapper"),i=e.map(s=>`<li class="swiper-slide" id="${s._id}">       
      <div class="story-card">
      <div class="stories-rate" data-rate="${s.rate}"></div>
      <p class="stories-descr">${s.description}</p>
      <p class="stories-author">${s.author}</p></div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",i),document.querySelectorAll(".stories-rate").forEach(s=>{new P(s,{readOnly:!0,score:Number(s.dataset.rate),half:!0,starOn:V,starOff:J,starHalf:K}).init()})}const l=document.querySelector(".mobile-menu"),C=document.querySelector(".burger-button"),$=document.querySelector(".close-button"),W=document.querySelector(".menu-container");if(l&&C&&$){const e=()=>{l.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};C.addEventListener("click",e),$.addEventListener("click",e),W.addEventListener("click",t=>{t.target.nodeName,e()}),l.addEventListener("click",t=>{t.target===l&&e()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&l.classList.contains("is-open")&&e()})}const w=document.querySelector(".js-filters"),d=document.querySelector(".js-pets-list"),m=document.querySelector(".js-load-more");if(w&&d&&m){let e=1,t="";const i=9;let s=[];r();async function r(){const n=await B();w.innerHTML=_(n),o(!0)}async function o(n=!1){try{const a=await O({page:e,limit:i});if(!Array.isArray(a.animals)){d.innerHTML="<p>Нічого не знайдено</p>";return}n?s=a.animals:s=[...s,...a.animals];let p=s;t&&(p=s.filter(f=>f.categories.some(h=>h.name===t))),d.innerHTML=I(p),e*i>=a.totalItems?m.style.display="none":m.style.display="block"}catch(a){console.error(a),d.innerHTML="<p>Помилка завантаження даних</p>"}}w.addEventListener("click",n=>{n.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(a=>a.classList.remove("active")),n.target.classList.add("active"),t=n.target.dataset.category,e=1,o(!0))}),m.addEventListener("click",()=>{e+=1,o()}),d.addEventListener("click",n=>{const a=n.target.closest(".pet-btn");if(!a)return;const p=a.dataset.animalId,f=s.find(h=>h._id===p);f&&R(f)})}F();D();z();
//# sourceMappingURL=index.js.map
