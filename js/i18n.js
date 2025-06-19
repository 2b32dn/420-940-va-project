function initI18n() {
	const languageSwitchers = document.querySelectorAll(".mrn-c-nav__language-select");
	const currentLanguage = document.getElementById("current-language");
	if (!languageSwitchers) {
		console.warn("Language selector not found.");
		return;
	}

	// 1) load translations file
	async function loadTranslations(lang) {
		try {
			const resp = await fetch(`./locales/${lang}.json`);
			const translations = await resp.json();
			applyTranslations(translations);
			document.documentElement.lang = lang;
			updateLanguageLabel(lang);
		} catch (err) {
			console.error("Translation loading error:", err);
		}
	}

	// 2) apply text to [data-i18n] elements
	function applyTranslations(translations) {
		document.querySelectorAll("[data-i18n]").forEach((el) => {
			const key = el.getAttribute("data-i18n");
			if (translations[key]) el.textContent = translations[key];
		});
	}

	// 3) update the little “English / Français / Tagalog” badge
	function updateLanguageLabel(lang) {
		const names = { en: "English", fr: "Français", tl: "Tagalog" };
		if (currentLanguage) currentLanguage.textContent = names[lang] || lang;
	}

	// 4) detect initial language
	function getInitialLang() {
		const saved = localStorage.getItem("lang");
		if (saved) return saved;
		const browser = navigator.language.slice(0, 2);
		return ["en", "fr", "tl"].includes(browser) ? browser : "en";
	}

	// wire up the <select>
	const initialLang = getInitialLang();
	languageSwitchers.value = initialLang;

	languageSwitchers.forEach((switcher) => {
		switcher.value = initialLang;
		switcher.addEventListener("change", async (e) => {
			const newLang = e.target.value;
			localStorage.setItem("lang", newLang);

			// Keep all dropdowns in sync
			languageSwitchers.forEach((s) => (s.value = newLang));

			await loadTranslations(newLang);
			loadMenu();
			showMenuSectionFromHash();
		});
	});

	// on first load: translations → menu → correct section
	loadTranslations(initialLang).then(() => {
		loadMenu();
		showMenuSectionFromHash();
	});
}
