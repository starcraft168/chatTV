(function() {
	'use strict';

	angular
		.module('app.profile')
		.config(configFunction)

	configFunction.$inject = ['$routeProvider','$sceProvider'];

	function configFunction($routeProvider, $sceProvider) {
		$routeProvider.when('/profile', {
			templateUrl: 'app/profile/profile.html',
			controller: 'profileController',
		});
	}


})();