module.exports=(function(){
	return{
	
contactEmail: function(req, res){
			console.log(req.body);
			// { name: 'Steph', comment: 'Hello' }
			var mailOptions = {
				to: "ThuyBruce052017@gmail.com",
				subject: "Question From: "+req.body.email,
				text: req.body.name+": "+req.body.comment
			}
			// console.log(mailOptions);
			smtpTransport.sendMail(mailOptions, function(err, response){
				if(err){
					console.log(err);
					var errorsArray= [];
					for(var i in err.errors){
						errorsArray.push(err.errors);
					}
					res.json({status: false, errors: errorsArray});
				}else{

					res.json({status: true, response: response});
				}
			})

		}
		


	}



})()