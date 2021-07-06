import React from "react";
import {ReactComponent as LifeSymbol} from '../images/life_symbol.svg';
import { gameWidth, gameHeight } from "../utils/constants";
import styled from 'styled-components';

const Life = styled.g`
    stroke-width: 3px;
    transform: translate(${props => props.x}px, ${props => props.y}px) scale(0.2);
`;

const PlayerLife = (props) => {

    const iconStyle = {
        x: gameWidth + 100,
        y: 350 - gameHeight,
    }

    const textStyle = {
        x: gameWidth + 220,
        y: iconStyle.y + 85,
        fontFamily: '"Joti One", cursive',
        fontSize: 85,
        fill: 'rgb(255, 0, 0)',
    }

    return (
        <g >
            <Life {...iconStyle}>
                <LifeSymbol />
            </Life>
            <text {...textStyle}>
                {`x${props.lives}`}
            </text>
        </g>
    );
};

export default PlayerLife;