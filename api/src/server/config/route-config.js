(function (routesConfig) {
  'use strict';

  routesConfig.init = function (app) {
    const indexRoute = require('../routes/index');
    const authRoutes = require('../routes/auth');
    const userRoutes = require('../routes/user');

    app.use('/', indexRoute);
    app.use('/auth', authRoutes);
    app.use('/', userRoutes);

  }
})(module.exports);