import React from 'react';
import PropTypes from 'prop-types'

const Bomb = (props) => {

    const translate = `translate(${-60}, ${-900})`;
    
    return (
        <g transform={translate} stroke-width="3px" fill="url(#bombGradient)" stroke="rgb(40,40,40)">
            <rect x="45" y="-5" width="30" height="15" ry="2"/>
            <path d="M 50 -25 L 50 -50 L 40 -50 L25 -50 L25 -25 L45 -5 M 45 10 C -40 210, 150 210, 75 10 M 70 -25 L 70 -50 L 95 -50 L95 -25 L75 -5 M 45 -5 L75 -5 L70 -25 L50 -25z" />
            <text x="38" y="110" font-family="Verdana" font-size="35" stroke={props.equation.color}>{props.equation.op}</text>
	    </g>
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