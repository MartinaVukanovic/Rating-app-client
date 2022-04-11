import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
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
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/Login'),
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

// prettier-ignore
router.beforeEach((to, from, next) => {
  if (
    (to.name === 'Today' || to.name === 'Reports' || to.name === 'Settings')
    && !localStorage.getItem('user')
  ) {
    next({ name: 'Login' });
    return;
  }
  if (to.name === 'Login' && localStorage.getItem('user')) {
    next({ name: 'Today' });
    return;
  }
  next();
});

export default router;
