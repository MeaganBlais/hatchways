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
            let students = data.students.map((student) => {
                // let average = {student.grades} => {student.grades}.reduce((a,b) => a + b, 0) / {student.grades}.length;
                // console.log('avg', average)
                return(
                    <div key={student.id}>
                        <img src={student.pic} alt="thumbnail"/>
                        <h4>{student.firstName} {student.lastName}</h4>
                        <ul>
                            <li>Email: {student.email}</li>
                            <li>Company: {student.company}</li>
                            <li>Skill: {student.skill}</li>
                            <li>Average: {student.grades}</li>
                        </ul>
                    </div>
                )
            })                        
            this.setState({
                students: students,
                isLoading: false
            });
            console.log("state", this.state.students)
        })
        .catch(error => console.log('parsing failed', error))
    }

    render() {
        let students = this.state.students
        
        return (
            <div>
                <p>STUDENTS</p>
                {students}
            </div>
        )
    }
}

export default ClassList;

// const Student = ({ body }) => {
//     return (
//       <div>
//         {body.map(student => {
//           const { _id, firstName, email } = student;
//           return (
//             <div key={_id}>
//               <h2>{firstName}</h2>
//               <p>{email}</p>
//               <hr />
//             </div>
//           );
//         })}
//       </div>
//     );
//   };