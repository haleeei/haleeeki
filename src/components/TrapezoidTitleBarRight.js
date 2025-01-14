import React from 'react';
import './TrapezoidTitleBarRight.css'; // Import the updated CSS file

const TrapezoidTitleBarRight = ({ title, onButtonClick }) => {
  return (
    <div className="title-bar-right">
      <h1 className="title-text-right">{title}</h1>
      <button className="title-button" onClick={onButtonClick}>
        >
      </button>
    </div>
  );
};

export default TrapezoidTitleBarRight;