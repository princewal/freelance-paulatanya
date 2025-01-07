import "./styles/scss/global.scss";

const swiper = new Swiper(".swiper", {
  loop: true,
  delay: 5000,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
