const mobile = window.matchMedia('(max-width: 1024px)')

if(mobile.matches) {
    const hamburgerBtn = document.querySelector("#hamburger-menu-btn");
    const mobileMenu = document.querySelector("#hamburger-menu-container");

    mobileMenu.classList.add("hamburger-menu-none");

    hamburgerBtn.addEventListener("click", function(){
        mobileMenu.classList.toggle("hamburger-menu-none");
        mobileMenu.classList.toggle("hamburger-menu-container");
    });
} else{
    const hamburgerMenu = document.querySelector("#hamburger-menu-container");
    hamburgerMenu.classList.add("hamburger-menu-none");
}