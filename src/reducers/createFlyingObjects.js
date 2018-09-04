import { createInterval, 
  flyingObjectsStarterYAxis, 
  maxFlyingObjects, 
  flyingObjectsStarterPositions 
} from '../utils/constants.js';

/*
  * If the game is not running, return the current state
  * If the game is running, use creteInterval and maxFlyingObjects
      to decide if a new object needs to be created.
  * If the createNewObject is set to true use Math.floor to fetch     a number betweek 0 and 3 so that the location of the new        object can be determined.
  * Create newFlyingObject with the generated position
  * Return a new state object with the new flyingObject and           update the lastObjectCreatedAt value.
 */


export default (state) => {
  if(!state.gameState.starter) return state;

  const now = (new Date()).getTime();
  const { lastObjectCreatedAt, flyingObjects } = state.gameState;
  const createNewObject = (
    now - (lastObjectCreatedAt).getTime() > createInterval &&
    flyingObjects.length < maxFlyingObjects
  );
  console.log('test');
  if (!createNewObject) return state;

  const id = (new Date()).getTime();
  const predefinedPositions = Math.floor(Math.random() * maxFlyingObjects);
  const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPositions];
  const newFlyingObject = {
    position: {
      x: flyingObjectPosition,
      y: flyingObjectsStarterYAxis,
    },
    createdAt: (new Date()).getTime(),
    id,
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      flyingObjects: [
        ...state.gameState.flyingObjects,
        newFlyingObject,
      ],
      lastObjectCreatedAt: new Date(),
    }
  }
}