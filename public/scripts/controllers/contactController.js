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
			console.log('post resonse is', response);
		}, function errorCallback(response){
			console.log('err', response);
		});
	};

	$scope.favorites = [];

	function getContacts(){
		$http.get('/getContact').then(function(response){
			if(response.status==200){
				$scope.favorites=response.data;
				console.log('response is good')
			} else {
				console.log('error getting contacts');
			}
		});
	}


}]);
