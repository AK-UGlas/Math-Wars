import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fall = (x, y) => keyframes`
        0% {
           transform: translate(${x}px, ${y}px);
        }
        100% {
            transform: translate(${x}px, -95px);
        }`;

const Move = styled.g`
    &:hover {
            stroke: white;
            cursor: crosshair;
            pointer-events: all;
            filter: drop-shadow(0 0 20px rgb(255, 255, 255));
    }
    animation: ${props => fall(props.position.x, props.position.y)} ${props => props.fallTime}ms linear;
`;

const Bomb = (props) => {

    const handleClick = () => {
        props.toggleTarget(props.timeCreated);
    }
    
    const bombModel = 
        <g onClick={handleClick} filter={props.selected ? "url(#bombShadow)" : ""} className="bombBody" strokeWidth="2px" fill="url(#bombGradient)" stroke="rgb(50, 50, 50)">
            <rect x="45" y="-5" width="30" height="15" ry="2"/>
            <path d="M 50 -25 L 50 -50 L 40 -50 L25 -50 L25 -25 L45 -5 M 45 10 C -40 210, 150 210, 75 10 M 70 -25 L 70 -50 L 95 -50 L95 -25 L75 -5 M 45 -5 L75 -5 L70 -25 L50 -25z" />
            <text x="38" y="110" fontFamily="Verdana" fontSize="35" stroke={props.equation.color}>{props.equation.op}</text>
        </g>

    return (
        <Move position={props.position} fallTime={props.fallTime}>
            {bombModel}
        </Move>
    );
};

Bomb.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
    equation: PropTypes.shape({
        xval: PropTypes.number.isRequired,
        yval: PropTypes.number.isRequired,
        result: PropTypes.number.isRequired,
        op: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
};

export default Bomb;