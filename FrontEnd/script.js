
// Récupération des Works depuis l'api GET

fetch("http://localhost:5678/api/works")
.then(reponse => reponse.json())
.then(works => {
    for (let i = 0; i < works.length; i++) {

        const article = works[i];
        
        const sectionGallery = document.querySelector(".gallery");
        
        const workElement = document.createElement("article");
        
        const imageUrlElement = document.createElement("img");
        imageUrlElement.src = article.imageUrl;

        const titleElement = document.createElement("p");
        titleElement.innerText = article.title;
        
        sectionGallery.appendChild(workElement);
        workElement.appendChild(imageUrlElement);
        workElement.appendChild(titleElement);
}})

// Récupération des object + filtres boutons


const boutonObjets = document.querySelector(".btn-objets");

boutonObjets.addEventListener("click", function () {
   const listFiltrees = workElement.category(function (category) {
       return category.id === 1;
});
console.log(listFiltrees)
});