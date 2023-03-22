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

    const categoriesNames = categories.map(category => category.name);

    let categoriesList = ["Tous", ...categoriesNames];

    const divFilters = document.querySelector(".filters");

    categoriesList.forEach((category) => {

        const filterButton = document.createElement("button");
        filterButton.innerText = category;

        //filterButton.addEventListener("click", filterCategories(category))

        divFilters.appendChild(filterButton);
    });

};

createFilters(categories);

function filterCategories(category) {

    if (category === "Objets") {
        // retirer tous les elements qui ne sont pas de la categorie objets
    }

    if (category === "Appartements") {

    }

    if (category === "Hotels & restaurants") {

    }

    document.querySelector(".gallery").innerHTML = "";
    generateWorks(worksFiltered);
});