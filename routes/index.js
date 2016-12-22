var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '爬虫页', status: '启动状态', stack: '随便写写，哦呵呵、、'});
});

module.exports = router;
