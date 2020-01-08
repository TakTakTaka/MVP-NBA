import React from 'react';
import ReactDOM from 'react-dom'
import Search from './Components/Search.jsx'
 
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
     playerA: '',
     playerB: '' 
    }

    this.getPlayerStats = this.getPlayerStats.bind(this);
  }

  //handle post request to server
  //Add name to state if player exists from API
  getPlayerStats(player) {
    
  }
  //handle state change of player A/B

  //handle getting player stats

  render() {
    return (
      <div>
        <Search />
        {/* <br></br>
        Player A Selection goes here
        <br></br>
        Player B Selection goes here */}
      </div>
    )
  }
}
 
ReactDOM.render(<App />, document.getElementById('root'));

console.log('App.jsx file has been run')