import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFR from './locales/frs.json';
import translationEN from './locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: translationFR },
    en: { translation: translationEN },
  },
  lng: 'fr', // langue par défaut
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
});

export default i18n;
