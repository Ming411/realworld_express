const express = require('express');
const auth = require('../middleware/auth');
const userValidator = require('../validator/article');
const {
  createArticle,
  getArticle,
  getArticles,
  updateArticle,
  deleteArticle
} = require('../controller/article');
const router = express.Router();
// List Articles
router.get('/', getArticles);
// Feed Articles
router.get('/feed', auth, async (req, res) => {
  try {
    res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Get Article
router.get('/:slug', userValidator.getArticle, getArticle);
// Create Article
router.post('/', auth, userValidator.createArticle, createArticle);
// Update Article
router.put('/:slug', auth, userValidator.updateArticle, updateArticle);
// Delete Article
router.delete('/:slug', auth, userValidator.deleteArticle, deleteArticle);
// Add Comments to an Article
router.post('/:slug/comments', auth, async (req, res, next) => {
  try {
    res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Get Comments from an Article
router.get('/:slug/comments', auth, async (req, res, next) => {
  try {
    res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Delete Comment
router.delete('/:slug/comments/:id', auth, async (req, res, next) => {
  try {
    res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Favorite Article
router.post('/:slug/favorite', auth, async (req, res, next) => {
  try {
    res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Unfavorite  Article
router.delete('/:slug/favorite', auth, async (req, res, next) => {
  try {
    res.send('hello');
  } catch (e) {
    next(e);
  }
});
module.exports = router;
