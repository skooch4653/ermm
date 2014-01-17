/* @ author: Steve Young */

var requirejs = require('requirejs');

requirejs([
  'path',
  'module',
  './controller'
  ], function(path, module, ApplicationController){
  var CHAPTER = function(){
    var App = new ApplicationController();
    App.init();
  }();
});