import { calculateAngle, getCanvasElementAbsolutePosition } from '../utils/formulas';
import createBombs from './createBombs';

function moveObjects(state, action) {
  const newMousePosition = action.mousePosition || {x: 0, y: 0};

  let activeBombs = [];
  const newState = createBombs(state);
  
  // check if any bombs have hit the ground yet
  const bombObjects = newState.gameState.bombObjects.filter(bomb => {
     return ((new Date()).getTime() - bomb.timeCreated) < bomb.fallTime;
  });

  const remainingLives = bombObjects.length < newState.gameState.bombObjects.length ? newState.gameState.lives - 1 : newState.gameState.lives;

  // is there a selected bomb?
  if (state.gameState.targetSelected !== null) {
    // if so, is it still active
    activeBombs = bombObjects.filter(bomb => {
      return bomb.timeCreated === state.gameState.targetSelected.timeCreated;
    });
  };
  
  const targetPosition = activeBombs.length === 1 ? getCanvasElementAbsolutePosition(`${state.gameState.targetSelected.timeCreated}`) : newMousePosition;
  const { x, y } = targetPosition;
  const angle = calculateAngle(0, 0, x, y);

  return {
    ...newState,
    mousePosition: newMousePosition,
    gameState: {
      ...newState.gameState,
      lives: remainingLives,
      targetPosition,
      bombObjects,
      targetSelected: activeBombs.length !== 1 ? null : state.gameState.targetSelected,
    },
    angle,
  };
}

export default moveObjects;