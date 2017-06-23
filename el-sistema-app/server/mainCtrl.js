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