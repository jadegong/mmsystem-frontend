/**
 * Created by jade on 2017/4/20.
 */
import Vue from 'vue';
import Login from '@/modules/login/login';

describe('login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.log-reg-content-title h2').textContent)
      .to.equal('登录材料管理系统');
  });
});
