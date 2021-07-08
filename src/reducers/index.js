import { MOVE_OBJECTS, START_GAME, TOGGLE_TARGET, HOVER, FIRE, DESTROY_TARGET } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';
import toggleTarget from './toggleTarget';
import targetHover from './targetHover';
import fireShell from './fireShell';
import destroyBomb from './destroyBomb';

const initialGameState = {
  turretShellEndPosition: {x: 0, y: 0},
  firing: false,
  started: false,
  targetHovered: false,
  targetSelected: null,
  targetsDestroyed: 0,
  targetsLoaded: 0,
  lives: 3,
  score: 0,
  bombObjects: [],
  lastObjectCreatedAt: new Date(),
  targetPosition: {x: 0, y: 0}
}

const initialState = {
  angle: 45,
  mousePosition: {x: 0, y: 0},
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    case TOGGLE_TARGET:
      return toggleTarget(state, action);
    case HOVER:
      return targetHover(state, action);
    case FIRE:
      return fireShell(state, action);
    case DESTROY_TARGET:
      return destroyBomb(state, action);
    default:
      return state;
  }
}

export default reducer;