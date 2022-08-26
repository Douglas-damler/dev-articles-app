const express = require('express');
const app = express();
const pool = require('../../../src/config/DatabaseConfig');

const registerRouter = express.Router();
app.use('/register', registerRouter);

registerRouter.post('/', async (req, res, next) => {
    console.log(req.query)
    try {
        username = req.query.nickname;
        email = req.query.email;
        email_verified = req.query.email_verified;
        password = req.query.password;

        const new_user = await pool.query(`INSERT INTO users(username, email, email_verified, password, date_created)
        VALUES($1, $2, $3, $4, NOW())
        ON CONFLICT DO NOTHING`, [username, email, email_verified, password]);

        res.send(new_user);

    } catch (err) {
        console.log(err);
    }
         
});

module.exports = registerRouter;

