var responseUtil = module.exports;
var _ = require('underscore');

responseUtil.bindHTTPStatusCode = function(res, body) {
  return _.extend(JSON.parse(body), { HTTPStatusCode: res.statusCode });
}