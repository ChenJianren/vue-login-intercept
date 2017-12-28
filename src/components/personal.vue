<template>
  <div class="personal">
    <div class="back" @click="back">返回</div>
    个人中心
  </div>
</template>
<script>
  export default {
    name: 'personal',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
        back(){
            this.$router.back(-1)
        }
    }
  }
</script>
<style scoped>
  .personal {
    width: 100%;
    min-height: 100vh;
    font-size: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back {
    position: fixed;
    width: 100px;
    height: 30px;
    top:0;
    left: 0;
    font-size:30px;
  }
</style>
