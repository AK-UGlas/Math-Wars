import React from 'react';
import PropTypes from 'prop-types';
import { gameWidth, gameHeight } from '../utils/constants';

const CurrentScore = (props) => {
  const scoreStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 80,
    fill: 'rgb(255, 40, 40)',
  };

  return (
    <g filter="url(#shadow)">
      <text style={scoreStyle} x={gameWidth + 100} y={300 - gameHeight}>
        {props.score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.string.isRequired,
};

export default CurrentScore;