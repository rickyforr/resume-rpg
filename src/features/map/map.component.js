import React from "react";
import MapRow from "./map-row.component";

/**
 * Renders the game map background and objects.
 *
 * @param props    The props to be used by the component.
 */
const Map = (props) => {
  return (
    <div
      style={{
        width: "1200px",
        height: "600px",
        backgroundColor: "#53821b",
        margin: "auto",
        border: "solid 2px white",
      }}
    >
      {props.tiles && props.tiles.map((row, i) => <MapRow key={i} tiles={row} />)}
    </div>
  );
};

export default Map;
