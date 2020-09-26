import { connect } from "react-redux";
import { handleMovement } from "./player-movement";
import Player from "./player.component";

const mapStateToProps = (state) => {
  return {
    ...state.player,
  };
};

export const PlayerContainer = connect(mapStateToProps)(handleMovement(Player));
