import { MOVE_OBJECTS, START_GAME } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';

const initialGameState = {
  started: true,
  kills: 0,
  lives: 5,
  flyingObjects: [],
  lastObjectCratedAt: new Date(),
};

const initialState = {
  angle: 45,
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    default:
      return state;
  }
}

export default reducer;