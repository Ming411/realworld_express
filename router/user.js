const express = require('express');

const {login, register, getCurrentUser, updateCurrentUser} = require('../controller/user');

const userValidator = require('../validator/user');

const router = express.Router();

/* 为了使结构更加清晰，推荐将路由处理函数统一封装到controller中 */
// 登录
router.post('/users/login', userValidator.login, login);
// 注册
// userValidator 校验注册表单数据
router.post('/users', userValidator.register, register);
// 获取用户信息
router.get('/users', getCurrentUser);
// 更新用户信息
router.put('/users', updateCurrentUser);
module.exports = router;
