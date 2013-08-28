(function(){
  "use strict";

  var Routes = {
    Root: require("./Root.js")
  };

  var Controllers = {
    Root: require("../controllers/Root.js")
  };

  module.exports = [
    ["/", Routes.Root, Controllers.Root, ["get"]]
  ];

}());
