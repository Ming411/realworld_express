const express = require('express');

const router = express.Router();
// List Articles
router.get('/', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Feed Articles
router.get('/feed', async (req, res) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Get Article
router.get('/:slug', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Create Article
router.post('/', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Update Article
router.put('/:slug', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Delete Article
router.delete('/:slug', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Add Comments to an Article
router.post('/:slug/comments', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Get Comments from an Article
router.get('/:slug/comments', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Delete Comment
router.delete('/:slug/comments/:id', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Favorite Article
router.post('/:slug/favorite', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// Unfavorite  Article
router.delete('/:slug/favorite', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
module.exports = router;
