
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

let ligneEnEdition = null;

document.addEventListener('DOMContentLoaded', () => {



    const btnShowForm = document.querySelector('#btn-show-form');
    const btnCancelForm = document.querySelector('#btn-cancel-form');
    const sectionForm = document.querySelector('#section-form');
    const formCategorie = document.querySelector('#form-categorie');

    const catId = document.querySelector('#cat-id');
    const catNom = document.querySelector('#cat-nom');
    const catCouleur = document.querySelector('#cat-couleur');
    const catIcone = document.querySelector('#cat-icone');
    const tableBody = document.querySelector('#table-categories-body');


    function chargerCategories() {

        fetch(API_URL)
            .then(response => response.json())
            .then(data => {

                tableBody.innerHTML = '';

                data.slice(0, 5).forEach(cat => {

                    const row = `
                                                
                        <tr>
                            <td>${cat.id}</td>
                            <td>${cat.title.substring(0, 10)}</td>
                            <td>Bleu</td>
                            <td>
                                <button class="btn-delete" data-id="${cat.id}">Supprimer</button>
                            </td>
                        </tr>
                    `;
                    tableBody.insertAdjacentHTML('beforeend', row);
                });


                document.querySelectorAll('.btn-delete').forEach(button => {
                    button.addEventListener('click', () => {
                        const id = button.getAttribute('data-id');


                        fetch(`${API_URL}/${id}`, {
                            method: 'DELETE'
                        })

                        .then(response => response.json())
                        .then(() => {
                            console.log(`Delete : ${id} is  Successfully`);  
                            chargerCategories();          
                        })
                        .catch(error => console.error('Error DELETE : ', error));
                    });
                });

            })

            .catch(error => console.error('Error :', error));
        
    }
    chargerCategories();


    btnShowForm.addEventListener('click', () => {
        btnShowForm.hidden = true;
        sectionForm.hidden = false;
    });




    btnCancelForm.addEventListener('click', () => {
        sectionForm.hidden = true;
        btnShowForm.hidden = false;
        formCategorie.reset();
    });


    formCategorie.addEventListener('submit', (event) => {

        event.preventDefault();

        const nouvelleCategorie = {
            title: catNom.value,
            couleur: catCouleur.value
        };

        fetch(API_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(nouvelleCategorie)
        })

        .then(response => response.json ())
        .then(data => {
            console.log('Successfully :', data.id);


            formCategorie.reset();
            sectionForm.hidden = true;
            btnShowForm.hidden = false;


            chargerCategories();
            
        })
        .catch(error => console.error('Error POST :', error));
        
    })

    
});


