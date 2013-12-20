var userProxy = module.exports;

var request = require('request');
var host = require('../config/settings').apiHost;
var responseUtil = require('../utils/response-util');

userProxy.getUsersCount = function (callback) {
  config = {
    'method': 'GET',
    'url'   : host + '/users/count'
  };

  request(config, function (err, res, body) {
    callback(err, responseUtil.bindHTTPStatusCode(res, body));
  });
}

userProxy.createSession = function (callback) {
  config = {
    'method': 'POST',
    'form'  : this.form_data,
    'url'   : host + '/sessions'
  };

  request(config, function(err, res, body) {
    callback(err, responseUtil.bindHTTPStatusCode(res, body));
  });
}