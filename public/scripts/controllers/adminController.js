var logOutUrl = 'https://dkuntz811.auth0.com/v2/logout';

myApp.controller('adminController', ['$scope', '$http', '$route', function($scope, $http, $route){
	console.log('in admin Controller');

 $scope.contacts = [];
 $scope.notes = [];

 $scope.getContacts = function(){
	//  console.log('in getContacts function');
	 $http({
		 method: 'GET',
		 url: '/admin'
	 }).then(function(response){
		 $scope.contacts=response.data;
		//  console.log('get response is', response);
	 }, function errorCallback(response){
		 console.log('error response is', response);
	 });
 };

 $scope.getNote = function(){
	 $http({
		 method: 'GET',
		 url: '/getnote'
	 }).then(function(response){
		 $scope.notes=response.data;
		 console.log(response.data);
	 }, function errorCallback(response){
		 console.log('getnote error is ', response);
	 });
    console.log($scope.notes);
 };

 $scope.postNote = function(noteIn){
	 var dataToSend = {
		 noteIn
	 };
   console.log(noteIn);
	 console.log('dataToSend is ', dataToSend);
	 $http({
		 method: 'POST',
		 url: '/note',
		 data: dataToSend
	 }).then(function(response){
		 console.log('postnote response is ', response);
		 $route.reload();
	 }, function errorCallback(response){
		 console.log('error in postnote', response);
	 });//end .then

 };//end $scope.postNote



 $scope.deleteContact = function(id){
	 console.log('clicked delete', id);
	 $http({
		 method: 'DELETE',
		 url: '/clients/' + id
	 }).then(function successCallback(response){
		 console.log('delete response = ', response);
	 }, function errorCallback(response) {
		 console.log('client delete error', response);
	 });//end .then
 };//end $scope.deleteContact

 $scope.logOut = function(){
	 //call out logOutUrl
	 $http({
		 method: 'GET',
		 url: logOutUrl
	 }).then(function(data){
		 if(data.data == 'OK'){
			//  emptyLocalStorage();
			 $scope.showUser = false;
		 }
		 window.location.href='http://localhost:7070/#/home';
	 });//end $http
 };//end logout

	// $scope.init = function(){
	// 	console.log('in init');
	// 	//check if a suer's info is saved in localStorage
	// 	if(JSON.parse(localStorage.getItem('userProfile'))){
	// 		//if yes, save userProvile as $scope.userProfile
	// 		$scope.userProfile=JSON.parse(localStorge.getItem('userProfile'));
	// 		console.log('logged in', $scope.userProfile);
	// 		$scope.showUser = true;
	// 	} else {
	// 		//if no, make sure user is logged out and empty
	// 		emptyLocalStorage();
	// 		$scope.showUser = false;
	// 	}
	// };
	//
	// $scope.logIn = function(){
	// 	console.log('in logIn');
	// 	lock.show(function(err, profile, token){
	// 		if(err){
	// 			console.log('error logging in', err);
	// 		} else {
	// 			localStorage.setItem('userToken', token);
	// 			console.log('token:', token);
	// 			localStorage.setItem('userProfile', JSON.stringify(profile));
	// 			console.log('Auth0 success, Profile:', profile);
	// 			window.location.href='http://localhost:6060/#/admin';
	// 		}
	// 	});//end lock.show
	// }; //end login
	//
	// $scope.logOut = function(){
	// 	//call out logOutUrl
	// 	$http({
	// 		method: 'GET',
	// 		url: logOutUrl
	// 	}).then(function(data){
	// 		if(data.data == 'OK'){
	// 			emptyLocalStorage();
	// 			$scope.showUser = false;
	// 		}
	// 	});//end $http
	// };//end logout
	//



}]);
