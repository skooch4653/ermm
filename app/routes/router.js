/* @ author: Steve Young */

var //dependencies
  express = require('express'),
  fs = require('fs');

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

    /*
    // handling templates calling for css
    if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'
      fs.readFile(__dirname + '/public/css/style.css', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });
    }
    */
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