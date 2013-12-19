var mainRouter = module.exports;

var proxies = require('../proxies');
var async = require('async');

mainRouter.index = function(req, res) {
  if (! req.session.token) {
    return res.redirect('/welcome');
  }
  
  res.render('index.html');
}

mainRouter.welcome = function(req, res){
  if (!! req.session.token) {
    return res.redirect('/');
  }

  async.parallel([
    proxies.project.getProjectsCount,
    proxies.user.getUsersCount
  ],
  function (err, results) {
    data = {
      'count_of_projects': results[0],
      'count_of_users': results[1]
    }
    res.render('welcome.html', data);
  });
}