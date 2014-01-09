/* @ author: Steve Young */

define([
    'http',
    'https',
    'express',
    '../routes/router'
    ], function(http, https, express, Router){

  var ApplicationController = function(){

    // initialize the server
    function initialize(){
      var server = express(),
        PORTNUMBER = 3000;
      server.listen(PORTNUMBER);
      configureServer(server, PORTNUMBER);
    }

    // configure the server
    function configureServer(server, port){
      server.get('/', function(request, response){
        response.send('Hello there!')
      });
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