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

            }


        };

        generateProjets(works);






        //BOUTON TOUS //
        const boutonTous = document.querySelector(".btn-tous");

        boutonTous.addEventListener("click", function () {
            const afficheTous = works.filter(function (works) {
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






// AFFICHER / RETIRER ELEMENTS LORS DE LA CONNEXION //
const token = localStorage.getItem("token");
if (token) {
    document.getElementById("edite").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.getElementById("modif-intro").style.display = "block";
    document.getElementById("modif-projet").style.display = "block";
}

const logout = document.getElementById("logout");
logout.addEventListener("click", function () {
    localStorage.removeItem("token")
});

//OUVERTURE MODALE//

const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");

modalTrigger.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal() {
    modalContainer.classList.toggle("active")

}

// AFFICHER PROJETS MODALE//
fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then((works) => {

        console.log(works);

        function generateProjetsModale(works) {
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


            }
        }


        //METTRE A JOUR LES PROJETS PAGE PRINCIPALE//

        function refreshProjets(works) {

            fetch("http://localhost:5678/api/works")
                .then(reponse => reponse.json())
                .then((works) => {

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

                    }



                    console.log(works);


                })
        }


        //METTRE A JOUR LES PROJETS MODALE//


        function refreshModale(works) {

            fetch("http://localhost:5678/api/works")
                .then(reponse => reponse.json())
                .then((works) => {

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

                    }
                    deleteProjet(works)


                    console.log(works);


                })
        }





        // SUPPRIME UN PROJET //
        function deleteProjet(works) {
            console.log("delete")
            console.log(works)
            for (let i = 0; i < works.length; i++) {
                var corb = document.getElementsByClassName("corbeille-modale");



                corb[i].addEventListener("click", function (e) {
                    e.preventDefault();
                    console.log("btn clicked");
                    console.log(works[i]);
                    var id = works[i].id;

                    fetch("http://localhost:5678/api/works/" + id, {
                            method: "DELETE",
                            headers: {
                                "Content-type": "application/json",
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        })
                        .then((reponse) => reponse.json)
                        .then((json) => console.log("le projet a bien été supprimé")); {

                        document.querySelector(".modal-contenu").innerHTML = "";
                        refreshModale(works);
                        document.querySelector(".gallery").innerHTML = "";
                        refreshProjets(works)


                    }
                })
            }

        }

        // CHARGER IMAGE MODALE //



        const file = document.getElementById("getFile");
        const preview = document.getElementById("preview");
        const depop = document.getElementById("depop");

        file.addEventListener("change", function (e) {
            const file = e.target.files[0];

            const url = URL.createObjectURL(file);
            preview.src = url;
            depop.style.display = "none";

        })





        // AJOUTER UN PROJET //





        function addProjet() {

            const ajout = document.getElementById("add-modal");

            ajout.addEventListener("click", function () {
                document.getElementById("modal-rendu").style.display = "none";
                document.getElementById("modal-ajout").style.display = "block";
                document.getElementById("depop").style.display = "flex";
            })

            const retour = document.getElementById("return-modal");

            retour.addEventListener("click", function () {
                document.getElementById("modal-ajout").style.display = "none";
                document.getElementById("modal-rendu").style.display = "block";
            })

            const choisir = document.getElementById("ajouter");
            choisir.addEventListener("click", function () {
                const image = document.getElementById("getFile");
                image.click();

                console.log(getFile.files[0])
                document.querySelector("img#preview").style.display = "flex";


            })

            const boutonPhoto = document.querySelector("#boutonPhoto")
            boutonPhoto.addEventListener("click", function (e) {
                    e.preventDefault()
                    const image = document.querySelector("#getFile").files[0];
                    console.log(image);
                    const title = document.querySelector("#titre").value;
                    const category = parseInt(document.querySelector("#categorie").value);
                    document.querySelector("img#preview").style.display = "none";
                    document.formProjet.reset();


                    const formData = new FormData()
                    formData.append("image", image)
                    formData.append("title", title)
                    formData.append("category", category)
                    console.log(formData)




                    let reponse = fetch("http://localhost:5678/api/works", {
                            method: "POST",
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            },
                            body: formData
                        })
                        .then((response) =>
                            response.json()


                        )
                        .then((result) => {
                            console.log("Le projet a bien été ajouté:", result);
                            document.getElementById("modal-ajout").style.display = "none";
                            document.getElementById("modal-rendu").style.display = "block";
                            depop.style.display = "block";


                            document.querySelector(".modal-contenu").innerHTML = "";
                            refreshModale(works);
                            document.querySelector(".gallery").innerHTML = "";
                            refreshProjets(works)



                        })
                        .catch((error) => {
                            console.error("Error:", error);
                        });

                }

            )
        }




        generateProjetsModale(works)

        deleteProjet(works)

        addProjet()




    });