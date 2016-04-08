angular.module('app').controller('MainController', function() {
	var vm = this;
	// vm.title = 'AngularJS Tutorial Example';
	vm.searchInput ='';
    vm.shows = [
	    {	
	        title: 'Sky News Live',
	        year: 2015,
	        favorite: true
	    },
	    {
	        title: 'White House Summit',
	        year: 2015,
	        favorite: false
	    },
	    {
	        title: 'NASA Space Station',
	        year: 2015,
	        favorite: true
	    },
	    {
	        title: 'Mark Zuckerberg Live',
	        year: 2015,
	        favorite: true
	    },
	    {
	        title: 'Kobe Bryant Clinic',
	        year: 2013,
	        favorite: false
	    }
	];

	vm.orders = [
		{
			id: 1,
			title: 'Year Ascending',
			key: 'year',
			reverse: false
		},
		{
			id: 2,
			title: 'Year Descending',
			key: 'year',
			reverse: true
		},
		{
			id: 3,
			title: 'Title Aescending',
			key: 'title',
			reverse: false
		},
		{
			id: 4,
			title: 'Title Descending',
			key: 'title',
			reverse: true
		}
	];
	vm.order = vm.orders[0];

	vm.new = {};
	vm.addShow = function() {
	    vm.shows.push(vm.new);
	    vm.new = {};
	};

});