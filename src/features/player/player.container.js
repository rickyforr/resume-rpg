import { connect } from "react-redux";
import Player from "./player.component";

const mapStateToProps = (state) => {
  return {
    ...state.player,
  };
};

export const PlayerContainer = connect(mapStateToProps)(Player);
