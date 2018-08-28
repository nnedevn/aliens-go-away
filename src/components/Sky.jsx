import React from 'react';

const Sky = () => {
  const skyStyle = {
    fill: '#39abef',
  };

  const skyWidth = 5000;
  const gameHeight = 1200;

  return (
    <rect
      style={skyStyle}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={skyWidth}
      height={gameHeight}
    ></rect>
  );
};

export default Sky;