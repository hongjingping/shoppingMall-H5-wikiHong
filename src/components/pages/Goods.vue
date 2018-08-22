<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar
        title="商品详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="topimage-div">
      <img :src="goodsInfo.IMAGE1" width="100%" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serverAPI.config.js'
export default {
  data () {
    return {
      goodsId: '',
      goodsInfo: {} // 商品详细信息
    }
  },
  created () {
    this.goodsId = this.$route.query.goodsId
    console.log(this.goodsId)
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
          this.goodsInfo = res.data.message
        }).catch(err => {
          console.log('err', err)
        })
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
