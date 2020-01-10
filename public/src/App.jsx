import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import Search from './Components/Search.jsx'
import {TeamA, TeamB} from './Components/Teams.jsx'


 
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
     playerA: '',
     playerB: '' ,
     teamA: [],
     teamB: [],
     showResults: false
    }

    this.getPlayerStats = this.getPlayerStats.bind(this);
    this.getTeams = this.getTeams.bind(this);
  }

  componentDidMount() {
    this.getTeams(()=> {console.log('component mounted')})
  }

  getTeams(callback) {
    //make calls to the server to get saved data from db
    //TEST promises
    $.get('/teamA', (data) => {
   
      console.log('this is Team A', data);
      this.setState({
        teamA: data
      })

    })


    // var teamB = $.get('/getTeamA', () => console.log('got TeamB data'))
    // Promise.all([teamA, teamB])
    //   .then((team) => {
    //     console.log(team[0], team[1])
    //     callback(team[0], team[1])
    //   })
  }
  //handle post request to server
  //Add name to state if player exists from API
  getPlayerStats(player, callback) {
    var data = {player}
    $.ajax({
      type: 'POST',
      url: '/playerStats',
      data: data
    })
  }
  //handle state change of player A/B

  //handle getting player stats
  render() {
    return (
      <div>
        <Search getPlayerStats={this.getPlayerStats}/>
        <br></br>
        <div>
          <TeamA team={this.state.teamA}/>
          <TeamB team={this.state.teamB}/>
        </div>
      </div>
    )
  }
}
 
ReactDOM.render(<App />, document.getElementById('root'));

console.log('App.jsx file has been run')