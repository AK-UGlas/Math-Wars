import { connect } from 'react-redux';
import App from '../App';
import { moveObjects, startGame, toggleTarget } from '../actions/index';

const mapStateToProps = state => ({
  angle: state.angle,
  mousePosition: state.mousePosition,
  gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
  startGame: () => {
      dispatch(startGame());
  },
  toggleTarget: (id) => {
      dispatch(toggleTarget(id));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;