var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	name: String,
	message: String
});

mongoose.model('Post', PostSchema);


