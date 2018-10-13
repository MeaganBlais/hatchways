import React from 'react';
// import Grades from './Grades'

const StudentDetails = ({ student }) => {
  return (
    <div key={student.id} className="students">
      <img className="thumbnail" src={student.pic} alt="thumbnail"/>
      <h4>{student.firstName} {student.lastName}</h4>
      <button className="collapsible"></button>
      <ul>
          <li>Email: {student.email}</li>
          <li>Company: {student.company}</li>
          <li>Skill: {student.skill}</li>
          <li>Average: {student.grades.reduce((a, b) => parseInt(a) + parseInt(b))/student.grades.length}%</li>
      </ul>
      {/* <Grades /> */}
    </div>
  );
};

export default StudentDetails;