<template>
  <div class="userDetail">
    <div>
      <div class="user_img">
        <img
          :src="userInfo.user_img"
          alt=""
          v-if="userInfo.user_img !== null"
        />
        <img src="@/assets/rangbal.jpeg" alt="" v-else />
      </div>
      <div class="user_info">
        <div class="user_profile">
          <p>
            <span>0</span>
            <span class="user_text">粉丝</span>
          </p>
          <p>
            <span>0</span>
            <span class="user_text">关注</span>
          </p>
          <p>
            <span>0</span>
            <span class="user_text">获赞</span>
          </p>
        </div>
        <div>
          <div class="user_button">编辑资料</div>
        </div>
      </div>
    </div>
    <div>
      <h2>花之魔术师</h2>
      <p>这个人很神秘，什么也没有留下</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["userInfo"],
};
</script>

<style scoped lang="less">
@bilicolor: #fb7a9f;
.userDetail {
  background-color: #fff;
  padding: 0 3.333vw;
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    display: flex;
    .user_img {
      margin-right: 20px;
      img {
        height: 23.61vw;
        width: 23.61vw;
        border-radius: 50%;
      }
    }
    .user_info {
      flex: 1;
      flex-direction: column;
      .user_profile {
        display: flex;
        > p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 3.61vw;
          margin: 3.61vw 0;
          .user_text {
            margin-top: 5px;
            color: #aaa;
          }
        }
        p:nth-child(1),
        p:nth-child(2) {
          border-right: 1px solid #f1f1f1;
        }
      }
      div:nth-child(2) {
        padding: 0 10px;
        .user_button {
          flex: 1;
          border: 1px solid @bilicolor;
          padding: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: @bilicolor;
          border-radius: 4px;
          margin-bottom: 3px;
        }
      }
    }
  }
  div:nth-child(2) {
    display: flex;
    flex: 1;
    flex-direction: column;
    h2 {
      margin: 2.778vw 0 0.833vw 0;
      font-weight: 400;
    }
    p {
      padding: 0;
      margin: 2.778vw 0;
      color: #999;
    }
  }
}
</style>