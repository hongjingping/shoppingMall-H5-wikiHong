<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar title="类别列表"/>
    </div>
    <div>
      <van-row>
        <van-col span="6">
          <div class="left-nav" id="left-nav">
            <ul>
              <li v-for="(item, index) in category" :key="index" @click="clickCategory(index, item.ID)" :class="{categoryActive:categoryIndex === index}">{{ item.MALL_CATEGORY_NAME }}</li>
            </ul>
          </div>
        </van-col>
        <van-col span="18">
          <div class="tabCategorySub">
            <van-tabs v-model="active">
              <van-tab v-for="(item, index) in categorySub" :key="index" :title="item.MALL_SUB_NAME">

              </van-tab>
            </van-tabs>
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
        category: [],
        categoryIndex: 0,
        categorySub: [], //小类类别
        active: 0, // 默认从0个tab激活标签的值
      }
    },
    created () {
      this.getCategory()
    },
    mounted () {
      let winHeight = document.documentElement.clientHeight
      document.getElementById('left-nav').style.height = winHeight - 46 + 'px'
    },
    methods: {
      getCategory () {
        axios({
          url: url.getCategoryList,
          method: 'get'
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 200 && res.data.message) {
            this.category = res.data.message
            this.getCategorySubByCategoryID(this.category[0].ID)
          } else {
            Toast('服务器错误，数据获取失败')
          }
        })
        .catch (err => {
          Toast(err)
        })
      },
      clickCategory (index, categoryId) {
        this.categoryIndex = index;
        this.getCategorySubByCategoryID(categoryId)
      },
      // 根据大类ID读取小类类别列表
      getCategorySubByCategoryID (categoryId) {
        axios({
          url: url.getCategorySubList,
          method: 'post',
          data: {categoryId: categoryId}
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 200 && res.data.message) {
            this.categorySub = res.data.message
            this.active = 0
          }
        })
        .catch(err => {
          console.log(err)
          Toast('服务器错误，获取数据失败')
        })
      }
    },

  }
</script>

<style scoped>
.left-nav {
  background-color: aliceblue;
}
.left-nav ul li {
  line-height: 2rem;
  border-bottom: 1px solid #e4e4e4;
  padding: 3px;
  font-size: 0.8rem;
  text-align: center;
}
.categoryActive {
  background-color: #FFF;
}
</style>
