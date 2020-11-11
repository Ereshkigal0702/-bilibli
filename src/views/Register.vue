<template>
  <div>
    <login-top :middleTop="title"></login-top>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue';
export default {
  data(){
    return{
      title:'注册Bilibili'
    }
  },
  components:{
    LoginTop
  }
}
</script>

<style lang="less">
  
</style>