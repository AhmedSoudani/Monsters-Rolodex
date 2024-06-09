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
      monsters : [],
      searchField : ''
    }

    console.log("constructor")
  }

  componentDidMount() {
    console.log("didMount")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((users) => {
      this.setState(() => {
        return {monsters : users}
      },
      () => {
        console.log(this.state);
      }
    )
    })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    })
  }
  

  render () {
    console.log("render");

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    console.log(filteredMonsters);
    return (
      <div className="App">
        <input 
        className='search-box' 
        type='search' 
        placeholder='search monsters' 
        onChange={onSearchChange} />
        {filteredMonsters.map((monster) => {
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
