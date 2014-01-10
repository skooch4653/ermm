/* @ author: Steve Young */

define([], function(){

  var Router = function(){

    var enableRoutes = function(server) {
      server.get('../../public/main.html', function(request, response){
        response.send('Welcome to the app home page!');
      });

      server.get('/', function(){
        response.send('Hey!');
      });
    }

    var routes = {
      home: '/'
    }

    return {
      enableRoutes: enableRoutes
    }
  };

  return Router;
});