// src/components/AddExerciseForm.jsx
import React, { useState } from 'react';

const AddExerciseForm = ({ onAddExercise }) => {
 const [name, setName] = useState('');
 const [type, setType] = useState('Running');
 const [minutes, setMinutes] = useState(0);

 const handleSubmit = (e) => {
    e.preventDefault();
    if (name && (minutes!=0))
    {
      onAddExercise({ name, type, minutes });
      setName('');
      setType('Running');
      setMinutes(0);
    } else {
      alert("Invalid Inputs")
    }
 };

 return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: "30px", backgroundColor: "#171717AA", borderRadius: "10px"}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ flexBasis: '100px' }}>Name:</label>
        <input type="text" placeholder='Morning Run' value={name} onChange={(e) => setName(e.target.value)} style={{ flexGrow: 1 }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ flexBasis: '100px' }}>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ flexGrow: 1 }}>
          <option value="Running">Running</option>
          <option value="Walking">Walking</option>
          <option value="Swimming">Swimming</option>
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ flexBasis: '100px' }}>Minutes:</label>
        <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} style={{ flexGrow: 1 }} />
      </div>
      <button type="submit">Add Exercise</button>
    </form>
 );
};

export default AddExerciseForm;
