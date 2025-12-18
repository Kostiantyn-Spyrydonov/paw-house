const BASE_URL = 'https://paw-hut.b.goit.study';

export async function fetchCategories() {
const res = await fetch(`${BASE_URL}/api/categories`);
return res.json();
}

export async function fetchAnimals({ page, limit }) {
const params = new URLSearchParams({ page, limit });

const res = await fetch(`${BASE_URL}/api/animals?${params}`);

if (!res.ok) {
    throw new Error('API error');
}

return res.json();
}