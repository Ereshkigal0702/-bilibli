<template>
  <div>
    <div class="edit_bar"><nav-bar></nav-bar></div>
    <div class="uploadFile">
      <van-uploader
        class="uploadImage"
        preview-size="100vw"
        :after-read="afterRead"
      />
      <edit-banner left="头像">
        <img v-if="model.user_img" :src="model.user_img" alt="" slot="right" />
        <img v-else src="@/assets/rangbal.jpeg" alt="" slot="right" />
      </edit-banner>
    </div>
    <edit-banner left="昵称" @bannerClick="show = true">
      <a href="javascript:void(0)" slot="right">{{ model.name }}</a>
    </edit-banner>
    <edit-banner left="账号">
      <a href="javascript:void(0)" slot="right">{{ model.username }}</a>
    </edit-banner>
    <edit-banner left="性别" @bannerClick="genderShow = true">
       <a href="javascript:void(0)" slot="right">{{ model.gender }}</a> 
    </edit-banner>
    <edit-banner left="个性签名" @bannerClick="showSign = true">
      <a href="javascript:void(0)" slot="right">{{ model.user_desc }}</a>
    </edit-banner>
    <!-- 昵称弹出框 -->
    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="confirmClick"
      @cancel="text = ''"
    >
      <van-field v-model="text" autofocus></van-field>
    </van-dialog>
    <!-- 个性签名弹出框 -->
    <van-dialog
      v-model="showSign"
      title="个性签名"
      show-cancel-button
      @confirm="confirmSignClick"
      @cancel="text = ''"
    >
      <van-field v-model="text" type="textarea"></van-field>
    </van-dialog>
    <!-- 性别弹出框 -->
    <van-action-sheet
      v-model="genderShow"
      :actions="actions"
      @select="selectGender"
    ></van-action-sheet>
  </div>
</template>

<script>
import NavBar from "../components/common/Navbar";
import EditBanner from "../components/common/EditBanner";
export default {
  data() {
    return {
      model: {},
      show: false,
      showSign: false,
      text: "",
      genderShow: false,
      actions: [{ name: "男" }, { name: "女" }],
    };
  },
  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async afterRead(file) {
      const formdata = new FormData();
      formdata.append("file", file.file);
      const res = await this.$http.post("/upload", formdata);
      this.model.user_img = res.data.url;
      this.userUpdate();
    },
    async userUpdate() {
      const res = await this.$http.post(
        `/update/${localStorage.getItem("id")}`,
        this.model
      );
      if(res.data.code === 200){
          this.$message.success('修改成功!');
          return;
      }
      this.$message.success('修改失败，请联系管理员!');
    },
    confirmClick() {
      this.model.name = this.text;
      this.userUpdate();
      this.text = "";
    },
    confirmSignClick() {
      this.model.user_desc = this.text;
      this.userUpdate();
      this.text = "";
    },
    selectGender(value) {
      this.model.gender = value.name;
      this.userUpdate();
      this.genderShow = false;
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
img {
  width: 12.778vw;
  height: 12.778vw;
  border-radius: 50%;
}
/*
    实现框内所有区均可点击上传
    1、将上传组件引入后将其宽高设置成100vw，充满整个视图
    2、父级元素设置overflow:hidden，将超出部分隐藏
    3、设置子元素透明度opacity:0，使其不可见，从而达到点击弗雷任意一处均可上传的效果
*/
.uploadFile {
  position: relative;
  overflow: hidden;
  .uploadImage {
    opacity: 0;
    position: absolute;
  }
}
</style>