<template>
    <div class="log-reg-container">
        <div class="log-reg-content">
            <h2 class="log-reg-content-title">登录材料管理系统</h2>
            <el-form ref="loginForm" :rules="loginRules" :model="loginForm" label-width="70px">
                <el-form-item label="邮箱：" prop="email">
                    <el-input type="email" v-model="loginForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('loginForm')">登录</el-button>
                    <el-button type="text" @click="goToRegister">去注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  import ElForm from 'element-ui/packages/form/src/form';
  import ElFormItem from 'element-ui/packages/form/src/form-item';
  import ElInput from 'element-ui/packages/input/src/input';
  import { mapActions } from 'vuex';
  import appConstants from '../../app.constants';
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button';
  import { AUTH_FILL } from '../../store/Auth';
  import UserService from '../../services/user.service';

  export default {
    components: { ElButton, ElInput, ElFormItem, ElForm },
    name: 'Login',
    data() {
      const validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱！'));
        } else {
          if (new RegExp(`^${appConstants.pattern.email}$`).test(value) === false) {
            callback(new Error('邮箱格式不正确！'));
          }
          callback();
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码！'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          email: '',
          password: '',
        },
        loginRules: {
          email: [
            { validator: validateEmail, trigger: 'blur' },
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      ...mapActions([ AUTH_FILL ]),
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // login
            UserService.login(this.loginForm).then((response) => {
              // success action
              this.$notify({
                title: '登录成功!',
                message: '登录成功，跳转至系统首页!',
                type: 'success',
              });
              this.AUTH_FILL(response.json());
              this.$router.push('/module/dashboard');
            }, () => {
              this.$notify.error({
                title: '登录错误!',
                message: '登录失败，请稍后再试！',
              });
            });
          } else {
            this.$notify.error({
              title: '错误!',
              message: '表单数据不符合要求！',
            });
          }
        });
      },
      goToRegister() {
        this.$router.push('/register');
      },
    },
  };
</script>

<style>
</style>
