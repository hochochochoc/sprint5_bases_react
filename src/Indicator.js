import React from 'react';
import './index.css';

const Indicator = ({ steps, currentStep, setStep }) => {
  return (
    <div className="indicator-wrapper">
      {Array.from({ length: steps }).map((_, index) => (
        <div
          key={index}
          className={`dot ${index === currentStep ? 'active' : ''}`}
          onClick={() => setStep(index)}
          style={{ cursor: 'pointer' }} // Add cursor pointer style to indicate clickability
        />
      ))}
    </div>
  );
};

export default Indicator;