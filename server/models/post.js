//This is the post.js file located at /server/models/post.js
//We want to create a file that has the schema for our posts and creates a model that we can then call upon
//in our controller
var mongoose = require('mongoose');
//create our postSchema
var PostSchema = new mongoose.Schema({
	name: String,
	age: Number,
	highschool: String,
	GPA: Number,
	SATscore: Number
});
//use the schema to create the model
//Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Post', PostSchema);
//notice that we aren't exporting anything -- this is because this file will be run when we require it using our config
//file and then since the model is defined we'll be able to access it from our controller

