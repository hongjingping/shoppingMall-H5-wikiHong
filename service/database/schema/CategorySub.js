const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySubSchema = new Schema({
  ID: {unique: true, type: String},
  MALL_CATEGORY_ID: {unique: true, type: String},
  MALL_SUB_NAME: {unique: true, type: String},
  COMMENTS: {unique: true, type: String},
  SORT: {unique: true, type: Number},
})

mongoose.model('CategorySub', categorySubSchema)
