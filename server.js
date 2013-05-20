"use strict";

var connect = require('connect'),
  port = process.env.PORT || 3000;

connect.createServer(
  connect.static(__dirname)
).listen(port, function() {
  console.log("Static web server listening on port " + port + '.');
});
