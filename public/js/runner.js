/* @ author: Hilly */

require.config({
  //urlArgs: 'cb='+ Math.random(),
  paths : {
    'jasmine' : [
      'vendor/jasmine/jasmine'
    ],
    'jasmine-html' : [
      'vendor/jasmine/jasmine-html'
    ],
    "jquery" : [
      "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
      "vendor/jquery/jquery-1.10.2"
    ],
    "jquery-ui" : [
      "https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
      "vendor/jquery/jquery-ui-1.10.3.custom.min"
    ],
    "backbone" : [
      "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min",
      "vendor/backbone/backbone-1.1.0"
    ],
    "underscore" : [
      "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min",
      "vendor/underscore/underscore-1.5.2"
    ],
    "text" : ["vendor/require/text"]
  },
  shim : {
    'test': {
      deps : ['jasmine']
    },
    'jasmine': {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    'jquery-ui': {
      exports: '$',
      deps : ['jquery'],
    },
    'backbone': {
      deps: ['jquery', 'underscore', 'text'],
      exports : 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  }
});

require([
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
    'specs/models/lexicon',
    'specs/views/lexicon',
    'specs/collections/lexicon'
  ];










  $(function() {
    require(specs, function() {
      jasmineEnv.execute();
    });
  });
});