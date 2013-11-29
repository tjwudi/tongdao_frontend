$(document).ready(function () {
  if (! window.td) {
    window.td = {};
  }
  
  /* 
    连接WebSocket 并生成页面namespace入口点 
  */

  // 解析当前Path，提取namespace
  var interpolatedNamespace = window.location.pathname.replace(/\/.*\..*$/, '');

  // 去掉末尾的'/' （如当前namespace为'/'本身，则不去掉）
  if (interpolatedNamespace !== '/') {
    interpolatedNamespace = interpolatedNamespace.replace(/\/$/, '');
  }

  // 连接WebSocket
  window.td.provider = io.connect('http://localhost' + interpolatedNamespace);
});