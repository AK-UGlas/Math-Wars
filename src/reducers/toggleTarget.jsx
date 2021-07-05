const toggleTarget = (state, action) => {

    let target = null;

    // this is the currently selected bomb (null if nothing selected)
    const currentTarget = state.gameState.targetSelected;

    if (currentTarget === null || currentTarget.timeCreated === action.timeCreated) {
        target = state.gameState.bombObjects.find(bomb => bomb.timeCreated === action.timeCreated);
    } 
    
    return {
        ...state,
        gameState: {
            ...state.gameState,
            targetSelected: target,
        }
    }
};

export default toggleTarget