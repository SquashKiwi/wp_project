// src/components/TargetStats.jsx
import React from 'react';

const TargetStats = ({ targetWeight, targetCalories }) => {
 return (
    <div>
      <h2>Target Stats</h2>
      <p>Target Weight: {targetWeight} kg</p>
      <p>Target Calories Per Day: {targetCalories} cal</p>
    </div>
 );
};

export default TargetStats;
