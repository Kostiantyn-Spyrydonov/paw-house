import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { getFeedbacks } from './api.js';

import Raty from 'raty-js';

import starOn from '/img/raty/star-filled.svg';
import starOff from '/img/raty/star-outline.svg';
import starHalf from '/img/raty/star-half.svg';

import Swal from 'sweetalert2';

const loader = document.querySelector('.loader');
const controls = document.querySelector('.stories-controls');

export async function fetchStories() {
  showLoader();
  hideStoryControls();
  try {
    const data = await getFeedbacks();
    renderStories(data.feedbacks);

    new Swiper('.swiper-stories', {
      modules: [Navigation, Pagination],
      pagination: {
        el: document.querySelector('.stories-controls .swiper-pagination'),
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
  } finally {
    hideLoader();
    showStoryControls();
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

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function showStoryControls() {
  controls.classList.remove('hidden');
}

function hideStoryControls() {
  controls.classList.add('hidden');
}



