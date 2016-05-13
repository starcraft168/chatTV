(function() {
	'use strict';

	angular
		.module('app.profile')
		.controller('profileController', profileController);

	profileController.$inject = ['$scope', 'profileService'];

	function profileController($scope, profileService) {
		var views = getViews();




		function getViews() {
			return getVideo().then(function(data) {
				return data;
			});
		}
		console.log(views);






		$scope.show = show;
		$scope.getVideo = getVideo
		$scope.views = views;

		function show() {
			return 'hello';
		}

		function getVideo() {
			return profileService.request();
		}




	}


})();