myApp.controller('contactController',['$scope', '$routeParams', '$location','contactFactory', function($scope, $routeParams, $location, contactFactory){

	$scope.errors=[];


	// Email to email owners
	$scope.contactEmail = function(){
		contactFactory.contactEmail($scope.question, function(response){
			if(!response.status){
				$scope.errors.push(response.errors);
			}else{
				$scope.question="";
				alert('Your email has been sent');
			}
		})
	}
	// RSVP form
	$scope.rsvpForm = function(){
		contactFactory.rsvpForm($scope.rsvp, function(response){
			if(!response.status){
				$scope.errors.push(response.errors);
			}else{
				$scope.rsvp = "";
				alert('You have successfully rsvpd');
			}
		})

	}






}])