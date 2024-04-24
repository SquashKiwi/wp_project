// CurrentStats.js
import React from 'react';

const CurrentStats = ({ currentWeight, currentCaloriesBurnt }) => {
 return (
    <div>
      <h2>Current Stats</h2>
      <p>Current Weight: {currentWeight} kg</p>
      <p>Current Calories Burnt: {currentCaloriesBurnt} calories</p>
    </div>
 );
};

export default CurrentStats;
