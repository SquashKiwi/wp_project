import React, { useState } from 'react';
import ExerciseList from './components/ExerciseList';
import AddExerciseForm from './components/AddExerciseForm';
import CurrentStats from './components/CurrentStats';
import TargetStats from './components/TargetStats';
import Tips from './components/Tips';

const App = () => {
 const [exercises, setExercises] = useState([]);
 const [currentWeight, setCurrentWeight] = useState(70); 
 const [currentCalories, setCurrentCalories] = useState(0);
 const [targetWeight, setTargetWeight] = useState(65); 
 const [targetCalories, setTargetCalories] = useState(300); 

 const handleAddExercise = (exercise) => {
    setExercises([...exercises, exercise]);
    setCurrentCalories(currentCalories + (exercise.minutes * 5));
 };

 const fitnessTips = [
  { title: 'Stay Hydrated', description: 'Drink plenty of water throughout the day to stay hydrated. Water is essential for your overall health and helps regulate body temperature, aids digestion, and transports nutrients.' },
  { title: 'Prioritize Sleep', description: 'Ensure you get enough quality sleep each night. Sleep is crucial for muscle recovery, hormone regulation, and overall well-being. Aim for 7-9 hours of sleep per night.' },
  { title: 'Include Strength Training', description: 'Incorporate strength training exercises into your fitness routine. Building muscle not only improves strength and endurance but also boosts metabolism and supports bone health.' },
  { title: 'Mix Up Your Workouts', description: 'Avoid workout plateaus by varying your exercise routine. Incorporate a mix of cardio, strength training, flexibility, and balance exercises to keep your body challenged and prevent boredom.' },
  { title: 'Listen to Your Body', description: 'Pay attention to your body\'s signals during exercise. Push yourself, but also know when to rest and recover. Overtraining can lead to injury and burnout, so prioritize rest days and recovery.' },
  { title: 'Fuel Your Body Properly', description: 'Eat a balanced diet rich in whole foods to fuel your workouts and support your fitness goals. Focus on lean proteins, complex carbohydrates, healthy fats, and plenty of fruits and vegetables.' },
  { title: 'Set Realistic Goals', description: 'Set achievable fitness goals that are specific, measurable, and realistic. Break larger goals into smaller milestones to track progress and stay motivated along the way.' },
  { title: 'Stay Consistent', description: 'Consistency is key to seeing results in your fitness journey. Make exercise a regular part of your routine, whether it\'s daily workouts, weekly classes, or scheduled gym sessions.' },
  { title: 'Warm Up and Cool Down', description: 'Always warm up before exercise to prepare your muscles and joints, and cool down afterward to aid recovery and reduce muscle soreness. Incorporate dynamic stretches and foam rolling into your routine.' },
  { title: 'Listen to Your Body', description: 'Stay mindful of any pain or discomfort during exercise. If something doesn\'t feel right, stop and reassess. Consult a fitness professional if you have any concerns or questions about your workouts.' }
];


 return (
    <div className="App">
      <h1 style={{fontSize: "40px"}}>Fitness Tracker</h1>
      <div style={{ display: 'flex', flexDirection: 'row', height: '60vh' }}>
        <div style={{ flex: 3 }}>
          <AddExerciseForm onAddExercise={handleAddExercise} />
          <ExerciseList exercises={exercises} />
        </div>
        <div style={{ flex: 2 }}>
          <CurrentStats currentWeight={currentWeight} currentCalories={currentCalories} targetCalories={targetCalories}/>
          <TargetStats targetWeight={targetWeight} targetCalories={targetCalories} />
        </div>
      </div>
      <Tips tips={fitnessTips} />
    </div>
 );
};

export default App;
