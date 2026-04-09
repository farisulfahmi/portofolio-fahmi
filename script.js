/* typing animation */
var typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navToggler.addEventListener("click", () => {
  aside.classList.toggle("open");
});
