/* @ author: Steve Young */

define(['express'], function(express){

  var Router = function(){

    /*
     * implement promises for writing headers and parsing both requests
     * and responses
     *
    */

    var enableRoutes = function(server, _base) {
      server.configure(function(){});

      // GET homepage
      server.get('/', function(request, response){
         // to be filled by database
        response.render('home', {title: 'welcome to express'});
        talkAbout(request, response); // make a promise!
      });

      //! handling hashes
      server.get('/*/#:id', function(request, response){
        response.send(request.params.id + ' recognized as submitted hashtag modification.');
        talkAbout(request, response);
      });

      // GET help
      server.get('/help/:issue', function(request, response){
        response.send(request.params.issue + ' detected as issue.');
        talkAbout(request, response);
      });

      // GET chapters
      server.get('/chapter/[1-9]{1,4}/:node', function(request, response){
        response.send(request.params.node + ' is the current node.');
        talkAbout(request, response);
      });

      // POST chapters
      server.post('/chapter/[1-9]{1,4}/:page', function(request, response){
        response.send('page ' + request.params.page);
        talkAbout(request, response);
      });

    };

    var talkAbout = function(request, response){
      // url, setTimout, headers, httpVersion, statusCode, method, socket.bytesRead
      console.log('status: ' + request.statucCode);
      console.log('method: ' + request.method);
      console.log('url: ' + request.url);
      console.log('request params: ' + request.params);
      console.log('--\t');
    };

    return {
      enableRoutes: enableRoutes
    }
  };

  return Router;
});

/*
 *
 *

 var express = require('express')
, http = require('http');
var app = express();

app.configure(function(){ });

app.get(/^\/node?(?:\/(\d+)(?:\.\.(\d+))?)?/, function(req, res){
  console.log(req.params);
  res.send(req.params);
});

app.get('/content/*',function(req,res) {
  res.send(req.params);
});

app.get("/products/:id/:operation?", function(req,res) {
  console.log(req);
  res.send(req.params.operation + ' ' + req.params.id);
});

http.createServer(app).listen(3000);
console.log("Express server listening on port 3000");

*/