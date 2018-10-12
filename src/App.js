import React, { Component } from 'react';
import './App.css';
import ClassList from './ClassList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            HATCHWAYS APP
        </header>

        <ClassList />
      </div>
    );
  }
}

export default App;
