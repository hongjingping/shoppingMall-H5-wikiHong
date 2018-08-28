<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar title="购物车"/>
    </div>
    <div class="cart-title">
      <van-button size="small" type="danger" @click="clearCart" plain>
        清空购物车
      </van-button>
    </div>
    <!-- 显示购物车中的商品 -->
    <div class="cart-list">
      <div class="wikiHong-row" v-for="(item, index) in cartInfo" :key="index">
        <div class="wikiHong-img">
          <img :src="item.image" width="100%" alt="">
        </div>
        <div class="wikiHong-text">
          <div class="wikiHong-goods-name">{{ item.name }}</div>
          <div class="wikiHong-control">
            <van-stepper v-model="item.count"/>
          </div>
        </div>
        <div class="wikiHong-goods-price">
          <div>
            ￥{{item.price | moneyFilter}}
          </div>
          <div>
            x{{item.count}}
          </div>
          <div class="allPrice">
            ￥{{ item.price * item.count | moneyFilter}}
          </div>
        </div>
      </div>
    </div>
    <!-- 计算总金额 -->
    <div class="totalMoney">
      商品总价: ￥{{ totalMoney | moneyFilter}}
    </div>
  </div>
</template>

<script>
  import { toMoney } from '@/filter/moneyFilter.js'
  export default {
    // vdata生成
    data() {
      return {
        cartInfo: [],
        isEmpty: false
      }
    },
    filters: {
      moneyFilter (money) {
        return toMoney(money)
      }
    },
    created() {
      this.getCartInfo()
    },
    computed: {
      totalMoney () {
        let allMoney = 0
        this.cartInfo.forEach((item, index) => {
          allMoney += item.price * item.count
        })
        localStorage.cartInfo = JSON.stringify(this.cartInfo)
        return allMoney
      }
    },
    // vme生成
    methods: {
      // 得到购物车数据的方法
      getCartInfo() {
        if (localStorage.cartInfo) {
          this.cartInfo = JSON.parse(localStorage.cartInfo)
        }
        console.log('cartInfo:', JSON.stringify(this.cartInfo))
        this.isEmpty = this.cartInfo.length > 0 ? true : false
      },
      clearCart () {
        localStorage.removeItem('cartInfo')
        this.cartInfo = []
      }
    },
  }
</script>

<style scoped>
.cart-title {
  height: 2rem;
  line-height: 2rem;
  background-color: #FFF;
  border-bottom: 1px solid #e4e7e4;
  padding: 5px;
  text-align: right;
}
.cart-list {
  background-color: #FFF;
}
.wikiHong-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0.5rem;
  font-size: 0.85rem;
  border-bottom: 1px solid #e4e7e4;
}
.wikiHong-img {
  flex: 6;
}
.wikiHong-text {
  flex: 14;
  padding-left: 10px;
}
.wikiHong-goods-price {
  flex: 4;
  text-align: right;
}
.wikiHong-goods-name {

}
.wikiHong-control {
  padding-top: 10px;
}
.allPrice {
  color: red;
}
.totalMoney {
  text-align: right;
  background-color: #FFF;
  border-bottom: 1px solid #e4e7e4;
}
</style>
