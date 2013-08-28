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

  _ptype.prePrep = function(data, cb){
    data.msg = this.schemas.msg;
    cb();
  };

  module.exports = RootCtrl;
}());
