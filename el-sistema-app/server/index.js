const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive') //Lloyd, I installed massive v.3.0.0, just in case you wanted to try and use it. If you decide to just use v.2.6.1, you'll have to update the package.json
const session = require('express-session')
const cors = require('cors')
const passport = require('passport')
const config = require('./config')

const app = module.exports = express()
const port = config.port //I set the port as 8080 because our npm start is running on port 3000. All api calls from the frontend will need to be made to localhost:8080/api. When we do our final build, we will switch the port to 3000 and update the frontend accordingly
const connection_info = config.database_info;

app.use(express.static('../src'))
app.use(bodyParser.json())

massive(connection_info).then(instance => {
    app.set('db', instance);
})

const mainCtrl = require('./mainCtrl')

//app.use(session({
//    secret: //config.secret,
//    resave: //true,
//    saveUninitialized: //true,
//}))

//app.use(passport.initialize())
//app.use(passport.session())

//var corsOptions = {
//    origin: 'http://localhost:8080'
//}

//app.use(cors());

//app.use(function(req, res, next){
//    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//    res.header('Access-Control-Allow-Methods', ['GET','PUT','POST','DELETE']);
//    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//    res.header('Access-Control-Allow-Credentials', true);
//    return next();
//})

app.get('/test', mainCtrl.testDb);

app.listen(port, function(){
    console.log(`Listening on ${port}.`)
})