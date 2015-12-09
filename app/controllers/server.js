"use strict";

var http = require("http");
var express = require('express');
var app = express();

//var bodyParser = require("bodyParser");

//app.use(bodyParser.json());

var webApiRoutes = require('./webApiRoutes.js');

app.use('/posts', webApiRoutes);

var server = http.Server(app);

server.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Our nodejs application listens at http://%s:%s", host,	port);
});


