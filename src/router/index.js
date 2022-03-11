import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
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
    {
      path: '/settings',
      name: 'Settings',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/Settings'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/Login'),
    },
  ],
});
