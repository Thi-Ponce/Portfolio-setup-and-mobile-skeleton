const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".desktop-only");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})