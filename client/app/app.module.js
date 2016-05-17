(function() {
	'use strict';

	angular
		.module('app', [
		//Angular modules
		'ngRoute',

		//Custom modules
		'app.profile'


	])
	.config(function($sceDelegateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://player.twitch.tv/**'

		]);
	});

})();