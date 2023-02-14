// HAMBURGER MENU FOR RESPONSIVE DESIGN - PSEUDO CODE

// 1. locate the hamburger icon and save in a variable
const hamburgerIcon = document.querySelector("#hamburgerMenu")
// const mobileNav = document.querySelector(".active")

// 2. listen for clicks on hamburger icon using eventlistener
hamburgerIcon.addEventListener("click", function (e) {
    // console.log("clicked");
    // 3. locate the default ul mobile menu, and create active class on DOM, toggle method applied on active class.
    document.querySelector(".mobile").classList.toggle("active");
    // 4. when the hamburger icon is clicked the active class will appear and h1, and h2 will be removed on DOM
    const mainHeading = document.querySelector('h1');
    mainHeading.remove();
    const secondaryHeading = document.querySelector('h2');
    secondaryHeading.remove();
});