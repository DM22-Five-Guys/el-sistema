var twilio = require('twilio');
var config = require('./config');

const accountSid = config.twilio.accountSid
    , authToken = config.twilio.authToken
    , fromNumber = config.twilio.fromNumber

var client = new twilio(accountSid, authToken);

var exports = module.exports = {}

function bulkTexts(numberArr, message) {
    for (let i = 0; i < numberArr.length; i++) {
        client.messages.create({
            body: message,
            to: numberArr[i],
            from: fromNumber
        })
        .then((message) => {
            console.log(`Message sent to: ${numberArr[i]}`);
        })
        .catch(err=>{
            console.log(err);
        })   
    }
}

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

exports.bulkText = function (req, res) {
    let recipients = req.body.recipients; //array of recipient phone numbers as strings hopefully in the format: '+18018675309'
    let text = req.body.message;

    for (let i = 0; i < recipients.length; i++) {
        client.messages.create({
            body: text,
            to: recipients[i],
            from: fromNumber
        })
        .then((message) => {
            console.log(`Message sent to: ${recipients[i]}`);
        })
        .catch(err=>{
            console.log(err);
        })   
    }
    res.status(200).send("Notification sent to recipients");
}

exports.getRecipList = function (req, res) {
    let db = req.app.get('db');
    console.log(req.body);
    let msg = req.body.message;
    console.log(msg)
    console.log(req.body.list)
    if (req.body.list.length === 1){
        db.notifications.get_recipients([req.body.list[0]]).then((response)=>{
            console.log(response);
            let newArr = response.map((record)=>record.phone);
            bulkTexts(newArr, msg)
            res.status(200).send("Message(s) sent.");
        })
        .catch(err=>{
            console.log(err);
        })
    } else {
        let selectArr = req.body.list.map((e)=>`typeid = ${e}`);
        let selectString = selectArr.join(' OR ');
        selectString = 'SELECT * FROM subscribers WHERE ' + selectString;
        console.log('Sting param ',selectString);
        db.run(selectString).then((response)=>{
            console.log(response);
            let newArr = response.map((record)=>record.phone);
            bulkTexts(newArr, msg)
            res.status(200).send("Message(s) sent.");
        })
        .catch(err=>{
            console.log('Error:');
            console.log(err);
        })
    }
}