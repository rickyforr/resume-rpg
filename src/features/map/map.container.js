import { connect } from "react-redux";
import Map from "./map.component";

const mapStateToProps = (state) => ({
  tiles: state.map.tiles,
});

export const MapContainer = connect(mapStateToProps)(Map);
