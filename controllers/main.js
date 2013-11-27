var main = module.exports;

main.index = function(req, res){
  if (! req.session.user) {
    return res.redirect('/welcome');
  }
  res.end();
}

main.welcome = function(req, res){
  res.render('welcome.html');
}