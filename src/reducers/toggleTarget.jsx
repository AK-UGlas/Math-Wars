const toggleTarget = (state, action) => {

    // toggle the selected target. If 
    const target = action.timeCreated === state.gameState.targetSelected ? null : action.timeCreated;
    
    console.log(action.timeCreated);
    
    return {
        ...state,
        gameState: {
            ...state.gameState,
            targetSelected: target,
        }
    }
};

export default toggleTarget