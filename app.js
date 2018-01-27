var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');


var index = require('./routes/index');
var article = require('./routes/article');
var test = require('./routes/test');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//useragent : {"isAuthoritative":true,"isMobile":false,"isTablet":false,"isiPad":false,"isiPod":false,"isiPhone":false,"isAndroid":false,"isBlackberry":false,"isOpera":false,"isIE":false,"isEdge":false,"isIECompatibilityMode":false,"isSafari":false,"isFirefox":false,"isWebkit":false,"isChrome":true,"isKonqueror":false,"isOmniWeb":false,"isSeaMonkey":false,"isFlock":false,"isAmaya":false,"isPhantomJS":false,"isEpiphany":false,"isDesktop":true,"isWindows":false,"isLinux":false,"isLinux64":false,"isMac":true,"isChromeOS":false,"isBada":false,"isSamsung":false,"isRaspberry":false,"isBot":false,"isCurl":false,"isAndroidTablet":false,"isWinJs":false,"isKindleFire":false,"isSilk":false,"isCaptive":false,"isSmartTV":false,"isUC":false,"isFacebook":false,"silkAccelerated":false,"browser":"Chrome","version":"63.0.3239.132","os":"OS X","platform":"Apple Mac","geoIp":{},"source":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"}
app.use(useragent.express());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/article', article);
app.use('/test', test);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {errorMsg:'服务异常!'};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
