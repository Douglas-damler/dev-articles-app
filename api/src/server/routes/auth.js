const express = require('express');
const authRouter = express.Router();

const authHelpers = require('../auth/helpers');
const passport = require('../auth/local');

authRouter.post('/register', authHelpers.loginRedirect, (req, res, next) => {
    return authHelpers.createUser(req, res)
        .then((response) => {
            passport.authenticate('local', (err, user, info) => {
                if (user) { handleResponse(res, 200, 'success'); }
                if (err) { handleResponse(res, 500, 'User already exists') }
            })(req, res, next);
        })
        .catch((err) => { handleResponse(res, 500, err) });
});

function handleResponse(res, code, statusMsg) {
    res.status(code).json({ message: statusMsg });
}

authRouter.post('/login', authHelpers.loginRedirect, (req, res, next) => {
    passport.authenticate("local", (err, user, failureDetails) => {
        if (err) {

            return next(err);
        }

        if (!user) {
            handleResponse(res, 401, 'Wrong username or password!')
            return;
        }
        
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            req.user = user
            handleResponse(res, 200, 'success')
        });
    })(req, res, next);
});

authRouter.get('/logout', authHelpers.loginRequired, (req, res, next) => {
    req.logOut();
    handleResponse(res, 200, 'success');
})

module.exports = authRouter;