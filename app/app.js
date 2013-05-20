define(['angular', 'modules/demo/index', 'common/directives'], function(angular) {
  "use strict";
  
  var myapp = angular.module('myapp', ['myapp.modules.demo', 'myapp.directives']);

  myapp.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });

  return myapp;
});
