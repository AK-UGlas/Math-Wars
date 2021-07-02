import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';
import styled, { keyframes } from 'styled-components';
import { turretState } from '../utils/constants';

const dashMove = (offset) => keyframes`
        to {
          stroke-dashoffset: ${offset};
        }`;

const Dash = styled.g`
    animation: ${props => dashMove(-(props.turretState.dashLength + props.turretState.dashSpace))} 1.5s linear;
    animation-iteration-count: infinite;
`;

const Turret = (props) => {

  const turretStyle = {
    fill: '#999',
    stroke: '#666',
    strokeWidth: '2px',
  };

  const transform = `rotate(${props.rotation}, 0, 0)`;

  const traceStyle = {
    stroke: "rgb(255, 255, 255)",
    strokeWidth: "5px",
    strokeDasharray: `${turretState.dashLength} ${turretState.dashSpace}`, 
  }

  const muzzleWidth = 40;
  const halfMuzzle = 20;
  const height = 100;
  const yBasis = 70;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfMuzzle,
      y: -yBasis,
    },
    initialControlPoint: {
      x: -40,
      y: height * 1.7,
    },
    endingControlPoint: {
      x: 80,
      y: height * 1.7,
    },
    endingAxis: {
      x: muzzleWidth,
      y: 0,
    },
  };

  return (
    <g>
      {props.dashVisible && <Dash turretState={turretState}>
          <line
                x1={0} 
                y1={0}
                x2={props.mouse.x}
                y2={props.mouse.y >= 0 ? 0 : props.mouse.y}
                style={traceStyle}  
          />
      </Dash> }
      <g transform={transform}>
      
      <path
        style={turretStyle}
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfMuzzle}
        y1={-yBasis}
        x2={halfMuzzle}
        y2={-yBasis}
        style={turretStyle}
      />
    </g>
    </g>
    
  );
};

Turret.propTypes = {
  rotation: PropTypes.number.isRequired,
};

export default Turret;