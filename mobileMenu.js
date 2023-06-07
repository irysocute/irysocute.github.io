window.addEventListener('load', function () { /* have to load in script before HTML */
    const menuModal = document.getElementById('modal');
    const openButton = document.getElementById('menu-open');
    const closeButton = document.getElementById('menu-close');

    openButton.onclick = function () {
        menuModal.style.display = 'flex';
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
    };
    closeButton.onclick = function () {
        menuModal.style.display = 'none';
        closeButton.style.display = 'none';
        openButton.style.display = 'block';
    };
})