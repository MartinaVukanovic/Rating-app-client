/* eslint-disable */
import { createI18n } from 'vue-i18n';
import ba from './ba';
import en from './en';

const translation = {
  en: en,
  ba: ba,
};

export default createI18n({
  locale: 'ba',
  fallbackLocale: 'en',
  messages: translation,
});
