
// AFFICHER / RETIRER ELEMENTS LORS DE LA CONNEXION //
const token = localStorage.getItem("token");
if(token) {
    document.getElementById("edite").style.display="block";
    document.getElementById("login").style.display="none";
    document.getElementById("logout").style.display="block";
    document.getElementById("modif-intro").style.display="block";
    document.getElementById("modif-projet").style.display="block";
}

const logout = document.getElementById("logout");
logout.addEventListener("click", function() {
    localStorage.removeItem("token")
});

//OUVERTURE MODALE//

const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");

modalTrigger.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    modalContainer.classList.toggle("active")
}

// AFFICHER PROJETS MODALE//
fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then((works) => {

        console.log(works);
        function generateProjets(works) {
            for (let i = 0; i < works.length; i++) {
        
                const article = works[i];
                
                const sectionModal = document.querySelector(".modal-contenu");
                
                const workElement = document.createElement("article");
                
                const imageUrlElement = document.createElement("img");
                imageUrlElement.src = article.imageUrl;
                imageUrlElement.classList.add("projets-modale")
                
                const divModale = document.createElement("div");
                divModale.classList.add("corbeille-modale");

                const imgCorbeille = document.createElement("img");
                imgCorbeille.src = "./assets/images/Corbeille-Modale.png"

                const edit = document.createElement("p");
                edit.innerText = "éditer";

                sectionModal.appendChild(workElement);
                workElement.appendChild(imageUrlElement);
                workElement.appendChild(divModale);
                divModale.appendChild(imgCorbeille);
                workElement.appendChild(edit);
            
               
        }}
        
        generateProjets(works)
    });

    //SUPPRIMER UN PROJET//

const btnCorbeille = document.getElementsByClassName("corbeille-modale");
if(btnCorbeille) {
    btnCorbeille.addEventListener("click", () => {
        console.log("btn clicked");
    });
}

btnCorbeille.addEventListener("click", function () {
    e.preventDefault()

    for (const workId of selectedWorks) {

        const reponse = fetch("http://localhost:5678/api/works/${workId}", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (reponse.ok) {
            console.log("Projet ${workId} supprimé");

        }else {
            console.log("Erreur sur la suppresion du Projet ${workId}");
        }
        }
    });


//SUPPRIMER TOUS LES PROJETS//


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
               
        }};

        generateProjets(works);

        
        

        

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

