import{S as L,N as h,P as v}from"./assets/vendor-BlY6UKo2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const y="https://paw-hut.b.goit.study";async function w(){return(await fetch(`${y}/api/categories`)).json()}async function $({page:t,limit:e}){const i=new URLSearchParams({page:t,limit:e}),r=await fetch(`${y}/api/animals?${i}`);if(!r.ok)throw new Error("API error");return r.json()}function E(t){return`
        <li>
        <button class="filter-btn active" data-category="">
            Всі
        </button>
        </li>
        ${t.map(({name:e})=>`
            <li>
            <button class="filter-btn" data-category="${e}">
                ${e}
            </button>
            </li>
        `).join("")}
    `}function q(t=[]){return t.map(e=>{const i=e.categories.map(r=>`<span class="pet-tag">${r.name}</span>`).join("");return`
            <li class="pet-card" data-id="${e._id}">
            <img src="${e.image}" alt="${e.name}">

            <p class="pet-type">${e.species}</p>

            <h3 class="pet-name">${e.name}</h3>

            <div class="pet-tags">
                ${i}
            </div>

            <p class="pet-meta">
                ${e.age} · ${e.gender}
            </p>

            <p class="pet-desc">
                ${e.shortDescription}
            </p>

            <button class="pet-btn" data-animal-id="${e._id}">
                Дізнатись більше
            </button>
            </li>
        `}).join("")}function A(){new L(".about-swiper",{modules:[h,v],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev",disabledClass:"is-disabled"},pagination:{el:".about-pagination",clickable:!0}})}function S(){new Accordion(".faq",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",openMultiple:!1})}const a=document.querySelector(".mobile-menu"),M=document.querySelector(".burger-button"),P=document.querySelector(".close-button"),l=()=>{a.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};M.addEventListener("click",l);P.addEventListener("click",l);a.addEventListener("click",t=>{t.target===a&&l()});window.addEventListener("keydown",t=>{t.key==="Escape"&&a.classList.contains("is-open")&&l()});const b=document.querySelector(".js-filters"),d=document.querySelector(".js-pets-list"),p=document.querySelector(".js-load-more");let c=1,f="";const g=9;let o=[];j();async function j(){const t=await w();b.innerHTML=E(t),m(!0)}async function m(t=!1){try{const e=await $({page:c,limit:g});if(!Array.isArray(e.animals)){d.innerHTML="<p>Нічого не знайдено</p>";return}t?o=e.animals:o=[...o,...e.animals];let i=o;f&&(i=o.filter(r=>r.categories.some(s=>s.name===f))),d.innerHTML=q(i),c*g>=e.totalItems?p.style.display="none":p.style.display="block"}catch(e){console.error(e),d.innerHTML="<p>Помилка завантаження даних</p>"}}b.addEventListener("click",t=>{t.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(e=>e.classList.remove("active")),t.target.classList.add("active"),f=t.target.dataset.category,c=1,m(!0))});p.addEventListener("click",()=>{c+=1,m()});A();S();
//# sourceMappingURL=index.js.map
