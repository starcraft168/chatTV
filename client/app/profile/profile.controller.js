(function() {
	'use strict';

	angular
		.module('app.profile')
		.controller('profileController', profileController);

	profileController.$inject = ['$scope', 'profileService'];

	function profileController($scope, profileService) {

		profileService.request().then(function(views) {
			$scope.views = views;
		});

		console.log(profileService.numberOfViews);


		$scope.show = show;
		$scope.getVideo = getVideo;

		function show() {
			return 'hello';
		}

		function getVideo() {
			return profileService.request();
		}




	}


})();