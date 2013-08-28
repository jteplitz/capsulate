(function(){
  "use strict";

  var Routes = {
    Root: require("./Root.js")
  };

  var Controllers = {
    Root: require("../controllers/Root.js")
  };

  // middleware options
  // schemas
  module.exports = [
    ["/", Routes.Root, Controllers.Root, 1, ["get"]]
  ];

}());
