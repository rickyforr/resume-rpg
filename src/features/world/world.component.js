import React, { useEffect } from "react";
import { MapContiner } from "../map/map.container";
import { PlayerContainer } from "../player/player.container";

/**
 * Renders the game world.
 *
 * @param props    The component props.
 */
const World = (props) => {
  useEffect(() => {
    props.addTiles();
  });

  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        margin: "20px",
      }}
    >
      <MapContiner />
      <PlayerContainer />
    </div>
  );
};

export default World;
