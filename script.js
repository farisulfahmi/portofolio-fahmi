/* typing animation */
var typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/* Menu Toggler (Aside) */
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}
