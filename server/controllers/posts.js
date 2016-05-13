//First add the following two lines at the top of the posts controllers so that we can access
//our model through var Post
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
//this is our post.js file located at /server/controllers/post.js
//note the immediate function and the object that is returned

// module.exports = (function() {
// 	return {
// 		show: function(request, response) {
// 			response.json([{name:'Andrew', age:24}, {name:'Michael', age:35}]);
// 		}
// 	}
// })();

/*

module.exports = {
	show: function(request, response) {
		response.json([{name:'Andrew', age:24}, {name:'Michael', age: 35}]);
	}
}

wrap it in an IIFE:

(function() {
	return {
		show: function()...etc.

	};
})();

*/


module.exports = (function() {
	return {
		show: function(request, response) {
			Post.find({}, function(err, results) {
				if(err) {
					console.log('error in show main');
				} else {
					response.json(results);
				}
			});
		},
		create: function(request, response){
			var post = new Post({
				name: request.body.name, 
				age: request.body.age,
				highschool: request.body.highschool,
				GPA: request.body.GPA,
				SATscore: request.body.SATscore
			})

			post.save(function(error){
				if (error){
					console.log('error in create')
				} else {
					console.log('success')
				}
			})
		},
		destroy: function(request, response){
			Post.remove({_id: request.body.id}, function(error){
				if(error){
					console.log('error in destroy')
				} else {
					console.log('success')
				}
				response.end();
			})
		},
		find_by_id: function(request, response){
			Post.find({_id: request.params.id}, function(error, result){
				if(error) {
					console.log('error in find_by_id');
				} else {
					response.json(result)
				}
			})
		},
		update: function(request, response){
			Post.update({_id: request.body.id},
			 	{name: request.body.name,
			  	age: request.body.age,
			  	highschool: request.body.highschool,
			  	GPA: request.body.GPA,
			  	SATscore: request.body.SATscore},

			  	function(error, result){
				if(error){
					console.log('error in update ')
				} else {
					console.log('success')
				}
			})
		}
	}
})();
//note that this is just a code snippet of the show method from the object returned in the controller
//this includes the exports module.exports