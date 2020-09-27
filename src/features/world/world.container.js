import { connect } from "react-redux";
import { addTiles } from "./world.actions";
import World from "./world.component";

const mapDispatchToProps = (dispatch) => ({
  addTiles: () => dispatch(addTiles()),
});

export const WorldContainer = connect(null, mapDispatchToProps)(World);
