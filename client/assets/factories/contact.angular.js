myApp.factory('contactFactory', function($http){
	var factory = {}

	// Routing to email	
	factory.contactEmail= function(messageInfo, callback){
	// console.log(messageInfo);
		$http.post('/contactEmail',messageInfo).then(function(response){
			if(!response.status){
				callback(response);
			}else{
				callback(response);
			}
		})
	}
	// Routing for RSVP form
	factory.rsvpForm = function(rsvpInfo, callback){
		$http.post('/rsvpForm', rsvpInfo).then(function(response){
			if(!response.status){
				callback(response);
			}else{
				callback(response);
			}
		})
	}



	return factory;
})