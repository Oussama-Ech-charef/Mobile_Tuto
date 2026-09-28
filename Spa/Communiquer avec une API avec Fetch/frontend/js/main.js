
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', () => {



    const btnShowForm = document.querySelector('#btn-show-form');
    const btnCancelForm = document.querySelector('#btn-cancel-form');
    const sectionForm = document.querySelector('#section-form');
    const formCategorie = document.querySelector('#form-categorie');
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

    
});


