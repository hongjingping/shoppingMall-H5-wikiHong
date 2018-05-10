<template>
  <div>
    <div class="search-bar">
      <van-row class="test-row">
        <van-col span="3">
          <img :src="locationIcon" width="80%" class="location-icon"/>
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- swiper area -->
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key='index'>
          <img v-lazy="banner.image" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- swiper area -->
    <!-- type bar -->
    <div class="type-bar">
      <div v-for="(cate, index) in category" :key="index">
        <img v-lazy="cate.image" width="90%">
        <span>{{ cate.mallCategoryName }}</span>
      </div>
    </div>
    <!-- type bar -->
    <!-- adBanner area-->
    <div>
      <img v-lazy="adBanner" width="100%">
    </div>
    <!-- adBanner area-->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: 'ShoppingMall',
      locationIcon: require('../../assets/images/location.png'),
      bannerPicArray: [],
      category: [],
      adBanner: ''
    }
  },
  created () {
    axios({
      url: 'https://www.easy-mock.com/mock/5af3e5ed7098da01bd921f15/smileVue/index',
      method: 'get'
    }).then((res) => {
      if (res.status === 200) {
        console.log(res)
        this.category = res.data.data.category
        this.adBanner = res.data.data.advertesPicture.PICTURE_ADDRESS
        this.bannerPicArray = res.data.data.slides
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
  .search-bar {
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
  }
  .location-icon {
    padding-top: .2rem;
    padding-left: .3rem;
  }
  .search-input {
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
  }
  .swiper-area {
    clear: both;
    max-height: 12rem;
    overflow: hidden;
  }
  .type-bar {
    background-color: #fff;
    margin: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .type-bar div {
    padding: .3rem;
    font-size: 12px;
    text-align: center;
  }
</style>
