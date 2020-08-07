document.getElementById('modalButton').addEventListener('click', showModalWindow);
document.getElementById('modalButtonClose').addEventListener('click', closeModalWindow);

function showModalWindow(){
    document.getElementById('overlayLayout').classList.replace('noOverlayLayout', 'overlayLayout');
}

function closeModalWindow(){
    document.getElementById('overlayLayout').classList.replace('overlayLayout', 'noOverlayLayout');
}