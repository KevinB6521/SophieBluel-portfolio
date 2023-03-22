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

    let categoriesList = ["Tous", ...categories];
    console.log(categoriesList);

    const divFilters = document.querySelector(".filters");

    categoriesList.forEach((categorie) => {

        const filterButton = document.createElement("button");
        filterButton.innerText = `${categorie.name}`;
        filterButton.classList.add = (`button-${buttonID}`);

        divFilters.appendChild(filterButton);
    });

    for (let i = 0; i < categories.length; i++) {

        const categorie = categories[i];

        const filterButton = document.createElement("button");
        filterButton.innerText = `${categorie.name}`;
        filterButton.classList.add = (`button-${buttonID}`);

        buttonID += 1;

    }

};

createFilters(categories);

const categoriesName = categories.map(categorie => categorie.name);

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