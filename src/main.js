import { createApp } from 'vue';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import gAuthPlugin from 'vue3-google-oauth2';
import App from './App';
import router from './router';
import store from './store';

/* eslint-disable */

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/today' || to.fullPath === '/reports' || to.fullPath === '/settings') {
    if (!localStorage.getItem('user')) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (localStorage.getItem('user')) {
      next('/today');
    }
  }
  next();
});

const gauthClientId = '1016250990319-sibegmhsqftld7rs618mvt8b87gnklv5.apps.googleusercontent.com';

const app = createApp(App);

app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: 'email',
  prompt: 'consent',
});

app.use(router);
app.use(store);
app.component('Datepicker', Datepicker);
app.mount('#app');
