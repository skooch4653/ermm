/* @ author: Steve Young */

var // dependencies
  http = require('http'),
  express = require('express'),
  exphbs = require('../'), // 'ermm' directory
  Router = require('./routes/router');

module.exports = function(){
  var _base = './public'

  // initialize the server
  var initialize = function(uri){
    var server = express(),
      port = 3000;

    http.createServer(server).listen(port, function(){
      configureServer(server, _base, port, {
        mode: 'development',
        standardIO: false,
        memoryUsage: true
      });
    });
  };

  // configure the server
  var configureServer = function(server, _base, port, settings){
    console.log('configuring');
    var router = new Router();

    //! path.dirname(module.uri) used instead of __dirname due to requirejs known compat. ticket
    // var dirname = path.dirname(module.uri);
    server.set('views', './views');
    server.set('view engine', 'handlebars');
    server.engine('handlebars', exphbs({defaultLayout: 'main'}));



    router.enableRoutes(server, _base);
    //server.set('view engine', 'handlebars');
    server.use(express.json());
    server.use(express.urlencoded());
    server.use(express.methodOverride());


    if (settings) {
      for (parameter in settings) {
        if (typeof settings[parameter] === 'boolean') {
          var value = settings[parameter];
          switch (parameter) {
            case 'standardIO':
              enableStandardInput(value);
              break;
            case 'memoryUsage':
              enableMemoryUsage(value);
              break;
            case 'mode':
              setApplicationMode(value);
              break;
            default:
              console.error('Settings hash fall-through detected!');
          }
        }
      }
    }
    explainConfiguration(port, settings);
  };

  // explain how the server was configured
  var explainConfiguration = function(port, settings){
    // pretties explaining how the server has been configured
    console.log('\n---------------------------------------*');
    console.log('Server has been configured and is now running at http://127.0.0.1:'
      + String(port)+'/');

    // require/node global reads
    console.log(process.execPath);
    console.log('node ' + process.version);
    console.log(process.platform);

    if (settings) {
      console.log('\noptional settings ~~~~~~~~~~~~~~~~~~~~~');
      for (parameter in settings) {
        var setting = settings[parameter];
        switch (parameter) {
          case 'standardIO':
            console.log('stdio streams enabled: '
              + settings.standardIO);
            break;
          case 'memoryUsage':
            console.log('memory usage: '
              + JSON.stringify(process.memoryUsage(), null
                , 4).replace(/[",{}\n]/g,'')); // (/\"|\,|\{|\}|\n/g,''));
            break;
          case 'mode':
            console.log('mode: ' + settings.mode);
            break;
          default:
            console.error('Settings hash fall-through detected!');
        }
      }
    } else {
      console.log('No optional configuration settings detected.');
    }
    console.log('---------------------------------------*\n');
    return this; // more chaining...
  };

  // enable Standard IO stream for typing in console after server boot
  var enableStandardInput = function(enabled){
    if (enabled) {
      process.stdin.resume();
      process.stdin.on('data', function (chunk) {
        process.stdout.write('data: ' + chunk);
      });
    }
  };

  // enable Memory Usage printout
  var enableMemoryUsage = function(enabled){
    if (enabled) {
      process.memoryUsage();
    }
  };

  var setApplicationMode = function(enabled){
    this.configure('test', function(){
      app.use(express.errorHandler());
    });
  };

  // return an object of psueod-public data fields
  return {
    init: initialize
  }
}