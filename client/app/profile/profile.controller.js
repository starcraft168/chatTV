(function() {
	'use strict';

	angular
		.module('app.profile')
		.controller('profileController', profileController);

	profileController.$inject = ['$scope', '$sce', 'profileService'];

	function profileController($scope, $sce, profileService) {
		
		loadVideos();
		$scope.getIframeSrc = getIframeSrc;
		$scope.selectVideo = selectVideo;
		$scope.addText = addText;
		$scope.message = '';
		$scope.name = '';

		//place this in the resolve
		function loadVideos() {
			profileService.request().then(function(data) {
				$scope.title = data.videos[0].title;
				$scope.currentVideo = data.videos[0]._id;
				$scope.views = data.videos[0].views;
				$scope.preview = data.videos[0].preview;
				$scope.videos = data.videos;
				console.log('all video data', $scope.videos);
			});			
		}

		function getIframeSrc(videoId) {
			return $sce.trustAsResourceUrl("http://player.twitch.tv/?video=" + videoId +"/&muted=true/&autoplay=false");
		}

		function selectVideo(video) {
			$scope.currentVideo = video._id;
			$scope.title = video.title;
			$scope.views = video.views;
			$scope.preview = video.preview;
		}

		//need to save the message in the server
		function addText() {
			var message = $scope.message;
			if($scope.name === '') {
				$scope.name = 'Anonymous';
			}
			var name = $scope.name;
			var el = angular.element(document.querySelector('#chatbox'));
			el.append('<div>'+ name +': '+message + '</div>'); 
			$scope.message = '';
		}


	}


})();