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

    $scope.ball = {
      // Position
      left: $scope.canvas.width / 2,
      top: $scope.canvas.height / 2,
      speed: 65,

      // Size
      width: 50,
      height: 50,

      // Color
      red: 75,
      green: 120,
      blue: 180
    };

    $scope.move = function($sketch) {
      $scope.ball.left = $sketch.mouseX;
      $scope.ball.top = $sketch.mouseY;
    };

    $scope.center = function() {
      $scope.ball.left = $scope.canvas.width / 2;
      $scope.ball.top = $scope.canvas.height / 2;
    };

    $scope.randomPosition = function() {
      $scope.ball.left = randomInt(0, $scope.canvas.width);
      $scope.ball.top = randomInt(0, $scope.canvas.height);
    };

    $scope.randomSize = function() {
      $scope.ball.width = randomInt(0, $scope.canvas.width);
      $scope.ball.height = randomInt(0, $scope.canvas.height);
    };

    $scope.size = function(size) {
      $scope.ball.width = $scope.ball.height = size;
    };

    $scope.randomColor = function() {
      $scope.ball.red = randomInt(0, 255);
      $scope.ball.green = randomInt(0, 255);
      $scope.ball.blue = randomInt(0, 255);
    };

    $scope.colorize = function(red, green, blue) {
      $scope.ball.red = red;
      $scope.ball.green = green;
      $scope.ball.blue = blue;
    };

    // Processing sketch definition
    $scope.sketch = function(sketch) {
      // Local variables used by the sketch
      var X = $scope.ball.left,
        Y = $scope.ball.top,
        red = $scope.ball.red,
        green = $scope.ball.green,
        blue = $scope.ball.blue;

      // Initializes the sketch and is only run once.
      sketch.setup = function() {
        sketch.size($scope.canvas.width, $scope.canvas.height);
        sketch.frameRate(60);
      };

      // The main draw function is run indefinitely in a loop.
      sketch.draw = function() {
        var width, height, speed, sizeModifier;

        // Calculate new size, position, and color
        speed = 101 - $scope.ball.speed;
        sizeModifier = Math.sin(sketch.frameCount / speed * 4) / 10;
        X += ($scope.ball.left - X) / speed;
        Y += ($scope.ball.top - Y) / speed;
        width = $scope.ball.width + (sizeModifier * $scope.ball.width);
        height = $scope.ball.height + (sizeModifier * $scope.ball.height);
        red += ($scope.ball.red - red) / 20;
        green += ($scope.ball.green - green) / 20;
        blue += ($scope.ball.blue - blue) / 20;

        // Apply changes to sketch
        sketch.background(120);
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
