const {validationResult, buildCheckFunction} = require('express-validator');
const {isValidObjectId} = require('mongoose');

exports = module.exports = validations => {
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
// 对相同的校验规则进行封装
exports.isValidObjectId = (location, fields) => {
  return buildCheckFunction(location)(fields).custom(async value => {
    if (!isValidObjectId(value)) {
      return Promise.reject('ID不是一个有效的ObjectID');
    }
  });
};
