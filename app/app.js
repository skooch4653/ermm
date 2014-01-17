/* @ author: Steve Young */

var requirejs = require('requirejs');

requirejs([
  'path',
  'module',
  'js/collections/app_controller'
  ], function(path, module, ApplicationController){
  var CHAPTER = function(){
    var App = new ApplicationController();
    App.init();
  }();
});