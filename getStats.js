var $ = require('jquery');
var request = require('request') 



//Search Player:




function playerSearch(player) {
    var url = `https://www.balldontlie.io/api/v1/players?search=${player}`

    request(url, (err, res, body) => {
        if(err){throw err}
        //assuming name is correct
        var playerId = JSON.parse(body).data[0].id;
        url = `https://www.balldontlie.io/api/v1/stats?player_ids[]=132&start_date=2020-01-01`
        // request()
            
    })
}

// https://www.balldontlie.io/api/v1/stats?player_ids[]=132&start_date=2020-01-01

// playerSearch('luka doncic')
