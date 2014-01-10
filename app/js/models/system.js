/* @ author: Steve Young */

define(['child_process'], function(childProcess){

  // keeping track of custom system wide commands to be interpreted by StandardIO
  var SYSTEM = function(){

    var run = function(){
      var spawn = childProcess.spawn;
      var pwd = spawn('pwd');

      pwd.stdout.on('data', function(data){
        console.log('pwd: ' + data);
      });

      // pwd.stderr.on('data', function(data){});

      // pwd.on('exit', function(data){});

    };

    return {
      run: run
    }
  };

  return SYSTEM;
});