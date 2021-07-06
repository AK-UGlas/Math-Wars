// toggle the firing state of the game. Setting to true 
// triggers the animation for the turret shell object.
// Turret shell onAnimationEnd() callback then sets firing state back to false again

const fireShell = (state) => {
    return {
        ...state,
        gameState: {
            ...state.gameState,
            firing: !state.gameState.firing,
        }
    }
};

export default fireShell;
