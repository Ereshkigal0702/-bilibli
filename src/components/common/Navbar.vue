<template>
  <div class="navbar">
    <div class="left">
      <img src="@/assets/bilibili-logo.png" alt="" />
    </div>
    <div class="middle">
      <p class="input">
        <van-icon name="search" />
        请输入内容
      </p>
    </div>
    <div class="right">
      <img src="@/assets/logo.png" alt="" />
      <p>下载App</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.navbar {
  height: 12.5vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  .left {
    display: flex;
    justify-content: center;
    img {
      height: 12.5vw;
    }
  }
  .middle {
    flex: 1;
    .input {
      background-color: #f4f4f4;
      border-radius: 1.3889vw;
      margin: 0 2.778vw;
      width: 90%;
      color: #aaa;
      height: 7.222vh;
      line-height: 7.222vh;
      position: relative;
      i {
        padding-right: 1.3889vw;
        transform: translate(1.3889vw, -125%);
        top: 50%;
        color: #aaa;
      }
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 6.667vh;
      width: 6.667vw;
    }
    p {
      background-color: #fb7299;
      margin: 0 2.222vw;
      color: #fff;
      font-size: 3.611vw;
      border-radius: 0.833vw;
      padding: 1.3889vh 2.778vw;
    }
  }
}
</style>