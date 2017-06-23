// var app = require('./index');
const config = require('./config');
const jwt = require('jsonwebtoken');


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

    // login function
    login: function(req, res, next){
        const email = req.body.email
        let password = req.body.password
        let db = req.app.get('db');
        db.user.getUserByEmail([email]).then(user => {
            if(user[0].firstlogin){
                console.log('first-login')
                //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
                db.user.setFirstLogin([false, user[0].id]);
                return res.status(200).json({firstLogin: true})
            }
            if(user){
                //console.log('login function:', user)
                config.comparePassword(password,user[0].userpassword, (err, isMatch) => {
                    if (err){
                        throw err;
                    }
                    const token = jwt.sign(user[0], config.secret, {
                        expiresIn: 604800
                    });
                    //console.log('token ',token)
                    return res.status(200).json({
                        success: true,
                        token: 'JWT '+ token,
                        user:{
                            id: user[0].id,
                            firstname: user[0].firstname,
                            lastname: user[0].lastname,
                            email: user[0].email
                        }
                    })
                })
               
            }
        }).catch(error => {
            console.log(error)
            return res.status(404).json("User not found!")
    });
},
    changePassword: function(req, res){
        let db = req.app.get('db');
        console.log('changePassword req.body :', req.body)
        const email = req.body.email;
        let password = req.body.createPassword;
        db.user.getUserByEmail([email]).then(user => {
            if(user){
            console.log('user', user);
            password = config.hashPassword(password);
            db.user.updateUserPassword([password,user[0].id]).then(updatedUser => {
            
                if(updatedUser){
                    const token = jwt.sign(user[0], config.secret, {
                        expiresIn: 604800 //week in seconds
                    });
                    delete password;
                    return res.status(200).json({
                            success: true,
                            token: 'JWT ' +token,
                            user: {
                                id: user[0].id,
                                firstname: user[0].firstname,
                                lastname: user[0].lastname,
                                email: user[0].email
                        }
                    })
                       
                } else {
                    return res.status(401).json({
                        success: false,
                        msg: 'Wrong username/password'
                    })
                }
            }).catch(error => console.log(error));
            
        }
        
        }
        ).catch(error => console.log(error))}

}


