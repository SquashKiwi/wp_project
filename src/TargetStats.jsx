// TargetStats.js
import React from 'react';

const TargetStats = ({ targetWeight, targetCaloriesPerDay }) => {
 return (
    <div>
      <h2>Target Stats</h2>
      <p>Target Weight: {targetWeight} kg</p>
      <p>Target Calories Per Day: {targetCaloriesPerDay} calories</p>
    </div>
 );
};

export default TargetStats;
