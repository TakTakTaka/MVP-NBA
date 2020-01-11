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
  }

  componentDidUpdate() {
    console.log(this.state.value)
  }

  handleChange(e) {
    this.setState({value: e.target.value});

  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e.value)
    this.props.getPlayerStats(this.state.value);
    this.setState({
      value: ''
    })
    //send value to server
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose Player:
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Player for TeamA"></input>
        <input type="submit" value="Player for TeamB"></input>
      </form>  
    )
  }
}