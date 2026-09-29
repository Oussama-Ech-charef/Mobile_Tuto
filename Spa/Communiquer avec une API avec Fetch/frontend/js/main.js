const API_URL = "../backend/api.php";

let categories = [];
let ligneEnEdition = null;


function chargerCategories() {

    fetch(API_URL)

        .then(response => response.json())

        .then(result => {

            categories = result;

            document.querySelector("#tableBody").innerHTML = "";

            result.forEach(elt => {

                document.querySelector("#tableBody").insertAdjacentHTML(
                    "beforeend",
                    `
                    <tr>
                        <td>${elt.id}</td>
                        <td>${elt.nom}</td>
                        <td>${elt.couleur}</td>
                        <td>${elt.icone}</td>
                        <td>
                            <button type="button" onclick="modifierCategorie(${elt.id})">
                                Modifier
                            </button>
                            <button type="button" onclick="deleteCategorie(${elt.id})">
                                Supprimer
                            </button>
                        </td>
                    </tr>
                    `
                );

            });

        })

        .catch(error => console.error("error :", error));
}


function modifierCategorie(id) {

    const categorie = categories.find(elt => elt.id == id);

    if (categorie) {

        ligneEnEdition = categorie;

        document.querySelector("#cat-nom").value = categorie.nom;
        document.querySelector("#cat-couleur").value = categorie.couleur;
        document.querySelector("#cat-icone").value = categorie.icone;
    }
}

function deleteCategorie(id){
    const categorie = categories.find(elt => elt.id == id)
    fetch(API_URL,{
        method: "DELETE",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(categorie)
    })
}


document.querySelector("#section-form").addEventListener("submit", event => {

    event.preventDefault();

    const nom = document.querySelector("#cat-nom").value;
    const couleur = document.querySelector("#cat-couleur").value;
    const icone = document.querySelector("#cat-icone").value;

    const catg = {
        nom: nom,
        couleur: couleur,
        icone: icone
    };


    let method = "POST";

    if (ligneEnEdition !== null) {

        catg.id = ligneEnEdition.id;

        method = "PUT";
    }


    fetch(API_URL, {

        method: method,

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(catg)

    }).then(response => response.json())
    .then(result => 
        chargerCategories()
    )

    .then(response => response.json())

    .then(result => {

        console.log(result);

        document.querySelector("#section-form").reset();

        ligneEnEdition = null;

        chargerCategories();

    })

    .catch(error => console.error("error :", error));

});


document.addEventListener("DOMContentLoaded", () => {

    chargerCategories();

});