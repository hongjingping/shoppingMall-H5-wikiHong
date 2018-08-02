const mongoose = require('mongoose')
const db = "mongodb://localhost/smile-db"

exports.connect = () => {
  // 链接数据库
  mongoose.connect(db)
  // 数据库的监听事件: 如断开链接、数据库出错等~
  mongoose.connection.on('disconnected', () => {
    console.log('********数据库断开！*******')
    mongoose.connect(db)
  })
  mongoose.connection.on('error', () => {
    console.log('********数据库出错！*******')
    mongoose.connect(db)
  })
  // 链接打开时
  mongoose.connection.once('open', () => {
    console.log('MongoDB is connected successful~')
  })
}
