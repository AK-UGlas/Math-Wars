import { points } from '../utils/constants';

const updateScore = (state) => {

    let score = state.gameState.score;
    const operator = state.gameState.targetSelected.equation.op;
    
    switch (operator) {
        case '+':
            score += points.add;
            break;
        case '-':
            score += points.subtract;
            break;
        case 'x':
            score += points.multiply;
            break;
        case '%':
            score += points.divide;
            break;
        default:
    };
         
    return {
        ...state,
        gameState: {
            ...state.gameState,
            score,
        }
    };
};

export default updateScore;