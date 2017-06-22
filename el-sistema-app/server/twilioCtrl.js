var twilio = require('twilio');
var config = require('./config');

const accountSid = config.twilio.accountSid
    , authToken = config.twilio.authToken
    , fromNumber = config.twilio.fromNumber

var client = new twilio(accountSid, authToken);

var exports = module.exports = {}

exports.textTest = function (req, res) {
    let message = req.params.message;
    client.messages.create({
        body: message,
        to: '+18014299939',
        from: fromNumber
    })
    .then((message) => {
        res.status(200).send("Test Sucessful");
        console.log(message.sid) //prints SMS id. It isn't particularly useful so far that I see.
    })
    .catch(err=>{
        console.log(err);
    })    
}