import React, { Component } from 'react';
import './App.css';
import ClassList from './ClassList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            HATCHWAYS APP
          </p>

        </header>

        <ClassList />
      </div>
    );
  }
}

export default App;
