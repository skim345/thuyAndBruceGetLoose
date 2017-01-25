var Message = require('./../controllers/messages.js');


module.exports = function(app){
app.post('/rsvpForm',Message.rsvpForm);
	

}

