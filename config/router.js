var controllers = require('../controllers');

var router = module.exports;

router.routeFor = function(app){
  // Application Routing
  app.get('/', controllers.main.index);
  app.get('/welcome', controllers.main.welcome);

  app.get('/sign_in', controllers.user.sign_in);
  app.post('/sign_in', controllers.user.sign_in_verify);
}