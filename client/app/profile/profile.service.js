(function() {
	'use strict';

	angular
		.module('app.profile')
		.factory('profileService', profileService);

	function profileService() {

		var service = {
			request: request,
			request2: request2
		}

		return service;

		////////////////
		function request() {
			return 'hi';
		}

		function request2() {
			return 'bye'
		}

	}





})();