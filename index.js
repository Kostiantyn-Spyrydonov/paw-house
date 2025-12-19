import{S as w,N as v,P as L,A as k,a as q,R as A,s as M,b as P,c as j}from"./assets/vendor-Ba_Npt7T.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();const $="https://paw-hut.b.goit.study";async function O(){return(await fetch(`${$}/api/categories`)).json()}async function B({page:e,limit:t}){const i=new URLSearchParams({page:e,limit:t}),s=await fetch(`${$}/api/animals?${i}`);if(!s.ok)throw new Error("API error");return s.json()}function H(e){return`
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
    `}function C(e=[]){return e.map(t=>{const i=t.categories.map(s=>`<span class="pet-tag">${s.name}</span>`).join("");return`
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
        `}).join("")}const f=document.querySelector("[data-modal-backdrop]"),E=document.querySelector("[data-modal-content]");document.querySelector("[data-modal-close]");function N(e){E.innerHTML=T(e),f.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",S)}function m(){f.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",S)}function S(e){e.key==="Escape"&&m()}f.addEventListener("click",e=>{e.target===f&&m()});function T(e){return`
    <div class="modal-body">
      <img src="${e.image}" alt="${e.name}" class="modal-img"/>

      <div class="modal-info">
        <p class="modal-category">${e.species}</p>
        <h2 class="modal-name">${e.name}</h2>
        <p class="modal-meta">${e.age} · ${e.sex}</p>

        <h3>Опис:</h3>
        <p>${e.description}</p>

        <h3>Здоровʼя:</h3>
        <p>${e.health}</p>

        <h3>Поведінка:</h3>
        <p>${e.behavior}</p>

        <button class="adopt-btn" data-adopt>
          Взяти додому
        </button>
      </div>
    </div>
  `}E.addEventListener("click",e=>{if(e.target.closest("[data-modal-close]")){m();return}e.target.closest("[data-adopt]")&&(m(),openOrderModal(animal.id))});function _(){new w(".about-swiper",{modules:[v,L],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev",disabledClass:"is-disabled"},pagination:{el:".about-pagination",clickable:!0}})}function x(){new k(".faq",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",openMultiple:!1})}const I="https://paw-hut.b.goit.study/api";async function R(){try{const e=await fetch(`${I}/feedbacks`);if(!e.ok)throw new Error(`Помилка: ${e.status}`);return await e.json()}catch(e){throw console.error("Помилка отримання відгуків:",e),e}}async function F(){try{const e=await R();U(e.feedbacks),new w(".swiper-stories",{modules:[v,L],pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}catch(e){q.fire({position:"top-end",icon:"error",title:`Помилка отримання відгуків: ${e}`,showConfirmButton:!1,timer:1500})}}function U(e){const t=document.querySelector(".swiper-stories .swiper-wrapper"),i=e.map(s=>`<li class="swiper-slide" id="${s._id}">       
      <div class="story-card">
      <div class="stories-rate" data-rate="${s.rate}"></div>
      <p class="stories-descr">${s.description}</p>
      <p class="stories-author">${s.author}</p></div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",i),document.querySelectorAll(".stories-rate").forEach(s=>{new A(s,{readOnly:!0,score:Number(s.dataset.rate),half:!0,starOn:M,starOff:P,starHalf:j}).init()})}const c=document.querySelector(".mobile-menu"),y=document.querySelector(".burger-button"),h=document.querySelector(".close-button");if(c&&y&&h){const e=()=>{c.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};y.addEventListener("click",e),h.addEventListener("click",e),c.addEventListener("click",t=>{t.target===c&&e()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&c.classList.contains("is-open")&&e()})}const b=document.querySelector(".js-filters"),l=document.querySelector(".js-pets-list"),p=document.querySelector(".js-load-more");if(b&&l&&p){let e=1,t="";const i=9;let s=[];r();async function r(){const o=await O();b.innerHTML=H(o),n(!0)}async function n(o=!1){try{const a=await B({page:e,limit:i});if(!Array.isArray(a.animals)){l.innerHTML="<p>Нічого не знайдено</p>";return}o?s=a.animals:s=[...s,...a.animals];let d=s;t&&(d=s.filter(u=>u.categories.some(g=>g.name===t))),l.innerHTML=C(d),e*i>=a.totalItems?p.style.display="none":p.style.display="block"}catch(a){console.error(a),l.innerHTML="<p>Помилка завантаження даних</p>"}}b.addEventListener("click",o=>{o.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(a=>a.classList.remove("active")),o.target.classList.add("active"),t=o.target.dataset.category,e=1,n(!0))}),p.addEventListener("click",()=>{e+=1,n()}),l.addEventListener("click",o=>{const a=o.target.closest(".pet-btn");if(!a)return;const d=a.dataset.animalId,u=s.find(g=>g._id===d);u&&N(u)})}_();x();F();
//# sourceMappingURL=index.js.map
