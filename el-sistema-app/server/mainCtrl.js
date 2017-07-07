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

exports.getAllEvents = function(req, res) {
    let db = app.get('db')
    db.events.getAllEvents()
    .then(results => {
        console.log(results)
        
        res.status(200).json(results)
    }).catch(err => console.log(err))
}

//-------Add-Possible-Volunteers--------

exports.addVolunteers = function(req, res){
    let db = req.app.get('db');
    const email = req.body.email;
    const name = req.body.name;
    db.volunteers.addVolunteers([email, name])
        .then((response) => {
            return res.status(200).json({
                success: true,
                message: "Thank you for registering"
            })
        })
        .catch((error) => {
            return res.status(501).json({
                success: false,
                message: "There was a problem while trying to sign-up, please try again later."
            })
        })

}

//-------Create-Content-Function--------
//ref title, contenttypeid, description, author
exports.createContent = function(req, res){
    let db = req.app.get('db')
    const author = `${req.user.firstname} ${req.user.lastname}`;
    const title = req.body.title;
    const description = req.body.description;
    const type = req.body.type
    db.content.getContentTypes([type])
        .then((type) => {
           db.content.createContent([title, type[0].id, description, author])
                .then((content) => content)
                .catch((err) => console.error(err));
            })
        .catch((err) => console.log(err))
    //console.log(req.body)

    res.status(200).json('ok')
}


//--------USERS FUNCTIONS----------------
exports.getAllUsers = function(req, res) {
    let db = app.get('db')
    db.events.getAllUsers()
    .then(results => {
        console.log(results)
        res.status(200).json(results)
    }).catch(err => console.log(err))
}