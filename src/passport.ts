const LocalStrategy = require('passport-local').Strategy;
import mongoose from 'mongoose'

//const User = require('../models/User')
import User from './models/User';

module.exports = function (passport){
    passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        User.findOne({ email: email.toLowerCase() }, (err, user: any) => {
            if (err) { return done(err); }
            //matching the email
            if (!user) {
                return done(undefined, false, { message: `Email not register.` });
            }

            //matching the password 

            if(password == user.password)
            {
                return done(undefined, user);
            } else {
                return done(err)
            }
            
        });
    }));


    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
    
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}