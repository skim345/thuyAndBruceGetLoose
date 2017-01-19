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
	



	return factory;
})