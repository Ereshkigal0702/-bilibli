<template>
  <div>
    <div class="edit_bar"><nav-bar></nav-bar></div>
    <edit-banner left="头像">
        <img v-if="model.head_img" :src="model.head_img" alt="" slot="right">
        <img v-else src="@/assets/rangbal.jpeg" alt="" slot="right">
    </edit-banner>
    <edit-banner left="昵称">
      <a href="javascript:void(0)" slot="right">{{ model.name }}</a>
    </edit-banner>
    <edit-banner left="账号">
      <a href="javascript:void(0)" slot="right">{{ model.username }}</a>
    </edit-banner>
    <edit-banner left="性别"> </edit-banner>
    <edit-banner left="个性签名"> </edit-banner>
    <!-- <edit-banner left="" ></edit-banner> -->
  </div>
</template>

<script>
import NavBar from "../components/common/Navbar";
import EditBanner from "../components/common/EditBanner";
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
  },
  components: { NavBar, EditBanner },
  created() {
    this.selectUser();
  },
};
</script>

<style lang="less">
.edit_bar {
  margin-bottom: 2.778vh;
}
a {
  color: #333;
}
a:visited,
a:hover {
  color: #333;
}
img{
    width: 12.778vw;
    height:12.778vw;
    border-radius: 50%;
}
</style>