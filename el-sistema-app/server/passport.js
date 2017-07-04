const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config');
const app = require('./index.js');



module.exports = function(passport){
        const db = app.get('db');
        
        let opts = {}
        opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
        opts.secretOrKey = config.secret;
        passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
            //console.log('passport function jwt ', jwt_payload);
            db.user.getUserById([jwt_payload.id])
                .then(user => {
                    if(user){
                        //console.log('passport User: ', user[0])
                        return done(null, user[0])
                    }else{
                        return done(null, false)
                    }
                }).catch(error => {
                    console.log('catch ', error);
                })
     
        }))
    }