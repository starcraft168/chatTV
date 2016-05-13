(function() {
	'use strict';

	angular
		.module('app.profile')
		.factory('profileService', profileService);

	profileService.$inject = ['$http']

	function profileService($http) {

		var service = {
			request: request,
			numberOfViews: numberOfViews
		}

		return service;

		var numberOfViews;

		request();
		////////////////
		function request() {
			return $http({
				method: 'GET',
				url: 'https://api.twitch.tv/kraken/videos/top?game=Gaming+Talk+Shows&period=month'
			}).then(function success(response) {
				console.log('success');
				console.log(response.data);
				console.log(response.data.videos[0].views);
				numberOfViews = response.data.videos[0].views;
				// return numberOfViews;
			}).catch(function error(response) {
				console.log('error');
			});
		}






	}





})();