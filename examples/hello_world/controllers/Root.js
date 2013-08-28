(function(){
  "use strict";

  var base = require("../../../main.js").Controller,
      ViewClass = require("../views/Root.js"),

      RootCtrl, _ptype;
  
  RootCtrl = function(){
    this.payload = {};
    this._view   = new ViewClass();
  };

  _ptype       = RootCtrl.prototype = base.getProto("std");
  _ptype._name = "Root";

  module.exports = RootCtrl;
}());
