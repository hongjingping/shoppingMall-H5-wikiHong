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
    <!-- Recommend goods area -->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiperSlide v-for="(item, index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%">
              <div>{{ item.goodsName }}</div>
              <div>￥{{ item.price}}(￥{{ item.mallPrice}})</div>
            </div>
          </swiperSlide>
        </swiper>
      </div>
    </div>
    <!-- Recommend goods area -->
    <swiper-default></swiper-default>
    <swiper-default1></swiper-default1>
    <swiper-default2></swiper-default2>
    <swiper-test></swiper-test>
  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import swiperDefault from '../swiper/swiperDefault.vue'
import swiperDefault1 from '../swiper/swiperDefault1.vue'
import swiperDefault2 from '../swiper/swiperDefault2.vue'
import swiperTest from '../swiper/swiperText.vue'
export default {
  data () {
    return {
      msg: 'ShoppingMall',
      locationIcon: require('../../assets/images/location.png'),
      bannerPicArray: [],
      category: [],
      adBanner: '',
      recommendGoods: [],
      swiperOption: {
        slidesPerView: 3
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    swiperDefault,
    swiperDefault1,
    swiperDefault2,
    swiperTest
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
        this.recommendGoods = res.data.data.recommend
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
  .recommend-area {
    background-color: #fff;
    margin-top: .3rem;
  }
  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: .2rem;
    color: #e5017d;
  }
  .recommend-body {
    border-bottom: 1px solid #eee;
  }
  .recommend-item {
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }
</style>
