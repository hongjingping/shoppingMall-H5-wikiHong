const mongoose = require('mongoose')
const db = "mongodb://localhost/smile-db"

exports.connect = () => {
  // 链接数据库
  mongoose.connect(db)

  let maxConnectTimes = 0
  // 返回promise
  return new Promise ((resolve, reject) => {

      // 数据库的监听事件: 如断开链接、数据库出错等~
      mongoose.connection.on('disconnected', () => {
        console.log('********数据库断开！*******')
        if (maxConnectTimes <= 3 ) {
          maxConnectTimes++
          mongoose.connect(db)
        } else {
          reject(err)
          throw new Error('数据库出现问题，没法搞定，请人为处理......')
        }
      })
      mongoose.connection.on('error', () => {
        console.log('********数据库出错！*******')
        if (maxConnectTimes <= 3 ) {
          maxConnectTimes++
          mongoose.connect(db)
        } else {
          reject(err)
          throw new Error('数据库出现问题，没法搞定，请人为处理......')
        }
      })
      // 链接打开时
      mongoose.connection.once('open', () => {
        console.log('MongoDB is connected successful~')
        resolve()
      })
  })
}
