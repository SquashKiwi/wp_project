import React from 'react';

const ExerciseList = ({ exercises }) => {
 return (
    <div style={{padding: "30px", backgroundColor: "#171717AA", borderRadius: "10px", marginTop : "15px"}}>
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
