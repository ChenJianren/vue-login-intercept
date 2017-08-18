<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1 @click="clear">click=> 'clear local storage'</h1>
    <br>
    <h1>{{ msg }}</h1>
    <br>
    <router-link :to="{name:'home'}" tag="div" class="home">首页</router-link>
    <router-link :to="{name:'personal'}" tag="div" class="personal">个人中心</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  import store from 'store'
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      clear(){
          console.info(1)
        MessageBox.confirm('确定清除本地信息吗？').then(() => {
          store.set('zhooson_login_token', '')
        })
      }
    }
  }
</script>
<style scoped>
  .home, .personal {
    margin: 0 auto;
    font-size: 50px;
    padding: 10px;
    width: 400px;
    border: 1px solid gray;
    margin-bottom: 20px;
    border-radius: 40px;
  }
</style>
