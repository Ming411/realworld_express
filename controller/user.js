/* 处理路由中的相关逻辑 */
const {User} = require('../model/index');
const {sign} = require('../util/jwt');
const {jwtSecret} = require('../config/config.default');
// 用户登录
exports.login = async (req, res, next) => {
  try {
    const user = req.user.toJSON(); // 这是前面校验中间件挂载的
    const token = await sign({userId: user._id}, jwtSecret, {
      expiresIn: 60 * 60 * 24 // 设置过期时间，s
    });
    delete user.password;
    res.status(200).json({
      ...user,
      token
    });
  } catch (e) {
    next(e);
  }
};
// 用户注册
exports.register = async (req, res, next) => {
  try {
    const user = new User(req.body.user);
    // 将数据保存到数据库
    await user.save();
    // 删除注册时返回的密码
    const userObj = user.toJSON();
    delete userObj.password;
    res.status(201).json({
      userObj
    });
  } catch (e) {
    next(e);
  }
};
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.status(200).json({
      user: req.user
    });
  } catch (e) {
    next(e);
  }
};
exports.updateCurrentUser = async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
};
