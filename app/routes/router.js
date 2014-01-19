/* @ author: Steve Young */

var //dependencies
  express = require('express'),
  fs = require('fs'),
  path = require('path');

module.exports = function(){

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

    /* very rough, manual route. needs fix */
    // handling templates calling for css
    server.get('/css/*', function(request, response){
      if(request.url.indexOf('.css') != -1){ // does the request url contain a *.css filename
        fs.readFile(path.normalize(__dirname + '/../public/css/style.min.css'), function (err, data) {
          if (err) console.log(err);
          response.writeHead(200, {'Content-Type': 'text/css'});
          response.write(data);
          response.end();
        });
      }
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

  // public methods
  return {
    enableRoutes: enableRoutes
  }
};