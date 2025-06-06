document.addEventListener("DOMContentLoaded", function () {
  const customLine = document.querySelector(".mrn-c-contact-line");
  if (customLine) {
    setTimeout(() => {
      customLine.classList.add("visible");
    }, 200);
  }

  const elementsToFade = [
    document.querySelector(".mrn-c-contact-section h2"),
    document.querySelector(".mrn-c-contact-section p"),
    document.querySelector(".mrn-l-contact-col"),
    document.querySelector(".mrn-c-contact-section .col-md-7")
  ];

  elementsToFade.forEach((el, i) => {
    if (el) {
      el.classList.add("mrn-l-fade-in");
      setTimeout(() => {
        el.classList.add("visible");
      }, 300 * i);
    }
  });
});
