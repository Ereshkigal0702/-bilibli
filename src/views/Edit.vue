<template>
  <div>
    <div class="edit_bar"><nav-bar></nav-bar></div>
    <div class="uploadFile">
      <van-uploader class="uploadImage" preview-size="100vw" :after-read="afterRead" />
      <edit-banner left="头像">
        <img v-if="model.user_img" :src="model.user_img" alt="" slot="right" />
        <img v-else src="@/assets/rangbal.jpeg" alt="" slot="right" />
      </edit-banner>
    </div>
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
    async afterRead(file){
        const formdata = new FormData();
        formdata.append('file',file.file);
        const res = await this.$http.post('/upload',formdata);
        this.model.user_img = res.data.url;
    }
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
.uploadFile{
    position: relative;
    overflow: hidden;
    .uploadImage{
        opacity: 0;
        position: absolute;
    }
}
</style>