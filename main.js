import "./styles/scss/global.scss";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const swiper = new Swiper(".swiper", {
      loop: true,
      /* autoplay: {
        delay: 5000,
      }, */
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } catch (error) {
    console.error("Error initializing the application:", error);
  }

  const menuButton = document.querySelector(".menu-button");
  const navbar = document.querySelector(".navbar");
  menuButton.addEventListener("click", (e) => {
    console.log("clicked", this);
    navbar.classList.toggle("opened");
    menuButton.setAttribute(
      "aria-expanded",
      navbar.classList.contains("opened")
    );
    document.body.classList.toggle("no-scroll");
  });
});
