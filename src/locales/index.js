/* eslint-disable */
import { createI18n } from 'vue-i18n';
import ba from './ba';
import en from './en';

const languageStore = localStorage.getItem('language');

/* export function getLanguageFile(language) {
  if (language == 'ba') {
    return ba;
  } else if (language == 'en') {
    return en;
  }
} */

const translation = {
  en: en,
  ba: ba,
};

export default createI18n({
  locale: languageStore,
  fallbackLocale: 'en',
  messages: translation,
  globalInjection: true,
});
