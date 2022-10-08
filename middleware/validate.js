const {validationResult} = require('express-validator');

module.exports = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));
    // validationResult 获取验证的结果
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({errors: errors.array()});
  };
};
