const pool = require('../../../config/DatabaseConfig');

const findByUsername = (username, cb) => {
    process.nextTick(function () {
        pool.connect()
            .then((client) => {
                client.query(`SELECT * from users where username = $1`, [username])
                    .then(res => {
                        if (res.rows) {
                            return cb(null, res.rows[0]);
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            })
            .catch(err => {
                console.error(err);
            });
        return cb(null, null);
    });
};

const findById = async (id, cb) => {
    process.nextTick(function () {
        pool.connect()
            .then((client) => {
                client.query(`SELECT * from users where id = $1`, [id])
                    .then(res => {
                        if (res.rows) {
                            cb(null, res.rows[0]);
                        }
                        else {
                            cb(new Error("User " + id + " does not exist"));
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }).catch((err) => {
                console.log(err)
            })
            
    });
};



module.exports = {
    findByUsername: findByUsername,
    findById: findById
}

