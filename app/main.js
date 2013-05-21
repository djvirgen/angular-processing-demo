require.config({
  paths: {
    angular:      'lib/angular/angular-1.1.4.min',
    Processing:   'lib/processing/processing-1.4.1.min'
  },
  baseUrl:      '/app',
  shim: {
    'angular': {'exports': 'angular'},
    'Processing': {'exports': 'Processing'}
  },
  priority: [
    'angular'
  ]
});

require(['angular', 'app'], function(angular, app) {
  "use strict";
  
  // Bootstrap the application
  var main = document.getElementById('main');
  var $main = angular.element(main);
  angular.bootstrap($main, [app['name']]);
  $main.addClass('ng-app');
});
