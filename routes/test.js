var express = require('express');
var router = express.Router();

var articleModel = require('./model/article');
var commentModel = require('./model/comment');
var catModel = require('./model/cat');

var tools = require('./util/tools.js');
var config = require('../config');

var md5=require("md5");  
const ADMIN_KEY = md5(JSON.stringify(config.admin));


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
  //console.log(req);
  console.log(ADMIN_KEY);
  if(req.cookies.loginUser===ADMIN_KEY){
    catModel.get().then(cats=>{
      articleModel.get().then(articles=>{
        res.render('test',{
          articles:articles,
          cats:cats,
          isWap:tools.isWap(req.useragent)
        });
      }).catch(err=>{
        next( err );
      });

    }).catch(err=>{
      next( err );
    })

  } else {
    res.render('test',{
      loginView: 1,
      isWap:tools.isWap(req.useragent)
    });
  }
});

router.post('/edit',function( req, res, next ) {
  let {title,cid,img,content,id} = req.body;
  let errorMsg = '';
  if( !title || title.length == 0 ){
    errorMsg = '文章标题不能为空！';
  } else if( !img || img.length == 0 ) {
    errorMsg = '封面图不能为空！';
  } else if( !content || content.length == 0 ) {
    errorMsg = '文章内容不能为空！';
  }
  if( errorMsg ){
    res.end(JSON.stringify({
      code:201,
      msg:errorMsg
    }));
    return;
  }
  if(req.cookies.loginUser!==ADMIN_KEY){
    res.end(JSON.stringify({
      code:500,
      msg:'未登录'
    }));
    return;
  }
  if( id ) {
    //articleModel.add({title,cid,img,content})
  } else {
    articleModel.add({title,cid,img,content}).then(dt=>{
      if( dt.code == 200 ){
        res.end(JSON.stringify({
          code :  200,
          id:dt.id,
          msg:'成功'
        }));
      } else {
        res.end(JSON.stringify({
          code:202,
          desc : JSON.stringify(dt),
          msg:'文章添加失败!'
        }))
      }
    })
  }
})

router.post('/remove',function( req, res, next ) {
  let id = req.body.id;
  if(req.cookies.loginUser!==ADMIN_KEY){
    res.end(JSON.stringify({
      code:500,
      msg:'未登录'
    }));
    return;
  }
  articleModel.remove(id,'id').then(dt=>{
    if( dt.code == 200 ){
      res.end(JSON.stringify({
        code:200,
        num:dt.num
      }))
    } else {
      res.end(JSON.stringify({
        code:201,
        msg:'删除失败'
      }));
    }
  }).catch(err=>{
    res.end(JSON.stringify({
      code:-500,
      desc:JSON.stringify( err ),
      msg : '删除失败!'
    }))
  })
})

/*
  登录
*/
router.post('/', function(req, res, next) {
  //res.query get参数
  //res.body post参数
  console.log([req.body]);
  if( req.body.userName == config.admin.userName && req.body.passWord == config.admin.passWord ) {
    console.log( '管理员登录成功' );
    res.cookie('loginUser', ADMIN_KEY,{
      maxAge:15*24*3600
    });
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
