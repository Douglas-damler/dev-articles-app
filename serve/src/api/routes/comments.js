const express = require("express");
const app = express("");

const commentsRouter = express.Router();
app.use('/comments', commentsRouter);

//get all the comments for a specific article
commentsRouter.get('/:', (req, res, next) => {

});

//get a specific user
commentsRouter.get('/:id', (req, res, next) => {

});

//create a new comment
commentsRouter.post('/', (req, res, next) => {

});

//update the details of an existing user
commentsRouter.put('/:id', (req, res, next) => {

});

//delete a user
commentsRouter.delete('/:id', (req, res, next) => {

});

module.exports = commentsRouter;