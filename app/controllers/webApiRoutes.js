"use strict";

var express = require('express');
var fs = require('fs');

//var router = express.Router();

var webApiRoutes = express.Router();  

function isInteger(x) {
        return x % 1 === 0;
}

webApiRoutes.get('/', function(req, res, next) {	

	fs.readFile('../project/app/models/posts.json', 'utf8', function(err, data) {
		if (err) { 
			console.log("read error in /posts");
			throw err;
		}		
  		var posts = JSON.parse(data);
  		console.log("after parse");
  		res.setHeader('Content-Type', 'application/json');
  		res.send(posts);
	});
});

webApiRoutes.get('/:id/', function(req, res, next) {
	fs.readFile('../project/app/models/posts.json', 'utf8', function(err, data) {
		if (err) {
			console.log("read error in posts/:id");
			throw err;
		}
  		var posts = JSON.parse(data);
  		var id = req.params.id;
  		if(isInteger(id)) {  			
  			var post = posts["post" + id];
  			//console.log("post is " + post);
  			res.setHeader('Content-Type', 'application/json');
  			res.send(post);
  		}
	});
});

webApiRoutes.put('/:id/', function(req, res, next) {
	console.log("update");
});

webApiRoutes.post('addPost', function(req, res, next) {
	console.log("add post");
});




module.exports = webApiRoutes;