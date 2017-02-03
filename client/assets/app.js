var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/main.html'
	})
	.when('/bridalParty', {
		templateUrl: '/partials/bridalParty.html'
	})
	.when('/bridesmaids', {
		templateUrl: '/partials/bride.html'
	})
	.when('/groomsmen', {
		templateUrl: '/partials/groom.html'
	})
	.when('/ceremony', {
		templateUrl: '/partials/ceremony.html'
	})
	.when('/reception', {
		templateUrl: '/partials/reception.html'
	})
	.when('/contact', {
		templateUrl: '/partials/contact.html',
		controller: 'contactController'
	})	
	.when('/pictures', {
	templateUrl: '/partials/pictures.html'
	})
	.otherwise({
		templateUrl: '/partials/main.html'
	})
	$locationProvider.hashPrefix('');
})