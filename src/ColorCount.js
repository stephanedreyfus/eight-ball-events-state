import React from "react";
import './ColorCount.css';

const ColorCount = ({ seen }) => {
  return (
    <div className="color-count">
      <span>Colors Seen:</span>
      <span>Green: {seen.green}</span>
      <span>Golden: {seen.golden}</span>
      <span>Red: {seen.red}</span>
    </div>
  );
};

export default ColorCount;