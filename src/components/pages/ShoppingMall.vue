<template>
  <div>
    <van-row class="test-row">
      <van-col span="4">span:8</van-col>
      <van-col span="16">span:8</van-col>
      <van-col span="4">span:8</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'ShoppingMall'
    }
  }
}
</script>

<style scoped>
  .test-row {
    text-align: center;
  }
</style>
