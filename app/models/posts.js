//Lets load the mongoose module in program
var mongoose = require('mongoose');

//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost:27017/test');

/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of Post document and data types of each field.
 * */
var Post = mongoose.model('Post', {id: Number, author: String, title:String, content:String});

/*var articleActions = {
	save: function(p) {

	},

	getAll: function() {

	},

	create: function() {

	},

	update: function() {

	}

};

module.exports = articleActions;*/

module.exports = Post;