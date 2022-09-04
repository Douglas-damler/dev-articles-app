(function (appConfig) {

  'use strict';

  // *** main dependencies *** //
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const flash = require('connect-flash');
  const morgan = require('morgan');
  const cors = require('cors');
  const nunjucks = require('nunjucks');
  const store = session.MemoryStore();

  // *** view folders *** //
  const viewFolders = [
    path.join(__dirname, '..', 'views')
  ];

  // *** load environment variables *** //
  require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });


  appConfig.init = function (app, express) {

    // *** view engine *** //
    nunjucks.configure(viewFolders, {
      express: app,
      autoescape: true
    });
    app.set('view engine', 'html');

    // *** app middleware *** //
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(cookieParser());
    app.use(express.json());
    app.use(cors({
      origin: "http://localhost:3000",
      credentials: true
    }))
    app.use(bodyParser.urlencoded({ extended: true }));
    // // uncomment if using express-session
    app.use(session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: true,
      store
    }));
    app.use(flash());
    app.use(express.static(path.join(__dirname, '..', '..', 'client')));

  };

})(module.exports);
