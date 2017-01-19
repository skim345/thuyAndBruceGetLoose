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
	.when('/pic1', {
	templateUrl: '/partials/engagement1.html'
	})
	.when('/pic2', {
	templateUrl: '/partials/engagement2.html'
	})
	.when('/pic3', {
	templateUrl: '/partials/engagement3.html'
	})
	.when('/pic4', {
	templateUrl: '/partials/engagement4.html'
	})
	.when('/pic5', {
	templateUrl: '/partials/engagement5.html'
	})
	.when('/pic6', {
	templateUrl: '/partials/engagement6.html'
	})
	.when('/pic7', {
	templateUrl: '/partials/engagement7.html'
	})
	.when('/pic8', {
	templateUrl: '/partials/engagement8.html'
	})
	.when('/pic9', {
	templateUrl: '/partials/engagement9.html'
	})
	.when('/pic10', {
	templateUrl: '/partials/engagement10.html'
	})
	.when('/pic11', {
	templateUrl: '/partials/engagement11.html'
	})
	.when('/pic12', {
	templateUrl: '/partials/engagement12.html'
	})
	.when('/pic13', {
	templateUrl: '/partials/engagement13.html'
	})
	.when('/pic14', {
	templateUrl: '/partials/engagement14.html'
	})
	.when('/pic15', {
	templateUrl: '/partials/engagement15.html'
	})	
	.when('/pic16', {
	templateUrl: '/partials/engagement16.html'
	})
	.otherwise({
		templateUrl: '/partials/main.html'
	})
	$locationProvider.hashPrefix('');
})