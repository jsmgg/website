(function($){
let self = {
  init(){
    this.initEvent();
  },
  initEvent(){
    $('body').on('click','[js_handle]',function( e ){
      let obj = $(this), fn = obj.attr( 'js_handle' );
      if( typeof self[fn] == 'function') {
        self[fn](obj,e);
      }

    })
  },
  js_submit(){
    var userName = $.trim($('[name=userName]').val());
    var passWord = $('[name=passWord]').val();
    if( userName.length ==0 || passWord.length == 0 ){
      return alert( '账号密码不能为空！' );
    }
    $('form')[0].submit();
  }
}
self.init();
})($);