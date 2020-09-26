import React from "react";
import walkSprite from "./walkSprite.png";

const Player = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${walkSprite})`,
        backgroundPosition: "0 0",
        width: "30px",
        height: "60px",
      }}
    />
  );
};

export default Player;
