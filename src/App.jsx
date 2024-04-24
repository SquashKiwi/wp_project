// src/App.jsx
import React, { useState } from 'react';
import ExerciseList from './components/ExerciseList';
import AddExerciseForm from './components/AddExerciseForm';
import CurrentStats from './components/CurrentStats';
import TargetStats from './components/TargetStats';

const App = () => {
 const [exercises, setExercises] = useState([]);
 const [currentWeight, setCurrentWeight] = useState(70); // Example weight
 const [currentCalories, setCurrentCalories] = useState(0);
 const [targetWeight, setTargetWeight] = useState(65); // Example target weight
 const [targetCalories, setTargetCalories] = useState(2000); // Example target calories

 const handleAddExercise = (exercise) => {
    setExercises([...exercises, exercise]);
    // Update current and target stats based on the exercise
    // This is a simplified example; you'll need to implement the logic
    setCurrentCalories(currentCalories + (exercise.minutes * 100)); // Assuming 100 calories per minute
 };

 return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
        <div style={{ flex: 1 }}>
          <ExerciseList exercises={exercises} />
          <AddExerciseForm onAddExercise={handleAddExercise} />
        </div>
        <div style={{ flex: 1 }}>
          <CurrentStats currentWeight={currentWeight} currentCalories={currentCalories} />
          <TargetStats targetWeight={targetWeight} targetCalories={targetCalories} />
        </div>
      </div>
    </div>
 );
};

export default App;
