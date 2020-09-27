import React from "react";
import { SPRITE_HEIGHT, SPRITE_WIDTH } from "../../store/constants";
import "./map.css";

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass";
    case 5:
      return "rock";
    case 6:
      return "tree";
  }
}

function MapTile(props) {
  return (
    <div
      className={`tile ${getTileSprite(props.value)}`}
      style={{
        height: SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
      }}
    ></div>
  );
}

export default MapTile;
