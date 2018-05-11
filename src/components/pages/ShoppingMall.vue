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
    <!-- floor area -->
    <div class="floor">
      <div class="recommend-title">
        热销商品
      </div>
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floor1_0.image" width="100%">
        </div>
        <div>
          <div class="floor-two">
            <img :src="floor1_2.image" width="100%">
          </div>
          <div>
            <img :src="floor1_3.image" width="100%">
          </div>
        </div>
      </div>
      <div class="floor-rule">
        <div v-for="(item, index) in floor1.slice(3)" :key="index">
          <img :src="item.image" width="100%"/>
        </div>
      </div>
    </div>
    <!-- floor area -->
  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
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
      },
      floor1: [],
      floor1_0: {},
      floor1_2: {},
      floor1_3: {},
      floor1_4: {}
    }
  },
  components: {
    swiper,
    swiperSlide
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
        this.floor1 = res.data.data.floor1
        this.floor1_0 = this.floor1[0]
        this.floor1_2 = this.floor1[1]
        this.floor1_3 = this.floor1[2]
        this.floor1_4 = this.floor1[3]
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
  .floor {
    background-color: #fff;
  }
  .floor-anomaly {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
  .floor-anomaly div {
    width: 10rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .floor-one {
    border-right: 1px solid #ddd;
  }
  .floor-two {
    border-bottom: 1px solid #ddd;
  }
  .floor-rule {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
  }
  .floor-rule div {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 10rem;
    border-bottom: 1px solid #ddd;
  }
  .floor-rule div:nth-child(odd) {
    border-right: 1px solid #ddd;
  }
</style>
