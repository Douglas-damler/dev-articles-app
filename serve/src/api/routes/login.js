const express = require("express");
const app = express("");
const LocalStrategy = require('passport-local').Strategy;
const { findByUsername, findById } = require('../helpers/db/users');
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

const loginRouter = express.Router();

passport.serializeUser((user, done) => {
    done(null, user.uid);
});

// Complete the deserializeUser function below:
passport.deserializeUser((id, done) => {
    findById(id, function (err, user) {
        if (err) return done(err);
        done(null, user);
    });
});

passport.use(new LocalStrategy(
    function async (username, password, done) {
        // Look up user in the db
        findByUsername(username, (err, user) => {
            // If there's an error in db lookup, 
            // return err callback function
            if (err) return done(err);

            // If user not found, 
            // return null and false in callback
            if (!user) return done(null, false);

            // If user found, but password not valid, 
            // return err and false in callback
            if (user.password != password) return done(null, false);

            // If user found and password valid, 
            // return the user object in callback
            return done(null, user)
        });
    })
);

app.use('/login', loginRouter);
loginRouter.post('/', async (req, res, next) => {
    await passport.authenticate("local", (err, user) => {
        console.log(user)
        if (err) throw err;
        if (!user) res.send("No user Exists");

        else {
            req.logIn(user, err => {
                if (err) throw err;
                // res.send("Successfully Authenticated");
            })
        }

    })(req, res, next)
})


module.exports = loginRouter;