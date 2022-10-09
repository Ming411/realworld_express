const {jwtSecret} = require('../config/config.default');
const {verify} = require('../util/jwt');
const {User} = require('../model/index');
module.exports = async (req, res, next) => {
  // 判断token是否有效
  let token = req.headers['authorization'];
  token = token ? token.split('Bearer ')[1] : null;
  if (!token) {
    return res.status(401).end(); // 401 没有权限
  }
  try {
    const decodedToken = await verify(token, jwtSecret);
    // token 比对成功 数据库中查找用户信息
    req.user = await User.findById(decodedToken.userId);
    next();
  } catch (e) {
    return res.status(401).end();
  }
};
