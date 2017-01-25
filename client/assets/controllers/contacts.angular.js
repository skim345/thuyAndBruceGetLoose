myApp.controller('contactController',['$scope', '$routeParams', '$location','contactFactory', function($scope, $routeParams, $location, contactFactory){

	$scope.errors=[];


	$scope.contactEmail = function(){
		// console.log($scope.question);
		contactFactory.contactEmail($scope.question, function(response){
			if(!response.status){
				$scope.errors.push(response.errors);
			}else{
				$scope.question="";
				alert('Your email has been sent');
			}
		})
	}
	$scope.rsvpForm = function(){
		// console.log($scope.rsvp);
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