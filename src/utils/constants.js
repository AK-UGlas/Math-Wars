// very wide to provide as full screen feeling
export const skyAndGroundWidth = 5000;
export const gameHeight = 1400;
export const gameWidth = 800;
export const turretShellSpeed = 200; //pixels per second

export const bombState = {
    createInterval: 5000,
    totalBombs: 10,
    maxBombs: 4,
    bombStartYAxis: -gameHeight,
    operators: ['+', '-', 'x', '%'],
    startPositions: [-450, -300, -150, 150, 300, 450],
}

export const turretState = {
    dashLength: 25,
    dashSpace: 40,
}

export const points = {
    add: 25,
    subtract: 50,
    multiply: 100,
    divide: 200,
}