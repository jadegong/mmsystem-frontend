import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './Auth';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 非生产环境使用严格模式
  modules: {
    Auth,
  },
});
