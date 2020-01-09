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
      allowNull: false
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

  PlayerA.sync({force: true}).then(()=> {
    console.log(`Table for PlayerA created`)
  })
  // var playerData = {pts, reb, ast, blk, stl}