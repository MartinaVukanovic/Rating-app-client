import { createApp } from 'vue';
import VueChartkick from 'vue-chartkick';
import 'chartkick/chart.js';
import App from './App';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueChartkick);
app.mount('#app');
