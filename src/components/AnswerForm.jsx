import React, { useState, useEffect, useRef } from 'react';
import { gameWidth, gameHeight } from '../utils/constants';
import styled, {keyframes} from 'styled-components';
import { useDispatch } from 'react-redux';
import { FIRE } from '../actions';

// Fire cannon button animation
const pushButton = cy => keyframes`
    0% {
        transform: translateY(${cy}px);
        filter: drop-shadow(0px 10px 0px rgb(150, 30, 30));
    }
    50% {
        transform: translateY(${cy + 10}px);
        filter: drop-shadow(0px 0px 0px rgb(150, 30, 30));
    }
    100% {
        transform: translateY(${cy}px);
        filter: drop-shadow(0px 10px 0px rgb(150, 30, 30));
    }
`;

// Alt button animation - answer is incorrect
const shakeButton = keyframes`
    0% {transform: translate(0px, 0px)}
    15% {transform: translate(-3px, 0px)}
    29% {transform: translate(5px, 0px)}
    43% {transform: translate(-8px, 0px)}
    57% {transform: translate(8px, 0px)}
    71% {transform: translate(-5px, 0px)}
    85% {transform: translate(3px, 0px)}
    100% {transform: translate(0px, 0px)}
`;

// push button styling
const Push = styled.g`
    filter: drop-shadow(0px 10px 0px rgb(150, 30, 30));
    animation-name: ${props => (props.pressed ? (props.isCorrectAnswer ? pushButton(props.cy) : shakeButton) : "")};
    animation-duration: 300ms;
    animation-timing-function ease-in-out;
`

const AnswerForm = ({target}) => {

    const [playerAnswer, setPlayerAnswer] = useState('');
    const [pressed, setPressed] = useState(false);

    // reference to text input
    const inputRef = useRef(null);

    useEffect(() => {
        const textBox = inputRef.current;
        addEventListeners(textBox);
        return () => removeEventListeners(textBox);
    },[]);

    const dispatch = useDispatch();

    const xOffset = gameWidth + 50;
    const yOffset = 1050 - gameHeight;
    const formWidth = 300;
    const halfFormWidth = formWidth / 2;
    const equation = target === null ? `` : `${target.equation.xval} ${target.equation.op} ${target.equation.yval} = `;
    const isCorrect = target !== null && playerAnswer === target.equation.answer.toString();

    const formStyle = {
        backgroundColor: 'rgb(100, 100, 100)',
        borderColor: 'rgb(0, 0, 0)',
        borderRadius: '10px',
        borderWidth: '4px',
        borderStyle: 'solid',
        width: formWidth,
        height: 300,
    }

    const headerStyle = {
        fill: 'rgb(255, 60, 60)',
        fontFamily: '"Joti One", cursive',
        fontSize: 60,
    }

    const inputStyle = {
        fontFamily: '"Joti One", cursive', 
        fontSize: 30,
    }

    const button = {
        cx: xOffset + halfFormWidth, 
        cy: yOffset + 210, // below the answer div
        rx: Math.round(halfFormWidth * 0.8),
        ry: Math.round(halfFormWidth * 0.6),
        height: 100,
        
        style: {
            fill: 'rgb(235, 20, 20)',
            cursor: 'pointer',
            stroke: 'rgb(150, 30, 30)',
            strokeWidth: '3px',
        },
    };

    const buttonText = {
        textAnchor: 'middle',
        x: xOffset + halfFormWidth, 
        y: button.cy + 10,
        style: {
            fontFamily: '"Joti One", cursive',
            fontSize: 50,
            fill: 'rgb(245, 221, 66)',
            cursor: 'pointer',
        },
    }

    const addEventListeners = (textInput) => {
        textInput.addEventListener("keydown", onKeyDown);
    };

    const removeEventListeners = (textInput) => {
        textInput.removeEventListener("keydown", onKeyDown);
    };

    // update user answer stored in component state
    const handleInputChange = (event) => {
        setPlayerAnswer(event.target.value);
    }

    // handle Enter button keypress when text input is in focus
    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleClick();
        }
    }

    const handleClick = () => {
        setPressed(!pressed);
        if (isCorrect) {
            setPlayerAnswer('');
            dispatch({type: FIRE, firingState: true });
        };
    };

    return (
        <g>
            <text x={xOffset + 10} y={yOffset} style={headerStyle}>Solve:</text>
            <foreignObject x={gameWidth + 50} y={yOffset + 20} width={formWidth+10} height="310">
                <div style={formStyle}>
                    <label style={inputStyle}>
                        {equation}
                    </label>
                    <input id="answer-input"
                        type="text" 
                        value={playerAnswer} 
                        onChange={handleInputChange}
                        onKeyDown={onKeyDown} 
                        style={inputStyle}
                        ref={inputRef}
                    />
                </div>
            </foreignObject>
            <Push cy={button.cy + button.rx + 19}
                pressed={pressed} 
                isCorrectAnswer={isCorrect} 
                onClick={handleClick} 
                onAnimationEnd={handleClick}
            >
                <ellipse {...button} />
                <text {...buttonText} >
                    FIRE!!
                </text>
            </Push>
        </g>
    )
}

export default AnswerForm;