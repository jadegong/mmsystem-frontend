import Vue from 'vue';

export const AUTH_FILL = 'fill';
export const AUTH_RESET = 'reset';

export default {
  state: JSON.parse(sessionStorage.getItem('user')) || {},
  mutations: {
    [AUTH_FILL](state, user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      Object.assign(state, user);
    },
    [AUTH_RESET](state) {
      sessionStorage.removeItem('user');
      Object.keys(state).forEach(k => Vue.delete(state, k));
    },
  },
  actions: {
    [AUTH_FILL]({ commit }, user) {
      commit(AUTH_FILL, user);
    },
    [AUTH_RESET]({ commit }) {
      commit(AUTH_RESET);
    },
  },
};
