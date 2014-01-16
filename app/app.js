/* @ author: Steve Young */

var requirejs = require('requirejs');

requirejs([
  'path',
  'module',
  'js/collections/app_controller'
  ], function(path, module, ApplicationController){
  var ERMM = function(){
    var App = new ApplicationController();
    App.init();
  }();
});