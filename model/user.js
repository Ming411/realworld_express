// 用于操作数据库相关
const mongoose = require('mongoose');
const {Schema} = mongoose;
// 公共模型，例如创建和更新时间
const baseModel = require('./base-model');

const md5 = require('../util/md5');

// 设计用户模型，即数据库中应该存储的数据类型
const userSchema = new Schema({
  ...baseModel,
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {
    type: String,
    required: true,
    // 在将数据存入数据库之前对密码进行加密
    set: value => md5(value),
    select: false // 以后查询数据时不返回此字段
  },
  bio: {type: String, default: null}, // 简介
  image: {type: String, default: null} // 头像
});
module.exports = userSchema;
