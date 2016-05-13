(function() {
	'use strict';

	angular
		.module('app.profile')
		.controller('profileController', profileController);

	profileController.$inject = ['$scope', 'profileService'];

	function profileController($scope, profileService) {
		$scope.show = show;
		$scope.getVideo = getVideo

		function show() {
			return 'hello';
		}

		function getVideo() {
			return profileService.request();
		}

	}


})();