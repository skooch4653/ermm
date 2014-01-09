/* @ author: Steve Young */

var requirejs = require('requirejs');

requirejs(['collections/app_controller'], function(ApplicationController){
  var SERVER = function(){
    var App = new ApplicationController();
    App.init();
  }();
});