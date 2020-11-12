<template>
  <div>
    <login-top middleTop='注册Bilibili'></login-top>
    <login-text label="姓名" aria-placeholder="请输入姓名"
      style="margin:4.167vw 0" rule="^.{6,16}$">
    </login-text>
    <login-text label="用户名" placeholder="请输入用户名" rule="^.{6,16}$">
    </login-text>
    <login-text label="密码" placeholder="请输入密码" type="password" rule="^.{6,16}$">
    </login-text>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue';
import LoginText from '@/components/common/LoginText.vue';
export default {
  data(){
    return{
    }
  },
  components:{
    LoginTop,LoginText
  }
}
</script>

<style lang="less">
  
</style>