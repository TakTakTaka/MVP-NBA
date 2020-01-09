const express = require('express');
const app = express();
const port = 3000;
const $ = require('jquery');
const stats = require('./ballDontLieAPI/getStats.js')
const {savePlayerA, findPlayerA, clearTablesA} = require('./database/mysqlPlayerA.js')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//CREATE ROUTES

//post data from search
app.post('/playerStats', function(req, res) {
  stats.getPlayerStats(req.body, (player, {data}) => {
    //data is stats over the past week. getting the first set of data (won't always be the most recent)
    var player = player.toLowerCase();
    ({pts, reb, ast, blk, stl} = data[0])
    var playerData = {player, pts, reb, ast, blk, stl}
    console.log(playerData)
    savePlayerA(playerData)
    

    res.send(stats)
  })
})

//save data to database

//get data from server

//clear db for new game

app.listen(port, () => console.log(`NBA MVP App listening on port ${port}`))