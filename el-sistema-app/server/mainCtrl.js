const app = require('./index');
const db = app.get('db');

var exports = module.exports = {}

exports.testDb = function (req, res) {
    let db = app.get('db');
    db.tests.test()
    .then(results => {
        console.log(results);
        res.status(200).json(results);
    }).catch((error) => {console.log(error)})
}


//---------EVENTS FUNCTIONS____________________
exports.getCurrentWeekEvents = function(req, res) {
    let db = app.get('db')
    db.events.getCurrentWeekEvents()
    .then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
}

exports.getEventsByMonth = function(req, res) {
    let db = app.get('db')
    let monthNum = req.params.num
    db.events.getEventsByMonth([monthNum])
    .then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
}

exports.getClasses = function(req, res) {
    let db = app.get('db')
    db.events.getClasses()
    .then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
}

exports.getPerformances = function(req, res) {
    let db = app.get('db')
    db.events.getPerformances()
    .then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
}




//--------USERS FUNCTIONS______________
exports.getAllUsers = function(req, res) {
    let db = app.get('db')
    db.events.getAllUsers()
    .then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
}