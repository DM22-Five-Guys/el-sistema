const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')// Using Massive 3.0.0
const session = require('express-session')
const cors = require('cors')
const passport = require('passport')
const config = require('./config')


const app = module.exports = express()
//-----------Variables-----------------------------------------
const port = config.port; //I set the port as 8080 because our npm start is running on port 3000. All api calls from the frontend will need to be made to localhost:8080/api. When we do our final build, we will switch the port to 3000 and update the frontend accordingly
const connection_info = config.database_info;

//---------------App.use middleware-----------------------------
app.use(express.static('../src'))
app.use(bodyParser.json())

massive(connection_info).then(instance => {
    app.set('db', instance);
})

//---------Controllers that will access the DB via Massive-------
const mainCtrl = require('./mainCtrl')
const twilioCtrl = require('./twilioCtrl')
const userCtrl = require('./userCtrl');
const nodemailerCtrl = require('./nodemailerCtrl')





//-------------------Endpoints--------------------------
app.get('/test', mainCtrl.testDb);//See mainCtrl.js for how to do functions that access the DB

app.get('/sms/:message', twilioCtrl.textTest);
app.post('/sms/bulk', twilioCtrl.bulkText);
app.post('/sms/unsubscribe', twilioCtrl.unsubscribe);

app.post('/register', userCtrl.register);
app.get('/email/:emailAddress', nodemailerCtrl.testEmail);

app.listen(port, function(){
    console.log(`Listening on ${port}.`)
})