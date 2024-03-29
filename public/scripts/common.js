requirejs.config({
  baseUrl: '/scripts',
  paths: {
    'jquery': ['components/jquery/jquery.min']
    ,'async': ['components/async/lib/async']
    ,'socketConnection': ['lib/socket_connection']
    ,'socket.io': ['http://cdn.staticfile.org/socket.io/0.9.16/socket.io.min'
        ,'components/socket.io/lib/socket.io']
  }
});