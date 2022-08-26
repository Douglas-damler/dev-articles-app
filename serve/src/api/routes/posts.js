const express = require("express");
const app = express("");

const userRouter = express.Router();
app.use('/posts', userRouter);

//get all the users
userRouter.get('/', (req, res, next) => {

});

//get a specific user
userRouter.get('/:id', (req, res, next) => {

});

//create a new user
userRouter.post('/', (req, res, next) => {

});

//update the details of an existing user
userRouter.put('/:id', (req, res, next) => {

});

//delete a user
userRouter.delete('/:id', (req, res, next) => {

});

module.exports = userRouter;