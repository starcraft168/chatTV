(function() {
	'use strict';

	angular
		.module('app.profile')
		.controller('profileController', profileController);

	profileController.$inject = ['$scope', '$sce', 'profileService'];

	function profileController($scope, $sce, profileService) {
		
		loadVideos();
		getMessages();

		$scope.getIframeSrc = getIframeSrc;
		$scope.selectVideo = selectVideo;
		$scope.addText = addText;
		$scope.message = '';
		$scope.name = '';

		function loadVideos() {
			profileService.downloadVideos().then(function(data) {
				$scope.title = data.videos[0].title;
				$scope.currentVideo = data.videos[0]._id;
				$scope.views = data.videos[0].views;
				$scope.preview = data.videos[0].preview;
				$scope.videos = data.videos;
				console.log('all video data', $scope.videos);
			});			
		}

		function getMessages() {
			profileService.getMessages().then(function(data) {
				angular.forEach(data, function(value, key) {
					appendMessage(value.name, value.message);
				})
			});
		}

		function postMessage(name, message) {
			profileService.postMessage(name, message).then(function(error) {
				console.log('successfully posted data to server', error);
			}).catch(function(error) {
				console.log('did not post to server', error);
			});
		}

		function appendMessage(name, message) {
			var el = angular.element(document.querySelector('#chatbox'));
			el.append('<div style="padding:2px">'+ '<span color:green>' + name +': </span>'+ message + '</div>'); 
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

		function addText() {
			if($scope.message === '') {
				$scope.message = '...'
			}
			var message = $scope.message;
			if($scope.name === '') {
				$scope.name = 'Anonymous';
			}
			var name = $scope.name;

			//append message to the UI
			appendMessage(name, message);

			//post message to the server
			postMessage(name, message);
			$scope.message = '';
		}

	}
})();