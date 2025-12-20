import { openOrderModal } from './order-modal.js';

const backdrop = document.querySelector('[data-modal-backdrop]');
const content = document.querySelector('[data-modal-content]');
const closeBtn = document.querySelector('[data-modal-close]');

let currentAnimal = null; /* new */

export function openPetModal(animal) {
  currentAnimal = animal;

  content.innerHTML = createModalMarkup(animal);

  backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  window.addEventListener('keydown', onEsc);
}

function closePetModal() {
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');

  window.removeEventListener('keydown', onEsc);
}

function onEsc(e) {
  if (e.key === 'Escape') closePetModal();
}

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closePetModal();
});

function createModalMarkup(animal) {
  return `
    <div class="modal-body">
      <img src="${animal.image}" alt="${animal.name}" class="modal-img"/>

      <div class="modal-info">
        <p class="modal-category">${animal.species}</p>
        <h2 class="modal-name">${animal.name}</h2>
        <p class="modal-meta">${animal.age} · ${animal.gender}</p>

        <h3>Опис:</h3>
        <p>${animal.description}</p>

        <h3>Здоровʼя:</h3>
        <p>${animal.healthStatus}</p>

        <h3>Поведінка:</h3>
        <p>${animal.behavior}</p>

        <button class="adopt-btn" data-adopt>
          Взяти додому
        </button>
      </div>
    </div>
  `;
}

content.addEventListener('click', e => {
  if (e.target.closest('[data-modal-close]')) {
    closePetModal();
    return;
  }

  if (e.target.closest('[data-adopt]')) {
    closePetModal();
    openOrderModal(currentAnimal._id);
  }
});
