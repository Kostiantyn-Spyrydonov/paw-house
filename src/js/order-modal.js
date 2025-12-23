import Swal from 'sweetalert2';

const API_BASE = 'https://paw-hut.b.goit.study/api';

const backdrop = document.querySelector('.js-order-backdrop');
const closeBtn = document.querySelector('.js-order-close');
const form = document.querySelector('.js-order-form');

let currentAnimalId = null;

export function openOrderModal(animalId) {
  currentAnimalId = animalId;

  backdrop.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeOrderModal() {
  backdrop.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  currentAnimalId = null;
  form.classList.remove('was-submitted');
}

closeBtn.addEventListener('click', closeOrderModal);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeOrderModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
    closeOrderModal();
  }
});

form.addEventListener('submit', async e => {
  e.preventDefault();

  form.classList.add('was-submitted');

  const { name, phone, comment } = e.target.elements;
  const phoneNormalized = phone.value.replace(/\D/g, '');

  const orderData = {
    name: name.value.trim(),
    phone: phoneNormalized,
    animalId: currentAnimalId,
  };

  const commentValue = comment.value.trim();
  if (commentValue) {
    orderData.comment = commentValue;
  }

  if (!orderData.animalId) {
    Swal.fire({ icon: 'error', title: 'Помилка', text: 'Не вибрано тварину.' });
    return;
  }

  if (!orderData.name) {
    Swal.fire({ icon: 'error', title: 'Помилка', text: "Вкажіть ім'я." });
    return;
  }

  if (!orderData.phone) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: 'Вкажіть номер телефону.',
    });
    return;
  }

  if (orderData.phone.length !== 12) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: 'Невірний номер телефону.',
    });
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    if (!res.ok) {
      throw new Error('API error');
    }

    Swal.fire({
      icon: 'success',
      title: 'Заявку надіслано',
      text: 'Очікуйте на дзвінок 😊',
    });

    e.target.reset();
    closeOrderModal();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: 'Не вдалося відправити заявку. Спробуйте ще раз.',
    });
  }
});
