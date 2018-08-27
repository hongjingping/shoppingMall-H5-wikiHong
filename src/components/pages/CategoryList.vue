<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar title="类别列表"/>
    </div>
    <div>
      <van-row>
        <van-col span="6">
          <div class="left-nav">
            左侧导航
          </div>
        </van-col>
        <van-col span="18">
          <div>
            右侧列表
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import url from '@/serverAPI.config.js'
  import {Toast} from 'vant'
  export default {
    data() {
      return {
        key: value
      }
    },
    created () {
      this.getCategory()
    },
    methods: {
      getCategory() {
        axios({
          url: url.getCategoryList,
          method: 'get'
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 200 && res.data.message) {

          } else {
            Toast('服务器错误，数据获取失败')
          }
        })
        .catch (err => {
          Toast(err)
        })
      }
    },

  }
</script>

<style scoped>
.left-nav {
  background-color: aliceblue;
}
</style>
