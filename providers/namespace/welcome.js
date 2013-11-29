var welcome = module.exports;
var request = require('request');
var _ = require('underscore');

welcome.init = function(io) {
  io.on('connection', function(socket) {
    socket.on('data_wanted', function (req) {
      switch (req.action) {
        // 获取所有项目的个数，后面要独立出来做成API对接模块。
        case 'projects/count':
          config = {
            method: 'GET',
            url: 'http://apis.tongdao.in/projects/count'
          };

          request(config, function (err, res, body) {
            if (err) {
              return console.log(err);
            }

            var result = JSON.parse(body);
            socket.emit('data_got', _.extend(result, req));
          });
          break;

        default: 
          break;
      }
    }); // data_wanted
  });
}