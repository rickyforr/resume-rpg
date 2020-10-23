import React from "react";
import { SPRITE_HEIGHT, SPRITE_WIDTH } from "../../store/constants";
import "./map.css";

/**
 * Returns class name for different tyles based on type enum value.
 *
 * @param type    Type of tile to render (grass, rocks, etc.)
 */
const getTileSprite = (type) => {
  switch (type) {
    case 0:
      return "grass";
    case 1:
      return "trumpet";
    case 2:
      return "diploma";
    case 5:
      return "rock";
    case 6:
      return "tree";
    case 7:
      return "chest";
    case 8:
      return "goblin";
    default:
      return "grass";
  }
};

/**
 * Renders a tile for the game map.
 *
 * @param props    The component props.
 */
const MapTile = (props) => {
  return (
    <div
      className={`tile ${getTileSprite(props.value)}`}
      style={{
        height: SPRITE_HEIGHT,
        width: SPRITE_WIDTH,
      }}
    ></div>
  );
};

export default MapTile;
