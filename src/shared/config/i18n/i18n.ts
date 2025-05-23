import i18n from 'i18next';
import LanguageDetecor from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

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
