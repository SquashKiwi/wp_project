import React from 'react';

const ExerciseList = ({ exercises }) => {
 return (
    <ul>
      {exercises.map((exercise, index) => (
        <li key={index}>{exercise}</li>
      ))}
    </ul>
 );
};

export default ExerciseList;