const express = require('express');
const app = express();
const port = 3000;
const $ = require('jquery');
const stats = require('./ballDontLieAPI/getStats.js')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//CREATE ROUTES

//post data from search
app.post('/playerStats', function(req, res) {
  stats.getPlayerStats(req.body, (stats) => {
    console.log(stats)
    res.send(stats)
  })
})

//save data to database

//get data from server

//clear db for new game

app.listen(port, () => console.log(`NBA MVP App listening on port ${port}`))