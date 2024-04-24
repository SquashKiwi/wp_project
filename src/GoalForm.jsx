import React, { useState } from 'react';

const GoalForm = ({ onNewGoal }) => {
 const [goal, setGoal] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    onNewGoal(goal);
    setGoal('');
 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Set a goal"
      />
      <button type="submit">Set Goal</button>
    </form>
 );
};

export default GoalForm;
