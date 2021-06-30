import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import Game from './containers/Game';

function App() {

    return (
      <Game />
    );
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
};

export default App;
