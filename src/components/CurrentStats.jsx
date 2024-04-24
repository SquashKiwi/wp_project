// src/components/CurrentStats.jsx
import React from 'react';

const CurrentStats = ({ currentWeight, currentCalories }) => {
 return (
    <div>
      <h2>Current Stats</h2>
      <p>Weight: {currentWeight} kg</p>
      <p>Calories Burnt: {currentCalories} cal</p>
    </div>
 );
};

export default CurrentStats;
