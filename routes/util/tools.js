module.exports = {
	isWap( useragent ){
    var source = useragent.source;
    return source.match(/Android/i) || source.match(/iPhone|iPod/i)
	},
  formatDate( time, format ) {
    var dt = new Date( parseInt(time, 10) );
    var date = {
      "M+": dt.getMonth() + 1,
      "d+": dt.getDate(),
      "h+": dt.getHours(),
      "m+": dt.getMinutes(),
      "s+": dt.getSeconds(),
      "q+": Math.floor((dt.getMonth() + 3) / 3),
      "S+": dt.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (dt.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
      }
    }
    return format;
  }
}