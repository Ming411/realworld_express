const express = require('express');

const router = express.Router();
// 分模块，再统一挂载
router.use(require('./user'));
router.use('/profiles', require('./profile'));
router.use('/articles', require('./article'));
router.use('/tags', require('./tag'));

module.exports = router;
