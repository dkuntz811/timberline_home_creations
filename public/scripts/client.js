console.log('sourced client js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/index', {
		templateUrl: '/views/index.html',
		controller: 'indexController'
	}).
	when('/about', {
		templateUrl: '/views/partials/about.html',
		controller: 'aboutController'
	}).
	when('/portfolio', {
		templateUrl: '/views/partials/portfolio.html',
		controller: portfolioController
	}).
	when('/contact', {
		templateUrl: '/views/partials/contact.html'
	}).
	otherwise({
		redirectTo: '/index.html'
	});
}]);//myApp config
