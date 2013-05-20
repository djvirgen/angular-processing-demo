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
  var html = document.getElementsByTagName('html')[0];
  var $html = angular.element(html);
  angular.bootstrap($html, [app['name']]);
  $html.addClass('ng-app');
});
