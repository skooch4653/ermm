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
      var app = express(),
        PORTNUMBER = 3000;

      http.createServer(app).listen(PORTNUMBER, function(){
        console.log('Server is listening on port 3000');
        configureServer(app, PORTNUMBER);
      });
    }

    // configure the server
    function configureServer(app, port){
      app.use(express.static(path.join(path.dirname(module.uri), 'public')));

      // routes, to be decoupled...
      app.get('../../public/main.html', function(request, response){
        response.send('Welcome to the app home page!');
      });

      app.get('/', function(){
        response.send('Hey!');
      });

      // explain!!
      explainConfiguration(port);
    }

    // explain how the server was configured
    function explainConfiguration(port){
      console.log('---------------------------------------');
      console.log('Server has been configured and is now running at http://127.0.0.1:'
        + String(port)+'/');
      console.log('---------------------------------------');
      return this; // more chaining...
    }

    return {
      init: initialize
    }
  }

  return ApplicationController;
});