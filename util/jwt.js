const jwt = require('jsonwebtoken');
const {promisify} = require('util');

exports.sign = promisify(jwt.sign);
exports.verify = promisify(jwt.verify);
exports.decode = promisify(jwt.decode);
// 生成jwt
/* const token = jwt.sign(
  {
    foo: 'bar'
  },
  'whyccc'
); // 参数三： 编码方式，默认为 RS256 */

/* // 以下为异步生成token，更加高效
jwt.sign(
  {
    foo: 'bar'
  },
  'whyccc',
  (err, token) => {
    if (err) {
      return console.log('生成token失败');
    }
    console.log(token);
  }
); */
// 验证token
/* // 同步方式
const ret = jwt.verify(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NjUyODAxMDB9.OpnalgQglXkLNlWbRCdKAiG1QSgU_H7Yj_-Om3YhEAw',
  'whyccc'
);
console.log(ret); // { foo: 'bar', iat: 1665280100 }  // iat: 签发token时间 */
/* // 异步方式
jwt.verify(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NjUyODAxMDB9.OpnalgQglXkLNlWbRCdKAiG1QSgU_H7Yj_-Om3YhEAw',
  'whyccc',
  (err, ret) => {
    if (err) {
      return console.log('token验证失败');
    }
    console.log(ret);
  }
); */
