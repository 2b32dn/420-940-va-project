function initHeaderBehavior() {
  const hamburgerBtn = document.getElementById("mrn-c-btn--hamburger");
  const mobileMenu = document.querySelector(".mrn-c-nav__section.mrn-c-nav__section--right.mrn-c-nav__section--right-mobile");

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-visible");
      hamburgerBtn.classList.toggle("is-close")
    });
  }
}