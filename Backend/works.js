let worksUrl = "http://localhost:5678/api/works";

const worksResponse = await fetch(worksUrl);
const works = await worksResponse.json();

function generateWorks(works) {

    const divGallery = document.querySelector(".gallery");

    for (let i = 0; i < works.length; i++) {

        const work = works[i];

        const projectElement = document.createElement("figure");

        const imageElement = document.createElement("img");
        imageElement.src = work.imageUrl;

        const titleElement = document.createElement("figcaption");
        titleElement.innerText = work.title;

        divGallery.appendChild(projectElement);
        projectElement.appendChild(imageElement);
        projectElement.appendChild(titleElement);

    }
};

generateWorks(works);

let categoriesUrl = "http://localhost:5678/api/categories";

const categoriesResponse = await fetch(categoriesUrl);
const categories = await categoriesResponse.json();

function createFilters(categories) {

    let buttonID = 0;

    const divFilters = document.querySelector(".filters");

    const defaultFilterButton = document.createElement("button");
    defaultFilterButton.innerText = "Tous";
    defaultFilterButton.classList.add = ("button-tous");

    divFilters.appendChild(defaultFilterButton);

    for (let i = 0; i < categories.length; i++) {

        const categorie = categories[i];

        const filterButton = document.createElement("button");
        filterButton.innerText = `${categorie.name}`;
        filterButton.classList.add = (`button-${buttonID}`);

        buttonID += 1;

        divFilters.appendChild(filterButton);

    }

};

createFilters(categories);