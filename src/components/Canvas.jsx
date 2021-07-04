import React from 'react';
import PropTypes from 'prop-types';
import CustomCursor from './CustomCursor';
import CurrentScore from './CurrentScore';
import Sky from './Sky';
import Cloud from './Cloud'; 
import Ground from './Ground';
import Turret from './Turret';
import TurretBase from './TurretBase';
import TurretShell from './TurretShell';
import Bomb from './Bomb';
import StartButton from './StartButton';

const Canvas = (props) => {

    // the SVG viewBox 
    const viewBox = [window.innerWidth / -2, 
                    100 - window.innerHeight, 
                    window.innerWidth, 
                    window.innerHeight];

    const cursorStyle = {
      cursor: props.gameState.started ? 'none' : 'default',
      zIndex: -1,
    }
    
    // render all bomb objects currently in play
    const bombs = props.gameState.bombObjects.map(bombObject => {
        return <Bomb 
            key={bombObject.id}
            equation={bombObject.equation}
            fallTime={bombObject.fallTime}
            position={bombObject.position}
            selected={bombObject.timeCreated === props.gameState.targetSelected}
            timeCreated={bombObject.timeCreated}
            toggleTarget={props.toggleTarget}
            />
    });

    return (
      <svg
        id="game-canvas"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMax none"
        onMouseMove={props.trackMouse}
        viewBox={viewBox}
        style={cursorStyle}
      >
          <defs>
              <filter id="shadow">
                  <feDropShadow dx="1" dy="1" stdDeviation="2" />
              </filter>
              <filter id="bombShadow">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="red"/>
              </filter>
              <linearGradient id="skyGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgb(193, 192, 199)"/>
                      <stop offset="27%" stopColor="rgb(144, 144, 153)"/>
                      <stop offset="57%" stopColor="rgb(71, 71, 78)"/>
                      <stop offset="100%" stopColor="rgb(43,42,42)"/>
              </linearGradient>
              <linearGradient id="bombGradient">
                      <stop offset="0%" stopColor="rgb(27,27,45)"/>
                      <stop offset="53%" stopColor="rgb(107,107,112)"/>
                      <stop offset="100%" stopColor="rgb(192,192,201)"/>
              </linearGradient>
          </defs>
          <Sky />
          <Cloud />
          <Ground />
          { props.gameState.started && bombs }
          <Turret rotation={props.angle} linePosition={props.gameState.targetPosition} dashVisible={props.gameState.started}/>
          <TurretBase />
          <TurretShell position={{x: 0, y: -100}} />
          
          <CurrentScore score={`Score: ${0}`}/>
          
          { !props.gameState.started &&
            <StartButton onClick={() => props.startGame()}/>
          }
          
          { props.gameState.started &&
            <CustomCursor position={props.mousePosition}/>
          } 
      </svg>
    );
};

Canvas.propTypes = {
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
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Canvas;