var express = require('express');
var router = express.Router();

var articleModel = require('./model/article');

/* GET users listing. */
router.get('/', function(req, res, next) {
  articleModel.get().then(msg=>{
    res.render('article',{
      msg :msg
    });
  }).catch(err=>{
    res.render('article',{
      msg :err
    });
  })

});

module.exports = router;
