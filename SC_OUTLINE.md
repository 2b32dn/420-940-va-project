420-940-va-project-main
├── HTML Pages
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── menu.html
│       └── uses → components (HTML Fragments)
│                  ├── header.html
│                  └── footer.html
│                       ↑ dynamically loaded by includes.js
├── CSS (Styling Dependencies)
│         ├── Base Styles (styles.css)
│         │     ↑ used by all HTML pages
│         │   ├── Typography
│         │   ├── Colors
│         │   ├── Layout & Grid
│         │   └── Utility Classes
│         └── Component-specific Styles
│              ├── header.css
│                ↑used by header.html  
│              │   ├── .header-container
│              │   ├── .navigation-bar
│              │   └── .logo
│              └── footer.css
│                ↑ used by footer.html
│                    ├── .footer-container
│                    ├── .social-links
│                    └── .contact-info
├── JavaScript Modules
│   ├── includes.js
│   │   └── dynamically includes header/footer HTML
│   │   └── (Structure Followed)
│   │       ├── class DynamicLoader
│   │       │   ├── + loadComponent(componentPath: string, targetElementId: string): void
│   │       │   ├── + initializeComponents(): void
│   │       │   └── - fetchHtml(url: string): Promise<string>
│   │       ├── Functions
│   │       │   ├── document.addEventListener('DOMContentLoaded', ...)
│   │       │   └── window.onload → initializeComponents()
│   │       └── Dependencies
│   │             └── HTML fragments
│   │                ├── header.html
│   │                └── footer.html
│   └── i18n.js (Localization)
│       └── depends on → locales
│       └── (Structure Followed)
│               ├── class LocalizationManager
│               │   ├── + loadLanguage(languageCode: string): void
│               │   ├── + updateContent(): void
│               │   └── - fetchLocaleJson(localePath: string): Promise<object>
│               ├── Data Files
│               │   └── locales/*.json (en/fr/tl)
│               └── Initialization
│                   ├── auto-detect user language
│                   └── calls loadLanguage() and updateContent()
└── Images (Assets)
    ├── Logos
    │   ├── morenalogo.svg
    │   └── morenalogo-xl.jpg/png
    │     ↑referenced by HTML pages (header/footer/index)
    └── Menu Images
        ├── babyback-ribs.jpg
        ├── calamari.jpg
        ├── chicken-wings.jpg
        ├── garlic-fried-rice.jpg
        └── [... other menu images]
            ↑ referenced by menu.html
