<template>
    <div class="log-reg-container">
        <div class="log-reg-content">
            <h2 class="log-reg-content-title">登录材料管理系统</h2>
            <el-form ref="loginForm" :rules="loginRules" :model="loginForm" label-width="100px">
                <el-form-item label="邮箱：" prop="email">
                    <el-input type="email" v-model="loginForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="confirmPass">
                    <el-input type="password" v-model="loginForm.confirmPass"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('loginForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  import ElForm from 'element-ui/packages/form/src/form';
  import ElFormItem from 'element-ui/packages/form/src/form-item';
  import ElInput from 'element-ui/packages/input/src/input';
  import appConstants from '../../app.constants';
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button';

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
          if (this.loginForm.confirmPass !== '') {
            this.$refs.loginForm.validateField('confirmPass');
          }
          callback();
        }
      };
      const validateConfirmPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码！'));
        } else if (value !== this.loginForm.password) {
          callback(new Error('两次密码输入不一致！'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          email: '',
          password: '',
          confirmPass: '',
        },
        loginRules: {
          email: [
            { validator: validateEmail, trigger: 'blur' },
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' },
          ],
          confirmPas: [
            { validator: validateConfirmPass, trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: 'Success!',
              message: 'submit!',
              type: 'success',
            });
          } else {
            this.$notify.error({
              title: 'Error!',
              message: 'Error while submit!',
            });
          }
        });
      },
    },
  };
</script>

<style>
</style>
