// HAMBURGER MENU FOR RESPONSIVE DESIGN - PSEUDO CODE

// 1. locate the hamburger icon 
const hamburgerIcon = document.querySelector("#hamburgerMenu")
// const mobileNav = document.querySelector(".active")

// 2. listen for clicks on hamburger icon
hamburgerIcon.addEventListener("click", function (e) {
    // console.log("clicked");
    // 3. locate the default ul mobile menu, and create active class on DOM, toggle method applied on active class.
    document.querySelector(".mobile").classList.toggle("active");
});