async function getWorks() {
    let url = "http://localhost:5678/api/works";

    let response = await fetch(url);
    let works = await response.json();

    for (let i = 0; i < works.length; i++) {
        const imageElement = document.querySelector("img");
        const titleElement = document.querySelector("figcaption");

        imageElement.src = works[i].imageUrl;

        
    }
};