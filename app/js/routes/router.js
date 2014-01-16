/* @ author: Steve Young */

define(['express'], function(express){

  var Router = function(){

    var enableRoutes = function(server, _base) {
      // home
      server.get('/', function(request, response){
        server.use(express.static(_base));
        talkAbout(request, response)
      });



    };

    var talkAbout = function(request, response){
      console.log('request url: ' + request.url);
      console.log('vanilla request' + JSON.stringify(request));
      console.log('vanilla response' + JSON.stringify(response));
    };

    return {
      enableRoutes: enableRoutes
    }
  };

  return Router;
});