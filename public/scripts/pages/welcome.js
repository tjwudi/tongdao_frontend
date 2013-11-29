require(['/scripts/common.js'], function () {
  require(['jquery', 'async', 'es5-shim', 'es5-sham'], function ($, async) {
    // 初始化项目数量显示
    require(['ui/projects_counter'], function (ProjectsCounter) {
      ProjectsCounter.attachTo('#projects_counter');
    });

  });
});