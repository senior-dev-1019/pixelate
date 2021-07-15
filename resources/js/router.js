import Vue from 'vue';
import Router from 'vue-router';
import guest from './services/middleware/guest';
import auth from './services/middleware/auth';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('@/views/pages/welcome')
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: guest,
    component: () => import('@/views/pages/auth/login')
  },
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: auth,
    component: () => import('@/views/pages/profile')
  },
  {
    path: '*',
    component: () => import('@/views/pages/error')
  }
];

const router = new Router({
  mode: 'history',
  linkActiveClass: 'open',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
