let url = "http://localhost:5678/api/works";

const response = await fetch(url);
const works = await response.json();

function generateWorks(works) {

    for (let i = 0; i < works.length; i++) {

        const work = works[i];

        const sectionGallery = document.querySelector(".gallery");

        const projectElement = document.createElement("figure");

        const idElement = work.id;

        const imageElement = document.createElement("img");
        imageElement.src = work.imageUrl;

        const titleElement = document.createElement("figcaption");
        titleElement.innerText = work.title;

        sectionGallery.appendChild(projectElement);
        projectElement.appendChild(idElement);
        projectElement.appendChild(imageElement);
        projectElement.appendChild(titleElement);

    }
};

generateWorks(works);