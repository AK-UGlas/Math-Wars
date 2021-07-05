import React, { useState } from 'react';
import { gameWidth, gameHeight } from '../utils/constants';

const AnswerForm = ({target}) => {

    const [playerAnswer, setPlayerAnswer] = useState(0);

    const xOffset = gameWidth + 50;
    const yOffset = 900 - gameHeight;
    const formWidth = 300;
    const halfFormWidth = formWidth/2;
    const equation = target === null ? `` : `${target.equation.xval} ${target.equation.op} ${target.equation.yval} = `

    const formStyle = {
        backgroundColor: 'rgb(100, 100, 100)',
        borderColor: 'rgb(0, 0, 0)',
        borderRadius: '10px',

    }

    const headerStyle = {
        fill: 'rgb(255, 60, 60)',
        fontFamily: '"Joti One", cursive',
        fontSize: 60,
    }

    const button = {
        cx: xOffset + halfFormWidth, 
        cy: yOffset + 230, // below the answer div
        rx: Math.round(halfFormWidth * 0.8),
        ry: Math.round(halfFormWidth * 0.5),
        height: 100,
        style: {
            fill: 'rgb(255, 40, 40)',
            cursor: 'pointer',
            stroke: 'rgb(0, 0, 0)',
            strokeWidth: '3px',
        },
    };

    const buttonText = {
        textAnchor: 'middle',
        x: xOffset + halfFormWidth, 
        y: yOffset + 260,
        style: {
            fontFamily: '"Joti One", cursive',
            fontSize: 60,
            fill: 'rgb(245, 221, 66',
            cursor: 'pointer',
        },
    }

    // update user answer stored in component state
    function handleInputChange(event){
        setPlayerAnswer(event.target.value)
    }

    return (
        <g>
            <text x={xOffset + 10} y={yOffset} style={headerStyle}>Solve:</text>
            <foreignObject x={gameWidth + 50} y={yOffset + 100} width={formWidth} height="150">
                <div style={formStyle}>
                    <label style={{fontFamily: '"Joti One", cursive', fontSize: 30}}>
                        {equation}
                    </label>
                    <input type="text" value={playerAnswer} onChange={handleInputChange} 

                    />
                </div>
            </foreignObject>
            <ellipse {...button} />
            <text {...buttonText} >
                FIRE!!
            </text>
        </g>
    )
}

export default AnswerForm;