myApp.controller('adminController', ['$scope', '$http', function($scope, $http){
	console.log('in admin Controller');

 $scope.contacts = [];

 $scope.getContacts = function(){
	 console.log('in getContacts function');
	 $http({
		 method: 'GET',
		 url: '/admin'
	 }).then(function(response){
		 $scope.contacts=response.data;
		 console.log('get response is', response);
	 }, function errorCallback(response){
		 console.log('error response is', response);
	 });
 };




}]);
