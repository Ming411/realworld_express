// 验证前端数据, 在操作数据库之前就要进行执行
const {body} = require('express-validator');
const validate = require('../middleware/validate');
const {User} = require('../model');
const md5 = require('../util/md5');
exports.register = validate([
  // 配置验证规则
  body('user.username')
    .notEmpty()
    .withMessage('用户名不能为空')
    .bail()
    .custom(async value => {
      const user = await User.findOne({username: value});
      if (user) {
        return Promise.reject('用户名已存在');
      }
    }),
  body('user.email')
    .notEmpty()
    .withMessage('邮箱不能为空')
    .isEmail()
    .withMessage('邮箱格式不正确')
    .bail() // 表示前面的验证通过后才会执行后续验证
    .custom(async value => {
      const user = await User.findOne({email: value});
      if (user) {
        return Promise.reject('邮箱已存在');
      }
    }),
  body('user.password').notEmpty().withMessage('密码不能为空')
]);

exports.login = [
  validate([
    body('user.email').notEmpty().withMessage('邮箱不能为空'),
    body('user.password').notEmpty().withMessage('密码不能为空')
  ]),
  validate([
    body('user.email').custom(async (email, {req}) => {
      const user = await User.findOne({email}).select([
        'email',
        'username',
        'bie',
        'image',
        'password'
      ]);
      if (!user) {
        return Promise.reject('用户不存在');
      }
      // 将查询到的用户信息挂载，给后续使用
      req.user = user;
    })
  ]),
  validate([
    body('user.password').custom(async (password, {req}) => {
      if (md5(password) !== req.user.password) {
        // 对比数据库中的密码
        return Promise.reject('密码错误');
      }
    })
  ])
];
