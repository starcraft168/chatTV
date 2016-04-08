angular.module('app', []); //take other modules as dependencies ok

//AJAX

// .factory('Reddit', function($http) {
// 	var posts =[];
// 	var getFrontPage = function() {
// 		return $http({
// 			url: 'https://www.reddit.com/.json',
// 			method: 'GET'
// 		})
// 		.then(function(response) {
// 			console.log(response.data);
// 		});
// 	};
// })