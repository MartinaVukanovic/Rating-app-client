/* eslint-disable */
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import VueChartkick from 'vue-chartkick';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import 'chartkick/chart.js';
import App from './App';
import router from './router';
import store from './store';

import i18n from './locales/index';

/* import ba from './locales/ba';
import en from './locales/en';

const language = 'ba';

const translation = {
  en: en,
  ba: ba,
}; */

/* const i18n = createI18n({
  locale: language,
  fallbackLocale: 'en',
  messages: translation,
});
 */
const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.component('Datepicker', Datepicker);
app.use(VueChartkick);
app.mount('#app');
