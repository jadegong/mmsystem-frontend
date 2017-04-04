/**
 * Created by jade on 2017/4/4.
 */
import Vue from 'vue';

export default class UserService {
  info() {
    return Vue.http.get('/user{/id}');
  }

  login(data) {
    return Vue.http.post('/user/login');
  }

  register(data) {
    return Vue.http.post('/user/register');
  }
};
