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
      meta: { transition: 'route' },
    },
    {
      path: '/reports',
      name: 'Reports',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/Reports'),
      meta: { transition: 'route-up' },
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/Settings'),
      meta: { transition: 'route-up' },
    },
    {
      path: '/admin',
      redirect: '/today',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/NotFound'),
    },
  ],
});
