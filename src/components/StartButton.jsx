import React from 'react';
import PropTypes from 'prop-types';
import { gameWidth } from '../utils/constants';

const StartButton = (props) => {

    const yOffset = -500;

    const button = {
        x: gameWidth / -2, // half width
        y: yOffset, // minus means up (above 0)
        width: gameWidth,
        height: 150,
        rx: 10, // border radius
        ry: 10, // border radius
        style: {
        fill: 'rgb(100, 100, 100)',
        cursor: 'pointer',
        borderColor: 'rgb(0, 0, 0)'
        },
        onClick: props.onClick,
    };

    const text = {
        textAnchor: 'middle', // center
        x: 0, // center relative to X axis
        y: yOffset + 100, // 150 up
        style: {
        fontFamily: '"Joti One", cursive',
        fontSize: 60,
        fill: '#e1e1e1',
        cursor: 'pointer',
        },
        onClick: props.onClick,
    };

    return (
        <g filter="url(#shadow)">
        <rect {...button} />
        <text {...text}>
            Click To Start!
        </text>
        </g>
    );
};

StartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default StartButton;