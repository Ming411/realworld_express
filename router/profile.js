const express = require('express');

const router = express.Router();

// 获取指定用户资料
router.get('/:username', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// 关注用户
router.post('/:username/follow', async (req, res) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
// 取消关注用户
router.delete('/:username/follow', async (req, res) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});
module.exports = router;
