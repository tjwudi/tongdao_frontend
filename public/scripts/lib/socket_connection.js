/* 
  连接WebSocket 并生成页面namespace入口点 
*/

define(function (require) {
  var io = require('socket.io');

  // 解析当前Path，提取namespace
  var interpolatedNamespace = window.location.pathname.replace(/\/.*\..*$/, '');

  // 去掉末尾的'/' （如当前namespace为'/'本身，则不去掉）
  if (interpolatedNamespace !== '/') {
    interpolatedNamespace = interpolatedNamespace.replace(/\/$/, '');
  }

  // 连接WebSocket，返回Socket Conection对象
  return io.connect('http://www.tongdao.in' + interpolatedNamespace);
});

