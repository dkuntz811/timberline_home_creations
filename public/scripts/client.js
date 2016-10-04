console.log('sourced client js');

var myApp = angular.module('myApp', ['ngRoute']);
console.log('looking for routes');
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/about', {
		templateUrl: '/views/partials/about.html',
		controller: 'aboutController'
	}).
	when('/portfolio', {
		templateUrl: '/views/partials/portfolio.html',
		controller: 'portfolioController'
	}).
	when('/contact', {
		templateUrl: '/views/partials/contact.html',
		controller: 'contactController'
	}).
	otherwise({
		redirectTo: '/index'
	});
}]);//myApp config
