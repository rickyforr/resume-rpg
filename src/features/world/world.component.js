import React from "react";
import Map from "../map/map.component";
import { PlayerContainer } from "../player/player.container";

const World = (props) => {
  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        margin: "20px auto",
      }}
    >
      <Map></Map>
      <PlayerContainer />
    </div>
  );
};

export default World;
