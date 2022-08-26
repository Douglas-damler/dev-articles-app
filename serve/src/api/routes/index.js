const commentsRouter = require('./comments');
const likesRouter = require('./likes');
const postsRouter = require('./posts');
const loginRouter = require('./login');
const registerRouter = require('./register');

module.exports = {
    commentsRouter: commentsRouter,
    likesRouter: likesRouter,
    postsRouter: postsRouter,
    loginRouter: loginRouter,
    registerRouter: registerRouter
};