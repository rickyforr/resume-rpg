import React, { useEffect, useState } from "react";
import Modal from "../../components/modal/modal.component";
import { GoblinContainer } from "../goblin/goblin.container";
import { MapContainer } from "../map/map.container";
import { PlayerContainer } from "../player/player.container";
import trumpetImage from "./trumpet_zebra.png";
import geologyImage from "./geology.jpg";
import queensImage from "./queens.png";
import lighthouseImage from "./lighthouse_diploma.jpg";

/**
 * Renders the game world.
 *
 * @param props    The component props.
 */
const World = (props) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    props.addTiles();
  }, []);

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        margin: "20px",
      }}
    >
      <MapContainer />
      <GoblinContainer />
      <PlayerContainer />
      {props.player.position[1] === 240 && props.player.position[0] === 0 && showModal && (
        <Modal onClose={onClose} image={trumpetImage} title="Music" text={props.musicModalText} />
      )}
      {props.player.position[1] === 240 && props.player.position[0] === 210 && showModal && (
        <Modal onClose={onClose} image={queensImage} title="Bsc(Honours) Earth Science" text={props.universityModalText} />
      )}
      {props.player.position[1] === 240 && props.player.position[0] === 540 && showModal && (
        <Modal onClose={onClose} image={geologyImage} title="Geology" text={props.geologyModalText} />
      )}
      {props.player.position[1] === 180 && props.player.position[0] === 810 && showModal && (
        <Modal onClose={onClose} image={lighthouseImage} title="Web Developer" text={props.lighthouseLabsModalText} />
      )}
    </div>
  );
};

export default World;
