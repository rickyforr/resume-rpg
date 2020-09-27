import { tiles } from "../../data/map/1";

export const addTiles = () => {
  return {
    type: "ADD_TILE",
    payload: {
      tiles,
    },
  };
};
