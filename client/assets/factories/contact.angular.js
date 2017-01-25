myApp.factory('contactFactory', function($http){
	var factory = {}

	
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
	
	factory.rsvpForm = function(rsvpInfo, callback){
		// console.log(rsvpInfo);
		// bjectguest1: "stephanie"
		// guest2: "enrique"
		// name: "stephanie"
		// numberAttending: "2"
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