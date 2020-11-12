<template>
  <div>
    <van-field :label="label" :placeholder="placeholder" :type="type" :rule="rule"/>
  </div>
</template>

<script>
  export default {
    props:["label","placeholder","type","rule"]
  }
</script>

<style lang="less" scoped>

</style>
