import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { FIRE } from '../actions';
import { turretShellSpeed } from '../utils/constants';

const firingAnim = (x, y) => keyframes`
    0% {
      transform: translate(0px, 0px);
    }

    100% {
      transform: translate(${x}px, ${y}px)
    }
`;

const MovingShell = styled.g`
    animation: ${props => (props.firing ? firingAnim(props.position.x, props.position.y) : "")} 1s linear 
`;

const TurretShell = (props) => {
 
  const dispatch = useDispatch();

  const shellStyle = {
    fill: '#777',
    stroke: '#444',
    strokeWidth: '2px',
  };

  const calculateDuration = (pos) => {
      // some trig - calculate length of hypotenuse
      const distance = Math.sqrt(pos.x ** 2 + pos.y ** 2);
      return Math.floor(distance / turretShellSpeed);
  }

  // handler function to clean up game state once target has been destroyed
  const handleHit = () => {
    //TODO consider refactor - could this be declared in 
    //a single dispatch function and passed around?
    dispatch({type: FIRE, firingState: false});
  }
  
  const dur = calculateDuration(props.targetPosition);

  return ( 
    <MovingShell position={props.targetPosition} firing={props.firing} onAnimationEnd={handleHit}>
        <ellipse
          style={shellStyle}
          cx="0"
          cy="0"
          rx="16"
          ry="16"
        />
    </MovingShell>
  );
};

export default TurretShell;