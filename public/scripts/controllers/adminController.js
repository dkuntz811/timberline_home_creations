myApp.controller('adminController', ['$scope', '$http', function($scope, $http){
	console.log('in admin Controller');

		var getContacts = $scope.getContacts = function(){
			$http({
				method: 'GET',
				url: '/getContact'
			}).then(function(response){
				$scope.contacts=response.data;
				console.log('got contacts from db', response);
			}, function errorCallBack(response){
				console.log('error in getContact', response);
			});
		};




}]);
