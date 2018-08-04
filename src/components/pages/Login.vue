<template>
  <div>
      <!-- 登录页面 -->
      <van-nav-bar
      title="用户登录"
      left-text="返回"
      left-arrow
      @click-left="goBack"
      />
      <div class="register-panel">
       <van-field
          v-model="username"
          label="用户名"
          icon="clear"
          placeholder="请输入用户名"
          required
          @click-icon="username= ''"
          :error-message="usernameErrorMsg"
       />
       <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          :error-message="passwordErrorMsg"
       />
       <div class="register-button">
          <van-button type="primary" size="large" @click="loginAction">马上登录</van-button>
       </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serverAPI.config.js'
import { Toast } from 'vant'
export default {
  data () {
    return {
      username: '',
      password: '',
      openLoading: false, // 是否开启用户注册的loading状态
      usernameErrorMsg: '', // 当用户名出错的时候才提示
      passwordErrorMsg: '' // 当密码出错的时候才提示
    }
  },
  created(){
    if (localStorage.userInfo) {
      Toast.success('您已经登录~')
      this.$router.push('/')
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    loginAction () {
      // if (this.checkForm()) {
      //   this.axiosRegisterUser()
      // } // 优化成下面的一行搞定
      this.checkForm() && this.axiosLoginUser()
    },
    axiosLoginUser () {
      this.openLoading = true;
      axios({
        url: url.login,
        method: 'post',
        data: {
          userName: this.username,
          password: this.password
        }
      }).then((response) => {
        console.log(response)
        if (response.data.code == 200 && response.data.message ) {
        // 登录成功之后进行登录状态本地存储
          new Promise((resolve, reject) => {
            localStorage.userInfo = { useName: this.username }
            setTimeout(() => { resolve() }, 500)
          }).then(() => {
            Toast.success('登录成功')
            this.$router.push('/')
          }).catch(err => {
            Toast.fail('登录状态保存失败')
            console.log(err)
          })
        } else {
          Toast.fail('登录失败')
          this.openLoading = false;
        }
      }).catch((err) => {
        console.log(err)
        Toast.fail('登录失败')
        this.openLoading = false;
      })
    },
    // 前端表单验证方法
    checkForm () {
      let isOk = true
      if (this.username.length < 5) {
        this.usernameErrorMsg = '用户名不能少于5位'
        isOk = false;
      } else {
        this.usernameErrorMsg = ''
      }
      if (this.password.length < 6) {
        this.passwordErrorMsg = '密码不能少于6位'
        isOk = false;
      } else {
        this.passwordErrorMsg = ''
      }
      return isOk
    }
  }
}
</script>

<style scoped>
  .register-panel {
    width: 96%;
    border-radius: 5px;
    margin: 20px auto;
    padding-bottom: 80px;
  }
  .register-button {
    padding-top: 10px;
  }
</style>
