var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playerB', { useNewUrlParser: true, useUnifiedTopology: true });


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`connected to mongodb`)
  // we're connected!
});

var Player = new mongoose.Schema({
  player: {
    type: String,
    required: true,
    unique: true
  },
  pts: {
    type: Number
  },
  reb: {
    type: Number
  },
  ast: {
    type: Number
  },
  blk: {
    type: Number
  },
  stl: {
    type: Number
  }
})

var PlayerB = mongoose.model('PlayerB', Player)


function savePlayerB (playerStats, next) {
  var playerB = new PlayerB(playerStats);
  playerB.save((err, player) => {
    // console.log(player)
    // console.log('player should be added to mongodb')
    // console.log(`${player.player}'s stats have been added to the databse`);
    next();
  })

}



function getTeamB (callback) {
  PlayerB.find((err, data) => {
    // console.log('mongodb data: ', data);
    callback(data)
  })
}

function clearTeamB(next) {
  PlayerB.deleteMany({pts: {$gte: 0}}, () => {
    // console.log('should delete all in mongodb')
    next()
  })
}

module.exports = {savePlayerB, getTeamB, clearTeamB}