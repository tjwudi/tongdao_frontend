var welcome = module.exports;

welcome.init = function(io) {
  io.on('connection', function(socket){
    console.log('I got!');
  });
}