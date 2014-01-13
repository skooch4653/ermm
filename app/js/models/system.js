/* @ author: Steve Young */

define(['child_process'], function(childProcess){

  // keeping track of custom system wide commands to be interpreted by StandardIO
  var SYSTEM = function(){

    var run = function(){
      //console.log('OK');
    };

    return {
      run: run
    }
  };

  return SYSTEM;
});