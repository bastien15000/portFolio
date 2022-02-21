const menuPhone = document.querySelector('.phone-nav > .overlay');
const bars = document.querySelector('.phone-nav-wrapper > .bars');
const icon = document.querySelector('.bars > i');
const modal = document.querySelector('.modal');
const modalImages = document.querySelectorAll('.modal > img');
const overlayModal = document.querySelector('.overlayModal');
const flexProjets = document.querySelectorAll('.flex-projets a')

bars.addEventListener('click', () => {
    menuPhone.classList.toggle('flex');
    icon.classList.toggle('fa-solid');
    icon.classList.toggle('fa-xmark');
    icon.classList.toggle('fas');
    icon.classList.toggle('fa-bars');
})

overlayModal.addEventListener('click', () => {
    overlayModal.style.display = 'none';
    modal.style.opacity = 0;
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.overflowY = 'hidden';
    if (window.matchMedia("(max-width: 992px)").matches) {
        document.documentElement.style.overflowY = 'scroll';
    }
    modalImages.forEach(modalImage => modalImage.style.display = 'none');
})

flexProjets.forEach(function(projet) {
    projet.addEventListener('click', (e) => {
        let index = Array.from(flexProjets).indexOf(e.target.parentNode);
        overlayModal.style.display = 'block';
        document.documentElement.style.overflowY = 'hidden';
        modal.style.overflowY = 'scroll';
        modal.style.opacity = 1;
        modal.style.transform = 'translate(-50%, 0)';
        for(let i = 0; i < modalImages.length; i++) {
            if(index == i) {
                modalImages[i].style.display = 'block';
            }
        }
    })
})