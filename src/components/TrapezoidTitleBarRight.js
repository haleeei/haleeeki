import React from 'react';
import './TrapezoidTitleBarRight.css'; // Import the updated CSS file

const TrapezoidTitleBarRight = ({ title, children, textClass }) => {
  return (
    <div className="title-bar-right flex flex-row justify-between pr-16">
      <h1 className={textClass}>{title}</h1>
      {children}
    </div>
  );
};

export default TrapezoidTitleBarRight;