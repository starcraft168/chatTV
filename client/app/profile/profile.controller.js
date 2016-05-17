(function() {
	'use strict';

	angular
		.module('app.profile')
		.controller('profileController', profileController);

	profileController.$inject = ['$scope', '$sce', 'profileService'];

	function profileController($scope, $sce, profileService) {

		profileService.request().then(function(data) {
			console.log('data', data.videos[0]._id);
			console.log('title', data.videos[0].title)
			$scope.title = data.videos[0].title;
			$scope.videos = $sceDelegate.trustAs(data.videos);
			console.log('yay', $scope.videos);
		});

		$scope.show = show;
		// $scope.getVideo = getVideo();

		function show() {
			return 'hello';
		}

		// function getVideo() {
		// 	profileService.request().then(function(data) {
		// 		console.log('data', data.videos[0]._id);
		// 		console.log('title', data.videos[0].title)
		// 		$scope.title = data.videos[0].title;
		// 		$scope.videos = data.videos[0]._id;
		// 		console.log('yay', $scope.videos);
		// 	});
		// }




	}


})();