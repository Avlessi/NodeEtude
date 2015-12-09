"use strict";

var express = require('express');

var fs = require('fs');

//var router = express.Router();

var webApiRoutes = express.Router(); 

var Post = require("../models/posts.js");

function isInteger(x) {
        return x % 1 === 0;
}

webApiRoutes.get('/posts', function(req, res, next) {	

	console.log("posts");

	//var post1 = new Post({id:10,  author: "Julien", title: "mytitle", content: "some content"});

	//post1.save();

	// read from file
	/*fs.readFile('../project/app/models/posts.json', 'utf8', function(err, data) {
		if (err) { 
			console.log("read error in /posts");
			throw err;
		}		
  		var posts = JSON.parse(data);
  		console.log("after parse");
  		res.setHeader('Content-Type', 'application/json');
  		res.send(posts);
	});*/

	//read from db
	Post.find({}, function(err, posts) {
		console.log("find post");
        
        /*res.send(posts.reduce(function(postMap, item) {
            postMap[item.id] = item;
            return postMap;
        }, {}));*/

		var postsArray = [];

    	posts.forEach(function(post) {      		
      		postsArray.push(post);
    	});

    	res.send(postsArray);  
    });    
});

webApiRoutes.post('/createPost', function(req, res, next) {
	console.log("add post");

	console.log(req.body);

	//TODO
	var p = new Post({id:10,  author: "Julien", title: "mytitle", content: "some content"});
	p.save(function (err, postObj) {
  		if (err) {
    		console.log(err);
  		} else {
    		console.log('saved successfully:', postObj);    		
    		res.send(postObj);
  		}
	});

	//res.send("");
});

webApiRoutes.get('/post/:id/', function(req, res, next) {

	//read from file
	/*fs.readFile('../project/app/models/posts.json', 'utf8', function(err, data) {
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
	});*/

	//read from db


});

webApiRoutes.put('/post/update/:id/', function(req, res, next) {
	console.log("update");
});


module.exports = webApiRoutes;