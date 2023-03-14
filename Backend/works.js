let url = "http://localhost:5678/api/works";

const works = await fetch(url).then(response => response.json());

function generateWorks(works) {

    for (let i = 0; i < works.length; i++) {

        const work = works[i];

        const sectionGallery = document.querySelector(".gallery");

        const projectElement = document.createElement("figure");

        const imageElement = document.createElement("img");
        imageElement.src = work.imageUrl;

        const titleElement = document.createElement("figcaption");
        titleElement.innerText = work.title;

        sectionGallery.appendChild(projectElement);
        projectElement.appendChild(imageElement);
        projectElement.appendChild(titleElement);

        
    }
};

generateWorks(works);