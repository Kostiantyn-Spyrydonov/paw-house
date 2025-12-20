/* libraries */
import Swiper from 'swiper';
import 'swiper/css';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import Raty from 'raty-js';

/* Pets List */
import { fetchCategories, fetchAnimals } from './js/pets-list-api.js';
import { renderFilters, renderAnimals } from './js/pets-list-render.js';
import { openPetModal } from './js/animal-details-modal.js';

const filtersEl = document.querySelector('.js-filters');
const petsListEl = document.querySelector('.js-pets-list');
const loadMoreBtn = document.querySelector('.js-load-more');

if (filtersEl && petsListEl && loadMoreBtn) {
  let page = 1;
  let categoryId = null;
  const limit = 9;
  let allAnimals = [];

  init();

  async function init() {
    const categories = await fetchCategories();
    filtersEl.innerHTML = renderFilters(categories);
    loadAnimals(true);
  }

  function showLoader() {
    petsListEl.innerHTML = '<li>Завантаження...</li>';
  }

  async function loadAnimals(reset = false) {
    try {
      showLoader();
      const data = await fetchAnimals({ page, limit, categoryId });
      if (!Array.isArray(data.animals)) {
        petsListEl.innerHTML = '<p>Нічого не знайдено</p>';
        return;
      }
      if (reset) {
        allAnimals = data.animals;
      } else {
        allAnimals = [...allAnimals, ...data.animals];
      }

      petsListEl.innerHTML = renderAnimals(allAnimals);

      if (allAnimals.length >= data.totalItems) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'block';
      }
    } catch (error) {
      console.error(error);
      petsListEl.innerHTML = '<p>Помилка завантаження даних</p>';
    }
  }

  filtersEl.addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;
    document
      .querySelectorAll('.filter-btn')
      .forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    categoryId = e.target.dataset.categoryId || null;
    page = 1;
    loadAnimals(true);
  });

  loadMoreBtn.addEventListener('click', () => {
    page += 1;
    loadAnimals();
  });

  // open animal-details-modal
  petsListEl.addEventListener('click', e => {
    const btn = e.target.closest('.pet-btn');
    if (!btn) return;
    const animalId = btn.dataset.animalId;
    const animal = allAnimals.find(a => a._id === animalId);
    if (!animal) return;
    openPetModal(animal);
  });
}

// about us
import { initAboutSlider } from './js/about-us.js';
initAboutSlider();

// FAQ
import { initFaq } from './js/FAQ.js';
initFaq();

// Success stories //
import { fetchStories } from './js/success-stories.js';
fetchStories();

// open order modal
import { openOrderModal } from './js/order-modal.js';

// header
import { initMobileMenu } from './js/header.js';
initMobileMenu();