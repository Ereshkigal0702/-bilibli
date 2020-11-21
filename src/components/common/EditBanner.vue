<template>
  <div class="editBanner">
      <span>{{left}}</span>
      <span>
          <slot name="right"></slot>
      </span>
  </div>
</template>

<script>
export default {
    props:['left']
}
</script>

<style lang="less">
    .editBanner{
        padding: 4.167vw;
        background-color: #fff;
        border-bottom: 0.278vw #fafafa solid;
        color:#333;
        font-size: 3.889vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>