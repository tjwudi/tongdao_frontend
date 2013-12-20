var mainRouter = module.exports;

var proxies = require('../proxies');
var async = require('async');

mainRouter.publicActivities = function(req, res, next) {
  res.render('users/public_activities.html');
}

mainRouter.welcome = function(req, res, next){
  async.parallel([  // 获取欢迎页需要的一些信息
    proxies.project.getProjectsCount,
    proxies.user.getUsersCount
  ], 
  function (err, results) {
    console.log(arguments);
    data = {
      'count_of_projects': results[0],
      'count_of_users': results[1]
    }
    res.render('welcome.html', data);
  });
}