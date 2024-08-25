import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language translation files
import enTranslation from '../public/assets/locales/en/en/translation.json';
import frTranslation from '../public/assets/locales/en/fr/translation.json';
import arTranslation from '../public/assets/locales/en/ar/translation.json';
import taTranslation from '../public/assets/locales/en/ta/translation.json';

i18n
  .use(initReactI18next) // Bind react-i18next to the i18next instance
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      ar: {
        translation: arTranslation,
      },
      ta: {
        translation: taTranslation,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if selected language is not available
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    // Add the key to support the `dir()` function
    supportedLngs: ['en', 'fr', 'ar','ta'],
  });

export default i18n;
