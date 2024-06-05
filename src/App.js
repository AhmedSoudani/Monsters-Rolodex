import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  /* whenever this class gets loaded run this constructor first */
  constructor() {
    /* call the underlying constructor method of any other class you're extending from */
    super();

    /* this references to this class */
    this.state = {
      /* inside of the state you enter a JSON format */
      monsters : []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      response.json();
    })
    .then((users) => console.log(users))
  }

  render () {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
          );
        })}
      </div>
    );
  };
  
}

export default App;
