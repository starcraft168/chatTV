(function() {
	'use strict';

	angular
		.module('app.profile')
		.factory('profileService', profileService);

	profileService.$inject = ['$http']

	function profileService($http) {

		var service = {
			downloadVideos: downloadVideos,
			getMessages: getMessages
		}

		return service;

		////////////////
		function downloadVideos() {
			return $http({
				method: 'GET',
				url: 'https://api.twitch.tv/kraken/videos/top?game=Gaming+Talk+Shows&period=week&limit=100'
			}).then(function(response) {
				console.log('success');
				return response.data;
			}).catch(function(response) {
				console.log('error');
			});
		}

		function getMessages() {
			return $http({
				method:'GET',
				url:'/posts'
			}).then(function(response) {
				console.log('success in getMessages');
				return response.data;
			}).catch(function(response) {
				console.log('error in getMessages')
			});
		}






	}





})();