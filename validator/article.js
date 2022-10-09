const {body, param} = require('express-validator');
const {default: mongoose} = require('mongoose');
const validate = require('../middleware/validate');
const {Article} = require('../model');
exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('文章标题不能为空'),
  body('article.description').notEmpty().withMessage('文章描述不能为空'),
  body('article.body').notEmpty().withMessage('文章内容不能为空')
]);
exports.getArticle = validate([
  // 验证param中的数据格式，必须为mongodb中的objectId的格式
  param('slug').custom(value => {
    if (!mongoose.isValidObjectId(value)) {
      // 验证如果不通过就不需要执行后续的查询数据库
      // return Promise.reject('文章ID类型错误'); // 只有异步时才这么做,配合async
      /* 同步操作 */
      throw new Error('文章ID类型错误');
    }
    return true;
  })
]);

exports.updateArticle = [
  validate([validate.isValidObjectId(['params'], 'slug')]),
  async (req, res, next) => {
    // 校验文章是否存在
    const articleId = req.params.slug;
    const article = await Article.findById(articleId);
    req.article = article;
    if (!article) {
      return res.status(404).end();
    }
    next();
  },
  async (req, res, next) => {
    // 修改的文章是否为当前登录用户
    // 注意一定要toString因为mongoose查询出来的是object
    if (req.user._id.toString() !== req.article.author.toString()) {
      return res.status(403).end();
    }
    next();
  }
];

exports.deleteArticle = exports.updateArticle;
