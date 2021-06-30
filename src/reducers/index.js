import { MOVE_OBJECTS, startGame, START_GAME } from '../actions';
import moveObjects from './moveObjects';

const initialGameState = {
  started: false,
  targetsDestroyed: 0,
  targetsLoaded: 0,
  lives: 3,
  bombObjects: [],
  lastObjectCreatedAt: new Date(),
}

const initialState = {
  angle: 45,
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    default:
      return state;
  }
}

export default reducer;