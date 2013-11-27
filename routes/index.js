router = module.exports;

router.routeFor = function(app){
  // Application Routing
  app.get('/', function(req, res){
    if (req.session.user) {
      res.end();
    } else {
      res.render('welcome.html');
    }
  });
}