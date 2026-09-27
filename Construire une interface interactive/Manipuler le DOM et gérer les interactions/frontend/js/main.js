document.addEventListener('DOMContentLoaded', () => {


    const btnShowForm = document.querySelector('#btn-show-form');
    const btnCancelForm = document.querySelector('#btn-cancel-form');
    const sectionForm = document.querySelector('#section-form');
    const formCategorie = document.querySelector('#form-categorie');


    const catNom = document.querySelector('#cat-nom');
    const catCouleur = document.querySelector('#cat-couleur');
    const tableBody = document.querySelector('#table-categories-body');


    btnShowForm.addEventListener('click', () => {

        btnShowForm.hidden = true;
        sectionForm.hidden = false;
    });


    btnCancelForm.addEventListener('click', () => {
        sectionForm.hidden = true;
        btnShowForm.hidden = false;
        formCategorie.reset();
    });



    formCategorie.addEventListener('submit', (event) =>{

        event.preventDefault();


        const newRow = `
            <tr>
                <td>${catNom.value}</td>
                <td>
                    <span class="badge" style="background-color: ${catCouleur.value}">
                        ${catCouleur.value}
                    </span>
                </td>
            </tr>
        `;

        tableBody.insertAdjacentHTML('beforeend', newRow);

        formCategorie.reset();
        sectionForm.hidden = true;
        btnShowForm.hidden = false;
    });






});