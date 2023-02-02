console.log("Start JS");

const width = window.innerWidth;
const menuButton = document.querySelector("#open-menu");
const closeMenuButton = document.querySelector("#close-menu");
const nav = document.querySelector("nav");

if (width <= 768) {
    menuButton.classList.add("active")
}

menuButton.addEventListener("click", handleMenuMobile);
closeMenuButton.addEventListener("click", handleMenuMobile);
nav.addEventListener("click", closeMenuMobile)

function handleMenuMobile(evt) {
    nav.classList.add("active");
    console.log(evt.target.textContent);

    if (evt.target.textContent === " menu ") {
        if (menuButton.classList.contains("active")) {
            menuButton.classList.remove("active");

            closeMenuButton.classList.add("active");
        }
    }

    if (evt.target.textContent === " close ") {
        if (closeMenuButton.classList.contains("active")) {
            closeMenuButton.classList.remove("active");

            menuButton.classList.add("active");
            nav.classList.remove("active");

        }
    }

}

function closeMenuMobile(evt) {
    if (evt.target.hasAttribute("href")) {
        nav.classList.remove("active")
        closeMenuButton.classList.remove("active");
        menuButton.classList.add("active");
    }
}