import React from 'react';
import { gameWidth, gameHeight } from '../utils/constants';

const AnswerForm = (props) => {
    return (
        <foreignObject x={gameWidth + 50} y={700 - gameHeight} width="200" height="125">
            <div>
                <input type="number" />
            </div>
        </foreignObject>
    )
}

export default AnswerForm;