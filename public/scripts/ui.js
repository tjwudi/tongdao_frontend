$(document).ready(function () {
  // namespace filter
  var namespace = function (targetNamespace) {
    var result = {
      enter: function (callback) {}
    }
    if (window.provider.namespace === targetNamespace) {
      result.enter = function (callback) {
        callback();
      }
    } 

    return result;
  }

  // provider
  provider = window.provider;

  // 欢迎页
  namespace('/welcome').enter(function () {
    provider.on('connect', function() {
      console.log('Connected!');
    });
  });

});