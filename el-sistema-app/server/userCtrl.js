let app = require('./index');
const config = require('./config');

var exports = module.exports = {

    register: function(req, res){
        let db = app.get('db');
        let email = req.body.email;
        let password = req.body.password;
        console.log('registerFunction ', req.body);
        let hashed = config.hashPassword(password);
        console.log(hashed);
        config.comparePassword(password,hashed, (err, isMatch)=>{
            if(err){
                throw err;
            }
            if(isMatch){
                console.log('password matched');
            }
        })
        res.status(200).json('ok')
    },


}

exports.testDb = function (req, res) {
    let db = app.get('db');
    db.tests.test().then(results => {
        console.log(results);
        res.status(200).json(results);
    })
}

