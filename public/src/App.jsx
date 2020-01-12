import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import {SelectB, Search} from './Components/Search.jsx'
import {TeamA, TeamB} from './Components/Teams.jsx'
import {Results} from './Components/Results.jsx'


 
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
    this.clearData = this.clearData.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  componentDidMount() {
    this.getTeams(()=> {console.log('component mounted')})
  }

  showResults(e) {
    e.preventDefault();
    this.setState({
      showResults: !this.state.showResults
    })
  }

  getTeams() {
    //make calls to the server to get saved data from db
    //TEST promises
    $.get('/teamA', ({A, B}) => {
   
      console.log('this is Team A', A);
      console.log('this is Team B', B);
      this.setState({
        teamA: A,
        teamB: B
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
  getPlayerStats(player, team) {
    var data = {player, team}
    $.ajax({
      type: 'POST',
      url: '/playerStats',
      data: data,
      success: this.getTeams
    })
  }

  clearData(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/clearTeam',
      success: this.getTeams
    });
    this.setState({
      showResults: false
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
          <br></br>
          <Results toggleResults={this.showResults} show={this.state.showResults} teamA={this.state.teamA} teamB={this.state.teamB}/>
          {/* <button onClick={this.showResults}>Show Results</button> */}
        </div>
        <br></br>
        <form onSubmit={this.clearData}>
          <input type="submit" value="Start New Game"></input>
        </form>
      </div>
    )
  }
}
 
ReactDOM.render(<App />, document.getElementById('root'));

console.log('App.jsx file has been run')