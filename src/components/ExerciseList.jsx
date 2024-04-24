// src/components/ExerciseList.jsx
import React from 'react';

const ExerciseList = ({ exercises }) => {
 return (
    <div>
      <h2>Exercise Log</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise.name} - {exercise.type} - {exercise.minutes} minutes</li>
        ))}
      </ul>
    </div>
 );
};

export default ExerciseList;
