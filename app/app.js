/* @ author: Steve Young */

var //dependencies
  path = require('path'),
  module = require('module'),
  ApplicationController = require('./controller');

var CHAPTER = function(controller){
  var App = ApplicationController();
  App.init(__dirname);
}();