import React from 'react';
import { skyAndGroundWidth, gameHeight } from '../utils/constants';

const Sky = () => {
  const skyStyle = {
    fill: "url(#skyGradient)",
  };
  
  return (
    <rect
      style={skyStyle}
      x={skyAndGroundWidth / -2}
      y={-gameHeight}
      width={skyAndGroundWidth}
      height={gameHeight}
    />
  );
};

export default Sky;