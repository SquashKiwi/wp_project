// src/components/AddExerciseForm.jsx
import React, { useState } from 'react';

const AddExerciseForm = ({ onAddExercise }) => {
 const [name, setName] = useState('');
 const [type, setType] = useState('Running');
 const [minutes, setMinutes] = useState(0);

 const handleSubmit = (e) => {
    e.preventDefault();
    onAddExercise({ name, type, minutes });
    setName('');
    setType('Running');
    setMinutes(0);
 };

 return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Running">Running</option>
          <option value="Walking">Walking</option>
          <option value="Swimming">Swimming</option>
        </select>
      </label>
      <label>
        Minutes:
        <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
      </label>
      <button type="submit">Add Exercise</button>
    </form>
 );
};

export default AddExerciseForm;
