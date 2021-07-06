export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const START_GAME = 'START_GAME';
export const TOGGLE_TARGET = 'TOGGLE_TARGET';
export const HOVER = 'HOVER';
export const FIRE = 'FIRE';

export const startGame = () => ({
  type: START_GAME,
});

export const fireShell = () => ({
  type: FIRE,
});

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});

export const toggleTarget = timeCreated => ({
  type: TOGGLE_TARGET,
  timeCreated,
});

export const targetHover = hoverState => ({
  type: HOVER,
  hoverState,
});