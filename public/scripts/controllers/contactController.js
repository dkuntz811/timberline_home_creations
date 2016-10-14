var lock = new Auth0Lock('nUkdDmhYSGNLolT7jWzmYZ39Efq6CH0Y', 'dkuntz811.auth0.com');
var logOutUrl = 'https://dkuntz811.auth0.com/v2/logout';


myApp.controller('contactController', ['$scope', '$http', ,'$route', function($scope, $http, $route){
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
			$route.reload();
		}, function errorCallback(response){
			console.log('err', response);
		});
		dataToSend = {};
	};

	$scope.init = function(){
		console.log('in init');
		//check if a suer's info is saved in localStorage
		if(JSON.parse(localStorage.getItem('userProfile'))){
			//if yes, save userProvile as $scope.userProfile
			$scope.userProfile=JSON.parse(localStorage.getItem('userProfile'));
			console.log('logged in', $scope.userProfile);
			$scope.showUser = true;
		} else {
			//if no, make sure user is logged out and empty
			emptyLocalStorage();
			$scope.showUser = false;
		}
	};

	$scope.logIn = function(){
		console.log('in logIn');
		lock.show(function(err, profile, token){
			if(err){
				console.log('error logging in', err);
			} else {
				localStorage.setItem('userToken', token);
				console.log('token:', token);
				localStorage.setItem('userProfile', JSON.stringify(profile));
				console.log('Auth0 success, Profile:', profile);
				//redirect to admin page
			  window.location.href='http://localhost:7070/#/admin';

			}
		});//end lock.show
	}; //end login

	$scope.logOut = function(){
		//call out logOutUrl
		$http({
			method: 'GET',
			url: logOutUrl
		}).then(function(data){
			if(data.data == 'OK'){

				$scope.showUser = false;
				window.location.href='http://localhost:7070/#/home';
			}

		});//end $http
	};//end logout







}]);
