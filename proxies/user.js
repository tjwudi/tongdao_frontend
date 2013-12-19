var userProxy = module.exports;

var request = require('request');
var host = require('../config/settings').apiHost;

userProxy.getUsersCount = function (callback) {
  config = {
    'method': 'GET',
    'url'   : host + '/users/count'
  };

  request(config, function (err, res, body) {
    callback(err, JSON.parse(body));
  });
}

userProxy.createSession = function (req, res, callback) {
  config = {
    'method': 'POST',
    'form'  : req.body,
    'url'   : host + '/sessions'
  };

  request(config, function(err, res, body) {
    callback(err, JSON.parse(body));
  });
}