define(['components/flight/lib/component', 'socketConnection'], function(defineComponent, socket){
  var projectsCounter = function () {
    this.refreshData = function () {
      var $node = this.$node;

      socket.on('connect', function () {
        socket.emit('data_wanted', {
          action: 'projects/count'
        });
        socket.on('data_got', function(data) {
          if (data.action === 'projects/count') {
            $node.html(data.count);
          }
        });
      });
    }

    this.after('initialize', function () {
      this.refreshData();
    });
  }

  return defineComponent(projectsCounter);
});