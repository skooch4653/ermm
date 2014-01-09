/* @ author: Hilly */
var requirejs = require('requirejs');

requirejs.config({
  //urlArgs: 'cb='+ Math.random(),
  paths : {
    'jasmine' : ['../vendor/jasmine/lib/jasmine-core/jasmine'],
    'jasmine-html' : ['../vendor/jasmine/lib/jasmine-core/jasmine-html'],
    "backbone" : ["../vendor/backbone/backbone-1.1.0"],
    "underscore" : ["../vendor/underscore/underscore-1.5.2"],
  }
});

requirejs([
  'underscore',
  'jquery',
  'jasmine-html'
], function(_, $, jasmine) {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;
  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);
  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  /* add all specs here for testing! */
  var specs = [
    'models/lexicon',
    'views/lexicon',
    'collections/lexicon'
  ];

  $(function() {
    require(specs, function() {
      jasmineEnv.execute();
    });
  });
});