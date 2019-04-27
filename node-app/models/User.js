// 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const UserSchema = new Schema({
  // 登陆注册需要哪些字段
  name:{
    type:String,
    required: true
  },
  email:{
    type:String,
    required: true
  },
  password:{
    type:String,
    required: true
  },
  avatar:{
    type:String,
  },
  date:{
    type:Date,
    default:Date.now
  }
})

module.exports = User = mongoose.model("users", UserSchema);