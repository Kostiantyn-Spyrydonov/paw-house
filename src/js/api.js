import axios from 'axios';

const BASE_URL = 'https://paw-hut.b.goit.study/api';

// get category
export async function getCategories() {
  try {
    const response = await fetch(`${BASE_URL}/categories`);

    if (!response.ok) {
      throw new Error(`Помилка: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка отримання категорій:', error);
    throw error;
  }
}

// list of animals
export async function getAnimals({ page = 1, limit = 9, category = '' } = {}) {
  try {
    const params = new URLSearchParams({
      page: page,
      limit: limit,
    });

    if (category && category !== 'all') {
      params.append('category', category);
    }

    const response = await fetch(`${BASE_URL}/animals?${params}`);

    if (!response.ok) {
      throw new Error(`Помилка: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка отримання тварин:', error);
    throw error;
  }
}

// feedbacks
export async function getFeedbacks() {
  try {
    const response = await fetch(`${BASE_URL}/feedbacks`);

    if (!response.ok) {
      throw new Error(`Помилка: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка отримання відгуків:', error);
    throw error;
  }
}

// apply order form
export async function createOrder({ name, phone, comment = '', animalId }) {
  try {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        comment: comment,
        animalId: animalId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Помилка: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка відправки заявки:', error);
    throw error;
  }
}
