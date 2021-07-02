import { calculateAngle, getCanvasPosition, getCanvasElementAbsolutePosition } from '../utils/formulas';
import createBombs from './createBombs';

function moveObjects(state, action) {
  let newMousePosition = action.mousePosition || {x: 0, y: 0};

  const newState = createBombs(state);
  
  // check if any bombs have hit the ground yet
  const bombObjects = newState.gameState.bombObjects.filter(bomb => {
     return ((new Date()).getTime() - bomb.timeCreated) < bomb.fallTime;
  });

  // is there a selected bomb?
  const activeBombs = bombObjects.filter(bomb => {
    return bomb.timeCreated === state.gameState.targetSelected;
  });

  if (activeBombs.length === 1) {
    const midpoint = getCanvasElementAbsolutePosition(`${state.gameState.targetSelected}`)
    newMousePosition = getCanvasPosition(midpoint.x, midpoint.y);
  }
  
  const { x, y } = newMousePosition;
  const angle = calculateAngle(0, 0, x, y);

  return {
    ...newState,
    mousePosition: newMousePosition,
    gameState: {
      ...newState.gameState,
      bombObjects,
      targetSelected: activeBombs.length !== 1 ? null : state.gameState.targetSelected,
    },
    angle,
  };
}

export default moveObjects;