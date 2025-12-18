import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function initAboutSlider() {
  new Swiper('.about-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
      nextEl: '.about-btn-next',
      prevEl: '.about-btn-prev',
      disabledClass: 'is-disabled',
    },

    pagination: {
      el: '.about-pagination',
      clickable: true,
    },
  });
}