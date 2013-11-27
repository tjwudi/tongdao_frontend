(function () {
// Parse the current url path without a filename
// It is the namespace of the socket
var namespace = window.location.pathname.replace(/\/.*\..*$/, '');

// strip the last slash except for root '/'
if (namespace !== '/') {
  namespace = namespace.replace(/\/$/, '');
}

// Connect to socket.io with namespace
window.provider = io.connect('http://localhost' + namespace);
window.provider.namespace = namespace;

// Log the namespace for debugging
console.log('Interpolated namespace: ' + namespace);
})();