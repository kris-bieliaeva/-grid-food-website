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

// Scroll
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Add a click event listener to each anchor link
anchorLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Prevent default anchor behavior
    e.preventDefault();

    // Get the target section element
    const target = document.querySelector(this.getAttribute("href"));

    // Calculate the distance between the top of the target section and the top of the page
    const offset = target.getBoundingClientRect().top + window.pageYOffset;

    // Scroll to the target section with a smooth animation
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  });
});

// SLIDER
// const swiper = new Swiper(".mySwiper", {
//   effect: "cube",
//   grabCursor: true,
//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 150,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
