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

  proxies.user.createSession(req, res, function(err, data){
    if (!! data.err_code && data.err_code == 'LOGIN_FAILED') {
      return res.redirect('/sign_in?retry=true');
    }

    req.session.token = data.token;
    res.redirect('/');
  });
}