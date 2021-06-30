import { bombState } from "../utils/constants";
import { generateEquationElements, getRandomArrayElement } from "../utils/formulas";

const createBombs = (state) => {
    
    if ( !state.gameState.started ) return state; // game hasn't started

    const now = (new Date()).getTime();
    const { lastObjectCreatedAt, bombObjects, targetsLoaded } = state.gameState;
    
    const createNewObject = ( // a boolean
        now - (lastObjectCreatedAt).getTime() > bombState.createInterval 
        && bombObjects.length < bombState.maxBombs
        && targetsLoaded < bombState.totalBombs
    );

    if ( !createNewObject ) {
        // don't generate a new bomb object just now
        return state;
    };
    
    // create a timestamp id for the object. 
    const id = (new Date()).getTime();
    const bombObjectPosition = getRandomArrayElement(bombState.startPositions) - 60;
    const bombOperator = getRandomArrayElement(bombState.operators);

    const newBombObject = {
        position: {
            x: bombObjectPosition,
            y: bombState.bombStartYAxis,
        },
        // this object holds details of the arithmetic expression to solve
        equation: generateEquationElements(bombOperator),
        timeCreated: (new Date()).getTime(),
        fallTime: 15000,
        id,
    };

    return {
        ...state,
        // new gameState
        gameState: {
            ...state.gameState,
            // add new bomb to the bomb object array
            bombObjects: [
                ...state.gameState.bombObjects,
                newBombObject
            ], 
            lastObjectCreatedAt: new Date(),
            targetsLoaded: state.gameState.targetsLoaded + 1,
        }
    };
};

export default createBombs;