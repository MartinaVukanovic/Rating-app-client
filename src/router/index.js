import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/Home'),
    },
    {
      path: '/today',
      name: 'Today',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/Today'),
    },
    {
      path: '/reports',
      name: 'Reports',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/Reports'),
    },
  ],
});
