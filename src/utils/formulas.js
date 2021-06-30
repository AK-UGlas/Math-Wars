export const pathFromBezierCurve = (cubicBezierCurve) => {
    const {
      initialAxis, initialControlPoint, endingControlPoint, endingAxis,
    } = cubicBezierCurve;
    return `
      M ${initialAxis.x} ${initialAxis.y}
      c ${initialControlPoint.x} ${initialControlPoint.y}
      ${endingControlPoint.x} ${endingControlPoint.y}
      ${endingAxis.x} ${endingAxis.y}
    `;
  };

export const radiansToDegrees = radians => ((radians * 180) / Math.PI);

// https://math.stackexchange.com/questions/714378/find-the-angle-that-creating-with-y-axis-in-degrees
export const calculateAngle = (x1, y1, x2, y2) => {
    if (x2 >= 0 && y2 >= 0) {
        return 90;
    } else if (x2 < 0 && y2 >= 0) {
        return -90;
    }

    // angle-theta = arctan( opposite / hypotenuse)
    // opposite = x2 - x1
    // hypotenuse = y2 - y1

    const dividend = x2 - x1;
    const divisor = y2 - y1;
    const quotient = dividend / divisor;
    return radiansToDegrees(Math.atan(quotient)) * -1;
};

export const getCanvasPosition = (event) => {
    // mouse position on auto-scaling canvas
    // https://stackoverflow.com/a/10298843/1232793
  
    const svg = document.getElementById('game-canvas');
    const point = svg.createSVGPoint();
  
    point.x = event.clientX;
    point.y = event.clientY;
    const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
    return { x, y };
};

export const getRandomArrayElement = (inputArray) => {
    return inputArray[Math.floor(Math.random() * inputArray.length)];
};

// create a random <length> digits positive whole number
// TODO refactor to allow negative values 
const randomNumberOfDigits = (length) => {
    const minOffset = Math.pow(10, length - 1);
    return Math.floor(Math.random() * (9 * minOffset)) + minOffset;
}

export const generateEquationElements = (operator) => {
    const level = 1; // define how difficult the problem will be (constant for now) 
    let x = randomNumberOfDigits(level); 
    const y = randomNumberOfDigits(level);
    let answer = 0;
    let bombColor = '';

    // define the answer depending on the operator
    switch (operator) {
      case '+':
        answer = x + y;
        bombColor = 'rgb(255, 228, 50)';
        break;
      case '-':
        answer = x - y;
        bombColor = 'rgb(50, 255, 50)';
        break;
      case 'x':
        answer = x * y;
        bombColor = 'rgb(255, 50, 50)';
        break;
      case '%':
        // to keep the arithmetic manageable, floating point answers are avoided
        // we can generate an expression by making the x value the product of x and y,
        // then reassigning x as the answer to the division problem
        const newX = x * y;
        answer = x;
        x = newX;
        bombColor = 'rgb(50, 50, 255)';
        break;
      default:
        // unrecognised operator (we should never get here)
        answer = null;
    }

    return { 
        xval: x,
        yval: y,
        result: answer,
        op: operator,
        color: bombColor, 
    };
}