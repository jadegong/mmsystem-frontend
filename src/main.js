// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import router from './router';
import appConstants from './app.constants';

// config
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueResource);

// router.beforeEach((to, from, next) => {
//   // Go login while no token
//   if (to.meta.requireAuth && !sessionStorage.token) {
//     this.$alert('用户未登录，请前往登录页面！', '登录提示', {
//       confirmButtonText: '确定',
//       callback: () => {
//         next({ path: '/' });
//       },
//     });
//   } else {
//     next();
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  http: {
    root: appConstants.apiUrl,
  },
});
