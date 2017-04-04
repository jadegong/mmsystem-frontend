import Vue from 'vue';
import Router from 'vue-router';
import Login from './modules/login/login';
import Register from './modules/register/register';
import Module from './modules/module';
import Dashboard from './modules/dashboard/dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { requireAuth: false },
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { requireAuth: false },
    },
    {
      path: '/module',
      name: 'Modules',
      component: Module,
      meta: { requireAuth: true },
      children: [
        {
          path: '/module/dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
      ],
    },
  ],
});
