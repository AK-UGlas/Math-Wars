import { calculateAngle } from '../utils/formulas';
import createBombs from './createBombs';

function moveObjects(state, action) {
  const mousePosition = action.mousePosition || {x: 0, y: 0};

  const newState = createBombs(state);
  
  // check if any bombs have hit the ground yet
  const bombObjects = newState.gameState.bombObjects.filter(bomb => {
     return ((new Date()).getTime() - bomb.timeCreated) < bomb.fallTime;
  });

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      bombObjects,
    },
    angle,
  };
}

export default moveObjects;