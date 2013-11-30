var io = null;
var entry = module.exports;

entry.init = function (server) {
  if (! server) {
    throw new Error('Socket.io cannot be setup without the express instance');
  }

  io = require('socket.io').listen(server);

  // All providers' registers
  _register('/welcome');
}

// Provider register
var _register = function (namespace) {
  require(_path_of_provider(namespace)).init(io.of(namespace));
}

// Get the relative path to the provider file
var _path_of_provider = function (path) {
  return '../namespace' + path;
}