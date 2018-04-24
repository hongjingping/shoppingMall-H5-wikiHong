# Vue-Vuex-Router-Node-Koa2-Mongoose-MongoDB
Vue+Vuex+Router+Node+Koa2+Mongoose+MongoDB

### 2018.04.16
# 说明文档
1. `sudo npm -v`
2. `sudo npm i vue-cli -g`
3. `vue init webpack`
# 组件--有赞团队vant
0. 优点
  1. 国人制造，复合中国网站样式和交互习惯；
  2. 单元测试超过90%，有些个人的小样式组件是不作单元测试的；
  3. 支持babel-plugin-import引入，按需加载插件，无需单独引入样式；
  4. 支持TypeScript，这个是2018年前端最应该学的技术；
  5. 支持SSR，服务端渲染也是可以使用这个组件库的；
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
# 移动端适配方案
1. 固定高度，宽度百分比
2. Media Query(媒体查询)
3. flex布局
  1. rem:是相对长度单位，相对于根元素html的font-size来计算。
  `index.html`
# 首页页面
1. 首页路由的设置
  1. router中配置name，可以方便使用
  2. 安装vue VSCodesnippet
  3. 直接在页面中输入vba,按下enter就可以生成基础页面
2. 快速建立首页(vue VSCode snippets)
3. vant布局的方法介绍

# 首页搜索布局
1. 阿里iconfont: http://www.iconfont.cn/
2. 源码: https://github.com/shenghy/SmileVue
