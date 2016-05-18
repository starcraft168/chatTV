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
			$scope.videos = data.videos;
			console.log('all video data', $scope.videos);
		});
  
		$scope.show = show;
		$scope.getIframeSrc = getIframeSrc;

		function show() {
			return 'hello';
		}

		function getIframeSrc(videoId) {
			return $sce.trustAsResourceUrl("http://player.twitch.tv/?video=" + videoId +"/&muted=true/&autoplay=false");
		}



	}


})();