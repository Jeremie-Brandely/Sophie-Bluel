
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
    })
    // ECOUTER LE CLICK DU BOUTON //

    const loginBouton = document.querySelector(".login-button");
    
    
    loginBouton.addEventListener("click", function() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        


        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers: { "Content-Type" : "application/json" }
        })
        .then((reponse) => reponse.json)
        .then((data) => {
            console.log(data);
            
            if(data) {
                localStorage.setItem("userId", data.userId);
                localStorage.setItem("token", data.token);
                window.location.href = "index.html";
            }else{
                
                document.querySelector("#error-message").textContent = "Erreur dans l`identifiant ou le mot de passe";
            }
        })
        .catch(error => console.error(error))
    });
    



