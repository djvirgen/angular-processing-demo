define(['angular'], function(angular) {
  "use strict";

  var demo = angular.module('myapp.modules.demo', []);

  demo.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'DemoController',
      templateUrl: '/app/modules/demo/templates/demo.html'
    });
  }]);

  demo.controller('DemoController', function($scope) {
    // Position
    $scope.left = 200;
    $scope.top = 150;
    $scope.speed = 65;

    // Size
    $scope.width = 50;
    $scope.height = 50;

    // Color
    $scope.red = 75;
    $scope.green = 120;
    $scope.blue = 180;

    $scope.move = function($sketch) {
      $scope.left = $sketch.mouseX;
      $scope.top = $sketch.mouseY;
    };

    $scope.center = function() {
      $scope.left = 200;
      $scope.top = 150;
    };

    $scope.randomPosition = function() {
      $scope.left = Math.round(Math.random() * 400);
      $scope.top = Math.round(Math.random() * 300);
    };

    $scope.randomColor = function() {
      $scope.red = Math.round(Math.random() * 255);
      $scope.green = Math.round(Math.random() * 255);
      $scope.blue = Math.round(Math.random() * 255);
    };

    $scope.colorRed = function() {
      $scope.red = 255;
      $scope.green = 0;
      $scope.blue = 0;
    };

    $scope.colorGreen = function() {
      $scope.red = 0;
      $scope.green = 255;
      $scope.blue = 0;
    };

    $scope.colorBlue = function() {
      $scope.red = 0;
      $scope.green = 0;
      $scope.blue = 255;
    };

    // Processing sketch definition
    $scope.sketch = function(sketch) {
      var X = $scope.left,
        Y = $scope.top,
        red = $scope.red,
        green = $scope.green,
        blue = $scope.blue;

      sketch.setup = function() {
        sketch.size(400, 300);
        sketch.frameRate(60);
      };

      sketch.draw = function() {
        sketch.background(120);
        sketch.strokeWeight(5);

        X += ($scope.left - X) / (100 - $scope.speed);
        Y += ($scope.top - Y) / (100 - $scope.speed);
        red += ($scope.red - red) / 20;
        green += ($scope.green - green) / 20;
        blue += ($scope.blue - blue) / 20;

        sketch.stroke(255);
        sketch.fill(red, green, blue);
        sketch.ellipse(X, Y, $scope.width, $scope.height);
      };
    };
  });

  return demo;
});
