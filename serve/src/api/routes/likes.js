const express = require("express");
const app = express("");

const likesRouter = express.Router();
app.use('/likes', likesRouter);

//get all the users
likesRouter.get('/', (req, res, next) => {

});

//get a specific user
likesRouter.get('/:id', (req, res, next) => {

});

//create a new user
likesRouter.post('/', (req, res, next) => {

});

//update the details of an existing user
likesRouter.put('/:id', (req, res, next) => {

});

//delete a user
likesRouter.delete('/:id', (req, res, next) => {

});

module.exports = likesRouter;