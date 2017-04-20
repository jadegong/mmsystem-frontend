/**
 * Created by jade on 2017/4/4.
 */
import Vue from 'vue';

export default class UserService {
  static info() {
    return Vue.http.get('/user{/id}');
  }

  static login(data) {
    return Vue.http.post('/user/login', data);
  }

  static register(data) {
    return Vue.http.post('/user/register', data);
  }
}
