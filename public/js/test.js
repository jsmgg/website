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
  ajax(url,fn,data,type){
    $.ajax({
      url:url,
      data:data,
      type:type||'post',
      dataType:'json',
      success( res ){
        console.log(res);
        fn( res );
      },
      error(){
        fn({code:-500,msg:'请求失败'})
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
  },
  js_add(){
    let cid = $('select[name=cid]').val();
    let title = $.trim($('input[name=title]').val());
    let content = $.trim($('textarea[name=content]').val());
    let img = $.trim($('input[name=img]').val());
    if( title.length == 0 ){
      return alert( '文章标题不能为空！' );
    } else if( img.length == 0) {
      return alert( '文章封面图不能为空！' );
    } else if( content.length == 0 ) {
      return alert('文章内容不能为空!')
    }
    if(this.js_add.busy) return;
    this.js_add.busy = true;
    this.ajax('/test/edit',function( res ){
      alert(res.msg);
      self.js_add.busy = false;
    },{cid,title,content,img});
  }
}
self.init();
})($);