// HAMBURGER MENU FOR RESPONSIVE DESIGN - PSEUDO CODE

// 1. locate the hamburger icon and save in a variable
const hamburgerIcon = document.querySelector("#hamburgerMenu")

// 2. listen for clicks on hamburger icon using eventlistener
hamburgerIcon.addEventListener("click", function (e) {
    // console.log("clicked");
    // 3. locate the default ul mobile menu, and create active class on DOM, toggle method applied on active class.
    document.querySelector(".mobile").classList.toggle("active");
    // 4. when the hamburger icon is clicked the active class will appear and h1, and h2 will be show as "display none" in the DOM under an active class
    document.querySelector(".headerContent").classList.toggle("active");
});
// whem hamburger icon is clicked on again the ul mobile nav bar will close and the h1, h2 will reappear.
