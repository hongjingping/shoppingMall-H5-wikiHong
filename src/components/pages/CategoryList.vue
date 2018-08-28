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
            <van-tabs v-model="active" @click="onClickCategorySub">
              <van-tab v-for="(item, index) in categorySub" :key="index" :title="item.MALL_SUB_NAME">

              </van-tab>
            </van-tabs>
          </div>
          <div id="list-div">
            <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
              <van-list v-model="loading" :finished="finished" @load="onLoad">
                <div class="list-item" @click="goGoodsInfo(item.ID)" v-for="(item, index) in goodList" :key="index">
                  <div class="list-item-img">
                    <img
                    :src="item.IMAGE1"
                    width="100%"
                    :onerror="errorImg"
                    />
                  </div>
                  <div class="list-item-text">
                    <div>
                      {{ item.NAME }}
                      ￥{{ item.ORI_PRICE | moneyFilter }}元
                    </div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
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
import { toMoney } from '@/filter/moneyFilter.js'
export default {
  data() {
    return {
      category: [],
      categoryIndex: 0,
      categorySub: [], //小类类别
      active: 0, // 默认从0个tab激活标签的值
      loading: false,
      finished: false, // 上拉加载是否有数据
      // list: [], // 商品数据
      page: 1, // 商品列表页数
      goodList: [], // 商品列表信息
      categorySubId: '', // 商品子类ID
      isRefresh: false, // 是否下拉刷新
      errorImg: 'this.src="'+ require('@/assets/images/errorimg.png')+'"'
    }
  },
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
  created () {
    this.getCategory()
  },
  mounted () {
    let winHeight = document.documentElement.clientHeight
    document.getElementById('left-nav').style.height = winHeight - 46 + 'px'
    document.getElementById('list-div').style.height = winHeight - 90 + 'px'
  },
  methods: {
    // 获取大类列表
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
          this.categorySubId = this.categorySub[0].ID
          this.onLoad()
        }
      })
      .catch(err => {
        console.log(err)
        Toast('服务器错误，获取数据失败')
      })
    },
    // 获取子类数据
    getGoodList () {
      axios({
        url: url.getGoodsListByCategorySubID,
        method: 'post',
        data: {
          categorySubId: this.categorySubId,
          page: this.page
        }
      })
      .then(res => {
        console.log(res)
        if (res.data.code === 200 && res.data.message.length) {
          this.page++
          this.goodList = this.goodList.concat(res.data.message)
        } else {
          this.finished = true
          Toast('暂无数据~')
        }
        this.loading = false
      })
      .catch(err => {
        console.log(err)
        Toast('服务器出错，获取数据失败')
      })
    },
    clickCategory (index, categoryId) {
      this.categoryIndex = index
      this.page = 1
      this.finished = false
      this.goodList = []
      this.getCategorySubByCategoryID(categoryId)
    },
    // 上拉加载
    onLoad () {
      setTimeout ( () => {
        this.categorySubId = this.categorySubId?this.categorySubId:this.categorySub[0].ID
        this.getGoodList()
        // mock数据
        // for( let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1)
        // }
        // this.loading = false
        // if (this.list.length >= 40) {
        //   this.finished = true
        // }
      }, 1000)
    },
    // 下拉刷新
    onRefresh () {
      setTimeout ( () => {
        this.isRefresh = false
        this.goodList = []
        this.finished = false
        this.page = 1
        this.onLoad()
      }, 500)
    },
    onClickCategorySub (index, title) {
      this.categorySubId = this.categorySub[index].ID
      console.log('categorySubId:', this.categorySubId)
      this.goodList = []
      this.finished = false
      this.page = 1
      this.onLoad()
    },
    // 跳转到商品详情页
    goGoodsInfo (id) {
      this.$router.push({name: 'Goods', params: {goodsId: id}}) // name和params组合
      // this.$router.push({path: '/goods', query: {goodsId: id}}) // path和query组合
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
.list-item {
  text-align: center;
  line-height: 80px;
  border-bottom: 1px solid #F0F0F0;
  background-color: #FFF;
}
#list-div {
  overflow: scroll;
}
#list-div .list-item {
    display: flex;
    flex-direction: row;
    font-size:0.8rem;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;
    padding:5px;
}
.list-item-img{
    flex:8;
}
.list-item-text{
    flex:16;
    margin-top:10px;
    margin-left:10px;
}

</style>
