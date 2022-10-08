/* 处理路由中的相关逻辑 */
const {User} = require('../model/index');

// 用户登录
exports.login = async (req, res, next) => {
  try {
    await res.send('hello');
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
    await res.send('hello');
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
