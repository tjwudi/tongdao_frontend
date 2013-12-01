var userProxy = module.exports;

var request = require('request');
var host = require('../config/settings').apiHost;

userProxy.getUsersCount = function (callback) {
  config = {
    'mothod': 'GET',
    'url'   : host + '/users/count'
  };

  request(config, function (err, res, body) {
    callback(err, JSON.parse(body));
  });
}