const express = require('express');
const authRouter = express.Router();

const authHelpers = require('../auth/helpers');
const passport = require('../auth/local');

authRouter.post('/register', (req, res, next) => {
    return authHelpers.createUser(req, res)
    .then((response) => {
        passport.authenticate('local', (err, user, info) => {
            if (user) { handleResponse(res, 200, 'success');}
        })(req, res, next);
    })
    .catch((err) => { handleResponse(res, 500, 'error')});
});

function handleResponse(res, code, statusMsg) {
    res.status(code).json({status: statusMsg});
}

module.exports = authRouter;