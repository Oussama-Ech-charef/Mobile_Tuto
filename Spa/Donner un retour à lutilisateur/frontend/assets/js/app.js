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

function showToast(message, type = 'success') {
    const container = document.getElementById('toast_container');
    const toast = document.createElement('div');

    toast.classList = `toast toast-${type}`;

    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);


}



formcat.addEventListener('submit', (e) => {
    e.preventDefault();

    setLoadingState(true);
    let toastMessage;
    let toastType;


    fetch('../backend/api/controllers/CategorieController.php', {
        method: 'POST',
        body: new FormData(formcat)
    })
    .then(res => res.json())
    .then(data => {
        toastMessage = "Categorie enregistree avec succes !";
        toastType = "success";
        formcat.reset();
            
    })

    .catch(error => {
        toastMessage = "Erreur reseau : Impossible de contacter le serveur.";
        toastType = "error";
        console.error(error);
        
    })

    .finally(() => {
        setTimeout(() => {
            setLoadingState(false);
            showToast(toastMessage, toastType);

        }, 1000)
    });

});
