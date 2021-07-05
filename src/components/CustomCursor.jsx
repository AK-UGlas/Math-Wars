// custom cursor, inspired by Andriy Chemerynskiy:
// https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3

import React from 'react';
import { useSelector } from 'react-redux';
import styled, {keyframes} from 'styled-components';

const lockOn = keyframes`
    from {
        transform: rotate(0deg);
    }
    to { 
        transform: rotate(90deg);
    }
`;

const lockOff = keyframes`
    from {
        transform: rotate(90deg);
    }
    to {
        transform: rotate(0deg);
    }
`;

const Crosshair = styled.g`
    transform-origin: 50% 50%;
    transform-box: fill-box;
    animation: ${props => props.isHovering ? lockOn : lockOff} 0.3s linear forwards;
`;

const Cursor = (props) => {

    const hoverState = useSelector(state => state.gameState.targetHovered);
    const strokeColor = hoverState ? "rgb(255, 0 ,0)" : "#fdfdfd";
    const radius = 20;
    
    const cursorCoordinates = {
        cx: props.position.x,
        cy: props.position.y >= 0 ? 0 : props.position.y,
        outerRadius: radius,
        innerRadius: radius / 2,
    }

    const crossHairStyle = {
        strokeWidth: "2px",
        stroke: strokeColor
    }

    const cursorStyle = {
        fill: "none",
        strokeWidth: "2px",
        stroke: strokeColor
    };
    
    return (
        <Crosshair isHovering={hoverState} position={props.position}>
                <circle 
                    cx={cursorCoordinates.cx}
                    cy={cursorCoordinates.cy}
                    r={cursorCoordinates.outerRadius}
                    style={cursorStyle} 
                />
                <circle 
                    cx={cursorCoordinates.cx}
                    cy={cursorCoordinates.cy}
                    r={cursorCoordinates.innerRadius}
                    style={cursorStyle} 
                />

                <line 
                    id="top"
                    x1={cursorCoordinates.cx - cursorCoordinates.outerRadius} 
                    y1={cursorCoordinates.cy}
                    x2={cursorCoordinates.cx - cursorCoordinates.innerRadius}
                    y2={cursorCoordinates.cy}
                    style={crossHairStyle}
                />
                <line 
                    id="bottom"
                    x1={cursorCoordinates.cx + cursorCoordinates.innerRadius} 
                    y1={cursorCoordinates.cy}
                    x2={cursorCoordinates.cx + cursorCoordinates.outerRadius}
                    y2={cursorCoordinates.cy}
                    style={crossHairStyle}
                />
        </Crosshair>
    );
};

export default Cursor;