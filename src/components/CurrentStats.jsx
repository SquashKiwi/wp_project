import React from 'react';
import { Progress } from 'flowbite-react';


const CurrentStats = ({ currentWeight, currentCalories, targetCalories }) => {
 return (
    <div style={{borderRadius: "10px", backgroundColor: "#0dff6a0f", padding: "20px", margin: "10px", boxShadow: "5px 5px 3px #333333"}}>
      <h2>Current Stats</h2>
      <div style={{marginLeft: "20px"}}>
      <p>Weight: {currentWeight} kg</p>
      <p>Calories Burnt: {currentCalories} cal</p>
      {/* <h3>Calories Progress</h3> */}
      <Progress progress={currentCalories*100/targetCalories} textLabel="Progress: " size="lg" labelProgress labelText />
      </div>
    </div>
 );
};
 
export default CurrentStats;
