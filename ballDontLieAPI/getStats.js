var $ = require('jquery');
var request = require('request') 



//Search Player:
function getPlayerStats({player}, callback) {
    var url = `https://www.balldontlie.io/api/v1/players?search=${player}`

    request(url, (err, res, body) => {
        if(err){throw err}
        //assuming name is correct
        var playerId = JSON.parse(body).data[0].id;
        var d = new Date
        d.setDate(d.getDate()-7).toISOString
        var weekDate = JSON.stringify(d).slice(0,11);

        url = `https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}&start_date=${weekDate}`
        request(url, (err, res, body) => {
            if(err){throw err}
            var stats = JSON.parse(body)
            // console.log(`Player selected ${player} has ID ${playerId} and the following stats:`, stats )
            callback(stats);
        });
    })
}

module.exports.getPlayerStats = getPlayerStats;
