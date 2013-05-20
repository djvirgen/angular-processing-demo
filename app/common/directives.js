define(['angular', 'Processing'], function(angular, Processing) {
  "use strict";

  var directives = angular.module('myapp.directives', []);
  
  directives.directive('processing', function() {
    return function(scope, iElement, iAttrs) {
      scope.$sketch = new Processing(iElement[0], scope[iAttrs.processing]);
    };
  });

  directives.directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attr, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          return parseInt(viewValue);
        });
      }
    };
  });

  return directives;
});
