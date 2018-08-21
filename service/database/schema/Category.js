const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  ID: {unique: true, type: String},
  MALL_CATEGORY_NAME: {unique: true, type: String},
  IMAGE: {unique: true, type: String},
  TYPE: {unique: true, type: Number},
  SORT: {unique: true, type: Number},
  COMMENTS: {unique: true, type: String},
})

mongoose.model('Category', categorySchema)
