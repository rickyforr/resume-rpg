import { MAP_HEIGHT, MAP_WIDTH, SPRITE_HEIGHT, SPRITE_WIDTH } from "../../store/constants";
import store from "../../store/store";

/**
 * Controls goblin movement within the game.
 *
 * @param player    The player component.
 */
export const handleMovement = (player) => {
  const getNewPosition = (prevPos, direction) => {
    switch (direction) {
      case "WEST":
        return [prevPos[0] - SPRITE_WIDTH, prevPos[1]];
      case "EAST":
        return [prevPos[0] + SPRITE_WIDTH, prevPos[1]];
      case "NORTH":
        return [prevPos[0], prevPos[1] - SPRITE_HEIGHT];
      case "SOUTH":
        return [prevPos[0], prevPos[1] + SPRITE_HEIGHT];
    }
  };

  /**
   * Returns the offset in px for the sprite image in order to simulate player animation.
   *
   * @param direction    The direction of the move (EAST, WEST, NORTH, SOUTH).
   * @param walkIndex    The index used to set the player sprite image.
   */
  const getSpriteLocation = (direction, walkIndex) => {
    switch (direction) {
      case "EAST":
        return `-0px -0px`;
      case "WEST":
        return `-0px -0px`;
      case "NORTH":
        return `-0px -0px`;
      case "SOUTH":
        return `-${walkIndex * 21}px 0px`;
    }
  };

  /**
   * Returns the walk index as the player moves.
   * There are 4 different sprite images for each direction so index must be reset to 0 after it reaches 3.
   */
  const getWalkIndex = () => {
    const walkIndex = store.getState().goblin.walkIndex;
    return walkIndex >= 2 ? 0 : walkIndex + 1;
  };

  /**
   * Checks to see if the new position is within the bounds of the map.
   * Returns new position if within bounds and old position if move would be out of bounds.
   *
   * @param prevPos    The player's previous position.
   * @param newPos     The player's new position.
   */
  const observeBoundary = (newPos) => {
    return newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_WIDTH && newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_HEIGHT * 2;
  };

  /**
   * Checks to see if the new position is within the bounds of the map.
   * Returns new position if within bounds and old position if move would be out of bounds.
   *
   * @param prevPos    The player's previous position.
   * @param newPos     The player's new position.
   */
  const observeGameObjects = (newPos) => {
    const tiles = store.getState().map.tiles;
    console.log(tiles);
    const y = newPos[1] / SPRITE_HEIGHT;
    const x = newPos[0] / SPRITE_WIDTH;
    const nextTile = tiles[y][x];
    return nextTile < 5;
  };

  /**
   * Dispatches an action to move the player.
   *
   * @param newPos      The player's new position.
   * @param direction    The direction of the move (EAST, WEST, NORTH, SOUTH).
   */
  const dispatchMove = (direction, newPos) => {
    store.dispatch({
      type: "MOVE_GOBLIN",
      payload: {
        position: newPos,
        direction,
        walkIndex: getWalkIndex(),
        spriteLocation: getSpriteLocation(direction, getWalkIndex()),
      },
    });
  };

  /**
   * Checks if the new position will observe boundaries and game objects and calls method to move the player.
   *
   * @param direction    The direction of the move (EAST, WEST, NORTH, SOUTH).
   */
  const attemptMove = (direction) => {
    const prevPos = store.getState().goblin.position;
    const newPos = getNewPosition(prevPos, direction);

    if (observeBoundary(newPos)) {
      dispatchMove(direction, newPos);
    }
  };

  let i = 1;
  const repeatMove = () => {
    setInterval(() => {
      switch (i++ % 2) {
        case 0:
          attemptMove("WEST");
          break;
        case 1:
          attemptMove("EAST");
          break;
        case 2:
          attemptMove("SOUTH");
          break;
      }
    }, 1000);
  };

  repeatMove();
  return player;
};
