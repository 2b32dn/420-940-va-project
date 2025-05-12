function initI18n() {
  const languageSwitcher = document.getElementById("mrn-c-nav__language-select");
  const currentLanguage = document.getElementById("current-language");

  if (!languageSwitcher) {
    console.warn("Language selector not found.");
    return;
  }

  async function loadTranslations(lang) {
    try {
      const response = await fetch(`./locales/${lang}.json` || `/repo-name/locales/${lang}.json`);
      const translations = await response.json();
      applyTranslations(translations);
      document.documentElement.lang = lang;
      updateLanguageLabel(lang);
    } catch (error) {
      console.error("Translation loading error:", error);
    }
  }

  function applyTranslations(translations) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[key]) {
        element.textContent = translations[key];
      }
    });
  }

  function updateLanguageLabel(lang) {
    const names = { en: "English", fr: "Français", tl: "Tagalog" };
    if (currentLanguage) {
      currentLanguage.textContent = names[lang] || lang;
    }
  }

  function getInitialLang() {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
    const browserLang = navigator.language.slice(0, 3);
    return ["en", "fr", "tl"].includes(browserLang) ? browserLang : "en";
  }

  const initialLang = getInitialLang();

  // Safely wait for selector to be present
  if (languageSwitcher) {
    languageSwitcher.value = initialLang;
    languageSwitcher.addEventListener("change", (e) => {
      const selectedLang = e.target.value;
      localStorage.setItem("lang", selectedLang);
      loadTranslations(selectedLang);
    });
  }

  loadTranslations(initialLang);
}
