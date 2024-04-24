import React from 'react';

const TargetStats = ({ targetWeight, targetCalories }) => {
 return (
    <div style={{borderRadius: "10px", backgroundColor: "#0d52ff0f", padding: "20px", margin: "10px", boxShadow: "5px 5px 3px #333333"}}>
      <h2>Target Stats</h2>
      <div style={{marginLeft: "20px"}}>
        <p>Target Weight: {targetWeight} kg</p>
        <p>Target Calories: {targetCalories} cal</p>
      </div>
    </div>
 );
};

export default TargetStats;
