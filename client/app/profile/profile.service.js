(function() {
	'use strict';

	angular
		.module('app.profile')
		.factory('profileService', profileService);

	profileService.$inject = ['$http']

	function profileService($http) {

		var service = {
			request: request,
		}

		return service;

		////////////////
		function request() {
			return $http({
				method: 'GET',
				url: 'https://api.twitch.tv/kraken/videos/top?game=Gaming+Talk+Shows&period=week'
			}).then(function(response) {
				console.log('success');
				return response.data;
			}).catch(function(response) {
				console.log('error');
			});
		}






	}





})();