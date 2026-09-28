fetch('https://jsonplaceholder.typicode.com/users/1')

    .then(response => response.json())
    .then(data => {

        console.log('Nom recu :', data.name);
        
    })

    .catch(error => {
        console.error('Erreur :', error);
        
    });



    document.addEventListener('DOMContentLoaded', () => {

        const API_URL = 'https://jsonplaceholder.typicode.com/users';
        const tableBody = document.querySelector('#table-categories-body');

        function chargerCategories() {
            fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = '';

                data.slice(0, 5).forEach(item =>{
                    const row = `
                        <tr>
                            <td>${item.id}</td>
                            <td>${item.nom}</td>
                            <td><span style="color: blue;">Bleu</span></td>
                            <td>
                                <button>Modifier</button>
                                <button>Supprimer</button>
                            <td>

                            
                        </tr>
                    `;
                    tableBody.insertAdjacentHTML('beforeend', row);
                });
            })
            .catch(error => console.error('Errot in data :', error));
            }

            chargerCategories();
    });