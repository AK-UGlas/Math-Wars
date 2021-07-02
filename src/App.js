import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';

class App extends Component {
  componentDidMount() {
    const self = this;

    window.onresize = () => {
      const canvas = document.getElementById('game-canvas');
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }
    
    // interval for updating screen elements (look into requestAnimationFrame as more efficient replacement)
    setInterval(() => {
        self.props.moveObjects(self.canvasMousePosition);
    }, 16);
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event.clientX, event.clientY);
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        mouse={this.props.mousePosition}
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        trackMouse={event => (this.trackMouse(event))}
        toggleTarget={this.props.toggleTarget}
      />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,

  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    targetsDestroyed: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,

    bombObjects: PropTypes.arrayOf(PropTypes.shape({

      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,

      equation: PropTypes.shape({
        xval: PropTypes.number.isRequired,
        yval: PropTypes.number.isRequired,
        result: PropTypes.number.isRequired,
        op: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }).isRequired,

      id: PropTypes.number.isRequired,

    })).isRequired,

  }).isRequired,

  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  toggleTarget: PropTypes.func.isRequired,
};

export default App;