

    export function renderFilters(categories) {
    return `
        <li>
        <button class="filter-btn active" data-category="">
            Всі
        </button>
        </li>
        ${categories
        .map(({_id, name }) => `
            <li>
            <button class="filter-btn" 
            data-category-id="${_id}">
                ${name}
            </button>
            </li>
        `)
        .join('')}
    `;
    }

    export function renderAnimals(animals = []) {
    return animals
        .map(animal => {
        const tagsMarkup = animal.categories
            .map(c => `<span class="pet-tag">${c.name}</span>`)
            .join('');

        return `
            <li class="pet-card">
            <img src="${animal.image}" alt="${animal.name}">

            <p class="pet-type">${animal.species}</p>

            <h3 class="pet-name">${animal.name}</h3>

            <div class="pet-tags">
                ${tagsMarkup}
            </div>

            <p class="pet-meta">
                ${animal.age} · ${animal.gender}
            </p>

            <p class="pet-desc">
                ${animal.shortDescription}
            </p>

            <button 
                class="pet-btn" 
                data-animal-id="${animal._id}">
                    Дізнатись більше
            </button>
            </li>
        `;
        })
        .join('');
    }
