import React from "react";
import walkSprite from "./goblin.png";

/**
 * Renders the goblin sprite.
 *
 * @param props    The props to be used by the component.
 */
const Goblin = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${walkSprite})`,
        backgroundPosition: props.spriteLocation,
        width: "50px",
        height: "60px",
      }}
    />
  );
};

export default Goblin;
