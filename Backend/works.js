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

        filterButton.addEventListener("click", function(category) {

            let worksFiltered = Array.from(works);
            console.log(worksFiltered);
            const worksNames = worksFiltered.map(work => work.category.name);
            console.log(worksNames);

            if (category === "Objets") {
                
                worksFiltered.filter(function () {

                    for (let i = worksFiltered.length - 1; i >= 0; i--) {
                        if (worksNames !== "Objets") {
                            worksFiltered.splice(i,1);
                        };
                    };

                });
            };

            if (category === "Appartements") {

            }

            if (category === "Hotels & restaurants") {

            }

            document.querySelector(".gallery").innerHTML = "";
            generateWorks(worksFiltered);

        });

        divFilters.appendChild(filterButton);
    
    });

};

createFilters(categories);