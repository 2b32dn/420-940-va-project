function showMenuSectionFromHash() {
	const hash = window.location.hash.substring(1) || "combo";
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
		const response = await fetch(`${window.location.origin}/api/menu/combo`);
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
			mrn_c_menu_item.classList.add("mrn-c-menu__item--combo");
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

		const menuItemList = document.querySelectorAll(".mrn-c-menu__item--combo");
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

async function loadMainMenu() {
	try {
		const response = await fetch(`${window.location.origin}/api/menu/main`);
		if (!response.ok) throw new Error("Network response was not ok");

		const allMainMenuItems = await response.json();
		const currentLang = localStorage.getItem("lang") || "en";

		// filter by language
		const filteredMainItems = allMainMenuItems.filter((item) => item.lang_code === currentLang);

		// Create main menu sections
		const platterMainMenuList = document.getElementById("platter-menu-list");
		platterMainMenuList.innerHTML = "";

		const silogMainMenuList = document.getElementById("silog-menu-list");
		silogMainMenuList.innerHTML = "";

		const pikaMainMenuList = document.getElementById("pika-pika-menu-list");
		pikaMainMenuList.innerHTML = "";

		const veggiesMainMenuList = document.getElementById("veggies-menu-list");
		veggiesMainMenuList.innerHTML = "";

		// Platter Menu
		const platter = filteredMainItems.slice(0, 2);
		platter.forEach((item) => {
			const mrn_c_menu_item = document.createElement("article");
			mrn_c_menu_item.classList.add("mrn-c-menu__item");

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

			const priceDiv = document.createElement("div");
			priceDiv.classList.add("mrn-menu__price");
			priceDiv.textContent = `$${item.price}`;
			mrn_c_menu_item.appendChild(priceDiv);

			platterMainMenuList.appendChild(mrn_c_menu_item);
		});

		// Silog Menu
		const silog = filteredMainItems.slice(2, 7);
		silog.forEach((item) => {
			const mrn_c_menu_item = document.createElement("article");
			mrn_c_menu_item.classList.add("mrn-c-menu__item");

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

			const priceDiv = document.createElement("div");
			priceDiv.classList.add("mrn-menu__price");
			priceDiv.textContent = `$${item.price}`;
			mrn_c_menu_item.appendChild(priceDiv);

			silogMainMenuList.appendChild(mrn_c_menu_item);
		});

		// Pika Pika Menu
		const pika = filteredMainItems.slice(7, 10);
		pika.forEach((item) => {
			const mrn_c_menu_item = document.createElement("article");
			mrn_c_menu_item.classList.add("mrn-c-menu__item");

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

			const priceDiv = document.createElement("div");
			priceDiv.classList.add("mrn-menu__price");
			priceDiv.textContent = `$${item.price}`;
			mrn_c_menu_item.appendChild(priceDiv);

			pikaMainMenuList.appendChild(mrn_c_menu_item);
		});

		// Veggies Menu
		const veggies = filteredMainItems.slice(10, filteredMainItems.length);
		veggies.forEach((item) => {
			const mrn_c_menu_item = document.createElement("article");
			mrn_c_menu_item.classList.add("mrn-c-menu__item");

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

			const priceDiv = document.createElement("div");
			priceDiv.classList.add("mrn-menu__price");
			priceDiv.textContent = `$${item.price}`;
			mrn_c_menu_item.appendChild(priceDiv);

			veggiesMainMenuList.appendChild(mrn_c_menu_item);
		});
	} catch (error) {
		console.error("Error fetching menu:", error);
	}
}

async function loadSoupsNoodlesMenu() {
	try {
		const response = await fetch(`${window.location.origin}/api/menu/soup&noodles`);
		if (!response.ok) throw new Error("Network response was not ok");

		const allSoupsNoodlesMenuItems = await response.json();
		const currentLang = localStorage.getItem("lang") || "en";

		// filter by language
		const filteredSoupsNoodlesItems = allSoupsNoodlesMenuItems.filter((item) => item.lang_code === currentLang);

		// Create main menu sections
		const soupsMenuList = document.getElementById("soups-menu-list");
		soupsMenuList.innerHTML = "";

		const noodlesMenuList = document.getElementById("noodles-menu-list");
		noodlesMenuList.innerHTML = "";

		// Soups Menu
		const soups = filteredSoupsNoodlesItems.slice(0, 4);
		soups.forEach((item) => {
			const mrn_c_menu_item = document.createElement("article");
			mrn_c_menu_item.classList.add("mrn-c-menu__item");

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

			const priceDiv = document.createElement("div");
			priceDiv.classList.add("mrn-menu__price");
			priceDiv.textContent = `$${item.price}`;
			mrn_c_menu_item.appendChild(priceDiv);

			soupsMenuList.appendChild(mrn_c_menu_item);
		});

		// Noodles Menu
		const noodles = filteredSoupsNoodlesItems.slice(4, filteredSoupsNoodlesItems.length);
		noodles.forEach((item) => {
			const mrn_c_menu_item = document.createElement("article");
			mrn_c_menu_item.classList.add("mrn-c-menu__item");

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

			const priceDiv = document.createElement("div");
			priceDiv.classList.add("mrn-menu__price");
			priceDiv.textContent = `$${item.price}`;
			mrn_c_menu_item.appendChild(priceDiv);

			noodlesMenuList.appendChild(mrn_c_menu_item);
		});
	} catch (error) {
		console.error("Error fetching menu:", error);
	}
}

async function loadSpecialsExtrasMenu() {
	try {
		const response = await fetch(`${window.location.origin}/api/menu/specials&extras`);
		if (!response.ok) throw new Error("Network response was not ok");

		const allSpecialsExtrasMenuItems = await response.json();
		const currentLang = localStorage.getItem("lang") || "en";

		// filter by language
		const filteredSpecialsExtrasItems = allSpecialsExtrasMenuItems.filter((item) => item.lang_code === currentLang);

		// Create main menu sections
		const specialsMenuList = document.getElementById("specials-menu-list");
		specialsMenuList.innerHTML = "";

		const extrasMenuList = document.getElementById("extras-menu-list");
		extrasMenuList.innerHTML = "";

		// Specials Menu
		const specials = filteredSpecialsExtrasItems.slice(0, 13);
		specials.forEach((item) => {
			const mrn_c_menu_item = document.createElement("article");
			mrn_c_menu_item.classList.add("mrn-c-menu__item");

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

			const priceDiv = document.createElement("div");
			priceDiv.classList.add("mrn-menu__price");
			priceDiv.textContent = `$${item.price}`;
			mrn_c_menu_item.appendChild(priceDiv);

			specialsMenuList.appendChild(mrn_c_menu_item);
		});

		// Specials Menu
		const extras = filteredSpecialsExtrasItems.slice(13, filteredSpecialsExtrasItems.length);
		extras.forEach((item) => {
			const mrn_c_menu_item = document.createElement("article");
			mrn_c_menu_item.classList.add("mrn-c-menu__item");

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

			const priceDiv = document.createElement("div");
			priceDiv.classList.add("mrn-menu__price");
			priceDiv.textContent = `$${item.price}`;
			mrn_c_menu_item.appendChild(priceDiv);

			extrasMenuList.appendChild(mrn_c_menu_item);
		});
	} catch (error) {
		console.error("Error fetching menu:", error);
	}
}

async function loadDessertsDrinksMenu() {
	try {
		const response = await fetch(`${window.location.origin}/api/menu/desserts&drinks`);
		if (!response.ok) throw new Error("Network response was not ok");

		const allDessertsDrinksMenuItems = await response.json();
		const currentLang = localStorage.getItem("lang") || "en";

		// filter by language
		const filteredDessertsDrinksItems = allDessertsDrinksMenuItems.filter((item) => item.lang_code === currentLang);

		// Create main menu sections
		const dessertsDrinksMenuList = document.getElementById("desserts-menu-list");
		dessertsDrinksMenuList.innerHTML = "";

		// Desserts & Drinks Menu
		filteredDessertsDrinksItems.forEach((item) => {
			const mrn_c_menu_item = document.createElement("article");
			mrn_c_menu_item.classList.add("mrn-c-menu__item");

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

			const priceDiv = document.createElement("div");
			priceDiv.classList.add("mrn-menu__price");
			priceDiv.textContent = `$${item.price}`;
			mrn_c_menu_item.appendChild(priceDiv);

			dessertsDrinksMenuList.appendChild(mrn_c_menu_item);
		});
	} catch (error) {
		console.error("Error fetching menu:", error);
	}
}

window.loadMenu = loadMenu;
window.showMenuSectionFromHash = showMenuSectionFromHash;
