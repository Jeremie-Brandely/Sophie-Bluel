
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
    })
    // ECOUTER LE CLICK DU BOUTON //

    const loginBouton = document.querySelector(".login-button");
    loginBouton.appendChild("#login");
    
        loginBouton.addEventListener("click", function() {
        const email = document.getElementById(".email").value;
        const password = document.getElementById(".password").value;
    });


        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email: ".email", password: ".password"})
        })

        .then(reponse => reponse.json())
        .then((data) => {
            console.log(data);
            
            if(data.message) {
                document.querySelector("#error-message").textContent = "Erreur dans l`identifiant ou le mot de passe";
            }else{
                localStorage.setItem("access_token", data.token);
                localStorage.setItem("userId", data.userId);
                window.location.href = "/FrontEnd/";
            }
        })
        .catch(error => console.error(error))
    
    
    


