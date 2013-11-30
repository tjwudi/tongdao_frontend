
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var router = require('./config/router');
var socketProvidersEntry = require('./socket_providers/lib/entry');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('c4dd0092c40a8724d9c45b28f82d5400'));
app.use(express.session({
	"secret": "612844acea900ee5855d9f399e07c0d9"
}));
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

router.routeFor(app);

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('TongDao.in middle end server running on port: ' + app.get('port'));
});
socketProvidersEntry.init(server);