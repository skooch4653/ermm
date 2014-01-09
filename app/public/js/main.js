/* @ author: Hilly */

require.config({
  paths : {
    "backbone": ["vendor/backbone/backbone-min"],
    "jasmine": ["vendor/jasmine/lib/jasmine-core/jasmine"],
    "jquery": ["vendor/jquery/jquery.min"],
    "less": ["vendor/less/dist/less-1.6.0.min"],
    "underscore": ["vendor/underscore/underscore-min"],

    /*////////////////////
          MODELS
    ////////////////////*/
    config : "models/config/config"

    /*////////////////////
           VIEWS
    ////////////////////*/

  },
  shim : {
    'main' : {
      deps : ['config']
    },
    'backbone' : {
      deps: ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    'underscore' : {
      exports: '_'
    }
  }
});


require([], function() {
  var DEFAULT_SCAFFOLD = function() {
    console.log('Hey!');
  }();
});