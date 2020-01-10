import React from 'react';

export function TeamA(props) {
  console.log('component Team A: ', props.team)
  var team = props.team;
  var teamList = team.map((player) => 
    <li key={player.id}>
      {player.player}
    </li>
  )

  if(team.length === 0) {
    return (
      <div>Team A needs to choose players</div>
    )
  }

  return (
    <div>
      TeamA: 
      <ol>{teamList}</ol>
    </div>
  )
}

export function TeamB(props) {
  console.log('component Team B: ', props.team)
  var team = props.team;
  var teamList = team.map((player) => 
    <li key={player.id}>
      {player.player}
    </li>
  )

  if(team.length === 0) {
    return (
      <div>Team B needs to choose players</div>
    )
  }

  return (
    <div>
      TeamB: 
      <ol>{teamList}</ol>
    </div>
  )
}
