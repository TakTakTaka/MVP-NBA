const { Sequelize} = require('sequelize');
const sequelize = new Sequelize('NBAStat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(()=> {
    console.log('Sequelize connection established, Player A ready');
  })
  .catch(err => {
    console.error(`Unable to connect to SQL database`)
  });

  const PlayerA = sequelize.define('player', {
    player: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    pts: {
      type: Sequelize.INTEGER
    },
    reb: {
      type: Sequelize.INTEGER
    },
    ast: {
      type: Sequelize.INTEGER
    },
    blk: {
      type: Sequelize.INTEGER
    },
    stl: {
      type: Sequelize.INTEGER
    },
  })

  PlayerA.sync({force: false}).then(()=> {
    console.log(`Table for PlayerA created`)
  })
  // var playerData = {pts, reb, ast, blk, stl}


  function savePlayerA (playerStats, next) {
    // var testPlayer = { player: 'luka doncic', pts: 31, reb: 13, ast: 7, blk: 1, stl: 0 }
    PlayerA.create(playerStats)
      .then(player => {
        console.log(`${player.player}'s stats have been added to the databse!`)
        next();
      })
      .catch(err => {
        console.error(err)
      })
  }

  function getTeamA(callback) {
    // console.log(callback)
    PlayerA.findAll()
      .then(players => {
        callback(players);
      })
  }

  function clearTeamA(next) {
    PlayerA.sync({force: true})
      .then(() => {
        console.log(`Player A database has been cleared`)
        next();
      })
  }

  module.exports = {savePlayerA, getTeamA, clearTeamA}

