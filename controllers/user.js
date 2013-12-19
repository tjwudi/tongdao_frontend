var userRouter = module.exports;

var proxies = require('../proxies');
var async = require('async');

userRouter.sign_in = function(req, res) {
  res.render('sign_in.html');
}

userRouter.sign_in_verify = function(req, res) {
  if (!! req.session.user) {
    return res.redirect('/');
  }
  console.log(req.body);

  proxies.user.createSession(req, res, function(err, data){
    // TODO
  });
}