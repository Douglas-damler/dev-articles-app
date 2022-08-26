(function(passportConfig) {
    'use strict';

    const path = require('path');
    const cookieParser = require('cookie-parser');
    const bodyParser = require('body-parser');
    const session = require('express-session');
    const flash = require('connect-flash');
    const morgan = require('morgan');
    const nunjucks = require('nunjucks');
    const passport = require('passport');
    const store = session.MemoryStore();

    require('dotenv').config();

    passportConfig.init = function(app, express) {
        if (process.env.NODE_ENV !== 'test') {
            app.use(morgan('dev'));
        }

        app.use(cookieParser());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));

        app.use(session({
            secret: process.env.SECRET_KEY,
            resave: false,
            cookie: { maxAge: 1000 * 60 * 60 * 24, secure: true, sameSite: "none" },
            saveUninitialized: true,
            store
        }));

        app.use(passport.initialize());
        app.use(passport.session());
        app.use(flash());
        app.use(express.static(path.join(__dirname,'..', '..')))
    };

})(module.exports);