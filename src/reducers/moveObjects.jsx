import { calculateAngle } from '../utils/formulas';
import createBombs from './createBombs';

function moveObjects(state, action) {
  const mousePosition = action.mousePosition || {x: 0, y: 0};

  const newState = createBombs(state);

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  return {
    ...newState,
    angle,
  };
}

export default moveObjects;