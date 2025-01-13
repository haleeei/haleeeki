import React from 'react';
import './TrapezoidTitleBarLeft.css'; // Import the CSS file for styling

const TrapezoidTitleBarLeft = ({ title }) => {
  return (
    <div className="title-bar-left">
      <h1 className="title-text-left">{title}</h1>
    </div>
  );
};

export default TrapezoidTitleBarLeft;