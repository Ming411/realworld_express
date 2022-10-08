const mongoose = require('mongoose');
const {dbUri} = require('../config/config.default');

mongoose.connect(dbUri);

const db = mongoose.connection;
db.on('error', err => {
  console.log('MongoDB 连接失败');
});
db.on('open', () => {
  console.log('MongoDB 连接成功');
});

// 组织并导出模型
module.exports = {
  // mongoose 内部会将集合名 User --> users
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article'))
};
