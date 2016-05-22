var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = (function() {
	return {
		show: function(request, response) {
			Post.find({}, function(error, results) {
				if(error) {
					console.log('error in show main');
				} else {
					response.json(results);
				}
			});
		},
		create: function(request, response){
			var post = new Post({
				name: request.body.name, 
				message:request.body.message
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
			 	{
			 		name: request.body.name,
			  		message: request.body.message
			  },

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
