<template>
  <div class="home">
    <div class="back" @click="back">返回</div>
      首页
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {}
  },
  methods:{
    back(){
      this.$router.back(-1)
    }
  }
}
</script>
<style scoped>
  .home {
    width:100%;
    min-height: 100vh;
    font-size:80px;
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
