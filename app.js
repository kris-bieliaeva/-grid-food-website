// mobile menu
let mobileMenu = document.querySelector(".header-mobile-menu");
let mainMenu = document.querySelector(".header-nav");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
    document.body.style.overflow = "hidden";
  } else {
    mainMenu.classList.remove("active-menu");
    document.body.style.overflow = "auto";
  }
});
