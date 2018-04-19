# Vue-Vuex-Router-Node-Koa2-Mongoose-MongoDB
Vue+Vuex+Router+Node+Koa2+Mongoose+MongoDB

### 2018.04.16
# 说明文档 
1. `sudo npm -v`
2. `sudo npm i vue-cli -g`
3. `vue init webpack`
# 组件--有赞团队vant
1. 安装vant`sudo npm i vant -S`或者`sudo npm i vant --save --registry=https://registry.npm.taobao.org`
2. 引入
  1. 全局引入(不推荐使用)
    1. src->main.js
    ```
    import Vant from 'vant'
    import 'vant/lib/vant-css/index'
    Vue.use(Vant)
    <van-button type="primary">主要按钮</van-button>
    ```
  2. 局部引入
    1. `sudo npm i babel-plugin-import -D`
    2. 在babelrc中引入["import",{"libraryName": "vant", "style": true}]
    3. src->main.js
    ```
    import {Button} from 'vant'
    Vue.use(Button)
    ```