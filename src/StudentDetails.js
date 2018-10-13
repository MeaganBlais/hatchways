import React from 'react';

const StudentDetails = ({ student }) => {
  return (
    <div key={student.id} className="students">
      <img className="thumbnail" src={student.pic} alt="thumbnail"/>
      <h4>{student.firstName} {student.lastName}</h4>
      <ul>
          <li>Email: {student.email}</li>
          <li>Company: {student.company}</li>
          <li>Skill: {student.skill}</li>
          <li>Average: {student.grades.reduce((a, b) => parseInt(a) + parseInt(b))/student.grades.length}%</li>
      </ul>
    </div>
  );
};

export default StudentDetails;