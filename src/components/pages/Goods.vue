<template>
  <div>
    <p>商品详情页</p>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serverAPI.config.js'
export default {
  data () {
    return {
      goodsId: '775e575ce28a4f89b1dfe2c99eb08ae7'
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios({
        url: url.getDetailGoodsInfo,
        methods: 'post',
        data: {goodsId: this.goodsId}
      })
        .then(res => {
          console.log('res', res)
          console.log('url', url.getDetailGoodsInfo)
        }).catch(err => {
          console.log('err', err)
        })
    }
  }
}
</script>

<style scoped>

</style>
