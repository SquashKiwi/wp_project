import React, { useState } from 'react';
import ExerciseForm from './ExerciseForm';
import ExerciseList from './ExerciseList';
import CurrentStats from './CurrentStats';
import TargetStats from './TargetStats';

function App() {
 const [exercises, setExercises] = useState([]);
 const [currentWeight, setCurrentWeight] = useState(0);
 const [currentCaloriesBurnt, setCurrentCaloriesBurnt] = useState(0);
 const [targetWeight, setTargetWeight] = useState(0);
 const [targetCaloriesPerDay, setTargetCaloriesPerDay] = useState(0);

 const handleNewExercise = (exercise) => {
    setExercises([...exercises, exercise]);
 };

 return (
    <div className="App">
      <div className="top-left">
        <ExerciseList exercises={exercises} />
        <ExerciseForm onNewExercise={handleNewExercise} />
      </div>
      <div className="top-right">
        <CurrentStats
          currentWeight={currentWeight}
          currentCaloriesBurnt={currentCaloriesBurnt}
        />
      </div>
      <div className="bottom-right">
        <TargetStats
          targetWeight={targetWeight}
          targetCaloriesPerDay={targetCaloriesPerDay}
        />
      </div>
    </div>
 );
}

export default App;
