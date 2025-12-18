const swiper = new Swiper('.why-paws-slider', {
  slidesPerView: 1,
  loop: false, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
