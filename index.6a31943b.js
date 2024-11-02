const menuPhone = document.querySelector(".phone-nav > .overlay");
const bars = document.querySelector(".phone-nav-wrapper > .bars");
const icon = document.querySelector(".bars > i");
const modal = document.querySelector(".modal");
const modalContents = document.querySelectorAll(".modal > *");
const overlayModal = document.querySelector(".overlayModal");
const flexProjets = document.querySelectorAll(".container-projet > a");
const submitContainer = document.querySelector(".submit-container");
const email = document.getElementById("email");
const sujet = document.getElementById("sujet");
const message = document.getElementById("message");
const mailTo = document.querySelectorAll(".mailTo");
bars.addEventListener("click", ()=>{
    menuPhone.classList.toggle("flex");
    icon.classList.toggle("fa-solid");
    icon.classList.toggle("fa-xmark");
    icon.classList.toggle("fas");
    icon.classList.toggle("fa-bars");
});
overlayModal.addEventListener("click", ()=>{
    overlayModal.style.display = "none";
    modal.style.opacity = 0;
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.overflowY = "hidden";
    if (window.matchMedia("(max-width: 992px)").matches) document.documentElement.style.overflowY = "scroll";
    modalContents.forEach((modalContent)=>modalContent.style.display = "none");
});
flexProjets.forEach(function(projet) {
    projet.addEventListener("click", (e)=>{
        if (!e.currentTarget.classList.contains("no-open")) {
            let linkParent = e.target.parentNode;
            if (linkParent.classList.contains("hover-img")) linkParent = e.target.parentNode.parentNode;
            let index = Array.from(flexProjets).indexOf(linkParent);
            overlayModal.style.display = "block";
            document.documentElement.style.overflowY = "hidden";
            modal.style.overflowY = "scroll";
            modal.style.opacity = 1;
            modal.style.transform = "translate(-50%, 0)";
            for(let i = 0; i < modalContents.length; i++)if (index == i) modalContents[i].style.display = "block";
        }
    });
});
mailTo.forEach((mail)=>{
    mail.addEventListener("click", ()=>{
        mail.href = `mailto:bastientakis@gmail.com?subject=${sujet.value}&body=${message.value}`;
    });
});

//# sourceMappingURL=index.6a31943b.js.map
