const mongoose = require('mongoose')
const Schema = mongoose.Schema

// mongoose原生的主键
let ObjectId = Schema.Types.ObjectId

// 创建UserSchema
const userSchema = new Schema({
  UserId: { type: ObjectId },
  userName: { unique: true, type: String},
  password: String,
  createAt: {type: Date, default: Date.now()},
  lastLoginAt: {type: Date, default: Date.now()},
}) // 加盐

// 发布模型
mongoose.model('User', userSchema)
