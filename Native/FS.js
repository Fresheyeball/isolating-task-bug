Elm.Native = Elm.Native || {};
Elm.Native.FS = Elm.Native.FS || {};

Elm.Native.FS.make = function (localRuntime) {
  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.FS = localRuntime.Native.FS || {};

  const Task = Elm.Native.Task.make(localRuntime);
  const Utils = Elm.Native.Utils.make(localRuntime);
  const fs = require("fs");

  const writeFileNotOK = F2(function (path, data) {
      return Task.asyncFunction(function (callback) {
        fs.writeFileSync(path, data);
        return callback(Task.succeed(Utils.Tuple0));
      });
    });

  const writeFileOK = F2(function (path, data) {
      fs.writeFileSync(path, data);
      return Task.succeed(Utils.Tuple0);
    });

  const readFileAndLog = function (path) {
      return Task.asyncFunction(function (callback){
        fs.readFile(path, function(err, data){
          if(err){
            throw err;
          }else{
            console.log("data: ", data);
          }
          callback(Task.succeed(Utils.Tuple0));
        });
      });
    };

  return localRuntime.Native.FS.values = {
    writeFileNotOK : writeFileNotOK,
    writeFileOK    : writeFileOK,
    readFileAndLog : readFileAndLog
  };
};
