import { connect } from "react-redux";
import Goblin from "./goblin.component";
import { handleMovement } from "./goblin.actions";

const mapStateToProps = (state) => {
  return {
    ...state.goblin,
  };
};

export const GoblinContainer = connect(mapStateToProps)(handleMovement(Goblin));
