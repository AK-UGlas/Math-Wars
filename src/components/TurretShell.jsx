import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const TurretShell = () => {

  const firing = useSelector(state => state.gameState.firing);

  const shellStyle = {
    fill: '#777',
    stroke: '#444',
    strokeWidth: '2px',
  };
  return (
    <ellipse
      style={shellStyle}
      cx="0"
      cy="0"
      rx="16"
      ry="16"
    />
  );
};

export default TurretShell;