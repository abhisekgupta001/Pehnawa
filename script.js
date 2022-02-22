const hamburgerIcon = document.querySelector(".hamburger-icon");
const verticalNav = document.querySelector(".vertical-nav");
const verticalClose = document.querySelector(".close-vertical-btn");
const filterBtn = document.querySelector(".filter-icon");
const filterBtnWrapper = document.querySelector(".filter-icon-wrapper");
const filterSideBar = document.querySelector(".filter-sidebar");



hamburgerIcon.addEventListener("click", ()=>{
    verticalNav.classList.toggle("show-vertical-nav");
})

verticalClose.addEventListener("click", ()=>{
    verticalNav.classList.remove("show-vertical-nav");
})

filterBtn.addEventListener("click", ()=>{
    filterSideBar.classList.toggle("show-sidebar");
    filterBtnWrapper.classList.toggle("move-filter-icon");
    setTimeout(()=>{
    filterBtnWrapper.classList.remove("move-filter-icon");
    filterSideBar.classList.remove("show-sidebar");
    },6000)
})