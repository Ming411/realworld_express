const crypto = require('crypto');

// 获取支持的散列算法
// console.log(crypto.getHashes());

module.exports = str => {
  // hex 十进制
  return crypto
    .createHash('md5')
    .update('whyccc' + str)
    .digest('hex');
};
