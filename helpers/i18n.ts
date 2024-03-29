import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      ru: {},
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
        },
      },
    },
    // lng: 'uk', // if you're using a language detector, do not define the lng option
    // fallbackLng: ['uk', 'ru', 'en'],

    lng: 'uk',
    fallbackLng: ['uk', 'ru', 'en'],
    // otherLanguages: ['uk', 'ru', 'en'],

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
