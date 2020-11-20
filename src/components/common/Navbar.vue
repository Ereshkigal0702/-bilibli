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
  height: 12.5vw;
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
      border-radius: 5px;
      margin: 0 10px;
      width: 90%;
      color: #aaa;
      height: 26px;
      line-height: 26px;
      position: relative;
      i {
        padding-right: 5px;
        transform: translate(5px, -60%);
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
      height: 24px;
      width: 24px;
    }
    p {
      background-color: #fb7299;
      margin: 0 8px;
      color: #fff;
      font-size: 13px;
      border-radius: 3px;
      padding: 5px 10px;
    }
  }
}
</style>