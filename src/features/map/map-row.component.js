import React from "react";
import MapTile from "./map-tile.component";

function MapRow(props) {
  return (
    <div className="row">
      {props.tiles.map((tile, i) => (
        <MapTile key={i} value={tile} />
      ))}
    </div>
  );
}

export default MapRow;
