const BASE_URL = 'https://paw-hut.b.goit.study';

export async function fetchCategories() {
const res = await fetch(`${BASE_URL}/api/categories`);
return res.json();
}

export async function fetchAnimals({ page, limit, categoryId}) {
const params = new URLSearchParams({ page, limit });
if(categoryId){
    params.append('categoryId',categoryId)
}

const res = await fetch(`${BASE_URL}/api/animals?${params}`);

if (!res.ok) {
    throw new Error('API error');
}

return res.json();
}