



fetch('../backend/categories.php')
    .then(Response => Response.json())
    .then(categories => {

        const ul = document.getElementById('liste_categories');

        categories.forEach(categorie => {
            const li = document.createElement('li');

            li.textContent = categorie.nom;

            ul.appendChild(li);
        });
    })

    .catch(erreur => console.error("Erreur de communication :" , erreur));