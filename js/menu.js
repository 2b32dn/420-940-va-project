function showMenuSectionFromHash() {
	const hash = window.location.hash.substring(1);
	const sections = document.querySelectorAll(".mrn-c-menu-section");

	sections.forEach((section) => {
		section.style.display = section.id === hash ? "block" : "none";
	});
}
window.addEventListener("DOMContentLoaded", showMenuSectionFromHash);
window.addEventListener("hashchange", showMenuSectionFromHash);

// Display Image on Hover

const menuItemList = document.querySelectorAll(".mrn-c-menu__item");
const imageList = document.querySelectorAll(".mrn-c-menu__img");
const imageContainer = document.querySelectorAll(".mrn-c-menu-figure-container");
let lastHoveredId = null;

// Function to update image visibility
function showImageById(id) {
	imageList.forEach((img) => {
		const imgName = img.src.match(/menu-set-[a-z]/i)?.[0];
		// img.style.display = (imgName === id) ? "block" : "none";
		if (imgName === id) {
			img.parentNode.parentNode.style.display = "block";
		} else {
			img.parentNode.parentNode.style.display = "none";
		}
	});
}

// Initial state: show first image
const firstImageId = imageList[0].src.match(/menu-set-[a-z]/i)?.[0];
showImageById(firstImageId);

menuItemList.forEach((item) => {
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

async function loadMenu() {
	try {
		const response = await fetch("http://localhost:3000/menu/combo");
		if (!response.ok) throw new Error("Network response was not ok");

		const allMenuItems = await response.json();
		const currentLang = localStorage.getItem("lang") || "en";

		// filter by language
		const filteredItems = allMenuItems.filter((item) => item.lang_code === currentLang);

		const menuList = document.getElementById("combo-menu-list");
		menuList.innerHTML = "";

		filteredItems.forEach((item) => {
			const letter = item.code.replace(/^menu\.combo\.([^.])\.title$/, "$1");

			// 1) create parent <article>
			const mrn_c_menu_item = document.createElement("article");
			mrn_c_menu_item.classList.add("mrn-c-menu__item");
			mrn_c_menu_item.id = `menu-set-${letter}`;

			// 2) combo → img
			const mrm_c_menu_combo = document.createElement("div");
			mrm_c_menu_combo.classList.add("mrn-c-menu__combo");
			const img = document.createElement("img");
			img.classList.add("mrn-c-menu-letter");
			img.src = `./img/${letter}.svg`;
			img.alt = item.title;
			mrm_c_menu_combo.appendChild(img);
			mrn_c_menu_item.appendChild(mrm_c_menu_combo);

			// 3) content → title + desc
			const mrn_c_menu_content = document.createElement("div");
			mrn_c_menu_content.classList.add("mrn-c-menu__content");

			const title = document.createElement("h3");
			title.classList.add("mrn-c-menu__title");
			title.setAttribute("data-i18n", item.code);
			title.textContent = item.title;

			const desc = document.createElement("p");
			desc.classList.add("mrn-c-menu__desc");
			desc.setAttribute("data-i18n", item.code.replace(".title", ".desc"));
			desc.textContent = item.description;

			mrn_c_menu_content.append(title, desc);
			mrn_c_menu_item.appendChild(mrn_c_menu_content);

			// 4) price
			const priceDiv = document.createElement("div");
			priceDiv.classList.add("mrn-menu__price");
			priceDiv.textContent = `$${item.price}`;
			mrn_c_menu_item.appendChild(priceDiv);

			// 5) append to your list/container
			menuList.appendChild(mrn_c_menu_item);
		});

		const menuItemList = document.querySelectorAll(".mrn-c-menu__item");
		menuItemList.forEach((item) => {
			item.addEventListener("mouseover", () => {
				lastHoveredId = item.id;
				showImageById(item.id);
			});
			item.addEventListener("mouseout", () => {
				showImageById(lastHoveredId || firstImageId);
			});
		});
	} catch (error) {
		console.error("Error fetching menu:", error);
	}
}

window.loadMenu = loadMenu;
window.showMenuSectionFromHash = showMenuSectionFromHash;
