function showMenuSectionFromHash() {
  const hash = window.location.hash.substring(1);
  const sections = document.querySelectorAll('.mrn-c-menu-section');

  sections.forEach(section => {
    section.style.display = (section.id === hash) ? 'block' : 'none';
  });
}
window.addEventListener('DOMContentLoaded', showMenuSectionFromHash);
window.addEventListener('hashchange', showMenuSectionFromHash);


// Display Image on Hover

const menuItemList = document.querySelectorAll(".mrn-c-menu__item");
const imageList = document.querySelectorAll(".mrn-c-menu__img");
const imageContainer = document.querySelectorAll(".mrn-c-menu-figure-container")
let lastHoveredId = null;

// Function to update image visibility
function showImageById(id) {
  imageList.forEach(img => {
    const imgName = img.src.match(/menu-set-[a-z]/i)?.[0];
    // img.style.display = (imgName === id) ? "block" : "none";
    if (imgName === id) {
      img.parentNode.parentNode.style.display = "block"
    } else {
      img.parentNode.parentNode.style.display = "none"
    }
  });
}

// Initial state: show first image
const firstImageId = imageList[0].src.match(/menu-set-[a-z]/i)?.[0];
showImageById(firstImageId);

menuItemList.forEach(item => {
  item.addEventListener("mouseover", () => {
    const hoveredId = item.id;
    lastHoveredId = hoveredId; // Store the last hovered ID
    showImageById(hoveredId);
  });

  item.addEventListener("mouseout", () => {
    // When mouse leaves, show the last hovered image again
    if (lastHoveredId) {
      showImageById(lastHoveredId);
    } else {
      showImageById(firstImageId); // Fallback to first image
    }
  });
});