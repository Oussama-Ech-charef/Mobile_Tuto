const formcat = document.getElementById('form_cat');
const btnsub = document.getElementById('btn_sub');



function setLoadingState(isLoading) {
    btnsub.disabled = isLoading;


    if (isLoading) {
        btnsub.textContent = 'Enregistrement...';
    } else {
        btnsub.textContent = 'Enregistrer';
    }
    
}



formcat.addEventListener('submit', (e) => {
    e.preventDefault();

    setLoadingState(true);


    fetch('../backend/api/controllers/CategorieController.php', {
        method: 'POST',
        body: new FormData(formcat)
    })
    .then(res => res.json())
    .then(data => {
        if (!data.success) {
            console.error('Erreur API : ', data.message);
            return;
            
        }

        console.log('Succes :', data);
        formcat.reset();
        
    })

    .catch(error => {
        console.error('Erreur reseau :', error);
        
    })

    .finally(() => {
        setLoadingState(false);
    });

});
