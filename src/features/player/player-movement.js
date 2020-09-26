import { SPRITE_WIDTH } from "../../store/constants";
import store from "../../store/store";

export const handleMovement = (player) => {
  const getNewPosition = (direction) => {
    const oldPos = store.getState().player.position;
    switch (direction) {
      case "WEST":
        return [oldPos[0] - SPRITE_WIDTH, oldPos[1]];
      case "EAST":
        return [oldPos[0] + SPRITE_WIDTH, oldPos[1]];
      case "NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_WIDTH];
      case "SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_WIDTH];
    }
  };

  const dispatchMove = (direction) => {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: getNewPosition(direction),
      },
    });
  };

  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        return dispatchMove("WEST");

      case 38:
        return dispatchMove("NORTH");
      case 39:
        return dispatchMove("EAST");
      case 40:
        return dispatchMove("SOUTH");
      default:
        console.log(e.keyCode);
    }
  };

  window.addEventListener("keydown", (e) => {
    handleKeyDown(e);
  });

  return player;
};
