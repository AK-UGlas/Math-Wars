export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const START_GAME = 'START_GAME';
export const TOGGLE_TARGET = 'TOGGLE_TARGET';

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});

export const startGame = () => ({
  type: START_GAME,
});

export const toggleTarget = timeCreated => ({
  type: TOGGLE_TARGET,
  timeCreated,
});