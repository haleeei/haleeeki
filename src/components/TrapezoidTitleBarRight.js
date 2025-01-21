import React from 'react';
import './TrapezoidTitleBarRight.css'; // Import the updated CSS file

const TrapezoidTitleBarRight = ({ title, children }) => {
  return (
    <div className="title-bar-right flex flex-row justify-between pr-16">
      <h1 className="title-text-right">{title}</h1>
      {children}
    </div>
  );
};

export default TrapezoidTitleBarRight;