'use strict';

(function () {
  var tplObj = new jSmart("<div>\n\t{%if $test%}\n\ttest\n\t{%else%}\n\tnotest\n\t{%/if%}\n</div>");

  var self = {
    init: function init() {
      console.log(tplObj.fetch({ test: 1 }));
    }
  };
  self.init();
})();