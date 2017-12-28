<template>
  <div class="login">
    <form class="form" @click.submit.prevent>
      <input type="text" class="input" name="name" v-model.trim='formData.name' placeholder="姓名"><br>
      <input type="text" class="input" name="phone" v-model.trim='formData.phone' placeholder="手机号"><br>
      <button class="input" type="submit" @click="loginHandler(formData)">登录</button>
    </form>
  </div>
</template>
<script>
import validation from '../assets/script/validation';
import store from 'store';
import { MessageBox } from 'mint-ui';
export default {
  name: 'login',
  data() {
    return {
      formData: {
        name: '',
        phone: '',
      },
    };
  },
  methods: {
    Validate(formData) {
      if (validation.isEmpty(formData.name)) {
        MessageBox.alert('请输入姓名');
        return false;
      } else if (validation.isEmpty(formData.phone)) {
        MessageBox.alert('请输入您的手机号');
        return false;
      } else if (!validation.checkPhone(formData.phone)) {
        MessageBox.alert('您的手机号格式有误');
        return false;
      } else {
        return true;
      }
    },
    loginHandler(formData) {
      if (this.Validate(formData)) {
        store.set('zhooson_login_token', formData);
        MessageBox.alert('登录成功').then(() => {
          let redirect = decodeURIComponent(this.$route.query.redirect || '/');
          this.$router.push({
            path: redirect,
          });
        });
      }
    },
  },
};
</script>
<style>
.login {
  min-height: 100vh;
  width: 100%;
}
.form {
  display: flex;
  align-items: center;
  justify-content: center;
}
.input {
  width: 300px;
  height: 80px;
}
</style>
