const util = require('util');
module.exports = () => {
  // 错误处理中间件必须有这四个参数
  return (err, req, res, next) => {
    console.log(err);
    res.status(500).json({
      // 序列化成员，仅在开发时使用，因为包含敏感信息
      error: util.format(err)
    });
  };
};
