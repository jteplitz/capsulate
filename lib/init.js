(function(){
  "use strict";

  var _     = require("underscore"),
      utils = require("./utils.js"),

      // functions
      handler;

  module.exports = function(app, routes, middleware){
    if (_.isUndefined(middleware) || _.isNull(middleware)){ middleware = [] }

    _.each(routes, function(route){
      var methods = route[3 + middleware.legth] || ["get"];

      _.forEach(methods, function(method){
        var params = [];

        for (var i = 0; i < middleware.length; i++){
          if (route[3 + i]){
            params.push(middleware[i]);
          }
        }

        var fn = "handle" + utils.capitalize(method);
        console.log("adding", fn, route[1]);

        app[method](route[0], params, handler(route[1][fn], route[2]));
      });
    });
  };

  /*
    Returns the express handler for this route
  */
  handler = function(fn, Controller){
    return function(req, res, next){
      req.controller = new Controller();
      fn(req, res, next);
    };
  };
}());
