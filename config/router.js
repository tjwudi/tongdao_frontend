var controllers = require('../controllers');

var router = module.exports;

router.routeFor = function(app){
  // Application Routing

  // 一级页面
  app.get('/public_activities', controllers.users.needSignIn, controllers.main.publicActivities);
  app.get('/welcome', controllers.users.needNotSignIn, controllers.main.welcome);

  // 用户登陆、注册相关
  app.get('/sign_in', controllers.users.needNotSignIn, controllers.users.signIn);
  app.post('/sign_in', controllers.users.needNotSignIn, controllers.users.signInVerify);
  app.get('/sign_out', controllers.users.needSignIn, controllers.users.signOut);
  app.get('/forget_password', controllers.users.needNotSignIn, controllers.users.forgetPassword);
  app.get('/pre_register', controllers.users.needNotSignIn, controllers.users.preRegister);
  app.post('/pre_register', controllers.users.needNotSignIn, controllers.users.preRegisterExecute);
}