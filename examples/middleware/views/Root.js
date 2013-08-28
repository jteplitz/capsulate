(function(){
  "use strict";
  
  var base = require("../../../main.js").View,


      RootView, _ptype;

  RootView = function(){};

  _ptype = RootView.prototype = base.getProto("std");
  _ptype._view_name = "RootView";
  _ptype._template  = "root.jade";

  module.exports = RootView;
}());
