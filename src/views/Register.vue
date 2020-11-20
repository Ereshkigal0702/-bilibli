<template>
  <div>
    <login-top middleTop="注册Bilibili">
      <div
        slot="right"
        style="font-size: 3.611vw"
        @click="$router.push('/login')"
      >
        登录
      </div>
    </login-top>
    <login-text
      label="姓名"
      aria-placeholder="请输入姓名"
      @valueInput="(res) => (formData.name = res)"
      style="margin: 4.167vw 0"
      :rule="rule"
    >
    </login-text>
    <login-text
      label="用户名"
      placeholder="请输入用户名"
      :rule="rule"
      @valueInput="(res) => (formData.username = res)"
    >
    </login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      :rule="rule"
      @valueInput="(res) => (formData.password = res)"
    >
    </login-text>
    <login-btn btnText="注册" @registerClick="registerClick"></login-btn>
  </div>
</template>

<script>
import LoginTop from "@/components/common/LoginTop.vue";
import LoginText from "@/components/common/LoginText.vue";
import LoginBtn from "@/components/common/LoginBtn.vue";
export default {
  data() {
    return {
      rule: "^.{6,16}$",
      formData: {
        name: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async registerClick() {
      let reg = new RegExp(this.rule);
      if (
        reg.test(this.formData.name) &&
        reg.test(this.formData.username) &&
        reg.test(this.formData.password)
      ) {
        const res = await this.$http.post("/register", this.formData);
        if (res.data.code === 200) {
          this.$message.success(res.data.msg);
          setTimeout(() => {
            this.$router.push('/login');
          }, 500);
        } else {
          this.$message.fail(res.data.msg);
        }
      }
    },
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn,
  },
};
</script>

<style lang="less">
</style>