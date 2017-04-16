// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import { ElementUI, MessageBox } from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import router from './router';
import appConstants from './app.constants';
import store from './store/';

// config
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueResource);

router.beforeEach((to, from, next) => {
  // Go login while no token
  const isLogin = Boolean(store.state.user); // true用户已登录，false未登录
  /* eslint-disable no-console */
  console.log(isLogin);
  if (to.meta.requireAuth && !isLogin) {
    /* eslint-disable no-console */
    console.log('Not logined in.');
    // todo
    MessageBox.alert('用户未登录，请前往登录页面！', '登录提示', {
      confirmButtonText: '确定',
      callback: () => {
        next({ path: '/' });
      },
    });
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  http: {
    root: appConstants.apiUrl,
  },
});
