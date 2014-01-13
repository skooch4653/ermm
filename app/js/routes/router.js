/* @ author: Steve Young */

define([], function(){

  var Router = function(){

    var enableRoutes = function(server, _base) {
      console.log(_base + ' has been passed.');

      server.get('../../public/main.html', function(request, response){
        response.send('Welcome to the app home page!');
      });

      server.get('/', function(){
        response.send('Hey!');
      });

      server.get('/', function(request, response){
        var pathname = _base + request.url;
        console.log('base: ' + _base);
        console.log('pathname' + pathname);
      });
    };

    return {
      enableRoutes: enableRoutes
    }
  };

  return Router;
});