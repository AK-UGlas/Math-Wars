import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve, radiansToDegrees } from '../utils/formulas';
import styled, { keyframes } from 'styled-components';
import { turretState } from '../utils/constants';
import { useSelector } from 'react-redux';

const dashMove = (offset) => keyframes`
        to {
          stroke-dashoffset: ${offset};
        }`;

const Dash = styled.g`
    animation: ${props => dashMove(-(props.turretState.dashLength + props.turretState.dashSpace))} 0.5s linear;
    animation-iteration-count: infinite;
`;

const Turret = (props) => {

  const hoverState = useSelector(state => state.gameState.targetHovered);
  const targetSelected = useSelector(state => state.gameState.targetSelected);

  const angleDegrees = radiansToDegrees(props.rotation);
  const reciprocalAngle = (180 - angleDegrees) * (Math.PI / 180);

  const lineX = props.linePosition.x - (20 * Math.sin(reciprocalAngle) + 1);
  const lineY = props.linePosition.y - (20 * Math.cos(reciprocalAngle) + 1);

  const turretStyle = {
    fill: '#999',
    stroke: '#666',
    strokeWidth: '2px',
  };

  const transform = `rotate(${angleDegrees}, 0, 0)`;

  const traceStyle = {
    stroke: hoverState || targetSelected !== null ? "rgb(255, 0, 0)" : "rgb(255, 255, 255)",
    strokeWidth: "5px",
    strokeLinecap: "round",
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
      {props.dashVisible && 
        <Dash turretState={turretState}>
            {!props.firing && <line
                  x1={0} 
                  y1={0}
                  x2={lineX}
                  y2={lineY >= 0 ? 0 : lineY}
                  style={traceStyle}  
            />}
        </Dash> 
      }
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