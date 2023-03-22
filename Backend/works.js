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

    const categoriesNames = categories.map(categorie => categorie.name);

    let categoriesList = ["Tous", ...categoriesNames];

    const divFilters = document.querySelector(".filters");

    categoriesList.forEach((categorie) => {

        const filterButton = document.createElement("button");
        filterButton.innerText = categoriesList;

        divFilters.appendChild(filterButton);
    });

};

createFilters(categories);

const buttonObjects = document.querySelector("button");
buttonObjects.addEventListener("click", function () {

    const worksFiltered = Array.from(works);

    worksFiltered.filter(function (work) {
        return work.categorie.name;
    });

    for(let i = works.length - 1; i >= 0; i--) {
        if (works[i].categorie.name !== 'Objets') {
            works.splice(i, 1);
        }
    }

    document.querySelector(".gallery").innerHTML = "";
    generateWorks(worksFiltered);
});