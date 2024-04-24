import React, { useState } from 'react';

const Tips = ({ tips }) => {
 const [currentIndex, setCurrentIndex] = useState(0);

 const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % tips.length);
 };

 const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + tips.length) % tips.length);
 };

 return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {/* <button onClick={handlePrev}>Previous</button> */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
        {tips.map((tip, index) => (
          <div key={index} style={{ flex: '0 0 auto', width: '33.33%', scrollSnapAlign: 'start', padding: '10px' }}>
            <div style={{ border: '1px solid #ccc', padding: '20px', boxSizing: 'border-box' }}>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button onClick={handleNext}>Next</button> */}
    </div>
 );
};

export default Tips;
