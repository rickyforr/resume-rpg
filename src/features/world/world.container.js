import { connect } from "react-redux";
import { addTiles } from "./world.actions";
import World from "./world.component";

const mapStateToProps = (state) => ({
  player: state.player,
});

const mapDispatchToProps = (dispatch) => ({
  addTiles: () => dispatch(addTiles()),
});

export const WorldContainer = connect(mapStateToProps, mapDispatchToProps)(World);
