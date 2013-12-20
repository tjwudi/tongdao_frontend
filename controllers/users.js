var usersRouter = module.exports;

var proxies = require('../proxies');
var async = require('async');
var errors = require('../config/errors');

usersRouter.signIn = function(req, res, next) {
  res.render('users/sign_in.html');
}

usersRouter.signInVerify = function(req, res, next) {
  if (!! req.session.token) {
    return res.redirect('/');
  }
  async.parallel([
    proxies.user.createSession.bind({form_data: req.body})
    ], 
    function(err, results){
      var data = results[0];
      if (data.HTTPStatusCode == 500) {
        // 所有登陆错误都使用邮箱或密码错误的提示，故使用HTTP Status Code 500来判断错误
        return res.redirect('/sign_in?' + errors.urlSuffix(data.err_code));
      } 

      req.session.token = data.token;
      req.session.uid = data.id;
      res.redirect('/');
  });
}

usersRouter.forgetPassword = function(req, res, next) {
  res.render('users/forget_password.html');
}

usersRouter.preRegister = function(req, res, next) {
  res.render('users/pre_register.html');
}

usersRouter.preRegisterExecute = function(req, res, next) {
  res.redirect('/pre_register');
}

usersRouter.signOut = function(req, res, next) {
  req.session = null; // To clear session, simply set it to null.
  res.redirect('/welcome');
}

// 检查用户是否登陆，若没有登陆，则跳转到欢迎页
usersRouter.needSignIn = function(req, res, next) {
  if (! req.session.token) {
    return res.redirect('/welcome');
  }
  next();
}

// 检查用户是否登陆，若已经登陆，则跳转到首页
usersRouter.needNotSignIn = function(req, res, next) { 
  if (!! req.session.token) {
    return res.redirect('/');
  }
  next();
}