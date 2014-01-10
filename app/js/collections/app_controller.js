/* @ author: Steve Young */

define([
    'http',
    'path',
    'module',
    'express',
    '../routes/router'
    ], function(http, path, module, express, Router){

  var ApplicationController = function(){

    // initialize the server
    function initialize(){
      var server = express(),
        port = 3000;

      http.createServer(server).listen(port, function(){
        // console.log('Server is listening on port 3000.');
        configureServer(server, port, {
          standardIO: true
        });
      });
    }

    // configure the server
    var configureServer = function(server, port, settings){
      var router = new Router();

      //! path.dirname(module.uri) used instead of __dirname due to requirejs known compat. ticket
      server.use(express.static(path.join(path.dirname(module.uri), 'public')));
      router.enableRoutes(server);

      if (settings) {
        if (settings.standardIO && typeof settings.standardIO === 'boolean') {
          enableStandardInput(settings.standardIO);
        }
      }

      settings ? explainConfiguration(port, settings): explainConfiguration(port);
    }

    // explain how the server was configured
    var explainConfiguration = function(port, settings){
      // pretties explaining how the server has been configured
      console.log('\n---------------------------------------');
      console.log('Server has been configured and is now running at http://127.0.0.1:'
        + String(port)+'/');

      // require/node global reads
      console.log(process.execPath);
      console.log('node ' + process.version);
      console.log(process.platform);

      if (settings) {
        console.log('\noptional settings ~~~~~~~~~~~~~~~~~~~~~');
        console.log('stdio streams enabled = ' + settings.standardIO);
      } else {
        console.log('No optional configuration settings detected.');
      }
      console.log('---------------------------------------');
      return this; // more chaining...
    }

    var enableStandardInput = function(enabled){
      if (enabled) {
        process.stdin.resume();
        process.stdin.on('data', function (chunk) {
          process.stdout.write('data: ' + chunk);
        });
      }
    }

    return {
      init: initialize
    }
  }

  return ApplicationController;
});