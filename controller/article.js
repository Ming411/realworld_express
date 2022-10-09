const {Article} = require('../model');
const {User} = require('../model');
// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article);
    article.author = req.user._id;
    await article.save();
    // 从user集合中，查找对应得用户信息并返回
    article.author = await User.findById(article.author);
    res.status(201).json({
      article
    });
  } catch (e) {
    next(e);
  }
};
// 获取文章
exports.getArticle = async (req, res, next) => {
  try {
    // populate 将author从user集合中映射出来
    const article = await Article.findById(req.params.slug).populate('author');
    if (!article) {
      // 没有查到
      return res.status(404).end();
    }
    res.status(200).json({
      article
    });
  } catch (e) {
    next(e);
  }
};
// 获取文章列表
exports.getArticles = async (req, res, next) => {
  try {
    const {limit = 20, offset = 0, tag, author} = req.query;
    const filter = {};
    if (tag) {
      filter.tagList = tag;
    }
    if (author) {
      const user = await User.findOne({username: author});
      filter.author = user ? user._id : null;
    }
    const articles = await Article.find(filter)
      .skip(Number.parseInt(offset))
      .limit(Number.parseInt(limit))
      .sort({
        createAt: -1 // -1 倒序
      });
    const articlesCount = await Article.countDocuments();
    res.status(200).json({
      articles,
      articlesCount
    });
  } catch (e) {
    next(e);
  }
};
// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    const article = req.article;
    const bodyArticle = req.body.article;
    article.title = bodyArticle.title || article.title;
    article.description = bodyArticle.description || article.description;
    article.body = bodyArticle.body || article.body;
    // 此处的article是由上一个中间件中的模型创建来的
    await article.save();
    res.status(200).json({
      article
    });
  } catch (e) {
    next(e);
  }
};
// 删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    const article = req.article;
    await article.remove();
    res.status(204).end();
  } catch (e) {
    next(e);
  }
};
