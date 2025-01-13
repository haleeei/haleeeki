import React from 'react';
import './TrapezoidTitleBarRight.css'; // Import the updated CSS file

const TrapezoidTitleBarRight = ({ title }) => {
  return (
    <div className="title-bar-right">
      <h1 className="title-text-right">{title}</h1>
    </div>
  );
};

export default TrapezoidTitleBarRight;