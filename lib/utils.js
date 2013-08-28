(function(){
  "use strict";

  var functions = {};

  functions.capitalize = function (string){
    string    = string.split("");
    string[0] = string[0].toUpperCase();
    return string.join("");
  };

  module.exports = functions;
}());
