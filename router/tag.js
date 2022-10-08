const express = require('express');

const router = express.Router();

// Get Tags
router.get('/', async (req, res, next) => {
  try {
    await res.send('hello');
  } catch (e) {
    next(e);
  }
});

module.exports = router;
