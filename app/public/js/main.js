/* @ author: Hilly */

require.config({
  paths : {
    "backbone": ["vendor/backbone/backbone-min"],
    "jasmine": ["vendor/jasmine/lib/jasmine-core/jasmine"],
    "jquery": ["vendor/jquery/jquery.min"],
    "less": ["vendor/less/dist/less-1.6.0.min"],
    "underscore": ["vendor/underscore/underscore-min"]
  },
  shim : {
    'backbone' : {
      deps: ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    'underscore' : {
      exports: '_'
    }
  }
});


require(['less'], function(less) {
  var ERMM = function() {
    less.watch()
    console.log('Welcome to ERMM!');
  }();
});