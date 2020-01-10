const express = require('express');
const app = express();
const port = 3000;
const $ = require('jquery');
const stats = require('./ballDontLieAPI/getStats.js')
const {savePlayerA, getTeamA, clearTeamA} = require('./database/mysqlPlayerA.js')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//CREATE ROUTES

app.get('/', function(req, res) {
  console.log('Express server loaded')
  res.end()
})

// app.get('/teamA', function(req, res) {
//   getTeamA((data) => {
//     // console.log(data);
//     res.send(data)
//   })
//   //Also get Team B. send as promises?  
// });

// app.post("/clearTeam", function (req, res) {
//   clearTeamA();
//   res.send(`TeamA cleared`)
//   res.end()
// });

//post data from search
app.post('/playerStats', function(req, res) {
  stats.getPlayerStats(req.body, (player, {data}) => {
    //data is stats over the past week. getting the first set of data (won't always be the most recent)
    var player = player.toLowerCase();
    //data extraction, can make more date specific (future)
    ({pts, reb, ast, blk, stl} = data[0])
    var playerData = {player, pts, reb, ast, blk, stl}
    // console.log(playerData)
    savePlayerA(playerData)
    res.send(stats)
    // res.end()
  })
})

app.post("/clearTeam", function (req, res) {
  clearTeamA(() => {
    res.send(`TeamA cleared`)
    res.end()
  });
});

app.get('/teamA', function(req, res) {
  getTeamA((data) => {
    // console.log(data);
    res.send(data)
  })
  //Also get Team B. send as promises?  
});

//save data to database

//get data from server

//clear db for new game

app.listen(port, () => console.log(`NBA MVP App listening on port ${port}`))