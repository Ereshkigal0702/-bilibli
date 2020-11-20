<template>
  <div>
    <nav-bar></nav-bar>
    <img src="@/assets/lisailiu.jpeg" alt="" srcset="" class="backImg" />
    <div>
      <user-detail :userInfo = "model"></user-detail>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/common/Navbar.vue";
import UserDetail from "../components/userComponent/UserDetail.vue";
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async userinfoData() {
      const res = await this.$http.get(`/user/${localStorage.getItem("id")}`);
      this.model = res.data[0];
    },
  },
  components: { NavBar, UserDetail },
  created() {
    this.userinfoData();
  },
};
</script>

<style lang="less">
.backImg {
  height: 150px;
  width: 100%;
}
</style>