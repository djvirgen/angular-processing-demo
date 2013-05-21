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

    $scope.randomSize = function() {
      $scope.width = Math.round(Math.random() * 400);
      $scope.height = Math.round(Math.random() * 400);
    };

    $scope.size = function(size) {
      $scope.width = $scope.height = size;
    };

    $scope.randomColor = function() {
      $scope.red = Math.round(Math.random() * 255);
      $scope.green = Math.round(Math.random() * 255);
      $scope.blue = Math.round(Math.random() * 255);
    };

    $scope.colorize = function(red, green, blue) {
      $scope.red = red;
      $scope.green = green;
      $scope.blue = blue;
    };

    // Processing sketch definition
    $scope.sketch = function(sketch) {
      // Local variables used by the sketch
      var X = $scope.left,
        Y = $scope.top,
        red = $scope.red,
        green = $scope.green,
        blue = $scope.blue;

      // Initializes the sketch and is only run once.
      sketch.setup = function() {
        sketch.size(400, 300);
        sketch.frameRate(60);
      };

      // The main draw function is run indefinitely in a loop.
      sketch.draw = function() {
        var width, height, speed;

        sketch.background(120);
        sketch.strokeWeight(5);
        speed = 101 - $scope.speed;

        X += ($scope.left - X) / speed;
        Y += ($scope.top - Y) / speed;
        width = $scope.width + (Math.sin( sketch.frameCount / (speed / 4) ) * ($scope.width / 10));
        height = $scope.height + (Math.sin( sketch.frameCount / (speed / 4) ) * ($scope.height / 10));
        red += ($scope.red - red) / 20;
        green += ($scope.green - green) / 20;
        blue += ($scope.blue - blue) / 20;

        sketch.stroke(255);
        sketch.fill(red, green, blue);
        sketch.ellipse(X, Y, width, height);
      };
    };
  });

  return demo;
});
