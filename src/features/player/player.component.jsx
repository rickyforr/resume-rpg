import React from "react";
import walkSprite from "./walkSprite2.png";

/**
 * Renders the game sprite (player).
 *
 * @param props    The props to be used by the component.
 */
const Player = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${walkSprite})`,
        backgroundPosition: props.spriteLocation,
        width: "30px",
        height: "60px",
      }}
    />
  );
};

export default Player;
