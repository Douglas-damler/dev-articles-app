const express = require('express');
const userRouter = express.Router();

const authHelpers = require('../../server/auth/helpers');

userRouter.get('/user', authHelpers.loginRequired, (req, res, next) => {
    handleResponse(res, 200, 'success');
});

userRouter.get('/admin', authHelpers.adminRequired, (req, res, next) => {
    handleResponse(res, 200, 'success');
})

function handleResponse(res, code, statusMsg) {
    res.status(code).json({ status: statusMsg });
}



module.exports = userRouter;