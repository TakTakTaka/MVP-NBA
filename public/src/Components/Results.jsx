import React from 'react';

export function Results(props) {
  var teamA = props.teamA;
  var teamB = props.teamB;
  
  if (!props.show) {
    return <button onClick={props.toggleResults}>Show Results</button>
  }
  
  if (teamA.length === 0 || teamB.length === 0) {
    return <div> Teams not ready!</div>
  } else {
    
    var add = (accumulator, currentValue) => accumulator + currentValue;
    var scoreA = teamA.map(({pts}) => pts).reduce(add, 0);
    var scoreB = teamB.map(({pts}) => pts).reduce(add, 0);
    
    var results = scoreA === scoreB ? `Tie game! Both teams score ${scoreA} pts` : 
      scoreA > scoreB ? `Team A wins with a score of ${scoreA} pts. Team B loses with a score of ${scoreB} pts` :
      `Team B wins with a score of ${scoreB} pts. Team A loses with a score of ${scoreA} pts`
    
    
  
    return <div>{results}</div>
  }

  
}