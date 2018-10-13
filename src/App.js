import React, { Component } from 'react';
import './App.css';
import ClassList from './ClassList'
import SearchBar from './SearchBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        students: [],
        input: '',
        searchResults: []
    };
    this.onInputChange = this.onInputChange.bind(this);
}

  componentDidMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
    .then(response => response.json())
    .then(data => {
        const students = data.students;
        this.setState({ students });
      })
  }

  onInputChange = (event) => {
    const input = event.target.value.toLowerCase();
    const { students } = this.state;
    const searchResults = students.filter(student =>
        student.firstName.toLowerCase().includes(input) || student.lastName.toLowerCase().includes(input)
    )
    console.log(input);
    this.setState({
        input: event.target.value,
        searchResults
    })
  }

  render() {
    return (
      <div className="App">
        <div className="ClassList">
        <SearchBar input={this.state.value} onInputChange={this.onInputChange}/>
        {
          this.state.input.length > 0 ? (
            <ClassList students={this.state.searchResults}/>
          ) : (
            <ClassList students={this.state.students}/>
          )
        }
      </div>
      </div>
    );
  }
}

export default App;
