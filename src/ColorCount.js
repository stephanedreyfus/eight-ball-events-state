import React from "react";
import './ColorCount.css';

const ColorCount = ({ count }) => {

  return (
    <div className="color-count">
      <span>Colors Seen:</span>
      <span> Green: {count.green}</span>
      <span> Golden: {count.golden}</span>
      <span> Red: {count.red}</span>
    </div>
  );
};

export default ColorCount;