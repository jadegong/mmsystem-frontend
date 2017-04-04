<template>
    <div class="log-reg-container">
        <div class="log-reg-content">
            <h2 class="log-reg-content-title">登录材料管理系统</h2>
            <el-form ref="registerForm" :rules="registerRules" :model="registerForm" label-width="90px">
                <el-form-item label="邮箱：" prop="email">
                    <el-input type="email" v-model="registerForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password" v-model="registerForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="confirmPass">
                    <el-input type="password" v-model="registerForm.confirmPass"></el-input>
                </el-form-item>
                <el-form-item label="用户角色：">
                    <el-radio-group v-model="registerForm.type">
                        <el-radio :label="1">管理员</el-radio>
                        <el-radio :label="2">数据查看用户</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="register('registerForm')">注册</el-button>
                    <el-button type="text" @click="gotoLogin">去登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  import ElForm from 'element-ui/packages/form/src/form';
  import ElFormItem from 'element-ui/packages/form/src/form-item';
  import ElInput from 'element-ui/packages/input/src/input';
  import ElButton from 'element-ui/packages/button/src/button';
  import ElRadio from 'element-ui/packages/radio/src/radio';
  import appConstants from '../../app.constants';

  export default {
    name: 'Register',
    components: { ElRadio, ElButton, ElInput, ElFormItem, ElForm },
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
          if (this.registerForm.confirmPass !== '') {
            this.$refs.registerForm.validateField('confirmPass');
          }
          callback();
        }
      };
      const validateConfirmPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码！'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次密码输入不一致！'));
        } else {
          callback();
        }
      };
      return {
        registerForm: {
          email: '',
          password: '',
          confirmPass: '',
          type: 1,
        },
        registerRules: {
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
      register(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // todo register
            this.$notify({
              title: 'Success!',
              message: 'submit!',
              type: 'success',
            });
          } else {
            this.$notify.error({
              title: '错误!',
              message: '表单数据不符合要求！',
            });
          }
        });
      },
      gotoLogin() {
        this.$router.push('/');
      },
    },
  };
</script>

<style>
</style>
