// RECUPERATION DES PROJETS ET AFFICHAGE //
fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then((works) => {

        console.log(works);

        function generateProjets(works) {
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
               
        }}

        generateProjets(works)

        
     //BOUTON TOUS //
     const boutonTous = document.querySelector(".btn-tous");
    
     boutonTous.addEventListener("click", function () {
         const afficheTous = works.filter(function (work) {
             return works;
             
         })
      console.log(afficheTous)
     
      document.querySelector(".gallery").innerHTML = "";
     generateProjets(afficheTous)
     })



    
    // BOUTON OBJETS //
    const boutonObjets = document.querySelector(".btn-objets");
    
    boutonObjets.addEventListener("click", function () {
        const afficheObjets = works.filter(function (work) {
            return work.categoryId === 1;
            
        })
     console.log(afficheObjets)
    
     document.querySelector(".gallery").innerHTML = "";
    generateProjets(afficheObjets)
    })



    //BOUTON APPARTEMENTS //

    const boutonAppart = document.querySelector(".btn-appart");
    
    boutonAppart.addEventListener("click", function () {
        const afficheAppart = works.filter(function (work) {
            return work.categoryId === 2;
            
        })
     console.log(afficheAppart)
    
     document.querySelector(".gallery").innerHTML = "";
    generateProjets(afficheAppart)
    })




    //BOUTON HOTEL & RESTAURANTS //


    const boutonHotel = document.querySelector(".btn-hotel");
    
    boutonHotel.addEventListener("click", function () {
        const afficheHotel = works.filter(function (work) {
            return work.categoryId === 3;
            
        })
     console.log(afficheHotel)
    
     document.querySelector(".gallery").innerHTML = "";
    generateProjets(afficheHotel)
    })


});