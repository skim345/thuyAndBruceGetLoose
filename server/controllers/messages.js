module.exports=(function(){
	return{
	
contactEmail: function(req, res){
			// console.log(req.body);
			// { name: 'Stephanie Kim',
  	// 			email: 'skim345@gmail.com',
  	// 			comment: 'hello testing' }
  	var name = req.body.name;
  	var from = req.body.email;
  	var message = req.body.comment;
  	var to = "ThuyBruce052017@gmail.com";
  	var smtpTransport = nodemailer.createTransport("SMTP",{
		service: "Gmail",
		auth: {
			user: "ThuyBruce052017",
			pass: "boobsicles"
		}
});
	var mailOptions = {
		from: from,
		to: to,
		subject: "Question From: "+ name+" -Email:  " +from,
		text: message
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