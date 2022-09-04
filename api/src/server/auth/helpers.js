const bycrypt = require('bcryptjs');
const knex = require('../db/connection');

function comparePass(userPassword, databasePassword) {
    return bycrypt.compareSync(userPassword, databasePassword);
}

function createUser(req, res) {
    return handleErrors(req)
        .then(() => {
            const salt = bycrypt.genSaltSync();
            const hash = bycrypt.hashSync(req.body.password, salt);

            return knex('users')
                .insert({
                    username: req.body.username,
                    password: hash,
                    email: req.body.email,
                    full_name: req.body.full_name
                })
                .returning('*');
        }).catch((err) => {
            res.status(400).json({ message: err.message });
        });

}

function loginRequired(req, res, next) {
    if (!req.user) return res.status(401).json({ status: 'You are not logged in' });
    return next();
}

function adminRequired(req, res, next) {
    if (!req.user) res.status(401).json({ status: 'Please log in' });
    return knex('users').where({ username: req.user.username }).first()
        .then((user) => {
            if (!user.admin) res.status(401).json({ statu: 'You are not an admin' });
            return next();
        })
        .catch((err) => {
            res.status(500).json({ status: 'Something went wrong!' })
        })
}

function loginRedirect(req, res, next) {
    console.log(req.user)
    if (req.user) return res.status(401).json({
        status: 'You are already logged in'
    })
    return next();
}

function handleErrors(req) {
    return new Promise((resolve, reject) => {

        return knex.select("username")
            .from("users")
            .where("username", req.body.username)
            .orWhere("email", req.body.email)
            .then(userNameList => {
                if (userNameList.length !== 0) {
                    reject({
                        message: "A user with that email or username already exists"
                    })
                }

                if (req.body.username.length < 6) {
                    reject({
                        message: 'Username must be longer than 6 characters'
                    });
                }

                else if (req.body.password.length < 6) {
                    reject({
                        message: 'Password must be longer than 6 characters'
                    });
                }

                else {
                    resolve();
                }

            }).catch((err) => {
                console.log(err);
            })
    });
}

module.exports = {
    comparePass,
    createUser,
    loginRequired,
    adminRequired,
    loginRedirect,
    handleErrors
}