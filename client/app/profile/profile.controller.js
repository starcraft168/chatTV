(function() {
	'use strict';

	angular
		.module('app.profile')
		.controller('profileController', profileController);

	profileController.$inject = ['$scope', '$sce', 'profileService'];

	function profileController($scope, $sce, profileService) {
		
		$scope.getIframeSrc = getIframeSrc;
		$scope.selectVideo = selectVideo;
		$scope.searchVideo = searchVideo;

		//place this in the resolve
		profileService.request().then(function(data) {
			$scope.title = data.videos[0].title;
			$scope.currentVideo = data.videos[0]._id;
			$scope.views = data.videos[0].views;
			$scope.preview = data.videos[0].preview;
			$scope.videos = data.videos;
			console.log('all video data', $scope.videos);
		});
  

		function getIframeSrc(videoId) {
			return $sce.trustAsResourceUrl("http://player.twitch.tv/?video=" + videoId +"/&muted=true/&autoplay=false");
		}

		function selectVideo(video) {
			$scope.currentVideo = video._id;
			$scope.title = video.title;
			$scope.views = video.views;
			$scope.preview = video.preview;
		}

		function searchVideo() {

		}


	}


})();