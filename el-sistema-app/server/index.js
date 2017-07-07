const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')// Using Massive 3.0.0
const session = require('express-session')
const cors = require('cors')
const passport = require('passport')
const config = require('./config')



const app = module.exports = express()

// var corsOptions= {
//     origin: 'http://localhost:3000'}
app.use(cors());

// app.use(function(req, res, next){

//    res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
//    res.header('Access-Control-Allow-Methods', ['GET','PUT','POST','DELETE']);
//    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//    res.header('Access-Control-Allow-Credentials', true);
//    return next();
// })


//-----------Variables-----------------------------------------
const port = config.port; //I set the port as 8080 because our npm start is running on port 3000. All api calls from the frontend will need to be made to localhost:8080/api. When we do our final build, we will switch the port to 3000 and update the frontend accordingly
const connection_info = config.database_info;

//---------------------------S3--------------------------------

// const aws = require('aws-sdk')
//     , fs = require('fs')
//     , S3FS = require('s3fs')

// var s3fsInstance = new S3FS('personalprojectmedia', {
//     accessKeyId: config.aws.accessKeyId,
//     secretAccessKey: config.aws.sectretAccess
// })

// s3fsInstance.create();

//---------------App.use middleware-----------------------------
app.use(express.static('../src'))
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());



massive(connection_info).then(instance => {
    app.set('db', instance);
    require('./passport')(passport);
})


//---------Controllers that will access the DB via Massive-------

const mainCtrl = require('./mainCtrl')
const twilioCtrl = require('./twilioCtrl')
const userCtrl = require('./userCtrl');

const paymentCtrl = require('./model/paymentCtrl');

const blogCtrl = require('./blogCtrl');

//const nodemailerCtrl = require('./nodemailerCtrl')







//-------------------Endpoints--------------------------
app.get('/test', mainCtrl.testDb);//See mainCtrl.js for how to do functions that access the DB


//--------------------Twilio----------------------------
app.get('/sms/:message', twilioCtrl.textTest);
// app.post('/sms/bulk', twilioCtrl.bulkText);
app.post('/sms/bulk', twilioCtrl.getRecipList);

//--------------------NodeMailer------------------------
//app.post('/register', userCtrl.register);
//app.get('/email/:emailAddress', nodemailerCtrl.testEmail);


//--------------------Database--------------------------
app.get('/api/events/week', mainCtrl.getCurrentWeekEvents)
app.get('/api/events/weekclasses', mainCtrl.getClassesByWeek)
app.get('/api/events/month/:num', mainCtrl.getEventsByMonth)
app.get('/api/events/classes', mainCtrl.getClasses)
app.get('/api/events/performances', mainCtrl.getPerformances)
app.get('/api/events/', mainCtrl.getAllEvents)

app.get('/api/users', mainCtrl.getAllUsers)

//---------------------Blog----------------------------
app.post('/blog/add', blogCtrl.addBlog);

//---------------------Create-Content------------------

app.post('/create-content', passport.authenticate('jwt', {session: false}), mainCtrl.createContent)

//---------------------Volunteer-Signup-----------------

app.post('/volunteer-signup', mainCtrl.addVolunteers)

//------------------Login/Auth--------------------------

app.post('/register', passport.authenticate('jwt', {session:false}), userCtrl.register);

app.post('/login', userCtrl.login);

app.post('/update-password', userCtrl.changePassword);

app.post('/new-test', (req,res) => { res.status(200).json('ok')})

// end point for testing
app.get('/users', passport.authenticate('jwt', {session:false}), userCtrl.getAllUsers);

// testing stripe for donations

app.post('/donate', paymentCtrl.charge)


//------------------S3----------------------
// app.post('/images', (req,res) => {
//     var file = req.files;
//     // var file = req.files.null;
//     // console.log('--------------------', file.path);
//     var stream = fs.createReadStream(file.path);
//     s3fsImp.bucket = 'personalprojectmedia/images';
//     return s3fsInstance.writeFile(file.originalFilename, stream).then(function(){
//         fs.unlink(file.path, function(err){
//             if(err){
//                 console.log(err);
//             }
//         })
//         res.send('POSTED MEDIA!');
//     });
// })


app.listen(port, function(){
    console.log(`Listening on ${port}.`)
})