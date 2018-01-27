var express = require('express');
var router = express.Router();

var articleModel = require('./model/article');
var commentModel = require('./model/comment');

var tools = require('./util/tools.js');
var config = require('../config');



/*
res.cookie(name, value [, options]);
domain：cookie在什么域名下有效，类型为String,。默认为网站域名
expires: cookie过期时间，类型为Date。如果没有设置或者设置为0，那么该cookie只在这个这个session有效，即关闭浏览器后，这个cookie会被浏览器删除。
httpOnly: 只能被web server访问，类型Boolean。
maxAge: 实现expires的功能，设置cookie过期的时间，类型为String，指明从现在开始，多少毫秒以后，cookie到期。
path: cookie在什么路径下有效，默认为'/'，类型为String
secure：只能被HTTPS使用，类型Boolean，默认为false
signed:使用签名，类型Boolean，默认为false。`express会使用req.secret来完成签名，需要cookie-parser配合使用`

res.cookie('name', 'koby', { domain: '.example.com', path: '/admin', secure: true });
*/
router.get('/', function(req, res, next) {
  console.log(req);
  if(req.cookies.loginUser){
    res.render('test',{
      articles :'',
      isWap:tools.isWap(req.useragent)
    });
  } else {
    res.render('test',{
      loginView: 1,
      isWap:tools.isWap(req.useragent)
    });
  }


/*  articleModel.get().then(articles=>{
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
  })*/

});


router.post('/', function(req, res, next) {
  //res.query get参数
  //res.body post参数
  console.log([req.body]);
  if( req.body.userName == config.admin.userName && req.body.passWord == config.admin.passWord ) {
    console.log( '管理员登录成功' );
    res.redirect('/test');
  } else {
    res.render('test',{
      loginView: 1,
      errorMsg:'账号或密码错误！',
      isWap:tools.isWap(req.useragent)
    });
  }

});




module.exports = router;
