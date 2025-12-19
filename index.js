import{S as g,N as b,P as y,A as L,a as $,R as E,s as S,b as A,c as q}from"./assets/vendor-Ba_Npt7T.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const w="https://paw-hut.b.goit.study";async function k(){return(await fetch(`${w}/api/categories`)).json()}async function j({page:e,limit:t}){const a=new URLSearchParams({page:e,limit:t}),s=await fetch(`${w}/api/animals?${a}`);if(!s.ok)throw new Error("API error");return s.json()}function M(e){return`
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
    `}function P(e=[]){return e.map(t=>{const a=t.categories.map(s=>`<span class="pet-tag">${s.name}</span>`).join("");return`
            <li class="pet-card" data-id="${t._id}">
            <img src="${t.image}" alt="${t.name}">

            <p class="pet-type">${t.species}</p>

            <h3 class="pet-name">${t.name}</h3>

            <div class="pet-tags">
                ${a}
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
        `}).join("")}function B(){new g(".about-swiper",{modules:[b,y],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev",disabledClass:"is-disabled"},pagination:{el:".about-pagination",clickable:!0}})}function O(){new L(".faq",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",openMultiple:!1})}const C="https://paw-hut.b.goit.study/api";async function H(){try{const e=await fetch(`${C}/feedbacks`);if(!e.ok)throw new Error(`Помилка: ${e.status}`);return await e.json()}catch(e){throw console.error("Помилка отримання відгуків:",e),e}}async function N(){try{const e=await H();R(e.feedbacks),new g(".swiper-stories",{modules:[b,y],pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}catch(e){$.fire({position:"top-end",icon:"error",title:`Помилка отримання відгуків: ${e}`,showConfirmButton:!1,timer:1500})}}function R(e){const t=document.querySelector(".swiper-stories .swiper-wrapper"),a=e.map(s=>`<li class="swiper-slide" id="${s._id}">       
      <div class="story-card">
      <div class="stories-rate" data-rate="${s.rate}"></div>
      <p class="stories-descr">${s.description}</p>
      <p class="stories-author">${s.author}</p></div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",a),document.querySelectorAll(".stories-rate").forEach(s=>{new E(s,{readOnly:!0,score:Number(s.dataset.rate),half:!0,starOn:S,starOff:A,starHalf:q}).init()})}const c=document.querySelector(".mobile-menu"),f=document.querySelector(".burger-button"),m=document.querySelector(".close-button");if(c&&f&&m){const e=()=>{c.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};f.addEventListener("click",e),m.addEventListener("click",e),c.addEventListener("click",t=>{t.target===c&&e()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&c.classList.contains("is-open")&&e()})}const d=document.querySelector(".js-filters"),l=document.querySelector(".js-pets-list"),u=document.querySelector(".js-load-more");if(d&&l&&u){let e=1,t="";const a=9;let s=[];r();async function r(){const i=await k();d.innerHTML=M(i),n(!0)}async function n(i=!1){try{const o=await j({page:e,limit:a});if(!Array.isArray(o.animals)){l.innerHTML="<p>Нічого не знайдено</p>";return}i?s=o.animals:s=[...s,...o.animals];let p=s;t&&(p=s.filter(h=>h.categories.some(v=>v.name===t))),l.innerHTML=P(p),e*a>=o.totalItems?u.style.display="none":u.style.display="block"}catch(o){console.error(o),l.innerHTML="<p>Помилка завантаження даних</p>"}}d.addEventListener("click",i=>{i.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),i.target.classList.add("active"),t=i.target.dataset.category,e=1,n(!0))}),u.addEventListener("click",()=>{e+=1,n()})}B();O();N();
//# sourceMappingURL=index.js.map
