(function (routesConfig) {
    'use strict';

    routesConfig.init = function (app) {
        const {
            commentsRouter,
            likesRouter,
            postsRouter,
            loginRouter,
            registerRouter
        } = require('../api/routes/index');


        app.use('/comments', commentsRouter);
        app.use('/likes', likesRouter);
        app.use('/posts', postsRouter);
        app.use('/login', loginRouter);
        app.use('/register', registerRouter);
    };


})(module.exports);