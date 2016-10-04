myApp.controller('contactController', ['$scope', '$http', function($scope, $http){
	console.log('in contact Controller');

	$scope.postContact = function(){
		var dataToSend = {
			first_name: $scope.first_name,
			last_name: $scope.last_name,
			email: $scope.email,
			subject: $scope.subject,
			message: $scope.message
		};
		console.log('dataToSend is', dataToSend);
		//ajax
		$http({
			method: 'POST',
			url: '/contact',
			data: dataToSend
		}).then(function(response){
			console.log('post response is', response);
		}, function errorCallback(response){
			console.log('err', response);
		});
	};

	$scope.favorites = [];

 $scope.getContacts = function(){
	 console.log('in getContacts function');
	 $http({
		 method: 'GET',
		 url: '/getContacts'
	 }).then(function(response){
		 console.log('get response is', response);
	 }, function errorCallback(response){
		 console.log('error response is', response);
	 });
 };



}]);
