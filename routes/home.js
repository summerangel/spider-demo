/**
 * Created by summer on 16/12/19.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req, res) {
  // res.render('home');
  res.render('home' ,{ title: '首页', content: '说点什么吧'});
});

module.exports = router;