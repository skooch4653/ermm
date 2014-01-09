/* @ author: Steve Young */

define(['express', '../router/router'], function(express, Router){

  var ApplicationController = function(){

    // initialize the server
    function initialize(){
      configureServer(3000);
    }

    // configure the server
    function configureServer(PORT){
      var server = express();
      server.get('/', function(request, response){
        response.send('Hello there!')
      }).listen(PORT);
      explainConfiguration(PORT);
    }

    // explain how the server was configured
    function explainConfiguration(PORT){
      console.log('---------------------------------------');
      console.log('Server has been configured and is now running at http://127.0.0.1:'
        + String(PORT)+'/');
      console.log('---------------------------------------');
      return this; // more chaining...
    }

    return {
      init: initialize
    }
  }

  return ApplicationController;
});