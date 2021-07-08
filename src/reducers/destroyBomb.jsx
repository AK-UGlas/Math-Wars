import updateScore from './updateScore';

// remove the current target 
const destroyBomb = (state) => {

    const newState = updateScore(state);

    const { bombObjects, targetSelected } = newState.gameState;

    // remove the currently targeted bomb from bombObjects
    const remainingBombs = bombObjects.filter(bomb => {
        return bomb.timeCreated !== targetSelected.timeCreated; 
    });

    return {
        ...newState,
        gameState: {
            ...newState.gameState,
            targetsDestroyed: newState.gameState.targetsDestroyed + 1,
            bombObjects: remainingBombs,
            targetSelected: null,
        }
    };
};

export default destroyBomb;