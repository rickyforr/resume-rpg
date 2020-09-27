import { tiles } from "../../data/map/1";

/**
 * Returns an action to add tile matrix to the game.
 */
export const addTiles = () => {
  return {
    type: "ADD_TILE",
    payload: {
      tiles,
    },
  };
};
