var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt= require('bcryptjs');

// var validateEmail = function(email){
// 	var re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// 	return re.test(email);
// }

// var userSchema = new mongoose.Schema({
// 	firstName: {type:String, required: true, minlength: 2},
// 	lastName: {type: String, required: true, minlength: 2},
// 	email: {type: String, required: true, validate: validateEmail},
// 	userName: {type: String, required: true, minlength: 2},
// 	password: {type: String, required: true, minlength: 8},
// }, {timestamps: true});

// userSchema.pre('save', function(done){
// 	var user = this;
// 	if(user.password){
// 		bcrypt.genSalt(8, function(err, salt){
// 			// console.log(salt, 'shake like a salt shaker');
// 			bcrypt.hash(user.password, salt, function(err, hash){
// 				// console.log(hash, 'hash browns');
// 				user.password = hash;
// 				done();
// 			})
// 		})
// 	}
// })

// userSchema.methods.validPassword = function (password){
// 	return bcrypt.compareSync(password, this.password);
// }
// RSVP schema
var rsvpSchema = new mongoose.Schema({
	name:{type: String, required: true},
	numberAttending:{type:Number, required: true},
	guest1Name: {type: String},
	guest2Name: {type: String},
	guest3Name: {type: String},
	guest4Name: {type: String},
	guest5Name: {type: String},
	guest6Name: {type: String},
	guest7Name: {type: String},
	guest8Name: {type: String},
	guest9Name: {type: String},
	guest10Name: {type: String},

},{timestamps:true});

mongoose.model('RSVP',rsvpSchema);
