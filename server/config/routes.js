var Message = require('./../controllers/messages.js');


module.exports = function(app){
app.post('/contactEmail', Message.contactEmail);



}

