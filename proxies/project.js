var projectProxy = module.exports;

var request = require('request');
var host = require('../config/settings').apiHost;
var responseUtil = require('../utils/response-util');

projectProxy.getProjectsCount = function (callback) {
  config = {
    'mothod': 'GET',
    'url'   : host + '/projects/count'
  };

  request(config, function (err, res, body) {
    callback(err, responseUtil.bindHTTPStatusCode(res, body));
  });
}