const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))


//CREATE ROUTES

//get data from API

//save data to database

//get data from server

//clear db for new game

app.listen(port, () => console.log(`NBA MVP App listening on port ${port}`))