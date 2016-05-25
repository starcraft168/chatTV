var mongoose = require('mongoose');
var posts = require('../controllers/posts.js');

module.exports = function(app) {
	app.get('/posts', function(request, response) {
		console.log('make request to /posts');
		posts.show(request, response);
	});

	app.post('/addpost', function(request, response){
		console.log('make request to /addpost');
		posts.create(request, response);
	});

	app.post('/removepost', function(request, response){
		posts.destroy(request, response);
	});

	app.post('/updatepost', function(request, response){
		posts.update(request, response);
	});

	app.get('/getPostById/:id', function(request, response){
		posts.find_by_id(request, response);
	});

	app.get('/data', function(request, response) {
		console.log('new route called data');
	});
};

