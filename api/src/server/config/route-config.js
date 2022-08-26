(function (routesConfig) {
  'use strict';

  routesConfig.init = function (app) {
      const indexRoute = require('../routes/index');
      const authRoutes = require('../routes/auth');

      app.use('/', indexRoute);
      app.use('/auth', authRoutes);

  }
})(module.exports);