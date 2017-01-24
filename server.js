var express = require('express');
nodemailer = require("nodemailer");
smtpTransport = require('nodemailer-smtp-transport');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
mongoose = require('mongoose');

smtpTransport = nodemailer.createTransport({
	// host: "smtp.gmail.com",
	// secure: true,
	service: "Gmail",
	auth: {
		user: "ThuyBruce052017",
		pass: "boobsicles"
	}
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./client")));
app.use(express.static(path.join(__dirname,'./bower_components')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.listen(8000, function(){
	console.log('Listening on port 8000');
})