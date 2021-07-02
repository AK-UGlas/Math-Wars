import { MOVE_OBJECTS, START_GAME, TOGGLE_TARGET } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';
import toggleTarget from './toggleTarget';

const initialGameState = {
  started: false,
  targetSelected: null,
  targetsDestroyed: 0,
  targetsLoaded: 0,
  lives: 3,
  bombObjects: [],
  lastObjectCreatedAt: new Date(),
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
    default:
      return state;
  }
}

export default reducer;