var app = require('./index');
var db = app.get('db');

var exports = module.exports = {}

exports.testDb = function (req, res) {
    let db = app.get('db');
    db.tests.test().then(results => {
        console.log(results);
        res.status(200).json(results);
    }).catch((error) => {console.log(error)})
}