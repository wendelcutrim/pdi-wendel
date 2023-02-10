console.log("Start JS");


const width = window.innerWidth;
const menuButton = document.querySelector("#open-menu");
const closeMenuButton = document.querySelector("#close-menu");
const nav = document.querySelector("nav");
const acc = document.querySelectorAll(".accordion");
const liTechsIcons = document.querySelectorAll(".techs-icons li");


if (width <= 768) {
    menuButton.classList.add("active");
}

menuButton.addEventListener("click", handleMenuMobile);
closeMenuButton.addEventListener("click", handleMenuMobile);
nav.addEventListener("click", closeMenuMobile);

acc.forEach(el => {
    el.addEventListener("click", handleAccordionClick);
});

liTechsIcons.forEach(li => {
    li.addEventListener("mouseenter", showTooltipInfo);
    li.addEventListener("mouseleave", closeTooltipInfo);
})


function showTooltipInfo(evt) {
    const li = evt.target;
    let techName = "";
    const info = li.querySelector(".info");

    if (li.querySelector("img")) {
        techName = li.querySelector("img").getAttribute("title");
    } else {
        techName = li.querySelector("span").getAttribute("title");
    }

    info.classList.add("active");
    info.innerText = techName.toUpperCase();

}

function closeTooltipInfo(evt) {
    const li = evt.target;
    const info = li.querySelector(".info");
    info.classList.remove("active");
}

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

function handleAccordionClick(evt) {
    const acc = evt.target;
    const panel = acc.nextElementSibling;
    const expand = acc.querySelector("span");
    console.log(expand.innerText)

    acc.classList.toggle("active");

    if (panel.style.display === "block") {
        panel.style.display = "none";
        expand.innerText = "expand_more";
        acc.style.marginBottom = "1rem";


    } else {
        panel.style.display = "block";
        expand.innerText = "expand_less";
        acc.style.marginBottom = "0";

    }
}