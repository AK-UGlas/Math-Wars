// toggle the firing state of the game. Setting to true triggers the animation for the turret shell object.
// Turret shell onAnimationEnd() callback then sets firing state back to false again
import { getCanvasElementAbsolutePosition } from "../utils/formulas";

const fireShell = (state, action) => {

    // if firing is about to start, grab the position of the current target and set that as the shell's end position

    const turretShellEndPosition = action.firingState ? getCanvasElementAbsolutePosition(`${state.gameState.targetSelected.timeCreated}`) : {x: 0, y:0};

    // grab the current position of the selected target
    return {
        ...state,
        gameState: {
            ...state.gameState,
            firing: action.firingState,
            turretShellEndPosition,
        }
    }
};

export default fireShell;
