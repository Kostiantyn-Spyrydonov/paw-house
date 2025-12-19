import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { getFeedbacks } from './api.js';

import Raty from 'raty-js';

import starOn from 'raty-js/src/images/star-on.png';
import starOff from 'raty-js/src/images/star-off.png';
import starHalf from 'raty-js/src/images/star-half.png';

import Swal from 'sweetalert2';

export async function fetchStories() {
  try {
    const data = await getFeedbacks();
    renderStories(data.feedbacks);

    new Swiper('.swiper-stories', {
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });
  } catch (err) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: `Помилка отримання відгуків: ${err}`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

export function renderStories(stories) {
  const ul = document.querySelector('.swiper-stories .swiper-wrapper');
  const li = stories
    .map(
      story => `<li class="swiper-slide" id="${story._id}">       
      <div class="story-card">
      <div class="stories-rate" data-rate="${story.rate}"></div>
      <p class="stories-descr">${story.description}</p>
      <p class="stories-author">${story.author}</p></div>
      </li>`
    )
    .join('');

  ul.insertAdjacentHTML('beforeend', li);

  document.querySelectorAll('.stories-rate').forEach(el => {
    new Raty(el, {
      readOnly: true,
      score: Number(el.dataset.rate),
      half: true,
      starOn,
      starOff,
      starHalf,
    }).init();
  });
}