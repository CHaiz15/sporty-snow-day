import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js'
import TeamsContainer from '../TeamsContainer/TeamsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    }
  }
  addTeam = ({name, head_coach, sport}) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        id: Date.now(),
        name: name,
        head_coach: head_coach,
        sport: sport,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('http://localhost:3001/api/v1/sport-teams', options)
    .then(response => response.json())
    .then(newTeam => {this.setState({teams: [...this.state.teams, newTeam]})
    })
    .catch(error => console.log(error))
  }

  deleteTeam = (id) => {
    fetch('http://localhost:3001/api/v1/sport-teams/' + id, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(teamsData => this.setState({teams: teamsData}))
    .catch(error => console.log(error))
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/sport-teams')
    .then(response => response.json())
    .then(teams => this.setState({teams: teams}))
    .catch(error => console.log(error))
  }

  render () {
    return (
      <main className="App">
        <h1>Who is your favorite coach/team combo in sport ball history?</h1>
        <Form addTeam={this.addTeam} />
        <TeamsContainer teams={this.state.teams} deleteTeam={this.deleteTeam} />
      </main>
    )
  }
}

export default App;
