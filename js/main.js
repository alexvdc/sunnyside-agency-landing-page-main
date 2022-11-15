const menuMobile = document.querySelector(".header-nav__list")
const menu = document.querySelector(".menu")

menu.addEventListener("click", () => {
    if(menuMobile.style.display = "none") {
        menuMobile.style.display = "flex"
    } else {
        menuMobile.style.display = "none"
    }
})