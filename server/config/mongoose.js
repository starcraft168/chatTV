var mongoose = require('mongoose');

var fs = require('fs');
var path = require('path')

mongoose.connect('mongodb://localhost/chatTV');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected successfully');
});


var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('js') > 0) {
		require(models_path + '/' + file);
	}
});
