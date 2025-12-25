import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const aboutSlides = [
  {
    img: 'slide01',
    alt: 'Dog with a girl',
    text: 'Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили.',
  },
  {
    img: 'slide02',
    alt: 'Dog',
    text: 'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.',
  },
  {
    img: 'slide03',
    alt: 'Pets and doctors',
    text: '"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.',
  },
  {
    img: 'slide04',
    alt: 'Shelter exterior',
    text: 'Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках.',
  },
  {
    img: 'slide05',
    alt: 'Kid hugging the dog',
    text: 'Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин.',
  },
];

function createAboutSlides(slides) {
  const wrapper = document.querySelector('.about-swiper .swiper-wrapper');

  const markup = slides
    .map(
      ({ img, alt, text }) => `
    <div class="swiper-slide">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="
            /img/hatinka-lapok/${img}-mob@1x.webp 1x,
            /img/hatinka-lapok/${img}-mob@2x.webp 2x
          "
        >
        <img
          src="/img/hatinka-lapok/${img}-tab-desk@1x.webp"
          srcset="/img/hatinka-lapok/${img}-tab-desk@2x.webp 2x"
          class="slide-image"
          alt="${alt}"
        >
      </picture>

      <div class="slide-content">
        ${text}
      </div>
    </div>
  `
    )
    .join('');

  wrapper.insertAdjacentHTML('beforeend', markup);
}

export function initAboutSlider() {
  createAboutSlides(aboutSlides);

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
      el: document.querySelector('.why-paws-controls .swiper-pagination'),
      clickable: true,
    },
  });
}
