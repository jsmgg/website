var express = require('express');
var router = express.Router();

var articleModel = require('./model/article');
var commentModel = require('./model/comment');

var tools = require('./util/tools.js');



/* GET users listing. */
router.get('/', function(req, res, next) {
  articleModel.get().then(articles=>{
  	var msg = '';
    articles.forEach(item=>{
      msg+='<br/>'+item.title;
    })
  	commentModel.getNum('2','aid').then(num=>{
  		msg+='<br/>'+num;
  		commentModel.get(2,'aid',2,2).then(rows=>{
  			rows.forEach(( item )=>{
  		    msg+='<br/>'+item.id;
  			})
		    res.render('article',{
		      msg :msg,
          isWap:tools.isWap(req.useragent)
		    });
  		}).catch(err=>{
        next(err);
      });


  	}).catch(err=>{
  		next( err )
  	})

  }).catch(err=>{
    next(err)
  })

});

module.exports = router;
