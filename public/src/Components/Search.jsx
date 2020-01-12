import React from 'react';

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      playerA: '',
      playerB: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitB = this.handleSubmitB.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state.value)
  }

  handleChange(e) {
    this.setState({value: e.target.value});

  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e.target)
    this.props.getPlayerStats(this.state.value, 'teamA');
    this.setState({
      value: ''
    })
    //send value to server
  }

  handleSubmitB(e) {
    console.log(this.state.value)
    e.preventDefault()
    this.props.getPlayerStats(this.state.value, 'teamB');
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose Player:
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type="submit" name='teamA' value="Player for TeamA"></input>
        {/* <input type="submit" name='teamB' value="Player for TeamB"></input> */}
        <button onClick={this.handleSubmitB} name='teamB'>Player for Team B</button>
      </form>  
    )
  }
}