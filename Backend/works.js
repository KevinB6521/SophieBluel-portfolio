const { response } = require("express");

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

function createFilters() {

    const sectionPortfolio = document.querySelector("#portfolio");

    const divFilters = document.querySelector(".filters");

    const categoriesNumber = categories.length;

    for (let i = 0; i < categoriesNumber; i++) {

        // A modifier
        const filterButton = document.createElement("button");
        // filterButton.setAttribute("id", ${id_value});
        filterButton.innerText = "bite";
    }

    sectionPortfolio.appendChild(divFilters);
    divFilters.appendChild(filterButton);

};

createFilters();