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
    });

    //! handling hashes
    server.get('/*/#:id', function(request, response){
      response.send(request.params.id + ' recognized as submitted hashtag modification.');
      writeAbout(request, response);
    });

    // GET help
    server.get('/help/:issue', function(request, response){
      response.send(request.params.issue + ' detected as issue.');
      writeAbout(request, response);
    });

    // GET chapters
    server.get('/chapter/[1-9]{1,4}/:node', function(request, response){
      response.send(request.params.node + ' is the current node.');
      writeAbout(request, response);
    });

    // POST chapters
    server.post('/chapter/[1-9]{1,4}/:page', function(request, response){
      response.send('page ' + request.params.page);
      writeAbout(request, response);
    });

    /* very rough, manual file serve. needs fix */
    // handling templates calling for css
    server.get('/css/*', function(request, response){
      if (request.url.indexOf('.css') || request.url.indexOf('.less') !== -1){ // does the request url contain a *.css filename
        fs.readFile(path.normalize(__dirname + '/../public/' + request.url), function (err, data) {
          if (err) console.log(err);
          response.writeHead(200, {'Content-Type': 'text/css'});
          response.write(data);
          response.end();
        });
      }
    });

    server.get('/js/*', function(request, response){
      if (request.url.indexOf('.js') !== -1){ // does the request url contain a *.js filename
        fs.readFile(path.normalize(__dirname + '/../public/' + request.url), function (err, data) {
          if (err) console.log(err);
          response.writeHead(200, {'Content-Type': 'text/javascript'});
          response.write(data);
          writeAbout(request, response);
          response.end();
        });
      }
    });


  };

  var fetchPath = function(request, fileType){
    // brilliant code
  };

  var writeAbout = function(request, response){
    console.log(request.method + ' '
      + response.statusCode + ' '
      + request.url);
  };

  // public methods
  return {
    enableRoutes: enableRoutes
  }
};