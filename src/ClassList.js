import React from 'react';
import StudentDetails from './StudentDetails';

const ClassList = ({ students }) => {
  return (
    <div>
      {students.map(student=><StudentDetails key={student.id} student={student}></StudentDetails>)}
    </div>
  );
};

export default ClassList;




