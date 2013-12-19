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

  async.parallel([
    proxies.user.createSession.bind({form_data: req.body})
    ], 
    function(err, results){
      var data = results[0];
      if (!! data.err_code && data.err_code == 'LOGIN_FAILED') {
        return res.redirect('/sign_in?retry=true');
      }

      req.session.token = data.token;
      req.session.uid = data.id;
      res.redirect('/');
  });
}