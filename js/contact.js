document.addEventListener("DOMContentLoaded", function () {
  const customLine = document.querySelector(".custom-line");
  if (customLine) {
    setTimeout(() => {
      customLine.classList.add("visible");
    }, 200);
  }
  const elementsToFade = [
    document.querySelector("#contact h2"),
    document.querySelector("#contact p"),
    document.querySelector("#contact .col-md-5"),
    document.querySelector("#contact .col-md-7")
  ];

  elementsToFade.forEach((el, i) => {
    if (el) {
      el.classList.add("fade-in");
      setTimeout(() => {
        el.classList.add("visible");
      }, 300 * i);
    }
  });
});
