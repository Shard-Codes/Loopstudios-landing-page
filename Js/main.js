// Navigation html imports
const navMenu = document.querySelector(".nav__menu"),
  navToggle = document.querySelector(".nav__menu-icon"),
  navClose = document.querySelector(".nav__close-icon"),
  navToggleBtn = document.querySelector(".nav__toggle");

// Open menu and toggle aria expanded
navToggle.addEventListener("click", () => {
  navMenu.classList.add("open__menu");
  navToggleBtn.setAttribute("aria-expanded", true);
});

// Close menu and toggle aria expanded
navClose.addEventListener("click", () => {
  navMenu.classList.remove("open__menu");
  navToggleBtn.setAttribute("aria-expanded", false);
});

// Sticky header
function scrollHeader() {
  const header = document.querySelector(".header");

  if (this.scrollY > 50) {
    header.classList.add("sticky__header");
  } else {
    header.classList.remove("sticky__header");
  }
}

window.addEventListener("scroll", scrollHeader);
