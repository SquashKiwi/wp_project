import React, { useState } from 'react';

const ExerciseForm = ({ onNewExercise }) => {
 const [exercise, setExercise] = useState('');
 const [category, setCategory] = useState('Running');
 const [caloriesPerMinute, setCaloriesPerMinute] = useState(0);

 const handleSubmit = (e) => {
    e.preventDefault();
    onNewExercise({ exercise, category, caloriesPerMinute });
    setExercise('');
    setCategory('Running');
    setCaloriesPerMinute(0);
 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Exercise name"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Running">Running</option>
        <option value="Walking">Walking</option>
        <option value="Swimming">Swimming</option>
      </select>
      <input
        type="number"
        value={caloriesPerMinute}
        onChange={(e) => setCaloriesPerMinute(e.target.value)}
        placeholder="Calories per minute"
      />
      <button type="submit">Add</button>
    </form>
 );
};

export default ExerciseForm;
