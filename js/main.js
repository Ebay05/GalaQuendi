const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const topBar = document.querySelector(".top-bar");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("fixed");
    navLinks.classList.toggle("links-open");
    navLinks.classList.toggle("nav-links");
    topBar.classList.toggle("top-bar-open")
})