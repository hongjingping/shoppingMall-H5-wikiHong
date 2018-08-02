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

# 首页轮播图

# easyMock和axios学习
1. https://www.easy-mock.com
  1. 注册
  2. 点击右下角的'+'
  3. 创建好之后点击进去，将json数据复制上去
  4. 设置请求方式等
  5. 复制url地址即可
2. 按照axios
  1. sudo npm i axios --save
  2.
# mock数据使用和flex布局

# vue-awesome-swipper
1. https://www.npmjs.com/package/vue-awesome-swiper

# 楼层组件和watch的使用
1. watch: 当数据发生变化的时候，可以直接监视

# 完善楼层组件
1.

# 项目中的filter使用
1. 代码优化方法


# 热卖组件的制作和van-list的使用

# 第五章-后端开发
## 服务接口API配置文件制作
## 安装koa2到项目中来
0. 新建service目录，进入到service目录
1. `sudo npm init -y`项目初始化
2. `sudo npm install koa --save`下载koa
3. 新建index.js
```
const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {
  ctx.body = '<h1>Hello wikiHong~05.29</h1>'
})

app.listen(3000, () => {
  console.log('[server] starting at port 3000')
})
```
4. `node index.js`
5. 在浏览器启用http://localhost:3000/
6. 此时说明koa已经安装成功
## 安装MongoDB数据库
1. Mongoose是一个开源的封装好的实现
2. Node和MongoDB数据通讯的数据建模库
3. `sudo npm i --save mongoose`
4. `mongod -version`查看是否安装成功mongodb
5. `mongod`执行后，发现又一个`/data/db not found.`
  1. 解决办法一`mongod --dbpath /Users/jingpinghong/data`
6. `mongod`执行后，发现又一个`Address already in use`
  1. 解决方法一`ps aux | grep mongod`查看端口占用情况
  2. 杀掉进程：`kill -9 端口号`
7. 执行`mongod --dbpath /Users/jingpinghong/data`即可

8. 安装robomongo.org，用于监视mongodb数据库
  1. `https://robomongo.org/download`下载安装即可
  2. 启动后，点击create然后save

## koa2中用Mongoose链接数
1. Mongoose是一个开源的封装好的实现 `sudo npm install --save mongoose`
2. node和mongodb数据通讯的数据建模库
## koa2中用Mongoose链接数2
## Mongose的Schema建模介绍
1. schema:用来定义表的模板，实现和mongodb数据库的映射
2. model:具备表操作能力的一种集合，是mongoose的核心能力
3. entity: 类似记录，由model创建的实体
