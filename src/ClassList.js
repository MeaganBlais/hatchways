import React, { Component } from 'react';

class ClassList extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            students: []
        };
    }

    componentDidMount() {
        fetch('https://www.hatchways.io/api/assessment/students')
        .then(response => response.json())
        .then(data => {
            this.setState({students: data.students});
            console.log("state", this.state.students)
        })
        .catch(error => console.log('parsing failed', error))
    }

    render() {
        let students = this.state.students
        
        return (
            <div>
                <p>STUDENTS</p>
                {students.map(student => <h4 key={student.id}>{student.firstName}</h4>)}
            </div>
        )
    }
}

export default ClassList;