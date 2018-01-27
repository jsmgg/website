(function(){
var tplObj = new jSmart(__inline('../tpl/test.tpl'));

let self = {
	init(){
    console.log(tplObj.fetch({test:1}));
  }
}
self.init();

})();