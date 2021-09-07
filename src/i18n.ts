import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { de, en } from '@assets/translation/Translations.i18n';

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

const lng = navigator.language.toLowerCase().indexOf('en') !== -1 ? 'en' : 'de';
i18n.use(initReactI18next).init({
  resources,
  lng,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
