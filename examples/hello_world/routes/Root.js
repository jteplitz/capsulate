(function(){
  "use strict";
  
  exports.handleGet = function(req, res, next){
    var params = {title: "Hello World"};

    req.controller.renderView(res, params);
  };
}());
