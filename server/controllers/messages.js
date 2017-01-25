var RSVP = mongoose.model('RSVP');

module.exports=(function(){
	return{
	
		contactEmail: function(req, res){
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

		},
		rsvpForm: function(req, res){
		// console.log(req.body);
		var newRsvp= new RSVP({
			name: req.body.name,
			numberAttending: req.body.numberAttending,
			guest1Name: req.body.guest1,
			guest2Name: req.body.guest2,
			guest3Name: req.body.guest3,
			guest4Name: req.body.guest4,
			guest5Name: req.body.guest5,
			guest6Name: req.body.guest6,
			guest7Name: req.body.guest7,
			guest8Name: req.body.guest8,
			guest9Name: req.body.guest9,
			guest10Name: req.body.guest10,
		})
		newRsvp.save(function(err){
			if(err){
				console.log(err);
				var errorsArr = [];
				for(var i in err.errors){
					errorsArr.push(err.errors[i].message);
				}
				res.json({status: false, errors: errorsArr});
			}else{
				res.json({status: true});
			}
		})
	}

	
	}



})()