function initHeaderBehavior() {
  const hamburgerBtn = document.getElementById("mrn-c-btn--hamburger");
  const mobileMenu = document.querySelector(".mrn-c-nav__section.mrn-c-nav__section--right.mrn-c-nav__section--right-mobile");
  const body = document.body;

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-visible");
      hamburgerBtn.classList.toggle("is-close")
    });
  }
}

// const navBtnHamburger = document.getElementById("nav-btn--hamburger");
// const navMobile = document.getElementById("cv-nav--mobile");
// const body = document.body;

// navBtnHamburger.addEventListener("click", () => {
//   navMobile.classList.toggle("is-hidden");
//   navBtnHamburger.classList.toggle("cv-nav__btn--hamburger-close");
//   if (!navMobile.classList.contains("is-hidden")) {
//     body.classList.add("no-scroll");
//   } else {
//     body.classList.remove("no-scroll");
//   }
// });
