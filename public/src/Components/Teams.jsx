import React from 'react';

export function TeamA(props) {
  console.log('component Team A: ', props.team)
  var team = props.team;
  var teamList = team.map(({player, id, pts, reb, ast, blk, stl}) => 
    <li key={id}>
      <div>
        {player}
      </div>
      <div>
        pts: {pts}, reb: {reb}, ast: {ast}, blk: {blk}, stl: {stl}
      </div>
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
  var teamList = team.map(({player, _id, pts, reb, ast, blk, stl}) => 
    <li key={_id}>
      <div>
        {player}
      </div>
      <div>
        pts: {pts}, reb: {reb}, ast: {ast}, blk: {blk}, stl: {stl}
      </div>
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
