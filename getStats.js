var $ = require('jquery');
var request = require('request') 



//Search Player:




function playerSearch(player) {
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
            console.log(`Player selected ${player} has ID ${playerId} and the following stats:`, stats )
            
            return stats
        })
        
            
    })
}

// https://www.balldontlie.io/api/v1/stats?player_ids[]=132&start_date=2020-01-01

playerSearch('luka doncic')
