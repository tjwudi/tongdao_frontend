var main = module.exports;

var proxies = require('../proxies');
var async = require('async');

main.index = function(req, res){
  // if (! req.session.user) {
  //   return res.redirect('/welcome');
  // }
  
  res.render('index.html');
}

main.welcome = function(req, res){
  if (!! req.session.user) {
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