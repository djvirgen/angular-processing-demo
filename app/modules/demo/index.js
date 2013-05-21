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
    $scope.canvas = {
      width: 400,
      height: 400
    };

    // Position
    $scope.left = $scope.canvas.width / 2;
    $scope.top = $scope.canvas.height / 2;
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
      $scope.left = $scope.canvas.width / 2;
      $scope.top = $scope.canvas.height / 2;
    };

    $scope.randomPosition = function() {
      $scope.left = randomInt(0, $scope.canvas.width);
      $scope.top = randomInt(0, $scope.canvas.height);
    };

    $scope.randomSize = function() {
      $scope.width = randomInt(0, $scope.canvas.width);
      $scope.height = randomInt(0, $scope.canvas.height);
    };

    $scope.size = function(size) {
      $scope.width = $scope.height = size;
    };

    $scope.randomColor = function() {
      $scope.red = randomInt(0, 255);
      $scope.green = randomInt(0, 255);
      $scope.blue = randomInt(0, 255);
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
        sketch.size($scope.canvas.width, $scope.canvas.height);
        sketch.frameRate(60);
      };

      // The main draw function is run indefinitely in a loop.
      sketch.draw = function() {
        var width, height, speed, sizeModifier;

        sketch.background(120);
        speed = 101 - $scope.speed;
        sizeModifier = Math.sin(sketch.frameCount / speed * 4) / 10;

        X += ($scope.left - X) / speed;
        Y += ($scope.top - Y) / speed;
        width = $scope.width + (sizeModifier * $scope.width);
        height = $scope.height + (sizeModifier * $scope.height);
        red += ($scope.red - red) / 20;
        green += ($scope.green - green) / 20;
        blue += ($scope.blue - blue) / 20;

        sketch.strokeWeight((width + height) / 20);
        sketch.stroke(255);
        sketch.fill(red, green, blue);
        sketch.ellipse(X, Y, width, height);
      };
    };

    var randomInt = function(min, max, inclusive) {
      return Math.floor(Math.random() * (max - min) + min);
    };
  });

  return demo;
});
