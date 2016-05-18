(function() {
	'use strict';

	angular
		.module('app.profile')
		.controller('profileController', profileController);

	profileController.$inject = ['$scope', '$sce', 'profileService'];

	function profileController($scope, $sce, profileService) {
		profileService.request().then(function(data) {
			$scope.title = data.videos[0].title;
			$scope.videos = data.videos;
			console.log('all video data', $scope.videos);
		});
  
		$scope.show = show;
		$scope.getIframeSrc = getIframeSrc;
		$scope.selectVideo = selectVideo;

		function show() {
			return 'hello';
		}

		function getIframeSrc(videoId) {
			return $sce.trustAsResourceUrl("http://player.twitch.tv/?video=" + videoId +"/&muted=true/&autoplay=false");
		}

		function selectVideo() {
			profileService.request().then(function(data) {
				console.log('selectVideo fxn', data);
				var videoId = data.videos[0]._id;
				console.log('hello videoId', videoId);
				$scope.currentVideo = videoId;
			});

		}

		selectVideo();
	}


})();