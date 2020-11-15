<template>
  <div>
    <van-field
      :label="label"
      :placeholder="placeholder"
      :type="type"
      :rule="rule"
      v-model="content"
      @blur="checkValidation()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      reg: new RegExp(this.rule),
      content: "",
    };
  },
  props: ["label", "placeholder", "type", "rule"],
  methods: {
    checkValidation() {
      this.$emit("valueInput", this.content);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
