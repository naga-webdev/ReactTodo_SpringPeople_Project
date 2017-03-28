"use strict";

var express = require("express");

var app = express();

app.use(express.static(__dirname + '/build/'));

var port = process.env.PORT || 4000;
var server = app.listen(port, function() {
    console.log("Server is running on port " + port);
});
