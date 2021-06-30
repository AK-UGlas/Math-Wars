import React from 'react';
import PropTypes from 'prop-types';
import { gameHeight } from '../utils/constants';

const CurrentScore = (props) => {
  const scoreStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 80,
    fill: 'rgb(255, 60, 60)',
  };

  return (
    <g filter="url(#shadow)">
      <text style={scoreStyle} x="450" y={300 - gameHeight}>
        {props.score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.string.isRequired,
};

export default CurrentScore;