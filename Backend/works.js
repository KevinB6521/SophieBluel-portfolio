let url = "http://localhost:5678/api/works";

const works = await fetch(url).then(response => response.json());

function generateWorks() {

    for (let i = 0; i < works.length; i++) {
        const imageElement = document.querySelector("img");
        const titleElement = document.querySelector("figcaption");

        imageElement.src = works[i].imageUrl;

        
    }
};