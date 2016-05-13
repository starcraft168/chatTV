(function() {
	'use strict';

	angular
		.module('app.profile')
		.config(configFunction)

	configFunction.$inject = ['$routeProvider'];

	function configFunction($routeProvider) {
		$routeProvider.when('/profile', {
			templateUrl: 'app/profile/profile.html',
			controller: 'profileController',
			controllerAs: 'vm'
		});
	}


})();