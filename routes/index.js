var express = require('express');
var router = express.Router();
var tools = require('./util/tools.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Express',
  	isWap:tools.isWap(req.useragent)
   });
});

module.exports = router;
