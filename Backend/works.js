let url = "http://localhost:5678/api/works";

const response = await fetch(url);
const works = await response.json();

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

function createFilters() {

    const divFilters = document.createElement("div");
    divFilters.classList.add("filters");

    const categoriesNumber = 4;

    for (let i = 0; i < categoriesNumber; i++) {

        // A modifier
        const filterButton = document.createElement("button");
        filterButton.setAttribute("id", ${id_value});
        filterButton.innerText = ${categorie-name};
    }

};

createFilters();