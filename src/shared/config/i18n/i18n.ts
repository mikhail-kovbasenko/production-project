import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetecor from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetecor)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // lng: 'ru',
    debug: !!IS_DEV,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
