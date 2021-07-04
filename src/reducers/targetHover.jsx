const targetHover = (state, action) => {
    return {
        ...state,
        gameState: {
            ...state.gameState,
            targetHovered: action.hoverState,
        }
    }
};

export default targetHover