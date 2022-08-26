(function() {
    'use strict';

    const express = require('express');

    const passportConfig = require('./src/config/passportConfig');
    const routesConfig = require('./src/config/routesConfig');
    const errorConfig = require('./src/config/errorConfig');


    const app = express();

    passportConfig.init(app, express);
    routesConfig.init(app);
    errorConfig.init(app);

    module.exports = app;

}());