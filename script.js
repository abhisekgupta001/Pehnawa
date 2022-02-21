const hamburgerIcon = document.querySelector(".hamburger-icon");
const verticalNav = document.querySelector(".vertical-nav");
const verticalClose = document.querySelector(".close-vertical-btn");


hamburgerIcon.addEventListener("click", ()=>{
    verticalNav.classList.toggle("show-vertical-nav");
})

verticalClose.addEventListener("click", ()=>{
    verticalNav.classList.remove("show-vertical-nav");
})