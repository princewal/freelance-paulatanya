import "./styles/scss/global.scss";

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");
menuButton.addEventListener("click", () => {
  navbar.classList.toggle("opened");
  this.setAttribute("aria-expanded", navbar.classList.contains("opened"));
});
