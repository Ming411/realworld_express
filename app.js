const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('./model/index');
const router = require('./router/index');
const errHandler = require('./middleware/err-handler');

app.use(cors()); // 处理跨域
// 通过响应头 Access-Control-Allow-Origin *  即表示开启成功
app.use(morgan('dev')); // 配置日志输出
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 3000;

// 挂载路由
app.use('/api', router);
// 统一错误处理
app.use(errHandler());

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
