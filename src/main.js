import { createApp } from 'vue';
import VueChartkick from 'vue-chartkick';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import 'chartkick/chart.js';
import App from './App';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(store);
app.component('Datepicker', Datepicker);
app.use(VueChartkick);
app.mount('#app');
