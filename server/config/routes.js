//This is our routes.js file located in server/config/routes.js
//This is where we will define all of our routing rules!
//We will have to require this in the server.js file (and pass it app!)
var mongoose = require('mongoose');
//require the controller at the top of the routes file
var posts = require('../controllers/posts.js');
module.exports = function(app) {
	app.get('/posts', function(request, response) {
		// response.json([{name:'Andrew', age:24}, {name:'Michael', age:34}]);
		posts.show(request, response);
	});

	//note how we are delegating to the controller and passing along request and response
	app.post('/addpost', function(request, response){
		posts.create(request, response)
	})


	app.post('/removepost', function(request, response){
		posts.destroy(request, response)
	})

	app.post('/updatepost', function(request, response){
		posts.update(request, response)
	})

	app.get('/getPostById/:id', function(request, response){
		posts.find_by_id(request, response)
	})
};

