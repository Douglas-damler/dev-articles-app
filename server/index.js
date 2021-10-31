const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middlewares
app.use(cors());
app.use(express.json());

app.post('/devarticles/users', async (req, res) => {
    try {
        console.log(req.body);
        const { firstname, secondname, email, password } = req.body;
        const response = await pool.query(
            `INSERT INTO users (firstname, secondname, email, password) 
            VALUES ($1, $2, $3, $4)`, [firstname, secondname, email, password]);
        res.send('User Registered').status(204);

    } catch (error) {
       console.log(error.message);
       res.send('A user with that email address already exist'); 
    }
})

app.listen(5000, () => {
    console.log('Server listening at port 5000');
})