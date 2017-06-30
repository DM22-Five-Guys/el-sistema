// var app = require('./index');
const config = require('./config');
const jwt = require('jsonwebtoken');
const userModel = require('./model/createUser.model')


var exports = module.exports = {

    register: function(req, res){
        let db = req.app.get('db');
        let user = Object.assign({}, userModel);
        console.log('usermodel ' ,userModel);
        let newUser = null
        if (req.body){
            //console.log(req.body)
            newUser = req.body;
            for(props in user.userModel){
                if(newUser.hasOwnProperty(props)){
                    user.userModel[props] = newUser[props]
                }
                console.log(user.userModel)
            }
            
            db.user.createUser([
                user.userModel.firstname,
                user.userModel.lastname,
                user.userModel.email,
                user.userModel.profileimg,
                user.userModel.shortbio,
                user.userModel.longbio,
                user.userModel.caneditvideos,
                user.userModel.caneditclasses,
                user.userModel.caneditperformances,
                user.userModel.caneditcontent,
                user.userModel.caneditblogs,
                user.userModel.superadmin]).then(user => {
                return res.status(200).json({
                    success: true,
                    message: 'New Volunteer has been added.'
                })

            }).catch(error => console.error(error))
        } else {
        

     
        return res.status(501).json({
            success:false,
            message: "New Volunteer has not been added."
        })
        }
       
    },

    // login function
    login: function(req, res){
        const email = req.body.email
        let password = req.body.password
        let db = req.app.get('db');
        db.user.getUserByEmail([email]).then(user => {
            if(user[0].firstlogin){
                console.log('first-login')
                //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
                db.user.setFirstLogin([false, user[0].id]);
                return res.status(200).json({
                    isLoggedIn: false,
                    success: true,
                    firstLogin: true
                })
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
                        isLoggedIn: true,
                        success: true,
                        firstLogin: false,
                        token: 'JWT '+ token,
                        user:{
                             id: user[0].id,
                             firstname: user[0].firstname,
                             lastname: user[0].lastname,
                             email: user[0].email,
                             canEditVideos: user[0].caneditvideos,
                             canEditClasses: user[0].caneditclasses,
                             canEditPerformances: user[0].caneditperformances,
                             canEditContent: user[0].caneditcontent,
                             canEditBlogs: user[0].caneditblogs,
                             superAdmin: user[0].superadmin
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
        //console.log('changePassword req.body :', req.body)
        const email = req.body.email;
        let password = req.body.createPassword;
        db.user.getUserByEmail([email]).then(user => {
            //console.log(user)
            if(!user[0].firstlogin && user[0].userpassword === req.body.password){
            //console.log('user', user);
            password = config.hashPassword(password);
            db.user.updateUserPassword([password,user[0].id]).then(updatedUser => {
            
                if(updatedUser){
                    const token = jwt.sign(user[0], config.secret, {
                        expiresIn: 604800 //week in seconds
                    });
                    delete password;
                    return res.status(200).json({
                            isLoggedIn: true,
                            success: true,
                            token: 'JWT ' +token,
                            user: {
                                id: user[0].id,
                                firstname: user[0].firstname,
                                lastname: user[0].lastname,
                                email: user[0].email,
                                canEditVideos: user[0].caneditvideos,
                                canEditClasses: user[0].caneditclasses,
                                canEditPerformances: user[0].caneditperformances,
                                canEditBlogs: user[0].caneditblogs,
                                superAdmin: user[0].superadmin
                        }
                    })
                       
                } else {
                    return res.status(401).json({
                        success: false,
                        msg: 'Wrong username/password'
                    })
                }
            }).catch(error => {
                console.log(error)
                
            });
            
        }
        
        }).catch(error => console.log(error))
    },

    getAllUsers: function(req,res){
        let db = req.app.get('db');
        //console.log(req.header);
        db.user.getAllUsers().then(users => {
        if(users){
            return res.status(200).json(users);
        } else {
            return res.status(401).json('No users found');
        }
    }).catch(err => err);
    

    }

}


