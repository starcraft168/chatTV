(function() {
	'use strict';

	angular
		.module('app.profile')
		.controller('profileController', profileController);

	profileController.$inject = ['profileService'];

	function profileController(profileService) {
		var vm = this;

		vm.show = show;

		function show() {
			return 'hello ' + profileService.request();
		}

	}


})();