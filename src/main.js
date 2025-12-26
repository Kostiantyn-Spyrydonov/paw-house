import { fetchCategories, fetchAnimals } from './js/pets-list-api.js';
import { renderFilters, renderAnimals } from './js/pets-list-render.js';
import { openPetModal } from './js/animal-details-modal.js';

import { initAboutSlider } from './js/about-us.js';

import { initFaq } from './js/FAQ.js';

import { fetchStories } from './js/success-stories.js';

import { openOrderModal } from './js/order-modal.js';

import { initMobileMenu } from './js/header.js';

import { scroll } from './js/scroll-top.js';

/* Pets List */
const filtersEl = document.querySelector('.js-filters');
const petsListEl = document.querySelector('.js-pets-list');
const listWrapper = document.querySelector('.pets-list-wrapper');
const loader = document.querySelector('.loader-pets');
const loadMoreBtn = document.querySelector('.js-load-more');

if (filtersEl && petsListEl && loadMoreBtn) {
  let page = 1;
  let categoryId = null;
  let limit = getLimitByViewport();
  let allAnimals = [];

  function getLimitByViewport() {
    return window.innerWidth >= 1440 ? 9 : 8;
  }

  window.addEventListener('resize', () => {
    limit = getLimitByViewport();
  });

  init();

  async function init() {
    const categories = await fetchCategories();
    filtersEl.innerHTML = renderFilters(categories);
    loadAnimals(true);
  }

  function showLoader() {
    loader.classList.remove('hidden');
    listWrapper.classList.add('is-loading');
    loadMoreBtn.style.display = 'none';
  }

  function hideLoader() {
    loader.classList.add('hidden');
    listWrapper.classList.remove('is-loading');
  }

  function showLoadMoreBtn() {
    loadMoreBtn.style.display = 'block';
  }
  function hideLoadMoreBtn() {
    loadMoreBtn.style.display = 'none';
  }

  async function loadAnimals(reset = false) {
    showLoader();

    try {
      const data = await fetchAnimals({ page, limit, categoryId });
      if (!Array.isArray(data.animals)) {
        petsListEl.innerHTML = '<p>Нічого не знайдено</p>';
        loadMoreBtn.style.display = 'none';
        return;
      }
      if (reset) {
        allAnimals = data.animals;
      } else {
        allAnimals = [...allAnimals, ...data.animals];
      }

      petsListEl.innerHTML = renderAnimals(allAnimals);

      if (allAnimals.length >= data.totalItems) {
        hideLoadMoreBtn();
      } else {
        showLoadMoreBtn();
      }
    } catch (error) {
      console.error(error);
      petsListEl.innerHTML = '<p>Помилка завантаження даних</p>';
    } finally {
      hideLoader();
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
initAboutSlider();

// FAQ
initFaq();

// Success stories //
fetchStories();

// open order modal

// header
initMobileMenu();

// Scroll top/////
scroll();
