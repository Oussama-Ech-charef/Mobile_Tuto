const formcat = document.getElementById('form');
const btnsub = document.getElementById('button');
const toastContainer = document.getElementById('toast_container');
const spinner = document.getElementById('spinner');
const buttonLabel = document.getElementById('button-label');

function setLoadingState(isLoading) {
    btnsub.disabled = isLoading;

    spinner.classList.toggle('hidden', !isLoading);
    buttonLabel.textContent = isLoading ? 'Enregistrement...' : 'Enregistrer';
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');

    let classes = 'mb-2 rounded px-4 py-2 text-white shadow-lg transition-opacity duration-500';

    if (type === 'success') {
        classes += ' bg-green-500';
    } else {
        classes += ' bg-red-500';
    }

    toast.className = classes;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';

        setTimeout(() => {
            toast.remove();
        }, 500);
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
    .then(async (res) => {
        const data = await res.json();

        if (!res.ok || data.success === false) {
            throw new Error(data.message || 'Erreur serveur.');
        }

        return data;
    })
    .then(data => {
        toastMessage = data.message || 'Catégorie enregistrée avec succès !';
        toastType = 'success';
        formcat.reset();
    })
    .catch(error => {
        toastMessage = error.message || 'Erreur réseau : impossible de contacter le serveur.';
        toastType = 'error';
        console.error(error);
    })
    .finally(() => {
        setTimeout(() => {
            setLoadingState(false);
            showToast(toastMessage, toastType);
        }, 1000);
    });
    
});
