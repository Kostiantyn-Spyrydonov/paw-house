import{S as c,a as k,N as C,P as E,A as N,R as U}from"./assets/vendor-C7it1eFs.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const x="https://paw-hut.b.goit.study";async function D(){return(await fetch(`${x}/api/categories`)).json()}async function R({page:e,limit:s,categoryId:o}){const t=new URLSearchParams({page:e,limit:s});o&&t.append("categoryId",o);const i=await fetch(`${x}/api/animals?${t}`);if(!i.ok)throw new Error("API error");return i.json()}function F(e){return`
        <li>
        <button class="filter-btn active" data-category="">
            Всі
        </button>
        </li>
        ${e.map(({_id:s,name:o})=>`
            <li>
            <button class="filter-btn" 
            data-category-id="${s}">
                ${o}
            </button>
            </li>
        `).toSorted().join("")}
    `}function V(e=[]){return e.map(s=>{const o=s.categories.map(t=>`<span class="pet-tag">${t.name}</span>`).join("");return`
            <li class="pet-card">
            <img src="${s.image}" alt="${s.name}">

            <p class="pet-type">${s.species}</p>

            <h3 class="pet-name">${s.name}</h3>

            <div class="pet-tags">
                ${o}
            </div>

            <p class="pet-meta">
                ${s.age} · ${s.gender}
            </p>

            <p class="pet-desc">
                ${s.shortDescription}
            </p>

            <button 
                class="pet-btn" 
                data-animal-id="${s._id}">
                    Дізнатись більше
            </button>
            </li>
        `}).join("")}const Z="https://paw-hut.b.goit.study/api",p=document.querySelector(".js-order-backdrop"),z=document.querySelector(".js-order-close"),y=document.querySelector(".js-order-form");let v=null;function G(e){v=e,p.classList.add("is-open"),document.body.classList.add("modal-open")}function w(){p.classList.remove("is-open"),document.body.classList.remove("modal-open"),v=null,y.classList.remove("was-submitted")}z.addEventListener("click",w);p.addEventListener("click",e=>{e.target===p&&w()});document.addEventListener("keydown",e=>{e.key==="Escape"&&p.classList.contains("is-open")&&w()});y.addEventListener("submit",async e=>{e.preventDefault(),y.classList.add("was-submitted");const{name:s,phone:o,comment:t}=e.target.elements,i=o.value.replace(/\D/g,""),n={name:s.value.trim(),phone:i,animalId:v},l=t.value.trim();if(l&&(n.comment=l),!n.animalId){c.fire({icon:"error",title:"Помилка",text:"Не вибрано тварину."});return}if(!n.name){c.fire({icon:"error",title:"Помилка",text:"Вкажіть ім'я."});return}if(!n.phone){c.fire({icon:"error",title:"Помилка",text:"Вкажіть номер телефону."});return}if(n.phone.length!==12){c.fire({icon:"error",title:"Помилка",text:"Невірний номер телефону."});return}try{if(!(await fetch(`${Z}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok)throw new Error("API error");c.fire({icon:"success",title:"Заявку надіслано",text:"Очікуйте на дзвінок 😊"}),e.target.reset(),w()}catch{c.fire({icon:"error",title:"Помилка",text:"Не вдалося відправити заявку. Спробуйте ще раз."})}});const f=document.querySelector("[data-modal-backdrop]"),K=document.querySelector("[data-modal-content]");document.querySelector("[data-modal-close]");let A=null;function W(e){A=e,K.innerHTML=J(e),f.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",M)}function m(){f.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",M)}function M(e){e.key==="Escape"&&m()}f.addEventListener("click",e=>{e.target===f&&m()});function J(e){return`
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
  `}f.addEventListener("click",e=>{if(e.target.closest("[data-modal-close]")){m();return}e.target.closest("[data-adopt]")&&(m(),G(A._id))});const Y=[{img:"slide01",alt:"Dog with a girl",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{img:"slide02",alt:"Dog",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{img:"slide03",alt:"Pets and doctors",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{img:"slide04",alt:"Shelter exterior",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{img:"slide05",alt:"Kid hugging the dog",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}];function Q(e){const s=document.querySelector(".about-swiper .swiper-wrapper"),o=e.map(({img:t,alt:i,text:n})=>`
    <div class="swiper-slide">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="
            /img/hatinka-lapok/${t}-mob@1x.webp 1x,
            /img/hatinka-lapok/${t}-mob@2x.webp 2x
          "
        >
        <img
          src="/img/hatinka-lapok/${t}-tab-desk@1x.webp"
          srcset="/img/hatinka-lapok/${t}-tab-desk@2x.webp 2x"
          class="slide-image"
          alt="${i}"
        >
      </picture>

      <div class="slide-content">
        ${n}
      </div>
    </div>
  `).join("");s.insertAdjacentHTML("beforeend",o)}function X(){Q(Y),new k(".about-swiper",{modules:[C,E],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev",disabledClass:"is-disabled"},pagination:{el:document.querySelector(".why-paws-controls .swiper-pagination"),clickable:!0}})}const ee=[{question:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",answer:`
      <p>Це чудово, що ви готові подарувати дім одному з наших підопічних! Ми дуже раді будемо вам у цьому допомогти.
      Процес «усиновлення» у нас простий та зрозумілий:</p>
      <ul class="faq-list faq-list--numbered">
        <li>Оберіть друга: Придивіться до наших хвостиків у розділі «Знайди
            друга»</li>
        <li>Залиште заявку: Коли відчуєте, що це «ваша» тваринка, натискайте
            кнопку «Взяти додому» та заповніть коротку анкету</li>
        <li>Поговоріть з куратором: Наш волонтер зателефонує вам, щоб
            познайомитись ближче, розповісти про характер тваринки та відповісти
            на всі ваші питання.</li>
        <li>Приїжджайте знайомитись: Якщо ви ідеально підходите одне одному, ми
            домовимось про зустріч у притулку.</li>
        <li>Дорога додому: Після знайомства та підписання договору про
            відповідальне утримання, ваш новий друг поїде з вами у своє нове,
            щасливе життя!</li>
      </ul>
    `},{question:"Як мені найкраще підготувати свій дім та родину до появи хвостика?",answer:`
      <p>Чудове питання, яке показує вашу турботу! Переїзд — це завжди
          невеликий стрес для тваринки, але правильна підготовка зробить цей
          процес легким і радісним. Ось кілька порад:</p>
      <ul class="faq-list faq-list--bulleted">
        <li>Безпечний простір: Переконайтесь, що на вікнах є сітки, а дроти та
            побутова хімія сховані</li>
        <li>Особисті речі: Підготуйте для хвостика дві мисочки (для їжі та
            води), лежанку чи будиночок, лоток з наповнювачем для котика або
            повідець і нашийник для собачки.</li>
        <li>Сімейна розмова: Обговоріть з рідними майбутні обов'язки. Важливо,
            щоб усі були готові до появи нового мешканця.</li>
        <li>Терпіння та любов: Дайте тваринці час, щоб звикнути. Не квапте її,
            будьте поруч, розмовляйте лагідним голосом — і ваша любов творитиме
            дива!</li>       
      </ul>
    `},{question:"Чи можу я бути впевненим, що тваринка здорова? Розкажіть про щеплення.",answer:`
      <p>Так, звісно. Здоров'я наших підопічних — наш головний пріоритет. Кожна
          тваринка, яка потрапляє до нас, проходить повний огляд у ветеринара.
          Ми гарантуємо, що:</p>
      <ul class="faq-list faq-list--bulleted">
        <li>Усі хвостики оброблені від бліх та глистів.</li>
        <li>Усі вакциновані комплексною вакциною за віком.</li>
        <li>Дорослі тварини (зазвичай від 6-8 місяців) стерилізовані/кастровані.</li>
        <li>
           Приїжджайте знайомитись:  Якщо ви ідеально підходите одне одному, ми
          домовимось про зустріч у притулку.
          </li>
      </ul>
      <p>
          Разом із тваринкою ви обов'язково отримаєте її ветеринарний паспорт з
          усіма відмітками. Якщо у когось є особливі потреби у догляді чи
          харчуванні, ми чесно і детально про це розповімо.
        </p>
    `},{question:"Я дуже хочу допомогти, але поки не готовий до адопції. Чим я можу підтримати «Хатинку лапок»?",answer:`
      <p>Дякуємо вам за велике серце та бажання допомогти! Кожна допомога для
          нас безцінна. Навіть якщо ви не можете взяти тваринку, ви можете стати
          її янголом-охоронцем. Ось як:</p>
      <ul class="faq-list faq-list--bulleted">
        <li>
            Допомогти фінансово: Ваша пожертва піде на корм, ліки, оплату
            комунальних послуг та зарплату персоналу.
          </li>
          <li>
            Стати волонтером: Нам завжди потрібні люблячі руки для прогулянок з
            собачками, прибирання та, найголовніше, для спілкування з
            тваринками.
          </li>
          <li>
            Подарувати необхідне: Ми завжди раді кормам, лікам, наповнювачам для
            лотків, іграшкам, теплим ковдрам.
          </li>
          <li>
            Допомогти інформаційно: Найпростіший, але дуже дієвий спосіб —
            розповідати про нас у соцмережах. Можливо, саме ваш репост допоможе
            комусь знайти свою долю!
          </li>
      </ul>
    `},{question:"Мені сподобалась одна з ваших тваринок на сайті. Чи можу я приїхати, щоб познайомитися з нею особисто?",answer:`
        <p>
          Авжеж! Ми віримо, що справжня магія стається лише при особистій
          зустрічі. Щоб знайомство було комфортним і для вас, і для тваринки, ми
          просимо вас спочатку заповнити онлайн-заявку на нашому сайті.
        </p>
        <p>
          Після цього з вами зв'яжеться куратор тваринки, щоб домовитись про
          зручний час для вашого візиту. Такий підхід дозволяє нам приділити вам
          максимум уваги та уникнути зайвого стресу для наших підопічних. З
          нетерпінням чекаємо на знайомство!
        </p>`}];function te(){const e=document.querySelector(".faq-container");e&&(ee.forEach(({question:s,answer:o})=>{e.insertAdjacentHTML("beforeend",`
      <div class="faq-item">
        <button class="faq-question">
          <span class="faq-question-text">${s}</span>
          <span class="icon">+</span>
        </button>
        <div class="faq-answer">
        <div class="faq-answer-inner">
          ${o}
        </div>
        </div>
      </div>
      `)}),new N(".faq-container",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",activeClass:"active",openOnInit:[],collapse:!0,showMultiple:!1}))}const se="https://paw-hut.b.goit.study/api";async function ie(){try{const e=await fetch(`${se}/feedbacks`);if(!e.ok)throw new Error(`Помилка: ${e.status}`);return await e.json()}catch(e){throw console.error("Помилка отримання відгуків:",e),e}}const oe="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.0709%203.61234C11.4146%202.79588%2012.5854%202.79589%2012.9291%203.61235L14.9579%208.43123C15.1029%208.77543%2015.4306%209.01061%2015.8067%209.0404L21.0727%209.45748C21.9649%209.52814%2022.3267%2010.6281%2021.6469%2011.2034L17.6348%2014.5987C17.3482%2014.8412%2017.223%2015.2218%2017.3106%2015.5843L18.5363%2020.661C18.744%2021.5211%2017.7969%2022.201%2017.033%2021.7401L12.5245%2019.0196C12.2025%2018.8252%2011.7975%2018.8252%2011.4755%2019.0196L6.96699%2021.7401C6.20311%2022.201%205.25596%2021.5211%205.46363%2020.661L6.68942%2015.5843C6.77698%2015.2218%206.65182%2014.8412%206.36526%2014.5987L2.35306%2011.2034C1.67328%2010.6281%202.03507%209.52814%202.92729%209.45748L8.19336%209.0404C8.5695%209.01061%208.89716%208.77543%209.04207%208.43123L11.0709%203.61234Z'%20fill='%2302060A'/%3e%3c/svg%3e",ne="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.0078%204.00098L14.0361%208.81934C14.328%209.51225%2014.9837%209.97813%2015.7275%2010.0371L20.9854%2010.4531L16.9893%2013.835H16.9883C16.4157%2014.3197%2016.1618%2015.086%2016.3389%2015.8193L17.5615%2020.8848C17.5599%2020.8857%2017.5589%2020.8872%2017.5576%2020.8877C17.5559%2020.8869%2017.5532%2020.8858%2017.5498%2020.8838L13.041%2018.1631C12.4014%2017.7772%2011.5986%2017.7772%2010.959%2018.1631L6.4502%2020.8838C6.44677%2020.8858%206.4441%2020.8869%206.44238%2020.8877C6.44085%2020.8871%206.43936%2020.8859%206.4375%2020.8848L7.66113%2015.8193C7.8271%2015.1321%207.61431%2014.416%207.11523%2013.9297L7.01172%2013.835L3.01367%2010.4531L8.27246%2010.0371C9.01627%209.97814%209.67205%209.51246%209.96387%208.81934L11.9912%204.00098C11.9936%204.00054%2011.9966%204%2012%204C12.003%204%2012.0056%204.00062%2012.0078%204.00098Z'%20stroke='%2302060A'%20stroke-width='2'/%3e%3c/svg%3e",re="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.5312%203.80664C11.7032%203.39816%2012.2968%203.39816%2012.4688%203.80664L14.4971%208.625C14.7155%209.14358%2015.2076%209.49471%2015.7676%209.53906L21.0332%209.95605C21.4909%209.99232%2021.6545%2010.5412%2021.3242%2010.8213L17.3115%2014.2168C16.8819%2014.5804%2016.6919%2015.1542%2016.8242%2015.7021L18.0508%2020.7783C18.1502%2021.1902%2017.6892%2021.5518%2017.291%2021.3115H17.29L12.7832%2018.5918C12.3023%2018.3016%2011.6977%2018.3016%2011.2168%2018.5918L6.70898%2021.3115C6.31078%2021.5518%205.84983%2021.1902%205.94922%2020.7783L7.17578%2015.7021C7.30809%2015.1543%207.11814%2014.5805%206.68848%2014.2168L2.67578%2010.8213C2.34544%2010.5412%202.5091%209.99231%202.9668%209.95605L8.23242%209.53906C8.79243%209.49471%209.28456%209.14369%209.50293%208.625L11.5312%203.80664Z'%20fill='url(%23paint0_linear_8242_16266)'%20stroke='%2302060A'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_8242_16266'%20x1='2'%20y1='12.3716'%20x2='22'%20y2='12.3716'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'/%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",B=document.querySelector(".loader"),j=document.querySelector(".stories-controls");async function ae(){ce(),pe();try{const e=await ie();le(e.feedbacks),new k(".swiper-stories",{modules:[C,E],pagination:{el:document.querySelector(".stories-controls .swiper-pagination"),dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}catch(e){c.fire({position:"top-end",icon:"error",title:`Помилка отримання відгуків: ${e}`,showConfirmButton:!1,timer:1500})}finally{de(),ue()}}function le(e){const s=document.querySelector(".swiper-stories .swiper-wrapper"),o=e.map(t=>`<li class="swiper-slide" id="${t._id}">       
      <div class="story-card">
      <div class="stories-rate" data-rate="${t.rate}"></div>
      <p class="stories-descr">${t.description}</p>
      <p class="stories-author">${t.author}</p></div>
      </li>`).join("");s.insertAdjacentHTML("beforeend",o),document.querySelectorAll(".stories-rate").forEach(t=>{new U(t,{readOnly:!0,score:Number(t.dataset.rate),half:!0,starOn:oe,starOff:ne,starHalf:re}).init()})}function ce(){B.classList.remove("hidden")}function de(){B.classList.add("hidden")}function ue(){j.classList.remove("hidden")}function pe(){j.classList.add("hidden")}function fe(){const e=document.querySelector(".mobile-menu"),s=document.querySelector(".burger-button"),o=document.querySelector(".close-button");if(!e||!s||!o)return;const t=()=>{e.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};s.addEventListener("click",t),o.addEventListener("click",t),e.addEventListener("click",i=>{(i.target.closest("a")||i.target===e)&&e.classList.contains("is-open")&&t()}),window.addEventListener("keydown",i=>{i.key==="Escape"&&e.classList.contains("is-open")&&t()})}const b=document.querySelector(".top");function me(){b.classList.remove("hidden")}function we(){b.classList.add("hidden")}window.addEventListener("scroll",P);function P(){window.scrollY>400?me():we()}b.addEventListener("click",O);function O(){window.scrollTo({top:0,behavior:"smooth"})}const L=document.querySelector(".js-filters"),u=document.querySelector(".js-pets-list"),S=document.querySelector(".pets-list-wrapper"),$=document.querySelector(".loader-pets"),d=document.querySelector(".js-load-more");if(L&&u&&d){let i=function(){return window.innerWidth>=1440?9:8},l=function(){$.classList.remove("hidden"),S.classList.add("is-loading"),d.style.display="none"},h=function(){$.classList.add("hidden"),S.classList.remove("is-loading")},I=function(){d.style.display="block"},_=function(){d.style.display="none"},e=1,s=null,o=i(),t=[];window.addEventListener("resize",()=>{o=i()}),n();async function n(){const a=await D();L.innerHTML=F(a),g(!0)}async function g(a=!1){l();try{const r=await R({page:e,limit:o,categoryId:s});if(!Array.isArray(r.animals)){u.innerHTML="<p>Нічого не знайдено</p>",d.style.display="none";return}a?t=r.animals:t=[...t,...r.animals],u.innerHTML=V(t),t.length>=r.totalItems?_():I()}catch(r){console.error(r),u.innerHTML="<p>Помилка завантаження даних</p>"}finally{h()}}L.addEventListener("click",a=>{a.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(r=>r.classList.remove("active")),a.target.classList.add("active"),s=a.target.dataset.categoryId||null,e=1,g(!0))}),d.addEventListener("click",()=>{e+=1,g()}),u.addEventListener("click",a=>{const r=a.target.closest(".pet-btn");if(!r)return;const H=r.dataset.animalId,q=t.find(T=>T._id===H);q&&W(q)})}X();te();ae();fe();P();O();
//# sourceMappingURL=index.js.map
