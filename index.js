import{S as l,a as b,N as C,P as E,A as x,R as B}from"./assets/vendor-BPMsKYsD.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const k="https://paw-hut.b.goit.study";async function P(){return(await fetch(`${k}/api/categories`)).json()}async function j({page:e,limit:n,categoryId:o}){const r=new URLSearchParams({page:e,limit:n});o&&r.append("categoryId",o);const t=await fetch(`${k}/api/animals?${r}`);if(!t.ok)throw new Error("API error");return t.json()}function O(e){return`
        <li>
        <button class="filter-btn active" data-category="">
            Всі
        </button>
        </li>
        ${e.map(({_id:n,name:o})=>`
            <li>
            <button class="filter-btn" 
            data-category-id="${n}">
                ${o}
            </button>
            </li>
        `).join("")}
    `}function I(e=[]){return e.map(n=>{const o=n.categories.map(r=>`<span class="pet-tag">${r.name}</span>`).join("");return`
            <li class="pet-card">
            <img src="${n.image}" alt="${n.name}">

            <p class="pet-type">${n.species}</p>

            <h3 class="pet-name">${n.name}</h3>

            <div class="pet-tags">
                ${o}
            </div>

            <p class="pet-meta">
                ${n.age} · ${n.gender}
            </p>

            <p class="pet-desc">
                ${n.shortDescription}
            </p>

            <button 
                class="pet-btn" 
                data-animal-id="${n._id}">
                    Дізнатись більше
            </button>
            </li>
        `}).join("")}const _="https://paw-hut.b.goit.study/api",p=document.querySelector(".js-order-backdrop"),H=document.querySelector(".js-order-close"),h=document.querySelector(".js-order-form");let y=null;function T(e){y=e,p.classList.add("is-open"),document.body.classList.add("modal-open")}function L(){p.classList.remove("is-open"),document.body.classList.remove("modal-open"),y=null,h.classList.remove("was-submitted")}H.addEventListener("click",L);p.addEventListener("click",e=>{e.target===p&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&p.classList.contains("is-open")&&L()});h.addEventListener("submit",async e=>{e.preventDefault(),h.classList.add("was-submitted");const{name:n,phone:o,comment:r}=e.target.elements,t=o.value.replace(/\D/g,""),s={name:n.value.trim(),phone:t,comment:r.value.trim(),animalId:y};if(!s.animalId){l.fire({icon:"error",title:"Помилка",text:"Не вибрано тварину."});return}if(!s.name){l.fire({icon:"error",title:"Помилка",text:"Вкажіть ім'я."});return}if(!s.phone){l.fire({icon:"error",title:"Помилка",text:"Вкажіть номер телефону."});return}if(s.phone.length!==12){l.fire({icon:"error",title:"Помилка",text:"Невірний номер телефону."});return}if(!s.comment){l.fire({icon:"error",title:"Помилка",text:"Додайте коментар."});return}try{if(!(await fetch(`${_}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok)throw new Error("API error");l.fire({icon:"success",title:"Заявку надіслано",text:"Очікуйте на дзвінок 😊"}),e.target.reset(),L()}catch{l.fire({icon:"error",title:"Помилка",text:"Не вдалося відправити заявку. Спробуйте ще раз."})}});const m=document.querySelector("[data-modal-backdrop]"),$=document.querySelector("[data-modal-content]");document.querySelector("[data-modal-close]");let S=null;function N(e){S=e,$.innerHTML=R(e),m.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",q)}function g(){m.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",q)}function q(e){e.key==="Escape"&&g()}m.addEventListener("click",e=>{e.target===m&&g()});function R(e){return`
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
  `}$.addEventListener("click",e=>{if(e.target.closest("[data-modal-close]")){g();return}e.target.closest("[data-adopt]")&&(g(),T(S._id))});function U(){new b(".about-swiper",{modules:[C,E],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev",disabledClass:"is-disabled"},pagination:{el:document.querySelector(".why-paws-controls .swiper-pagination"),clickable:!0}})}function D(){document.querySelector(".faq-container")&&new x(".faq-container",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",activeClass:"active",openOnInit:[],collapse:!0,showMultiple:!1})}const F="https://paw-hut.b.goit.study/api";async function V(){try{const e=await fetch(`${F}/feedbacks`);if(!e.ok)throw new Error(`Помилка: ${e.status}`);return await e.json()}catch(e){throw console.error("Помилка отримання відгуків:",e),e}}const Z="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.0709%203.61234C11.4146%202.79588%2012.5854%202.79589%2012.9291%203.61235L14.9579%208.43123C15.1029%208.77543%2015.4306%209.01061%2015.8067%209.0404L21.0727%209.45748C21.9649%209.52814%2022.3267%2010.6281%2021.6469%2011.2034L17.6348%2014.5987C17.3482%2014.8412%2017.223%2015.2218%2017.3106%2015.5843L18.5363%2020.661C18.744%2021.5211%2017.7969%2022.201%2017.033%2021.7401L12.5245%2019.0196C12.2025%2018.8252%2011.7975%2018.8252%2011.4755%2019.0196L6.96699%2021.7401C6.20311%2022.201%205.25596%2021.5211%205.46363%2020.661L6.68942%2015.5843C6.77698%2015.2218%206.65182%2014.8412%206.36526%2014.5987L2.35306%2011.2034C1.67328%2010.6281%202.03507%209.52814%202.92729%209.45748L8.19336%209.0404C8.5695%209.01061%208.89716%208.77543%209.04207%208.43123L11.0709%203.61234Z'%20fill='%2302060A'/%3e%3c/svg%3e",z="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.0078%204.00098L14.0361%208.81934C14.328%209.51225%2014.9837%209.97813%2015.7275%2010.0371L20.9854%2010.4531L16.9893%2013.835H16.9883C16.4157%2014.3197%2016.1618%2015.086%2016.3389%2015.8193L17.5615%2020.8848C17.5599%2020.8857%2017.5589%2020.8872%2017.5576%2020.8877C17.5559%2020.8869%2017.5532%2020.8858%2017.5498%2020.8838L13.041%2018.1631C12.4014%2017.7772%2011.5986%2017.7772%2010.959%2018.1631L6.4502%2020.8838C6.44677%2020.8858%206.4441%2020.8869%206.44238%2020.8877C6.44085%2020.8871%206.43936%2020.8859%206.4375%2020.8848L7.66113%2015.8193C7.8271%2015.1321%207.61431%2014.416%207.11523%2013.9297L7.01172%2013.835L3.01367%2010.4531L8.27246%2010.0371C9.01627%209.97814%209.67205%209.51246%209.96387%208.81934L11.9912%204.00098C11.9936%204.00054%2011.9966%204%2012%204C12.003%204%2012.0056%204.00062%2012.0078%204.00098Z'%20stroke='%2302060A'%20stroke-width='2'/%3e%3c/svg%3e",G="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.5312%203.80664C11.7032%203.39816%2012.2968%203.39816%2012.4688%203.80664L14.4971%208.625C14.7155%209.14358%2015.2076%209.49471%2015.7676%209.53906L21.0332%209.95605C21.4909%209.99232%2021.6545%2010.5412%2021.3242%2010.8213L17.3115%2014.2168C16.8819%2014.5804%2016.6919%2015.1542%2016.8242%2015.7021L18.0508%2020.7783C18.1502%2021.1902%2017.6892%2021.5518%2017.291%2021.3115H17.29L12.7832%2018.5918C12.3023%2018.3016%2011.6977%2018.3016%2011.2168%2018.5918L6.70898%2021.3115C6.31078%2021.5518%205.84983%2021.1902%205.94922%2020.7783L7.17578%2015.7021C7.30809%2015.1543%207.11814%2014.5805%206.68848%2014.2168L2.67578%2010.8213C2.34544%2010.5412%202.5091%209.99231%202.9668%209.95605L8.23242%209.53906C8.79243%209.49471%209.28456%209.14369%209.50293%208.625L11.5312%203.80664Z'%20fill='url(%23paint0_linear_8242_16266)'%20stroke='%2302060A'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_8242_16266'%20x1='2'%20y1='12.3716'%20x2='22'%20y2='12.3716'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'/%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";async function J(){try{const e=await V();K(e.feedbacks),new b(".swiper-stories",{modules:[C,E],pagination:{el:document.querySelector(".stories-controls .swiper-pagination"),dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}catch(e){l.fire({position:"top-end",icon:"error",title:`Помилка отримання відгуків: ${e}`,showConfirmButton:!1,timer:1500})}}function K(e){const n=document.querySelector(".swiper-stories .swiper-wrapper"),o=e.map(r=>`<li class="swiper-slide" id="${r._id}">       
      <div class="story-card">
      <div class="stories-rate" data-rate="${r.rate}"></div>
      <p class="stories-descr">${r.description}</p>
      <p class="stories-author">${r.author}</p></div>
      </li>`).join("");n.insertAdjacentHTML("beforeend",o),document.querySelectorAll(".stories-rate").forEach(r=>{new B(r,{readOnly:!0,score:Number(r.dataset.rate),half:!0,starOn:Z,starOff:z,starHalf:G}).init()})}function W(){const e=document.querySelector(".mobile-menu"),n=document.querySelector(".burger-button"),o=document.querySelector(".close-button"),r=document.querySelector(".menu-container");if(e&&n&&o){const t=()=>{e.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};n.addEventListener("click",t),o.addEventListener("click",t),r.addEventListener("click",s=>{const a=s.target.closest("a"),u=s.target.closest(".menu-take-div");(a||u)&&t()}),e.addEventListener("click",s=>{s.target===e&&t()}),window.addEventListener("keydown",s=>{s.key==="Escape"&&e.classList.contains("is-open")&&t()})}}const w=document.querySelector(".js-filters"),d=document.querySelector(".js-pets-list"),f=document.querySelector(".js-load-more");if(w&&d&&f){let t=function(){return window.innerWidth>=1440?9:8},a=function(){d.innerHTML="<li>Завантаження...</li>"},e=1,n=null,o=t(),r=[];window.addEventListener("resize",()=>{o=t()}),s();async function s(){const c=await P();w.innerHTML=O(c),u(!0)}async function u(c=!1){try{a();const i=await j({page:e,limit:o,categoryId:n});if(!Array.isArray(i.animals)){d.innerHTML="<p>Нічого не знайдено</p>";return}c?r=i.animals:r=[...r,...i.animals],d.innerHTML=I(r),r.length>=i.totalItems?f.style.display="none":f.style.display="block"}catch(i){console.error(i),d.innerHTML="<p>Помилка завантаження даних</p>"}}w.addEventListener("click",c=>{c.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),c.target.classList.add("active"),n=c.target.dataset.categoryId||null,e=1,u(!0))}),f.addEventListener("click",()=>{e+=1,u()}),d.addEventListener("click",c=>{const i=c.target.closest(".pet-btn");if(!i)return;const A=i.dataset.animalId,v=r.find(M=>M._id===A);v&&N(v)})}U();D();J();W();
//# sourceMappingURL=index.js.map
